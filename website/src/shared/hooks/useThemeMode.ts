import { useContext } from "react";
import { ThemeContext } from "@app/contexts/ThemeContext.tsx";

export const useThemeMode = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useThemeMode must be used within ThemeModeProvider');

    return context;
};
