// 一、基础数据
const roleLimits = [
    "仅可使用黄头发的干员",
    "仅可使用红头发的干员",
    "仅可使用蓝头发的干员",
    "仅可使用绿头发的干员",
    "仅可使用白头发的干员",
    "仅可使用粉头发的干员",
    "仅可使用黑头发的干员",
    "仅可使用棕头发的干员",
    "仅可使用近卫与先锋干员",
    "仅可使用医疗与狙击干员",
    "仅可使用术士与特种干员",
    "仅可使用重装与辅助干员"
];



// 新增：血狼破军合约榜20位干员数据（可修改干员名和图片路径）
const BLOODWOLF_OPERATORS = [

    { id: 1, name: "伊内丝", img: "operators/1-伊内丝.jpg" },
    { id: 2, name: "刻俄柏", img: "operators/2-刻俄柏.jpg" },
    { id: 3, name: "铃兰", img: "operators/3-铃兰.jpg" },
    { id: 4, name: "逻各斯", img: "operators/4-逻各斯.jpg" },
    { id: 5, name: "焰影苇草", img: "operators/5-焰影苇草.jpg" },
    { id: 6, name: "琴柳", img: "operators/6-琴柳.jpg" },
    { id: 7, name: "风笛", img: "operators/7-风笛.jpg" },
    { id: 8, name: "艾拉", img: "operators/8-艾拉.jpg" },
    { id: 9, name: "缄默德克萨斯", img: "operators/9-缄默德克萨斯.jpg" },
    { id: 10, name: "温蒂", img: "operators/10-温蒂.jpg" },
    { id: 11, name: "歌蕾蒂娅", img: "operators/11-歌蕾蒂娅.jpg" },
    { id: 12, name: "黍", img: "operators/12-黍.jpg" },
    { id: 13, name: "史尔特尔", img: "operators/13-史尔特尔.jpg" },
    { id: 14, name: "妮芙", img: "operators/14-妮芙.jpg" },
    { id: 15, name: "麦哲伦", img: "operators/15-麦哲伦.jpg" },
    { id: 16, name: "灵知", img: "operators/16-灵知.jpg" },
    { id: 17, name: "塑心", img: "operators/17-塑心.jpg" },
    { id: 18, name: "伊芙利特", img: "operators/18-伊芙利特.jpg" },
    { id: 19, name: "塞雷娅", img: "operators/19-塞雷娅.jpg" },
    { id: 20, name: "夜莺", img: "operators/20-夜莺.jpg" },
    { id: 21, name: "维什戴尔", img: "operators/21-维什戴尔.jpg" },
    { id: 22, name: "莱伊", img: "operators/22-莱伊.jpg" },
    { id: 23, name: "余", img: "operators/23-余.jpg" },
    { id: 24, name: "归溟幽灵鲨", img: "operators/24-归溟幽灵鲨.jpg" },
    { id: 25, name: "维娜维多利亚", img: "operators/25-维娜维多利亚.jpg" },
    { id: 26, name: "烛煌", img: "operators/26-烛煌.jpg" },
    { id: 27, name: "林", img: "operators/27-林.jpg" },
    { id: 28, name: "莫斯提马", img: "operators/28-莫斯提马.jpg" },
    { id: 29, name: "傀影", img: "operators/29-傀影.jpg" },
    { id: 30, name: "瑕光", img: "operators/30-瑕光.jpg" },
    { id: 31, name: "艾雅法拉", img: "operators/31-艾雅法拉.jpg" },
    { id: 32, name: "仇白", img: "operators/32-仇白.jpg" },
    { id: 33, name: "耀骑士临光", img: "operators/33-耀骑士临光.jpg" },
    { id: 34, name: "阿斯卡纶", img: "operators/34-阿斯卡纶.jpg" },
    { id: 35, name: "麒麟R夜刀", img: "operators/35-麒麟R夜刀.jpg" },
    { id: 36, name: "左乐", img: "operators/36-左乐.jpg" },
    { id: 37, name: "缪尔赛思", img: "operators/37-缪尔赛思.jpg" },
    { id: 38, name: "荒芜拉普兰德", img: "operators/38-荒芜拉普兰德.jpg" },
    { id: 39, name: "涤火杰西卡", img: "operators/39-涤火杰西卡.jpg" },
    { id: 40, name: "年", img: "operators/40-年.jpg" },
    { id: 41, name: "假日威龙陈", img: "operators/41-假日威龙陈.jpg" },
    { id: 42, name: "锏", img: "operators/42-锏.jpg" },
    { id: 43, name: "玛恩纳", img: "operators/43-玛恩纳.jpg" },
    { id: 44, name: "引星棘刺", img: "operators/44-引星棘刺.jpg" },
    { id: 45, name: "银灰", img: "operators/45-银灰.jpg" },
    { id: 46, name: "白铁", img: "operators/46-白铁.jpg" },
    { id: 47, name: "灰烬", img: "operators/47-灰烬.jpg" },
    { id: 48, name: "乌尔比安", img: "operators/48-乌尔比安.jpg" },
    { id: 49, name: "魔王", img: "operators/49-魔王.jpg" },
    { id: 50, name: "泥岩", img: "operators/50-泥岩.jpg" },
    { id: 51, name: "斥罪", img: "operators/51-斥罪.jpg" },
    { id: 52, name: "黑键", img: "operators/52-黑键.jpg" },
    { id: 53, name: "赫德雷", img: "operators/53-赫德雷.jpg" },
    { id: 54, name: "凯尔希", img: "operators/54-凯尔希.jpg" },
    { id: 55, name: "多萝西", img: "operators/55-多萝西.jpg" },
    { id: 56, name: "纯烬艾雅法拉", img: "operators/56-纯烬艾雅法拉.jpg" },
    { id: 57, name: "阿", img: "operators/57-阿.jpg" },
    { id: 58, name: "薇薇安娜", img: "operators/58-薇薇安娜.jpg" },
    { id: 59, name: "浊心斯卡蒂", img: "operators/59-浊心斯卡蒂.jpg" },
    { id: 60, name: "佩佩", img: "operators/60-佩佩.jpg" },
    { id: 61, name: "玛露西尔", img: "operators/61-玛露西尔.jpg" },
    { id: 62, name: "闪灵", img: "operators/62-闪灵.jpg" },
    { id: 63, name: "星熊", img: "operators/63-星熊.jpg" },
    { id: 64, name: "百炼嘉维尔", img: "operators/64-百炼嘉维尔.jpg" },
    { id: 65, name: "娜仁图亚", img: "operators/65-娜仁图亚.jpg" },
    { id: 66, name: "安洁莉娜", img: "operators/66-安洁莉娜.jpg" },
    { id: 67, name: "霍尔海雅", img: "operators/67-霍尔海雅.jpg" },
    { id: 68, name: "迷迭香", img: "operators/68-迷迭香.jpg" },
    { id: 69, name: "澄闪", img: "operators/69-澄闪.jpg" },
    { id: 70, name: "忍冬", img: "operators/70-忍冬.jpg" },
    { id: 71, name: "淬羽赫默", img: "operators/71-淬羽赫默.jpg" },
    { id: 72, name: "圣约送葬人", img: "operators/72-圣约送葬人.jpg" },
    { id: 73, name: "令", img: "operators/73-令.jpg" },
    { id: 74, name: "号角", img: "operators/74-号角.jpg" },
    { id: 75, name: "森蚺", img: "operators/75-森蚺.jpg" },
    { id: 76, name: "山", img: "operators/76-山.jpg" },
    { id: 77, name: "煌", img: "operators/77-煌.jpg" },
    { id: 78, name: "早露", img: "operators/78-早露.jpg" },
    { id: 79, name: "提丰", img: "operators/79-提丰.jpg" },
    { id: 80, name: "鸿雪", img: "operators/80-鸿雪.jpg" },
    { id: 81, name: "弑君者", img: "operators/81-弑君者.jpg" },
    { id: 82, name: "黑", img: "operators/82-黑.jpg" },
    { id: 83, name: "水月", img: "operators/83-水月.jpg" },
    { id: 84, name: "重岳", img: "operators/84-重岳.jpg" },
    { id: 85, name: "夕", img: "operators/85-夕.jpg" },
    { id: 86, name: "卡涅利安", img: "operators/86-卡涅利安.jpg" },
    { id: 87, name: "流明", img: "operators/87-流明.jpg" },
    { id: 88, name: "止颂", img: "operators/88-止颂.jpg" },
    { id: 89, name: "斯卡蒂", img: "operators/89-斯卡蒂.jpg" },
    { id: 90, name: "能天使", img: "operators/90-能天使.jpg" },
    { id: 91, name: "空弦", img: "operators/91-空弦.jpg" },
    { id: 92, name: "嵯峨", img: "operators/92-嵯峨.jpg" },
    { id: 93, name: "焰尾", img: "operators/93-焰尾.jpg" },
    { id: 94, name: "推进之王", img: "operators/94-推进之王.jpg" },
    { id: 95, name: "赫拉格", img: "operators/95-赫拉格.jpg" },
    { id: 96, name: "艾丽妮", img: "operators/96-艾丽妮.jpg" },
    { id: 97, name: "陈", img: "operators/97-陈.jpg" },
    { id: 98, name: "菲亚梅塔", img: "operators/98-菲亚梅塔.jpg" },
    { id: 99, name: "棘刺", img: "operators/99-棘刺.jpg" },
    { id: 100, name: "琳琅诗怀雅", img: "operators/100-琳琅诗怀雅.jpg" },
    { id: 101, name: "老鲤", img: "operators/101-老鲤.jpg" },
    { id: 102, name: "异客", img: "operators/102-异客.jpg" },
    { id: 103, name: "帕拉斯", img: "operators/103-帕拉斯.jpg" },
    { id: 104, name: "W", img: "operators/104-W.jpg" },
    { id: 105, name: "远牙", img: "operators/105-远牙.jpg" },
    { id: 106, name: "伺夜", img: "operators/106-伺夜.jpg" }

];






