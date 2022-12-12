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

1. API for CRUD-operations with wishes-cards.
2. API for CRUD-operations with users. It'll help you to implement simple authorization.

- #### Architecture of Application

The application is built for use within the MVC-pattern.

1. In the 'models' directory you can find entry data schemas.

2. There are two classes for each data schema to handle CRUD on the server side. These are Controller classes, Service classes.

- #### API

To use API you have to create an account at mongodb.com and create a cluster. Then deploy this app and add DB_URL with your password and PORT as environmental variables.

- POST https://wishboard-backend-ianv.vercel.app/api/cards - CREATE CARD
- GET https://wishboard-backend-ianv.vercel.app/api/cards - GET ALL CARDS
- GET https://wishboard-backend-ianv.vercel.app/api/cards:id - GET A CARD
- PUT https://wishboard-backend-ianv.vercel.app/api/cards - UPDATE A CARD
- DELETE https://wishboard-backend-ianv.vercel.app/api/cards - DELETE A CARD

CARD:

```json
  {
      {
        "author": "Eugene",
        "title": "New Year wishing",
        "text": "I wish ya'll Merry Christmas and a Happy New Year!",
        "likes": 0
      }
  }
```

USER:

```json
{
  {
    "name":"Eugene",
    "password":"********",
    "sex":"male",
    "age":"26"
  }
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm run dev`

Runs the app in the development mode.\
The app will reload when you make changes.
