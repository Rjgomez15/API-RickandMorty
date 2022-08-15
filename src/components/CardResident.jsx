import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {
    const resident = useFetch(url)

  return (
    <article>
        <header>
            <div className="image_character">
                <img src={resident?.image} alt={`image of ${resident?.name}`} />
            </div>
            <div>
                <div className='circle'></div>
                <span>{resident?.status}</span>
             </div>
        </header>
        <div className="info_character">
        <div>
            <h3>{resident?.name}</h3>
            <ul>
                <li>
                    <span>Species: </span>
                    {resident?.species}
                </li>
                <li>
                    <span>Origin: </span>
                    {resident?.origin.name}
                </li>
                <li>
                    <span>Episodes where appear: </span>
                    {resident?.episode.length}
                </li>
            </ul>
        </div>
        </div>
    </article>
  )
}

export default CardResident