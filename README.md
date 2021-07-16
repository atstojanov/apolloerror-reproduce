Client and server to reproduce an issue with ApolloError.


1. start server:
```
cd ./server
yarn
yarn start
```

2. Open second terminal and start client:
```
cd ./client
yarn
yarn start
```

The page shows the errors from the returned error object.
The errors from the `onError` link are visible in the console.