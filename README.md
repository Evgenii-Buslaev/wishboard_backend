# Wishboard Application (backend)

## Desctiption

This is a Backend-part of my new application for creating wishes cards.

- #### Technologies
  - Node.js
  - Express.js
  - JavaScript (ES6)
  - MongoDB, Mongoose
- #### Dev-tools
  - nodemon

* #### App features

1. API for CRUD-operations with wishes-cards. Also, you can upload file. A card will be returned with static file link.

2. API for CRUD-operations with users. It'll help you to implement simple authorization.

- #### Architecture of Application

The application is built for use within the MVC-pattern.

1. In the 'models' directory you can find entry data schemas.

2. There are two classes for each data schema to handle CRUD on the server side. These are Controller classes, Service classes.

- #### Deployment

  You can use my API for your app by the following links:

  - POST https://wishboard-backend-ianv.vercel.app/api/cards - CREATE CARD
  - GET https://wishboard-backend-ianv.vercel.app/api/cards - GET ALL CARDS
  - GET https://wishboard-backend-ianv.vercel.app/api/cards:id - GET A CARD
  - PUT https://wishboard-backend-ianv.vercel.app/api/cards - UPDATE A CARD
  - DELETE https://wishboard-backend-ianv.vercel.app/api/cards - DELETE A CARD

Thank you for checking the app out!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
