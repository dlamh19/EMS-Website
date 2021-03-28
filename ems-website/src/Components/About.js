import './About.css';
import {Button } from "react-bootstrap";


function About() {
  return (
      
    <div class="main" id="about">
        <div class="main-container">
            <div class="main-imgContainer">
                <div class="main-imgCard1">
                </div>
            </div>
            <div class="main-content">
                <h1>What do we do?</h1>
                <h2>We serve the residents of Edison</h2>
                <p>Fleets of ambulances, along with rescue and special equipment</p>
                <small> The members of Edison First Aid Squad #1, Edison First Aid Squad #2 and Clara Barton First Aid Squad have been 
                  volunteering since 1935, 1936 and 1951 respectively. All organizations have their roots in the Raritan Township Saftey 
                  Council, formed in 1935. As the town grew, additional Squads were formed to service the newer parts of Raritan Township, 
                  which would eventually be renamed to Edison Township in 1954.</small>
                  <small> Since the days of their founding, each Squad has maintained a fleet of ambulances, along with rescue and other 
                  specialty equipment to stay ahead of the rapidly changing times. 
                  All three Squads provide these services almost exclusively with the support and donations of the citizens of Edison. In 
                  2009 all three Squads joined together to form Raritan Valley Regional Emergency Medical Services to better serve the 
                  residents of Edison and surrounding communities.</small>
               
            </div>
        </div>
    </div>
  );
}

export default About;
