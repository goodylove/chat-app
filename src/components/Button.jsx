import GoogleButton from "react-google-button";

function Button({ onClick }) {
  return (
    <GoogleButton
      onClick={onClick}
      style={{ width: "153px", fontSize: "10px", fontWeight: "bold" }}
    />
  );
}

export default Button;
