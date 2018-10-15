import axios from "axios";
import server from "../Config/globaldefine";
const shipServer = {
    //港区基本信息
    getPortTerminalDetail: function (params, callback) {
        //http://192.168.11.198:9072/portInfo/getPortTerminalDetail?terminalId=39032
        axios
            .get(server.portAddress + "portInfo/getPortTerminalDetail", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //泊位类型统计
    getBerthTotal: function (params, callback) {
        //http://192.168.11.198:9072/portInfo/getBerthTotal?terminalId=39032 
        axios
            .get(server.portAddress + "portInfo/getBerthTotal", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //泊位类型统计表格数据请求
    getAllBerthDetail: function (params, callback) {
        //http://192.168.11.198:9072/portInfo/getAllBerthDetail?terminalId=39032&pageNum=1&pageSize=5
        axios
            .get(server.portAddress + "portInfo/getAllBerthDetail", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //实时港货货物质量和数量数据统计
    getGoodsWeightAndNumberStatistics: function (params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodsWeightAndNumberStatistics?terminalId=39032
        axios
            .get(server.portAddress + "portInfo/getGoodsWeightAndNumberStatistics", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //实时港货表格数据请求
    getRealTimeGoods: function (params, callback) { 
        //http://192.168.11.198:9072/portInfo/getRealTimeGoods?terminalId=39032&pageNum=1&pageSize=5
        axios
            .get(server.portAddress + "portInfo/getRealTimeGoods", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //进出口货物近一年--出口
    getExitGoodsStatisticsByTerminal: function (params, callback) { 
        //http://192.168.11.198:9072/portInfo/getExitGoodsStatisticsByTerminal?terminalId=41558&year=2017
        axios
            .get(server.portAddress + "portInfo/getExitGoodsStatisticsByTerminal", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //进出口货物近一年--进口
    getImportGoodsStatisticsByTerminal: function (params, callback) {
        //http://192.168.11.198:9072/portInfo/getImportGoodsStatisticsByTerminal?terminalId=41558&year=2017
        axios
            .get(server.portAddress + "portInfo/getImportGoodsStatisticsByTerminal", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //进出口货物--国家
    getGoodsStatisticsByCountry: function (params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodsStatisticsByCountry?terminalId=41558&year=2017
        axios
            .get(server.portAddress + "portInfo/getGoodsStatisticsByCountry", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //进出口货物--港口
    getGoodsStatisticsByPort: function (params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodsStatisticsByPort?terminalId=41558&year=2017
        axios
            .get(server.portAddress + "portInfo/getGoodsStatisticsByPort", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    //进出口货物--公司
    getGoodsStatisticsByCompany: function (params, callback) {
        //http://192.168.11.198:9072/portInfo/getGoodsStatisticsByCompany?terminalId=41558&year=2017
        axios
            .get(server.portAddress + "portInfo/getGoodsStatisticsByCompany", { params })
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    

};

export default shipServer;
