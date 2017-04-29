import React from 'react';
import Mainheader_nav from '../components/Mainheader_nav';

class Mainheader extends React.Component{
	constructor(props){
		super(props);
		this.state={
			display:'none',};
			this.handlemouseenter=this.handlemouseenter.bind(this);
			this.handlemouseleave=this.handlemouseleave.bind(this);




		}



		handlemouseenter(){

			this.setState({
				display:'block',
			});
		}

		handlemouseleave(){

			this.setState({
				display:'none',
			});
		}


		render(){
			return <header id="mainheader">
			<div id="mainheader_ico_container">
			<a><img src="./source/image/mainheader_ico/一站式股齐.png" /></a>
			<a><img src="./source/image/mainheader_ico/满88包邮.png" /></a>
			<a><img src="./source/image/mainheader_ico/国徽.png" /></a>
			</div>
			<ul id="header_form_down_ul">
			<a><li>酒水</li></a>
			<a><li>纸巾</li></a>
			<a><li>卫生巾</li></a>
			<a><li>垃圾袋</li></a>
			<a><li>牛奶</li></a>
			<a><li>袜子</li></a>
			</ul>
			<Mainheader_nav/>
			<div id="headleftlogo">
			<div id="logo"></div>
			</div>

			<div id="pos_select_container"
			onMouseEnter={this.handlemouseenter}
			onMouseLeave={this.handlemouseleave}>
			<div id="pos_select">北京</div>
			<div id="pos_select_show" style={{display:this.state.display}}>
			<p id="hotcity">热门城市：</p>
			<header>
			<p><a>北京</a><a>上海</a><a>杭州</a><a>广州</a><a>天津</a><a>苏州</a></p>
			<p><a>成都</a><a>深圳</a><a>南京</a><a>重庆</a><a>南昌</a><a>武汉</a></p>
			</header>
			<nav>
			<div>ABCDE</div>
			<div>FGHJ</div>
			<div>KLMNP</div>
			<div>QRSTW</div>
			<div>XYZ</div>
			</nav>
			<div id="city_container1">

			<p><span>A</span>

			<a>阿坝</a><a> 安庆</a><a> 安顺 </a><a>鞍山 </a><a>阿拉善 </a><a>安康</a><a> 安阳</a>
			</p><p><span>B</span>

			<a>百色</a><a>滨州</a><a>保定</a><a>蚌埠</a><a>白银</a><a>巴中</a><a>白沙</a><a>保亭</a>
			<a>包头</a><a>毕节</a><a>白山</a><a>宝鸡</a><a>亳州</a><a>保山</a><a>本溪</a><a>巴彦淖尔</a><a>北京</a><a>白城</a><a>北海</a>
			</p><p><span>C</span>

			<a>常德</a><a>楚雄</a><a>常州</a><a>昌吉</a><a>长沙</a><a>长治</a><a>昌江</a><a>澄迈</a><a>重庆</a>
			<a>朝阳</a><a>崇左</a><a>长春</a><a>承德</a><a>滁州</a><a>沧州</a><a>赤峰</a><a>池州</a><a>郴州</a><a>成都</a><a>潮州</a>
			</p><p><span>D</span>

			<a>大连</a><a>东营</a><a>德宏</a><a>定安</a><a>东方</a><a>儋州</a><a>东莞</a><a>大兴安岭</a>
			<a>迪庆</a><a>德州</a><a>大理</a><a>丹东</a><a>大庆</a><a>德阳</a><a>达州</a><a>定西</a><a>大同</a>
			</p><p><span>E</span>

			<a>恩施</a><a>鄂尔多斯</a><a>鄂州</a></p>

			</div>
			<div id="city_container2">

			<p>
			<span>F</span>

			<a>福州</a><a>抚顺</a><a>阜新</a><a>抚州</a><a>防城港</a><a>佛山</a><a>阜阳</a>
			</p><p><span>G</span>

			<a>广元</a><a>甘南</a><a>桂林</a><a>固原</a><a>贵阳</a><a>广州</a><a>贵港</a><a>广安</a><a>甘孜</a><a>赣州</a>
			</p><p><span>H</span>

			<a>葫芦岛</a><a>衡水</a><a>菏泽</a><a>呼和浩特</a><a>怀化</a><a>黄冈</a><a>淮南</a><a>汉中</a><a>呼伦贝尔</a><a>
			红河</a><a>淮安</a><a>河池</a><a>衡阳</a><a>鹤壁</a><a>黄石</a><a>邯郸</a><a>淮北</a><a>海口</a><a>惠州</a><a>鹤岗
			</a><a>黄山</a><a>贺州</a><a>杭州</a><a>合肥</a><a>河源</a><a>哈尔滨</a><a>黑河</a><a>湖州</a>
			</p><p><span>J</span>

			<a>金昌</a><a>焦作</a><a>锦州</a><a>吉安</a><a>嘉兴</a><a>景德镇</a><a>揭阳</a><a>九江</a><a>鸡西</a><a>酒泉</a><a>
			晋城</a><a>荆州</a><a>佳木斯</a><a>济南</a><a>金华</a><a>吉林</a><a>晋中</a><a>嘉峪关</a><a>济源</a><a>荆门</a>
			<a>江门</a><a>济宁</a></p>

			</div>

			<div id="city_container3">

			<p><span>K</span>

			<a>开封</a><a>昆明</a>
			</p><p><span>L</span>

			<a>丽江</a><a>洛阳</a><a>临高</a><a>陵水</a><a>乐东</a><a>六盘水</a><a>聊城</a>
			<a>六安</a><a>柳州</a><a>临夏</a><a>临汾</a><a>娄底</a><a>拉萨</a>
			<a>临沧</a><a>龙岩</a><a>吕梁</a><a>陇南</a><a>兰州</a><a>乐山</a>
			<a>来宾</a><a>漯河</a><a>泸州</a><a>连云港</a><a>廊坊</a><a>莱芜</a><a>辽源</a>
			<a>丽水</a><a>临沂</a><a>辽阳</a><a>凉山</a>
			</p><p><span>M</span>

			<a>眉山</a><a>梅州</a><a>茂名</a><a>马鞍山</a><a>牡丹江</a><a>绵阳</a>
			</p><p><span>N</span>

			<a>南宁</a><a>南阳</a><a>南充</a><a>南平</a><a>宁波</a><a>内江</a><a>南通</a><a>怒江</a><a>南京</a><a>南昌</a><a>宁德</a>
			</p><p><span>P</span>

			<a>萍乡</a><a>普洱</a><a>攀枝花</a><a>平凉</a><a>莆田</a><a>盘锦</a><a>濮阳</a><a>平顶山</a></p>

			</div>
			<div id="city_container4">

			<p><span>Q</span>

			潜江 齐齐哈尔 黔西南 庆阳 泉州 琼中 七台河 曲靖 琼海 衢州 秦皇岛 清远 钦州 青岛 黔东南 黔南
			</p><p><span>R</span>

			日照
			</p><p><span>S</span>

			石家庄 神农架 汕头 汕尾 苏州 宿州 绥化 三门峡 宿迁 遂宁 朔州 双鸭山 松原 三亚 深圳 商丘 石嘴山 绍兴 沈阳 商洛 三明 四平 随州 上海 十堰 邵阳 韶关 上饶
			</p><p><span>T</span>

			天门 通化 台州 屯昌 唐山 铁岭 天水 太原 铜仁 泰安 泰州 铜川 天津 铜陵 通辽
			</p><p><span>W</span>

			吴忠 乌鲁木齐 威海 文昌 万宁 五指山 文山 温州 乌海 乌兰察布 武汉 梧州 无锡 潍坊 芜湖 武威 渭南</p>

			</div>
			<div id="city_container5">

			<p><span>X</span>

			仙桃 锡林郭勒 孝感 宣城 忻州 厦门 徐州 湘潭 襄阳 新乡 兴安 湘西 西宁 咸宁 咸阳 新余 西双版纳 西安 许昌 信阳 邢台
			</p><p><span>Y</span>

			延安 运城 阳泉 雅安 扬州 玉溪 云浮 伊春 营口 盐城 岳阳 延边朝鲜族 宜春 宜昌 烟台 榆林 玉林 宜宾 银川 益阳 永州 阳江 鹰潭
			</p><p><span>Z</span>

			舟山 自贡 株洲 驻马店 中山 张家口 中卫 张家界 珠海 资阳 遵义 漳州 淄博 郑州 周口 湛江 张掖 昭通 枣庄 镇江 肇庆</p>

			</div>






			</div>
			</div>
			<form>
			<input type="text"   />
			<button id="search">搜索</button>
			</form>
			</header>;

		}


	}

	export default Mainheader;