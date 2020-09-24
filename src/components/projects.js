import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import Particles from 'react-particles-js';

class projects extends Component {
    constructor(props) {
        super(props);
    this.state = { activeTab: 0, showMe1: false, showMe2: false, showMe3: false }
    }

    showPic1(){
        this.setState({
            showMe1: true
        })
    }

    showPic2(){
        this.setState({
            showMe2: true
        })
    }

    showPic3(){
        this.setState({
            showMe3: true
        })
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
           return(
               <div className= "projects-grid">
               <Card shadow= {5} style={{width: '480px', height: '320px', minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '100px',}}>Google Drive API </CardTitle>
                <CardText>
                A web application that that allows a user to type in NBA player’s name and players info is displayed on screen and text file of info saved to user’s Google Drive. 
                </CardText>
                <CardText>
                - JavaScript, Html, Google Drive Api, BallDontStop Api, OAuth 2.0
                </CardText>
                
                <CardActions border>
                    
                <a href="https://github.com/Fiasalhotaky/NBA-GoogleDrive-API-Project" rel="noopenner noreferrer" targets="_blank">
                        <Button colored>Github</Button>
                </a>
                    
                    <Button colored onClick={()=>this.showPic3()}>Screenshots</Button>
                </CardActions>
               </Card>

               {
                this.state.showMe3?
                <div style={{display:"grid"}}>

                <img src="ds3.png" alt="" className="screenshots"/>
                
                <img src="ds2.png" alt="" style={{justifyContent: 'center', paddingTop: '0.1em', border: '5px groove #3E5151'}} />

                <img src="ds5.png" alt="" style={{justifyContent: 'center', paddingTop: '0.1em', border: '5px groove #3E5151'}}/>
                
                </div>
                :null
                }

               <Card shadow= {5} style={{width: '480px', height: '320px', minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '100px',}}>Portfolio </CardTitle>
                <CardText>
                    A web application highlighting my experience as a developer. 
                </CardText>
                <CardText>
                - JavaScript, Html, React, CSS
                </CardText>
                
                <CardActions border>
                    
                <a href="https://github.com/Fiasalhotaky/Portfolio" rel="noopenner noreferrer" targets="_blank">
                        <Button colored>Github</Button>
                </a>
                    
                </CardActions>
               </Card>

                <Card shadow= {5} style={{width: '480px', height: '320px',minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '100px'}}>SeasonalSammy </CardTitle>
                <CardText>
                Ios app that is a childrens coloring book found in the in the app store! 
                </CardText>
                <CardText>
                - Team project 
                </CardText>
                <CardText>
                - Swift
                </CardText>
                <CardActions border>
                <a href="https://seasonalsammy.com/" rel="noopenner noreferrer" targets="_blank">
                        <Button colored>Preview</Button>
                </a>
                <a href="https://apps.apple.com/us/app/seasonalsammy/id1475244046" rel="noopenner noreferrer" targets="_blank">
                        <Button colored>Download</Button>
                </a>
                </CardActions>
                </Card>

                <Card shadow= {5} style={{width: '480px', height: '320px',minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '100px'}}>CourseSpotter </CardTitle>
                <CardText>
                A team project developed a web application that periodically checks CunyFirst (City University of New York) 
                student information center, for course availability where seats are all taken. 
                User inputs CUNY college name, course info and phone number and/or email address.
                 When course seat opens user is notified via text message or email.
                </CardText>

                <CardText>
                - Java, SQL, Springboot
                </CardText>

                <CardActions border>
                <a href="https://github.com/Fiasalhotaky/CourseSpotter" rel="noopenner noreferrer" targets="_blank">
                        <Button colored>Github</Button>
                </a>
                <Button colored onClick={()=>this.showPic1()}>Screenshots</Button>
                


                </CardActions>
                </Card>

                {
                this.state.showMe1?
                <div style={{display:"grid"}}>
                <img src="courseSpotter1.png" src2="cs2.png" alt="" className="screenshots"/>
                

                <img src="cs2.png" alt="" className="screenshots"/>
                

                <img src="cs3.png" alt="" style={{justifyContent: 'center', paddingTop: '0.1em', border: '5px groove #3E5151'}} />

                <img src="cs3.png" alt="" style={{justifyContent: 'center', paddingTop: '0.1em', border: '5px groove #3E5151'}}/>
                
                </div>
                :null
                }

                <Card shadow= {5} style={{width: '480px', height: '320px',minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '100px'}}>Spotify Api Project </CardTitle>
                <CardText>
                A web application allowing a user to search artists albums, and songs using Spotify Api.
                </CardText>
                <CardText>
                - JavaScript, Html, NodeJs, Spotify Api, OAuth 2.0
                </CardText>
                <CardActions border>
                <a href="https://github.com/Fiasalhotaky/Spotify-Api-Project" rel="noopenner noreferrer" targets="_blank">
                        <Button colored>Github</Button>
                </a>
                <Button colored>LiveDemo</Button>
                </CardActions>
                </Card>

                <Card shadow= {5} style={{width: '480px', height: '320px',minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '100px'}}>soda designer project </CardTitle>
                <CardText>
                A web application taht allows a user to design a soda can by choosing a fruit and any color, 
                using a color scale or enter in the hexadecimal number for the color. 
                Png file of the soda can is then saved.
                </CardText>
                <CardActions border>
                <a href="https://github.com/Fiasalhotaky/Soda-designer" rel="noopenner noreferrer" targets="_blank">
                        <Button colored>Github</Button>
                </a>
                <Button colored>LiveDemo</Button>
                </CardActions>
                </Card>

                <Card shadow= {5} style={{width: '480px', height: '320px',minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '100px'}}>Cuny Courses Database </CardTitle>
                <CardText>
                Database for course information in all of CUNY colleges. Course times, Professor of course and time course is held.
                </CardText>
                <CardText>
                    -SQL
                </CardText>
                <CardActions border>
                <a href="https://github.com/Fiasalhotaky/Cuny-database-SQL" rel="noopenner noreferrer" targets="_blank">
                        <Button colored>Github</Button>
                </a>
                <Button colored onClick={()=>this.showPic2()}>Screenshots</Button>
                </CardActions>
                </Card>
                {
                this.state.showMe2?
                <div style={{display:"grid"}}>
                

                <img src="db3.png" alt="" style={{justifyContent: 'center', paddingTop: '0.1em', border: '5px groove #3E5151'}} />
                

                <img src="db4.png" alt="" style={{justifyContent: 'center', paddingTop: '0.1em', border: '5px groove #3E5151'}} />

                <img src="db1.png" alt="" style={{justifyContent: 'center', paddingTop: '0.1em', border: '5px groove #3E5151'}}/>
                
                <img src="db2.png" alt="" style={{justifyContent: 'center', paddingTop: '0.1em', border: '5px groove #3E5151'}} />

                </div>
                :null
                }

                <Card shadow= {5} style={{width: '480px', height: '320px',minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '100px'}}>Dates Sorter </CardTitle>
                <CardText>
                Database for course information in all of CUNY colleges. Course times, Professor of course and time course is held.
                </CardText>
                <CardText>
                    -SQL
                </CardText>
                <CardActions border>
                <a href="https://github.com/Fiasalhotaky/Date212" rel="noopenner noreferrer" targets="_blank">
                        <Button colored>Github</Button>
                </a>
                </CardActions>
                </Card>

                </div>
               
           )
        }
    }
    
    render(){
        return(
            <div className= "category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                <Tab>Projects</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>


                            <Particles className="proj-particles"
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

export default projects;