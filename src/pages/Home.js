import NewUser from "../components/NewUser.js";
import "../styles/Home.css";

const Home = ({handleSubmit}) => {

    return (
        <div className="home">
            <NewUser handleSubmit={handleSubmit}/>
        </div>
    );
}

export default Home;
