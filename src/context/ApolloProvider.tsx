import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import ContextoGlobal from "./ContextoGlobal";
import { ReactElement } from "react";
const clienr = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/api/graphql",
  }),
});
type propApolloProvider = {
  children: ReactElement;
};
const apolloProvider = ({ children }: propApolloProvider) => {
  return (
    <ContextoGlobal>
      <ApolloProvider client={clienr}>{children}</ApolloProvider>
    </ContextoGlobal>
  );
};

export default apolloProvider;
