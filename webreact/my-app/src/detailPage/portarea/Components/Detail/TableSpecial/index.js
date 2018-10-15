import React from 'react';
import './index.css';

const TableSpecial = (props) =>{
    //    数据   字段名  
    let { data, fileName , name} = props;
    let _data;
    if (data.length == 0) {
        _data = [];
    } else { 
        _data = data;
    }
    
    let n = _data.length;//合并单元数
    return (
        <table className="tableSpecial" cellSpacing="0" cellPadding="0">
            <thead>
                <tr>
                    <td rowSpan="2">{name}</td>
                    <td colSpan="3">进口</td>
                    <td colSpan="3">出口</td>
                </tr>
                <tr>
                    <td>货物</td>
                    <td>航次</td>
                    <td>货量</td>
                    <td>货物</td>
                    <td>航次</td>
                    <td>货量</td>
                </tr>
            </thead>
            <tbody>
                {
                    _data.map((item1, index1) => { 
                        return (
                            <tr key={"item1"+index1}>
                                {
                                    fileName.map((item2,index2) => { 
                                        if (index1 == 0&&index2==0) {
                                            return (<td key={"item2" + index2} rowSpan={n}>
                                                {item1[item2]}
                                            </td>)
                                        } else { 
                                            if (index2 != 0) { 
                                                return (<td key={"item2" + index2}>
                                                    {item1[item2]}
                                                </td>)
                                            }
                                            
                                        }
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default TableSpecial;