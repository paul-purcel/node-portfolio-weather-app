/**
 * Demo Weather App
 * This app displays weather for a few random locations in Europe
 * @author Paul P. <paul@paul-resume.com>
 */
;(function($, window, document, undefined){

	// Start locations
	var locations = [
		{location: 'Bucharest RO'},
		{location: 'Berlin Germany'},
		{location: 'Amsterdam, Netherlands'},
		{location: 'Rome, Italy'}
	];

	/*
		Loop trhough all the above locations 
		and append the data to the DOM
	*/
	$.each(locations , function(k, v){
		$.getJSON('/weather/'+ v.location, function(data){
			$.each(data, function(){
				var item = $('<div />').addClass('col-sm-12 col-sm-12 col-lg-12 white');

				// Location name
				$('<h3 />').html(this.location.name).appendTo(item);

				// temperature
				$('<div />').addClass('col-sm-3 col-md-3 col-lg-3')
					.html('<p>'+this.current.day+'</p><h3><img src="'+this.current.imageUrl+'" /> '+this.current.temperature+' &deg;C</h3>'+ '<p>'+this.current.skytext+'</p>')
					.appendTo(item);

				// forecast
				var count = 0; 
				$.each(this.forecast, function(){
					if(count <= 2){
						$('<div />').addClass('col-sm-3 col-md-3 col-lg-3')
							.html('<p>'+this.day+'</p><h3>'+this.high+' / '+this.low+'&deg;C </h3><p>'+this.skytextday+'</p>').
							.appendTo(item);
					}
					count++;
				});

				// Append widgets to container
				$('#cities').append(item);
			});
		});
	});

})(jQuery, window, document);