var token = localStorage.getItem("spotifyToken");

// ALBUMS
function getArtistAlbums(artistId) {
	$.ajax({
		url: 'https://api.spotify.com/v1/artists/' + artistId + '/albums?include_groups=album,single',
		headers: {
			'Authorization': 'Bearer ' + token
		},
		success: function(albums) {
			
			console.log(albums);
			
			var albumsHtml = "";
			if ( albums.items.length > 0 ) {
				for (var a = 0; a < albums.items.length; a++) {
					var albumDate = albums.items[a].release_date;
					albumDate = albumDate.split("-")[0];
					albumsHtml +=
					`<div class="cd">
						<img src="${ albums.items[a].images[0].url }">
						<h5><a target='_blank' href='javascript:void(0);'>${ albums.items[a].name }</a></h5>
						<p>${ albumDate }</p>

					</div>`;
				}
			} else {
				albumsHtml = "<p>No albums yet</p>";	
			}
			$(".albums").html(albumsHtml);	
			
		},
		error: function() {
			console.log("ajax error getting albums");
		}
	});
}

// ARTIST
function getArtist(artistId) {
	$.ajax({
		url: 'https://api.spotify.com/v1/artists/' + artistId,
		headers: {
			'Authorization': 'Bearer ' + token
		},
		success: function(artist) {
			console.log(artist);
			var artistImg = "https://secure.i.telegraph.co.uk/multimedia/archive/02002/Larry_david_2002589b.jpg";
			// images		
			if ( artist.images.length > 0 ) {
				artistImg = artist.images[0].url;
			}	
			$(".artdetail .cover").css("background-image", "url(" + artistImg + ")");
			$(".artdetail .text h6").text(artist.followers.total + " followers");
			$(".artdetail .progress-bar").css("width", artist.popularity + "%");
			$(".artdetail .progress-bar").text("Popularity " + artist.popularity + "%");
			$(".artdetail .text h1 a.name").text(artist.name).attr("href", artist.external_urls.spotify );
			$(".artdetail .text h1 a.google").attr("href", "https://www.google.pt/search?q=" + artist.name);
			var genresText = "";
			if ( artist.genres.length > 0 ) {
				for (var j = 0; j < artist.genres.length; j++) {
					genresText += "<span class='badge badge-dark'>" + artist.genres[j] + "</span>";
				}
			}
			$(".artdetail .genres").html(genresText);	
			$(".artdetail").toggleClass("open");
			getArtistAlbums(artistId);
		},
		error: function() {
			console.log("ajax error getting artist");
		}
	});
}

$(".artists").on("click", ".card-title a", function(){
    var theArtist = $(this).data("artist");
	getArtist(theArtist);
});

$(".playnow").on("click", "h3", function(){
    var theArtist = $(this).data("artist");
	getArtist(theArtist);
});

$("body").on("click", ".artdetail .closecross", function(){
    $(".artdetail.open").toggleClass("open");
});

$(document).mouseup(function(e) {
    var container = $(".artdetail");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".artdetail.open").toggleClass("open");
    }
});

$(document).ready(function(){

// DEV
//getArtist("2kGBy2WHvF0VdZyqiVCkDT");

});



