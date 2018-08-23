import $ from 'jquery';
//添加自定义组件
import simpleFeature from '../../Components/Basic/Map/Geometry/SimpleFeature';
import htmlTemplate from '../../Components/Basic/Map/Popup/HtmlTemplate';
import toolMap from '../../Components/Basic/Map/Other/ToolMap';
import portAndBerthServer from '../../axios/portAndBerthServer';
import mapEvent from "../../Components/Basic/Tool/event/MapEvent";
import Straitserver from '../../axios/straitserver';
import simplePolygon from '../../Components/Basic/Map/Geometry/simplePolygon'
import lineHtmlTemplate from '../Basic/Map/Popup/LineHtmlTemplate';
import simpleLine from '../../Components/Basic/Map/Geometry/SimpleLine';
import shipDataLayer from './ShipDataLayer';
import simpleLayer from '../../Components/Basic/Map/Layer/SimpleLayer';
import seaareaServer from '../../axios/seaareaServer';
import GPS from '../Basic/Map/Other/geotrans';
import dischargeServer from '../../axios/dischargeServer';
import seaareaTemplate from '../Basic/Map/Popup/seaareaTemplate';
import dischargetemplate from '../Basic/Map/Popup/dischargetemplate';

class MapListener {
    constructor(state) {
        this.mapObj = state;
        state.map.on('click', (this.clickSouth.bind(this)));
        state.map.on('moveend', (this.moveEnd.bind(this)));
        state.map.addControl(mapEvent.MousePosition());
        this.loadAllPort();
        this.loadStrait();
        this.loadRelation();
        this.shipDataLayer = new shipDataLayer(state.map, state.straitsource);
        this.berthLayer = null;
        this.loadSeaArea();
        this.loadDischarge();
        this.loadChinaDischarge();
        this.clickSouth = null;
    }

    /***
     * 将全球港口的信息，添加到地图
     */
    loadAllPort() {
        var self = this;
        //加载全球港口数据
        portAndBerthServer.loadAllPort({}, function (data) {
            data.data.data.forEach((item) => {
                var disInfo = htmlTemplate.createIndexTemplate1(item);
                var coord = toolMap.transform(item.longitudedecimal, item.latitudedecimal);
                simpleFeature.createAndAddPortPointFeature(self.mapObj.portSource, "shipleavingport", disInfo, coord, item.portid);
            });
        });
    }

    /***
     * 加载全球海峡数据
     */
    loadStrait() {
        var self = this;
        //加载全球海峡数据
        Straitserver.loadallstrait({}, function (data) {
            if (!data) {
                return "";
            }
            data.data.forEach((item) => {/* 循环取数据 */
                var lonlat = item.centPos;
                var lonlatdes = lonlat.substring(lonlat.indexOf("(") + 1, lonlat.indexOf(")"));
                var lonlatfin = lonlatdes.split("\s");
                var lonlatfinins = lonlatfin[0].split(" ");
                /* var disInfo = htmlTemplate.createIndexTemplate1(item); */
                var area = item.regionText.split('|');
                var arr = [];
                area.forEach((item) => {
                    var areaan = item.split(',');
                    var coord = toolMap.transform(areaan[0], areaan[1]);
                    arr.push(coord);

                })

                simplePolygon.createAndAddMap(self.mapObj.straitsource, 50, arr, 'indexStrait');

            })
        })
    }

    /* 增加海区内容,将原始数据保存在public的json文件夹下，用于脚手架编译的访问 */
    loadSeaArea() {
        let self = this;
        seaareaServer.loadAllSeaarea({}, function (data) {

            data.forEach((item) => {
                let disInfo = seaareaTemplate.dischargepop(item.name);
                let seaarea = item.multiGeometry;
                let border = seaarea.multiGeometry;
                let outlineborder = border[0].outerBoundaryIs[0].coordinates;
                let arr = [];
                let seaareaborder = outlineborder.split(',');
                for (var i = 0; i < seaareaborder.length; i++) {
                    var arrcode = [seaareaborder[i], seaareaborder[++i]];
                    var seaoutlinespot = GPS.gcj_encrypt(arrcode[0], arrcode[1])
                    var coord = toolMap.transform(seaoutlinespot[0], seaoutlinespot[1]);
                    arr.push(coord);
                }
                simplePolygon.createAndAddMap1(self.mapObj.seaareaSource, 50, arr, 'indexSeaArea', disInfo);
            })


        })

    }

    /*增加排放区内容,将原始数据保存在public的json文件夹下，用于脚手架编译后访问*/
    loadDischarge() {
        let self = this;
        dischargeServer.loadAlldisCharge({}, function (data) {
            data.forEach((item) => {
                let area = item.area[0];
                let disarea = area.line;
                for (var i = 0; i < disarea.length;) {
                    let disInfo = dischargetemplate.dischargepop(item.name);
                    let lon = disarea[i].lon;
                    let lat = disarea[i].lat;
                    var next = ++i;
                    if (!disarea[next]) {//判断最后为基数个点的时候，直接返回不用再加入点集内
                        return;
                    }
                    let lon1 = disarea[next].lon;
                    let lat1 = disarea[next].lat;
                    let frompoint = toolMap.transform(lon, lat);
                    let topoint = toolMap.transform(lon1, lat1);
                    simpleLine.createAndAddSourceLine(disInfo, self.mapObj.dischargeSource, frompoint, topoint, 'lineChoose', '全球排放点内容');

                }
            })
        })
    }


