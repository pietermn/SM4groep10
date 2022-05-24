import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import AppWrapper from "./layout/AppWrapper";
import "./App.scss";

function App() {
    return (
        <Router>
            <AppWrapper>
                <Routes />
            </AppWrapper>
        </Router>
    );
}

export default App;
