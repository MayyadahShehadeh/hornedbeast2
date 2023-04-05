import React from "react";



class HornedBeast extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            numOfClick: 0
        }
    }
    increaseOne = () => {
        this.setState({
            numOfClick: this.state.numOfClick + 1

        })
    }





    render() {
        return (


            <>

                <img src={this.props.img} onClick={this.increaseOne} />
                <h2> {this.props.title}</h2>
                <p>{this.props.description}</p>
                <p> ❤️{this.state.numOfClick}</p>
            </>
        )
    }
}

export default HornedBeast;