import React from 'react';
import './Range.css';

const Range = ({per}) => { 
    let left = per?396 * Number(per / 100)+"px":0;
    return (
        <div className="range_box">
            <span className="range_icon range_icon_left"></span>
            <div className="range_bar"><div className="range_fill_bg" style={{"width":left}}></div></div>
            <span className="range_icon range_icon_right"></span>
            <span className="range_icon range_move" style={{left}}></span>
        </div>
    )
}
export default Range;