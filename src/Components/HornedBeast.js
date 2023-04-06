import React from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";


class HornedBeast extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            numOfClick: 0,
            show: false
        }
    }
    increaseOne = () => {
        this.setState({
            numOfClick: this.state.numOfClick + 1

        })
    }

    handleShow = () => {

        this.setState({
            show: true
        })
    }

    handleClose = () => {

        this.setState({
            show: false
        })
    }


    render() {
        return (
            <>

                <Modal show={this.state.show} onHide={this.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Card.Img variant="top" src={this.props.img} />
                    <Modal.Body>{this.props.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}> Close</Button>
                    </Modal.Footer>
                </Modal>


                <Col>
                    <Card style={{ width: '15rem', margin: '5px' }}>
                        <Card.Img variant="top" src={this.props.img} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                ❤️{this.state.numOfClick} Favorite
                            </Card.Text>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Button variant="primary" onClick={this.increaseOne}> vote</Button>
                            <Button variant="primary" onClick={this.handleShow}>
                                show
                            </Button>
                        </Card.Body>
                    </Card>

                </Col>

                {/* <img src= />
                <h2> </h2>
                <p></p>
                <p> </p> */}
            </>
        )
    }
}

export default HornedBeast;