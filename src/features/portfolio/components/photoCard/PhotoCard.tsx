import React, { FC } from 'react';
import './photoCard.scss'

type PhotoCardProps = {
  cover: String;
  name: String;
}

const PhotoCard: FC<PhotoCardProps> = ({ cover, name }) => {
  return (
    <caption className='photoCard'>
      <img className='photoCard__img' src={`${cover}`} alt={`${name}`}/>
      {name}
    </caption>
  );
};

export default PhotoCard;