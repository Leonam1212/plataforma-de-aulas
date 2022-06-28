import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oo9ih80hox01xnb4mv02xt/master",
  cache: new InMemoryCache(),
});
