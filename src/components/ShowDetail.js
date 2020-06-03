import React from 'react';
import '../scss/main.scss';
import { Link } from 'react-router-dom';

const ShowDetail = (props) => {
  const {dataList, showItem} = props
  
    return (
      <div className="showdetail-wrapper">
      <Link to={`/#`} className="return"> </Link>
      <h1 className="main-title"> - {showItem.show.name} - </h1>
      <div className="showlist-detail">
        <div className="head-detail"> x </div>
          <li className="show" id={showItem.show.id}>   
          <div className="show__content">
            <img className="show-picture"
                 src={showItem.show.image.medium} alt={showItem.show.name} 
            />

            <div className="show__content--container">
              <h1 className="show-title"> {showItem.show.name} </h1>
              <h3 className="show-subtitle"> Score: {showItem.show.rating.average} </h3>

              <span className="show__content--text"     dangerouslySetInnerHTML={{__html: showItem.show.summary}} 
              /> 

              <ul className="show__content--list">
                <span> Genres:
                {showItem.show.genres.map((genres,index) => (
                  <li key={index}             className="list-item">
                    {genres} |
                  </li> 
                ))}
                </span> 
              </ul>
            </div>
          </div>

            <img className="show__big-picture" 
                 src={showItem.show.image.original} 
                 alt={showItem.show.name} 
            />
        </li>
      </div>
      </div>
    );
  }
export default ShowDetail;
