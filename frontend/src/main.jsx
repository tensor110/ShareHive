import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {Provider} from "react-redux";
import store from './store/index.js'
import 'react-toastify/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>,
  </NextUIProvider>,
)
