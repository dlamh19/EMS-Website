import './NavBar.css';


function NavBar() {
  return (
      
    <nav class="navBar">
        <div class="navBar-container">
            <a href="#home" id="navbar-logo">Raritan Valley Regional EMS</a>
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
                    <a href="#about" class="navBar-links" id="aboutPage">Hall Rental</a>
                </li>
            
                <li class="navBar-item">
                    <a href="#services" class="navBar-links" id="servicePage">How To Join</a>
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
