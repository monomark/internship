import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { RouterProvider, UserProvider } from "./providers";

Amplify.configure(awsconfig);

function App() {
  return (
    <UserProvider>
      <RouterProvider />
    </UserProvider>
  );
}

export default App;