const RAID_RANGES = ["mainRaid", "eventEXRaid", "eventSRaid"];
const levelsByRange = {

    main: [ 

    "主线0-1", "主线0-2", "主线0-3", "主线0-4", "主线0-5", "主线0-6", "主线0-7", "主线0-8", "主线0-9", "主线0-10", "主线0-11",
    "主线1-1", "主线1-2", "主线1-3", "主线1-4", "主线1-5", "主线1-6", "主线1-7", "主线1-8", "主线1-9", "主线1-10", "主线1-12",
    "主线2-1", "主线2-2", "主线2-3", "主线2-4", "主线2-5", "主线2-6", "主线2-7", "主线2-8", "主线2-9", "主线2-10",
    "主线3-1", "主线3-2", "主线3-3", "主线3-4", "主线3-5", "主线3-6", "主线3-7", "主线3-8",
    "主线4-1", "主线4-2", "主线4-3", "主线4-4", "主线4-5", "主线4-6", "主线4-7", "主线4-8", "主线4-9", "主线4-10",
    "主线5-1", "主线5-2", "主线5-3", "主线5-4", "主线5-5", "主线5-6", "主线5-7", "主线5-8", "主线5-9", "主线5-10",
    "主线6-1", "主线6-2", "主线6-3", "主线6-4", "主线6-5", "主线6-7", "主线6-8", "主线6-9", "主线6-10", "主线6-11", "主线6-12", "主线6-14", "主线6-15", "主线6-16",
    "主线7-2", "主线7-3", "主线7-4", "主线7-5", "主线7-8", "主线7-9", "主线7-10", "主线7-11", "主线7-12", "主线7-13", "主线7-14", "主线7-15", "主线7-16", "主线7-17", "主线7-18",
    "主线R8-1", "主线R8-2", "主线R8-3", "主线R8-4", "主线R8-5", "主线R8-6", "主线R8-7", "主线R8-8", "主线R8-9", "主线R8-10", "主线R8-11", "主线M8-6", "主线M8-7", "主线M8-8", "主线JT8-1", "主线JT8-3",
    "主线9-2", "主线9-3", "主线9-4", "主线9-5", "主线9-6", "主线9-7", "主线9-9", "主线9-10", "主线9-11", "主线9-12", "主线9-13", "主线9-14", "主线9-15", "主线9-16", "主线9-17", "主线9-18", "主线9-19",
    "主线10-2", "主线10-3", "主线10-4", "主线10-5", "主线10-6", "主线10-7", "主线10-8", "主线10-9", "主线10-10", "主线10-11", "主线10-12", "主线10-14", "主线10-15", "主线10-16", "主线10-17",
    "主线11-1", "主线11-2", "主线11-3", "主线11-5", "主线11-6", "主线11-7", "主线11-8", "主线11-9", "主线11-11", "主线11-12", "主线11-13", "主线11-14", "主线11-15", "主线11-16", "主线11-18", "主线11-20",
    "主线12-2", "主线12-3", "主线12-4", "主线12-5", "主线12-6", "主线12-7", "主线12-8", "主线12-9", "主线12-10", "主线12-12", "主线12-13", "主线12-14", "主线12-15", "主线12-17", "主线12-18", "主线12-19", "主线12-20",
    "主线13-2", "主线13-3", "主线13-4", "主线13-5", "主线13-6", "主线13-7", "主线13-8", "主线13-10", "主线13-11", "主线13-12", "主线13-13", "主线13-14", "主线13-15", "主线13-16", "主线13-17", "主线13-18", "主线13-19", "主线13-20", "主线13-21",
    "主线14-2", "主线14-3", "主线14-4", "主线14-5", "主线14-6", "主线14-7", "主线14-8", "主线14-9", "主线14-11", "主线14-12", "主线14-14", "主线14-15", "主线14-16", "主线14-17", "主线14-18", "主线14-19", "主线14-20", "主线14-21",
    "主线15-3", "主线15-4", "主线15-5", "主线15-6", "主线15-7", "主线15-8", "主线15-9", "主线15-10", "主线15-11", "主线15-12", "主线15-13", "主线15-14", "主线15-15", "主线15-17", "主线15-18", "主线15-20"

    ],

    mainRaid: [ 

    "突袭主线0-1", "突袭主线0-2", "突袭主线0-3", "突袭主线0-4", "突袭主线0-5", "突袭主线0-6", "突袭主线0-7", "突袭主线0-8", "突袭主线0-9", "突袭主线0-10", "突袭主线0-11",
    "突袭主线1-1", "突袭主线1-2", "突袭主线1-3", "突袭主线1-4", "突袭主线1-5", "突袭主线1-6", "突袭主线1-7", "突袭主线1-8", "突袭主线1-9", "突袭主线1-10", "突袭主线1-12",
    "突袭主线2-1", "突袭主线2-2", "突袭主线2-3", "突袭主线2-4", "突袭主线2-5", "突袭主线2-6", "突袭主线2-7", "突袭主线2-8", "突袭主线2-9", "突袭主线2-10",
    "突袭主线3-1", "突袭主线3-2", "突袭主线3-3", "突袭主线3-4", "突袭主线3-5", "突袭主线3-6", "突袭主线3-7", "突袭主线3-8",
    "突袭主线4-1", "突袭主线4-2", "突袭主线4-3", "突袭主线4-4", "突袭主线4-5", "突袭主线4-6", "突袭主线4-7", "突袭主线4-8", "突袭主线4-9", "突袭主线4-10",
    "突袭主线5-1", "突袭主线5-2", "突袭主线5-3", "突袭主线5-4", "突袭主线5-5", "突袭主线5-6", "突袭主线5-7", "突袭主线5-8", "突袭主线5-9", "突袭主线5-10",
    "突袭主线6-1", "突袭主线6-2", "突袭主线6-3", "突袭主线6-4", "突袭主线6-5", "突袭主线6-7", "突袭主线6-8", "突袭主线6-9", "突袭主线6-10", "突袭主线6-11", "突袭主线6-12", "突袭主线6-14", "突袭主线6-15", "突袭主线6-16",
    "突袭主线7-2", "突袭主线7-3", "突袭主线7-4", "突袭主线7-5", "突袭主线7-8", "突袭主线7-9", "突袭主线7-10", "突袭主线7-11", "突袭主线7-12", "突袭主线7-13", "突袭主线7-14", "突袭主线7-15", "突袭主线7-16", "突袭主线7-17", "突袭主线7-18",
    "突袭主线R8-1", "突袭主线R8-2", "突袭主线R8-3", "突袭主线R8-4", "突袭主线R8-5", "突袭主线R8-6", "突袭主线R8-7", "突袭主线R8-8", "突袭主线R8-9", "突袭主线R8-10", "突袭主线R8-11", "突袭主线M8-6", "突袭主线M8-7", "突袭主线M8-8", "突袭主线JT8-1", "突袭主线JT8-3",
    "突袭主线9-2", "突袭主线9-3", "突袭主线9-4", "突袭主线9-5", "突袭主线9-6", "突袭主线9-7", "突袭主线9-9", "突袭主线9-10", "突袭主线9-11", "突袭主线9-12", "突袭主线9-13", "突袭主线9-14", "突袭主线9-15", "突袭主线9-16", "突袭主线9-17", "突袭主线9-18", "突袭主线9-19",
    "突袭主线10-2", "突袭主线10-3", "突袭主线10-4", "突袭主线10-5", "突袭主线10-6", "突袭主线10-7", "突袭主线10-8", "突袭主线10-9", "突袭主线10-10", "突袭主线10-11", "突袭主线10-12", "突袭主线10-14", "突袭主线10-15", "突袭主线10-16", "突袭主线10-17",
    "突袭主线11-1", "突袭主线11-2", "突袭主线11-3", "突袭主线11-5", "突袭主线11-6", "突袭主线11-7", "突袭主线11-8", "突袭主线11-9", "突袭主线11-11", "突袭主线11-12", "突袭主线11-13", "突袭主线11-14", "突袭主线11-15", "突袭主线11-16", "突袭主线11-18", "突袭主线11-20",
    "突袭主线12-2", "突袭主线12-3", "突袭主线12-4", "突袭主线12-5", "突袭主线12-6", "突袭主线12-7", "突袭主线12-8", "突袭主线12-9", "突袭主线12-10", "突袭主线12-12", "突袭主线12-13", "突袭主线12-14", "突袭主线12-15", "突袭主线12-17", "突袭主线12-18", "突袭主线12-19", "突袭主线12-20",
    "突袭主线13-2", "突袭主线13-3", "突袭主线13-4", "突袭主线13-5", "突袭主线13-6", "突袭主线13-7", "突袭主线13-8", "突袭主线13-10", "突袭主线13-11", "突袭主线13-12", "突袭主线13-13", "突袭主线13-14", "突袭主线13-15", "突袭主线13-16", "突袭主线13-17", "突袭主线13-18", "突袭主线13-19", "突袭主线13-20", "突袭主线13-21",
    "突袭主线14-2", "突袭主线14-3", "突袭主线14-4", "突袭主线14-5", "突袭主线14-6", "突袭主线14-7", "突袭主线14-8", "突袭主线14-9", "突袭主线14-11", "突袭主线14-12", "突袭主线14-14", "突袭主线14-15", "突袭主线14-16", "突袭主线14-17", "突袭主线14-18", "突袭主线14-19", "突袭主线14-20", "突袭主线14-21",
    "突袭主线15-3", "突袭主线15-4", "突袭主线15-5", "突袭主线15-6", "突袭主线15-7", "突袭主线15-8", "突袭主线15-9", "突袭主线15-10", "突袭主线15-11", "突袭主线15-12", "突袭主线15-13", "突袭主线15-14", "突袭主线15-15", "突袭主线15-17", "突袭主线15-18", "突袭主线15-20"

    ],

    mainH: [ 

    "主线H5-1", "主线H5-2", "主线H5-3", "主线H5-4",
    "主线H6-1", "主线H6-2", "主线H6-3", "主线H6-4",
    "主线H7-1", "主线H7-2", "主线H7-3", "主线H7-4",
    "主线H8-1", "主线H8-2", "主线H8-3", "主线H8-4",
    "主线H9-1", "主线H9-2", "主线H9-3", "主线H9-4", "主线H9-5", "主线H9-6",
    "主线H10-1", "主线H10-2", "主线H10-3",
    "主线H11-1", "主线H11-2", "主线H11-3", "主线H11-4",
    "主线H12-1", "主线H12-2", "主线H12-3", "主线H12-4",
    "主线H13-1", "主线H13-2", "主线H13-3", "主线H13-4",
    "主线H14-1", "主线H14-2", "主线H14-3", "主线H14-4",
    "主线H15-1", "主线H15-2", "主线H15-3", "主线H15-4"

    ],

    event: [

    "骑兵与猎人GT-1", "骑兵与猎人GT-2",  "骑兵与猎人GT-3",  "骑兵与猎人GT-4",  "骑兵与猎人GT-5",  "骑兵与猎人GT-6",  
    "火蓝之心OF-1",  "火蓝之心OF-2",  "火蓝之心OF-3",  "火蓝之心OF-4",  "火蓝之心OF-5",  "火蓝之心OF-6",  "火蓝之心OF-7",  "火蓝之心OF-8",  "火蓝之心OF-F1",  "火蓝之心OF-F2",  "火蓝之心OF-F3",  "火蓝之心OF-F4",
    "喧闹法则CB-1",  "喧闹法则CB-2",  "喧闹法则CB-3",  "喧闹法则CB-4",  "喧闹法则CB-5",  "喧闹法则CB-6",  "喧闹法则CB-7",  "喧闹法则CB-8",  "喧闹法则CB-9",  "喧闹法则CB-10",  
    "生于黑夜DM-1" ,  "生于黑夜DM-2" ,  "生于黑夜DM-3" ,  "生于黑夜DM-4" ,  "生于黑夜DM-5" ,  "生于黑夜DM-6" ,  "生于黑夜DM-7" ,  "生于黑夜DM-8",  
    "沃伦姆德的薄暮TW-1",  "沃伦姆德的薄暮TW-2",  "沃伦姆德的薄暮TW-3",  "沃伦姆德的薄暮TW-4",  "沃伦姆德的薄暮TW-5",  "沃伦姆德的薄暮TW-6",  "沃伦姆德的薄暮TW-7",  "沃伦姆德的薄暮TW-8",  
    "密林悍将归来RI-1",  "密林悍将归来RI-2",  "密林悍将归来RI-3",  "密林悍将归来RI-4",  "密林悍将归来RI-5",  "密林悍将归来RI-6",  "密林悍将归来RI-7",  "密林悍将归来RI-8",  "密林悍将归来RI-9",
    "玛莉娅临光MN-1",  "玛莉娅临光MN-2",  "玛莉娅临光MN-3",  "玛莉娅临光MN-4",  "玛莉娅临光MN-5",  "玛莉娅临光MN-6",  "玛莉娅临光MN-7",  "玛莉娅临光MN-8",  
    "孤岛风云MB-1",  "孤岛风云MB-2",  "孤岛风云MB-3",  "孤岛风云MB-4",  "孤岛风云MB-5",  "孤岛风云MB-6",  "孤岛风云MB-7",  "孤岛风云MB-8",  
    "画中人WR-1",  "画中人WR-2",  "画中人WR-3",  "画中人WR-4",  "画中人WR-5",  "画中人WR-6",  "画中人WR-7",  "画中人WR-8",  "画中人WR-9",  "画中人WR-10",  
    "遗尘漫步WD-1",  "遗尘漫步WD-2",  "遗尘漫步WD-3",  "遗尘漫步WD-4",  "遗尘漫步WD-5",  "遗尘漫步WD-6",  "遗尘漫步WD-7",  "遗尘漫步WD-8",  
    "覆潮之下SV-1",  "覆潮之下SV-2",  "覆潮之下SV-3",  "覆潮之下SV-4",  "覆潮之下SV-5",  "覆潮之下SV-6",  "覆潮之下SV-7",  "覆潮之下SV-8",  "覆潮之下SV-9",  
    "多索雷斯假日DH-1",  "多索雷斯假日DH-2",  "多索雷斯假日DH-3",  "多索雷斯假日DH-4",  "多索雷斯假日DH-5",  "多索雷斯假日DH-6",  "多索雷斯假日DH-7",  "多索雷斯假日DH-8",  "多索雷斯假日DH-9",
    "长夜临光NL-1",  "长夜临光NL-2",  "长夜临光NL-3",  "长夜临光NL-4",  "长夜临光NL-5",  "长夜临光NL-6",  "长夜临光NL-7",  "长夜临光NL-8",  "长夜临光NL-9",  "长夜临光NL-10",  
    "风雪过境BI-1",  "风雪过境BI-2",  "风雪过境BI-3",  "风雪过境BI-4",  "风雪过境BI-5",  "风雪过境BI-6",  "风雪过境BI-7",  "风雪过境BI-8",  
    "将进酒IW-1",  "将进酒IW-2",  "将进酒IW-3",  "将进酒IW-4",  "将进酒IW-5",  "将进酒IW-6",  "将进酒IW-7",  "将进酒IW-8",  "将进酒IW-9",  
    "吾导先路GA-1" ,  "吾导先路GA-2",  "吾导先路GA-3",  "吾导先路GA-4",  "吾导先路GA-5",  "吾导先路GA-6",  "吾导先路GA-7",  "吾导先路GA-8",  
    "愚人号SN-1",  "愚人号SN-2",  "愚人号SN-3",  "愚人号SN-4",  "愚人号SN-5",  "愚人号SN-6",  "愚人号SN-7",  "愚人号SN-8",  "愚人号SN-9",  "愚人号SN-10",  
    "尘影余音LE-1",  "尘影余音LE-2",  "尘影余音LE-3",  "尘影余音LE-4",  "尘影余音LE-5",  "尘影余音LE-6",  "尘影余音LE-7",  "尘影余音LE-8",  
    "绿野幻梦DV-1",  "绿野幻梦DV-2",  "绿野幻梦DV-3",  "绿野幻梦DV-4",  "绿野幻梦DV-5",  "绿野幻梦DV-6",  "绿野幻梦DV-7",  "绿野幻梦DV-8",  
    "理想城长夏狂欢季IC-1" ,  "理想城长夏狂欢季IC-2" ,  "理想城长夏狂欢季IC-3" ,  "理想城长夏狂欢季IC-4" ,  "理想城长夏狂欢季IC-5" ,  "理想城长夏狂欢季IC-6" ,  "理想城长夏狂欢季IC-7" ,  "理想城长夏狂欢季IC-8" ,  "理想城长夏狂欢季IC-9",
    "叙拉古人IS-1",  "叙拉古人IS-2",  "叙拉古人IS-3",  "叙拉古人IS-4",  "叙拉古人IS-5",  "叙拉古人IS-6",  "叙拉古人IS-7",  "叙拉古人IS-8",  "叙拉古人IS-9",  "叙拉古人IS-10",  
    "照我以火FC-1",  "照我以火FC-2",  "照我以火FC-3",  "照我以火FC-4",  "照我以火FC-5",  "照我以火FC-6",  "照我以火FC-7",  "照我以火FC-8",  
    "登临意WB-1",  "登临意WB-2",  "登临意WB-3",  "登临意WB-4",  "登临意WB-5",  "登临意WB-6",  "登临意WB-7",  "登临意WB-8",  "登临意WB-9",  
    "孤星CW-1",  "孤星CW-2",  "孤星CW-3",  "孤星CW-4",  "孤星CW-5",  "孤星CW-6",  "孤星CW-7",  "孤星CW-8",  "孤星CW-9",  "孤星CW-10",  
    "空想花庭HE-1",  "空想花庭HE-2",  "空想花庭HE-3",  "空想花庭HE-4",  "空想花庭HE-5",  "空想花庭HE-6",  "空想花庭HE-7",  "空想花庭HE-8",  
    "火山旅梦SL-1",  "火山旅梦SL-2",  "火山旅梦SL-3",  "火山旅梦SL-4",  "火山旅梦SL-5",  "火山旅梦SL-6",  "火山旅梦SL-7",  "火山旅梦SL-8",  
    "不义之财CV-1",  "不义之财CV-2",  "不义之财CV-3",  "不义之财CV-4",  "不义之财CV-5",  "不义之财CV-6",  "不义之财CV-7",  "不义之财CV-8",  
    "崔林特尔梅之金ZT-1",  "崔林特尔梅之金ZT-2",  "崔林特尔梅之金ZT-3",  "崔林特尔梅之金ZT-4",  "崔林特尔梅之金ZT-5",  "崔林特尔梅之金ZT-6",  "崔林特尔梅之金ZT-7",  "崔林特尔梅之金ZT-8",  "崔林特尔梅之金ZT-9",  "崔林特尔梅之金ZT-10",
    "银心湖列车RS-1",  "银心湖列车RS-2",  "银心湖列车RS-3",  "银心湖列车RS-4",  "银心湖列车RS-5",  "银心湖列车RS-6",  "银心湖列车RS-7",  "银心湖列车RS-8",  
    "怀黍离HS-1",  "怀黍离HS-2",  "怀黍离HS-3",  "怀黍离HS-4",  "怀黍离HS-5",  "怀黍离HS-6",  "怀黍离HS-7",  "怀黍离HS-8",  "怀黍离HS-9",  
    "巴别塔BB-1",  "巴别塔BB-2",  "巴别塔BB-3",  "巴别塔BB-4",  "巴别塔BB-5",  "巴别塔BB-6",  "巴别塔BB-7",  "巴别塔BB-8",  "巴别塔BB-9",  "巴别塔BB-10",  
    "生路BP-1",  "生路BP-2",  "生路BP-3",  "生路BP-4",  "生路BP-5",  "生路BP-6",  "生路BP-7",  "生路BP-8",  "生路BP-9",  
    "太阳甩在身后AS-1",  "太阳甩在身后AS-2",  "太阳甩在身后AS-3",  "太阳甩在身后AS-4",  "太阳甩在身后AS-5",  "太阳甩在身后AS-6",  "太阳甩在身后AS-7",  "太阳甩在身后AS-8",  "太阳甩在身后AS-9",
    "追迹日落以西GO-1",  "追迹日落以西GO-2",  "追迹日落以西GO-3",  "追迹日落以西GO-4",  "追迹日落以西GO-5",  "追迹日落以西GO-6",  "追迹日落以西GO-7",  "追迹日落以西GO-8",  "追迹日落以西GO-9"

    ],

    eventEX: [

    "骑兵与猎人GT-EX-1", "骑兵与猎人GT-EX-2",  "骑兵与猎人GT-EX-3",  "骑兵与猎人GT-HX-1",  "骑兵与猎人GT-HX-2",  "骑兵与猎人GT-HX-3",  
    "火蓝之心OF-EX-1",  "火蓝之心OF-EX-2",  "火蓝之心OF-EX-3",  "火蓝之心OF-EX-4",  "火蓝之心OF-EX-5",  "火蓝之心OF-EX-6",  
    "喧闹法则CB-EX-1",  "喧闹法则CB-EX-2",  "喧闹法则CB-EX-3",  "喧闹法则CB-EX-4",  "喧闹法则CB-EX-5",  "喧闹法则CB-EX-6",  "喧闹法则CB-EX-7",  "喧闹法则CB-EX-8",  
    "生于黑夜DM-EX-1" ,  "生于黑夜DM-EX-2" ,  "生于黑夜DM-EX-3" ,  "生于黑夜DM-EX-4" ,  "生于黑夜DM-EX-5" ,  "生于黑夜DM-EX-6",  
    "沃伦姆德的薄暮TW-EX-1",  "沃伦姆德的薄暮TW-EX-2",  "沃伦姆德的薄暮TW-EX-3",  "沃伦姆德的薄暮TW-EX-4",  "沃伦姆德的薄暮TW-EX-5",  "沃伦姆德的薄暮TW-EX-6",  "沃伦姆德的薄暮TW-EX-7",  "沃伦姆德的薄暮TW-EX-8" ,  
    "密林悍将归来RI-EX-1",  "密林悍将归来RI-EX-2",  "密林悍将归来RI-EX-3",  "密林悍将归来RI-EX-4",  "密林悍将归来RI-EX-5",  "密林悍将归来RI-EX-6",  "密林悍将归来RI-EX-7",  "密林悍将归来RI-EX-8",
    "玛莉娅临光MN-EX-1",  "玛莉娅临光MN-EX-2",  "玛莉娅临光MN-EX-3",  "玛莉娅临光MN-EX-4",  "玛莉娅临光MN-EX-5",  "玛莉娅临光MN-EX-6",  "玛莉娅临光MN-EX-7",  "玛莉娅临光MN-EX-8",  
    "孤岛风云MB-EX-1",  "孤岛风云MB-EX-2",  "孤岛风云MB-EX-3",  "孤岛风云MB-EX-4",  "孤岛风云MB-EX-5",  "孤岛风云MB-EX-6",  "孤岛风云MB-EX-7",  "孤岛风云MB-EX-8",  
    "画中人WR-EX-1",  "画中人WR-EX-2",  "画中人WR-EX-3",  "画中人WR-EX-4",  "画中人WR-EX-5",  "画中人WR-EX-6",  "画中人WR-EX-7",  "画中人WR-EX-8",  
    "遗尘漫步WD-EX-1",  "遗尘漫步WD-EX-2",  "遗尘漫步WD-EX-3",  "遗尘漫步WD-EX-4",  "遗尘漫步WD-EX-5",  "遗尘漫步WD-EX-6",  "遗尘漫步WD-EX-7",  "遗尘漫步WD-EX-8",  
    "覆潮之下SV-EX-1",  "覆潮之下SV-EX-2",  "覆潮之下SV-EX-3",  "覆潮之下SV-EX-4",  "覆潮之下SV-EX-5",  "覆潮之下SV-EX-6",  "覆潮之下SV-EX-7",  "覆潮之下SV-EX-8",  
    "多索雷斯假日DH-EX-1",  "多索雷斯假日DH-EX-2",  "多索雷斯假日DH-EX-3",  "多索雷斯假日DH-EX-4",  "多索雷斯假日DH-EX-5",  "多索雷斯假日DH-EX-6",  "多索雷斯假日DH-EX-7",  "多索雷斯假日DH-EX-8",
    "长夜临光NL-EX-1",  "长夜临光NL-EX-2",  "长夜临光NL-EX-3",  "长夜临光NL-EX-4",  "长夜临光NL-EX-5",  "长夜临光NL-EX-6",  "长夜临光NL-EX-7",  "长夜临光NL-EX-8",  
    "风雪过境BI-EX-1",  "风雪过境BI-EX-2",  "风雪过境BI-EX-3",  "风雪过境BI-EX-4",  "风雪过境BI-EX-5",  "风雪过境BI-EX-6",  "风雪过境BI-EX-7",  "风雪过境BI-EX-8",  
    "将进酒IW-EX-1",  "将进酒IW-EX-2",  "将进酒IW-EX-3",  "将进酒IW-EX-4",  "将进酒IW-EX-5",  "将进酒IW-EX-6",  "将进酒IW-EX-7",  "将进酒IW-EX-8",  
    "吾导先路GA-EX-1" ,  "吾导先路GA-EX-2",  "吾导先路GA-EX-3",  "吾导先路GA-EX-4",  "吾导先路GA-EX-5",  "吾导先路GA-EX-6",  "吾导先路GA-EX-7",  "吾导先路GA-EX-8",  
    "愚人号SN-EX-1",  "愚人号SN-EX-2",  "愚人号SN-EX-3",  "愚人号SN-EX-4",  "愚人号SN-EX-5",  "愚人号SN-EX-6",  "愚人号SN-EX-7",  "愚人号SN-EX-8",  
    "尘影余音LE-EX-1",  "尘影余音LE-EX-2",  "尘影余音LE-EX-3",  "尘影余音LE-EX-4",  "尘影余音LE-EX-5",  "尘影余音LE-EX-6",  "尘影余音LE-EX-7",  "尘影余音LE-EX-8",  
    "绿野幻梦DV-EX-1",  "绿野幻梦DV-EX-2",  "绿野幻梦DV-EX-3",  "绿野幻梦DV-EX-4",  "绿野幻梦DV-EX-5",  "绿野幻梦DV-EX-6",  "绿野幻梦DV-EX-7",  "绿野幻梦DV-EX-8",  
    "理想城长夏狂欢季IC-EX-1" ,  "理想城长夏狂欢季IC-EX-2" ,  "理想城长夏狂欢季IC-EX-3" ,  "理想城长夏狂欢季IC-EX-4" ,  "理想城长夏狂欢季IC-EX-5" ,  "理想城长夏狂欢季IC-EX-6" ,  "理想城长夏狂欢季IC-EX-7" ,  "理想城长夏狂欢季IC-EX-8",
    "叙拉古人IS-EX-1",  "叙拉古人IS-EX-2",  "叙拉古人IS-EX-3",  "叙拉古人IS-EX-4",  "叙拉古人IS-EX-5",  "叙拉古人IS-EX-6",  "叙拉古人IS-EX-7",  "叙拉古人IS-EX-8",  
    "照我以火FC-EX-1",  "照我以火FC-EX-2",  "照我以火FC-EX-3",  "照我以火FC-EX-4",  "照我以火FC-EX-5",  "照我以火FC-EX-6",  "照我以火FC-EX-7",  "照我以火FC-EX-8",  
    "登临意WB-EX-1",  "登临意WB-EX-2",  "登临意WB-EX-3",  "登临意WB-EX-4",  "登临意WB-EX-5",  "登临意WB-EX-6",  "登临意WB-EX-7",  "登临意WB-EX-8",  
    "孤星CW-EX-1",  "孤星CW-EX-2",  "孤星CW-EX-3",  "孤星CW-EX-4",  "孤星CW-EX-5",  "孤星CW-EX-6",  "孤星CW-EX-7",  "孤星CW-EX-8",  
    "空想花庭HE-EX-1",  "空想花庭HE-EX-2",  "空想花庭HE-EX-3",  "空想花庭HE-EX-4",  "空想花庭HE-EX-5",  "空想花庭HE-EX-6",  "空想花庭HE-EX-7",  "空想花庭HE-EX-8",  
    "火山旅梦SL-EX-1",  "火山旅梦SL-EX-2",  "火山旅梦SL-EX-3",  "火山旅梦SL-EX-4",  "火山旅梦SL-EX-5",  "火山旅梦SL-EX-6",  "火山旅梦SL-EX-7",  "火山旅梦SL-EX-8",  
    "不义之财CV-EX-1",  "不义之财CV-EX-2",  "不义之财CV-EX-3",  "不义之财CV-EX-4",  "不义之财CV-EX-5",  "不义之财CV-EX-6",  "不义之财CV-EX-7",  "不义之财CV-EX-8",  
    "崔林特尔梅之金ZT-EX-1",  "崔林特尔梅之金ZT-EX-2",  "崔林特尔梅之金ZT-EX-3",  "崔林特尔梅之金ZT-EX-4",  "崔林特尔梅之金ZT-EX-5",  "崔林特尔梅之金ZT-EX-6",  "崔林特尔梅之金ZT-EX-7",  "崔林特尔梅之金ZT-EX-8",
    "银心湖列车RS-EX-1",  "银心湖列车RS-EX-2",  "银心湖列车RS-EX-3",  "银心湖列车RS-EX-4",  "银心湖列车RS-EX-5",  "银心湖列车RS-EX-6",  "银心湖列车RS-EX-7",  "银心湖列车RS-EX-8",  
    "怀黍离HS-EX-1",  "怀黍离HS-EX-2",  "怀黍离HS-EX-3",  "怀黍离HS-EX-4",  "怀黍离HS-EX-5",  "怀黍离HS-EX-6",  "怀黍离HS-EX-7",  "怀黍离HS-EX-8",  
    "巴别塔BB-EX-1",  "巴别塔BB-EX-2",  "巴别塔BB-EX-3",  "巴别塔BB-EX-4",  "巴别塔BB-EX-5",  "巴别塔BB-EX-6",  "巴别塔BB-EX-7",  "巴别塔BB-EX-8",  
    "生路BP-EX-1",  "生路BP-EX-2",  "生路BP-EX-3",  "生路BP-EX-4",  "生路BP-EX-5",  "生路BP-EX-6",  "生路BP-EX-7",  "生路BP-EX-8",  
    "太阳甩在身后AS-EX-1",  "太阳甩在身后AS-EX-2",  "太阳甩在身后AS-EX-3",  "太阳甩在身后AS-EX-4",  "太阳甩在身后AS-EX-5",  "太阳甩在身后AS-EX-6",  "太阳甩在身后AS-EX-7",  "太阳甩在身后AS-EX-8",
    "追迹日落以西GO-EX-1",  "追迹日落以西GO-EX-2",  "追迹日落以西GO-EX-3",  "追迹日落以西GO-EX-4",  "追迹日落以西GO-EX-5",  "追迹日落以西GO-EX-6",  "追迹日落以西GO-EX-7",  "追迹日落以西GO-EX-8"

    ],

    eventEXRaid: [
            
    "突袭骑兵与猎人GT-HX-1", "突袭骑兵与猎人GT-HX-2", "突袭骑兵与猎人GT-HX-3",
    "突袭火蓝之心OF-EX-1", "突袭火蓝之心OF-EX-2", "突袭火蓝之心OF-EX-3", "突袭火蓝之心OF-EX-4", "突袭火蓝之心OF-EX-5", "突袭火蓝之心OF-EX-6",
    "突袭喧闹法则CB-EX-1", "突袭喧闹法则CB-EX-2", "突袭喧闹法则CB-EX-3", "突袭喧闹法则CB-EX-4", "突袭喧闹法则CB-EX-5", "突袭喧闹法则CB-EX-6", "突袭喧闹法则CB-EX-7", "突袭喧闹法则CB-EX-8",
    "突袭生于黑夜DM-EX-1", "突袭生于黑夜DM-EX-2", "突袭生于黑夜DM-EX-3", "突袭生于黑夜DM-EX-4", "突袭生于黑夜DM-EX-5", "突袭生于黑夜DM-EX-6",
    "突袭沃伦姆德的薄暮TW-EX-1", "突袭沃伦姆德的薄暮TW-EX-2", "突袭沃伦姆德的薄暮TW-EX-3", "突袭沃伦姆德的薄暮TW-EX-4", "突袭沃伦姆德的薄暮TW-EX-5", "突袭沃伦姆德的薄暮TW-EX-6", "突袭沃伦姆德的薄暮TW-EX-7", "突袭沃伦姆德的薄暮TW-EX-8",
    "突袭密林悍将归来RI-EX-1", "突袭密林悍将归来RI-EX-2", "突袭密林悍将归来RI-EX-3", "突袭密林悍将归来RI-EX-4", "突袭密林悍将归来RI-EX-5", "突袭密林悍将归来RI-EX-6", "突袭密林悍将归来RI-EX-7", "突袭密林悍将归来RI-EX-8",
    "突袭玛莉娅临光MN-EX-1", "突袭玛莉娅临光MN-EX-2", "突袭玛莉娅临光MN-EX-3", "突袭玛莉娅临光MN-EX-4", "突袭玛莉娅临光MN-EX-5", "突袭玛莉娅临光MN-EX-6", "突袭玛莉娅临光MN-EX-7", "突袭玛莉娅临光MN-EX-8",
    "突袭孤岛风云MB-EX-1", "突袭孤岛风云MB-EX-2", "突袭孤岛风云MB-EX-3", "突袭孤岛风云MB-EX-4", "突袭孤岛风云MB-EX-5", "突袭孤岛风云MB-EX-6", "突袭孤岛风云MB-EX-7", "突袭孤岛风云MB-EX-8",
    "突袭画中人WR-EX-1", "突袭画中人WR-EX-2", "突袭画中人WR-EX-3", "突袭画中人WR-EX-4", "突袭画中人WR-EX-5", "突袭画中人WR-EX-6", "突袭画中人WR-EX-7", "突袭画中人WR-EX-8",
    "突袭遗尘漫步WD-EX-1", "突袭遗尘漫步WD-EX-2", "突袭遗尘漫步WD-EX-3", "突袭遗尘漫步WD-EX-4", "突袭遗尘漫步WD-EX-5", "突袭遗尘漫步WD-EX-6", "突袭遗尘漫步WD-EX-7", "突袭遗尘漫步WD-EX-8",
    "突袭覆潮之下SV-EX-1", "突袭覆潮之下SV-EX-2", "突袭覆潮之下SV-EX-3", "突袭覆潮之下SV-EX-4", "突袭覆潮之下SV-EX-5", "突袭覆潮之下SV-EX-6", "突袭覆潮之下SV-EX-7", "突袭覆潮之下SV-EX-8",
    "突袭多索雷斯假日DH-EX-1", "突袭多索雷斯假日DH-EX-2", "突袭多索雷斯假日DH-EX-3", "突袭多索雷斯假日DH-EX-4", "突袭多索雷斯假日DH-EX-5", "突袭多索雷斯假日DH-EX-6", "突袭多索雷斯假日DH-EX-7", "突袭多索雷斯假日DH-EX-8",
    "突袭长夜临光NL-EX-1", "突袭长夜临光NL-EX-2", "突袭长夜临光NL-EX-3", "突袭长夜临光NL-EX-4", "突袭长夜临光NL-EX-5", "突袭长夜临光NL-EX-6", "突袭长夜临光NL-EX-7", "突袭长夜临光NL-EX-8",
    "突袭风雪过境BI-EX-1", "突袭风雪过境BI-EX-2", "突袭风雪过境BI-EX-3", "突袭风雪过境BI-EX-4", "突袭风雪过境BI-EX-5", "突袭风雪过境BI-EX-6", "突袭风雪过境BI-EX-7", "突袭风雪过境BI-EX-8",
    "突袭将进酒IW-EX-1", "突袭将进酒IW-EX-2", "突袭将进酒IW-EX-3", "突袭将进酒IW-EX-4", "突袭将进酒IW-EX-5", "突袭将进酒IW-EX-6", "突袭将进酒IW-EX-7", "突袭将进酒IW-EX-8",
    "突袭吾导先路GA-EX-1", "突袭吾导先路GA-EX-2", "突袭吾导先路GA-EX-3", "突袭吾导先路GA-EX-4", "突袭吾导先路GA-EX-5", "突袭吾导先路GA-EX-6", "突袭吾导先路GA-EX-7", "突袭吾导先路GA-EX-8",
    "突袭愚人号SN-EX-1", "突袭愚人号SN-EX-2", "突袭愚人号SN-EX-3", "突袭愚人号SN-EX-4", "突袭愚人号SN-EX-5", "突袭愚人号SN-EX-6", "突袭愚人号SN-EX-7", "突袭愚人号SN-EX-8",
    "突袭尘影余音LE-EX-1", "突袭尘影余音LE-EX-2", "突袭尘影余音LE-EX-3", "突袭尘影余音LE-EX-4", "突袭尘影余音LE-EX-5", "突袭尘影余音LE-EX-6", "突袭尘影余音LE-EX-7", "突袭尘影余音LE-EX-8",
    "突袭绿野幻梦DV-EX-1", "突袭绿野幻梦DV-EX-2", "突袭绿野幻梦DV-EX-3", "突袭绿野幻梦DV-EX-4", "突袭绿野幻梦DV-EX-5", "突袭绿野幻梦DV-EX-6", "突袭绿野幻梦DV-EX-7", "突袭绿野幻梦DV-EX-8",
    "突袭理想城长夏狂欢季IC-EX-1", "突袭理想城长夏狂欢季IC-EX-2", "突袭理想城长夏狂欢季IC-EX-3", "突袭理想城长夏狂欢季IC-EX-4", "突袭理想城长夏狂欢季IC-EX-5", "突袭理想城长夏狂欢季IC-EX-6", "突袭理想城长夏狂欢季IC-EX-7", "突袭理想城长夏狂欢季IC-EX-8",
    "突袭叙拉古人IS-EX-1", "突袭叙拉古人IS-EX-2", "突袭叙拉古人IS-EX-3", "突袭叙拉古人IS-EX-4", "突袭叙拉古人IS-EX-5", "突袭叙拉古人IS-EX-6", "突袭叙拉古人IS-EX-7", "突袭叙拉古人IS-EX-8",
    "突袭照我以火FC-EX-1", "突袭照我以火FC-EX-2", "突袭照我以火FC-EX-3", "突袭照我以火FC-EX-4", "突袭照我以火FC-EX-5", "突袭照我以火FC-EX-6", "突袭照我以火FC-EX-7", "突袭照我以火FC-EX-8",
    "突袭登临意WB-EX-1", "突袭登临意WB-EX-2", "突袭登临意WB-EX-3", "突袭登临意WB-EX-4", "突袭登临意WB-EX-5", "突袭登临意WB-EX-6", "突袭登临意WB-EX-7", "突袭登临意WB-EX-8",
    "突袭孤星CW-EX-1", "突袭孤星CW-EX-2", "突袭孤星CW-EX-3", "突袭孤星CW-EX-4", "突袭孤星CW-EX-5", "突袭孤星CW-EX-6", "突袭孤星CW-EX-7", "突袭孤星CW-EX-8",
    "突袭空想花庭HE-EX-1", "突袭空想花庭HE-EX-2", "突袭空想花庭HE-EX-3", "突袭空想花庭HE-EX-4", "突袭空想花庭HE-EX-5", "突袭空想花庭HE-EX-6", "突袭空想花庭HE-EX-7", "突袭空想花庭HE-EX-8",
    "突袭火山旅梦SL-EX-1", "突袭火山旅梦SL-EX-2", "突袭火山旅梦SL-EX-3", "突袭火山旅梦SL-EX-4", "突袭火山旅梦SL-EX-5", "突袭火山旅梦SL-EX-6", "突袭火山旅梦SL-EX-7", "突袭火山旅梦SL-EX-8",
    "突袭不义之财CV-EX-1", "突袭不义之财CV-EX-2", "突袭不义之财CV-EX-3", "突袭不义之财CV-EX-4", "突袭不义之财CV-EX-5", "突袭不义之财CV-EX-6", "突袭不义之财CV-EX-7", "突袭不义之财CV-EX-8",
    "突袭崔林特尔梅之金ZT-EX-1", "突袭崔林特尔梅之金ZT-EX-2", "突袭崔林特尔梅之金ZT-EX-3", "突袭崔林特尔梅之金ZT-EX-4", "突袭崔林特尔梅之金ZT-EX-5", "突袭崔林特尔梅之金ZT-EX-6", "突袭崔林特尔梅之金ZT-EX-7", "突袭崔林特尔梅之金ZT-EX-8",
    "突袭银心湖列车RS-EX-1", "突袭银心湖列车RS-EX-2", "突袭银心湖列车RS-EX-3", "突袭银心湖列车RS-EX-4", "突袭银心湖列车RS-EX-5", "突袭银心湖列车RS-EX-6", "突袭银心湖列车RS-EX-7", "突袭银心湖列车RS-EX-8",
    "突袭怀黍离HS-EX-1", "突袭怀黍离HS-EX-2", "突袭怀黍离HS-EX-3", "突袭怀黍离HS-EX-4", "突袭怀黍离HS-EX-5", "突袭怀黍离HS-EX-6", "突袭怀黍离HS-EX-7", "突袭怀黍离HS-EX-8",
    "突袭巴别塔BB-EX-1", "突袭巴别塔BB-EX-2", "突袭巴别塔BB-EX-3", "突袭巴别塔BB-EX-4", "突袭巴别塔BB-EX-5", "突袭巴别塔BB-EX-6", "突袭巴别塔BB-EX-7", "突袭巴别塔BB-EX-8",
    "突袭生路BP-EX-1", "突袭生路BP-EX-2", "突袭生路BP-EX-3", "突袭生路BP-EX-4", "突袭生路BP-EX-5", "突袭生路BP-EX-6", "突袭生路BP-EX-7", "突袭生路BP-EX-8",
    "突袭太阳甩在身后AS-EX-1", "突袭太阳甩在身后AS-EX-2", "突袭太阳甩在身后AS-EX-3", "突袭太阳甩在身后AS-EX-4", "突袭太阳甩在身后AS-EX-5", "突袭太阳甩在身后AS-EX-6", "突袭太阳甩在身后AS-EX-7", "突袭太阳甩在身后AS-EX-8",
    "突袭追迹日落以西GO-EX-1", "突袭追迹日落以西GO-EX-2", "突袭追迹日落以西GO-EX-3", "突袭追迹日落以西GO-EX-4", "突袭追迹日落以西GO-EX-5", "突袭追迹日落以西GO-EX-6", "突袭追迹日落以西GO-EX-7", "突袭追迹日落以西GO-EX-8"

    ],

    eventS: [

    "多索雷斯假日DH-S-1",  "多索雷斯假日DH-S-2",  "多索雷斯假日DH-S-3",  "多索雷斯假日DH-S-4",  
    "长夜临光NL-S-1",  "长夜临光NL-S-2",  "长夜临光NL-S-3",  "长夜临光NL-S-4",  "长夜临光NL-S-5",  
    "愚人号SN-S-1-A",  "愚人号SN-S-1-B",  "愚人号SN-S-2-A",  "愚人号SN-S-2-B",  "愚人号SN-S-3-A",  "愚人号SN-S-3-B",  "愚人号SN-S-4-A",  "愚人号SN-S-4-B",  "愚人号SN-S-5",  
    "理想城长夏狂欢季IC-S-1",  "理想城长夏狂欢季IC-S-2",  "理想城长夏狂欢季IC-S-3",  "理想城长夏狂欢季IC-S-4", 
    "叙拉古人IS-S-1",  "叙拉古人IS-S-2",  "叙拉古人IS-S-3",  "叙拉古人IS-S-4",  "叙拉古人IS-S-5",  
    "孤星CW-S-1-A",  "孤星CW-S-1-B",  "孤星CW-S-2-A",  "孤星CW-S-2-B",  "孤星CW-S-3-A",  "孤星CW-EX-3-B",  "孤星CW-S-4",  
    "火山旅梦SL-S-1",  "火山旅梦SL-S-2",  "火山旅梦SL-S-3",  "火山旅梦SL-S-4",  "火山旅梦SL-EX-5",  
    "崔林特尔梅之金ZT-S-1",  "崔林特尔梅之金ZT-S-2",  "崔林特尔梅之金ZT-S-3",  "崔林特尔梅之金ZT-S-4",  "崔林特尔梅之金ZT-S-5",  
    "怀黍离HS-S-1",  "怀黍离HS-S-2",  "怀黍离HS-S-3",  "怀黍离HS-S-4",  
    "巴别塔BB-S-1",  "巴别塔BB-S-2",  "巴别塔BB-S-3",  "巴别塔BB-S-4",  
    "太阳甩在身后AS-S-1",  "太阳甩在身后AS-S-2",  "太阳甩在身后AS-S-3",  "太阳甩在身后AS-S-4"

    ],

    eventSRaid: [

    "突袭多索雷斯假日DH-S-1", "突袭多索雷斯假日DH-S-2", "突袭多索雷斯假日DH-S-3", "突袭多索雷斯假日DH-S-4",
    "突袭长夜临光NL-S-1", "突袭长夜临光NL-S-2", "突袭长夜临光NL-S-3", "突袭长夜临光NL-S-4", "突袭长夜临光NL-S-5",
    "突袭理想城长夏狂欢季IC-S-1", "突袭理想城长夏狂欢季IC-S-2", "突袭理想城长夏狂欢季IC-S-3", "突袭理想城长夏狂欢季IC-S-4",
    "突袭叙拉古人IS-S-1", "突袭叙拉古人IS-S-2", "突袭叙拉古人IS-S-3", "突袭叙拉古人IS-S-4", "突袭叙拉古人IS-S-5",
    "突袭孤星CW-S-4",
    "突袭火山旅梦SL-S-1", "突袭火山旅梦SL-S-2", "突袭火山旅梦SL-S-3", "突袭火山旅梦SL-S-4", "突袭火山旅梦SL-S-5",
    "突袭崔林特尔梅之金ZT-S-1", "突袭崔林特尔梅之金ZT-S-2", "突袭崔林特尔梅之金ZT-S-3", "突袭崔林特尔梅之金ZT-S-4", "突袭崔林特尔梅之金ZT-S-5",
    "突袭怀黍离HS-S-1", "突袭怀黍离HS-S-2", "突袭怀黍离HS-S-3", "突袭怀黍离HS-S-4",
    "突袭巴别塔BB-S-1", "突袭巴别塔BB-S-2", "突袭巴别塔BB-S-3", "突袭巴别塔BB-S-4",
    "突袭太阳甩在身后AS-S-1", "突袭太阳甩在身后AS-S-2", "突袭太阳甩在身后AS-S-3", "突袭太阳甩在身后AS-S-4"

    ],

    boss: [

        "极难孤星CW-S-4",  "极难主线15-20",  "极难主线14-21"

    ]

};
// 构建关卡到范围的映射表
const levelToRangeMap = {};
for (const [range, levels] of Object.entries(levelsByRange)) {
    levels.forEach(level => {
        levelToRangeMap[level] = range;
    });
}

