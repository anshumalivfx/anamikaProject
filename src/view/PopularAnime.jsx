import React, {Component} from 'react';
import {MainCard} from "./components/MainCard";
import PopularAnimeList from "../controller/PopularAnimeList";
import AnimeOption from "./AnimeOption";
import AnimeCardNew from "./components/AnimeCard";
import animeList from "../controller/animeList";
import styled from "styled-components";



class PopularAnime extends Component {

    render() {

        const PopularTitle = styled.h1`
          font-size: 2.5rem;
          font-weight: bold;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          color: #2d2d2d;
          margin: 10px;
            text-align: center;
          
        `;


        const animeCards = []
        // sort the list by popularityRating
        animeList.sort((a, b) => {
            return b.popularityRating - a.popularityRating
        }
        ).map((anime, index) => {
            animeCards.push(<AnimeOption key={index} anime={anime}/>)
        }
        );
        return (

            <MainCard style={{display: 'flex'}} >
                <PopularTitle>Popular Anime</PopularTitle>
                <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap'}}>
                    {animeCards.map((anime, index) => {
                        return anime
                    })}
                </div>

            </MainCard>
        );
    }
}

export default PopularAnime;