    /*
    增加中国排放区内容，数据同样保存在public下面
    */
    loadChinaDischarge() {
        let self = this;
        dischargeServer.loadChinadischarge({}, function (data) {
            data.forEach((item) => {

                let detaildata = item.data;
                let len = detaildata.length;
                for (var i = 0; i < len;) {
                    let disInfo = dischargetemplate.dischargepop(item.name);
                    let lon = detaildata[i].lon;
                    let lat = detaildata[i].lat;
                    var desplus = ++i;
                    if (!detaildata[desplus]) {
                        return;
                    }
                    let lon1 = detaildata[desplus].lon;
                    let lat1 = detaildata[desplus].lat;
                    let frompoint = toolMap.transform(lon, lat);
                    let topoint = toolMap.transform(lon1, lat1);
                    simpleLine.createAndAddSourceLine(disInfo, self.mapObj.ChinadischargeSource, frompoint, topoint, 'dischargeLine', '中国地区排放');
                }
            })

        })

    }

    /***
     * 加载港口之间的关系网络图
     */
    loadRelation() {
        let self = this;
        portAndBerthServer.loadStraitRelation(function (data) {

            //加载所有的港口
            data.portGird.map((item) => {
                var disInfo = lineHtmlTemplate.relationTemplate(item);
                var coord = toolMap.transform(item.longitudedecimal, item.latitudeDecimal);

                simpleFeature.createAndAddPointFeature(self.mapObj.relationSource, "shipleavingport", disInfo, coord);
            });
            //添加关系网络线
            data.relation.map((item) => {
                let disInfo = lineHtmlTemplate.relationTemplate(item);
                let fromPoint = toolMap.transform(item.startlog, item.startlat);
                let toPoint = toolMap.transform(item.endlog, item.endlat);
                simpleLine.createAndAddSourceLine(disInfo, self.mapObj.relationSource, fromPoint, toPoint, "portline", "关系网络线");
            })
        });
    }

    /* 增加弹窗出现的基本内容 点击港口图标显示港口标牌——————————————————————————————————————————————————————————*/
    clickSouth(evt) {
        var self = this;
        var coordinate = evt.coordinate;
        /* 声明点击后的坐标 */
        self.clickSouth = coordinate;
        var pixel = self.mapObj.map.getEventPixel(evt.originalEvent);
        var feature = self.mapObj.map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            if (layer == self.mapObj.portLayer || layer == self.mapObj.shipLayer) {
                //点击首页的港口图层
                self.portClick(feature, layer, self.mapObj.popupOverlay.getElement(), self.mapObj.popupOverlay);
                return "not todo";
            } else if (layer == self.mapObj.seaareaLayer) {
                //点击首页的海区图层
                self.seaareaClick(feature, layer, self.mapObj.popupOverlay.getElement(), self.mapObj.popupOverlay);
                return "not todo";
            } else if (layer == self.mapObj.berthLayer) {
                //点击首页的港口图层
                self.berthClick(feature, layer, self.mapObj.popupOverlay.getElement(), self.mapObj.popupOverlay, coordinate);
                return "not todo";
            }
        })
        if (feature == null) {
            self.mapObj.popupOverlay.setPosition(undefined);
            $("#popup-content").html("");
            $("#popup").removeClass('popup-seaarea');
        }
    }

    //出现弹窗
    portClick(feature, layer, element, popLayer) {
        var self = this;
        var portId = feature.get('portId');
        $("#popup-content").html(feature.get('disInfo'));
        popLayer.setPosition(feature.getGeometry().getCoordinates());
        $("#popup").removeClass('popup-seaarea');
        if (portId) {
            var berthSource = self.mapObj.berthSource;
            berthSource.clear();
            portAndBerthServer.getBerthByPortId({portId}, function (data) {

                $.each(data.data, function (i, item) {

                    var region = item.regionMap;
                    var arr = [];
                    $.each(region, function (j, item2) {
                        arr.push(toolMap.transform(item2.lon, item2.lat));
                    });
                    simplePolygon.createBerthPolygonAndAddMap(berthSource, 48, arr, 'indexStrait', htmlTemplate.createBerthDisInfo(item));
                });
            })
        }
    };

    seaareaClick(feature, layer, element, popLayer) {
        $("#popup-content").html(feature.G.disinfo);
        $("#popup").addClass('popup-seaarea');
        popLayer.setPosition(this.clickSouth);

    };

    berthClick(feature, layer, element, popLayer, coordinate) {
        $("#popup-content").html(feature.get('disInfo'));
        popLayer.setPosition(this.clickSouth);

    }

    moveEnd(evt) {
        var self = this;
        var newZoomLevel = self.mapObj.map.getView().getZoom();
        if (newZoomLevel > 6) {
            self.mapObj.portLayer.setVisible(true);
        } else if (newZoomLevel < 6) {
            self.mapObj.portLayer.setVisible(false);
        }
        //船舶图层显隐
        if (newZoomLevel <= 8) {
            self.mapObj.shipLayer.setVisible(false);
            $(".shipTypeConvas").show();

        } else if (newZoomLevel >= 8) {
            self.mapObj.shipLayer.setVisible(true);
            $(".shipTypeConvas").hide();
        }
    }

    //数据图层画图操作
    getDataLayer(data) {
        console.time("AddcanvasLayerTime");
        //将数据添加到canvas图层中，默认展示
        let self = this;
        this.shipDataLayer.renderLayer(data);
        console.timeEnd("AddcanvasLayerTime")
    }

    addShip(data) {
        console.time("AddShipLayerTime");
        data.map((item) => {
            this.mapObj.shipSource;
            let disInfo = `<div>${item.I}</div>`;
            let coods = toolMap.transform(item.X / 1000000, item.Y / 1000000)
            let type = "portwu";
            simpleFeature.createAndAddPointFeature(this.mapObj.shipSource, type, disInfo, coods)
        });
        console.timeEnd("AddShipLayerTime")
    }

    clearCanvasLayer() {
        this.shipDataLayer.clearCanvasLayer();
    }
}
export default MapListener;