import './styles/app.scss'

import { ComingSoon } from "@pages/coming-soon";
import { useTheme } from "@mui/material";

function App() {
    const theme = useTheme();

    return (
        <div className="App">
            <header className="App-header">
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"/>
            </header>
            <main className="App-main" style={{
                background: theme.palette.background.default,
            }}>
                <ComingSoon/>
            </main>
        </div>
  );
}

export default App;
