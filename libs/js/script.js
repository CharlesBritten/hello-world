//API 1	- Wikipedia
	$('#btnAPI1').click(function() {
		//Debugging readouts
		console.log("Wikipedia Function Run");
		console.log($('#searchTerm').val());
		console.log("Number of rows:");
		console.log($('#selRows').val());

		$.ajax({
			url: "libs/php/getWikipedia.php",
			type: 'POST',
			dataType: 'json',
			data: {
				//q: $('#searchTerm').val(),
				maxRows: $('#selRows').val(),
				q: $('#searchTerm').val()
			},
			
			success: function(result) {
				console.log("Success");

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtSummary').html(result['data'][0]['summary']);
					$('#txtTitle').html(result['data'][0]['title']);
					$('#txtURL').html(result['data'][0]['wikipediaUrl']);
					/*
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);
					*/

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				//console.log("Errors thrown");
				//console.log(jqXHR, textStatus, errorThrown);
			}
		}); 
	
	});

//API2 - ICAO Weather
$('#btnAPI2').click(function() {
	console.log("ICAO Function");
	console.log($('#selAirport').val());

	$.ajax({
		url: "libs/php/getICAOWeather.php",
		type: 'POST',
		dataType: 'json',
		data: {
			ICAO: $('#selAirport').val()
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {
				console.log("Data Build OK");

				$('#txtObs').html(result['data']['observation']);
				$('#txtICAO').html(result['data']['ICAO']);
				$('#txtClouds').html(result['data']['clouds']);
				$('#txtStation').html(result['data']['stationName']);
				$('#txtWind').html(result['data']['windSpeed']);

				console.log("Data Test");

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log("Errors thrown");
			console.log(jqXHR, textStatus, errorThrown);
		}
	}); 

});

//API 3 Nearest Country Code
$('#btnAPI3').click(function() {
	console.log("Country Function");

	$.ajax({
		url: "libs/php/getcountryCode.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#selCountry').val(),
			lang: $('#selLanguage').val()
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {

				$('#txtLanguage').html(result['data'][0]['languages']);
				$('#txtDistance').html(result['data']['distance']);
				$('#txtCode').html(result['data']['countryCode']);
				$('#txtName').html(result['data']['countryName']);
				//$('#txtArea').html(result['data'][0]['areaInSqKm']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 

});


//API4 Test
$('#btnRun').click(function() {
	console.log("Country Function");

	$.ajax({
		url: "libs/php/getCountryInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#selCountry').val(),
			lang: $('#selLanguage').val()
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {

				$('#txtContinent').html(result['data'][0]['continent']);
				$('#txtCapital').html(result['data'][0]['capital']);
				$('#txtLanguages').html(result['data'][0]['languages']);
				$('#txtPopulation').html(result['data'][0]['population']);
				$('#txtArea').html(result['data'][0]['areaInSqKm']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 

});

