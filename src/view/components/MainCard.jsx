import styled from "styled-components";

const MainCard= styled.div`
  position: relative;
  display: flex;
  wrap-option: wrap;
  flex-direction: column;
  align-items: center;
  align-self: center;
  height: 70vh;
  -webkit-font-feature-settings: normal;
  border-radius: 50px;
  margin: 0 1rem 0 0;
  background-color: #ffffff7d;
  margin: 2rem;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
  width: calc(100% - 4rem);
  box-sizing: border-box;
  color: rgba(0,0,0,0.8);
  backdrop-filter: blur(33px);
  background-blend-mode: overlay;
  overflow: auto ;
  
`;


const TranslucentNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  background-color: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(40px);
  background-blend-mode: overlay;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(33px);
  background-blend-mode: overlay;
  margin: 0 1rem 0 0;
`;





export {MainCard, TranslucentNav};