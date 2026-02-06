import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils";


export default function ThemeToggle() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load saved theme
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
        } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";

        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
        setIsDarkMode(!isDarkMode);
    };
    
    return(
        <>
            <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none"
            )}>
                {isDarkMode ?(<Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/> )}
            </button>
        </>
    )
}