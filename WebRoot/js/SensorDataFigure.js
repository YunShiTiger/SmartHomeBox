/*******************客厅曲线图**********************/
$(function () {    	
$(document).ready(function() {      	
	Highcharts.setOptions({                                                     
		global: {                                                               
			useUTC: false                                                       
		},
		 colors:"#08c,#ff5a00".split(","),  //修改曲线的颜色  #08c蓝色  #ff5a00红色
		 symbols: ["circle","triangle"]     //样式   circle原点     triangle三角形
	});                                                                          																			
	var chart;                                                                  
	$('#KetingTable').highcharts({                                                
		chart: {                                                                
			renderTo: 'container',
			type: 'spline',                                                    
			animation: Highcharts.svg, // don't animate in old IE               
			marginRight: 10,                                                    
			events: {                                                           
				load: function() {                                              
																				
					// set up the updating of the chart each second             
					var series = this.series[0];        //蓝色的线                          
					setInterval(function() {                                    
						var x = (new Date()).getTime(); // current time         
//					y = Math.random();  						
						var y = parseFloat(ReturnSensorData(ParlorHumidityValue));     //输入y的值	
						series.addPoint([x, y], true, true);                    
					}, 1000);   
					
					// set up the updating of the chart each second             
					var series1 = this.series[1];     //红色的线                           
					setInterval(function() {                                    
						var x = (new Date()).getTime(); // current time         
//						y = Math.random();  
						
						var y = parseFloat(ReturnSensorData(ParlorTemperatureValue));     //输入y的值
//						alert(y);	
						series1.addPoint([x, y], true, true);                    
					}, 1000);
					
				}                                                               
			}                                                                   
		},                                                                      
		title: {                                                                
			text: '客厅温度湿度走势图'                                            
		},   
		subtitle: {
			 text: " "
		},
		credits: {
			enabled: false
		},
		xAxis: {                                                                
			type: 'datetime',                                                   
			tickPixelInterval: 80      //横坐标密度                                          
		},                                                                      
		yAxis: {                                                                
			title: {                                                            
				text: ''                                                   
			},
			startOnTick: true,
			min: 0,
			plotLines: [{                                                       
				value: 0,                                                       
				width: 1,                                                       
				color: '#808080'                                                
			}]                                                                  
		},                                                                      
		tooltip: {                                                              
			formatter: function() {                                             
					return '<b>'+ this.series.name +'</b><br/>'+                
					Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+ 
					Highcharts.numberFormat(this.y, 2);                         
			}                                                                   
		},                                                                      
		legend: {                                                               
			enabled: true                                                      
		},                                                                      
		exporting: {                                                            
			enabled: true                                                      
		},                                                                      
		series: [{                                                              
			name: '湿度',                                                
			data: (function() {                                                 
				// generate an array of random data                             
				var data = [],                                                  
					time = (new Date()).getTime(),                              
					i;                                                          
																				
				for (i = -19; i <= 0; i++) {                                    
					data.push({                                                 
						x: time + i * 1000,                                     
//						y: Math.random()   //图像的初始数据    
					y: 0     //图像的初始数据 
					});                                                         
				}                                                               
				return data;                                                    
			})()                                                                
		},{                                                              
			name: '温度',                                                
			data: (function() {                                                 
				// generate an array of random data                             
				var data = [],                                                  
					time = (new Date()).getTime(),                              
					i;                                                          
																				
				for (i = -19; i <= 0; i++) {                                    
					data.push({                                                 
						x: time + i * 1000,                                     
//						y: Math.random()   //图像的初始数据    
					y: 0     //图像的初始数据 
					});                                                         
				}                                                               
				return data;                                                    
			})()                                                                
		}]                                                                      
	});                                                                         
});   																				
}); 

