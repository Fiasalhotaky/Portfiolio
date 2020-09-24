import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Contact extends Component {
    render(){
        return(
            <div className= "contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                    <div style={{width: '100%', margin: 'auto'}}>
                    <a href="https://resume.creddle.io/resume/2wp8f64e89w" rel="noopenner noreferrer" targets="_blank"
                     style={{fontSize: '25px', fontFamily: 'Mukta', color: '#3E5151' }}>
                            <i className="fa fa-file" aria-hidden="true" />
                            Resume
                        </a>  

                        <img src="https://resume.creddle.io/resume/2wp8f64e89w" alt="" />
                        </div>
                    </Cell>
                    
                </Grid>
            </div>
        )
    }
}

export default Contact;