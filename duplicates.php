<?php include 'assets/header.php'; ?>
	<div class="main">
		<div class="dups">
			<div class="container-fluid">
				<h1>Duplicate tracks on playlists</h1>
				<h2>Total tracks: <span>0</span></h2>
				<!--<h2>Get suspicious or all playlists <div class="badge">AND</div> <a href="javascript:void(0);" id="checkdups">Check for duplicate songs</a> <div class="badge">OR</div> <a href="javascript:void(0);" id="checktrack">Check a track</a></h2>-->
				<h2>Get playlists: <a href="javascript:void(0);" id="pAll">All</a>, <a href="javascript:void(0);" id="pRocks">Rocks</a> <div class="badge">OR</div> <a href="javascript:void(0);" id="pEl">Electronica</a>, 
					<br>
					<a href="javascript:void(0);" id="checkdups">Check for duplicate songs</a> <div class="badge">OR</div> <a href="javascript:void(0);" id="checktrack">Check a track</a>
				</h2>
				
				<div class="row justify-content-md-center d-none">
					<div class="col-md-4">
						<div class="input-group mb-3">
							<input type="text" class="form-control" placeholder="Track ID or Spotify URI" id="trackval">
							<div class="input-group-append">
								<button class="btn btn-success" id="searchtrack" type="button">Search visible playlists</button>
							</div>
						</div>
					</div>
				</div>
				
				<h2 class="dupwarn"></h2>
				
				<table class="table table-sm" id="pltracks">
					<thead><tr></tr></thead>
					<tbody><tr></tr></tbody>
				</table>
			</div>
		</div>
	</div>
	
	<?php include 'assets/artistdetail.php'; ?>
	
	<script src="js/artists.js"></script>	
	<script src="js/duplicates.js"></script>	
	<script src="js/currentlyplaying.js"></script>	
	<script src="js/artistdetail.js"></script>	

</body>

</html>
