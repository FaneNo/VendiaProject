import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Signout from "./logout";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

function Navbar() {
  const [userRole, setUserRole] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserRole(userData.role);
        }
      } else {
        setUserRole("");
      }
    });

    return unsubscribe;
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <nav className="homeNav">
        <div className="homeImg">
          <Link to="/">
            <img
              className="vendiaLogo"
              src={require("../vendiaLogo.png")}
              alt="Vendia Logo"
            />
          </Link>
        </div>

        <div className="titleName">
          <Link to="/" className="titleN">
            Vendia Care
          </Link>
        </div>
        <ul className="navLinks">
          <li>
            {userRole === "doctor" && (
              <>
                <li>
                  <Link to="/doctor">Doctor</Link>
                </li>
                <li>
                  <Link to="/new">New Patient</Link>
                </li>
                {["/fda", "/admin", "/bavaria", "/createDrug"].includes(window.location.pathname) && navigate("/")}
              </>
            )}
            {userRole === "fda" && (
                  <>
                    <Link to="/fda">FDA</Link>
                    {["/doctor", "/new", "/admin", "/bavaria", "/createDrug"].includes(
                      window.location.pathname
                    ) && navigate("/")}
                  </>
                )}
            {userRole === "admin" && (
                  <>
                    <Link to="/admin">Admin</Link>
                    {["/doctor", "/new", "/fda", "/bavaria", "/createDrug"].includes(
                      window.location.pathname
                    ) && navigate("/")}
                  </>
                )}
            {userRole === "bavaria" && (
                  <>
                    <Link to="/bavaria">Bavaria</Link>
                    {["/doctor", "/new", "/admin", "/fda", ].includes(
                      window.location.pathname
                    ) && navigate("/")}
                  </>
                )}
          </li>
          {userRole === "" && (
            <>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {userRole !== "" && (
            <li>
              <Signout />
            </li>
          )}
        </ul>
        <div className="dropdown">
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              
            >
              <MenuIcon className="menuIcon" fontSize="large"  />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}

            >
              <MenuItem onClick={handleClose}>
                <li>
                  {userRole === "doctor" && (
                    <>
                      <li>
                        <Link
                          to="/doctor"
                          style={{ textDecoration: "none", color: "#004F98" }}
                        >
                          Doctor
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/new"
                          style={{ textDecoration: "none", color: "#004F98" }}
                        >
                          New Patient
                        </Link>
                      </li>
                    </>
                  )}
                  {userRole === "fda" && (
                    <Link
                      to="/fda"
                      style={{ textDecoration: "none", color: "#004F98" }}
                    >
                      FDA
                    </Link>
                  )}
                  {userRole === "admin" && (
                    <Link
                      to="/admin"
                      style={{ textDecoration: "none", color: "#004F98" }}
                    >
                      Admin
                    </Link>
                  )}
                  {userRole === "bavaria" && (
                    <Link
                      to="/bavaria"
                      style={{ textDecoration: "none", color: "#004F98" }}
                    >
                      Bavaria
                    </Link>
                  )}
                </li>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {userRole === "" && (
                  <>
                    <li>
                      <Link to="/login">Log in</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {userRole !== "" && (
                  <li>
                    <Signout />
                  </li>
                )}
              </MenuItem>
            </Menu>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
