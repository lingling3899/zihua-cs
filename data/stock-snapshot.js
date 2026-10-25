/**
 * 紫花油 ZIHUA 客服 — 萬寧／屈臣氏門市庫存快照（靜態）。
 * asOf／manningsAsOf／watsonsAsOf 有值＝該渠道已載入；請勿當 live stock。
 * 只含「有貨／庫存緊張」舖；無庫存舖唔會出現。
 * 屈臣氏庫存查詢只覆蓋約 177 間（非電話簿全部）——唔好將未列出嘅舖標「沒有此產品」。
 *
 * 萬寧：raw-mannings-stock-20261025.json（2026-10-25）；tel 優先 scrape，否則電話簿 fuzzy match。
 * 屈臣氏：待補。
 */
window.ZIHUA_STOCK = {
  "asOf": "",
  "manningsAsOf": "2026-10-25",
  "watsonsAsOf": "",
  "source": "mannings.com.hk / watsons.com.hk store stock checkers",
  "disclaimer": "快照非即時庫存；到舖前請致電確認。",
  "products": {
    "oil-classic-12": {
      "mannings": {
        "code": "882506",
        "url": "https://www.mannings.com.hk/zh-hant/zihua-embrocation-12ml/p/882506",
        "storeCount": 244,
        "stores": [
          {
            "name": "羅素街",
            "address": "香港銅鑼灣羅素街8號英皇鐘錶珠寶中心 地下1及2號舖",
            "district": "灣仔區",
            "tel": "852-25790568",
            "stockStatus": "有現貨"
          },
          {
            "name": "國際金融中心",
            "address": "香港中環港景街1號國際金融中心商場第二層2004號",
            "district": "中西區",
            "tel": "852-25239672",
            "stockStatus": "有現貨"
          },
          {
            "name": "恒隆中心",
            "address": "香港銅鑼灣百德新街2-20號恒隆中心地下G02號舖",
            "district": "灣仔區",
            "tel": "852-25681407",
            "stockStatus": "有現貨"
          },
          {
            "name": "灣仔Tower 188",
            "address": "香港灣仔軒尼詩道188-190號Tower 188 地下",
            "district": "灣仔區",
            "tel": "852-26338701",
            "stockStatus": "有現貨"
          },
          {
            "name": "新軒尼詩道",
            "address": "香港灣仔軒尼詩道388號Mall Plus地下G08舖",
            "district": "灣仔區",
            "tel": "852-25742675",
            "stockStatus": "有現貨"
          },
          {
            "name": "機利臣街",
            "address": "香港灣仔莊士敦道18號嘉寧大厦地下C,E,F,G 及 J 舖",
            "district": "灣仔區",
            "tel": "852-21119641",
            "stockStatus": "有現貨"
          },
          {
            "name": "杏花",
            "address": "香港柴灣杏花村杏花新城157-159號舖",
            "district": "東區",
            "tel": "852-29765694",
            "stockStatus": "有現貨"
          },
          {
            "name": "置地廣場",
            "address": "香港中環皇后大道中15號置地廣場中庭3樓312號舖",
            "district": "中西區",
            "tel": "852-34602024",
            "stockStatus": "有現貨"
          },
          {
            "name": "西環聯康",
            "address": "香港卑路乍街116-122及122A號聯康新樓地下C舖",
            "district": "中西區",
            "tel": "852-28167776",
            "stockStatus": "有現貨"
          },
          {
            "name": "海怡西商場",
            "address": "香港鴨俐洲海怡半島海怡廣場西座1樓 122 號舖",
            "district": "南區",
            "tel": "852-2537 5180",
            "stockStatus": "有現貨"
          },
          {
            "name": "華光勵精中心",
            "address": "香港中環皇后大道中88號勵精中心地下2號",
            "district": "中西區",
            "tel": "852-25371241",
            "stockStatus": "有現貨"
          },
          {
            "name": "北角城",
            "address": "香港英皇道250號 北角城中心地下02號舖",
            "district": "東區",
            "tel": "852-21740812",
            "stockStatus": "有現貨"
          },
          {
            "name": "皇室堡",
            "address": "香港銅鑼灣告士打道311 號皇室堡3樓311至312號舖",
            "district": "灣仔區",
            "tel": "852-25633343",
            "stockStatus": "有現貨"
          },
          {
            "name": "新天后",
            "address": "香港天后電氣道68號地下B及C舖",
            "district": "灣仔區",
            "tel": "852-28950885",
            "stockStatus": "有現貨"
          },
          {
            "name": "信德中心",
            "address": "香港上環干諾道中200號信德中心2樓203號",
            "district": "中西區",
            "tel": "852-28586672",
            "stockStatus": "有現貨"
          },
          {
            "name": "康橋大廈",
            "address": "香港鰂魚涌太古坊康橋大廈地下A舖",
            "district": "東區",
            "tel": "852-22844811",
            "stockStatus": "有現貨"
          },
          {
            "name": "興華商場",
            "address": "香港柴灣興華商場地下G05及G06號舖",
            "district": "東區",
            "tel": "852-25055219",
            "stockStatus": "有現貨"
          },
          {
            "name": "利港中心",
            "address": "香港香港仔利港中心1樓 106-107號舖",
            "district": "南區",
            "tel": "852-25806607",
            "stockStatus": "有現貨"
          },
          {
            "name": "西營盤",
            "address": "香港德輔道西334至350號恆裕大廈地下8號舖",
            "district": "中西區",
            "tel": "852-25460326",
            "stockStatus": "有現貨"
          },
          {
            "name": "寶翠園",
            "address": "香港西環卑路乍街8號寶翠園西寶城2樓237舖",
            "district": "中西區",
            "tel": "852-25427425",
            "stockStatus": "有現貨"
          },
          {
            "name": "跑馬地",
            "address": "香港跑馬地成和道25-27號地下",
            "district": "灣仔區",
            "tel": "852-25756904",
            "stockStatus": "有現貨"
          },
          {
            "name": "新康怡廣場",
            "address": "香港康山道1-2號康怡廣場2樓S30號及東上橋S8至S10號舖",
            "district": "東區",
            "tel": "852-26500412",
            "stockStatus": "有現貨"
          },
          {
            "name": "羅便臣道",
            "address": "香港西摩道1號輝煌臺地下8 號舖",
            "district": "中西區",
            "tel": "852-25404307",
            "stockStatus": "有現貨"
          },
          {
            "name": "春園街",
            "address": "香港灣仔春園街47至65號新春園大廈地下E及F舖",
            "district": "灣仔區",
            "tel": "852-27930642",
            "stockStatus": "有現貨"
          },
          {
            "name": "北角",
            "address": "香港北角英皇道386-388號北港商業大廈地下B",
            "district": "東區",
            "tel": "852-25712621",
            "stockStatus": "有現貨"
          },
          {
            "name": "總統戲院",
            "address": "香港銅鑼灣謝菲道517號地下B舖",
            "district": "灣仔區",
            "tel": "852-25745483",
            "stockStatus": "有現貨"
          },
          {
            "name": "小西灣廣場",
            "address": "香港柴灣小西灣道小西灣廣場1樓110A號舖",
            "district": "東區",
            "tel": "852-28401114",
            "stockStatus": "有現貨"
          },
          {
            "name": "太古城",
            "address": "香港太古城道18號太古城中心第一期420舖",
            "district": "東區",
            "tel": "852-29070621",
            "stockStatus": "有現貨"
          },
          {
            "name": "耀東商場",
            "address": "香港筲箕灣耀東邨耀東商場2樓201號舖",
            "district": "東區",
            "tel": "852-25607135",
            "stockStatus": "有現貨"
          },
          {
            "name": "般咸道",
            "address": "香港般咸道57號地下",
            "district": "中西區",
            "tel": "852-29640734",
            "stockStatus": "有現貨"
          },
          {
            "name": "置富",
            "address": "香港薄扶林置富南區廣場3樓303號室",
            "district": "南區",
            "tel": "852-28750400",
            "stockStatus": "有現貨"
          },
          {
            "name": "新翠商場",
            "address": "香港柴灣新翠商場4樓1-11號",
            "district": "東區",
            "tel": "852-28979231",
            "stockStatus": "有現貨"
          },
          {
            "name": "皇后大道西",
            "address": "香港皇后大道西230-236 號好時大廈地下C 舖",
            "district": "中西區",
            "tel": "852-29754469",
            "stockStatus": "有現貨"
          },
          {
            "name": "太安樓",
            "address": "香港筲箕灣筲箕灣道57-87號太安樓地下G7及A6號舖",
            "district": "東區",
            "tel": "852-29675776",
            "stockStatus": "有現貨"
          },
          {
            "name": "華富",
            "address": "香港華富(一)邨華珍樓714-715號舖",
            "district": "南區",
            "tel": "852-25507553",
            "stockStatus": "有現貨"
          },
          {
            "name": "香港港鐵站",
            "address": "香港香港港鐵站HOK48號舖",
            "district": "中西區",
            "tel": "852-25580117",
            "stockStatus": "有現貨"
          },
          {
            "name": "世貿中心",
            "address": "香港銅鑼灣告士打道280號世貿中心L2樓L2-12號舖",
            "district": "灣仔區",
            "tel": "852-25959608",
            "stockStatus": "有現貨"
          },
          {
            "name": "時代廣場",
            "address": "香港銅鑼灣時代廣場9樓917號舖",
            "district": "灣仔區",
            "tel": "852-25657455",
            "stockStatus": "有現貨"
          },
          {
            "name": "灣仔光華",
            "address": "香港灣仔軒尼詩道269至273號地下A及B號舖",
            "district": "灣仔區",
            "tel": "852-25117036",
            "stockStatus": "有現貨"
          },
          {
            "name": "灣仔道",
            "address": "香港灣仔道 212-214號怡康大廈地下B舖",
            "district": "灣仔區",
            "tel": "852-22956783",
            "stockStatus": "有現貨"
          },
          {
            "name": "安泰大廈",
            "address": "香港上環德輔道中144-148 號安泰大廈地下",
            "district": "中西區",
            "tel": "852-25419813",
            "stockStatus": "有現貨"
          },
          {
            "name": "新卑路乍街",
            "address": "香港卑路乍街57-61號利達樓地下1號",
            "district": "中西區",
            "tel": "852-28198361",
            "stockStatus": "有現貨"
          },
          {
            "name": "上環",
            "address": "香港皇后大道中368號偉利大廈1樓 6 號舖",
            "district": "中西區",
            "tel": "852-25434464",
            "stockStatus": "有現貨"
          },
          {
            "name": "西環",
            "address": "香港皇后大道西572-574號高良大廈地下",
            "district": "中西區",
            "tel": "852-29864386",
            "stockStatus": "有現貨"
          },
          {
            "name": "健威坊",
            "address": "香港北角英皇道560號健威坊低層地下L37號舖",
            "district": "東區",
            "tel": "852-21170546",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "雅蘭中心",
            "address": "九龍彌敦道625及639號雅蘭中心地下G20-22號舖",
            "district": "油尖旺區",
            "tel": "852-27926021",
            "stockStatus": "有現貨"
          },
          {
            "name": "河內道 K11",
            "address": "九龍尖沙咀河內道18號K11地庫1層B109-B110號舖",
            "district": "油尖旺區",
            "tel": "852-31224037",
            "stockStatus": "有現貨"
          },
          {
            "name": "四海大廈",
            "address": "九龍尖沙咀彌敦道208-212號四海大廈地下A舖",
            "district": "油尖旺區",
            "tel": "852-27206044",
            "stockStatus": "有現貨"
          },
          {
            "name": "中港城",
            "address": "九龍尖沙咀廣東道33號中港城地下11及11A號舖",
            "district": "油尖旺區",
            "tel": "852-27527938",
            "stockStatus": "有現貨"
          },
          {
            "name": "新海防道",
            "address": "九龍尖沙咀海防道38-40號中達大廈地下及天井",
            "district": "油尖旺區",
            "tel": "852-23619645",
            "stockStatus": "有現貨"
          },
          {
            "name": "國際廣場",
            "address": "九龍尖沙咀彌敦道63號國際廣場MTR樓層17, 20-23號舖",
            "district": "油尖旺區",
            "tel": "852-27049273",
            "stockStatus": "有現貨"
          },
          {
            "name": "弼街",
            "address": "香港九龍西洋菜南街218-220號及弼街41號生發大廈地下A及B號舖",
            "district": "油尖旺區",
            "tel": "852-23479628",
            "stockStatus": "有現貨"
          },
          {
            "name": "寶來街",
            "address": "九龍紅磡湖光街1-7號地下17 G1A 號舖",
            "district": "九龍城區",
            "tel": "852-23341039",
            "stockStatus": "有現貨"
          },
          {
            "name": "西九龍站",
            "address": "九龍尖沙咀柯士甸道西3號香港西九龍站售票大堂B1-2號舖",
            "district": "油尖旺區",
            "tel": "852-27912077",
            "stockStatus": "有現貨"
          },
          {
            "name": "Moko",
            "address": "九龍旺角太子道西193號新世紀廣場一樓162號舖",
            "district": "油尖旺區",
            "tel": "852-23360377",
            "stockStatus": "有現貨"
          },
          {
            "name": "山東街",
            "address": "九龍旺角山東街47-51號中橋商業大廈星際城市地下10-13號舖",
            "district": "油尖旺區",
            "tel": "852-27707920",
            "stockStatus": "有現貨"
          },
          {
            "name": "又一城",
            "address": "九龍九龍塘達之路80號又一城MTR-09號舖",
            "district": "九龍城區",
            "tel": "852-22657325",
            "stockStatus": "有現貨"
          },
          {
            "name": "尖沙咀K11 MUSEA",
            "address": "香港九龍尖沙咀梳士巴利道18號K11 MUSEA B2層B201號01B舖",
            "district": "油尖旺區",
            "tel": "852-27931047",
            "stockStatus": "有現貨"
          },
          {
            "name": "啟德Airside",
            "address": "九龍啟德協調道2號AIRSIDE地庫1層B119-B120號舖",
            "district": "九龍城區",
            "tel": "852-27746011",
            "stockStatus": "有現貨"
          },
          {
            "name": "圓方",
            "address": "九龍柯士甸道西一號圓方1樓1092號舖",
            "district": "油尖旺區",
            "tel": "852-21968125",
            "stockStatus": "有現貨"
          },
          {
            "name": "海港城",
            "address": "九龍海港城港威商場三階3304號舖",
            "district": "油尖旺區",
            "tel": "852-26799313",
            "stockStatus": "有現貨"
          },
          {
            "name": "創紀之城",
            "address": "九龍觀塘創紀之城5期apm1樓L1-28及L1-29號舖",
            "district": "觀塘區",
            "tel": "852-31489369",
            "stockStatus": "有現貨"
          },
          {
            "name": "天璽天",
            "address": "九龍啟德協調道10號天璽．天低層地下LG28, LG30 及 LG32號舖",
            "district": "九龍城區",
            "tel": "852-2782-5518",
            "stockStatus": "有現貨"
          },
          {
            "name": "美孚",
            "address": "九龍美孚新邨百老匯街69-119號地下99B",
            "district": "深水埗區",
            "tel": "852-27429664",
            "stockStatus": "有現貨"
          },
          {
            "name": "金御門",
            "address": "九龍九龍城衙前圍道39號金．御門地下1號舖",
            "district": "九龍城區",
            "tel": "852-23501433",
            "stockStatus": "有現貨"
          },
          {
            "name": "金馬倫道",
            "address": "九龍尖沙咀金馬倫道26-28號金壘商業中心地下",
            "district": "油尖旺區",
            "tel": "852-29076086",
            "stockStatus": "有現貨"
          },
          {
            "name": "秀茂坪",
            "address": "九龍秀茂坪邨秀茂坪商場1 樓108 號舖",
            "district": "觀塘區",
            "tel": "852-23548572",
            "stockStatus": "有現貨"
          },
          {
            "name": "富運",
            "address": "九龍彌敦道573號富運中心地下A舖",
            "district": "油尖旺區",
            "tel": "852-27830044",
            "stockStatus": "有現貨"
          },
          {
            "name": "愛民商場",
            "address": "九龍何文田愛民邨愛民廣場G17號舖",
            "district": "九龍城區",
            "tel": "852-27123470",
            "stockStatus": "有現貨"
          },
          {
            "name": "新寶廣場",
            "address": "九龍佐敦道23號新寶廣場地下1號舖",
            "district": "油尖旺區",
            "tel": "852-27826327",
            "stockStatus": "有現貨"
          },
          {
            "name": "淘大商場",
            "address": "九龍牛頭角道 77 號淘大商場二期地下183-185號",
            "district": "觀塘區",
            "tel": "852-23313357",
            "stockStatus": "有現貨"
          },
          {
            "name": "鯉魚門廣場",
            "address": "九龍油塘鯉魚門廣場1樓140號舖",
            "district": "觀塘區",
            "tel": "852-27583770",
            "stockStatus": "有現貨"
          },
          {
            "name": "太子",
            "address": "九龍大埔道10A地下",
            "district": "深水埗區",
            "tel": "852-27846580",
            "stockStatus": "有現貨"
          },
          {
            "name": "長沙灣",
            "address": "九龍長沙灣道833 號長沙灣廣場1 樓121-123 號舖",
            "district": "深水埗區",
            "tel": "852-21484640",
            "stockStatus": "有現貨"
          },
          {
            "name": "新荔枝角",
            "address": "九龍荔枝角道50-52號大華大廈地下B及C舖",
            "district": "油尖旺區",
            "tel": "852-27257208",
            "stockStatus": "有現貨"
          },
          {
            "name": "新水渠道",
            "address": "九龍太子水渠道38-42號寶石大樓地下B舖及天井",
            "district": "油尖旺區",
            "tel": "852-23451635",
            "stockStatus": "有現貨"
          },
          {
            "name": "蘇屋商場",
            "address": "深水埗蘇屋邨蘇屋商場地下G12號舖",
            "district": "深水埗區",
            "tel": "852-27156052",
            "stockStatus": "有現貨"
          },
          {
            "name": "彩雲商場",
            "address": "九龍牛池灣彩雲(一)邨彩雲商場2期高層地下A111號舖",
            "district": "黃大仙區",
            "tel": "852-28562456",
            "stockStatus": "有現貨"
          },
          {
            "name": "樂華商場",
            "address": "九龍牛頭角樂華南及北邨樂華商場3樓314號舖",
            "district": "觀塘區",
            "tel": "852-23436975",
            "stockStatus": "有現貨"
          },
          {
            "name": "德褔中心",
            "address": "九龍九龍灣德褔廣場第一期F16A & F17-F17A號舖",
            "district": "觀塘區",
            "tel": "852-27986458",
            "stockStatus": "有現貨"
          },
          {
            "name": "黃大仙中心北館",
            "address": "九龍黃大仙龍翔道136號黃大仙中心北館2樓N210A號舖",
            "district": "黃大仙區",
            "tel": "852-23503200",
            "stockStatus": "有現貨"
          },
          {
            "name": "麗港城",
            "address": "九龍觀塘茶果嶺道88號麗港城商場地下34及36號舖",
            "district": "觀塘區",
            "tel": "852-23799072",
            "stockStatus": "有現貨"
          },
          {
            "name": "新青山道",
            "address": "九龍長沙灣青山道476號百佳商業中心地下",
            "district": "深水埗區",
            "tel": "852-21484912",
            "stockStatus": "有現貨"
          },
          {
            "name": "富山邨",
            "address": "九龍富山邨富仁樓 LG2層L203-204號舖",
            "district": "黃大仙區",
            "tel": "852-27152904",
            "stockStatus": "有現貨"
          },
          {
            "name": "孔雀樓",
            "address": "九龍牛頭角道281號觀塘花園大廈孔雀樓地下281號舖",
            "district": "觀塘區",
            "tel": "852-27934773",
            "stockStatus": "有現貨"
          },
          {
            "name": "觀塘",
            "address": "九龍觀塘通明街7號地下",
            "district": "觀塘區",
            "tel": "852-23434003",
            "stockStatus": "有現貨"
          },
          {
            "name": "繽紛購物城",
            "address": "九龍紅磡德民街1-15號繽紛購物城1字樓E",
            "district": "九龍城區",
            "tel": "852-23346429",
            "stockStatus": "有現貨"
          },
          {
            "name": "油麗商場",
            "address": "九龍油塘油麗商場地下9 號舖",
            "district": "觀塘區",
            "tel": "852-26703400",
            "stockStatus": "有現貨"
          },
          {
            "name": "晴朗商場",
            "address": "九龍九龍城沐翠街晴朗商場地下A004號舖位",
            "district": "九龍城區",
            "tel": "852-28664493",
            "stockStatus": "有現貨"
          },
          {
            "name": "竹園",
            "address": "九龍竹園南村竹園商場1樓S101號",
            "district": "黃大仙區",
            "tel": "852-27261645",
            "stockStatus": "有現貨"
          },
          {
            "name": "啟田商場",
            "address": "九龍觀塘藍田啟田商場2樓228號舖",
            "district": "觀塘區",
            "tel": "852-25131112",
            "stockStatus": "有現貨"
          },
          {
            "name": "馬頭角道",
            "address": "九龍九龍城馬頭角道金都豪苑地下3-4號舖",
            "district": "九龍城區",
            "tel": "852-27144547",
            "stockStatus": "有現貨"
          },
          {
            "name": "萬事達廣場",
            "address": "九龍美孚新邨荔灣道萬事達廣場N72號地下",
            "district": "深水埗區",
            "tel": "852-27850295",
            "stockStatus": "有現貨"
          },
          {
            "name": "安達商場",
            "address": "九龍觀塘安達邨安達商場地下低層LG02號舖",
            "district": "觀塘區",
            "tel": "852-28871055",
            "stockStatus": "有現貨"
          },
          {
            "name": "寶達",
            "address": "九龍秀茂坪寶琳路寶達商場地下7號舖",
            "district": "觀塘區",
            "tel": "852-21904256",
            "stockStatus": "有現貨"
          },
          {
            "name": "石硤尾邨二期",
            "address": "九龍石硤尾邨二期美亮樓地下9號舖",
            "district": "深水埗區",
            "tel": "852-27153573",
            "stockStatus": "有現貨"
          },
          {
            "name": "雙鳳街",
            "address": "九龍黃大仙雙鳳街18號地下",
            "district": "黃大仙區",
            "tel": "852-23286364",
            "stockStatus": "有現貨"
          },
          {
            "name": "順天",
            "address": "九龍順天邨天權樓地下9-10號舖",
            "district": "觀塘區",
            "tel": "852-27636705",
            "stockStatus": "有現貨"
          },
          {
            "name": "西九龍中心",
            "address": "九龍深水埗欽洲街37K西九龍中心5樓501B",
            "district": "深水埗區",
            "tel": "852-23878262",
            "stockStatus": "有現貨"
          },
          {
            "name": "埃華街",
            "address": "九龍大角咀51-65號埃華街大方樓地下3-4號舖",
            "district": "油尖旺區",
            "tel": "852-23812176",
            "stockStatus": "有現貨"
          },
          {
            "name": "啟鑽商場",
            "address": "九龍黃大仙鑽石山啟鑽苑二期啟鑽商場B1樓B14號舖",
            "district": "黃大仙區",
            "tel": "852-27870931",
            "stockStatus": "有現貨"
          },
          {
            "name": "港灣豪庭廣場",
            "address": "九龍大角咀福利街 8 號港灣豪庭廣場1樓109-110號舖",
            "district": "油尖旺區",
            "tel": "852-31443490",
            "stockStatus": "有現貨"
          },
          {
            "name": "新蒲崗Mikiki",
            "address": "九龍新蒲崗太子道東638號Mikiki地下G56號鋪",
            "district": "黃大仙區",
            "tel": "852-27635308",
            "stockStatus": "有現貨"
          },
          {
            "name": "石硤尾",
            "address": "九龍石硤尾窩仔街1-13號仁寶大廈地下A舖",
            "district": "深水埗區",
            "tel": "852-27786375",
            "stockStatus": "有現貨"
          },
          {
            "name": "慈雲山中心",
            "address": "九龍慈雲山毓華街23號慈雲山中心5樓537-538號舖",
            "district": "黃大仙區",
            "tel": "852-28082493",
            "stockStatus": "有現貨"
          },
          {
            "name": "大本型",
            "address": "九龍油塘高超道38號大本型2樓233號舖",
            "district": "觀塘區",
            "tel": "852-28703578",
            "stockStatus": "有現貨"
          },
          {
            "name": "荔枝角",
            "address": "九龍深水埗荔枝角道316-318號地下",
            "district": "深水埗區",
            "tel": "852-27257960",
            "stockStatus": "有現貨"
          },
          {
            "name": "昇悅居",
            "address": "九龍荔枝角道833號昇悅居1樓130及132號舖",
            "district": "深水埗區",
            "tel": "852-22044930",
            "stockStatus": "有現貨"
          },
          {
            "name": "新蒲崗",
            "address": "九龍康強街35-49號地下2號舖",
            "district": "黃大仙區",
            "tel": "852-27570821",
            "stockStatus": "有現貨"
          },
          {
            "name": "德田商場",
            "address": "九龍藍田碧雲道223號德田商場1樓103號舖",
            "district": "觀塘區",
            "tel": "852-27178173",
            "stockStatus": "有現貨"
          },
          {
            "name": "深水埗V Walk Baby",
            "address": "九龍深水埗深旺道28號V Walk 2樓L2-1及L2-2號舖",
            "district": "深水埗區",
            "tel": "852-27993316",
            "stockStatus": "有現貨"
          },
          {
            "name": "油麻地",
            "address": "九龍彌敦道494-496號晉利商業大廈地下",
            "district": "油尖旺區",
            "tel": "852-27706504",
            "stockStatus": "有現貨"
          },
          {
            "name": "宇宙商場",
            "address": "九龍深水埗青山道164-170號宇宙商場地下G18A-B",
            "district": "深水埗區",
            "tel": "852-27297840",
            "stockStatus": "有現貨"
          },
          {
            "name": "長沙灣道",
            "address": "九龍長沙灣道226-242號金華大廈地下B6 & B7號舖",
            "district": "深水埗區",
            "tel": "852-23922036",
            "stockStatus": "有現貨"
          },
          {
            "name": "富昌商場",
            "address": "九龍深水埗富昌邨富昌商場1樓F110號舖",
            "district": "深水埗區",
            "tel": "852-27581090",
            "stockStatus": "有現貨"
          },
          {
            "name": "翔龍灣",
            "address": "九龍馬頭角新碼頭街38號翔龍灣廣場地下2號舖",
            "district": "九龍城區",
            "tel": "852-22622764",
            "stockStatus": "有現貨"
          },
          {
            "name": "新元州街",
            "address": "九龍深水埗元州街388號肇如大廈地下B舖",
            "district": "深水埗區",
            "tel": "852-27715707",
            "stockStatus": "有現貨"
          },
          {
            "name": "奧海城2期",
            "address": "九龍大角咀奧海城商場2期1樓142-143號舖",
            "district": "油尖旺區",
            "tel": "852-22724972",
            "stockStatus": "有現貨"
          },
          {
            "name": "荷里活廣場",
            "address": "九龍鑽石山荷里活廣場377-378號舖",
            "district": "黃大仙區",
            "tel": "852-29559506",
            "stockStatus": "有現貨"
          },
          {
            "name": "深水埗 V Walk",
            "address": "九龍深水埗深旺道28號V Walk 2樓L2-97及L2-98號舖",
            "district": "深水埗區",
            "tel": "852-27991050",
            "stockStatus": "有現貨"
          },
          {
            "name": "海富",
            "address": "九龍旺角西海泓道海富苑海富商場101舖",
            "district": "油尖旺區",
            "tel": "852-29940743",
            "stockStatus": "有現貨"
          },
          {
            "name": "海麗商場",
            "address": "九龍深水埗海麗邨海麗商場地下12及13號舖",
            "district": "深水埗區",
            "tel": "852-35146236",
            "stockStatus": "有現貨"
          },
          {
            "name": "啟德體育園",
            "address": "香港九龍九龍城啟德體育園啟德零售館1, 2樓 M1-204號舖",
            "district": "九龍城區",
            "tel": "852-23342278",
            "stockStatus": "有現貨"
          },
          {
            "name": "李鄭屋",
            "address": "九龍順寧道273號日輝大廈地下G11號",
            "district": "深水埗區",
            "tel": "852-27256594",
            "stockStatus": "有現貨"
          },
          {
            "name": "翠屏道",
            "address": "九龍觀塘翠屏(北)邨翠屏商場4A號舖",
            "district": "觀塘區",
            "tel": "852-23480054",
            "stockStatus": "有現貨"
          },
          {
            "name": "何文田廣場",
            "address": "九龍何文田何文田村何文田廣場三樓320及321號舖",
            "district": "九龍城區",
            "tel": "852-27152449",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "樂富廣場",
            "address": "九龍黃大仙聯合道198號樂富廣場3樓3183A號舖",
            "district": "黃大仙區",
            "tel": "852-23091114",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "新九龍廣場",
            "address": "九龍大角咀道38號新九龍廣場地下56-59號",
            "district": "油尖旺區",
            "tel": "852-27874454",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "麗晶花園",
            "address": "九龍九龍灣宏光道80號麗晶花園商場2樓2182, 2183, 2186號舖",
            "district": "觀塘區",
            "tel": "852-27154984",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "落馬洲離境",
            "address": "新界落馬洲港鐵站 LMC 119-120舖",
            "district": "北區",
            "tel": "852-34046533",
            "stockStatus": "有現貨"
          },
          {
            "name": "T2 7TL075 離境大堂",
            "address": "香港大嶼山香港國際機場二號客運大樓七樓離境大堂7TL075號舖",
            "district": "離島區",
            "tel": "852-25605908",
            "stockStatus": "有現貨"
          },
          {
            "name": "上水廣場",
            "address": "新界上水石湖墟龍琛路39號上水廣場4樓419-423舖",
            "district": "北區",
            "tel": "852-24800034",
            "stockStatus": "有現貨"
          },
          {
            "name": "羅湖港鐵站",
            "address": "新界羅湖港鐵站LOW 108 號舖",
            "district": "北區",
            "tel": "852-31424790",
            "stockStatus": "有現貨"
          },
          {
            "name": "大圍火車站",
            "address": "新界大圍港鐵站已繳費區12及13號舖",
            "district": "沙田區",
            "tel": "26983157",
            "stockStatus": "有現貨"
          },
          {
            "name": "屯門時代廣場",
            "address": "新界屯門時代廣場南翼3樓8,9及39號舖",
            "district": "屯門區",
            "tel": "852-24417153",
            "stockStatus": "有現貨"
          },
          {
            "name": "新城市廣場",
            "address": "新界沙田新城市廣場一期3樓307及307A號舖",
            "district": "沙田區",
            "tel": "852-26034318",
            "stockStatus": "有現貨"
          },
          {
            "name": "上水Baby",
            "address": "新界上水龍運街8號新都廣場106a號舖",
            "district": "北區",
            "tel": "852-23253728",
            "stockStatus": "有現貨"
          },
          {
            "name": "T1 6W532 禁區西大堂",
            "address": "香港大嶼山香港國際機場一號客運大樓6 樓離港層(禁區) 6W532號舖",
            "district": "離島區",
            "tel": "852-28901287",
            "stockStatus": "有現貨"
          },
          {
            "name": "長洲",
            "address": "香港長洲海旁道31號地下",
            "district": "離島區",
            "tel": "852-29869420",
            "stockStatus": "有現貨"
          },
          {
            "name": "粉嶺中心",
            "address": "新界粉嶺新運路33號粉嶺中心地下139至142號舖",
            "district": "北區",
            "tel": "852-26600114",
            "stockStatus": "有現貨"
          },
          {
            "name": "落馬洲港鐵站",
            "address": "新界落馬洲港鐵站LMC117號舖",
            "district": "元朗區",
            "tel": "852-24225501",
            "stockStatus": "有現貨"
          },
          {
            "name": "元朗大馬路",
            "address": "新界元朗青山公路元朗段118號地下2A及2B號舖",
            "district": "元朗區",
            "tel": "852-26205143",
            "stockStatus": "有現貨"
          },
          {
            "name": "大圍新翠",
            "address": "新界沙田大圍新翠邨新翠商場地下7號舖",
            "district": "沙田區",
            "tel": "852-23256623",
            "stockStatus": "有現貨"
          },
          {
            "name": "八號花園",
            "address": "新界大埔八號花園地下15-16號舖",
            "district": "大埔區",
            "tel": "852-26451044",
            "stockStatus": "有現貨"
          },
          {
            "name": "東薈城",
            "address": "新界東涌東薈城名店倉5樓501號舖",
            "district": "離島區",
            "tel": "852-27538179",
            "stockStatus": "有現貨"
          },
          {
            "name": "新寶怡花園",
            "address": "新界屯門良德街11號寶怡花園地下17-18號",
            "district": "屯門區",
            "tel": "852-24885211",
            "stockStatus": "有現貨"
          },
          {
            "name": "石籬商場",
            "address": "石籬商場",
            "district": "葵青區",
            "tel": "852-26531092",
            "stockStatus": "有現貨"
          },
          {
            "name": "大埔超級城Baby",
            "address": "新界大埔大埔超級城B區2樓269-270號舖",
            "district": "大埔區",
            "tel": "852-26334906",
            "stockStatus": "有現貨"
          },
          {
            "name": "元朗廣場",
            "address": "新界元朗廣場1樓130及181-183號鋪",
            "district": "元朗區",
            "tel": "852-23206205",
            "stockStatus": "有現貨"
          },
          {
            "name": "禾塘咀街",
            "address": "新界葵興禾塘咀街85號地下",
            "district": "葵青區",
            "tel": "852-24246507",
            "stockStatus": "有現貨"
          },
          {
            "name": "富蝶商場",
            "address": "新界大埔富蝶邨二期富蝶商場地下15號舖",
            "district": "大埔區",
            "tel": "852-24539128",
            "stockStatus": "有現貨"
          },
          {
            "name": "富亨",
            "address": "新界大埔富亨邨富亨購物中心28號",
            "district": "大埔區",
            "tel": "852-26614324",
            "stockStatus": "有現貨"
          },
          {
            "name": "上水中心",
            "address": "新界上水智昌路3號上水中心2樓2077D-H號舖",
            "district": "北區",
            "tel": "852-27877202",
            "stockStatus": "有現貨"
          },
          {
            "name": "元朗壽富街",
            "address": "新界元朗壽富街51-59元朗中心地下4A及4B號舖",
            "district": "元朗區",
            "tel": "852-24793219",
            "stockStatus": "有現貨"
          },
          {
            "name": "石蔭",
            "address": "新界葵涌石蔭路96號天安樓地下1號舖",
            "district": "葵青區",
            "tel": "852-24017239",
            "stockStatus": "有現貨"
          },
          {
            "name": "兆康苑",
            "address": "新界屯門兆康苑兆康商場226號舖",
            "district": "屯門區",
            "tel": "852-27933270",
            "stockStatus": "有現貨"
          },
          {
            "name": "大河道",
            "address": "新界荃灣大河道19號地下",
            "district": "荃灣區",
            "tel": "852-24394712",
            "stockStatus": "有現貨"
          },
          {
            "name": "荃新天地 2",
            "address": "新界荃灣楊屋道18號荃新天地2期高層地下UG70-73及UG75-77號舖",
            "district": "荃灣區",
            "tel": "852-26144542",
            "stockStatus": "有現貨"
          },
          {
            "name": "光華中心",
            "address": "新界元朗阜材街34-36號光華中心地下4號舖",
            "district": "元朗區",
            "tel": "852-24431343",
            "stockStatus": "有現貨"
          },
          {
            "name": "新沙田Baby",
            "address": "新界沙田新城市廣場第三期二樓A213號舖",
            "district": "沙田區",
            "tel": "852-23425131",
            "stockStatus": "有現貨"
          },
          {
            "name": "逸東商場",
            "address": "香港新界東涌逸東街8號逸東商場1樓115及116號舖",
            "district": "離島區",
            "tel": "852-24069408",
            "stockStatus": "有現貨"
          },
          {
            "name": "形點",
            "address": "新界元朗朗日路8-9號及元龍街9號形點2樓A212a號舖",
            "district": "元朗區",
            "tel": "852-24489700",
            "stockStatus": "有現貨"
          },
          {
            "name": "俊宏軒",
            "address": "新界天水圍天瑞路88號俊宏軒1樓104號舖",
            "district": "元朗區",
            "tel": "852-34011583",
            "stockStatus": "有現貨"
          },
          {
            "name": "翠華花園",
            "address": "新界沙田沙角街7-11號翠華花園地下12-13號舖",
            "district": "沙田區",
            "tel": "852-26461483",
            "stockStatus": "有現貨"
          },
          {
            "name": "西貢",
            "address": "新界西貢福民路22-40號西貢苑地下26-27號舖",
            "district": "西貢區",
            "tel": "852-27914432",
            "stockStatus": "有現貨"
          },
          {
            "name": "清河商場",
            "address": "新界上水清河邨清河商場9號舖",
            "district": "北區",
            "tel": "852-26723267",
            "stockStatus": "有現貨"
          },
          {
            "name": "綠楊",
            "address": "新界荃灣綠楊坊平台 P11A & P11B",
            "district": "荃灣區",
            "tel": "852-24923224",
            "stockStatus": "有現貨"
          },
          {
            "name": "新愉景新城",
            "address": "新界荃灣青山道398號愉景城購物商場二層2050舖",
            "district": "荃灣區",
            "tel": "852-28894608",
            "stockStatus": "有現貨"
          },
          {
            "name": "悅來坊",
            "address": "新界荃灣荃華街3號悅來酒店悅來坊商場地庫1B118室",
            "district": "荃灣區",
            "tel": "852-25410938",
            "stockStatus": "有現貨"
          },
          {
            "name": "將軍澳POPCORN",
            "address": "新界將軍澳唐賢街9號PopCorn 一樓F66及67號舖",
            "district": "西貢區",
            "tel": "852-27157018",
            "stockStatus": "有現貨"
          },
          {
            "name": "屯門市廣場",
            "address": "新界屯門屯順街1號屯門市廣場1期2樓2199B-2199F號舖",
            "district": "屯門區",
            "tel": "852-24041372",
            "stockStatus": "有現貨"
          },
          {
            "name": "禾輋",
            "address": "新界沙田禾輋邨商場2樓261號舖",
            "district": "沙田區",
            "tel": "852-26924850",
            "stockStatus": "有現貨"
          },
          {
            "name": "顯徑",
            "address": "新界沙田顯徑邨顯徑購物中心地下113號",
            "district": "沙田區",
            "tel": "852-26810489",
            "stockStatus": "有現貨"
          },
          {
            "name": "洪福商場",
            "address": "新界元朗洪水橋洪福商場地下9-10號舖",
            "district": "元朗區",
            "tel": "852-28902387",
            "stockStatus": "有現貨"
          },
          {
            "name": "銀湖天峰",
            "address": "新界馬鞍山西沙路599號銀湖天峰G10號舖",
            "district": "沙田區",
            "tel": "852-23149078",
            "stockStatus": "有現貨"
          },
          {
            "name": "梨木樹商場",
            "address": "新界荃灣梨木樹商場125號舖",
            "district": "葵青區",
            "tel": "852-24215192",
            "stockStatus": "有現貨"
          },
          {
            "name": "新康街",
            "address": "新界上水新康街96號地下",
            "district": "北區",
            "tel": "852-26721376",
            "stockStatus": "有現貨"
          },
          {
            "name": "大圍",
            "address": "新界沙田大圍道55-56號金禧花園10號地下",
            "district": "沙田區",
            "tel": "852-26983157",
            "stockStatus": "有現貨"
          },
          {
            "name": "恆安",
            "address": "新界沙田馬鞍山恆安商場2樓221-222號舖",
            "district": "沙田區",
            "tel": "852-26400592",
            "stockStatus": "有現貨"
          },
          {
            "name": "百得",
            "address": "新界沙田第一城商場G30-32號",
            "district": "沙田區",
            "tel": "852-26460884",
            "stockStatus": "有現貨"
          },
          {
            "name": "上水新豐路",
            "address": "新界上水石湖墟新豐路122-130號龍霞樓地下A & B舖",
            "district": "北區",
            "tel": "852-26720954",
            "stockStatus": "有現貨"
          },
          {
            "name": "沙田廣場",
            "address": "新界沙田沙田廣場3樓48號舖",
            "district": "沙田區",
            "tel": "852-24130004",
            "stockStatus": "有現貨"
          },
          {
            "name": "天澤",
            "address": "新界天水圍天瑞路71, 73, 75及77號天澤邨天澤商場2樓210A舖",
            "district": "元朗區",
            "tel": "852-28683007",
            "stockStatus": "有現貨"
          },
          {
            "name": "天水圍港鐵站",
            "address": "新界天水圍天水圍港鐵站TIS 30-33號舖",
            "district": "元朗區",
            "tel": "852-24450618",
            "stockStatus": "有現貨"
          },
          {
            "name": "屯門V City",
            "address": "新界屯門屯門鄉事會路83號V City MTR層28、29、30及31號舖",
            "district": "屯門區",
            "tel": "852-23423428",
            "stockStatus": "有現貨"
          },
          {
            "name": "元朗鳳琴街",
            "address": "新界元朗鳳琴街15-21號鴻運中心地下73號",
            "district": "元朗區",
            "tel": "852-24781165",
            "stockStatus": "有現貨"
          },
          {
            "name": "葵盛東邨",
            "address": "新界葵涌葵盛東邨葵盛東商場1樓131號舖",
            "district": "葵青區",
            "tel": "852-24971029",
            "stockStatus": "有現貨"
          },
          {
            "name": "瀝源",
            "address": "新界沙田瀝源邨瀝源商場二樓214號舖",
            "district": "沙田區",
            "tel": "852-26964932",
            "stockStatus": "有現貨"
          },
          {
            "name": "新形點Baby",
            "address": "新界元朗朗日路9號形點I 2樓2008號舖",
            "district": "元朗區",
            "tel": "852-24709371",
            "stockStatus": "有現貨"
          },
          {
            "name": "珀麗灣",
            "address": "新界馬灣珀麗路8 號地下S10 號舖",
            "district": "荃灣區",
            "tel": "852-29863010",
            "stockStatus": "有現貨"
          },
          {
            "name": "山景商場",
            "address": "新界屯門山景村山景商場低層地下106C及106D號",
            "district": "屯門區",
            "tel": "852-2471 2530",
            "stockStatus": "有現貨"
          },
          {
            "name": "圍方",
            "address": "新界沙田圍方3樓302-303號舖",
            "district": "沙田區",
            "tel": "852-26772532",
            "stockStatus": "有現貨"
          },
          {
            "name": "元朗同樂街",
            "address": "新界元朗同樂街21號地下",
            "district": "元朗區",
            "tel": "852-24090275",
            "stockStatus": "有現貨"
          },
          {
            "name": "麗城薈",
            "address": "新界荃灣青山公路625號麗城薈3期地下23,24及26號舖",
            "district": "荃灣區",
            "tel": "852-23579476",
            "stockStatus": "有現貨"
          },
          {
            "name": "西沙GO PARK 2",
            "address": "新界西沙海映路8號西沙GO PARK 2 地下低層LG30號舖",
            "district": "西貢區",
            "tel": "852-23762408",
            "stockStatus": "有現貨"
          },
          {
            "name": "恆福商場",
            "address": "新界屯門青山公路333號青山灣段恆福商場2樓213-214號舖",
            "district": "屯門區",
            "tel": "852-29775110",
            "stockStatus": "有現貨"
          },
          {
            "name": "洪水橋",
            "address": "新界元朗洪水橋洪堤路3號麗珊閣地下3號舖",
            "district": "元朗區",
            "tel": "852-24461571",
            "stockStatus": "有現貨"
          },
          {
            "name": "將軍澳中心",
            "address": "新界西貢將軍澳唐德街9號將軍澳中心1樓117號舖",
            "district": "西貢區",
            "tel": "852-27154156",
            "stockStatus": "有現貨"
          },
          {
            "name": "水泉澳廣場",
            "address": "新界沙田水泉澳邨水泉澳廣場2樓204號舖",
            "district": "沙田區",
            "tel": "852-28138602",
            "stockStatus": "有現貨"
          },
          {
            "name": "穗禾",
            "address": "新界沙田穗禾購物中心地下G11,G12號",
            "district": "沙田區",
            "tel": "852-26053070",
            "stockStatus": "有現貨"
          },
          {
            "name": "太和廣場",
            "address": "新界大埔太和路12號太和廣場2樓201號舖",
            "district": "大埔區",
            "tel": "852-22622005",
            "stockStatus": "有現貨"
          },
          {
            "name": "荃錦中心",
            "address": "新界荃灣荃錦中心110-125號",
            "district": "荃灣區",
            "tel": "852-24987843",
            "stockStatus": "有現貨"
          },
          {
            "name": "屯門HANDS",
            "address": "新界屯門友愛路友愛邨H.A.N.D.S. S區2樓S-229及S-230號舖",
            "district": "屯門區",
            "tel": "852-26598220",
            "stockStatus": "有現貨"
          },
          {
            "name": "屯門仁政街",
            "address": "新界屯門仁政街26A富華大廈地下C-E號",
            "district": "屯門區",
            "tel": "852-24505219",
            "stockStatus": "有現貨"
          },
          {
            "name": "菁田邨",
            "address": "新界屯門菁田邨菁田商場地下G12號舖",
            "district": "屯門區",
            "tel": "852-24120310",
            "stockStatus": "有現貨"
          },
          {
            "name": "頌安",
            "address": "新界馬鞍山頌安商場1樓110&111號",
            "district": "沙田區",
            "tel": "852-26335401",
            "stockStatus": "有現貨"
          },
          {
            "name": "錦繡花園",
            "address": "新界元朗錦繡花園D座地下2號舖",
            "district": "元朗區",
            "tel": "852-24710279",
            "stockStatus": "有現貨"
          },
          {
            "name": "葵興港鐵站",
            "address": "新界葵興葵興港鐵站KWH5號舖",
            "district": "葵青區",
            "tel": "852-27870921",
            "stockStatus": "有現貨"
          },
          {
            "name": "都會豪庭",
            "address": "新界將軍澳MCP Discovery 二樓205及208號舖",
            "district": "西貢區",
            "tel": "852-31946258",
            "stockStatus": "有現貨"
          },
          {
            "name": "新彩明商場",
            "address": "新界將軍澳彩明商場310號舖",
            "district": "西貢區",
            "tel": "852-27830728",
            "stockStatus": "有現貨"
          },
          {
            "name": "新彩園廣場",
            "address": "新界上水彩園邨彩園廣場3樓R8號舖",
            "district": "北區",
            "tel": "852-23620348",
            "stockStatus": "有現貨"
          },
          {
            "name": "新荃灣廣場",
            "address": "新界荃灣荃灣廣場3樓308-313號舖",
            "district": "荃灣區",
            "tel": "852-26434628",
            "stockStatus": "有現貨"
          },
          {
            "name": "博康",
            "address": "新界沙田博康邨博康商場107-109號舖",
            "district": "沙田區",
            "tel": "852-26356390",
            "stockStatus": "有現貨"
          },
          {
            "name": "沙角商場",
            "address": "新界沙田沙角街5號沙角商場2樓235號舖",
            "district": "沙田區",
            "tel": "852-27601161",
            "stockStatus": "有現貨"
          },
          {
            "name": "天耀",
            "address": "新界天水圍天耀廣場地下L029號舖",
            "district": "元朗區",
            "tel": "852-24479395",
            "stockStatus": "有現貨"
          },
          {
            "name": "置樂花園",
            "address": "新界屯門置樂花園地下66A號舖",
            "district": "屯門區",
            "tel": "852-24049790",
            "stockStatus": "有現貨"
          },
          {
            "name": "東港城",
            "address": "新界將軍澳重華路8號東港城2樓238B號舖",
            "district": "西貢區",
            "tel": "852-26284027",
            "stockStatus": "有現貨"
          },
          {
            "name": "花都廣場",
            "address": "新界粉嶺百和路88號花都廣場地下A56-A59號",
            "district": "北區",
            "tel": "852-26826217",
            "stockStatus": "有現貨"
          },
          {
            "name": "富健花園",
            "address": "新界屯門龍門道45號富健花園55, 56 & 58號舖",
            "district": "屯門區",
            "tel": "852-24539074",
            "stockStatus": "有現貨"
          },
          {
            "name": "青衣城",
            "address": "新界青衣青敬路33號青衣城二樓216-217號舖",
            "district": "葵青區",
            "tel": "852-24953783",
            "stockStatus": "有現貨"
          },
          {
            "name": "沙田萬怡酒店",
            "address": "新界沙田安平街一號地下2A號舖",
            "district": "沙田區",
            "tel": "852-25950408",
            "stockStatus": "有現貨"
          },
          {
            "name": "翠林新城",
            "address": "新界將軍澳翠林邨翠林新城5樓101號舖",
            "district": "西貢區",
            "tel": "852-27019793",
            "stockStatus": "有現貨"
          },
          {
            "name": "雍盛商埸",
            "address": "新界粉嶺雍盛苑雍盛商場地下3號舖",
            "district": "北區",
            "tel": "852-26985208",
            "stockStatus": "有現貨"
          },
          {
            "name": "駿洋商場",
            "address": "新界沙田火炭駿洋邨駿洋商場G層G13號舖",
            "district": "沙田區",
            "tel": "852-24672342",
            "stockStatus": "有現貨"
          },
          {
            "name": "西鐵兆康站",
            "address": "新界兆康港鐵站 6-9 號舖",
            "district": "屯門區",
            "tel": "852-24629309",
            "stockStatus": "有現貨"
          },
          {
            "name": "新都城二期",
            "address": "新界將軍澳新都城中心二期1樓 1116至1118號舖",
            "district": "西貢區",
            "tel": "852-26249599",
            "stockStatus": "有現貨"
          },
          {
            "name": "屯門Novo Walk",
            "address": "新界屯門欣寶路8號NOVO WALK 地下22及23號舖",
            "district": "屯門區",
            "tel": "852-24735468",
            "stockStatus": "有現貨"
          },
          {
            "name": "海翠坊",
            "address": "新界屯門湖翠路168-236號海翠坊1號及85-86號舖",
            "district": "屯門區",
            "tel": "852-24416769",
            "stockStatus": "有現貨"
          },
          {
            "name": "駿景廣場",
            "address": "新界火炭駿景廣場G63-65號舖",
            "district": "沙田區",
            "tel": "852-25927482",
            "stockStatus": "有現貨"
          },
          {
            "name": "大興",
            "address": "新界屯門大興街1號大興邨商場地下L107號舖",
            "district": "屯門區",
            "tel": "852-23856177",
            "stockStatus": "有現貨"
          },
          {
            "name": "大埔超級城",
            "address": "新界大埔大埔超級城A區2樓055-056號",
            "district": "大埔區",
            "tel": "852-29979431",
            "stockStatus": "有現貨"
          },
          {
            "name": "碧湖花園",
            "address": "新界粉嶺一鳴道15號碧湖花園商場地下高層19-21號舖",
            "district": "北區",
            "tel": "852-27607424",
            "stockStatus": "有現貨"
          },
          {
            "name": "碧堤坊",
            "address": "新界深井青山公路33號碧堤坊3樓8號舖",
            "district": "荃灣區",
            "tel": "852-31041054",
            "stockStatus": "有現貨"
          },
          {
            "name": "長亨商場",
            "address": "新界青衣長亨邨長亨商場3樓313-315號舖",
            "district": "葵青區",
            "tel": "852-23453578",
            "stockStatus": "有現貨"
          },
          {
            "name": "美田商場",
            "address": "新界大圍美田邨美田商場1樓103及104號舖",
            "district": "沙田區",
            "tel": "852-26345340",
            "stockStatus": "有現貨"
          },
          {
            "name": "新港城",
            "address": "新界馬鞍山新港城中心二樓2108舖",
            "district": "沙田區",
            "tel": "852-26336674",
            "stockStatus": "有現貨"
          },
          {
            "name": "T Town South",
            "address": "新界元朗天水圍天華路30號T Town South地下SG25號舖",
            "district": "元朗區",
            "tel": "852-24501167",
            "stockStatus": "有現貨"
          },
          {
            "name": "大窩口",
            "address": "新界葵涌大窩口邨大窩口第一商場1樓B01及B02號舖",
            "district": "葵青區",
            "tel": "852-26339341",
            "stockStatus": "有現貨"
          },
          {
            "name": "將軍澳Baby",
            "address": "新界將軍澳唐俊街9號pop Corn1樓F68號舖",
            "district": "西貢區",
            "tel": "852-27521167",
            "stockStatus": "有現貨"
          },
          {
            "name": "青衣",
            "address": "新界青衣長發廣場2樓217號舖",
            "district": "葵青區",
            "tel": "852-24331433",
            "stockStatus": "有現貨"
          },
          {
            "name": "蝴蝶邨",
            "address": "新界屯門蝴蝶廣場地下R123號舖",
            "district": "屯門區",
            "tel": "852-24639344",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "良景",
            "address": "新界屯門良景邨良景廣場2樓L217號舖",
            "district": "屯門區",
            "tel": "852-24550949",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "沙咀道",
            "address": "新界荃灣沙咀道236號地下,天井及平台",
            "district": "荃灣區",
            "tel": "852-24720408",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "大元村",
            "address": "新界大埔大元商場新翼地下1號舖",
            "district": "大埔區",
            "tel": "852-26678645",
            "stockStatus": "庫存緊張"
          }
        ]
      }
    },
    "oil-classic-26": {
      "mannings": {
        "code": "478511",
        "url": "https://www.mannings.com.hk/zh-hant/zihua-embrocation-26ml/p/478511",
        "storeCount": 98,
        "stores": [
          {
            "name": "灣仔光華",
            "address": "香港灣仔軒尼詩道269至273號地下A及B號舖",
            "district": "灣仔區",
            "tel": "852-25117036",
            "stockStatus": "有現貨"
          },
          {
            "name": "華光勵精中心",
            "address": "香港中環皇后大道中88號勵精中心地下2號",
            "district": "中西區",
            "tel": "852-25371241",
            "stockStatus": "有現貨"
          },
          {
            "name": "羅素街",
            "address": "香港銅鑼灣羅素街8號英皇鐘錶珠寶中心 地下1及2號舖",
            "district": "灣仔區",
            "tel": "852-25790568",
            "stockStatus": "有現貨"
          },
          {
            "name": "新軒尼詩道",
            "address": "香港灣仔軒尼詩道388號Mall Plus地下G08舖",
            "district": "灣仔區",
            "tel": "852-25742675",
            "stockStatus": "有現貨"
          },
          {
            "name": "安泰大廈",
            "address": "香港上環德輔道中144-148 號安泰大廈地下",
            "district": "中西區",
            "tel": "852-25419813",
            "stockStatus": "有現貨"
          },
          {
            "name": "北角城",
            "address": "香港英皇道250號 北角城中心地下02號舖",
            "district": "東區",
            "tel": "852-21740812",
            "stockStatus": "有現貨"
          },
          {
            "name": "電氣道",
            "address": "香港北角電氣道183號友邦廣場地下5-6號",
            "district": "東區",
            "tel": "852-25667561",
            "stockStatus": "有現貨"
          },
          {
            "name": "皇室堡",
            "address": "香港銅鑼灣告士打道311 號皇室堡3樓311至312號舖",
            "district": "灣仔區",
            "tel": "852-25633343",
            "stockStatus": "有現貨"
          },
          {
            "name": "康橋大廈",
            "address": "香港鰂魚涌太古坊康橋大廈地下A舖",
            "district": "東區",
            "tel": "852-22844811",
            "stockStatus": "有現貨"
          },
          {
            "name": "灣仔道",
            "address": "香港灣仔道 212-214號怡康大廈地下B舖",
            "district": "灣仔區",
            "tel": "852-22956783",
            "stockStatus": "有現貨"
          },
          {
            "name": "西環聯康",
            "address": "香港卑路乍街116-122及122A號聯康新樓地下C舖",
            "district": "中西區",
            "tel": "852-28167776",
            "stockStatus": "有現貨"
          },
          {
            "name": "灣仔Tower 188",
            "address": "香港灣仔軒尼詩道188-190號Tower 188 地下",
            "district": "灣仔區",
            "tel": "852-26338701",
            "stockStatus": "有現貨"
          },
          {
            "name": "恒隆中心",
            "address": "香港銅鑼灣百德新街2-20號恒隆中心地下G02號舖",
            "district": "灣仔區",
            "tel": "852-25681407",
            "stockStatus": "有現貨"
          },
          {
            "name": "西營盤",
            "address": "香港德輔道西334至350號恆裕大廈地下8號舖",
            "district": "中西區",
            "tel": "852-25460326",
            "stockStatus": "有現貨"
          },
          {
            "name": "寶翠園",
            "address": "香港西環卑路乍街8號寶翠園西寶城2樓237舖",
            "district": "中西區",
            "tel": "852-25427425",
            "stockStatus": "有現貨"
          },
          {
            "name": "太安樓",
            "address": "香港筲箕灣筲箕灣道57-87號太安樓地下G7及A6號舖",
            "district": "東區",
            "tel": "852-29675776",
            "stockStatus": "有現貨"
          },
          {
            "name": "賴恩樓",
            "address": "香港上環皇后大道西42-56號賴恩樓地下A號舖",
            "district": "中西區",
            "tel": "852-28052710",
            "stockStatus": "有現貨"
          },
          {
            "name": "新翠商場",
            "address": "香港柴灣新翠商場4樓1-11號",
            "district": "東區",
            "tel": "852-28979231",
            "stockStatus": "有現貨"
          },
          {
            "name": "興東商場",
            "address": "香港筲箕灣興東邨商場地下10號舖",
            "district": "東區",
            "tel": "852-29679736",
            "stockStatus": "有現貨"
          },
          {
            "name": "置地廣場",
            "address": "香港中環皇后大道中15號置地廣場中庭3樓312號舖",
            "district": "中西區",
            "tel": "852-34602024",
            "stockStatus": "有現貨"
          },
          {
            "name": "總統戲院",
            "address": "香港銅鑼灣謝菲道517號地下B舖",
            "district": "灣仔區",
            "tel": "852-25745483",
            "stockStatus": "有現貨"
          },
          {
            "name": "華富",
            "address": "香港華富(一)邨華珍樓714-715號舖",
            "district": "南區",
            "tel": "852-25507553",
            "stockStatus": "有現貨"
          },
          {
            "name": "置富",
            "address": "香港薄扶林置富南區廣場3樓303號室",
            "district": "南區",
            "tel": "852-28750400",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "藍灣廣場",
            "address": "香港小西灣道28號藍灣廣場高層地下UG51 及UG52A號舖",
            "district": "東區",
            "tel": "852-34074481",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "雅蘭中心",
            "address": "九龍彌敦道625及639號雅蘭中心地下G20-22號舖",
            "district": "油尖旺區",
            "tel": "852-27926021",
            "stockStatus": "有現貨"
          },
          {
            "name": "中港城",
            "address": "九龍尖沙咀廣東道33號中港城地下11及11A號舖",
            "district": "油尖旺區",
            "tel": "852-27527938",
            "stockStatus": "有現貨"
          },
          {
            "name": "國際廣場",
            "address": "九龍尖沙咀彌敦道63號國際廣場MTR樓層17, 20-23號舖",
            "district": "油尖旺區",
            "tel": "852-27049273",
            "stockStatus": "有現貨"
          },
          {
            "name": "山東街",
            "address": "九龍旺角山東街47-51號中橋商業大廈星際城市地下10-13號舖",
            "district": "油尖旺區",
            "tel": "852-27707920",
            "stockStatus": "有現貨"
          },
          {
            "name": "四海大廈",
            "address": "九龍尖沙咀彌敦道208-212號四海大廈地下A舖",
            "district": "油尖旺區",
            "tel": "852-27206044",
            "stockStatus": "有現貨"
          },
          {
            "name": "新海防道",
            "address": "九龍尖沙咀海防道38-40號中達大廈地下及天井",
            "district": "油尖旺區",
            "tel": "852-23619645",
            "stockStatus": "有現貨"
          },
          {
            "name": "新荔枝角",
            "address": "九龍荔枝角道50-52號大華大廈地下B及C舖",
            "district": "油尖旺區",
            "tel": "852-27257208",
            "stockStatus": "有現貨"
          },
          {
            "name": "圓方",
            "address": "九龍柯士甸道西一號圓方1樓1092號舖",
            "district": "油尖旺區",
            "tel": "852-21968125",
            "stockStatus": "有現貨"
          },
          {
            "name": "尖沙咀K11 MUSEA",
            "address": "香港九龍尖沙咀梳士巴利道18號K11 MUSEA B2層B201號01B舖",
            "district": "油尖旺區",
            "tel": "852-27931047",
            "stockStatus": "有現貨"
          },
          {
            "name": "海港城",
            "address": "九龍海港城港威商場三階3304號舖",
            "district": "油尖旺區",
            "tel": "852-26799313",
            "stockStatus": "有現貨"
          },
          {
            "name": "啟德體育園",
            "address": "香港九龍九龍城啟德體育園啟德零售館1, 2樓 M1-204號舖",
            "district": "九龍城區",
            "tel": "852-23342278",
            "stockStatus": "有現貨"
          },
          {
            "name": "新水渠道",
            "address": "九龍太子水渠道38-42號寶石大樓地下B舖及天井",
            "district": "油尖旺區",
            "tel": "852-23451635",
            "stockStatus": "有現貨"
          },
          {
            "name": "荔枝角",
            "address": "九龍深水埗荔枝角道316-318號地下",
            "district": "深水埗區",
            "tel": "852-27257960",
            "stockStatus": "有現貨"
          },
          {
            "name": "奧海城1期",
            "address": "香港西九龍海輝道11號奧海城1期高層地下5號舖",
            "district": "油尖旺區",
            "tel": "852-22714937",
            "stockStatus": "有現貨"
          },
          {
            "name": "奧海城2期",
            "address": "九龍大角咀奧海城商場2期1樓142-143號舖",
            "district": "油尖旺區",
            "tel": "852-22724972",
            "stockStatus": "有現貨"
          },
          {
            "name": "新寶廣場",
            "address": "九龍佐敦道23號新寶廣場地下1號舖",
            "district": "油尖旺區",
            "tel": "852-27826327",
            "stockStatus": "有現貨"
          },
          {
            "name": "馬頭角道",
            "address": "九龍九龍城馬頭角道金都豪苑地下3-4號舖",
            "district": "九龍城區",
            "tel": "852-27144547",
            "stockStatus": "有現貨"
          },
          {
            "name": "荷里活廣場",
            "address": "九龍鑽石山荷里活廣場377-378號舖",
            "district": "黃大仙區",
            "tel": "852-29559506",
            "stockStatus": "有現貨"
          },
          {
            "name": "太子",
            "address": "九龍大埔道10A地下",
            "district": "深水埗區",
            "tel": "852-27846580",
            "stockStatus": "有現貨"
          },
          {
            "name": "油麻地",
            "address": "九龍彌敦道494-496號晉利商業大廈地下",
            "district": "油尖旺區",
            "tel": "852-27706504",
            "stockStatus": "有現貨"
          },
          {
            "name": "富運",
            "address": "九龍彌敦道573號富運中心地下A舖",
            "district": "油尖旺區",
            "tel": "852-27830044",
            "stockStatus": "有現貨"
          },
          {
            "name": "寶來街",
            "address": "九龍紅磡湖光街1-7號地下17 G1A 號舖",
            "district": "九龍城區",
            "tel": "852-23341039",
            "stockStatus": "有現貨"
          },
          {
            "name": "河內道 K11",
            "address": "九龍尖沙咀河內道18號K11地庫1層B109-B110號舖",
            "district": "油尖旺區",
            "tel": "852-31224037",
            "stockStatus": "有現貨"
          },
          {
            "name": "新元州街",
            "address": "九龍深水埗元州街388號肇如大廈地下B舖",
            "district": "深水埗區",
            "tel": "852-27715707",
            "stockStatus": "有現貨"
          },
          {
            "name": "弼街",
            "address": "香港九龍西洋菜南街218-220號及弼街41號生發大廈地下A及B號舖",
            "district": "油尖旺區",
            "tel": "852-23479628",
            "stockStatus": "有現貨"
          },
          {
            "name": "黃大仙中心北館",
            "address": "九龍黃大仙龍翔道136號黃大仙中心北館2樓N210A號舖",
            "district": "黃大仙區",
            "tel": "852-23503200",
            "stockStatus": "有現貨"
          },
          {
            "name": "大埔道",
            "address": "九龍大埔道168-178號南都大廈地下4-5號舖",
            "district": "深水埗區",
            "tel": "852-23195295",
            "stockStatus": "有現貨"
          },
          {
            "name": "啟德Airside",
            "address": "九龍啟德協調道2號AIRSIDE地庫1層B119-B120號舖",
            "district": "九龍城區",
            "tel": "852-27746011",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "石硤尾邨二期",
            "address": "九龍石硤尾邨二期美亮樓地下9號舖",
            "district": "深水埗區",
            "tel": "852-27153573",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "屯門市廣場",
            "address": "新界屯門屯順街1號屯門市廣場1期2樓2199B-2199F號舖",
            "district": "屯門區",
            "tel": "852-24041372",
            "stockStatus": "有現貨"
          },
          {
            "name": "上水廣場",
            "address": "新界上水石湖墟龍琛路39號上水廣場4樓419-423舖",
            "district": "北區",
            "tel": "852-24800034",
            "stockStatus": "有現貨"
          },
          {
            "name": "朗屏邨",
            "address": "新界元朗朗屏邨5座鏡屏樓M樓M006,M007號舖",
            "district": "元朗區",
            "tel": "852-29445292",
            "stockStatus": "有現貨"
          },
          {
            "name": "新城市廣場",
            "address": "新界沙田新城市廣場一期3樓307及307A號舖",
            "district": "沙田區",
            "tel": "852-26034318",
            "stockStatus": "有現貨"
          },
          {
            "name": "東薈城",
            "address": "新界東涌東薈城名店倉5樓501號舖",
            "district": "離島區",
            "tel": "852-27538179",
            "stockStatus": "有現貨"
          },
          {
            "name": "上水中心",
            "address": "新界上水智昌路3號上水中心2樓2077D-H號舖",
            "district": "北區",
            "tel": "852-27877202",
            "stockStatus": "有現貨"
          },
          {
            "name": "T Town South",
            "address": "新界元朗天水圍天華路30號T Town South地下SG25號舖",
            "district": "元朗區",
            "tel": "852-24501167",
            "stockStatus": "有現貨"
          },
          {
            "name": "天澤",
            "address": "新界天水圍天瑞路71, 73, 75及77號天澤邨天澤商場2樓210A舖",
            "district": "元朗區",
            "tel": "852-28683007",
            "stockStatus": "有現貨"
          },
          {
            "name": "新沙田Baby",
            "address": "新界沙田新城市廣場第三期二樓A213號舖",
            "district": "沙田區",
            "tel": "852-23425131",
            "stockStatus": "有現貨"
          },
          {
            "name": "美林商場",
            "address": "新界大圍美林邨美林商場地下20-22號舖",
            "district": "沙田區",
            "tel": "852-34223254",
            "stockStatus": "有現貨"
          },
          {
            "name": "上水新豐路",
            "address": "新界上水石湖墟新豐路122-130號龍霞樓地下A & B舖",
            "district": "北區",
            "tel": "852-26720954",
            "stockStatus": "有現貨"
          },
          {
            "name": "T1 6W532 禁區西大堂",
            "address": "香港大嶼山香港國際機場一號客運大樓6 樓離港層(禁區) 6W532號舖",
            "district": "離島區",
            "tel": "852-28901287",
            "stockStatus": "有現貨"
          },
          {
            "name": "大埔超級城Baby",
            "address": "新界大埔大埔超級城B區2樓269-270號舖",
            "district": "大埔區",
            "tel": "852-26334906",
            "stockStatus": "有現貨"
          },
          {
            "name": "天水圍港鐵站",
            "address": "新界天水圍天水圍港鐵站TIS 30-33號舖",
            "district": "元朗區",
            "tel": "852-24450618",
            "stockStatus": "有現貨"
          },
          {
            "name": "元朗同樂街",
            "address": "新界元朗同樂街21號地下",
            "district": "元朗區",
            "tel": "852-24090275",
            "stockStatus": "有現貨"
          },
          {
            "name": "元朗大馬路",
            "address": "新界元朗青山公路元朗段118號地下2A及2B號舖",
            "district": "元朗區",
            "tel": "852-26205143",
            "stockStatus": "有現貨"
          },
          {
            "name": "卓爾居",
            "address": "屯門石排頭徑1號卓爾居地下G2A號舖",
            "district": "屯門區",
            "tel": "852-27939303",
            "stockStatus": "有現貨"
          },
          {
            "name": "八號花園",
            "address": "新界大埔八號花園地下15-16號舖",
            "district": "大埔區",
            "tel": "852-26451044",
            "stockStatus": "有現貨"
          },
          {
            "name": "帝庭軒",
            "address": "新界粉嶺聯和墟和滿街8號帝庭軒一期商場一樓1&2號舖",
            "district": "北區",
            "tel": "852-29475793",
            "stockStatus": "有現貨"
          },
          {
            "name": "西貢",
            "address": "新界西貢福民路22-40號西貢苑地下26-27號舖",
            "district": "西貢區",
            "tel": "852-27914432",
            "stockStatus": "有現貨"
          },
          {
            "name": "石籬商場",
            "address": "石籬商場",
            "district": "葵青區",
            "tel": "852-26531092",
            "stockStatus": "有現貨"
          },
          {
            "name": "太和廣場",
            "address": "新界大埔太和路12號太和廣場2樓201號舖",
            "district": "大埔區",
            "tel": "852-22622005",
            "stockStatus": "有現貨"
          },
          {
            "name": "良景",
            "address": "新界屯門良景邨良景廣場2樓L217號舖",
            "district": "屯門區",
            "tel": "852-24550949",
            "stockStatus": "有現貨"
          },
          {
            "name": "新寶怡花園",
            "address": "新界屯門良德街11號寶怡花園地下17-18號",
            "district": "屯門區",
            "tel": "852-24885211",
            "stockStatus": "有現貨"
          },
          {
            "name": "新愉景新城",
            "address": "新界荃灣青山道398號愉景城購物商場二層2050舖",
            "district": "荃灣區",
            "tel": "852-28894608",
            "stockStatus": "有現貨"
          },
          {
            "name": "沙田廣場",
            "address": "新界沙田沙田廣場3樓48號舖",
            "district": "沙田區",
            "tel": "852-24130004",
            "stockStatus": "有現貨"
          },
          {
            "name": "荃新天地",
            "address": "新界荃灣荃新天地地下G39及G41舖",
            "district": "荃灣區",
            "tel": "852-26446573",
            "stockStatus": "有現貨"
          },
          {
            "name": "顯徑",
            "address": "新界沙田顯徑邨顯徑購物中心地下113號",
            "district": "沙田區",
            "tel": "852-26810489",
            "stockStatus": "有現貨"
          },
          {
            "name": "天耀",
            "address": "新界天水圍天耀廣場地下L029號舖",
            "district": "元朗區",
            "tel": "852-24479395",
            "stockStatus": "有現貨"
          },
          {
            "name": "新彩園廣場",
            "address": "新界上水彩園邨彩園廣場3樓R8號舖",
            "district": "北區",
            "tel": "852-23620348",
            "stockStatus": "有現貨"
          },
          {
            "name": "T2 7TL075 離境大堂",
            "address": "香港大嶼山香港國際機場二號客運大樓七樓離境大堂7TL075號舖",
            "district": "離島區",
            "tel": "852-25605908",
            "stockStatus": "有現貨"
          },
          {
            "name": "禾塘咀街",
            "address": "新界葵興禾塘咀街85號地下",
            "district": "葵青區",
            "tel": "852-24246507",
            "stockStatus": "有現貨"
          },
          {
            "name": "荃新天地 2",
            "address": "新界荃灣楊屋道18號荃新天地2期高層地下UG70-73及UG75-77號舖",
            "district": "荃灣區",
            "tel": "852-26144542",
            "stockStatus": "有現貨"
          },
          {
            "name": "洪水橋",
            "address": "新界元朗洪水橋洪堤路3號麗珊閣地下3號舖",
            "district": "元朗區",
            "tel": "852-24461571",
            "stockStatus": "有現貨"
          },
          {
            "name": "光華中心",
            "address": "新界元朗阜材街34-36號光華中心地下4號舖",
            "district": "元朗區",
            "tel": "852-24431343",
            "stockStatus": "有現貨"
          },
          {
            "name": "沙田萬怡酒店",
            "address": "新界沙田安平街一號地下2A號舖",
            "district": "沙田區",
            "tel": "852-25950408",
            "stockStatus": "有現貨"
          },
          {
            "name": "海翠坊",
            "address": "新界屯門湖翠路168-236號海翠坊1號及85-86號舖",
            "district": "屯門區",
            "tel": "852-24416769",
            "stockStatus": "有現貨"
          },
          {
            "name": "石蔭",
            "address": "新界葵涌石蔭路96號天安樓地下1號舖",
            "district": "葵青區",
            "tel": "852-24017239",
            "stockStatus": "有現貨"
          },
          {
            "name": "荃灣千色匯",
            "address": "新界荃灣眾安街68號荃灣千色匯I期地下G016-G017舖",
            "district": "荃灣區",
            "tel": "852-26609030",
            "stockStatus": "有現貨"
          },
          {
            "name": "形點",
            "address": "新界元朗朗日路8-9號及元龍街9號形點2樓A212a號舖",
            "district": "元朗區",
            "tel": "852-24489700",
            "stockStatus": "有現貨"
          },
          {
            "name": "粉嶺中心",
            "address": "新界粉嶺新運路33號粉嶺中心地下139至142號舖",
            "district": "北區",
            "tel": "852-26600114",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "青衣城",
            "address": "新界青衣青敬路33號青衣城二樓216-217號舖",
            "district": "葵青區",
            "tel": "852-24953783",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "沙咀道",
            "address": "新界荃灣沙咀道236號地下,天井及平台",
            "district": "荃灣區",
            "tel": "852-24720408",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "屯門時代廣場",
            "address": "新界屯門時代廣場南翼3樓8,9及39號舖",
            "district": "屯門區",
            "tel": "852-24417153",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "屯門仁政街",
            "address": "新界屯門仁政街26A富華大廈地下C-E號",
            "district": "屯門區",
            "tel": "852-24505219",
            "stockStatus": "庫存緊張"
          }
        ]
      }
    },
    "spray-lavender": {
      "mannings": {
        "code": "690917",
        "url": "https://www.mannings.com.hk/zh-hant/zihua-mosquito-repellent-soothing-spray-85ml/p/690917",
        "storeCount": 77,
        "stores": [
          {
            "name": "興東商場",
            "address": "香港筲箕灣興東邨商場地下10號舖",
            "district": "東區",
            "tel": "852-29679736",
            "stockStatus": "有現貨"
          },
          {
            "name": "興華商場",
            "address": "香港柴灣興華商場地下G05及G06號舖",
            "district": "東區",
            "tel": "852-25055219",
            "stockStatus": "有現貨"
          },
          {
            "name": "耀東商場",
            "address": "香港筲箕灣耀東邨耀東商場2樓201號舖",
            "district": "東區",
            "tel": "852-25607135",
            "stockStatus": "有現貨"
          },
          {
            "name": "愛東",
            "address": "香港筲箕灣愛東村愛東商場111號舖",
            "district": "東區",
            "tel": "852-25137343",
            "stockStatus": "有現貨"
          },
          {
            "name": "灣仔道",
            "address": "香港灣仔道 212-214號怡康大廈地下B舖",
            "district": "灣仔區",
            "tel": "852-22956783",
            "stockStatus": "有現貨"
          },
          {
            "name": "置富",
            "address": "香港薄扶林置富南區廣場3樓303號室",
            "district": "南區",
            "tel": "852-28750400",
            "stockStatus": "有現貨"
          },
          {
            "name": "新康怡廣場",
            "address": "香港康山道1-2號康怡廣場2樓S30號及東上橋S8至S10號舖",
            "district": "東區",
            "tel": "852-26500412",
            "stockStatus": "有現貨"
          },
          {
            "name": "時代廣場",
            "address": "香港銅鑼灣時代廣場9樓917號舖",
            "district": "灣仔區",
            "tel": "852-25657455",
            "stockStatus": "有現貨"
          },
          {
            "name": "般咸道",
            "address": "香港般咸道57號地下",
            "district": "中西區",
            "tel": "852-29640734",
            "stockStatus": "有現貨"
          },
          {
            "name": "跑馬地",
            "address": "香港跑馬地成和道25-27號地下",
            "district": "灣仔區",
            "tel": "852-25756904",
            "stockStatus": "有現貨"
          },
          {
            "name": "鯉景灣",
            "address": "香港鯉景灣太安街25號D段地下GD20至21A舖",
            "district": "東區",
            "tel": "852-29678970",
            "stockStatus": "有現貨"
          },
          {
            "name": "上環",
            "address": "香港皇后大道中368號偉利大廈1樓 6 號舖",
            "district": "中西區",
            "tel": "852-25434464",
            "stockStatus": "有現貨"
          },
          {
            "name": "灣仔Tower 188",
            "address": "香港灣仔軒尼詩道188-190號Tower 188 地下",
            "district": "灣仔區",
            "tel": "852-26338701",
            "stockStatus": "有現貨"
          },
          {
            "name": "西環",
            "address": "香港皇后大道西572-574號高良大廈地下",
            "district": "中西區",
            "tel": "852-29864386",
            "stockStatus": "有現貨"
          },
          {
            "name": "寶翠園",
            "address": "香港西環卑路乍街8號寶翠園西寶城2樓237舖",
            "district": "中西區",
            "tel": "852-25427425",
            "stockStatus": "有現貨"
          },
          {
            "name": "電氣道",
            "address": "香港北角電氣道183號友邦廣場地下5-6號",
            "district": "東區",
            "tel": "852-25667561",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "海怡西商場",
            "address": "香港鴨俐洲海怡半島海怡廣場西座1樓 122 號舖",
            "district": "南區",
            "tel": "852-2537 5180",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "李鄭屋",
            "address": "九龍順寧道273號日輝大廈地下G11號",
            "district": "深水埗區",
            "tel": "852-27256594",
            "stockStatus": "有現貨"
          },
          {
            "name": "港灣豪庭廣場",
            "address": "九龍大角咀福利街 8 號港灣豪庭廣場1樓109-110號舖",
            "district": "油尖旺區",
            "tel": "852-31443490",
            "stockStatus": "有現貨"
          },
          {
            "name": "愛民商場",
            "address": "九龍何文田愛民邨愛民廣場G17號舖",
            "district": "九龍城區",
            "tel": "852-27123470",
            "stockStatus": "有現貨"
          },
          {
            "name": "深水埗V Walk Baby",
            "address": "九龍深水埗深旺道28號V Walk 2樓L2-1及L2-2號舖",
            "district": "深水埗區",
            "tel": "852-27993316",
            "stockStatus": "有現貨"
          },
          {
            "name": "長沙灣",
            "address": "九龍長沙灣道833 號長沙灣廣場1 樓121-123 號舖",
            "district": "深水埗區",
            "tel": "852-21484640",
            "stockStatus": "有現貨"
          },
          {
            "name": "奧海城1期",
            "address": "香港西九龍海輝道11號奧海城1期高層地下5號舖",
            "district": "油尖旺區",
            "tel": "852-22714937",
            "stockStatus": "有現貨"
          },
          {
            "name": "繽紛購物城",
            "address": "九龍紅磡德民街1-15號繽紛購物城1字樓E",
            "district": "九龍城區",
            "tel": "852-23346429",
            "stockStatus": "有現貨"
          },
          {
            "name": "大埔道",
            "address": "九龍大埔道168-178號南都大廈地下4-5號舖",
            "district": "深水埗區",
            "tel": "852-23195295",
            "stockStatus": "有現貨"
          },
          {
            "name": "雙鳳街",
            "address": "九龍黃大仙雙鳳街18號地下",
            "district": "黃大仙區",
            "tel": "852-23286364",
            "stockStatus": "有現貨"
          },
          {
            "name": "窩打老道",
            "address": "九龍窩打老道86D 萬基大廈地下 A&B1A號",
            "district": "油尖旺區",
            "tel": "852-27607742",
            "stockStatus": "有現貨"
          },
          {
            "name": "黃埔花園",
            "address": "九龍紅磡黃埔花園第十一期商場地下G4A及G4B號舖",
            "district": "九龍城區",
            "tel": "852-23851148",
            "stockStatus": "有現貨"
          },
          {
            "name": "富山邨",
            "address": "九龍富山邨富仁樓 LG2層L203-204號舖",
            "district": "黃大仙區",
            "tel": "852-27152904",
            "stockStatus": "有現貨"
          },
          {
            "name": "美孚",
            "address": "九龍美孚新邨百老匯街69-119號地下99B",
            "district": "深水埗區",
            "tel": "852-27429664",
            "stockStatus": "有現貨"
          },
          {
            "name": "南昌街",
            "address": "九龍南昌街223-237號名都廣場地下",
            "district": "深水埗區",
            "tel": "852-27794924",
            "stockStatus": "有現貨"
          },
          {
            "name": "太子",
            "address": "九龍大埔道10A地下",
            "district": "深水埗區",
            "tel": "852-27846580",
            "stockStatus": "有現貨"
          },
          {
            "name": "牛頭角下邨",
            "address": "九龍牛頭角下邨廣場地下2及3號舖",
            "district": "觀塘區",
            "tel": "852-21471022",
            "stockStatus": "有現貨"
          },
          {
            "name": "新九龍廣場",
            "address": "九龍大角咀道38號新九龍廣場地下56-59號",
            "district": "油尖旺區",
            "tel": "852-27874454",
            "stockStatus": "有現貨"
          },
          {
            "name": "新蒲崗",
            "address": "九龍康強街35-49號地下2號舖",
            "district": "黃大仙區",
            "tel": "852-27570821",
            "stockStatus": "有現貨"
          },
          {
            "name": "紅磡廣場",
            "address": "九龍紅磡馬頭圍道37-41號紅磡廣場一樓54-60號舖",
            "district": "九龍城區",
            "tel": "852-23343848",
            "stockStatus": "有現貨"
          },
          {
            "name": "馬頭角道",
            "address": "九龍九龍城馬頭角道金都豪苑地下3-4號舖",
            "district": "九龍城區",
            "tel": "852-27144547",
            "stockStatus": "有現貨"
          },
          {
            "name": "爵祿街",
            "address": "九龍新蒲崗爵祿街74-76號地下",
            "district": "黃大仙區",
            "tel": "852-23212619",
            "stockStatus": "有現貨"
          },
          {
            "name": "弼街",
            "address": "香港九龍西洋菜南街218-220號及弼街41號生發大廈地下A及B號舖",
            "district": "油尖旺區",
            "tel": "852-23479628",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "何文田廣場",
            "address": "九龍何文田何文田村何文田廣場三樓320及321號舖",
            "district": "九龍城區",
            "tel": "852-27152449",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "樂華商場",
            "address": "九龍牛頭角樂華南及北邨樂華商場3樓314號舖",
            "district": "觀塘區",
            "tel": "852-23436975",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "安泰商場",
            "address": "九龍觀塘安泰邨安泰商場地下高層105號舖",
            "district": "觀塘區",
            "tel": "852-23857018",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "翠林新城",
            "address": "新界將軍澳翠林邨翠林新城5樓101號舖",
            "district": "西貢區",
            "tel": "852-27019793",
            "stockStatus": "有現貨"
          },
          {
            "name": "偉景花園",
            "address": "新界青衣青綠街1號偉景花園商場地下8-11號",
            "district": "葵青區",
            "tel": "852-24345651",
            "stockStatus": "有現貨"
          },
          {
            "name": "碧堤坊",
            "address": "新界深井青山公路33號碧堤坊3樓8號舖",
            "district": "荃灣區",
            "tel": "852-31041054",
            "stockStatus": "有現貨"
          },
          {
            "name": "廣褔商場",
            "address": "新界大埔廣福邨廣福商場1樓206-209號舖",
            "district": "大埔區",
            "tel": "852-26577970",
            "stockStatus": "有現貨"
          },
          {
            "name": "翠華花園",
            "address": "新界沙田沙角街7-11號翠華花園地下12-13號舖",
            "district": "沙田區",
            "tel": "852-26461483",
            "stockStatus": "有現貨"
          },
          {
            "name": "新達廣場",
            "address": "新界大埔南運路9號新達廣場1樓A048-A050號舖",
            "district": "大埔區",
            "tel": "852-26743028",
            "stockStatus": "有現貨"
          },
          {
            "name": "頌安",
            "address": "新界馬鞍山頌安商場1樓110&111號",
            "district": "沙田區",
            "tel": "852-26335401",
            "stockStatus": "有現貨"
          },
          {
            "name": "錦繡花園",
            "address": "新界元朗錦繡花園D座地下2號舖",
            "district": "元朗區",
            "tel": "852-24710279",
            "stockStatus": "有現貨"
          },
          {
            "name": "廣源",
            "address": "新界沙田廣源邨商場第四座1-3號",
            "district": "沙田區",
            "tel": "852-26356995",
            "stockStatus": "有現貨"
          },
          {
            "name": "銀湖天峰",
            "address": "新界馬鞍山西沙路599號銀湖天峰G10號舖",
            "district": "沙田區",
            "tel": "852-23149078",
            "stockStatus": "有現貨"
          },
          {
            "name": "都會豪庭",
            "address": "新界將軍澳MCP Discovery 二樓205及208號舖",
            "district": "西貢區",
            "tel": "852-31946258",
            "stockStatus": "有現貨"
          },
          {
            "name": "盛芳街",
            "address": "新界葵涌盛芳街38-44號寬德大廈地下8-10號舖",
            "district": "葵青區",
            "tel": "852-26234561",
            "stockStatus": "有現貨"
          },
          {
            "name": "元朗同樂街",
            "address": "新界元朗同樂街21號地下",
            "district": "元朗區",
            "tel": "852-24090275",
            "stockStatus": "有現貨"
          },
          {
            "name": "運頭塘",
            "address": "新界大埔運頭塘邨商場29舖",
            "district": "大埔區",
            "tel": "852-26513448",
            "stockStatus": "有現貨"
          },
          {
            "name": "置樂花園",
            "address": "新界屯門置樂花園地下66A號舖",
            "district": "屯門區",
            "tel": "852-24049790",
            "stockStatus": "有現貨"
          },
          {
            "name": "葵涌商場",
            "address": "新界葵涌上角街葵涌邨3期葵涌商場104號舗",
            "district": "葵青區",
            "tel": "852-22794093",
            "stockStatus": "有現貨"
          },
          {
            "name": "悅來坊",
            "address": "新界荃灣荃華街3號悅來酒店悅來坊商場地庫1B118室",
            "district": "荃灣區",
            "tel": "852-25410938",
            "stockStatus": "有現貨"
          },
          {
            "name": "寶琳邨",
            "address": "新界將軍澳寶琳北路18號寶琳邨寶勤樓地下116及117號舖",
            "district": "西貢區",
            "tel": "852-24748002",
            "stockStatus": "有現貨"
          },
          {
            "name": "兆康苑",
            "address": "新界屯門兆康苑兆康商場226號舖",
            "district": "屯門區",
            "tel": "852-27933270",
            "stockStatus": "有現貨"
          },
          {
            "name": "屯門仁政街",
            "address": "新界屯門仁政街26A富華大廈地下C-E號",
            "district": "屯門區",
            "tel": "852-24505219",
            "stockStatus": "有現貨"
          },
          {
            "name": "洪水橋",
            "address": "新界元朗洪水橋洪堤路3號麗珊閣地下3號舖",
            "district": "元朗區",
            "tel": "852-24461571",
            "stockStatus": "有現貨"
          },
          {
            "name": "梨木樹商場",
            "address": "新界荃灣梨木樹商場125號舖",
            "district": "葵青區",
            "tel": "852-24215192",
            "stockStatus": "有現貨"
          },
          {
            "name": "帝庭軒",
            "address": "新界粉嶺聯和墟和滿街8號帝庭軒一期商場一樓1&2號舖",
            "district": "北區",
            "tel": "852-29475793",
            "stockStatus": "有現貨"
          },
          {
            "name": "馬鞍山",
            "address": "新界馬鞍山保泰街16號地下G10",
            "district": "沙田區",
            "tel": "852-26432059",
            "stockStatus": "有現貨"
          },
          {
            "name": "愉翠商場",
            "address": "新界沙田愉翠苑愉翠苑商場1樓119-120號舖",
            "district": "沙田區",
            "tel": "852-26474719",
            "stockStatus": "有現貨"
          },
          {
            "name": "囍逸",
            "address": "新界粉嶺和豐街28號囍逸地下5號舖",
            "district": "北區",
            "tel": "852-26901020",
            "stockStatus": "有現貨"
          },
          {
            "name": "顯徑",
            "address": "新界沙田顯徑邨顯徑購物中心地下113號",
            "district": "沙田區",
            "tel": "852-26810489",
            "stockStatus": "有現貨"
          },
          {
            "name": "嘉福商場",
            "address": "新界粉嶺嘉褔邨嘉褔商場1樓111號舖",
            "district": "北區",
            "tel": "852-29473272",
            "stockStatus": "有現貨"
          },
          {
            "name": "屯門Novo Walk",
            "address": "新界屯門欣寶路8號NOVO WALK 地下22及23號舖",
            "district": "屯門區",
            "tel": "852-24735468",
            "stockStatus": "有現貨"
          },
          {
            "name": "博康",
            "address": "新界沙田博康邨博康商場107-109號舖",
            "district": "沙田區",
            "tel": "852-26356390",
            "stockStatus": "有現貨"
          },
          {
            "name": "碩門商場",
            "address": "沙田碩門邨2期碩門商場P1層P12號舖",
            "district": "沙田區",
            "tel": "852-24209138",
            "stockStatus": "有現貨"
          },
          {
            "name": "屯門時代廣場",
            "address": "新界屯門時代廣場南翼3樓8,9及39號舖",
            "district": "屯門區",
            "tel": "852-24417153",
            "stockStatus": "有現貨"
          },
          {
            "name": "滿樂坊",
            "address": "香港大嶼山東涌松滿路7號滿東邨滿樂坊地下2號餔",
            "district": "離島區",
            "tel": "852-27299920",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "新沙田Baby",
            "address": "新界沙田新城市廣場第三期二樓A213號舖",
            "district": "沙田區",
            "tel": "852-23425131",
            "stockStatus": "庫存緊張"
          },
          {
            "name": "石蔭",
            "address": "新界葵涌石蔭路96號天安樓地下1號舖",
            "district": "葵青區",
            "tel": "852-24017239",
            "stockStatus": "庫存緊張"
          }
        ]
      }
    }
  }
};
