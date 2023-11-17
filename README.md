Steps to run code

1. main file is server.js
2. npm install
3. Go to file path
4. cd backend
5. npm start

# API list

1. http://localhost:3000/orders/create
   methode : post
   type: JSON
   body:
   {
   "order_id": "123",
   "item_name":"Samsung Mobile",
   "cost":"400",
   "order_date":"2020/12/01",
   "delivery_date":"2020/12/11"
   }

2. http://localhost:3000/orders/update
   methode : post
   type: JSON
   body:
   {
   "order_id": "123",
   "delivery_date":"2020/12/13"
   }

3. http://localhost:3000/orders/list
   methode : post
   type: JSON
   body:
   {
   "order_date":"2020/12/01"
   }

4. http://localhost:3000/orders/search
   methode : post
   type: JSON
   body:
   {
   "order_id": "123"
   }

5. http://localhost:3000/orders/delete
   methode : post
   type: JSON
   body:
   {
   "order_id": "123"
   }
