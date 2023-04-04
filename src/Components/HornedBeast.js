import React from "react";

class HornedBeast extends React.Component{
render(){
    return(


        <>

<img src={this.props.img}/>
<h2> {this.props.title}</h2>
<p>{this.props.description}</p>
        </>
    )
}
}

export default HornedBeast;