/*******************卧室曲线图**********************/
$(function () {    	
$(document).ready(function() {      	
	Highcharts.setOptions({                                                     
		global: {                                                               
			useUTC: false                                                       
		},
		 colors:"#08c,#ff5a00".split(","),  //修改曲线的颜色  #08c蓝色  #ff5a00红色
		 symbols: ["circle","triangle"]     //样式   circle原点     triangle三角形
	});                                                                         																			
	var chart;                                                                  
	$('#BedroomTable').highcharts({                                                
		chart: {                                                                
			renderTo: 'container',
			type: 'spline',                                                    
			animation: Highcharts.svg, // don't animate in old IE               
			marginRight: 10,                                                    
			events: {                                                           
				load: function() {                                              
																				
					// set up the updating of the chart each second             
					var series = this.series[0];        //蓝色的线                          
					setInterval(function() {                                    
						var x = (new Date()).getTime(); // current time         
//						y = Math.random();  						
						var y = parseFloat(ReturnSensorData(BedroomHumidityValue));     //输入y的值	
						series.addPoint([x, y], true, true);                    
					}, 1000);   
					
					// set up the updating of the chart each second             
					var series1 = this.series[1];     //红色的线                           
					setInterval(function() {                                    
						var x = (new Date()).getTime(); // current time         
//							y = Math.random();  
						
						var y = parseFloat(ReturnSensorData(BedroomTemperatureValue));     //输入y的值
//							alert(y);	
						series1.addPoint([x, y], true, true);                    
					}, 1000);
					
				}                                                               
			}                                                                   
		},                                                                      
		title: {                                                                
			text: '卧室温度湿度走势图'                                            
		},   
		subtitle: {
			 text: " "
		},
		credits: {
			enabled: false
		},
		xAxis: {                                                                
			type: 'datetime',                                                   
			tickPixelInterval: 80      //横坐标密度                                          
		},                                                                      
		yAxis: {                                                                
			title: {                                                            
				text: ''                                                   
			},
			startOnTick: true,
			min: 0,
			plotLines: [{                                                       
				value: 0,                                                       
				width: 1,                                                       
				color: '#808080'                                                
			}]                                                                  
		},                                                                      
		tooltip: {                                                              
			formatter: function() {                                             
					return '<b>'+ this.series.name +'</b><br/>'+                
					Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+ 
					Highcharts.numberFormat(this.y, 2);                         
			}                                                                   
		},                                                                      
		legend: {                                                               
			enabled: true                                                      
		},                                                                      
		exporting: {                                                            
			enabled: true                                                      
		},                                                                      
		series: [{                                                              
			name: '湿度',                                                
			data: (function() {                                                 
				// generate an array of random data                             
				var data = [],                                                  
					time = (new Date()).getTime(),                              
					i;                                                          
																				
				for (i = -19; i <= 0; i++) {                                    
					data.push({                                                 
						x: time + i * 1000,                                     
//							y: Math.random()   //图像的初始数据    
					y: 0     //图像的初始数据 
					});                                                         
				}                                                               
				return data;                                                    
			})()                                                                
		},{                                                              
			name: '温度',                                                
			data: (function() {                                                 
				// generate an array of random data                             
				var data = [],                                                  
					time = (new Date()).getTime(),                              
					i;                                                          
																				
				for (i = -19; i <= 0; i++) {                                    
					data.push({                                                 
						x: time + i * 1000,                                     
//							y: Math.random()   //图像的初始数据    
					y: 0     //图像的初始数据 
					});                                                         
				}                                                               
				return data;                                                    
			})()                                                                
		}]                                                                      
	});                                                                         
});   																				
}); 

/*******************厨房Q2曲线图**********************/
$(function () {    	
$(document).ready(function() {      	
	Highcharts.setOptions({                                                     
		global: {                                                               
			useUTC: false                                                       
		}
	});                                                                         																			
	var chart;                                                                  
	$('#KitchenQ2Table').highcharts({                                                
		chart: {                                                                
			renderTo: 'container',
			type: 'spline',                                                    
			animation: Highcharts.svg, // don't animate in old IE               
			marginRight: 10,                                                    
			events: {                                                           
				load: function() {                                              
																				
					// set up the updating of the chart each second             
					var series = this.series[0];        //蓝色的线                          
					setInterval(function() {                                    
						var x = (new Date()).getTime(); // current time         
//						y = Math.random();  						
						var y = parseFloat(ReturnSensorData(MQ2Value));     //输入y的值	
						series.addPoint([x, y], true, true);                    
					}, 1000);   	
				}                                                               
			}                                                                   
		},                                                                      
		title: {                                                                
			text: '厨房Q2动态走势图'                                            
		},   
		subtitle: {
			 text: " "
		},
		credits: {
			enabled: false
		},
		xAxis: {                                                                
			type: 'datetime',                                                   
			tickPixelInterval: 80      //横坐标密度                                          
		},                                                                      
		yAxis: {                                                                
			title: {                                                            
				text: ''                                                   
			},
			startOnTick: true,
			min: 0,
			plotLines: [{                                                       
				value: 0,                                                       
				width: 1,                                                       
				color: '#808080'                                                
			}]                                                                  
		},                                                                      
		tooltip: {                                                              
			formatter: function() {                                             
					return '<b>'+ this.series.name +'</b><br/>'+                
					Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+ 
					Highcharts.numberFormat(this.y, 2);                         
			}                                                                   
		},                                                                      
		legend: {                                                               
			enabled: true                                                      
		},                                                                      
		exporting: {                                                            
			enabled: true                                                      
		},                                                                      
		series: [{                                                              
			name: '厨房Q2烟雾浓度',                                                
			data: (function() {                                                 
				// generate an array of random data                             
				var data = [],                                                  
					time = (new Date()).getTime(),                              
					i;                                                          
																				
				for (i = -19; i <= 0; i++) {                                    
					data.push({                                                 
						x: time + i * 1000,                                     
//							y: Math.random()   //图像的初始数据    
					y: 0     //图像的初始数据 
					});                                                         
				}                                                               
				return data;                                                    
			})()                                                                
		}]                                                                      
	});                                                                         
});   																				
}); 


