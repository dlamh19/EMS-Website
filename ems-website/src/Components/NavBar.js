import './NavBar.css';
import rvrems  from './rvrems.png'

function NavBar() {
  return (
      
    <nav class="navBar">
        
        <div class="navBar-container">
            <img src={rvrems} class = "logo" alt="logo" width="180" height="49"/>

            <div class="navBar-toggle" id="mobileMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="navBar-menu">
                <li class="navBar-item">
                    <a href="#home" class="navBar-links" id="homePage">Home</a>
                </li>
                
                <li class="navBar-item">
                    <a href="#about" class="navBar-links" id="aboutPage">About Us</a>
                </li>

                <li class="navBar-item">
                    <a href="#services" class="navBar-links" id="aboutPage">Hall Rental</a>
                </li>
            
                <li class="navBar-item">
                    <a href="#sign-up" class="navBar-links" id="servicePage">How To Join</a>
                </li>

                <li class="navBar-btn">
                    <a href="#sign-up" class="button" >Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
