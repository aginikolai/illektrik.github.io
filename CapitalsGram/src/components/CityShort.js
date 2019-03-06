import React, { Component } from 'react';
import CapitalsData from '../dataSorce';
import {Link} from 'react-router-dom';


class CityShort extends Component {
    
    dataSource = new CapitalsData();
    
    state = {
        capital: null,
        population: null,
        name: null,
        lenguage: null,
        currencie: null,
        subregion: null,
        animation: false
    };

    componentDidMount() {
        this.updateInfo();
    }

    updateInfo () {
        this.dataSource.getInfo(this.props.name).then( body => {
            console.log(body[0])
            let country ='';
            let data = body[0].name.split(' ');
            data.length > 2 ? country = String(data[0] + ' ' + data[1]) : country = body[0].name;
            this.setState({
                capital: body[0].capital,
                population: body[0].population,
                name: country,
                lenguage: body[0].languages[0].name,
                currencie: body[0].currencies[0].name,
                subregion: body[0].subregion
            })
        })
    }
    

    render() {
        //displaing data
        const {capital,population, name, lenguage, currencie, subregion} = this.state;
        let likes = 0;
        let i = this.props.i;
        let populationRound =  (population/10000000).toFixed(2);
        
        //displaing number of likes
        this.props.data.forEach(element => {
            if (element.name === capital) {
                likes = element.likes
            }
        });
        
        //like animation
        let style = '';
        this.state.animation === false ? style = "fas far--big fa-heart" : style = "fas fa-heart far--big far--anims";
        
        //displaing number of comments
        let commentNum = 0;
        let newCapital = '';
        const comments = this.props.comments;
        let cityArr = []
        //cheking if city has more then one word name
        if (capital !== null) cityArr = capital.split('')
        cityArr.forEach((letter, i) => letter === ' ' ? newCapital = cityArr.splice(0 ,i).join('') : newCapital = cityArr.join(''))
        console.log(newCapital)
        
        for ( let cityName in comments) {
            if (cityName === newCapital) {
                commentNum = comments[cityName].length
            }
        }
       
        return (
            <div>
                <div className="card border-primary mb-3">
                    <div className="card-header"><span className="card__span">{this.props.name.toUpperCase()}</span>  </div>
                    <div className="card-body card-body--flex">
                     <i className={style}></i>
                        <img className="img_small" src={this.props.img} alt={name}/>
                        <ul>
                            <li className="card-text"><span>Population:</span> <span className="numbers">{populationRound} m</span> </li>
                            <li className="card-text"><span>Country:</span> <span>{name}</span> </li>
                            <li className="card-text"><span>Language:</span> <span>{lenguage} </span></li>
                            <li className="card-text"><span>Currencie:</span> <span>{currencie} </span></li>
                            <li className="card-text"><span>Region:</span> <span>{subregion}</span> </li>
                        </ul>
                        <div className="card-bottom">
                        <Link to={`view/${capital}`}>
                            <button type="button" 
                            className="btn btn-primary">
                            View more
                            </button>
                        </Link>
                            <div className="likes_comments">
                                <p className="card__p"><i 
                                    onClick={this.props.addLike.bind(null, i)}
                                    onMouseDown={()=> this.setState({animation: true})}
                                    onMouseUp={()=> setTimeout(()=>this.setState({animation: false}), 600) }
                                    className="far far--hover fa-heart"></i><span className="likeNum">{likes}</span></p>
                                <p className="card__p card__p--last">
                                    <i className="far fa-comment"><span className="likeNum">{commentNum}</span></i>
                                </p>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
             </div>
        );
    }
}


export default CityShort;