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

const PlayButton = () => {
    return (
        <StyledPlayButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                <g fill="none" fillRule="evenodd">
                    <path fill="#FFF" d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 86.6c-21.3 0-38.6-17.3-38.6-38.6S28.7 3.4 50 3.4s38.6 17.3 38.6 38.6-17.3 38.6-38.6 38.6z" />
                    <path fill="#FFF" d="M50 10.8c-21.3 0-38.6 17.3-38.6 38.6S28.7 91.4 50 91.4s38.6-17.3 38.6-38.6-17.3-38.6-38.6-38.6z" />
                    <path fill="#FFF" d="M50 50c-21.3 0-38.6 17.3-38.6 38.6S28.7 91.4 50 91.4s38.6-17.3 38.6-38.6-17.3-38.6-38.6-38.6z" />
                    <path fill="#FFF" d="M50 90.2c-21.3 0-38.6-17.3-38.6-38.6S28.7 10.8 50 10.8s38.6 17.3 38.6 38.6-17.3 38.6-38.6 38.6z" />
                </g>
            </svg>
        </StyledPlayButton>
    );
}

const AnimeCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(73, 73, 73, 0.49);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;

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

const AnimeCardContainer = styled.div`
    position: relative;
    width: 150px;
    height: 200px;
    display: flex;
    margin-left: 10px;
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





const AnimeOption = (props) => {

    return (
        <AnimeCardContainer>
            <AnimeCard>
                <AnimeCardContent>
                    <AnimeImage src={props.anime.image} alt={props.anime.title} />
                    <AnimeTitle>{props.anime.title}</AnimeTitle>
                </AnimeCardContent>
            </AnimeCard>
        </AnimeCardContainer>


    );
};

export default AnimeOption;