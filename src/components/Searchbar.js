import React from "react";
import { Component } from "react";

export default class Searchbar extends Component{
    state ={
        input: '',
    }
    
    handleChange = e =>{
        this.setState({
            input: e.target.value, 
        }
        )
    }
    
    handleClickInside = e =>{
        this.props.handleClick(e ,this.state.input);
    }

    render(){
        return (
            <form>
                <button type="submit" className="SearchForm-button" onClick = {this.handleClickInside}>
                   <span className="SearchForm-button-label">Search</span>
                </button> 
               <input
                   className="SearchForm-input"
                   type="text"
                   autoComplete="off"
                   autoFocus
                   placeholder="Search images and photos"
                   onChange = {this.handleChange}
               />
            </form>
        )
    }
}