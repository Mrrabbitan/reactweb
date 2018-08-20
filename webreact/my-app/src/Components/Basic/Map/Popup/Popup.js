import ol from 'openlayers';

class Popup{
    basicPopup(map,id){
        var popupElement = document.getElementById(id);
        var popupOverlay = new ol.Overlay({
            element: popupElement,
            autoPan: true,
            positioning: 'bottom-center',
        });
        //需要将港口信息加入弹框中
        map.addOverlay(popupOverlay);
        return [popupElement,popupOverlay];
    }
}
export default new Popup();