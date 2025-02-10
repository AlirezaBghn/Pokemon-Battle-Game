import Cookies from "js-cookie";
import { useAuth } from "../App";

const SignOutButton = () => {
  const { setIsAuthenticated } = useAuth();

  const handleSignOut = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    window.location.href = "/signin";
  };

  return (
    <div className="absolute top-2 right-2">
      <button
        onClick={handleSignOut}
        className="bg-green-600 hover:bg-green-500 text-black font-bold py-2 px-4 rounded shadow-lg"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutButton;
