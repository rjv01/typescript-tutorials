import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Box() {
    const theme = useContext(ThemeContext);
    return (
        <div className="min-h-screen flex  items-center justify-center">
            <div
                style={{
                    backgroundColor: theme.success.main,
                    color: theme.success.text,
                    padding: '1rem',
                    borderRadius: '8px',
                    fontSize:`20px`,
                }} 
            >
                <h1>Success Theme Content</h1>
            </div>
            <div
                style={{
                    backgroundColor: theme.error.main,
                    color: theme.error.text,
                    padding: '1rem',
                    borderRadius: '8px',
                    fontSize:`20px`,
                    margin:'22px'
                }} 
            >
                <h1>Error Theme Content</h1>
            </div>
        </div>
    )
}