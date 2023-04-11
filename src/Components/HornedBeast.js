import React from "react";
// import { Card, Button, Col } from "react-bootstrap";
import ModalHornedBeast from "./ModalHornedBeast";
import CardHornedBeast from "./CardHornedBeast";


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

                <CardHornedBeast 
                numOfClick = {this.state.numOfClick}
                increaseOne = {this.increaseOne}
                handleShow = {this.handleShow}

                title={this.props.title}
                img={this.props.img}
                description={this.props.description}
                horns = {this.props.horns}
                />


                <ModalHornedBeast
                    handleShow={this.state.show}
                    handleClose={this.handleClose}
                    
                    title={this.props.title}
                    img={this.props.img}
                    description={this.props.description}
                />


                {/* <img src= />
                <h2> </h2>
                <p></p>
                <p> </p> */}
            </>
        )
    }
}

export default HornedBeast;