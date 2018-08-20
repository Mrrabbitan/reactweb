/**
 * 地图工具类
 */
import ol from 'openlayers';
class Tool {
    /**
     * 转换坐标
     * @param lon  经度
     * @param lat  纬度
     */
    transform(lon, lat) {
        return ol.proj.transform([parseFloat(lon), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857');
    }

    /**
     * 添加np识别经纬度的位置函数
     * @param value
     * @returns {string}
     */
    formatDegree(value) {
        var valueabs = Math.abs(value);
        var v1 = Math.floor(valueabs);
        var v2 = Math.floor((valueabs - v1) * 60);
        var v3 = Math.floor((valueabs - v1) * 3600 % 60);
        var s = '';
        if (value < 0) {
            s = '-';
        }
        return s + v1 + '°' + v2 + '\'' + v3 + '"';
    }

    /***
     * 首页右下角，生成坐标方法
     * @param coordinate
     * @returns {string}
     */
    indexTipPos(coordinate) {
        //return "经度:"+parseInt(coordinate[0]*1000000)+" 纬度:"+parseInt(coordinate[1]*1000000);
        if (coordinate[0] > 180) {
            coordinate[0] = coordinate[0] % 360;
            if (coordinate[0] > 180) {
                coordinate[0] = coordinate[0] - 360;
            }
        } else if (coordinate[0] < -180) {
            coordinate[0] = coordinate[0] % 360;
            if (coordinate[0] < -180) {
                coordinate[0] = coordinate[0] + 360;
            }
        }
        return "经度:" + this.formatDegree(coordinate[0]) + " 纬度:" + this.formatDegree(coordinate[1]);
    }

}
export  default new Tool()