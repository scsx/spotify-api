<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Spotify API</title>
<link href="https://fonts.googleapis.com/css?family=Tajawal:300,400,700" rel="stylesheet">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
<link href="css/spotify.css" rel="stylesheet">
<link rel="icon" type="image/x-icon" href="https://raw.githubusercontent.com/spotify/griffin/master/docs/_static/favicon.ico">
<script 
src="https://code.jquery.com/jquery-3.3.1.min.js" 
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" 
crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
	<!--<script src="main.js"></script>-->

</head>

<body>
	
	<div class="playnow">
		<div class="closecross"></div>
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-4 cover"></div>
				<div class="col-md-8 artist">
					<h2><a href=""></a></h2>
					<h3></h3>
				</div>
			</div>
		</div>
	</div>
	
	<nav class="navbar navbar-expand-lg">
		<h1><a class="navbar-brand" href="/sandbox/spotify/">Spotify API</a></h1>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
		<div class="collapse navbar-collapse" id="navbarText">
			<ul class="navbar-nav mr-auto">
				<!--<li class="nav-item active">
					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				</li>-->
				<li class="nav-item">
					<a class="nav-link" href="login.php">AUTH</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/sandbox/spotify/">Artists</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="duplicates.php">Duplicates</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="track.php">Track</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="playingnow" href="javascript: void(0);">Playing now</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="playingnow" href="user.php">User</a>
				</li>
			</ul>
			<span class="navbar-text">
				<div class="btn-group dropleft">
					<div class="dropdown">
						<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><small>DEV</small></button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow" target="_blank">Implicit Grant</a>
							<a class="dropdown-item" href="https://beta.developer.spotify.com/documentation/general/guides/authorization-guide/" target="_blank">Scopes</a>
							<a class="dropdown-item" href="https://beta.developer.spotify.com/dashboard/login" target="_blank">Dashboard</a>
							<a class="dropdown-item" href="https://github.com/spotify/web-api-auth-examples" target="_blank">web-api-auth on Github</a>
							<div class="dropdown-item">Test account: <b>legalvision email</b></div>
						</div>
					</div>
				</div>
			</span>
		</div>
	</nav>