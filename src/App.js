import Login from "./components/login/Login";
import {useEffect, useState} from "react";
import Dashboard from "./components/dashboard/Dashboard";
import {getCookie} from "./utils";
import Register from "../src/components/register/Register.js"
// import {Switch} from "antd";
import { useNavigate, Routes, Route} from "react-router-dom"

const App = (props) => {
    const [isLogin, setLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getCookie();
        if (token != null) {
            setLogin(true);
            navigate("/dashboard");
        }
    }, [isLogin, navigate])

    return (
        <div className={"body"}>
            {/* {isLogin ? <Navigate to="/dashboard"/> : <Navigate to="/auth"/>} */}
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/register" element = {<Register/>}></Route>
                </Routes>
        </div>
    );
}

export default App;
