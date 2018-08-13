import React from 'react';
import $ from 'jquery';
import './index.css';
import u69 from '../../../Assets/image/u69.png';
import u71 from '../../../Assets/image/u71.png';
import u73 from '../../../Assets/image/u73.png';
import u83 from '../../../Assets/image/u83.png';
import u75 from '../../../Assets/image/u75.png';

export default class GlobalPortInfo extends React.Component{
    constructor(){
        super();
        this.state = {
            total:0,
            num:0
        }
    }
    componentDidMount(){

    }
    showOrHideMenu(e){
        let $this = $(e.target);
        if($this.next().height()>0){
            $(".gpi_list_box").animate({height:"0"},300);
            $this.next().animate({height:"0"},300);
        }else{
            $this.next().css("height","auto");
            let h = $this.next().height();
            $(".gpi_list_box").animate({height:"0"},300);
            $this.next().animate({height:h+"px"},300);
        }
    }

    render(){
        return (
            <div className="gpi_box">
                <div className="gpi_title">全球港口信息总览</div>
                <div className="gpi_content">
                    <div className="gpi_list">
                        <div className="gpi_list_title" onClick={this.showOrHideMenu.bind(this)}>
                            全球港口总数:<span className="gpi_total">{this.props.liveShipTotal}</span>个
                            <span className="gpi_list_title_detail">详情>></span>
                        </div>
                        <ul className="gpi_list_box">
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                        </ul>
                    </div>
                    <div className="gpi_list">
                        <div className="gpi_list_title" onClick={this.showOrHideMenu.bind(this)}>
                            <img src={u69} alt="img"/>
                            全球港口活跃度排行(前十名)
                            <span className="gpi_list_title_detail">详情>></span>
                        </div>
                        <ul className="gpi_list_box">
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                        </ul>
                    </div>
                    <div className="gpi_list">
                        <div className="gpi_list_title" onClick={this.showOrHideMenu.bind(this)}>
                            <img src={u71} alt="img"/>
                            全球港口吞吐量排行(前十名)
                            <span className="gpi_list_title_detail">详情>></span>
                        </div>
                        <ul className="gpi_list_box">
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                        </ul>
                    </div>
                    <div className="gpi_list">
                        <div className="gpi_list_title" onClick={this.showOrHideMenu.bind(this)}>
                            <img src={u83} alt="img"/>
                            全球活跃船舶<span className="gpi_total">{this.props.liveShipTotal}</span>艘
                            <span className="gpi_list_title_detail">详情>></span>
                        </div>
                        <ul className="gpi_list_box">
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                        </ul>
                    </div>
                    <div className="gpi_list">
                        <div className="gpi_list_title" onClick={this.showOrHideMenu.bind(this)}>
                            <img src={u75} alt="img"/>
                            全球航运关系网络图
                        </div>
                        <ul className="gpi_list_box">
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                        </ul>
                    </div>
                    <div className="gpi_list">
                        <div className="gpi_list_title" onClick={this.showOrHideMenu.bind(this)}>
                            <img src={u73} alt="img"/>
                            海峡与经济体关系网络
                            <span className="gpi_list_title_detail">详情>></span>
                        </div>
                        <ul className="gpi_list_box gpi_default_open">
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                            <li><div>排名序号</div><div>港口名称</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}