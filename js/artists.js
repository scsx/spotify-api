var token = localStorage.getItem("spotifyToken");
var tokenDate = localStorage.getItem("tokenDate");
var rightnow = new Date();

function artistsAjaxReq(thequery, page) {
	// CLEAR ALL
	$.ajax({
		//url: 'https://api.spotify.com/v1/search?q=' + thequery + '&type=artist',
		url: 'https://api.spotify.com/v1/search?q=' + thequery + '&type=artist&offset=' + page,
		headers: {
			'Authorization': 'Bearer ' + token
		},
		success: function(response) {
			$(".artists .results").html(""); // DUPLICATE?
			
			//console.log(response.artists.items);
			// ARTISTS
			if (response.artists.items.length > 0) {
			
				var totalResults, artistsHtml = "";
				
				totalResults = `${ response.artists.total } results for <i>${ thequery }</i>`;
				$(".numberres").html(totalResults);
				
				for (var i = 0; i < response.artists.items.length; i++) {
					var short = response.artists.items[i];
					var artistImg = "https://secure.i.telegraph.co.uk/multimedia/archive/02002/Larry_david_2002589b.jpg";
					// images		
					if ( short.images.length > 0 ) {
						artistImg = response.artists.items[i].images[0].url;
						//artistImg = response.artists.items[i].images.length;
					} 
					
					artistsHtml +=
					`<div class="card">
						<img class="card-img-top" src="${ artistImg }" alt="Card image cap">
						<div class="card-body">
							<h5 class="card-title"><a target='_blank' data-artist='${ short.id }' href='javascript:void(0);'>${ short.name }</a></h5>
							<p class="card-text genres">${ short.genres }</p>
						</div>
					</div>`;
				}
				$(".artists").append("<div class='results'>" + artistsHtml + "</div>");
				
			} else {
				$(".numberres").html("No results");
			}
			// PAGINATION
			if (response.artists.total > 20) {
				var numPages = Math.ceil(response.artists.total / 20);
				var pageLis = "";
				for (var p = 0; p < numPages; p++) {
					if ( page == p * 20) {
						pageLis +=
						`<li class='page-item active'>
							<a class='page-link' href='javascript:void(0);' data-page='${ p * 20 }' data-query='${ thequery }'>${ p + 1 }</a>
						</li>`;
					} else {
						pageLis +=
						`<li class='page-item'>
							<a class='page-link' href='javascript:void(0);' data-page='${ p * 20 }' data-query='${ thequery }'>${ p + 1 }</a>
						</li>`;
					}
				}
				$("#pages ul").html(pageLis);
			} else {
				$("#pages ul").html("");
			}
		}
	});

}


$("#searchArtists").click(function() {
	var thequery = $("#artistInput").val();
	artistsAjaxReq(thequery, 0);
});

$("#pages").on("click", ".page-link", function(){
    var thequery = $(this).data("query");
	var thepage = $(this).data("page");
	artistsAjaxReq(thequery, thepage);
});

https://api.spotify.com/v1/search?q=undefined&type=artist&offset=20%20data-query=

var randomWord = ["Knives", "Blood", "Death", "Iron", "Bass", "National", "Arcade", "Red", "Black", "Hooded", "Foxygen", "Place"];

$("#searchString").click(function() {
	var thequery = randomWord[Math.floor(Math.random() * randomWord.length)];
	artistsAjaxReq(thequery, 0);
});

$(document).ready(function() {

if ( (Date.parse(rightnow) - Date.parse(tokenDate)) > 3600000) {
	$(".noauth .requesttoken").show();
	$(".sabox").hide();
} else  {
	$(".noauth .requesttoken").hide();
	$(".sabox").show();
}

});














