# react-todo-app :bookmark_tabs:	
Two versions of a simple todo list app, one built with pure React and the other applying Redux.


## Installation (API)

First of all, make sure you have [Node](https://nodejs.org) and [Mongodb](https://www.mongodb.com/) installed in your machine. And don't forget to create the 'data/db' folder with is required by Mongo.

First of all you need to initiate mongodb's service:
```
mongod
```

Then, you need to go inside the '/api' folder and install all dependencies through npm:
```
npm install -d
```

Finally, start the api server:
```
npm run api
```

For more options check the 'scripts' section in package.json.

## Installation (APP)

First of all you need to install all dependencies through npm, so, make sure you're inside the '/app' folder and run:
```
npm install -d
```

After installing all dependencies you just need to choose the app you want to run, the simple one or the one with redux. To run the simple version:
```
npm run server
```
or

```
npm run server:redux
```
to run the Redux version.

## License

MIT @ Neri Bez Fontana
