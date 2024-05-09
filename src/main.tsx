import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageNotFound } from './pages/PageNotFound/page-not-found.tsx';
import { AxGrid } from './pages/Grid/ax-grid.tsx';
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PageNotFound />,
    },
    {
        path: '/grid',
        element: <AxGrid />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>
);
