import React, {Component} from 'react';
import styled from "styled-components";
import './style/Homepage.css';
import Particles from "react-tsparticles";
import particlesConfig from "../controller/particlesConfig";
import type {Engine} from "tsparticles-engine";
import {loadBigCirclesPreset} from "tsparticles-preset-big-circles";
import SelectSearch from "react-select-search";
import AnimeOption from "./AnimeOption";
import background from '../images/background.jpg'
import animeList from "../controller/animeList";
import {Switch, Route, Link} from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';
import Popup from 'reactjs-popup';
import WatchVideo from "./WatchVideo";
import ContactUs from "./ContactUs";
import PopularAnime from "./PopularAnime";
import {TranslucentNav} from "./components/MainCard";
import CurvedButton from "./components/CommonButtons";
import About from "./About";

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

        const ResultPlace = styled.div`
          position: relative;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          align-self: center;
          height: 100vh;
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
          color: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(33px);
          background-blend-mode: overlay;
        `;

        const ResultPlaceTitle = styled.h3`
          font-size: 2em;
          font-family: 'Helvetica Neue', sans-serif;
          font-weight: bold;
          text-align: center;
          margin-top: 10px;
          margin-bottom: 0;
          margin-left: 0;
          margin-right: 0;
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          -webkit-font-feature-settings: normal;
          overflow: hidden;
        `;

        const CatalogContainer = styled.div`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          -webkit-font-feature-settings: normal;
        `;


        return (
            // create a page with dark background
            <AnimeCatalog style={{filter: this.state.popupOpen ? "blur('5px')" : null}}>
                <div>
                    <Particles id="tsparticles" options={{preset: "bigCircles"}} init={this.customInit}/>

                </div>
                <AnimeCatalogTitle>Animeworld</AnimeCatalogTitle>
                <TranslucentNav>
                    <Link to="/">
                        <CurvedButton>
                            Home
                        </CurvedButton>
                    </Link>

                    <Link to="/popular">
                        <CurvedButton>
                            Popular
                        </CurvedButton>
                    </Link>

                    <Link to="/contactus">
                        <CurvedButton>
                            Contact Us
                        </CurvedButton>
                    </Link>
                    <Link to="/about">
                        <CurvedButton>
                            About
                        </CurvedButton>
                    </Link>
                </TranslucentNav>
                <AnimatedSwitch
                    atEnter={{opacity: 0}}
                    atLeave={{opacity: 1}}
                    atActive={{opacity: 1}}
                    mapStyles={styles => ({opacity: styles.opacity})}
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center"
                    }}
                >
                    <Route exact path="/">
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
                                            <a href="#" onClick={() => this.setState({
                                                popupOpen: true,
                                                selectedAnime: anime.videosrc
                                            })}>
                                                <AnimeOption key={anime.id} anime={anime} style={{float: 'left'}}>
                                                </AnimeOption>
                                            </a>
                                        ))
                                    }


                                </CatalogContainer>

                            </div>

                        </ResultPlace>

                    </Route>
                    <Route path="/contactus">
                        <ContactUs/>
                    </Route>
                    <Route path="/popular">
                        <PopularAnime/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </AnimatedSwitch>
                <WatchVideo open={this.state.popupOpen} toggleModal={() => {
                    this.setState({popupOpen: !this.state.popupOpen})
                }} videosrc={this.state.selectedAnime}/>
            </AnimeCatalog>
        );
    }
}

export default Homepage;