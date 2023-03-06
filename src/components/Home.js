import React from "react"
import "./Home.css";
import SwipeableTemDrawer from "./Drawer/Drawer"
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function Home(){
    const name = "<K />"
    return (
        <div id = "flag">
            <div className = "header">
                <div className = "logo">
                 {name}
                 </div>
                 <div className="drawer">
                    <SwipeableTemDrawer key = {1}/>
                 </div>
                </div>
            <div className = "my-detail">
              <h2>Hi there!,</h2>
              <h2>I am Kannan,</h2>
              <h2>Web Developer</h2>
            </div>
            <section className = "logo-section">
            <div className= "icon-item">
          <a style = {{color: "black"}} href="https://github.com/KannanPalani57" rel="noopener noreferrer" target ="_blank">  
          <GitHubIcon style ={{fontSize: "2.1rem"}}/>
          </a>
          </div>

            <div className= "icon-item">  
            <a style = {{color: "black"}} href="https://twitter.com/kannan_codes" rel="noopener noreferrer" target ="_blank">
            <TwitterIcon style ={{fontSize: "2.1rem", marginLeft: "0.5em"}}/>
            </a >
            </div>
          
        </section>

        </div> 
    )
}

export default Home;