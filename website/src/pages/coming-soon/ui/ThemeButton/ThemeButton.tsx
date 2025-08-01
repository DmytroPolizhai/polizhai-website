import './theme-button.scss'
import { useThemeMode } from "@shared/hooks/useThemeMode.ts";
import { useState } from "react";

type ThemeButtonProps = {
    title?: string;
    lightIcon: string;
    darkIcon: string;
};

export const ThemeButton = ({ title, lightIcon, darkIcon }: ThemeButtonProps) => {
    const { toggleTheme, mode } = useThemeMode(); // Assume this gives "light" | "dark"
    const [icon, setIcon] = useState<string>(mode === "dark" ? darkIcon : lightIcon);

    const handleClick = () => {
        toggleTheme();
        setIcon(prev => (prev === lightIcon ? darkIcon : lightIcon));
    };

    return (
        <button className="btn border-hover" onClick={handleClick}>
            <img src={icon} className="icon" alt='icon' />
            {title && <span>{title}</span>}
        </button>
    );
};