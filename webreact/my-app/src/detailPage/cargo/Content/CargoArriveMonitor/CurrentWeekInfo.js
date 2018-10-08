import React from 'react';
import './index.css';

const CurrentWeekInfo = () => {
    return (
        <div className="cwi_box">
            <table>
                <thead>
                    <tr>
                        <td className="active">9月第四周</td>
                        <td>船舶艘次</td>
                        <td>货量</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>本期</td>
                        <td>137</td>
                        <td>2287</td>
                    </tr>
                    <tr>
                        <td>上期</td>
                        <td>137</td>
                        <td>2568</td>
                    </tr>
                    <tr>
                        <td>预计下期</td>
                        <td>137</td>
                        <td>2310</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CurrentWeekInfo;