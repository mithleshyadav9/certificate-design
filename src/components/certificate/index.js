import React from 'react';
import Heading from '../heading';
import Middle from '../middle';
import Bottom from '../bottom';
import './certificate.css';

function Certificate({name,desc,ltext,back}) {

  return (
    
    <div className="container">
      <div className="back" onClick={()=>back()}>Go Back</div>
        <div className="box">
            <Heading />
          <div>
            <Middle name={name} desc={desc} />
            <Bottom ltext={ltext} />         
          </div>
        </div>
    </div>

  );
}

export default Certificate;