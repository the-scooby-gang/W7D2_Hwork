import React from 'react';

const Film = ({name, url}) => {
    return(
      <div>
        <ul>
            <li> <a href={url}>{name}</a> </li>
        </ul>
      </div>
    )
}

export default Film;