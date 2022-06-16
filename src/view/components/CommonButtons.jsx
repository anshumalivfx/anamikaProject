import styled from "styled-components";

// create curved button
const CurvedButton = styled.button`
    border-radius: 50px;
    width: 150px;
    height: 50px;
  margin: 5px;
  background-color: #ffffff7d;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
  box-sizing: border-box;
  padding: 1rem;
  background-blend-mode: overlay;
    &:hover {
        background-color: #e5e5e5;
        margin: 20px;
    }
`;

export default CurvedButton;
