import React from 'react';
import '../scss/main.scss';

function Show(props) {  

  const prevImage = props.image
  if (prevImage !== null){
    return (
      <div className="show-item">
          <p className="show-item__subtitle"> 
             {props.status} 
          </p>
          <h4 className="show-item__title"> 
              {props.name} 
          </h4>
          <img className="show-item__picture" 
               src= {prevImage.medium} 
               alt={props.name} 
          />
      </div>
    );
  }
  else {
    return (
      <div className="show-item">
      <p className="show-item__subtitle"> 
        {props.status} 
      </p>
      <h4 className="show-item__title"> 
          {props.name} 
      </h4>
      <img className="show-item__picture--error" 
      
      />
  </div>
     );
  }
}

export default Show;