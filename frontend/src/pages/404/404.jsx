import React from "react";
import CustomButton from "../../components/CustomButton/custom-button";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="page404">
      <div style={{ color: "black", position: "absolute", top: "5px" }}>
        <h2>Page not found</h2>
        <CustomButton onClick={handleClick}>Go Back</CustomButton>
      </div>
    </div>
  );
}

export default Page404;
