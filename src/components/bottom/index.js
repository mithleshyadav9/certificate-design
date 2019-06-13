import React from 'react';
import ribbon from './ribbon.svg';
import moment from 'moment';


function  Bottom({ltext}) {
    return(
        <div className="bottom">
            <div className="date-box">
                <div className="item">{moment(Date.now()).format('l')}</div>
                <div className="date">Date</div>
            </div>
            <div className="ribbon">
                <div>
                <span>{ltext}</span>
                <img className="ribbon-svg" src={ribbon} alt="ribbon" />
                </div>
            </div>
            <div className="signature-box">
                <div className="item"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Justin_Timberlake_signature.svg" alt="dummy Sign" /> </div>
                <div className="signature">Signature</div>
            </div>

        </div>
    );
}

export default Bottom;