import React, {Component} from 'react';
import './index.css'

class TableBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //列数
            li: 0,
            //高亮列数
            active:1,
            //表格头文字
            thead: [],
            //字段名称数组
            fileName: [],
            //数据
            data: []
        }
    }

    render() {
        return (
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        {this.props.thead.map((item, index)=>(
                            <td key={index + 'thead'}>{item}</td>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.data.map((item, index)=> {
                            if (index > this.props.li - 1)return;
                            return (
                                <tr key={index + "tr"}>
                                    {this.props.fileName.map((fitem, findex)=> {
                                        if (findex == this.props.active - 1) {
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