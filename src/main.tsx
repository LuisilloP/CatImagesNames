import './style.css'
import React from "react"
import App from "./App"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
const selector = document.querySelector("#app") as HTMLElement
const root = createRoot(selector)

root.render(
    <BrowserRouter><App /></BrowserRouter>)