import { ThumbUpSharp } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThumbUpSharp />
      Order has been created successfully. Your order number is 232 Successfull.
      Your order is being prepared...
      <Link style={{ color: "black", textDecoration: "none" }} to="/">
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;