// 二、DOM元素引用
const roleLimitBtn = document.getElementById('random-role-btn');
const roleLimitText = document.getElementById('role-limit-text');
const singleDrawBtn = document.getElementById('single-draw-btn');
const tenDrawBtn = document.getElementById('ten-draw-btn');
const drawResultContainer = document.getElementById('draw-result');
const resultTitle = document.getElementById('result-title');
const resultListContainer = document.getElementById('result-list');
const historyListText = document.getElementById('history-list');
let currentDrawType = ""; // 新增：存储当前抽取类型（单次/十连）

// 三、核心功能函数
// 1. 生成随机角色限制
function getRandomRoleLimit() {
    return roleLimits[Math.floor(Math.random() * roleLimits.length)];
}

// 2. 获取关卡所属范围
function getLevelRange(levelName) {
    return levelToRangeMap[levelName] || "";
}

// 3. 判断是否为突袭关卡
function isTargetRaidLevel(levelName) {
    const levelRange = getLevelRange(levelName);
    return RAID_RANGES.includes(levelRange);
}

// 4. 生成带样式的关卡名称HTML
function getLevelHtml(levelName) {
    if (isTargetRaidLevel(levelName)) {
        return `<span class="raid-level">${levelName}</span>`;
    }
    return levelName;
}

