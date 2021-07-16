import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  const { data, error } = useQuery(
    gql`
      query {
        echoOdd(odd: 2)
      }
    `
  );

  return (
    <div className="App">
      <div>Netowrk error: </div>
      <div>{error?.networkError?.message}</div>
      <br />
      <div>GraphQLErrors:</div>
      <ul>
        {error?.graphQLErrors.map((e, i) => (
          <li key={i}>{e.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
