import React from 'react';
import { Component } from 'react';
import Searchbar from './components/Searchbar.js';
import serverData from './serverResponse.js';
import ImageGallery from './components/ImageGallery.js';
import Button from './components/Button.js';
import './styles.css'
export default class App extends Component{
    state = {
        searches: [],  
        input: '',
        p: 1
    }
    
    componentDidMount(){
        // let searchesFromPrevSession = localStorage.getItem('searches');
        // if(searchesFromPrevSession !== null){
        //   this.setState({
        //     searches: JSON.parse(searchesFromPrevSession);
        //   });
        // serverData('weather', 1, '23263056-8420dc5c89144af04b2f7ac5b').then(data =>{
        //     this.setState({
        //         searches: data.hits,
        //     })
        // })
        }
    

    componentDidUpdate(prevProps, prevState){
        // if(this.state.searches !== prevState.searches){
        //     localStorage.setItem('searches', JSON.stringify(this.state.searches));
        // }
        //console.log('Hi its me');
        //console.log(this.state.input);
        
        // window.scrollTo({
        //     top: document.documentElement.scrollHeight,
        //     behavior: 'smooth',
        // });
        // if(this.state.input === prevState.input){
        //     console.log('Loh pidr');
        // }
        // else{
        //     this.setState({p: 2})
        // }
    }

    handleClickOutside = (e, input) =>{
        e.preventDefault();
        console.log(input);

        serverData(input, 1, '23263056-8420dc5c89144af04b2f7ac5b').then(data =>{
            this.setState(prevState =>({
                searches: data.hits, input: input, p: 1,
            }))
        })
    }

    imgRenderOutside = e =>{
        serverData(this.state.input, this.state.p + 1, '23263056-8420dc5c89144af04b2f7ac5b').then(data =>{
            this.setState(prevState =>({
                searches: prevState.searches.concat(data.hits), p: this.state.p + 1
            }))
            // this.setState({
            //     searches: this.state.searches.concat(data.hits), p: this.state.p + 1
            // })
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
              });
        })
    }

    render(){
      let { searches, input, p } = this.state;
      return (
          <div>
              <Searchbar
                 handleClick = {this.handleClickOutside}   
              />
              <ImageGallery 
                  searches = {searches}
              />
              {searches.length !== 0 ? 
                (<Button 
                    imgRenderInside = {this.imgRenderOutside}
                 />)
              :console.log('Fuck you')}
            </div>
             )
    }
}
