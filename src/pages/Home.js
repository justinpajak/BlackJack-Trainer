import "../styles/Home.css";
import NewUser from "../components/NewUser";
import ReturningUser from "../components/ReturningUser";

import { useEffect, useState } from "react";

const Home = ({handleSubmit}) => {
    const [returningUser, setReturningUser] = useState(true); 

    return (
        <div className="home">
            {returningUser ? 
                <ReturningUser handleSubmit={handleSubmit}/> :
                <NewUser returningSubmit={handleSubmit}/>}
        </div>
    );
}

export default Home;
