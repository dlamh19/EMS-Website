import "bootstrap/dist/css/bootstrap.min.css";

import './NavBar.css';
import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";

import rvrems from './rvrems.png'

function NavBar() {

    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <nav class="navBar">

            <div class="navBar-container">
                <img src={rvrems} class="logo" alt="logo" width="180" height="49" />

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
                        <a href="#sign-up" class="navBar-links" id="servicePage">How To Join</a>
                    </li>

                    <li class="navBar-item">
                        <a href="#hallRental" class="navBar-links" id="aboutPage">Hall Rental</a>
                    </li>

                    <li class="navBar-item">
                        <a href="#donation" class="navBar-links" id="servicePage">Donation</a>
                    </li>

                    <li class="navBar-btn">
                        <Button variant="primary" onClick={handleShow}>Contact Us</Button>
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Contact Information</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <h1>Main Office:</h1>
                                <p>848 New Dover Road Edison, NJ 08820</p>
                                <p>732-549-3883</p>


                                <h3>Contact Form</h3>
                                <form>
                                    <div class="inputList">
                                        <input type="text" id="name" placeholder="Name" required></input>
                                        <input type="text" id="email" placeholder="Email" required></input>
                                        <input type="text" id="phone" placeholder="Phone Number" required></input>
                                        <input type="text" id="message" placeholder="Message" required></input>

                                    </div>
                                </form>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
