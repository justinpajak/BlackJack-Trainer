import {useState} from 'react';
import "../styles/Login.css";
import Login from "../components/Login";

const Home = ({handleLogin, handleCreate}) => {

    const [create, setCreate] = useState(false);

    const createUser = () => {
        setCreate(!create);
    }

    return (
        <div className="home">
            <Login create={create} handleCreate={handleCreate} handleLogin={handleLogin} createUser={createUser}/>
        </div>
    );
}

export default Home;
