import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NotFound from './NotFound';
import {connect} from 'react-redux';

import {addLike, addComment, delComment}  from '../actions/index';

class SingleCapital extends Component {
    
    state = {
      animation: false
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.forceUpdate()
      }
     render() {
       const list = this.props.data;
        let photo = '';
        let about = '';
        let likes = 0;
        let i = 0;
        let names = []
        list.forEach((item, index) => {
          names.push(item.name)
          if (item.name === this.props.test.params.id ) {
              
              photo = item.photo;
              about = item.about;
              likes = item.likes;
              i = index
          } 
        });
        

        let style = '';
        this.state.animation === false ? style = "fas far--big fa-heart" : style = "fas fa-heart far--big far--anims";

        //finding and rendering posts
        let newCity = this.props.test.params.id;
        
        let cityArr = [];
        let newCapital ='';
        cityArr = newCity.split('');
       
        cityArr.forEach((letter, i) => letter === ' ' ? newCapital = cityArr.splice(0 ,i).join('') : newCapital = cityArr.join(''));
        let listOfComments = this.props.comments[newCapital];
        let commentsArea = null;
        let commentsNum = 0;

        
        
        if (listOfComments !== undefined) {
          commentsNum = listOfComments.length
           commentsArea = listOfComments.map( (item, i) => {
            
               return (
                <div className="single_comment" key={i}>
                <p className="mb-0"><strong>{item.name}:</strong> <em className="text__em">{item.comment}</em> </p>
                <i className= "fas fa-times fa-times--none" 
                onClick={this.props.delComment.bind(null, newCapital, i)} ></i>
                </div>
              )
          })
      
        }

       //geting new comment
        const addingComments = (e)=> {
          e.preventDefault();
          let author = '';
          this.refs.author.value !== '' ?  author = this.refs.author.value : author ="anonimus";
         
          const text = this.refs.comment.value;
          this.props.addComment(newCapital, author, text);
          this.refs.commentForm.reset()
        }
        let cityExist = '';
        names.includes(this.props.test.params.id) ? cityExist = true : cityExist = false;
        console.log(cityExist)
        if (cityExist) { return (
            <div className = "wrap">
                <div className="single_flex">
                
                  <div className="single_flex_left">
                  <div className="card border-primary mb-3">
                    <div className="card-header"><span className="card__span">{this.props.test.params.id}</span></div>
                    <div className="card-body card-body--flex">
                    <i className={style}></i>
                    <img className="img_small img--big " src={`${photo}`} alt={''}/>
                     </div>    
                 </div>     
                  </div>

                  <div className="single_flex_right">
                    <div className="card border-primary mb-3 card-comments">
                    <div className="card-header"><span className="card__span">Comments</span></div>
                    <div className="card-comments__body">
                        <div className="comments_area">{commentsArea}</div>
                        <div className="form-group">
                        <form ref="commentForm" onSubmit={addingComments}>
                          <label className="col-form-label col-form-label-sm" htmlFor="inputSmall">New post:</label>
                          <input className="form-control form-control-sm" type="text" 
                              placeholder="name" id="inputSmall" ref="author"></input>
                          <input className="form-control form-control-sm form--margin" type="text" 
                              placeholder="text" id="inputSmall" ref="comment"></input>
                          <button type="submit" className="btn btn-primary btn--margin"
                          >Post</button> 
                        </form>
                          
                        </div>
                    </div>
                    
                    <div className="card-footer text-muted">
                    <div className="card-bottom">
                    <div className="likes_comments likes_comments--single">
                          <p className="card__p"><i
                         className="far fa-heart far--hover"
                         onClick={this.props.addLike.bind(null, i)}
                         onMouseDown={()=> this.setState({animation: true})}
                         onMouseUp={()=> setTimeout(()=>this.setState({animation: false}), 600) }></i>
                         <span className="likeNum">{likes}</span>
                         </p>
                         <p className="card__p card__p--last">
                              <i className="far fa-comment"><span className="likeNum">{commentsNum}</span></i>
                          </p>
                    </div>
                        
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="card border-primary mb-3 card-about">
                    <div className="card-header"><span className="card__span">About</span></div>
                    <div className="card-body ">
                        <p className="card-body__p">{about}</p>
                     </div> 
                     <div className="card-footer text-muted">
                     <div className="card-bottom">
                     <Link to="/">
                            <button type="button" 
                            className="btn btn-primary"
                            onClick={this.props.detailsOpen}>

                            Back to gallery
                            </button>
                        </Link>
                        <p className="text-primary">more about this city on <a href={`https://en.wikipedia.org/wiki/${this.props.test.params.id}`} className="alert-link">Wiki</a> </p>
                        </div>  
                     </div>
                      
                </div> 
            </div>            
      )} else {
        return <NotFound />
      } 
    }
}

const mapStateToProps = (state)=> {
  return {
      name: state.name,
      data: state.data,
      comments: state.comments
  }
}

const mapDispachToProps = (dispach) => {
  return {
      addLike: (id)=> dispach(addLike(id)),
      addComment: (cityName, name, comment) => dispach(addComment(cityName, name, comment)),
      delComment: (cityName, i) => dispach(delComment(cityName,i))
  }
}

export default connect(mapStateToProps, mapDispachToProps)(SingleCapital);