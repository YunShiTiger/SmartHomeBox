$(document).ready(function(){
	var xmlhttp;
	
	//灯带
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#BigLedOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=131");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#BigLedClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=130");
	});	
	
	//空调
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#AirOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=121");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#AirClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=120");
	});	
	
	//卧室灯	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#BedroomLedOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=521");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#BedroomLedClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=520");
	});	
	

	//厨房灯
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#KitchenLedOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=511");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#KitchenLedClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=510");
	});	
	
	//厨房风扇
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#KitchenFanOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=101");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#KitchenFanClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=100");
	});	
	
	//卫生间灯	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#ToiletLedOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=501");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#ToiletLedClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=500");
	});	
	
	
	//卫生间风扇
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#ToiletFanOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=111");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#ToiletFanClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=110");
	});	
	
	//阳台灯
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#BalconyLedOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=141");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#BalconyLedClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=140");
	});	
	
	//窗帘	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#CurtainOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=201");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#CurtainClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=200");
	});	
	
	//电视设备
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#TVClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=1110");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#TVOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=1111");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#MVOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=611");
	});
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#MusicOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=621");
	});
	
			
	//客厅可调灯	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#ParlorLedOpen").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=531");
	});	
	var ControlData;
	xmlhttp=new XMLHttpRequest();
		$("#ParlorLedClose").click(function(){
			xmlhttp.open("POST","servlet/SendControlData",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("ControlData=530");
	});
	
});




