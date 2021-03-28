import "bootstrap/dist/css/bootstrap.min.css";

import './styles.css';
import React, { useState } from "react";
import StripeContainer from './StripeContainer.js'

import { Modal, Button } from "react-bootstrap";

function Donation() {

    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div class="main" id="donation">
            <div class="main-container">
                <div class="main-imgContainer">
                    <div class="main-imgCard3"></div>
                </div>
                <div class="main-content">
                    <h1>Donate!</h1>
                    <h2>Make a Change</h2>
                    <p>See what makes us different</p>
                    <Button variant="primary" onClick={handleShow}>Donate</Button>
                    <Modal show={showModal} onHide={handleClose} dialogClassName="modal-90w">
                        <Modal.Header closeButton>
                            <Modal.Title>Donation Information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <StripeContainer />
                            <h3 id = "paypalDonateTitle">Donate with Paypal</h3>
                            <form action="https://www.paypal.com/donate" method="post" target="_top" target="_blank" id = "paypalButton">
                                <input type="hidden" name="hosted_button_id" value="FSREMVZYBHCY2" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
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
                </div>

            </div>
        </div>
    );
}

export default Donation;
