<html>
<head>
<?php include "../huntmaps/mapsheader.html";?>
</head>
<body>
	<div class="mapdiv">
		<div class="marksfull">
			<button onclick="hunt_click_i()" class="buttoni">Info</button>
			<button onclick="hunt_click_t()" class="buttont">Thief</button>
			<button onclick="hunt_click_s()" class="buttons">Gazelleskin</button>
			<button onclick="hunt_click_a1()" class="buttona1">Gaganaskin</button>
		</div>
		<div class="marksshort">
			<button onclick="hunt_click_i()" class="buttoni">I</button>
			<button onclick="hunt_click_t()" class="buttont">T</button>
			<button onclick="hunt_click_s()" class="buttons">G10</button>
			<button onclick="hunt_click_a1()" class="buttona1">G9</button>
		</div>
		<div class="mapimg">
			<img id="hunt_map" src="../images/sb/azim.jpg">
			<img id="hunt_i" src="../images/sb/azimtmi.png">
			<img id="hunt_t" src="../images/sb/azimt.png">
			<img id="hunt_s" src="../images/sb/azimg10.png">
			<img id="hunt_a1" src="../images/sb/azimg9.png">
		</div>
	</div>
</body>
</html>