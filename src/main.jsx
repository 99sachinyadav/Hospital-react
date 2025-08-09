import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,  } from "react-router-dom";
import AppContextProvide from './Context/Context.jsx';
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<AppContextProvide>

<App />
</AppContextProvide>
</BrowserRouter>

)
