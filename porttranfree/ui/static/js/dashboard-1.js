

(function($) {
    /* "use strict" */
	
 var dlabChartlist = function(){
	
	var screenWidth = $(window).width();
	var CpuUsageRender;
	var CpuUsageRenderOptions = {
		series: [0],
		chart: {
		type: 'radialBar',
		offsetY: 0,
		height:350,
		sparkline: {
		  enabled: true
		}
	  },
	  plotOptions: {
		radialBar: {
		  startAngle: -130,
		  endAngle: 130,
		  track: {
			background: "#F1EAFF",
			strokeWidth: '100%',
			margin: 5,
		  },

		  hollow: {
			margin: 30,
			size: '45%',
			background: '#F1EAFF',
			image: undefined,
			imageOffsetX: 0,
			imageOffsetY: 0,
			position: 'front',
		  },

		  dataLabels: {
			name: {
			  show: false
			},
			value: {
			  offsetY: 5,
			  fontSize: '12px',
			  color:'#886CC0',
			  fontWeight:700,
			}
		  }
		}
	  },
	  responsive: [{
		breakpoint: 1600,
		options: {
		 chart: {
			height:250
		  },
		}
	  }

	  ],
	  grid: {
		padding: {
		  top: -10
		}
	  },
	  /* stroke: {
		dashArray: 4,
		colors:'#6EC51E'
	  }, */
	  fill: {
		type: 'gradient',
		colors:'#FF6CC0',
		gradient: {
			shade: 'white',
			shadeIntensity: 0.15,
			inverseColors: false,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 50, 65, 91]
		},
	  },
	  labels: ['Average Results'],
	};
	 
	let draw = Chart.controllers.line.__super__.draw; //draw shadow
		var donutChart1 = function(){
		$("span.donut1").peity("donut", {
			width: "70",
			height: "70"
		});
	}
	var chartBar = function(){
		
		var options = {
			  series: [
				{
					name: 'Running',
					data: [50, 18, 70, 40, 90, 70, 20],
					//radius: 12,	
				}, 
				{
				  name: 'Cycling',
				  data: [80, 40, 55, 20, 45, 30, 80]
				}, 
				
			],
				chart: {
				type: 'bar',
				height: 400,
				
				toolbar: {
					show: false,
				},
				
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '57%',
				endingShape: "rounded",
				borderRadius: 12,
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['#FFA26D', '#FF5ED2'],
			dataLabels: {
			  enabled: false,
			},
			markers: {
		shape: "circle",
		},
		
		
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 10,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			stroke: {
			  show: true,
			  width: 4,
			  curve: 'smooth',
			  lineCap: 'round',
			  colors: ['transparent']
			},
			grid: {
				borderColor: '#eee',
			},
			xaxis: {
				 position: 'bottom',
			  categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			  labels: {
			   style: {
				  colors: '#787878',
				  fontSize: '13px',
				  fontFamily: 'poppins',
				  fontWeight: 100,
				  cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  crosshairs: {
			  show: false,
			  }
			},
			yaxis: {
				labels: {
					offsetX:-16,
				   style: {
					  colors: '#787878',
					  fontSize: '13px',
					   fontFamily: 'poppins',
					  fontWeight: 100,
					  cssClass: 'apexcharts-xaxis-label',
				  },
			  },
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'white',
					type: "vertical",
					shadeIntensity: 0.2,
					gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 50, 50],
					colorStops: []
				}
			}, 
			tooltip: {
			  y: {
				formatter: function (val) {
				  return "$ " + val + " thousands"
				}
			  }
			},
			};

			var chartBar1 = new ApexCharts(document.querySelector("#chartBar"), options);
			chartBar1.render();
	}
	var chartBar1 = function(){
		
		var options = {
			  series: [
				{
					name: 'Running',
					data: [50, 18, 70, 40, 90, 70, 20],
					//radius: 12,	
				}, 
				{
				  name: 'Cycling',
				  data: [80, 40, 55, 20, 45, 30, 80]
				}, 
				
			],
				chart: {
				type: 'bar',
				height: 370,
				
				toolbar: {
					show: false,
				},
				
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '57%',
				endingShape: "rounded",
				borderRadius: 12,
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['#FFA26D', '#FF5ED2'],
			dataLabels: {
			  enabled: false,
			},
			markers: {
		shape: "circle",
		},
		
		
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 10,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			stroke: {
			  show: true,
			  width: 4,
			  curve: 'smooth',
			  lineCap: 'round',
			  colors: ['transparent']
			},
			grid: {
				borderColor: '#eee',
			},
			xaxis: {
				 position: 'bottom',
			  categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			  labels: {
			   style: {
				  colors: '#787878',
				  fontSize: '13px',
				  fontFamily: 'poppins',
				  fontWeight: 100,
				  cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  crosshairs: {
			  show: false,
			  }
			},
			yaxis: {
				labels: {
					offsetX:-16,
				   style: {
					  colors: '#787878',
					  fontSize: '13px',
					   fontFamily: 'poppins',
					  fontWeight: 100,
					  cssClass: 'apexcharts-xaxis-label',
				  },
			  },
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'white',
					type: "vertical",
					shadeIntensity: 0.2,
					gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 50, 50],
					colorStops: []
				}
			}, 
			tooltip: {
			  y: {
				formatter: function (val) {
				  return "$ " + val + " thousands"
				}
			  }
			},
			};

			var chartBar1 = new ApexCharts(document.querySelector("#chartBar1"), options);
			chartBar1.render();
	}
	var chartBar2 = function(){
		
		var options = {
			  series: [
				{
					name: 'Running',
					data: [50, 18, 70, 40, 90, 70, 20],
					//radius: 12,	
				}, 
				{
				  name: 'Cycling',
				  data: [80, 40, 55, 20, 45, 30, 80]
				}, 
				
			],
				chart: {
				type: 'bar',
				height: 370,
				
				toolbar: {
					show: false,
				},
				
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '57%',
				endingShape: "rounded",
				borderRadius: 12,
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['#FFA26D', '#FF5ED2'],
			dataLabels: {
			  enabled: false,
			},
			markers: {
		shape: "circle",
		},
		
		
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 10,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			stroke: {
			  show: true,
			  width: 4,
			  curve: 'smooth',
			  lineCap: 'round',
			  colors: ['transparent']
			},
			grid: {
				borderColor: '#eee',
			},
			xaxis: {
				 position: 'bottom',
			  categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			  labels: {
			   style: {
				  colors: '#787878',
				  fontSize: '13px',
				  fontFamily: 'poppins',
				  fontWeight: 100,
				  cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  crosshairs: {
			  show: false,
			  }
			},
			yaxis: {
				labels: {
					offsetX:-16,
				   style: {
					  colors: '#787878',
					  fontSize: '13px',
					   fontFamily: 'poppins',
					  fontWeight: 100,
					  cssClass: 'apexcharts-xaxis-label',
				  },
			  },
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'white',
					type: "vertical",
					shadeIntensity: 0.2,
					gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 50, 50],
					colorStops: []
				}
			}, 
			tooltip: {
			  y: {
				formatter: function (val) {
				  return "$ " + val + " thousands"
				}
			  }
			},
			};

			var chartBar1 = new ApexCharts(document.querySelector("#chartBar2"), options);
			chartBar1.render();
	}
	var revenueMap = function(){
		  var options = {
			  series: [
				{
					name: 'hash rate',
					data: [0],
					//radius: 12,	
				}, 				
			],
				chart: {
				type: 'line',
				height: 300,
				toolbar: {
					show: false,
				},
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '70%',
				endingShape: 'rounded'
			  },
			},
			colors:['#886CC0'],
			dataLabels: {
			  enabled: false,
			},
			markers: {
				shape: "circle",
			},
	
			legend: {
				show: false,
			},
			stroke: {
			  show: true,
			  width: 2,
			  curve:'smooth',
			  colors:['var(--primary)'],
			},
			
			grid: {
				borderColor: '#eee',
				show: true,
				 xaxis: {
					lines: {
						show: true,
					}
				},  
				 yaxis: {
					lines: {
						show: false,
					}
				},  
			},
			xaxis: {
			  categories: [],
			  show:false,
			  labels: {
				style: {
					colors: '#7E7F80',
					fontSize: '13px',
					fontFamily: 'Poppins',
					fontWeight: 100,
					cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  crosshairs: {
			  show: false,
			  }
			},
			yaxis: {
			show:true,	
			labels: {
				offsetX: -15,
			   style: {
				  colors: '#7E7F80',
				  fontSize: '14px',
				   fontFamily: 'Poppins',
				  fontWeight: 100,
				},
				 formatter: function (y) {
					return y.toFixed(0) + "G";
				}
			  },
			},
			fill: {
			  opacity: 1,
			  colors:'#FAC7B6'
			},
			tooltip: {
			  y: {
				formatter: function (val) {
				  return val + " gh/s"
				}
			  }
			}
			};//jiangmin
			var chartBar1 = new ApexCharts(document.querySelector("#revenueMap"), options);
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status == 200) {
					var data = xhr.responseText;
					data = JSON.parse(data);
					for (var p in data.total_hash_rate_history){
						options.series[0].data[p] = parseFloat(Number(data.total_hash_rate_history[p].hash_rate ).toFixed(2)); 
						options.xaxis.categories[p] = data.total_hash_rate_history[p].time;
					}
					chartBar1.render();
				}
			}
			xhr.open('GET','api/totalHashRateHistory',true)
			xhr.send();
	 }
	 var revenueMapClients = function(){
		var options = {
			series: [
			  {
				  name: '矿机数',
				  data: [0],
				  //radius: 12,	
			  }, 				
		  ],
			  chart: {
			  type: 'line',
			  height: 300,
			  toolbar: {
				  show: false,
			  },
		  },
		  plotOptions: {
			bar: {
			  horizontal: false,
			  columnWidth: '70%',
			  endingShape: 'rounded'
			},
		  },
		  colors:['#886CC0'],
		  dataLabels: {
			enabled: false,
		  },
		  markers: {
			  shape: "circle",
		  },
  
		  legend: {
			  show: false,
		  },
		  stroke: {
			show: true,
			width: 2,
			curve:'smooth',
			colors:['var(--primary)'],
		  },
		  
		  grid: {
			  borderColor: '#eee',
			  show: true,
			   xaxis: {
				  lines: {
					  show: true,
				  }
			  },  
			   yaxis: {
				  lines: {
					  show: false,
				  }
			  },  
		  },
		  xaxis: {
			categories: [],
			show:false,
			labels: {
			  style: {
				  colors: '#7E7F80',
				  fontSize: '13px',
				  fontFamily: 'Poppins',
				  fontWeight: 100,
				  cssClass: 'apexcharts-xaxis-label',
			  },
			},
			crosshairs: {
			show: false,
			}
		  },
		  yaxis: {
		  show:true,	
		  labels: {
			  offsetX: -15,
			 style: {
				colors: '#7E7F80',
				fontSize: '14px',
				 fontFamily: 'Poppins',
				fontWeight: 100,
			  },
			   formatter: function (y) {
				  return y.toFixed(0) + "台";
			  }
			},
		  },
		  fill: {
			opacity: 1,
			colors:'#FAC7B6'
		  },
		  tooltip: {
			y: {
			  formatter: function (val) {
				return val + " 台"
			  }
			}
		  }
		  };//jiangmin
		  var chartBar1 = new ApexCharts(document.querySelector("#revenueMapClients"), options);
		  var xhr = new XMLHttpRequest();
		  xhr.onreadystatechange = function () {
			  if (xhr.readyState == 4 && xhr.status == 200) {
				  var data = xhr.responseText;
				  data = JSON.parse(data);
				  for (var p in data.total_client_history){
					  options.series[0].data[p] = parseFloat(Number(data.total_client_history[p].client_cnt).toFixed(2)); 
					  options.xaxis.categories[p] = data.total_client_history[p].time;
				  }
				  chartBar1.render();
			  }
		  }
		  xhr.open('GET','api/totalClientCntHistory',true)
		  xhr.send();
   }
	var columnChart = function(){
		var options = {
			series: [{
				name: 'Aplication Sent',
				data: [40, 55, 15,55]
			}, {
				name: 'Appllication Answered',
				data: [40, 55, 35,55]
			}, {
				name: 'Hired',
				data: [40, 17, 55, 55]
			}],
			chart: {
				type: 'bar',
				height: 150,
				stacked: true,
				toolbar: {
					show: false,
				}
			},
			responsive: [{
				breakpoint: 480,
				options: {
					legend: {
						position: 'bottom',
						offsetX: -10,
						offsetY: 0
					}
				}
			}],
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '20%',
					
					endingShape: "rounded",
					startingShape: "rounded",
					backgroundRadius: 20,
					colors: {
						backgroundBarColors: ['#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC'],
						backgroundBarOpacity: 1,
						backgroundBarRadius: 10,
					},
				},
				
			},
			colors:['#ECECEC', '#886CC0', '#886CC0'],
			xaxis: {
				show: false,
				axisBorder: {
					show: false,
				},
				axisTicks:{
					show: false,
				},
				labels: {
					show: false,
					style: {
						colors: '#828282',
						fontSize: '14px',
						fontFamily: 'Poppins',
						fontWeight: 'light',
						cssClass: 'apexcharts-xaxis-label',
					},
				},
				
				crosshairs: {
					show: false,
				},
				
				categories: ['Sun', 'Mon', 'Tue'],
			},
			yaxis: {
				show: false
			},
			grid: {
				show: false,
			},
			toolbar: {
				enabled: false,
			},
			dataLabels: {
			  enabled: false
			},
			legend: {
				show:false
			},
			fill: {
				opacity: 1
			}
		};

		var chart = new ApexCharts(document.querySelector("#columnChart"), options);
		chart.render();
	}	
	var NewCustomers = function(){
		var options = {
		  series: [
			{
				name: 'Net Profit',
				data: [],
				/* radius: 30,*/
			}, 				
		],
			chart: {
			type: 'line',
			height: 50,
			width: 180,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}
		},
		
		colors:['var(--primary)'],
		dataLabels: {
		  enabled: false,
		},

		legend: {
			show: false,
		},
		stroke: {
		  show: true,
		  width: 2,
		  curve:'smooth',
		  colors:['var(--primary)'],
		},
		
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0

			}
		},
		states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
		xaxis: {
			categories: [],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		yaxis: {
			show: false,
		},
		fill: {
		  opacity: 1,
		  colors:'#FB3E7A'
		},
		tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		}
		};

		var xhr = new XMLHttpRequest();
		var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers"), options);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var data = xhr.responseText;
					data = JSON.parse(data);
					for (var p in data.total_hash_rate_history){
						options.series[0].data[p] = parseFloat(Number(data.total_hash_rate_history[p].hash_rate ).toFixed(2)); 
						options.xaxis.categories[p] = data.total_hash_rate_history[p].time;
					}
					chartBar1.render();
			}
		}
		//////////////////////
		xhr.open('GET','api/totalHashRateHistory',true)
		xhr.send();
	}
	var NewCustomers1 = function(){
		var options = {
		  series: [
			{
				name: 'Net Profit',
				data: [],
				/* radius: 30,	 */
			}, 				
		],
			chart: {
			type: 'line',
			height: 50,
			width: 180,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}
			
		},
		
		colors:['#0E8A74'],
		dataLabels: {
		  enabled: false,
		},

		legend: {
			show: false,
		},
		stroke: {
		  show: true,
		  width: 2,
		  curve:'smooth',
		  colors:['var(--primary)'],
		},
		
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0

			}
		},
		states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
		xaxis: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		yaxis: {
			show: false,
		},
		fill: {
		  opacity: 1,
		  colors:'#FB3E7A'
		},
		tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		}
		};
		var xhr = new XMLHttpRequest();
		var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers1"), options);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var data = xhr.responseText;
					data = JSON.parse(data);
					for (var p in data.total_client_history){
						options.series[0].data[p] = parseFloat(Number(data.total_client_history[p].client_cnt ).toFixed(2)); 
						options.xaxis.categories[p] = data.total_client_history[p].time;
					}
					chartBar1.render();
			}
		}
		//////////////////////
		xhr.open('GET','api/totalClientCntHistory',true)
		xhr.send();
	}	
	var redial = function(){
		var options = {
			  series: [0],
			  chart: {
			  type: 'radialBar',
			  offsetY: 0,
			  height:350,
			  sparkline: {
				enabled: true
			  }
			},
			plotOptions: {
			  radialBar: {
				startAngle: -130,
				endAngle: 130,
				track: {
				  background: "#F1EAFF",
				  strokeWidth: '100%',
				  margin: 5,
				},

				hollow: {
				  margin: 30,
				  size: '45%',
				  background: '#F1EAFF',
				  image: undefined,
				  imageOffsetX: 0,
				  imageOffsetY: 0,
				  position: 'front',
				},

				dataLabels: {
				  name: {
					show: false
				  },
				  value: {
					offsetY: 5,
					fontSize: '12px',
					color:'#886CC0',
					fontWeight:700,
				  }
				}
			  }
			},
			responsive: [{
			  breakpoint: 1600,
			  options: {
			   chart: {
				  height:250
				},
			  }
			}

			],
			grid: {
			  padding: {
				top: -10
			  }
			},
			/* stroke: {
			  dashArray: 4,
			  colors:'#6EC51E'
			}, */
			fill: {
			  type: 'gradient',
			  colors:'#FF6CC0',
			  gradient: {
				  shade: 'white',
				  shadeIntensity: 0.15,
				  inverseColors: false,
				  opacityFrom: 1,
				  opacityTo: 1,
				  stops: [0, 50, 65, 91]
			  },
			},
			labels: ['Average Results'],
		};
		// http request
		var memUsge=0.0;
		var cpuUsge=0.0;
		var xhr = new XMLHttpRequest();
		var chart = new ApexCharts(document.querySelector("#redial"), options);
		chart.render();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var data = xhr.responseText;
				data = JSON.parse(data);
				document.getElementById("redial").innerHTML = ''
				document.getElementById("redial2").innerHTML = ''
				memUsge = parseFloat(Number(data.memory_usage).toFixed(2));
				cpuUsge = parseFloat(Number(data.cpu_usage).toFixed(2));
				options.series[0]=memUsge;
				chart.render();
				CpuUsageRenderOptions.series[0] = cpuUsge;
				CpuUsageRender.render();
				var cldls1 = document.getElementsByClassName("text-center d-block fs-18 font-w600")[0];
				cldls1.innerHTML = 'Mem On Usage <small class="text-success">'+memUsge+'%</small>';
				var cldls2 = document.getElementsByClassName("text-center d-block fs-18 font-w600")[1];
				cldls2.innerHTML = 'Cpu On Usage <small class="text-success">'+cpuUsge+'%</small>';
				document.getElementsByClassName("fs-32 font-w700 mb-0")[0].innerHTML = data.eth.total_client;
				document.getElementsByClassName("fs-32 font-w700-onehousshares")[0].innerHTML = data.eth.hours_1_total_share;
				document.getElementsByClassName("fs-32 total-hashrate")[0].innerHTML = parseFloat(Number(data.eth.total_hash_rate).toFixed(2));
				document.getElementsByClassName("d-flex align-items-end mt-2 pb-3 justify-content-between")[0].innerHTML = '<h4 class="fs-32 total-share">'+data.eth.total_share+'</h4>';
			}
		}
		var intervalId =  window.setInterval(function clock()
		{
			xhr.open('GET','api/statistical',true)
			xhr.send();
		},2*1000);
	}
	var redial2 = function(){
		CpuUsageRender = new ApexCharts(document.querySelector("#redial2"), CpuUsageRenderOptions);
		CpuUsageRender.render();
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var data = xhr.responseText;
				data = JSON.parse(data);
				var divelementstr="";
				for (var p in data.pool_infos){
					divelementstr+='<div class="d-flex align-items-center justify-content-between mb-4"><span class="fs-18 font-w500"><svg class="me-3" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" rx="6" fill="#886CC0"></rect></svg>'+data.pool_infos[p].listen_port+'->'+data.pool_infos[p].name+'</span><span class="fs-18 font-w600-ethermine">连接数:'+data.pool_infos[p].clients+'</span></div>';
				}
				document.getElementById("pool-list").innerHTML = divelementstr;
			}
		}
		var intervalId =  window.setInterval(function clock()
		{
			xhr.open('GET','api/poolInfo',true)
			xhr.send();
		},3*1000);
	}
	var emailchart = function(){
		 var options = {
          series: [27, 11, 22,15,25],
          chart: {
          type: 'donut',
		  height:300
        },
		dataLabels:{
			enabled: false
		},
		stroke: {
          width: 0,
        },
		colors:['var(--primary)', '#26E023', '#61CFF1','#FFDA7C','#FF86B1'],
		legend: {
              position: 'bottom',
			  show:false
            },
        responsive: [{
          breakpoint: 1800,
          options: {
           chart: {
			  height:200
			},
          }
        },
		{
          breakpoint: 1800,
          options: {
           chart: {
			  height:200
			},
          }
        }
		]
        };

        var chart = new ApexCharts(document.querySelector("#emailchart"), options);
        chart.render();
    
	}
	
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
			donutChart1();	
			chartBar();
			chartBar1();
			chartBar2();
			revenueMap();
			revenueMapClients()
			columnChart();
			NewCustomers();
			NewCustomers1();
			redial();
			redial2();
			emailchart();
				
			},
			
			resize:function(){
			}
		}
	
	}();

	
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dlabChartlist.load();
		}, 1000); 
		
	});

     

})(jQuery);