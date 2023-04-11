import React from "react";
import { Modal,Card,Button } from "react-bootstrap";

class ModalHornedBeast extends React.Component {

    render() {

        return (
            <>

                <Modal show={this.props.handleShow} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Card.Img variant="top" src={this.props.img} />
                    <Modal.Body>{this.props.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}> Close</Button>
                    </Modal.Footer>
                </Modal>

            </>

        )
    }
}

export default ModalHornedBeast;