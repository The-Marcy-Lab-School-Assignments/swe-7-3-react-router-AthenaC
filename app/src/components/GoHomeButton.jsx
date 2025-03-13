// TODO:
// - Import the Link component from React Router
// - Make the button navigate the user back to the home page
import { useNavigate, Link } from "react-router-dom";

const GoHomeButton = () => {
  const navigate = useNavigate();
  return (
    <button className="ui button fluid">
      <Link to={navigate("/")}>Go Home</Link>
    </button>
  );
};

export default GoHomeButton;
