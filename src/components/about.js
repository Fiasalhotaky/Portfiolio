import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Particles from 'react-particles-js';

class about extends Component {
    render(){
        return(
            <div className= "about-body">
            <Grid className="about-grid">
            <Cell col={12}>
                <h2>About Me</h2>
                
                <hr/>

                <p>
                    Hi I'm Fiasal Hotaky, I am a Full-Stack Software Engineer based in New York City. I have a bachelor's degree in Computer Science from Queens College as well as field experience. 
                    I have built multiple projects from scratch, development from back-end to front-end. 
                    I have a passion for coding and seeing what I code come to life! 
                    </p>


                <div style={{width: '50%', margin: 'auto'}}>
                        <div className= "about-list">

                        <a href="https://resume.creddle.io/resume/2wp8f64e89w" rel="noopenner noreferrer" targets="_blank"
                     style={{fontSize: '25px', fontFamily: 'Mukta', color: '#3E5151', fontWeight: 'bold' }}>
                            <i className="fa fa-file" aria-hidden="true" />
                            RESUME
                        </a>

                            <h3>Skills</h3>

                            <h4/> 

                            <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Mukta', color: '#3E5151', fontWeight: 'bold' }}>
                                <i className= "fa fa-code" aria-hidden= "true" /> 
                                Coding Languages: JavaScript | Java | C++ | SQL | HTML | CSS | Swift | Python
                               </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Mukta', color: '#3E5151', fontWeight: 'bold' }}>
                                <i className= "fa fa-laptop" aria-hidden= "true" />Frameworks & Libraries: ReactJs | Bootstrap | Angular | Material UI | NodeJs
                             </ListItemContent>
                            </ListItem>
                            </List>
                </div>
                </div>

                
                <Particles className= "about-particles"
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

export default about;