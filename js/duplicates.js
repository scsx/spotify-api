var favAllPlaylists = [
"1Njwn17lPtwLN28P3my2fr", // Easy
"6lIIR69uwo5u2o7Hiv7Mw7", // dance
"0TMCEEgMgwQeTDS9F4pMQK", // Land
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

var favRocks = [
"1Njwn17lPtwLN28P3my2fr", // Easy
"3T3UgNyFtX7607njDq4hME", // LR
"1scJli8VnQh8iqdIJxEpKf", // OR
"2epyoENxIpHxajhu62Tiow", // SR
"1eLdHxs7QIJEW59TP30j36", // RD
"0jarrgCbTDpm64zx2lFlsE", // Eletronica
"0hiwVtkB0sqhGqSWy74fHU", // 80
];

var favEl = [
"1Njwn17lPtwLN28P3my2fr", // Easy
"6lIIR69uwo5u2o7Hiv7Mw7", // dance
"0TMCEEgMgwQeTDS9F4pMQK", // Land
"3T3UgNyFtX7607njDq4hME", // LR
"19FOSN1EmXCq67ALjNpkWD", // techno
"0jarrgCbTDpm64zx2lFlsE", // Eletronica
"0hiwVtkB0sqhGqSWy74fHU", // 80
];

var favEliana = [
"1Njwn17lPtwLN28P3my2fr", // Easy
"6lIIR69uwo5u2o7Hiv7Mw7", // dance
"0TMCEEgMgwQeTDS9F4pMQK", // Land
"1scJli8VnQh8iqdIJxEpKf", // OR
"2epyoENxIpHxajhu62Tiow", // SR
"0jarrgCbTDpm64zx2lFlsE", // Eletronica
"5vgxymNBjTRQi5okVG37Vm", // EL2018
"5bDlFzZTRhuW0JESjoNIwt", //EL20171
"3HiHGDFAyBPM2frZS5Ig1I", //EL20172
];

var favGenres = [];



var token = localStorage.getItem("spotifyToken");
var pageCounter = 0;
var numPages = 0;
var offset = 0;
var tracksCells = "";

var totalTracks = 0;
var allTracks = [];

var theUser = "1179088849"; // EU
//theUser = "1166864566"; // EL

// Get playlist's tracks
function getPlaylistTracks(playlistId) {
	
	if ( playlistId == "5vgxymNBjTRQi5okVG37Vm" || playlistId == "5bDlFzZTRhuW0JESjoNIwt" || playlistId == "3HiHGDFAyBPM2frZS5Ig1I" ) {
		theUser = "1166864566"
	} else {
		theUser = "1179088849";
	}
	
	pageCounter++;
	$.ajax({
		url: 'https://api.spotify.com/v1/users/' + theUser + '/playlists/' + playlistId + '/tracks?offset=' + offset,
		headers: { 'Authorization': 'Bearer ' + token },
		async: true,
		success: function(tracks) {
			numPages = Math.ceil(tracks.total / 100);
			
			if ( pageCounter <= numPages ) {
				offset = pageCounter * 100;
				for (var t = 0; t < tracks.items.length; t++) {
					if ( t == 0 ) {
						tracksCells += `<p class='plname'>${ $("th.p-" + playlistId).text() }</p>`;
					}
					tracksCells +=
					`<span data-track="${ tracks.items[t].track.id }" id="id${ tracks.items[t].track.id }">${ tracks.items[t].track.name }<span class="artist">${ tracks.items[t].track.artists[0].name }</span></span>`;
					totalTracks++;
					allTracks.push( tracks.items[t].track.id );
					$("h1 + h2 span").text(totalTracks);
				}
				getPlaylistTracks(playlistId);
			} else {
				offset = 0;
				numPages = 0;
				pageCounter = 0;
				//console.log(allTracks);
				$("#pltracks td.p-" + playlistId).html(tracksCells);
				tracksCells = "";
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) { console.log('error'); }
	});
}

// Favourite playlists
function getThisPlaylist(favPlaylistID) {

	if (  favPlaylistID == "5vgxymNBjTRQi5okVG37Vm" || favPlaylistID == "5bDlFzZTRhuW0JESjoNIwt" || favPlaylistID == "3HiHGDFAyBPM2frZS5Ig1I"  ) {
		theUser = "1166864566"
	} else {
		theUser = "1179088849";
	}
	
	$.ajax({
		url: 'https://api.spotify.com/v1/users/' + theUser + '/playlists/' + favPlaylistID,
		async: true,
		headers: { 'Authorization': 'Bearer ' + token },
		success: function(thePlaylist) {
			var plName =`
			<th class="p-${ favPlaylistID }">
				<a target="_blank" href="${ thePlaylist.external_urls.spotify }">${ thePlaylist.name }</a>
			</th>`;
			var plCells = `<td class="p-${ favPlaylistID }"><a data-id="${ favPlaylistID }" class="btn btn-primary btn-sm gettracks">GET</a></td>`;
			$("#pltracks thead tr").append(plName);
			$("#pltracks tbody tr").append(plCells);
		},
		error: function() {console.log("ajax error getting playlists");},
		/*complete: function () {
			for (var p = 0; p < favGenres.length; p++) {
				getPlaylistTracks(favGenres[p]);
			}
		}*/
	});
}

https://open.spotify.com/track/0MY5qbkPQvvbxehq6B2eoW

function getAllPlaylists() {
	for (var p = 0; p < favGenres.length; p++) {
		getThisPlaylist(favGenres[p]);
		//getPlaylistTracks(favGenres[p]);
	}
}

$("#pltracks").on("click", ".gettracks", function() {
	$(this).parent().html('<img src="img/loading.gif">');
	getPlaylistTracks( $(this).data("id") );
});

$("#checkdups").click(function(){
	var sorted_arr = allTracks.slice().sort();
	var results = [];
	for (var i = 0; i < sorted_arr.length - 1; i++) {
		if (sorted_arr[i + 1] == sorted_arr[i]) {
			results.push(sorted_arr[i]);
		}
	}
	if ( results.length == 0 ) {
		$("h2.dupwarn").text("There's " + results.length + " duplicates. Hurray!!");
	} else {
		$("h2.dupwarn").text("There's " + results.length + " duplicates");
	}
	
	for (var d = 0; d < results.length; d++) {
		$("[data-track='" + results[d] + "']").addClass("double");
	}
});

$("#checktrack").click(function() {
	$(".justify-content-md-center").toggleClass("d-none");
});

$("#searchtrack").click(function() {
	// test track at PT  ---  0zFELNYR05rYzmj4lSLoCX
	var trackToSearch = $("#trackval").val();
	trackToSearch = trackToSearch.split("spotify:track:").pop();
	var contains = allTracks.includes(trackToSearch);
	if (contains) {
		$("h2.dupwarn").html("The track <a href='#id" + trackToSearch + "'>" + trackToSearch + "</a> is present at one of this playists");
		$("[data-track='" + trackToSearch + "']").addClass("double");
	} else {
		$("h2.dupwarn").html("The track <a href='https://open.spotify.com/track/" + trackToSearch + "' target='_blank'>" + trackToSearch + "</a> was not found");
	}
});

function cleanTable() {
	$(".dups .table tr").html("");
}

$("#pAll").click(function() {
	cleanTable();
	favGenres = favAllPlaylists;
	getAllPlaylists();
});

$("#pRocks").click(function() {
	cleanTable();
	favGenres = favRocks;
	getAllPlaylists();
});

$("#pEl").click(function() {
	cleanTable();
	favGenres = favEl;
	getAllPlaylists();
});

$(document).ready(function() {

	//getPlaylistTracks("1eLdHxs7QIJEW59TP30j36");
	$(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $('#pltracks').addClass('scrolled');
        } else {
			$('#pltracks').removeClass('scrolled');
		}
    });
	
});



