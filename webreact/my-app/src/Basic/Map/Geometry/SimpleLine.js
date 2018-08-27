import ol from 'openlayers';


/***
 * 创建所有的线
 */
class SimpleLine{

    /**
     * 生成最基本的线
     * @param disInfo  弹出的HTML模板
     * @param formPoint  起点坐标
     * @param toPoint    终点坐标
     * @param type       显示图标类型
     * @param name        线的名称
     * @returns {Feature|google.maps.Data.Feature}
     */
    createBaiscLine(disinfo,formPoint,toPoint,type,name){
        return new ol.Feature({
            type,
            name ,
            disinfo ,
            geometry : new ol.geom.LineString([ formPoint, toPoint ])
        });
    }

    /**
     * 生成线并添加到地图
     * @param disInfo      弹出的HTML模板
     * @param source     添加地图的source图层
     * @param formPoint  起点坐标
     * @param toPoint    终点坐标
     * @param type       显示图标类型
     * @param name        线的名称
     */
    createAndAddSourceLine(disinfo,source,formPoint,toPoint,type,name) {
        let line = this.createBaiscLine(disinfo, formPoint, toPoint, type, name);
        source.addFeature(line);
    }
}
export default new SimpleLine();