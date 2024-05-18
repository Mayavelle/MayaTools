<html>
<head>
<?php include "../huntmaps/mapsheader.html";?>
</head>
<body>
	<div class="mapdiv">
		<div class="marksfull">
			<button onclick="hunt_click_i()" class="buttoni">Info</button>
			<button onclick="hunt_click_s()" class="buttons">Dragonskin</button>
			<button onclick="hunt_click_a1()" class="buttona1">Wyvernskin</button>
		</div>
		<div class="marksshort">
			<button onclick="hunt_click_i()" class="buttoni">I</button>
			<button onclick="hunt_click_s()" class="buttons">G8</button>
			<button onclick="hunt_click_a1()" class="buttona1">G7</button>
		</div>
		<div class="mapimg">
			<img id="hunt_map" src="../images/hw/soc.jpg">
			<img id="hunt_i" src="../images/hw/soctmi.png">
			<img id="hunt_s" src="../images/hw/socg8.png">
			<img id="hunt_a1" src="../images/hw/socg7.png">
		</div>
	</div>
</body>
</html>