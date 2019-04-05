<?php include 'assets/header.php'; ?>

	<div class="container requesttoken">
		<h1 class="text-center">All done.</h1>
		<div class="row justify-content-md-center">
			<div class="col-md-auto"><a href="/sandbox/spotify/" class="btn btn-primary">Artists</a></div>
			<div class="col-md-auto"><a href="/sandbox/spotify/user.php" class="btn btn-primary">User</a></div>
			<div class="col-md-auto"><a href="/sandbox/spotify/track.php" class="btn btn-primary">Track</a></div>
			<div class="col-md-auto"><a href="/sandbox/spotify/duplicates.php" class="btn btn-primary">Duplicates</a></div>
		</div>
	</div>
	<!--<p><a href="https://accounts.spotify.com/authorize?client_id=4032c4295eda4d0b9bd6c4774bb49f83&redirect_uri=http://soucasaux.com/sandbox/spotify/login.html&scope=user-read-private%20user-read-email&response_type=token&state=123" id="tokenReq">Request token</a></p>-->
<script>
/*console.log();

$("#tokenSet").click(function() {
	
	

});*/

$(document).ready(function(){

$("#playingnow").parent().hide(0);
var theScopes = 'user-read-currently-playing';
	
if (window.location.href.indexOf("access_token") > -1) {
	var url = window.location.href;
	var tokenString = url.match("access_token=(.*)&token_type");
	var tokenDate = new Date();
	localStorage.setItem("spotifyToken", tokenString[1] );
	localStorage.setItem("tokenDate", tokenDate );
	$(".requesttoken").slideDown();
	
} else {
	window.location.href = 'https://accounts.spotify.com/authorize?client_id=4032c4295eda4d0b9bd6c4774bb49f83&redirect_uri=http://soucasaux.com/sandbox/spotify/login.php&scope=user-read-currently-playing&response_type=token&state=123';
}
	
});

</script>
	</body>
</html>
