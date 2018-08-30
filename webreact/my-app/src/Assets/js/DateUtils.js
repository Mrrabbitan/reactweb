/***
 * 日期处理工具类
 */
class DateUtils{

    buZero(number){
        if(number){
            return Number(number)<10 ? "0"+number : number;
        }
        return "";
    }

    formatDate(time) {
        let dat = new Date(time * 1000); //生成日期
        let year = dat.getFullYear(); //取得年
        let month = this.buZero(dat.getMonth() + 1); //取得月,js从0开始取,所以+1
        let date1 = this.buZero(dat.getDate()); //取得天
        let hour = this.buZero(dat.getHours()); //取得小时
        let minutes = this.buZero(dat.getMinutes()); //取得分钟
        let second = this.buZero(dat.getSeconds()); //取得秒
        return year + "-" + month + "-" + date1 + " " + hour + ":" + minutes + ":" + second;
    }
    
    getNowDate() {
        let dat = new Date(); //生成日期
        let year = dat.getFullYear(); //取得年
        let month = dat.getMonth() + 1; //取得月,js从0开始取,所以+1
        let date1 = dat.getDate(); //取得天
        return year + "-" + month + "-" + date1;
    }
    formatDegree(value) {
        let valueabs = Math.abs(value);
        let v1 = Math.floor(valueabs);
        let v2 = Math.floor((valueabs - v1) * 60);
        let v3 = Math.floor((valueabs - v1) * 3600 % 60);
        let s = '';
        if (value < 0) {
            s = '-';
        }
        return s + v1 + '°' + v2 + '\'' + v3 + '"';
    }

    formatSecond(value) {
        let hour = parseInt(value / 3600);
        let min = parseInt((value % 3600) / 60);
        let sec = parseInt(value % 60);
        let res = '';
        if (hour) {
            res += hour + '小时';
            res += min + '分';
            res += sec + '秒';
        } else if (min) {
            res += min + '分';
            res += sec + '秒';
        } else {
            res += sec + '秒';
        }
        return res;
    }
    formatSecondDay(value) {
        let day = parseInt(value / 3600 / 24);
        let hour = parseInt(value % 3600 % 24);
        let min = parseInt((value % 3600) / 60);
        let sec = parseInt(value % 60);
        let res = '';
        if(day){
            res += day + '天';
            res += hour + '小时';
            res += min + '分';
            res += sec + '秒';
        }else if (hour) {
            res += hour + '小时';
            res += min + '分';
            res += sec + '秒';
        } else if (min) {
            res += min + '分';
            res += sec + '秒';
        } else {
            res += sec + '秒';
        }
        return res;
    }
    
}
export default  new DateUtils();
