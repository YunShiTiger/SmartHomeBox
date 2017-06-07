var MQ2Data=0;
var MQ4Data=0;
var MQ135Data=0;
var ParlorTemperatureData=0;
var ParlorHumidityData=0;
var BedroomTemperatureData=0;
var BedroomHumidityData=0;
			
function GetSensorData(){
	xmlhttp=new XMLHttpRequest();
		
		$.post("servlet/AnalyzeServer",{param1:"paramvalue"},function(data){
			
			 MQ2Data=data.data0;
			 MQ4Data=data.data1;
			 MQ135Data=data.data2;
			 ParlorTemperatureData=data.data3;
			 ParlorHumidityData=data.data4;
			 BedroomTemperatureData=data.data5;
			 BedroomHumidityData=data.data6;
			
			 
			 
		    document.getElementById("MQ2Value").innerHTML=data.data0;   //厨房MQ2烟雾
		    document.getElementById("MQ4Value").innerHTML=data.data1;	//厨房MQ4烟雾
		    document.getElementById("MQ135Value").innerHTML=data.data2; //卫生间MA135烟雾
		    document.getElementById("ParlorTemperatureValue").innerHTML=data.data3;	//客厅温度值
		    document.getElementById("ParlorHumidityValue").innerHTML=data.data4;	//客厅湿度值
		    document.getElementById("BedroomTemperatureValue").innerHTML=data.data5;	//卧室温度值
		    document.getElementById("BedroomHumidityValue").innerHTML=data.data6;	//卧室湿度值
		    document.getElementById("DoorValue").innerHTML=data.data7;	//门磁状态
		    document.getElementById("HongwaiValue").innerHTML=data.data8;	//红外状态
		    document.getElementById("FireValue").innerHTML=data.data9;	//火焰状态
		       
		},"json");
		
		console.log("sended..");
		
}

function ReturnSensorData(x){
	switch(x){
	case MQ2Value: return MQ2Data; break;
	case MQ4Value: return MQ4Data; break;
	case MQ135Value: return MQ135Data; break;
	case ParlorTemperatureValue: return ParlorTemperatureData; break;
	case ParlorHumidityValue: return ParlorHumidityData; break;
	case BedroomTemperatureValue: return BedroomTemperatureData; break;
	case BedroomHumidityValue: return BedroomHumidityData; break;
	}	
}

$(document).ready(function(){
//	$("#TestButton").click(function (){
//		GetSensorData();
//	});
	var t= window.setInterval("GetSensorData()",1000);   //1秒刷新一次
	//TODO modify 重复间隔有点长，debug阶段先慢点
	
	
});
