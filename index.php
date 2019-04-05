<?php include 'assets/header.php'; ?>

	<div class="main">
		<div class="container">
			<div class="row">
				<div class="col-sm">
					<div class="sabox">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Name" id="artistInput">
							<div class="input-group-append">
								<button type="button" class="btn btn-success" id="searchArtists">Search artists</button>
								<button type="button" class="btn btn-dark" id="searchString">Search for random word</button>
							</div>
						</div>
					</div>
					<div class="noauth">
						<div class="requesttoken">
							<div class="row justify-content-md-center">
								<div class="col-md-auto"><a href="login.php" class="btn btn-primary">You need Auth first</a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="artists">
				<div class="numberres"></div>
				<div class="results">
					<!--<img src="test.gif" alt="">-->
				</div>
			</div>
			<nav id="pages">
				<ul class="pagination"></ul>
			</nav>
		</div>
		
	</div>
	
	<?php include 'assets/artistdetail.php'; ?>

	<script src="js/artists.js"></script>	
	<script src="js/currentlyplaying.js"></script>	
	<script src="js/artistdetail.js"></script>	

</body>

</html>
