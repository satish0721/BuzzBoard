import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModels.js";

const orderRouter = express.Router();
orderRouter.post(
  "/create",
  expressAsyncHandler(async (req, res, next) => {
    try {
      const orderData = req.body;
      const order = await new Order(orderData);
      order.save();
      if (order) {
        return res.send({
          status: 201,
          message: "order placed successfully",
          orderInfo: order,
        });
      } else {
        return res.send({
          status: 400,
          message: "Something is wrong",
        });
      }
    } catch (err) {
      next(err);
    }
  })
);

orderRouter.post(
  "/update",
  expressAsyncHandler(async (req, res, next) => {
    try {
      const { order_id, delivery_date } = req.body;
      const order = await Order.findOneAndUpdate(
        { order_id: order_id },
        { $set: { delivery_date: delivery_date } },
        { new: true }
      );

      if (!order) {
        return res.send({
          status: 404,
          message: "Order not found",
        });
      } else {
        return res.send({
          status: 201,
          message: "delivery date updated",
          orderInfo: order,
        });
      }
    } catch (err) {
      next(err);
    }
  })
);

orderRouter.post(
  "/list",
  expressAsyncHandler(async (req, res, next) => {
    try {
      const orders = await Order.find({
        order_date: req.body.order_date,
      });

      if (orders.length) {
        return res.send({
          status: 201,
          message: "Order List",
          orderInfo: orders,
        });
      } else {
        return res.send({
          status: 400,
          message: "Product not Available..",
        });
      }
    } catch (err) {
      next(err);
    }
  })
);

orderRouter.post(
  "/search",
  expressAsyncHandler(async (req, res, next) => {
    try {
      const order = await Order.findOne({ order_id: req.body.order_id });
      if (order) {
        return res.send({
          status: 200,
          message: "Order Data",
          orderInfo: order,
        });
      } else {
        return res.send({
          status: 404,
          message: "product not available.",
        });
      }
    } catch (err) {
      next(err);
    }
  })
);

orderRouter.post(
  "/delete",
  expressAsyncHandler(async (req, res, next) => {
    try {
      const order = await Order.findOneAndDelete({
        order_id: req.body.order_id,
      });
      if (order) {
        return res.send({
          status: 200,
          message: "product deleted",
          orderInfo: order,
        });
      } else {
        return res.send({
          status: 404,
          message: "product not available.",
        });
      }
    } catch (err) {
      next(err);
    }
  })
);

export default orderRouter;
