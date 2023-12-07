import React from "react";
import "./LogoutPopup.css";
import { NavLink, useNavigate } from "react-router-dom";

interface LogoutPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogoutPopup: React.FC<LogoutPopupProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/signin");
  };
  return isOpen ? (
    <div className="logout-popup">
      <div className="popup-content">
        <p className="popup-message">Are you sure you want to logout?</p>
        <button onClick={onClose} className="lo-button">
          Cancel
        </button>
        <button onClick={handleLogout} className="lo-button">
          Logout
        </button>
      </div>
    </div>
  ) : null;
};

export default LogoutPopup;
