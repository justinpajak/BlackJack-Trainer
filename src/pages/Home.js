import "../styles/Login.css";
import Login from "../components/Login";

const Home = ({handleLogin, handleCreate}) => {

    return (
        <div className="home">
            <Login handleCreate={handleCreate} handleLogin={handleLogin}/>
        </div>
    );
}

export default Home;
