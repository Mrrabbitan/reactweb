import React,{Component} from 'react';
import './index.css';

const TableSpecial = (props) =>{

    let data = props.data;
    if(!data){
        return (<div></div>)
    }
    console.log(data);
    let cnName = data.type=='country'?"国家":"港口";
    let len = data.importCount.length;
    return (
        <table className="tableSpecial" cellSpacing="0" cellPadding="0">
            <thead>
                <tr>
                    <td rowSpan="2">{cnName}</td>
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
                data.importCount.map((item,index)=>{
                    if(index==0){
                        return (
                            <tr key={index}>
                                <td rowSpan={len}>{data.name}</td>
                                <td>{item.type}</td>
                                <td>{item.voyage}</td>
                                <td>{item.volume}</td>
                                <td>{data.exportCount[index].type}</td>
                                <td>{data.exportCount[index].voyage}</td>
                                <td>{data.exportCount[index].volume}</td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            <td>{item.type}</td>
                            <td>{item.voyage}</td>
                            <td>{item.volume}</td>
                            <td>{data.exportCount[index].type}</td>
                            <td>{data.exportCount[index].voyage}</td>
                            <td>{data.exportCount[index].volume}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default TableSpecial;