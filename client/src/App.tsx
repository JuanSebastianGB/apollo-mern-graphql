import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ListProjects from './pages/projects/ListProjects';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/projects" />} />
          <Route path="/projects" element={<ListProjects />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};
export default App;
