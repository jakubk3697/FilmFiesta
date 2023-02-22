import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import '@fontsource/roboto'
import './assets/styles/main.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
        <ReactQueryDevtools />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
)