// 5. 获取选中范围的所有关卡及信息
function getSelectedLevelPool() {
    const selectedRangeElements = document.querySelectorAll('input[name="levelRange"]:checked');
    let selectedRanges = Array.from(selectedRangeElements).map(el => el.value);
    
    // 若未选中任何范围，默认选中主线
    if (selectedRanges.length === 0) {
        selectedRanges = ["main"];
        const mainCheckbox = document.getElementById('range-main');
        if (mainCheckbox) mainCheckbox.checked = true;
    }

    // 收集选中范围的所有关卡
    let levelPool = [];
    selectedRanges.forEach(range => {
        const levelsInRange = levelsByRange[range] || [];
        levelPool = levelPool.concat(levelsInRange);
    });

    // 转换范围值为中文名称（如main→主线）
    const selectedRangeNames = selectedRanges.map(range => getRangeName(range)).join("+");
    return { levelPool, selectedRangeNames };
}

// 6. 生成不重复的关卡列表（仅关卡，无角色限制）
function generateUniqueLevels(count) {
    const { levelPool, selectedRangeNames } = getSelectedLevelPool();
    
    // 若选中范围的关卡数量不足，提示并返回空
    if (levelPool.length < count) {
        alert(`选中的关卡范围只有${levelPool.length}个关卡，无法生成${count}个不重复的关卡！`);
        return [];
    }

    // 洗牌算法：打乱关卡顺序（确保随机性）
    const shuffledLevels = [...levelPool].sort(() => Math.random() - 0.5);
    const levels = [];
    
    // 生成指定数量的不重复关卡
    for (let i = 0; i < count; i++) {
        const randomLevel = shuffledLevels[i];
        levels.push({
            selectedRanges: selectedRangeNames,
            level: randomLevel,
            isRaid: isTargetRaidLevel(randomLevel)
        });
    }
    return levels;
}

