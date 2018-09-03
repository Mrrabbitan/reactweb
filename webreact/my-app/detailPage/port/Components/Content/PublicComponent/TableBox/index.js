import React, {Component} from 'react';
import './index.css'

class TableBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //列数
            li: props.list,
            //高亮列数
            active:props.active,
            //表格头文字
            thead: props.thead,
            //字段名称数组
            fileName: props.fileName,
            //数据
            data: props.data
        }
    }

    render() {
        return (
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        {this.state.thead.map((item, index)=>(
                            <td key={index + 'thead'}>{item}</td>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((item, index)=> {
                            if (index > this.state.li - 1)return;
                            return (
                                <tr key={index + "tr"}>
                                    {this.state.fileName.map((fitem, findex)=> {
                                        if (findex == this.state.active - 1) {
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
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TableBox;