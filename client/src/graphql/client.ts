import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client";

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: "Bearer ey123",
    },
  });
  return forward(operation);
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    new HttpLink({uri: "http://localhost:4000/graphql"}),
  ]),
  cache: new InMemoryCache(),
});
