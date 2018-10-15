import axios from "axios";
import server from "../Config/globaldefine";
const shipServer = {
    //关联航次线型统计图
    getGoodTypeVoyage: function (params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodTypeVoyage?type=iron&year=2017
        axios
            .get(server.portAddress + "portInfo/getGoodTypeVoyage", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //关联航次表格
    getGoodTypeRelationShip: function (params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodTypeRelationShip?type=iron&year=2017&pageNum=1&pageSize=5
        axios
            .get(server.portAddress + "portInfo/getGoodTypeRelationShip", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //关联港口进口港口图表
    getGoodImportePort(params,callback) { 
        //http://192.168.11.198:9072/portInfo/getGoodImportePort?type=iron&year=2017
        axios
            .get(server.portAddress + "portInfo/getGoodImportePort", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //关联港口出口图表
    getGoodExitPort(params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodExitPort?type=iron&year=2017
        axios
            .get(server.portAddress + "portInfo/getGoodExitPort", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //关联国家进口图表
    getGoodImporteCountry(params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodImporteCountry?type=iron&year=2017
        axios
            .get(server.portAddress + "portInfo/getGoodImporteCountry", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //关联国家出口港口图表
    getGoodExitCountry(params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodExitCountry?type=iron&year=2017
        axios
            .get(server.portAddress + "portInfo/getGoodExitCountry", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //关联国家表格数据请求
    getGoodsImportExitTotal(params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodsImportExitTotal?type=iron&year=2017&pageNum=1&pageSize=5
        axios
            .get(server.portAddress + "portInfo/getGoodsImportExitTotal", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //关联港口表格数据请求
    getGoodsImportExitTotalByType(params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodsImportExitTotalByType?type=iron&year=2017
        axios
            .get(server.portAddress + "portInfo/getGoodsImportExitTotalByType", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //关联港口表格数据请求
    getGoodsDetailByPort(params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodsDetailByPort?type=iron&year=2017&pageNum=1&pageSize=5
        axios
            .get(server.portAddress + "portInfo/getGoodsDetailByPort", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //关联国家图表数据请求
    getGoodsImportExitTotalByCompany(params, callback) { 
        //http://192.168.11.198:9072/portInfo/getGoodsImportExitTotalByCompany?type=iron&year=2017
        axios
            .get(server.portAddress + "portInfo/getGoodsImportExitTotalByCompany", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //全年走势图
    getWeekTend(params, callback) {
        //http://192.168.11.198:9072/portInfo/getWeekTend?type=iron&year=2017
        axios
            .get(server.portAddress + "portInfo/getWeekTend", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    
    
    
    
};

export default shipServer;
