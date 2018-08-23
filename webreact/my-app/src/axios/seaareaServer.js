


import axios from 'axios';

/**
     * 全球实时船舶统计
     * @param params
     * @param callback
     * @author anzp
     */
const  seaareaServer={
    loadAllSeaarea:function(params,callback){
       

    axios.get( 'http://localhost:3000/JSONdoc/globalSeaAreaSymbol_area.json', {params})
    .then(function(res) {
        callback(res.data);
        })
    .catch(function(error) {
        console.log(error);
        });
    }

}

export default seaareaServer;
