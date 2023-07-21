import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<h1>404 Not found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}