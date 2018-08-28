import $ from 'jquery';
import ol from 'openlayers';
import toolMap from "../../../Basic/Map/Other/ToolMap";

class ShipDataLayer{
    constructor(map,layer){
        this.layer = layer;
        this.map = map;
        this.canvas = null;
        this.ctx = null;
        this.data = null;
        this.showFlag = true;
        this.initialize();
    }
   initialize () {
        var self  = this;
        var map = this.map;
        var canvas = this.canvas = document.createElement('canvas');
        canvas.className = "shipTypeConvas";
        var ctx = this.ctx = this.canvas.getContext('2d');
        canvas.style.cssText = 'position:absolute;' + 'left:0;' + 'top:0;' + 'z-index:' + this.zIndex + ';';
       this.adjustSize();
       this.adjustRatio(ctx);
        map.getViewport().appendChild(canvas);
        var that = this;
        map.getView().on('propertychange', function() {
           $(canvas).hide();
        });
        map.on("moveend", function() {
           if(self.showFlag){
                $(canvas).show();
                that.adjustSize();
                if(that.data){
                    that.render(that.data);
                }
           }
        });
    };

  adjustSize() {
        var size = this.map.getSize();
        var canvas = this.canvas;
        canvas.width = size[0];
        canvas.height = size[1];
        canvas.style.width = canvas.width + 'px';
        canvas.style.height = canvas.height + 'px';
    };

    adjustRatio () {
        let ctx = this.ctx;
        var backingStore = ctx.backingStorePixelRatio || ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        var pixelRatio = (window.devicePixelRatio || 1) / backingStore;
        var canvasWidth = ctx.canvas.width;
        var canvasHeight = ctx.canvas.height;
        ctx.canvas.width = canvasWidth * pixelRatio;
        ctx.canvas.height = canvasHeight * pixelRatio;
        ctx.canvas.style.width = canvasWidth + 'px';
        ctx.canvas.style.height = canvasHeight + 'px';
        ctx.scale(pixelRatio, pixelRatio);
    };


    /***
     * 从MapListener中获取数据，并将数据保存至this.data中
     * @param data
     */
    renderLayer(data){
        this.data = data;
        this.render(data);

    }

    /***
     * 渲染数据
     * @param data
     */
    render(data){
        var size = this.map.getSize();
        this.ctx.clearRect(0, 0, size[0], size[1]);
       data.map((item) => {
           //console.log(item);
            this.draw_point(item);
        });
    }

    /**
     * 画点
     * @param point  点
     */
    draw_point(point) {
        var coordinate = toolMap.transform(point.X/1000000,point.Y/1000000);
        let [X,Y] = this.map.getPixelFromCoordinate([coordinate[0],coordinate[1]]);
        //设置绘制颜色
        this.ctx.fillStyle="#00ff00";
        //绘制成矩形
        this.ctx.fillRect(X,Y,2,2);
    }

    /**
     * 清除画布，并清除缓存数据
     */
    clearCanvasLayer(){
        this.data = null;
        var size = this.map.getSize();
        this.ctx.clearRect(0, 0, size[0], size[1]);
    }

    /**
     * 隐藏画布
     */
    canvasHide(){
        this.showFlag = false;
        $(this.canvas).hide();
    }
    /**
     * 显示画布
     */
    canvasShow(){
        this.showFlag = true;
        $(this.canvas).show();
    }
}
export default ShipDataLayer;