/*******************厨房Q4曲线图**********************/
$(function () {    	
$(document).ready(function() {      	
	Highcharts.setOptions({                                                     
		global: {                                                               
			useUTC: false                                                       
		}
	});                                                                         																			
	var chart;                                                                  
	$('#KitchenQ4Table').highcharts({                                                
		chart: {                                                                
			renderTo: 'container',
			type: 'spline',                                                    
			animation: Highcharts.svg, // don't animate in old IE               
			marginRight: 10,                                                    
			events: {                                                           
				load: function() {                                              
																				
					// set up the updating of the chart each second             
					var series = this.series[0];        //蓝色的线                          
					setInterval(function() {                                    
						var x = (new Date()).getTime(); // current time         
//						y = Math.random();  						
						var y = parseFloat(ReturnSensorData(MQ4Value));     //输入y的值	
						series.addPoint([x, y], true, true);                    
					}, 1000);   	
				}                                                               
			}                                                                   
		},                                                                      
		title: {                                                                
			text: '厨房Q4动态走势图'                                            
		},   
		subtitle: {
			 text: " "
		},
		credits: {
			enabled: false
		},
		xAxis: {                                                                
			type: 'datetime',                                                   
			tickPixelInterval: 80      //横坐标密度                                          
		},                                                                      
		yAxis: {                                                                
			title: {                                                            
				text: ''                                                   
			},
			startOnTick: true,
			min: 0,
			plotLines: [{                                                       
				value: 0,                                                       
				width: 1,                                                       
				color: '#808080'                                                
			}]                                                                  
		},                                                                      
		tooltip: {                                                              
			formatter: function() {                                             
					return '<b>'+ this.series.name +'</b><br/>'+                
					Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+ 
					Highcharts.numberFormat(this.y, 2);                         
			}                                                                   
		},                                                                      
		legend: {                                                               
			enabled: true                                                      
		},                                                                      
		exporting: {                                                            
			enabled: true                                                      
		},                                                                      
		series: [{                                                              
			name: '厨房Q4烟雾浓度',                                                
			data: (function() {                                                 
				// generate an array of random data                             
				var data = [],                                                  
					time = (new Date()).getTime(),                              
					i;                                                          
																				
				for (i = -19; i <= 0; i++) {                                    
					data.push({                                                 
						x: time + i * 1000,                                     
//							y: Math.random()   //图像的初始数据    
					y: 0     //图像的初始数据 
					});                                                         
				}                                                               
				return data;                                                    
			})()                                                                
		}]                                                                      
	});                                                                         
});   																				
}); 


/*******************卫生间Q135曲线图**********************/
$(function () {    	
$(document).ready(function() {      	
	Highcharts.setOptions({                                                     
		global: {                                                               
			useUTC: false                                                       
		}
	});                                                                         																			
	var chart;                                                                  
	$('#WCQ135Table').highcharts({                                                
		chart: {                                                                
			renderTo: 'container',
			type: 'spline',                                                    
			animation: Highcharts.svg, // don't animate in old IE               
			marginRight: 10,                                                    
			events: {                                                           
				load: function() {                                              
																				
					// set up the updating of the chart each second             
					var series = this.series[0];        //蓝色的线                          
					setInterval(function() {                                    
						var x = (new Date()).getTime(); // current time         
//						y = Math.random();  						
						var y = parseFloat(ReturnSensorData(MQ135Value));     //输入y的值	
						series.addPoint([x, y], true, true);                    
					}, 1000);   	
				}                                                               
			}                                                                   
		},                                                                      
		title: {                                                                
			text: '卫生间Q135动态走势图'                                            
		},   
		subtitle: {
			 text: " "
		},
		credits: {
			enabled: false
		},
		xAxis: {                                                                
			type: 'datetime',                                                   
			tickPixelInterval: 80      //横坐标密度                                          
		},                                                                      
		yAxis: {                                                                
			title: {                                                            
				text: ''                                                   
			},
			startOnTick: true,
			min: 0,
			plotLines: [{                                                       
				value: 0,                                                       
				width: 1,                                                       
				color: '#808080'                                                
			}]                                                                  
		},                                                                      
		tooltip: {                                                              
			formatter: function() {                                             
					return '<b>'+ this.series.name +'</b><br/>'+                
					Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+ 
					Highcharts.numberFormat(this.y, 2);                         
			}                                                                   
		},                                                                      
		legend: {                                                               
			enabled: true                                                      
		},                                                                      
		exporting: {                                                            
			enabled: true                                                      
		},                                                                      
		series: [{                                                              
			name: '卫生间Q135烟雾浓度',                                                
			data: (function() {                                                 
				// generate an array of random data                             
				var data = [],                                                  
					time = (new Date()).getTime(),                              
					i;                                                          
																				
				for (i = -19; i <= 0; i++) {                                    
					data.push({                                                 
						x: time + i * 1000,                                     
//							y: Math.random()   //图像的初始数据    
					y: 0     //图像的初始数据 
					});                                                         
				}                                                               
				return data;                                                    
			})()                                                                
		}]                                                                      
	});                                                                         
});   																				
});