// 7. 转换关卡范围值为中文名称
function getRangeName(rangeValue) {
    const rangeMap = {
        main: "主线",
        mainRaid: "主线突袭",
        mainH: "主线H关",
        event: "活动",
        eventEX: "活动EX",
        eventEXRaid: "活动EX突袭",
        eventS: "活动S",
        eventSRaid: "活动S突袭",
        boss: "BOSS关"
    };
    return rangeMap[rangeValue] || "主线";
}

// 8. 自动确认关卡（更新历史记录）
function autoConfirmLevel(levelInfo) {
    // 获取本地存储的历史记录，若无则初始化空数组
    let historyRecords = JSON.parse(localStorage.getItem("arknightsChallengeHistory")) || [];
    // 添加当前关卡信息（含时间戳）
    const levelWithTime = {
        ...levelInfo,
        time: new Date().toLocaleString()
    };
    // 将新记录添加到数组头部（最新的在最前面）
    historyRecords.unshift(levelWithTime);
    // 保存到本地存储
    localStorage.setItem("arknightsChallengeHistory", JSON.stringify(historyRecords));
    // 更新页面历史记录显示
    updateHistoryDisplay();
}

// 9. 生成抽取结果（核心函数）
function generateDrawResult(drawType) {
    // 清空旧结果
    resultListContainer.innerHTML = "";
    currentDrawType = drawType;
    // 确定抽取数量（单次1个，十连10个）
    const drawCount = drawType === "single" ? 1 : 10;
    // 生成不重复的关卡列表
    const levels = generateUniqueLevels(drawCount);
    if (levels.length === 0) return;

    
    // 延迟0.5秒渲染结果（模拟抽取过程）
    setTimeout(() => {
        drawResultContainer.style.display = "block";
        // 设置结果标题
        resultTitle.textContent = drawType === "single" ? "单次关卡抽取结果" : "十连关卡抽取结果";
        // 设置结果列表布局（单次单列，十连双列）
        resultListContainer.className = drawType === "single" ? "single" : "ten";

        // 逐个渲染结果项（添加延迟动画）
        levels.forEach((levelInfo, index) => {
            const resultItem = document.createElement("div");
            // 添加入场动画类和延迟时间
            resultItem.className = "result-item animate-in";
            resultItem.style.animationDelay = `${index * 0.15}s`;
            // 突袭关卡添加特殊样式
            let levelHtml = levelInfo.isRaid 
                ? `<span class="raid-level animate-pulse">${levelInfo.level}</span>` 
                : levelInfo.level;
            // 设置结果项内容
            resultItem.innerHTML = `
                <p><strong>选中范围：</strong>${levelInfo.selectedRanges}</p>
                <p><strong>挑战关卡：</strong>${levelHtml}</p>
            `;
            // 添加到结果列表
            resultListContainer.appendChild(resultItem);
        });

        // 单次抽取自动更新历史记录
        if (drawType === "single") {
            autoConfirmLevel(levels[0]);
        }
    }, 500);
}

