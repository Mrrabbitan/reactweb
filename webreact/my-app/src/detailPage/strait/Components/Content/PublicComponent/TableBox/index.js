import React from 'react';
import './index.css'

const TableBox = (props) => {
    const {
        //列数
        list = 0,
        //高亮列数
        active = 1,
        //表格头文字
        thead = [],
        //字段名称数组
        fileName = [],
        //数据
        data = []
    } = props;
    const renderThead = () => { 
        return thead.map((item, index) => (
            <td key={'thead'+index}>{item}</td>
        ))
    }
    const renderTbody = () => { 
        if (!data) { 
            return (<tr></tr>);
        }
        return data.map((item, index) => {
            if (index > list - 1) return;
            return (
                <tr key={index + "tr"}>
                    {fileName.map((fitem, findex) => {
                        if (findex === active - 1) {
                            return (
                                <td key={findex + "td"} className="active">{item[fitem]}</td>
                            )
                        }
                        return (
                            <td key={findex + "td"}>{item[fitem]}</td>
                        )
                    })}
                </tr>

            )
        })
    }
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        { renderThead() }
                    </tr>
                </thead>
                <tbody>
                    { renderTbody() }
                </tbody>
            </table>
        </div>
    )
}
export default TableBox;