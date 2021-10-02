import React from "react";
import { Component } from "react";
import '../styles.css'
export default class Modal extends Component{
    state = {}
    // componentDidMount(){
    //     window.addEventListener('keydown', e =>{
    //         if(e.code === 'Escape'){
    //             this.props.toggleModalChangeInside();
    //         }
    //     })
    // }
    render(){
        window.addEventListener('keydown', e =>{
            if(e.code === 'Escape'){
                this.props.toggleModalChangeInside();
            }
        })
        return (
            <div className="Overlay" onClick = {() => this.props.toggleModalChangeInside()}>
               <div className="Modal">
                 <img src={this.props.largeFormat} alt="" />
               </div>
            </div>
        )
    }
}