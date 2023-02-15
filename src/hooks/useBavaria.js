import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://o7e69t4snc.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://6t1yugo6jk.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: `7FDXtSjTZkoyJFreAorUnYeRBJvqsVsMXPfe7znrYr8F`, // <---- API key
})

const {entities} = client;

const useBavaria = () => {
  return {entities};
};

export default useBavaria();
