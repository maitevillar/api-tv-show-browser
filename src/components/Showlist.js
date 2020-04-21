import React from 'react';
import '../scss/main.scss';
import Show from './Show';
import { Link } from 'react-router-dom';

const Showlist = (props) => {
    const {dataList, isRunning, value} = props
    console.log(props)

    return (
    <div className="content-container">
      
      <ul className="showlist-container">
         {dataList
         .filter(showObj=> showObj.show.name.toLowerCase().includes(value.toLowerCase()))
         .filter(dataObj => !isRunning || (isRunning && dataObj.show.status !== "Ended") )
         .map(dataObj => 
            <Link to={`/show/${dataObj.show.id}`}>
              <Show key = {dataObj.show.id}
                    id = {dataObj.show.id}
                    image = {dataObj.show.image}
                    name = {dataObj.show.name}
                    status = {dataObj.show.status}
                    genres = {dataObj.show.genres}
              />
            </Link>  
          )}  
      </ul> 

    </div>

    );
}

export default Showlist;