import React from 'react';
import Film from './film';

const FilmList = ({films}) => {
    const filmNodes = films.map((film, index)=>{
        return <Film name={film.name} url={film.url} key={index}/>
    })

    return(
        <>
        {filmNodes}
        </>
    )
}

export default FilmList