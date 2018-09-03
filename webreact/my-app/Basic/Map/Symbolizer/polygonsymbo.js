import ol from 'openlayers'

 let polygonSymbo = {

    /* 
    复杂样式的实现方式
    这里实现新的海峡区域
    */
    "indexStrait" : function(feature){
        var lstyle = feature.get('level');
        var name = feature.get('name');
        var red = lstyle / 100 * 255;
        var greed = (1 - lstyle / 100) * 255;
        var color = ol.color.asArray([ 233, 30, 99, 1 ]);
        var text = new ol.style.Text({
            textAlign : "center",
            textBaseline : "middle",
            font : "normal " + "10px" + " Verdana",
            fill : new ol.style.Fill({
                color : "#000"
            }),
            stroke : new ol.style.Stroke({
                color : "#ffffff",
                width : "3"
            }),
            offsetX : "0",
            offsetY : "-5",
            rotation : "0"
        });
        text.setText(name);
        var fill = new ol.style.Fill();
        fill.setColor(color);
        return new ol.style.Style({
            fill : fill,
            text : text,
        })
    },

     /***
      * 海区样式
      * @param feature
      */
    "indexSeaArea" : function(feature){
        return  new ol.style.Style({
            /*fill: new ol.style.Fill({ //矢量图层填充颜色，以及透明度
              color: 'rgba(255, 255, 255, 0.3)'
            }),*/
            stroke: new ol.style.Stroke({ //边界样式
              color: '#4395ba',
              width: 1
            }),
            text: new ol.style.Text({ //文本样式
              font: '12px Calibri,sans-serif',
              fill: new ol.style.Fill({
                color: '#000'
              }),
              stroke: new ol.style.Stroke({
                color: '#fff',
                width: 3
              })
            })
          })
    },


 }

export default polygonSymbo;