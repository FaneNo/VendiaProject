import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://ds9g375nfa.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://faydicmw3a.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: `6DSJaca74A3tdUk5V9Hmb8Ra4qYSkkB4pSeTyjd9mHFr`, // <---- API key
})

const {entities} = client;

const useJaneHopkins = () => {
    return {entities};
};

export default useJaneHopkins;
