var token = localStorage.getItem("spotifyToken");
var pageCounter = 0;
var numPages = 0;
var offset = 0;

//var giantArray = [];

// Get playlist's tracks
function getPlaylistTracks(playlistId) {
	pageCounter++;
	$.ajax({
		url: 'https://api.spotify.com/v1/users/1179088849/playlists/' + playlistId + '/tracks?offset=' + offset,
		headers: { 'Authorization': 'Bearer ' + token },
		async: true,
		success: function(tracks) {
			//console.log(giantArray);
			numPages = Math.ceil(tracks.total / 100);	
			if ( pageCounter <= numPages ) {
				offset = pageCounter * 100;
				for (var t = 0; t < tracks.items.length; t++) {
					//giantArray.push(tracks.items[t].track.artists[0].name + " - " + tracks.items[t].track.name);
					console.log(tracks.items[t].track.artists[0].name + " - " + tracks.items[t].track.name);
					/*console.log(playlistId);
					console.log(pageCounter);
					console.log(numPages);
					*/
					//$('.dups tr[data-plid="' + playlistId + '"] .track').append("<span>" + tracks.items[t].track.name + "</span>");
				}
				getPlaylistTracks(playlistId);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log('error');
		}
	});	
}


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

// Favourite playlists
function getThisPlaylist(playlistID) {
	$.ajax({
		url: 'https://api.spotify.com/v1/users/1179088849/playlists/' + playlistID,
		headers: { 'Authorization': 'Bearer ' + token },
		success: function(thePlaylist) {
			var plTds = "";
			plName +=
			`<tr data-plId="${ playlistID }">
				<td><a target="_blank" href="${ thePlaylist.external_urls.spotify }">${ thePlaylist.name }</a></td>
				<td class="track"></td>
				<td></td>
			</tr>`;
			$("#pltracks tr.name").html(plTds);
		},
		error: function() {console.log("ajax error getting playlists");}
	});
}

function getAllPlaylists() {
	for (var p = 0; p < favGenres.length; p++) {
		//getPlaylistTracks(favGenres[p]);
		
		var plName = favGenres[p];
		playlistId = "";
		pageCounter = 0;
		numPages = 0;
		offset = 0;

		console.log(p);
		console.log(plName);
		
		setTimeout(function() {
			getPlaylistTracks(plName);
			
		}, 100);
		
		
	}
}


$(document).ready(function() {

getAllPlaylists();
//getPlaylistTracks("3T3UgNyFtX7607njDq4hME");

});



