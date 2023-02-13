import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://386vb5076m.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://ik1szakb0k.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: `7HV7U3eQTqudmJ9GaJEexSjPJC9qzbtLCZfkbRK7uvZj`, // <---- API key
})

export default function useFDA() {
  return (
    <div>useFDA</div>
  )
}
