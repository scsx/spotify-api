var token = localStorage.getItem("spotifyToken");

// Playlists
function getMyPlaylists() {
	$.ajax({
		//url: 'https://api.spotify.com/v1/artists/' + artistId + '/albums?include_groups=album,single',
		url: 'https://api.spotify.com/v1/me/playlists',
		headers: {
			'Authorization': 'Bearer ' + token
		},
		success: function(myPlaylists) {
			//console.log(myPlaylists);
			var plHtml = "";
			for (var i = 0; i < myPlaylists.items.length; i++) {
				var plImg = "";
				if (myPlaylists.items[i].images[0].url) {
					plImg = myPlaylists.items[i].images[0].url;
				}
				plHtml +=
				`<div class="p">
					<img src="${ plImg }" />
					<h5><a target='_blank' href='${ myPlaylists.items[i].external_urls.spotify }'>${ myPlaylists.items[i].name } <small>${ myPlaylists.items[i].tracks.total } Tracks</small></a></h5>
				</div>`;
			}
			$(".user .pl").html(plHtml);
		},
		error: function() {console.log("ajax error getting playlists");}
	});
}

// USER
function getMe() {
	$.ajax({
		url: 'https://api.spotify.com/v1/me',
		headers: {
			'Authorization': 'Bearer ' + token
		},
		success: function(myself) {
			console.log(myself);
			/**/
			/*if (myPlaylists.items[i].images[0].url) {
				plImg = myPlaylists.items[i].images[0].url;
			}*/
			var meHtml =
			`
			<div class="card">
				<img class="card-img-top" src="${ myself.images[0].url }" alt="Card image cap">
				<div class="card-body">
					<h3 class="card-title">${ myself.display_name }</h3>
					<p class="card-text">Country: ${ myself.country }</p>
					<p class="card-text">Followers: ${ myself.followers.total }</p>
					<p class="card-text">Id: ${ myself.id }</p>
					<p class="card-text">Product: ${ myself.product }</p>
					<p class="card-text"><a target="_blank" href="${ myself.external_urls.spotify }">View online</a></p>
				</div>
			</div>`;

			$(".user .info .cardbox").append(meHtml);
		},
		error: function() {console.log("ajax error getting info");}
	});
}


// Favourite playlists
var totalTracks = 0;
function getThisPlaylist(playlistID) {
	$.ajax({
		url: 'https://api.spotify.com/v1/users/1179088849/playlists/' + playlistID,
		headers: {
			'Authorization': 'Bearer ' + token
		},
		success: function(thePlaylist) {
			var plTds = "";
			plTds +=
			`<tr>
				<td><a target="_blank" href="${ thePlaylist.external_urls.spotify }">${ thePlaylist.name }</a></td>
				<td class="text-right">${ thePlaylist.followers.total }</td>
				<td class="text-right tracks">${ thePlaylist.tracks.total }</td>
			</tr>`;
			$(".favorite tbody").prepend(plTds);
			totalTracks += parseInt(thePlaylist.tracks.total);
			$(".user .favorite td.total").text(totalTracks);
		},
		error: function() {console.log("ajax error getting playlist");}
	});
}

var favs = [
    "0MsxQMxCqjWLexW4vz05X1", // aptbs
    "668jToi8GwXBHIyFDazVer", // TOS
    "1Njwn17lPtwLN28P3my2fr", // Easy
    "6lIIR69uwo5u2o7Hiv7Mw7", // dance
    "0TMCEEgMgwQeTDS9F4pMQK", // dance
    "3T3UgNyFtX7607njDq4hME", // LR
    "1scJli8VnQh8iqdIJxEpKf", // OR
    "2epyoENxIpHxajhu62Tiow", // SR
    "1eLdHxs7QIJEW59TP30j36", // RD
    "5hr8RBJIP73hYOi5qyoDSz", // world
    "19FOSN1EmXCq67ALjNpkWD", // techno
    "2EYW8y7qAuZHrIBOaynspA", // PT
    "0jarrgCbTDpm64zx2lFlsE", // Eletronica
    "0hiwVtkB0sqhGqSWy74fHU", // 80
    "2KMlwkr5yKkBXaxP4K2KXP", // Vintage
    "44N8ZUOYasS7Z8QWFUnrAN", // doors
    "2cnef5pugAkzDF4nyqBUY8", // bdod
    "3dLF6Abr9WKD7rzZlVYuru" // arcade
];


$(document).ready(function(){

for (var p = 0; p < favs.length; p++) {
	getThisPlaylist(favs[p]);
}

$(".user .favorite tbody").on("click", "td", function() {
	var parentTr = $(this).parent("tr");
	var tracksToCount = parseInt(parentTr.find("td.tracks").text());
	var total = parseInt($(".user .favorite td.total").text());
    if ( parentTr.hasClass("off") ) {
		$(".user .favorite td.total").text(total+tracksToCount);
	} else {
		$(".user .favorite td.total").text(total-tracksToCount);
	}
	parentTr.toggleClass("off");
});

$("#removeAll").click(function() {
	$(".user .favorite tr").not(".tot").addClass("off");
	$(".user .favorite td.total").text(0);
});

getMyPlaylists();
getMe();

});



