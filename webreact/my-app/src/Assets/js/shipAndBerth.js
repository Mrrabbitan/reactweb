/**
 * 船舶和泊位的静态信息
 */
class shipAndBerth{

    /**
     * 船舶详细类型
     * @param berchType
     * @returns {string}
     */
    getBerchType(berchType) {
        let berthTypeMap = {
            "01" : "液体气体船",
            "0101" : "液化气船",
            "010101" : "液化天然气罐船",
            "01010101" : "液化天然气罐船",
            "010102" : "液化石油气罐船",
            "01010201" : "液化石油气罐船",
            "01010202" : "液化石油气/化学品罐船",
            "010103" : "二氧化碳油轮",
            "01010301" : "二氧化碳油轮",
            "0102" : "化学品船",
            "010201" : "化学品船",
            "01020101" : "熔硫罐船",
            "01020102" : "化学品船",
            "010202" : "化学/石油产品油轮",
            "01020201" : "化工/产品油轮",
            "010203" : "葡萄酒罐船",
            "01020301" : "葡萄酒罐船",
            "010204" : "植物油罐船",
            "01020401" : "植物油罐船",
            "010205" : "食用油罐船",
            "01020501" : "食用油罐船",
            "010206" : "啤酒罐船",
            "01020601" : "啤酒罐船",
            "010207" : "乳胶油罐船",
            "01020701" : "乳胶油罐船",
            "010208" : "果汁罐船",
            "01020801" : "果汁罐船",
            "0103" : "油轮",
            "010301" : "原油油轮",
            "01030101" : "穿梭油轮",
            "01030102" : "原油油轮",
            "01030103" : "原油/石油产品油轮",
            "010302" : "石油产品油轮",
            "01030201" : "产品罐船",
            "01030202" : "油轮（未指定）",
            "010303" : "沥青油轮",
            "01030301" : "沥青/沥青油轮",
            "010304" : "煤/油混合物罐船",
            "01030401" : "煤/油混合物罐船",
            "0104" : "其他液体",
            "010401" : "水罐船",
            "01040101" : "水罐船",
            "010402" : "糖浆罐船",
            "01040201" : "糖浆罐船",
            "010403" : "胶罐船",
            "01040301" : "胶罐船",
            "010404" : "酒精罐船",
            "01040401" : "酒精罐船",
            "010405" : "己内酰胺罐船",
            "01040501" : "己内酰胺罐船",
            "02" : "散货船",
            "0201" : "散装干燥",
            "020101" : "散货船",
            "02010101" : "散货船",
            "02010102" : "散货船",
            "02010103" : "甲板可装车辆散货船",
            "020102" : "矿石货船",
            "02010201" : "矿石货船",
            "0202" : "干散装/油船",
            "020201" : "散装/油船",
            "02020101" : "散装/油船（OBO）",
            "020202" : "矿石/油船",
            "02020201" : "矿石/油船",
            "0203" : "自卸式干散装船",
            "020301" : "自卸式散货船",
            "02030101" : "自卸式散货船",
            "02030102" : "自卸式散装船",
            "0204" : "其他干散装船",
            "020401" : "水泥运输船",
            "02040101" : "水泥运输船",
            "020402" : "木芯片货船",
            "02040201" : "木芯片货船",
            "020403" : "尿素货船",
            "02040301" : "尿素货船",
            "020404" : "聚合物货船",
            "02040401" : "聚合物货船",
            "020405" : "石灰石货船",
            "02040501" : "石灰石货船",
            "020406" : "精制糖货船",
            "02040601" : "精制糖货船",
            "020407" : "粉末货船",
            "02040701" : "粉末货船",
            "03" : "干货/客船",
            "0301" : "普通货船",
            "030101" : "一般货船",
            "03010101" : "杂货船（带滚装船）",
            "03010102" : "一般自卸货船",
            "03010103" : "打开舱口盖货船",
            "03010104" : "一般货物/油轮（集装箱/油/散货 - COB船）",
            "03010105" : "一般货物/油轮",
            "03010106" : "一般货船",
            "030102" : "码垛货船",
            "03010201" : "码垛货船",
            "030103" : "甲板货船",
            "03010301" : "甲板货船",
            "0302" : "客运/普通货物船",
            "030201" : "客货/杂货船",
            "03020101" : "一般货物/客船",
            "0303" : "集装船只",
            "030301" : "集装箱船",
            "03030101" : "集装箱船（完全蜂窝）",
            "03030102" : "集装箱船（充分蜂窝与Ro-Ro设施）",
            "030302" : "客运/集装箱船",
            "03030201" : "客运/集装箱船",
            "0304" : "冷藏货物",
            "030401" : "冷藏的货船",
            "03040101" : "冷藏的货船",
            "0305" : "滚装货物",
            "030501" : "滚装货船",
            "03050101" : "滚装货船",
            "03050102" : "轨道车货船",
            "030502" : "车辆货船",
            "03050201" : "车辆货船",
            "030503" : "集装箱/滚装货船",
            "03050301" : "集装箱/滚装货船",
            "030504" : "登陆艇",
            "03050401" : "登陆艇",
            "0306" : "客运/滚装货物船",
            "030601" : "客/滚装货船",
            "03060101" : "客运/滚装船（车辆）",
            "03060102" : "客运/滚装船（车辆/铁路）",
            "030602" : "乘客/登陆艇",
            "03060201" : "乘客/登陆艇",
            "0307" : "客船",
            "030701" : "客（巡航）船",
            "03070101" : "客/克鲁斯船",
            "030702" : "客船",
            "03070201" : "客船",
            "0308" : "其他干货船",
            "030801" : "牲畜货船",
            "03080101" : "牲畜货船",
            "030802" : "载货驳船",
            "03080201" : "载货驳船",
            "03080301" : "重载货船",
            "03080302" : "重载货船，半潜式",
            "03080303" : "游艇，半潜式",
            "030804" : "核燃料货船",
            "03080401" : "核燃料货船",
            "03080402" : "核燃料运输船（带滚装船）",
            "030805" : "纸浆货船",
            "03080501" : "纸浆货船",
            "04" : "渔船",
            "0401" : "捕鱼船",
            "040101" : "拖网渔船",
            "04010101" : "工厂船尾拖网渔船",
            "04010102" : "斯特恩拖网渔船",
            "04010103" : "拖网渔船",
            "040102" : "渔船",
            "04010201" : "渔船",
            "0402" : "其他渔船",
            "040201" : "渔业加工船",
            "04020101" : "渔业加工船",
            "040202" : "鱼类运输船",
            "04020201" : "鱼类运输船",
            "040203" : "活鱼货船",
            "04020301" : "活鱼船（井船）",
            "040204" : "渔业支持船",
            "04020401" : "养鱼场支持船",
            "04020402" : "渔业巡逻艇",
            "04020403" : "渔业研究船",
            "04020404" : "渔业支援船",
            "040205" : "猎海豹船",
            "04020501" : "猎海豹船",
            "040206" : "捕鲸船",
            "04020601" : "捕鲸船",
            "040207" : "海带挖泥船",
            "04020701" : "海带挖泥船",
            "040208" : "珍珠壳货船",
            "04020801" : "珍珠壳货船",
            "05" : "离岸船",
            "0501" : "离岸供应船",
            "050101" : "平台供应船",
            "05010101" : "船员/供应船",
            "05010102" : "管道货船",
            "05010103" : "平台供应船",
            "050102" : "离岸拖轮/供应船",
            "05010201" : "锚处理拖轮供应船",
            "05010202" : "离岸拖轮/供应船",
            "0502" : "其他离岸船",
            "050201" : "近海支持船",
            "05020101" : "近海支持船",
            "05020102" : "潜水支持船",
            "05020103" : "住宿船",
            "050202" : "钻井船",
            "05020201" : "钻井船",
            "050203" : "管道敷设机船",
            "05020301" : "管层起重机船",
            "05020302" : "管道敷设机船",
            "050204" : "生产测试船",
            "05020401" : "生产测试船",
            "050205" : "fpso储油轮",
            "05020501" : "fpso储油轮",
            "05020502" : "浮式储存再气化船",
            "050206" : "井刺激船",
            "05020601" : "井刺激船",
            "050207" : "备用安全船",
            "05020701" : "备用安全船",
            "050208" : "浮式储油船",
            "05020801" : "浮式储油船",
            "050209" : "挖沟支撑船",
            "05020901" : "挖沟支撑船",
            "050210" : "管埋船",
            "05021001" : "管埋船",
            "06" : "其它船只",
            "0601" : "科研船",
            "060101" : "科研船",
            "06010101" : "科研测量船",
            "0602" : "牵引/推船",
            "060201" : "拖船",
            "06020101" : "拖船",
            "060202" : "拖轮",
            "06020201" : "铰接推进拖轮",
            "06020202" : "拖轮拖轮",
            "0603" : "疏浚船",
            "060301" : "挖泥船",
            "06030101" : "桶阶梯挖泥船",
            "06030102" : "绞吸式挖泥船",
            "06030103" : "抓起挖泥船",
            "06030104" : "反铲挖泥船",
            "06030105" : "斗轮吸泥船",
            "06030106" : "吸泥船",
            "06030107" : "挖泥船（未指定）",
            "060302" : "漏斗挖泥船",
            "06030201" : "斗斗式挖泥船",
            "06030202" : "抓斗跳跃船",
            "06030203" : "吸料斗挖泥船",
            "06030204" : "耙吸式挖泥船",
            "06030205" : "料斗/挖泥船（未指定）",
            "0604" : "其他活动船",
            "060401" : "电机料斗船",
            "06040101" : "料斗，电机船",
            "06040102" : "石运输船",
            "060402" : "起重船",
            "06040201" : "起重船",
            "06040202" : "打桩船",
            "060403" : "破冰船",
            "06040301" : "破冰船",
            "06040302" : "破冰船/科研船",
            "060404" : "电缆铺设船",
            "06040401" : "电缆铺设船",
            "060405" : "废物处理船",
            "06040501" : "焚烧炉船",
            "06040502" : "废物处理船",
            "06040503" : "流体货船",
            "060406" : "消防船",
            "06040601" : "消防船",
            "060407" : "污染控制船",
            "06040701" : "污染控制船",
            "060408" : "巡逻船",
            "06040801" : "巡逻船",
            "060409" : "乘员组船",
            "06040901" : "乘员组船",
            "060410" : "训练船",
            "06041001" : "训练船",
            "060411" : "公用事业船",
            "06041101" : "公用事业船",
            "060412" : "搜救船",
            "06041201" : "搜救船",
            "060413" : "试验船",
            "06041301" : "试验船",
            "060414" : "打捞船",
            "06041401" : "打捞船",
            "060415" : "航标船，布标船",
            "06041501" : "航标船，布标船",
            "06041502" : "灯塔船",
            "06041503" : "灯塔供应船",
            "060416" : "供应船:联络船",
            "06041601" : "供应船:联络船",
            "060417" : "系泊船",
            "06041701" : "系泊船",
            "060418" : "工作/修理船",
            "06041801" : "工作/修理船",
            "060419" : "医船",
            "06041901" : "医船",
            "060420" : "洗舱船",
            "06042001" : "洗舱船",
            "060421" : "转运船",
            "06042101" : "转运船",
            "060422" : "抛锚艇",
            "06042201" : "锚处理船",
            "060423" : "帆船",
            "06042301" : "帆船",
            "0605" : "其他活动船",
            "0606" : "其他活动船",
            "060601" : "休闲船",
            "06060101" : "展览船",
            "06060102" : "剧院船",
            "06060103" : "作业船",
            "060602" : "干燥存储船",
            "06060201" : "散装干货船",
            "06060202" : "散装水泥储存船",
            "060603" : "采矿船",
            "06060301" : "采矿船",
            "060604" : "风力发电机组",
            "06060401" : "风力发电机组安装船",
            "06060402" : "风力发电机组安装船（半分）",
            "060605" : "加油罐船",
            "06060501" : "加油罐船",
            "060606" : "电站船",
            "06060601" : "电站船",
            "060607" : "船只（功能未知）",
            "06060701" : "船只（功能未知）",
            "060608" : "帆船",
            "06060801" : "帆船",
            "07" : "内陆水道船",
            "0701" : "内河航道油轮",
            "070101" : "内河船化学品罐船",
            "07010101" : "化学品船",
            "07010102" : "化工/产品油轮",
            "070102" : "内河航运油轮",
            "07010201" : "油船",
            "070103" : "内河航运其他液体油轮",
            "07010301" : "食用油罐船",
            "07010302" : "水罐船",
            "07010303" : "植物油罐船",
            "0702" : "内陆水路干货/客船",
            "070201" : "内陆水路干货船",
            "07020101" : "散装水泥运输船",
            "07020102" : "集装箱船（全蜂窝）",
            "07020103" : "一般货船，内河航道",
            "070202" : "客/货船",
            "07020201" : "一般货/客船",
            "070203" : "内陆水路滚装货船",
            "07020301" : "滚装货船，内河航道",
            "070204" : "客运/滚装货船",
            "07020401" : "客船/滚装船",
            "07020402" : "客运/滚装船",
            "070205" : "客船",
            "07020501" : "游轮",
            "07020502" : "客船",
            "0703" : "内陆航道其他非海上航行船只",
            "070301" : "内河渔船",
            "07030101" : "内河渔船",
            "070302" : "内陆水道科研船",
            "07030201" : "内河航运科研船",
            "070303" : "内陆水路拖/推船",
            "07030301" : "牵引/推动式内河航道船",
            "070304" : "内河航道疏浚船",
            "07030401" : "疏浚船",
            "070305" : "内河航运其他活动船只",
            "07030501" : "内河其他活动船只",
            "08" : "非商船只",
            "09" : "非商船",
            "0901" : "非商船",
            "0902" : "游艇",
            "090201" : "游艇",
            "09020101" : "游艇",
            "09020102" : "游艇",
            "09020103" : "游艇",
            "090202" : "帆船式训练船",
            "09020201" : "帆船式训练船",
            "090203" : "海军/海军辅助船",
            "09020301" : "起重船，海军辅助船",
            "09020302" : "海军辅助船",
            "09020303" : "补货干货船",
            "09020304" : "海军辅助医船",
            "09020305" : "海军辅助系泊船",
            "09020306" : "海军辅助修理船",
            "09020307" : "海军辅助航空运输船",
            "09020308" : "海军辅助训练船",
            "09020309" : "海军辅助科研船",
            "09020310" : "补给油轮",
            "09020311" : "未知功能的海军/海军辅助船",
            "09020312" : "潜水船，海军辅助船",
            "09020313" : "拖轮，海军辅助船",
            "09020314" : "救助船，海军辅助船",
            "09020315" : "海军小艇",
            "09020316" : "臂架防御船",
            "09020317" : "消磁船",
            "09020318" : "扫雷舰",
            "09020319" : "布雷船",
            "09020320" : "船员，海军辅助船",
            "09020321" : "布网舰",
            "09020322" : "水上飞机母舰",
            "09020323" : "鱼雷回收船",
            "09020324" : "运兵船",
            "09020325" : "弹药船",
            "09020326" : "潜艇救助船",
            "09020327" : "航空母舰",
            "09020328" : "指挥船",
            "09020329" : "小型护卫舰",
            "09020330" : "驱逐舰",
            "09020331" : "巡逻舰",
            "09020332" : "护卫舰",
            "09020333" : "直升机航母",
            "09020334" : "攻击舰",
            "09020335" : "巡逻船",
            "09020336" : "鱼雷试验船",
            "09020337" : "武器试验船",
            "09020338" : "潜艇追逐者",
            "09020339" : "鱼雷船",
            "09020340" : "油船，海军辅助船",
            "09020341" : "物流船（海上滚装货物）",
            "09020342" : "步兵登陆艇",
            "09020343" : "登陆船（码头类型）",
            "09020344" : "坦克登陆艇",
            "09020345" : "潜艇",
            "090204" : "其他非商船",
            "09020401" : "固定式培训船",
            "09020402" : "固定式住宿船",
            "09020403" : "灯塔船",
            "09020404" : "固定式船只",
            "09020405" : "固定餐船",
            "09020406" : "电台船",
            "010" : "非推进式船",
            "01001" : "非推进式船",
            "0100101" : "非推进式驳船",
            "010010101" : "非推进式散装集装驳船",
            "010010102" : "非推进式覆盖散货驳船",
            "010010103" : "非推进式散装水泥驳船",
            "010010104" : "非推进式鱼仓储驳船",
            "010010105" : "非推进式一般货物驳船",
            "010010106" : "非推进式沥青罐驳船",
            "010010107" : "非推进式转运驳船",
            "010010108" : "非推进式水箱驳船",
            "010010109" : "非推进式漏斗驳船",
            "010010110" : "非推进的水泥储存驳船",
            "010010111" : "非推进式化学罐驳船",
            "010010112" : "非推进式液化石油气驳船",
            "010010113" : "非推进式成品油罐驳船",
            "010010114" : "非推进式化学/成品油罐驳船",
            "010010115" : "非推进式原油油罐驳船",
            "0100102" : "平底船;（架设浮桥用的）浮舟",
            "010010201" : "pontoon甲板货船、半潜式",
            "010010202" : "半潜式导管铺设平底船",
            "010010203" : "链斗挖泥船",
            "010010204" : "甲板货物趸船，非推进",
            "010010205" : "抓起挖泥船浮桥",
            "010010206" : "吸扬式挖泥船",
            "010010207" : "疏浚趸船，未知疏浚类型船",
            "010010208" : "注水清淤平底船",
            "010010209" : "重船",
            "010010210" : "非推进式电站平底船",
            "010010211" : "非推进式粮食升降平底船",
            "010010212" : "人字起重架平底船",
            "010010213" : "非推进式海水淡化平底船",
            "010010214" : "综合购物船",
            "010010215" : "非推进式供汽平底船",
            "010010216" : "车辆运输船",
            "010010217" : "非推进式工作/维护平底船",
            "010010218" : "平底船（功能未知）",
            "011" : "非船舶结构（非船舶结构的水上物）",
            "01101" : "非船舶结构（非船舶结构的水上物）",
            "0110101" : "气垫船",
            "011010101" : "气垫/滚装船（车辆）",
            "011010102" : "气垫客船",
            "011010103" : "气垫工作船",
            "011010104" : "地效翼船",
            "011010105" : "气垫巡逻船",
            "0110102" : "浮动船坞",
            "011010201" : "船坞闸门",
            "011010202" : "浮动船坞",
            "011010203" : "机械升降船坞",
            "0110103" : "平台",
            "011010301" : "半潜式可住宿式钻井平台",
            "011010302" : "半潜式钻探平台",
            "011010303" : "半潜式潜水支撑平台",
            "011010304" : "半潜式管层平台",
            "011010305" : "半潜式维修平台",
            "011010306" : "支柱式可住宿起重平台",
            "011010307" : "支柱式起重机平台",
            "011010308" : "钻机起重平台",
            "011010309" : "支柱式起重维护平台",
            "011010310" : "支柱式供应平台",
            "011010311" : "抽水平台",
            "0110104" : "浮标（航标）",
            "011010401" : "系泊浮标",
            "0110105" : "连接架/码头（非船式结构水上物）",
            "011010501" : "连接架/码头（非船式结构水上物）",
            "50":"引航船舶",
            "51":"搜救传播",
            "52":"拖船",
            "53":"港口补给船",
            "54":"安装有防污染设施或设备船舶",
            "55":"执法船舶",
            "56":"备用-当地船舶指配使用",
            "57":"备用-当地船舶指配使用"
        }
        return berthTypeMap[berchType] ? berthTypeMap[berchType] : ''
    }

