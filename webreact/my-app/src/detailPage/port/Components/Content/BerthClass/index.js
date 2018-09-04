import React,{Component} from 'react';
import ModuleTitle from '../../../Components/Content/PublicComponent/ModuleTitle'
import TableBox from '../../../Components/Content/PublicComponent/TableBox'
import PageEasy from '../../../Components/Content/PublicComponent/PageEasy';
import BerthClassEchart from '../Echarts/BerthClassEchart';
import server from '../../../../../axios/portAndBerthServer';
import '../../../style/page.css';
import './index.css';

class BerthClass extends Component{
    constructor(){
        super();
        this.handlePageChanged2 = this.handlePageChanged2.bind(this);
        this.berthClickCallback = this.berthClickCallback.bind(this);
        this.state = {
            //泊位分类返回数据
            selectBerthlGroupData:[],
            selectBerthlGroupCount:0,
            thisTypeBerth:0,
            //每页显示多少条
            pageNumber:4
        }
    }
    componentWillMount(){
        //泊位分类请求
        this.selectBerthlGroupServer(1,this.state.thisTypeBerth);
    }
    //泊位分类请求处理
    selectBerthlGroupServer(currentPage,flag){
        let self = this;
        //泊位分类
        server.selectBerthlGroup({id:this.props.portId,currentPage,flag,number:this.state.pageNumber},(data)=>{
            if(data){
                self.setState({selectBerthlGroupData:data.data,selectBerthlGroupCount:data.count})
            }
        })
    }
    //泊位统计图点击后加载表格
    berthClickCallback(type){

        this.selectBerthlGroupServer(1,type);
        this.setState({thisTypeBerth:type})
    }
    //泊位分类分页
    handlePageChanged2(page){
        this.selectBerthlGroupServer(page,this.state.thisTypeBerth)
    }
    render(){
        /**
         *总数不存在时初始化0
         * */
        let totalPageForBerth = this.state.selectBerthlGroupCount?Math.ceil(this.state.selectBerthlGroupCount/this.state.pageNumber):0;
        return (
                <div id="berth_class">
                    <ModuleTitle title="泊位分类" type="2"/>
                    <div className="berth_class_box">
                        <div className="berth_class_echart">
                            <BerthClassEchart id={this.props.portId} berthClick={this.berthClickCallback}/>
                        </div>
                        <div className="berth_class_table">
                            {
                                this.state.selectBerthlGroupData?
                                    <TableBox
                                        list={this.state.pageNumber}
                                        active={2}
                                        thead={["泊位ID","名称","状态","泊位类型","货物类型","装卸货物","经营公司"]}
                                        fileName={["berthid","berth_name","berth_status","berth_type","final_type","dry_bulk","berth_operator"]}
                                        data={this.state.selectBerthlGroupData}
                                    />:''
                            }
                            {
                                this.state.selectBerthlGroupCount?
                                    <PageEasy
                                        total={totalPageForBerth}
                                        current={1}
                                        position={'center'}
                                        onPageChanged={this.handlePageChanged2}
                                    />:''
                            }
                        </div>
                    </div>
                </div>
        )
    }
}
export default BerthClass;