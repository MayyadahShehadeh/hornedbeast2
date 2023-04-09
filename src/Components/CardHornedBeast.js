import React from "react";
import { Card,Col,Button } from "react-bootstrap";

class CardHornedBeast extends React.Component {

    render() {

        return (

            <>
                <Col>
                    <Card style={{ width: '15rem', margin: '4px' }} onClick= {this.props.handleShow}>
                        <Card.Img variant="top" src={this.props.img} onClick={this.props.increaseOne}  />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                ❤️{this.props.numOfClick} Favorite
                            </Card.Text>
                            <p> {this.props.horns} horns </p>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Button variant="primary" onClick={this.props.increaseOne}> vote</Button>

                            <Button variant="primary" onClick={this.props.handleShow} style={{ margin: '10px', backgroundColor: 'pink', borderColor: 'pink', color: 'black' }}>
                                show
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </>
        )
    }

}

export default CardHornedBeast;