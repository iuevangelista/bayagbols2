$(document).ready(function(){
	$.ajax({
		url : "http://localhost/chartjs/followersdata.1.php",
		type : "GET",
		success : function(data){
			console.log(data);

			var id = [];
			var moisture = [];
			
			

			for(var i in data) {
				id.push("TestID" + data[i].id);
				moisture.push(data[i].moisture);
				
				
			}

			var chartdata = {
				labels: id,
				datasets: [
					{
						label: "moisture",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						data: moisture
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
										min: 1, // minimum value
										max: 700, // maximum value
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