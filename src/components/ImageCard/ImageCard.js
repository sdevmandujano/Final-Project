import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

class ImageCard extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        console.log(this.props);
        return (<Link to = {"/games/1"} >
        <div onClick ={this.props.handleClick} >
        <img src = {this.props.image } />
            
            Hello
            </div>
            </Link>
        )
    };

}
export default ImageCard;