import React, { Fragment } from 'react';
import BoundingBox from './BoundingBox/BoundingBox';

const FaceRecognition = ({ imageUrl, boxes }) => {

  const boundingBoxes = boxes.map((box, i) => {
    return <div key={i}><BoundingBox box={box} /></div>
  })

  return (
    <>
        <div className='center ma'>
          <div className='absolute mt2'>
            <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
            {boundingBoxes}
          </div>
        </div>
    </>
  );
}

export default FaceRecognition;
