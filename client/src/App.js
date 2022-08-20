
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import DisPlayData from './DisplayData';


function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <ApolloProvider client={client}>

       <div className='App'>
          <DisPlayData/>
       </div>
    </ApolloProvider>
   
  );
}

export default App;
