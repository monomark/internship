import Amplify from "aws-amplify";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import awsconfig from "./aws-exports";
import { RouterProvider, UserProvider } from "./providers";

Amplify.configure(awsconfig)
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
