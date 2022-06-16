import React, {Component} from 'react';
import styled from "styled-components";
import './style/Homepage.css';
import Particles from "react-tsparticles";
import particlesConfig from "../controller/particlesConfig";
import type { Engine } from "tsparticles-engine";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
import SelectSearch from "react-select-search";
import AnimeOption from "./AnimeOption";
import background from '../images/background.jpg'
import animeList from "../controller/animeList";
import Popup from 'reactjs-popup';
import WatchVideo from "./WatchVideo";

class Homepage extends React.PureComponent<IProps> {
    constructor(props) {
        super();
        this.state = {
            selectedAnime: null,
            popupOpen: false,
        }
    }

    async customInit(engine: Engine): Promise<void> {
        // this adds the preset to tsParticles, you can safely use the
        await loadBigCirclesPreset(engine);
    }

    render() {



        const AnimeCatalog = styled.div`
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          -webkit-font-feature-settings: normal;
        `;

        const AnimeCatalogTitle = styled.h1`
          position: relative;
            font-size: 3em;
            color: ghostwhite;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            text-align: center;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 0;
            margin-right: 0;
            padding-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            -webkit-text-fill-color: ghostwhite;
            -webkit-font-feature-settings: normal;
        `;

        const ResultPlace= styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80%;
          height: 100vh;
          -webkit-font-feature-settings: normal;
          border-radius: 50px;
          margin: 0 1rem 0 0;
          background-color: #ffffff7d;
          margin: 2rem;
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
          box-sizing: border-box;
          width: calc(100% - 4rem);
          color: rgba(0,0,0,0.8);
          backdrop-filter: blur(33px);
          background-blend-mode: overlay;
        `;

        const ResultPlaceTitle = styled.h3`
          
            font-size: 2em;
            font-family: 'Helvetica Neue', sans-serif;
            font-weight: bold;
            text-align: center;
            margin-top: 10;
            margin-bottom: 0;
            margin-left: 0;
            margin-right: 0;
            padding-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            -webkit-font-feature-settings: normal;
        `;

        const CatalogContainer = styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            -webkit-font-feature-settings: normal;
        `;


        return (
            // create a page with dark background


                <AnimeCatalog style={{filter: this.state.popupOpen ? "blur('5px')" : null}} >
                    <div>
                        <Particles id="tsparticles" options={{preset: "bigCircles"}} init={this.customInit} />

                    </div>
                    <AnimeCatalogTitle>Anime Catalog</AnimeCatalogTitle>
                    <ResultPlace className="catalog">
                        <ResultPlaceTitle>
                            Hei!, Search your favorite anime
                        </ResultPlaceTitle>
                        <div>

                            <form action="/search" method="GET" className="search-container">

                                <input type="text" name="search" placeholder="Search..." className="search-input"/>
                                <a href="#" className="search-btn">
                                    <i className="fas fa-search"></i>
                                </a>
                            </form>
                        </div>

                        <div className="catalog-container">
                            <CatalogContainer>
                            {
                                animeList.map(anime => (
                                    <a href="#" onClick={() => this.setState({popupOpen: true ,selectedAnime: anime.videosrc})}>
                                        <AnimeOption key={anime.id} anime={anime}>
                                        </AnimeOption>
                                    </a>
                                ))
                            }


                            </CatalogContainer>

                        </div>

                    </ResultPlace>
                    <WatchVideo open={this.state.popupOpen} toggleModal={()=>{this.setState({popupOpen: !this.state.popupOpen})}} videosrc={this.state.selectedAnime}/>
                </AnimeCatalog>



        );
    }
}

export default Homepage;