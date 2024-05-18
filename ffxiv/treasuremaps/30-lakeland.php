<html>
<head>
<?php include "../huntmaps/mapsheader.html";?>
</head>
<body>
	<div class="mapdiv">
		<div class="marksfull">
			<button onclick="treasure_click_all_a1overlaps()" class="buttontmi">All</button>
			<button onclick="treasure_click_s_a1overlaps()" class="buttontms">Zonureskin</button>
			<button onclick="treasure_click_a1_a1overlaps()" class="buttontma1">Gliderskin(1)</button>
			<button onclick="treasure_click_a1_a1overlaps2()" class="buttontma1_2">Gliderskin(2)</button>
		</div>
		<div class="marksshort">
			<button onclick="treasure_click_all_a1overlaps()" class="buttontmi">All</button>
			<button onclick="treasure_click_s_a1overlaps()" class="buttontms">G12</button>
			<button onclick="treasure_click_a1_a1overlaps()" class="buttontma1">G11(1)</button>
			<button onclick="treasure_click_a1_a1overlaps2()" class="buttontma1_2">G11(2)</button>
		</div>
		<div class="mapimg">
			<img id="hunt_map" src="../images/sh/lakeland.jpg">
			<img id="hunt_i" src="../images/sh/lakelandtmi.png">
			<img id="treasure_s" src="../images/sh/lakelandg12.png?version=1">
			<img id="treasure_simages" src="../images/sh/lakelandg12images.png?version=1">
			<img id="treasure_a1" src="../images/sh/lakelandg11.png?version=1">
			<img id="treasure_a1images" src="../images/sh/lakelandg11images.png?version=1">
			<img id="treasure_a1images2" src="../images/sh/lakelandg11images2.png?version=1">
		</div>
	</div>
</body>
</html>