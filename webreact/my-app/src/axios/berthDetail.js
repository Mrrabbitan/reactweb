import axios from 'axios';
import sever from "../Config/globaldefine";
import { Server } from 'tls';
const berthDetail={
    getBerthByBerthId:function(params, callback){
        axios.get(sever.portAddress+'berthInfo/getBerthByBerthId',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log("error");
        })
    },
    getBerthUsingInfoByBerthId:function(params, callback){
        axios.get(sever.portAddress+'mongo/getBerthUsingInfo',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log("error");
        })
    },
    /* 
    *选取泊位基本信息，同时用在泊位设备模块
    */
    selectBasicInfo:function(params,callback){
        axios.get(sever.portAddress+'berthInfo/getBerthByBerthId',{params})
        .then(function(res){
            callback(res.data)
        })
        .catch(function(error){
            console.log('error');
        })
    },
    /* 
    船舶历史表格展示
    */
    selectshiphistory:function(params,callback){
        axios.get(sever.portAddress+'berthInfo/selectMMSIByBerthIdAndCurrentPage',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log('error');
        })
    },
   /* 
   船舶历史流量折线图
   */ 
    selectshiphistorybrokenline:function(params,callback){
        axios.get(sever.portAddress+'berthInfo/selectCountByOdMonth',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log('error');
        })

    },
/* 
*停靠类型
*/
    getallkindsofshipinberth:function(params,callback){
        axios.get(sever.portAddress+'berthInfo/getBerthStopType',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log('error');
        })
    },
/* 
*作业效率
*/
    getallkindsofworkingeffectice:function(params,callback){
        axios.get(sever.portAddress+'berthInfo/getBerthLoadUnload',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log('error');
        })
    },

/* 
近一年工作天数
*/
    getoneyearworkingday:function(params,callback){
        axios.get(sever.portAddress+'berthInfo/getBerthWorkingByMouth',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log('error');
        })
    },
/* 
当月工作天数
*/

    getcurrentmouthworkingday:function(params,callback){
        axios.get(sever.portAddress+'berthInfo/getBerthWorkingByDay',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log('error');
        })
    },
/* 
    shipping待舶时长
*/
    shippingwaittingtime:function(params,callback){
        axios.get(sever.portAddress+'berthInfo/getBerthPending',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log('error');
        })
    },

/* 
泊位关联关系
*/
    getberthrelation:function(params,callback){
        axios.get(sever.portAddress+'berthInfo/getBerthRelationPort',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log('error');
        })
    },

}

export default berthDetail;