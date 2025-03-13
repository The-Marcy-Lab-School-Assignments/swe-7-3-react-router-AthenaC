// TODO:
// - Import the Link component from React Router
// - Make the button navigate the user back to the home page
import { Link } from "react-router-dom";

const GoHomeButton = () => {
  return (
    <button className="ui button fluid">
      <Link to="/">Go Home</Link>
    </button>
  );
};

export default GoHomeButton;