// 10. 更新历史记录显示
function updateHistoryDisplay() {
    const historyRecords = JSON.parse(localStorage.getItem("arknightsChallengeHistory")) || [];
    // 若无历史记录，显示提示文本
    if (historyRecords.length === 0) {
        historyListText.innerHTML = "<p>暂无历史记录</p>";
        return;
    }
    // 只显示最近5条记录
    const recentRecords = historyRecords.slice(0, 5);
    let historyHtml = "";
    recentRecords.forEach((record, index) => {
        const levelHtml = getLevelHtml(record.level);
        historyHtml += `
            <p>${index + 1}. 【${record.time}】 | 范围：${record.selectedRanges} | 关卡：${levelHtml}</p>
        `;
    });
    historyListText.innerHTML = historyHtml;
}

// 新增：血狼抽取按钮和结果容器
const randomBloodwolfBtn = document.getElementById('random-bloodwolf-btn');
const bloodwolfResult = document.getElementById('bloodwolf-result');

// 四、事件绑定与初始化（确保DOM加载完成后执行）
document.addEventListener('DOMContentLoaded', function() {
    // 1. 角色限制按钮点击事件
    if (roleLimitBtn) {
        roleLimitBtn.addEventListener('click', function() {
            const randomLimit = getRandomRoleLimit();
            roleLimitText.textContent = randomLimit;
        });
    }

    // 2. 单次抽取按钮点击事件
    if (singleDrawBtn) {
        singleDrawBtn.addEventListener('click', function() {
            generateDrawResult("single");
        });
    }

    // 3. 十连抽取按钮点击事件
    if (tenDrawBtn) {
        tenDrawBtn.addEventListener('click', function() {
            generateDrawResult("ten");
        });
    }

    // 4. 初始化历史记录显示
    updateHistoryDisplay();
});



