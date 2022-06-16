import React, {Component} from 'react';
import {MainCard} from "./components/MainCard";
import CurvedButton from "./components/CommonButtons";
import styled from "styled-components";
import './style/Contact.css';

// animated input Box
const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  padding: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;


class ContactUs extends Component {
    render() {
        return (
            <MainCard style={{height: '60vh', padding: '100px'}}>
                <ContactUsContainer style={{width: '300px', height: '350px'}}>
                    <form>

                        <input type="text" name="name" className="question" id="nme" required autoComplete="off" style={{top: '10px'}}/>
                        <label htmlFor="nme"><span>What's your name?</span></label>
                        <hr/>
                        <textarea name="message" rows="1" className="question" id="msg" required
                                  autoComplete="off"></textarea>
                        <label htmlFor="msg"><span>What's your Email?</span></label>
                        <hr/>
                        <textarea name="email" rows="1" className="question" id="msg" required
                                  autoComplete="off"></textarea>
                        <label htmlFor="msg"><span>What's your message?</span></label>
                        <hr/>
                        <CurvedButton> Send</CurvedButton>
                    </form>
                </ContactUsContainer>
            </MainCard>
        );
    }
}

export default ContactUs;