import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./GlobalStyle";
import './reset.css';
import Router from "./shared/Router";

const App =() => {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
        <Router />
    </QueryClientProvider>
  );
}

export default App;