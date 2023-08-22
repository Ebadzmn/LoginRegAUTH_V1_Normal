
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Register from "./pages/auth/register.jsx";
import Home from "./pages/auth/home.jsx";
import Login from "./pages/auth/login.jsx";

//bootstrap css import
import 'bootstrap/dist/css/bootstrap.min.css';

//bootstrap js import
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="*" element={<h1>404 Not Found</h1>}/>
                <Route path= "/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
