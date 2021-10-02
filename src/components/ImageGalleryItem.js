import React, { Component } from "react";
import Modal from "./Modal.js"
import '../styles.css'
export default class ImageGallery extends Component{
    state ={
        toggleModal: false,
    }
    toggleModalChange = () =>{
        this.setState({toggleModal: !this.state.toggleModal})
    }
    render(){
        let { toggleModal } = this.state;
        return (
        
                <li className="ImageGalleryItem">
                    <img src={this.props.webformatURL} className="ImageGalleryItem-image" onClick = {this.toggleModalChange}></img>
                    {toggleModal === true && (<Modal largeFormat= {this.props.largeImage} toggleModalChangeInside = {this.toggleModalChange} />)}
                </li>
        )
    }
}