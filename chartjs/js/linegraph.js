$(document).ready(function(){
	$.ajax({
		url : "http://localhost/chartjs/followersdata.php",
		type : "GET",
		success : function(data){
			console.log(data);

			var id = [];
			var humidity = [];
			var temperatureC = [];
			var heatIndexC = [];
			var co = [];
			

			for(var i in data) {
				id.push("TestID" + data[i].id);
				humidity.push(data[i].humidity);
				temperatureC.push(data[i].temperatureC);
				heatIndexC.push(data[i].heatIndexC);
				co.push(data[i].co);
				
			}

			var chartdata = {
				labels: id,
				datasets: [
					{
						label: "humidity",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						data: humidity
					},
					{
						label: "temparatureC",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(29, 202, 255, 0.75)",
						borderColor: "rgba(29, 202, 255, 1)",
						pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
						pointHoverBorderColor: "rgba(29, 202, 255, 1)",
						data: temperatureC
					},
					{
						label: "co",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(211, 72, 54, 0.75)",
						borderColor: "rgba(211, 72, 54, 1)",
						pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
						pointHoverBorderColor: "rgba(211, 72, 54, 1)",
						data: co
					},
					{
						label: "heatIndexC",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(0, 0, 0, 1)",
						borderColor: "rgba(0, 0, 0, 1)",
						pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
						pointHoverBorderColor: "rgba(211, 72, 54, 1)",
						data: heatIndexC
					}
				]
			};

			


			var ctx = $("#mycanvas");

			var LineGraph = new Chart(ctx, {
				type: 'line',
				data: chartdata,
				options: {
					scales: {
						yAxes: [{
									ticks: {
										min: 0, // minimum value
										max: 270, // maximum value
										stepSize: 20
							}
						}],



					}
	
				}


			});
		},
		error : function(data) {

		}
	});
	


});