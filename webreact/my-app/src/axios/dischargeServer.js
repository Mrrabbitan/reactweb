import axios from 'axios'

const disChargeServer={
        loadAlldisCharge:function(params, callback){
            axios.get('http://localhost:3000/JSONdoc/globalDischargeAreaSymbol_Area.json',{params})
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log("error");
            })
        },

        loadChinadischarge:function(params, callback){
            axios.get('http://localhost:3000/JSONdoc/chinaDischargeAreaSymbol_area.json',{params})
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log("error");
            })
        }

}

export default disChargeServer;