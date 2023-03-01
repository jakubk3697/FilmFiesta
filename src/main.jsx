import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/pages/App'
import '@fontsource/roboto'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, createBrowserRouter, RouterProvider } from "react-router-dom";
import './assets/styles/main.scss';
import { ErrorPage } from './components/pages/ErrorPage';
import { MainContent } from './components/MainContent';
import { MoviePage } from './components/pages/MoviePage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainContent /> },
      {
        path: 'movies/:movieGenre',
        element: <MainContent />,
      },
      {
        path: 'movie/:movieId',
        element: <MoviePage />,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
      </RouterProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)
