var favGenres = [
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
];

var token = localStorage.getItem("spotifyToken");
var pageCounter = 0;
var numPages = 0;
var offset = 0;
var tracksCells = "";

var totalTracks = 0;

// Get playlist's tracks
function getPlaylistTracks(playlistId) {
	//console.log('https://api.spotify.com/v1/users/1179088849/playlists/' + playlistId + '/tracks?offset=' + offset); // test call
	pageCounter++;
	$.ajax({
		url: 'https://api.spotify.com/v1/users/1179088849/playlists/' + playlistId + '/tracks?offset=' + offset,
		headers: { 'Authorization': 'Bearer ' + token },
		async: true,
		success: function(tracks) {
			numPages = Math.ceil(tracks.total / 100);	
			if ( pageCounter <= numPages ) {
				offset = pageCounter * 100;
				for (var t = 0; t < tracks.items.length; t++) {
					//console.log(tracks.items[t].track.artists[0].name + " - " + tracks.items[t].track.name);
					//$('.dups tr[data-plid="' + playlistId + '"] .track').append("<span>" + tracks.items[t].track.name + "</span>");
					
					tracksCells +=
					`<span data-track="${ tracks.items[t].track.artists[0].name }">${ tracks.items[t].track.artists[0].name } - ${ tracks.items[t].track.name }</span>`;
					
					totalTracks++;
					$("h1 + h2 span").text(totalTracks);
				}
				getPlaylistTracks(playlistId);
			} else {
				offset = 0;
				numPages = 0;
				pageCounter = 0;
				//console.log(tracksCells); // outputed only once
				$("#pltracks td.p-" + playlistId).html(tracksCells);
				tracksCells = "";
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) { console.log('error'); }
	});
	
	
	
}

// Favourite playlists
function getThisPlaylist(favPlaylistID) {
	$.ajax({
		url: 'https://api.spotify.com/v1/users/1179088849/playlists/' + favPlaylistID,
		async: true,
		headers: { 'Authorization': 'Bearer ' + token },
		success: function(thePlaylist) {
			var plName = `<th class="p-${ favPlaylistID }"><a target="_blank" href="${ thePlaylist.external_urls.spotify }">${ thePlaylist.name }</a></th>`;
			var plCells = `<td class="p-${ favPlaylistID }"></td>`;
			$("#pltracks thead tr").append(plName);
			$("#pltracks tbody tr").append(plCells);
		},
		error: function() {console.log("ajax error getting playlists");},
		complete: function () {
			for (var p = 0; p < favGenres.length; p++) {
				getPlaylistTracks(favGenres[p]);
			}
		}
	});
}

function getAllPlaylists( callback ) {
	for (var p = 0; p < favGenres.length; p++) {
		getThisPlaylist(favGenres[p]);
		//getPlaylistTracks(favGenres[p]);
	}
}

/*$("#pltracks").on("click", ".gettracks", function(){
	getPlaylistTracks( $(this).data("id") );
	console.log("clicked: " + $(this).data("id"));
});*/


$(document).ready(function() {

	getAllPlaylists();
	//getPlaylistTracks("1eLdHxs7QIJEW59TP30j36");

});



