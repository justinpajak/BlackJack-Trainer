import NewUser from "../components/NewUser.js";
import "../styles/Home.css";

const Sign_Up_Page = ({handleSubmit}) => {

    return (
        <div className="sign_up">
            <NewUser handleSubmit={handleSubmit}/>
        </div>
    );
}

export default Sign_Up_Page;