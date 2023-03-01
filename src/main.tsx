import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from 'styled-components'
import theme from './tokens/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<>Rota interna principal</>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
)
