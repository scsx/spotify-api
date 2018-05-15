<?php include 'assets/header.php'; ?>
	<div class="main">
		<div class="user">
			<section class="playlists">
				<div class="container">
					<h2>Public playlists</h2>
					<div class="pl"></div>
				</div>
			</section>
			<section class="favorite">
				<div class="container">
					<h2>Favorite playlists</h2>
					<table class="table table-sm">
						<thead>
							<th>Name</th>
							<th class="text-right">Followers</th>
							<th class="text-right">Tracks</th>
						</thead>
						<tbody>
							<tr class="tot">
								<td>TOTAL <small>Max offline: 3333</small> </td>
								<td colspan="2" class="total text-right"></td>
							</tr>
						</tbody>
					</table>
					<p class="text-right"><button type="button" class="btn btn-sm btn-danger" id="removeAll">Remove all</button></p>
				</div>
			</section>
			<section class="info">
				<div class="container">
					<h2>User Info</h2>
					<div class="cardbox"></div>
				</div>
			</section>
		</div>
	</div>
	
	<?php include 'assets/artistdetail.php'; ?>
	
	<script src="js/artists.js"></script>	
	<script src="js/user.js"></script>	
	<script src="js/currentlyplaying.js"></script>	
	<script src="js/artistdetail.js"></script>	

</body>

</html>
