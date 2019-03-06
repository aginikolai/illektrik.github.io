import React, { Component } from 'react';
import CityShort from './CityShort';

class Main extends Component {

    componentWillMount() {
        this.test = this.props.data;
    }
    
    componentDidMount() {
        window.scrollTo(0,0);
    }
   
    
     render() {
        const capitalsArr = this.test.map(item => item.name.toLowerCase());
        const capitalsImg = this.test.map(item => item.photo);
        
        const capitals = capitalsArr.map( (name, i) => {
            return(
            <CityShort 
               {...this.props}
               key={i}
               i={i}
               name={name} 
               img={capitalsImg[i]}
               chanchingRout ={()=> {
                   const id = this.state.capitalName;
                   console.log(id)
                   this.props.history.push(`/${id}`)
               }} />  
            ) 
        });
        
        return (
            <div className="gallery_grid">
                {capitals}
                
            </div> 
        );
    }
}

export default Main;