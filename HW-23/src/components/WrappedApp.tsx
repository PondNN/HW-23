import React from 'react'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'

function WrappedApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

export default WrappedApp