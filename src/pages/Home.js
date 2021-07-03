import NewUser from "../components/NewUser.js";
import "../styles/Home.css";

const Home = ({handleSubmit, handleLogin}) => {

    return (
        <div className="home">
            <NewUser handleSubmit={handleSubmit} handleLogin={handleLogin}/>
        </div>
    );
}

export default Home;
