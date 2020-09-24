import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterDropDownSection, FooterLinkList, FooterSection  } from 'react-mdl';
import Particles from 'react-particles-js';

import { Link } from 'react-router-dom';



class landingPage extends Component {
    render(){
        return(

            
            <div style={{width: '100%', margin: 'auto'}}>
                
                <Grid className= "landing-grid">
                    <Cell col={12}>

                    <img src="logo1.png" alt="" className="logo"/>

                    <div className= "center-text">
                        
                        <h1>Fiasal Hotaky</h1>

                        <hr/>

                        <p style={{width: '100%', margin: 'auto', fontSize: '35px', fontWeight: 'bold'}}>Full Stack Developer</p>

                    <div className= "media">

                        <a href="mailto:fiasalhotaky@gmail.com">
                            <i className= "fa fa-envelope" aria-hidden= "true" /> 
                        </a>

                        <a href="https://github.com/Fiasalhotaky" rel="noopenner noreferrer" targets="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        <a href="https://www.linkedin.com/in/Fiasalhotaky/" rel="noopenner noreferrer" targets="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        <a href="https://resume.creddle.io/resume/2wp8f64e89w" rel="noopenner noreferrer" targets="_blank">
                            <i className="fa fa-file" aria-hidden="true" />
                        </a>
                        

                    </div>
                    </div>
                    <Particles className= "particles-land"
    params={{
	    "particles": {
	        "number": {
	            "value": 90,
	            "density": {
	                "enable": true,
	                "value_area": 900
	            }
            },
            
            color: {
                value: "#3E5151",
              },
	        "line_linked": {
	            "enable": true,
                "opacity": 2,
                'color': '#3E5151',
                hoverEffect: true
                 
	        },
	        "move": {
	            "direction": "top",
	            "speed": 1.2,
	        },
	        "size": {
	            "value": 2
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 2
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                
	            }
            },
            "onHover": {
                "enable": true,
                "mode": "repulse",
              },
            "repulse":{
                "distance": 500,
                "duration": 0.5
            },
            
	        "modes": {
                "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 40,
                },
                "push": {
                  "quantity": 4,
                },
              },
            
	    },
	    "retina_detect": true
	}} />

                    </Cell>

            </Grid>

            <Footer className="footer" size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="My Work">
            <FooterLinkList>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <h5>Built with React</h5>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Get in touch">
            <FooterLinkList>
                <Link to="/contact">Contact</Link>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
</Footer>
            </div>
        )
    }
}

export default landingPage;