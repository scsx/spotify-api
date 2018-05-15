var token = localStorage.getItem("spotifyToken");

function togglePlay() {
	$(".playnow").fadeToggle(200);
}

function getUserPlayingNowCover(track) {
	$.ajax({
		url: 'https://api.spotify.com/v1/tracks/' + track,
		headers: {
			'Authorization': 'Bearer ' + token
		},
		success: function(trackdetails) {
//			console.log(trackdetails);
			$(".playnow .cover").css("background-image", "url(" + trackdetails.album.images[0].url + ")");
		},
		error: function() {
			//console.log("ajax error getting image");
		}
	});
}

function getUserPlayingNow() {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/player/currently-playing',
		headers: {
			'Authorization': 'Bearer ' + token
		},
		success: function(response) {
			//console.log(response);
			var theTrack = response.item.id;
			getUserPlayingNowCover(theTrack);
			$(".playnow h2 a").text(response.item.name);
			$(".playnow h3").text(response.item.artists[0].name);
			$(".playnow h3").attr('data-artist', response.item.artists[0].id);			
			$(".playnow .cover").css("background-image", "url(" + response.item.preview_url + ")");
			togglePlay();
		},
		error: function() {
			console.log("ajax error");
		}
	});
}


$("#playingnow").click(function() {
	getUserPlayingNow();
});

$(".playnow .cover").click(function() {
	$(this).toggleClass("expanded");
});

$(".playnow .closecross").click(function() {
	togglePlay();
});