import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Particles from 'react-particles-js';

class Contact extends Component {
    render(){
        return(
            <div className= "contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h2>Contact Me</h2>
                        
                        <hr/>

                        <p>I am available for hire and open to ideas of colaboration</p>

                        <div style={{width: '50%', margin: 'auto'}}>
                        <div className= "contact-list">
                            <List>

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Mukta', color: '#3E5151' }}>
                                <a href="mailto:fiasalhotaky@gmail.com"
                                style={{fontSize: '25px', fontFamily: 'Mukta', color: '#3E5151' }}>
                                <i className= "fa fa-envelope" aria-hidden= "true" /> 
                               Fiasalhotaky@gmail.com
                               </a>
                               </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Mukta', color: '#3E5151' }}>
                                <a href="https://github.com/Fiasalhotaky" rel="noopenner noreferrer" targets="_blank"
                                    style={{fontSize: '25px', fontFamily: 'Mukta', color: '#3E5151' }}>
                            <i className="fa fa-github-square" aria-hidden="true" />
                            Github.com/Fiasalhotaky
                            </a>
                               </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Mukta', color: '#3E5151' }}>

                                <a href="https://www.linkedin.com/in/Fiasalhotaky/" rel="noopenner noreferrer" targets="_blank"
                                    style={{fontSize: '25px', fontFamily: 'Mukta', color: '#3E5151' }}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    LinkedIn: Fiasal Hotaky
                                </a>
                                

                                </ListItemContent>
                            </ListItem>
                            </List>
                        </div>
                        </div>

                        
                        <Particles className= "contact-particles"
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
	            "speed": 0.9,
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
            </div>
        )
    }
}

export default Contact;