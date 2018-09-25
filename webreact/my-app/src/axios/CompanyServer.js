import axios from 'axios';
import server from '../Config/globaldefine';

const Companydata={
    getCompanybycompname:function(params,callback){
        axios.get(server.portAddress+'shiptail/service/company/getCompanyDetail',{params})
        .then(function(res){
            callback(res.data);
        }).catch(function(error){
            console.log('error');
        })
    },

    getCompanytableallteam:function(params,callback){
        axios.get(server.portAddress+'shiptail/service/company/getOwerFleet',{params})
        .then(function(res){
            callback(res.data);
        }).catch(function(error){
            console.log('error');
        })
    },
    getManageshipteam:function(params,callback){
        axios.get(server.portAddress+'shiptail/service/company/getManagerFleet',{params})
        .then(function(res){
            callback(res.data);
        }).catch(function(error){
            console.log('error');
        })
    },
    getOperateFleet:function(params,callback){
        axios.get(server.portAddress+'shiptail/service/company/getOperatorFleet',{params})
        .then(function(res){
            callback(res.data);
        }).catch(function(error){
            console.log('error');
        })
    },
    getRegisterFleet:function(params,callback){
        axios.get(server.portAddress+'shiptail/service/company/getRegisterFleet',{params})
        .then(function(res){
            callback(res.data);
        }).catch(function(error){
            console.log('error');
        })
    },
    loadAllrelationlink:function(params, callback){
        axios.get('http://localhost:3000/JSONdoc/test.json',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log("error");
        })
    },
}

export default Companydata;