// 新增：11. 血狼破军合约榜 - 随机抽取12个不重复数字（对应12位干员）
function getRandomBloodwolfOperators() {
    // 生成1-20的数字数组
    const allIds = Array.from({ length: 106 }, (_, i) => i + 1);
    // 洗牌算法打乱顺序
    const shuffledIds = allIds.sort(() => Math.random() - 0.5);
    // 取前12个不重复数字
    return shuffledIds.slice(0, 12);
}

// 新增：12. 渲染血狼抽取结果（默认显示数字，悬浮显示干员图片）
function renderBloodwolfResult(selectedIds) {
    // 清空旧结果
    bloodwolfResult.innerHTML = "";
    // 创建结果容器（网格布局，每行6个）
    const resultGrid = document.createElement("div");
    resultGrid.className = "bloodwolf-result-grid";

    // 遍历选中的12个干员ID，生成每个结果项
    selectedIds.forEach(id => {
        // 获取当前ID对应的干员信息
        const operator = BLOODWOLF_OPERATORS.find(op => op.id === id);
        if (!operator) return;

        // 单个结果项容器
        const resultItem = document.createElement("div");
        resultItem.className = "bloodwolf-result-item";
        resultItem.dataset.operatorId = id; // 存储干员ID，用于悬浮时匹配

        // 默认显示：数字（居中）
        const numberEl = document.createElement("div");
        numberEl.className = "bloodwolf-number";
        numberEl.textContent = `No.${id}`;

        // 悬浮显示：干员图片（默认隐藏）
        const imgEl = document.createElement("img");
        imgEl.className = "bloodwolf-operator-img";
        imgEl.src = operator.img; // 图片路径（需与实际文件对应）
        imgEl.alt = operator.name;
        imgEl.title = operator.name; // 鼠标悬浮时显示干员名提示

        // 组装结果项
        resultItem.appendChild(numberEl);
        resultItem.appendChild(imgEl);
        resultGrid.appendChild(resultItem);
    });

    // 将结果网格添加到页面
    bloodwolfResult.appendChild(resultGrid);
}



// 新增：2. 血狼破军合约榜抽取按钮点击事件
if (randomBloodwolfBtn) {
    randomBloodwolfBtn.addEventListener('click', function() {
        
// 改成（添加加载动画圆圈）
bloodwolfResult.innerHTML = `
    <div style="display:flex;align-items:center;">
        <div class="bloodwolf-loading"></div>
        <span style="font-size:16px;">正在抽取干员...</span>
    </div>
`;
        // 延迟0.8秒模拟抽取过程，增强仪式感
        setTimeout(() => {
            const selectedIds = getRandomBloodwolfOperators();
            renderBloodwolfResult(selectedIds);
        }, 800);
    });

}

