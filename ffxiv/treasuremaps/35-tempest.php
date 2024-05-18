<html>
<head>
<?php include "../huntmaps/mapsheader.html";?>
</head>
<body>
	<div class="mapdiv">
		<div class="marksfull">
			<button onclick="treasure_click_all()" class="buttontmi">All</button>
			<button onclick="treasure_click_s()" class="buttontms">Zonureskin</button>
			<button onclick="treasure_click_a1()" class="buttontma1">Gliderskin</button>
		</div>
		<div class="marksshort">
			<button onclick="treasure_click_all()" class="buttontmi">All</button>
			<button onclick="treasure_click_s()" class="buttontms">G12</button>
			<button onclick="treasure_click_a1()" class="buttontma1">G11</button>
		</div>
		<div class="mapimg">
			<img id="hunt_map" src="../images/sh/tempest.jpg">
			<img id="hunt_i" src="../images/sh/tempesttmi.png">
			<img id="treasure_s" src="../images/sh/tempestg12.png?version=1">
			<img id="treasure_simages" src="../images/sh/tempestg12images.png?version=1">
			<img id="treasure_a1" src="../images/sh/tempestg11.png?version=1">
			<img id="treasure_a1images" src="../images/sh/tempestg11images.png?version=1">
		</div>
	</div>
</body>
</html>