    /**
     * 获取船舶类型
     * @param type
     * @returns {string}
     */
    getShipType(type) {
        let typeMap = {
            '0101': '液化气船',
            '0102': '化学品船',
            '0103': '油轮',
            '02': '散货船',
            '0301': '普通货船',
            '0303': '集装箱船',
            '0304': '冷藏船',
            '0305': '滚装货船',
            '0308': '其他干货船'
        }
        return typeMap[type] ? typeMap[type] : ''
    }
    /**
     * 获取船舶样式
     * s_zi
     * s_hong
     * s_huang
     * s_hui
     * s_ju
     * s_lan
     * s_lv
     * s_tianlan
     * s_zifen
     * @param type
     * @returns {string}
     */
    getShipTypeStyle(type) {
        if(type.startsWith("0101")){
            //液化气船
            return "ship_s_zi";
        }else if(type.startsWith("0102")){
            //化学品船
            return "ship_s_hong";
        }else if(type.startsWith("0103")){
            //油轮
            return "ship_s_huang";
        }else if(type.startsWith("02")){
            //散货船
            return "ship_s_hui";
        }else if(type.startsWith("0301")){
            //普通货船
            return "ship_s_ju";
        }else if(type.startsWith("0303")){
            //集装箱船
            return "ship_s_lan";
        }else if(type.startsWith("0304")){
            // 冷藏船
            return "ship_s_lv";
        }else if(type.startsWith("0305")){
            //滚装货船
            return "ship_s_tianlan";
        }else if(type.startsWith("0308")){
            // 其他干货船
            return "ship_s_zifen";
        }else{
            return "portwu";
        }
    }
    tenCountryTranslate(en){
        switch (en){
            case "United States Of America":
                return '美国';
                break;
            case "China, People's Republic Of":
                return '中国';
                break;
            case "Japan":
                return '日本';
                break;
            case "Germany":
                return '德国';
                break;
            case "United Kingdom":
                return '英国';
                break;
            case "India":
                return '印度';
                break;
            case "France":
                return '法国';
                break;
            case "Italy":
                return '意大利';
                break;
            case "Canada":
                return '加拿大';
                break;
            case "Brazil":
                return '巴西';
                break;
            default:
                return ''
        }
    }
    getBerchTypeByBerthCode(code){
        switch (code) {
            case '11':
                return '石油';
                break;
            case '12':
                return 'lng';
                break;
            case '13':
                return 'lpg';
                break;
            case '21':
                return '化学品';
                break;
            case '30':
                return '干散货';
                break;
            case '31':
                return '集装箱';
                break;
            case '90':
                return '混合';
                break;
            case '99':
                return '其他';
                break;        
            default:
                return '';
                break;
        }
    }
    formatDate(time) {
        if (time == "") {
            return "";
        }
        var dat = new Date(time * 1000); //生成日期
        var year = dat.getFullYear(); //取得年
        var month = dat.getMonth() + 1; //取得月,js从0开始取,所以+1
        var date1 = dat.getDate(); //取得天
        var hour = dat.getHours(); //取得小时
        var minutes = dat.getMinutes(); //取得分钟
        var second = dat.getSeconds(); //取得秒
        return year + "-" + month + "-" + date1 + " " + hour + ":" + minutes + ":" + second;
    }
}
export  default  new shipAndBerth();