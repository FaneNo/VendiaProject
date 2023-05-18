import { useNavigate } from "react-router-dom";
import userRole from "./nav";

const route = () => {
  const navigate = useNavigate();
  
  console.log("UserRole:", userRole); // Add this console.log statement to check the value of userRole
  
  if (userRole === "doctor") {
    if (window.location.pathname === "/fda") {
      navigate("/"); // Redirect to the home page for doctors trying to access the "/fda" page
    }
  }
};

export default route;
