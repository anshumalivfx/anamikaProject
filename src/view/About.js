import React, {Component} from 'react';
import {MainCard} from "./components/MainCard";
import styled from "styled-components";

class About extends Component {
    render() {
        const TeamMembesName = styled.h3`
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: #000000;
        `;

        const AboutTitle = styled.h1`
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: #000000;
        `;

        const AboutText = styled.p`
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            margin: 1rem;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: #000000;
        `;



        return (
            <MainCard style={{height: '60vh'}}>
                <AboutTitle>About</AboutTitle>
                <AboutText style={{width: '80vh'}}>
                    We have multiple stream types for each anime, so use what works best for you.
                    If you got problem try  reload the player or try different server on external player.
                </AboutText>
                <div style={{width: '500px'}}>
                    <div className="col-md-6">
                        <h2 style={{fontSize: '30px'}}>Team Members</h2>
                        <ul>
                            <li>
                                <TeamMembesName>
                                    Anamika Karna
                                </TeamMembesName>
                            </li>
                            <li>
                                <TeamMembesName>
                                    Hatim
                                </TeamMembesName>
                            </li>
                            <li>
                                <TeamMembesName>
                                    Purbanjali
                                </TeamMembesName>
                            </li>
                        </ul>
                    </div>
                </div>

            </MainCard>
        );
    }
}

export default About;