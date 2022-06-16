import React from 'react';
import styled from "styled-components";






const StyledPlayButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
    &:active {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
`;



const AnimeCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(47, 47, 47, 0.49);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(33px);
  background-blend-mode: overlay;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(33px);
  background-blend-mode: overlay;
  margin: 0 1rem 0 0;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const AnimeImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`;

const AnimeTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    padding: 0.5rem;
    color: #000;
`;

const AnimeDescription = styled.p`
    font-size: 1rem;
    margin: 0;
    padding: 0.5rem;
    color: #000;
`;


// create a red play button

const AnimeCardContainer = styled.div`
    position: relative;
    width: 150px;
    justify-content: space-between;
  margin-left: 10px;
    height: 200px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const AnimeCardContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
`;





const AnimeCardNew = (props) => {

    return (
        <AnimeCardContainer>
            <AnimeCard>
                <AnimeCardContent>
                    <AnimeImage src={props.image} alt={props.title} />
                    <AnimeTitle>{props.title}</AnimeTitle>
                </AnimeCardContent>
            </AnimeCard>
        </AnimeCardContainer>


    );
};

export default AnimeCardNew;