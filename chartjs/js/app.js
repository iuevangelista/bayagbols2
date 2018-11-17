$(document).ready(function(){
	$.ajax({
		url: "http://localhost/chartjs/followersdata.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var id = [];
			var humidity = [];
			var temperatureC = [];
			var co = [];

			for(var i in data) {
				id.push("UserID " + data[i].id);
				humidity.push(data[i].humidity);
				temperatureC.push(data[i].temperatureC);
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
					}
				]
			};

			var ctx = $("#mycanvas");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});