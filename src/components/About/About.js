import React from "react"
import kannan from "./kannan.jpg"
import "./About.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import ShareYourByte from "./images/shareyourbyte.jpg"
import WikipediaSearch from "./images/wikipediasearch.jpg"
import TwitterIcon from '@material-ui/icons/Twitter';

function About(){
    return (
    <div>
        <div className="About" id ="About Me">
        <div className="section-title">
        <h2>About Me</h2>
        </div>
       
       <div className="detail-section">   
            <img src ={kannan} alt = "kannan-img" />
           
            <div className="detail">
                <div className = "detail-link">
                <p>
                I'm a 21-year-old BCA graduate currently studying web development and design.  
I love to write clean and readable code.  Apart from code, I love to read novels and play sports.
                </p>
            </div></div>
    </div>
        <div className = "skills" id = "My Skills">
            <h2>My Skills</h2>
            <p>Through my studies, I've gained a solid understanding of computer
                science and web development concepts, and I have dedicated to lot of 
                my free time to apply these concepts to real world applications.
            </p>
            <br/>
            <div className = "skill-items">
                <h5>C++</h5>
            <h5>HTML</h5>
            <h5>CSS</h5>
            <h5>JavaScript</h5>                <h5>ReactJS</h5>
            <h5>Django</h5>
            <h5>PHP & SQL</h5>
            <h5>Git</h5>
            <h5>Figma</h5>
            </div>
        </div>
    </div>
       
        {/* project section */}
        <div className="projects" id = "My Projects">
            <div className="contact-title">
                <h2>Projects</h2>
                <p>
                    Take a look at some of the applications that I've dedicated my time build to.
                </p>
            </div>
            <div className= "project">
                
                 <h4>ShareYourByte</h4>
                 <div className="pro">
                 <img className ="project-image" alt = "project1" src = {ShareYourByte} />
                
                 <p>ShareYourByte is a Blogging application built with React and Django Restframework.  
                    I'd used token based authentication for register users. In this app, Registered
                    users can write blog post. A normal visitors can read the user's posts.
                    This project enhanced my knowledge of integrating the apps with React and Django
                 </p>
                 </div>
                 <a href ="https://github.com/KannanPalani57/BlogApp-With-Django-React" rel="noopener noreferrer" target = "_blank">View Source</a>

            </div>    

            <div className= "project" >
                
                 <h4>Wikipedia Search</h4>
                 <div className="pro">
                 <img className ="project-image" alt = "project2" src = {WikipediaSearch} />
                 <p>Wikipedia Search is the project I put up with ReactJS.
                     Before I used Class based components, in this application I picked up
                     functional components to make use of hooks. This app retrieve the search 
                     results from Wikipedia about what we search and We can navigate to the Wikipedia 
                     content page. 
                 </p>
               
               </div>
               <a href ="https://github.com/KannanPalani57/Wikipedia-Viewer-In-ReactJS" rel="noopener noreferrer" target = "_blank">View Source</a>

               <p className = "see-repo"style = {{fontSize: "1.15rem"}}>Let's see what I'd before and now</p>
                    <a href="https://github.com/KannanPalani57?tab=repositories" rel="noopener noreferrer" target ="_blank">See all my works</a>
            </div>
            

        </div>


       <div className = "contact" id = "Contact Me">
           <div className="contact-title">
               <h2>Let's Build Something Together</h2>
               <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
           </div>
           <h5 className="email">kannanpalani455@gmail.com</h5>
          <div className = "social-connect">
          
              <h5>Connect With Me By Click the Icon</h5>
              <div className = "icon">
              <a  style = {{color: "black"}} href="https://github.com/KannanPalani57" rel="noopener noreferrer" target ="_blank"><GitHubIcon style = {{fontSize:"1.7em", marginRight: "1em"}} /></a> 
            <a style = {{color: "black"}} href="https://twitter.com/kannan_codes" rel="noopener noreferrer" target ="_blank"><TwitterIcon style = {{fontSize:"1.7em"}}/></a>
           </div>     
          </div>
       </div>
       <footer>
           <h3>Designed & Developed By @kannan</h3>
       </footer>
    </div>
)
}

export default About;