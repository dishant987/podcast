import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.jsx'
import { ModeToggle } from './components/mode-toggle.jsx'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    {/* <ModeToggle/> */}

    <App />
    <Toaster />
  </ThemeProvider>

)
