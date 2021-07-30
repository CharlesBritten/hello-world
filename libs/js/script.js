	
//API 1	
	$('#btnAPI1').click(function() {
		console.log("Wikipedia Function Run");

		$.ajax({
			url: "libs/php/getWikipedia.php",
			type: 'POST',
			dataType: 'json',
			data: {
				q: $('#searchTerm').val(),
				maxRows: $('#selRows').val()
			},
			success: function(result) {

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
				console.log("Errors thrown");
				console.log(jqXHR, textStatus, errorThrown);
			}
		}); 
	
	});