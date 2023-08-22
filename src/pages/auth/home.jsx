import React from 'react';
import { useAuth } from "../../helper/auth.jsx";

const Home = () => {

    const [auth, setAuth] = useAuth();




    return (
        <div>
            <pre>
                {JSON.stringify(auth , null , 4)}
            </pre>

        </div>
    );
};

export default Home;