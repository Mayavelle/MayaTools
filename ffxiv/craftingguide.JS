function ishgardCalc() {
  var crplvl = document.getElementById('crplvl').value;
  var crpexp = document.getElementById('crpexp').value;
  var crpres20 = document.getElementById('crpres20');
  var crpres40 = document.getElementById('crpres40');
  var crpres50 = document.getElementById('crpres50');
  var crpres60 = document.getElementById('crpres60');
  var crpres70 = document.getElementById('crpres70');
  var crproad20 = document.getElementById('crproad20');
  var crproad40 = document.getElementById('crproad40');
  var crproad50 = document.getElementById('crproad50');
  var crproad60 = document.getElementById('crproad60');
  var crproad70 = document.getElementById('crproad70');
  var crp20 = document.getElementById('crp20');
  var crp40 = document.getElementById('crp40');
  var crp50 = document.getElementById('crp50');
  var crp60 = document.getElementById('crp60');
  var crp70 = document.getElementById('crp70');
  var crp20b = document.getElementById('crp20b');
  var crp40b = document.getElementById('crp40b');
  var crp50b = document.getElementById('crp50b');
  var crp60b = document.getElementById('crp60b');
  var crp70b = document.getElementById('crp70b');
  var lvl21 = '3541920';
  var lvl22 = '3478020';
  var lvl23 = '3406620';
  var lvl24 = '3327520';
  var lvl25 = '3240420';
  var lvl26 = '3145220';
  var lvl27 = '3035420';
  var lvl28 = '2910620';
  var lvl29 = '2770420';
  var lvl30 = '2614520';
  var lvl31 = '2452020';
  var lvl32 = '2276120';
  var lvl33 = '2086520';
  var lvl34 = '1883020';
  var lvl35 = '1665120';
  var lvl36 = '1432800';
  var lvl37 = '1182900';
  var lvl38 = '915100';
  var lvl39 = '628900';
  var lvl40 = '324000';
  var lvl41 = '3801800';
  var lvl42 = '3461600';
  var lvl43 = '3104800';
  var lvl44 = '2731100';
  var lvl45 = '2340300';
  var lvl46 = '1932100';
  var lvl47 = '1494500';
  var lvl48 = '1027000';
  var lvl49 = '529000';
  var lvl50 = '26206800';
  var lvl51 = '25342800';
  var lvl52 = '24284400';
  var lvl53 = '23017200';
  var lvl54 = '21462000';
  var lvl55 = '19590000';
  var lvl56 = '17372400';
  var lvl57 = '14780400';
  var lvl58 = '11785200';
  var lvl59 = '8358000';
  var lvl60 = '4470000';
  var lvl61 = '78572000';
  var lvl62 = '73699000';
  var lvl63 = '68383000';
  var lvl64 = '62574000';
  var lvl65 = '56210000';
  var lvl66 = '49215000';
  var lvl67 = '41493000';
  var lvl68 = '32918000';
  var lvl69 = '23325000';
  var lvl70 = '12499000';
  var lvl71 = '213405600';
  var lvl72 = '199524600';
  var lvl73 = '183968600';
  var lvl74 = '166470000';
  var lvl75 = '146720000';
  var lvl76 = '124390000';
  var lvl77 = '99050000';
  var lvl78 = '70400000';
  var lvl79 = '37650000';
  var exp20 = '57826';
  var exp20b = '146796';
  var exp40 = '241477';
  var exp40b = '433478';
  var exp40c = '875604';
  var exp60 = '1301116';
  var exp60b = '1438130';
  var exp60c = '1792967';
  var exp70 = '2084005';
  var exp70b = '2876447';
  var exp70c = '4113234';
  var road20 = exp20*2;
  var road20b = exp20b*2;
  var road40 = exp40*2;
  var road40b = exp40b*2;
  var road40c = exp40c*2;
  var road60 = exp60*2;
  var road60b = exp60b*2;
  var road60c = exp60c*2;
  var road70 = exp70*2;
  var road70b = exp70b*2;
  var road70c = exp70c*2;
  if (crplvl == '21'){
    crpres20.innerHTML = Math.ceil((lvl21 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl21 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
    crpres40.innerHTML = Math.ceil((lvl41 - crpexp)/exp40);
    crproad40.innerHTML = Math.ceil((lvl41 - crpexp)/road40);
  }
  if (crplvl == '22'){
    crpres20.innerHTML = Math.ceil((lvl22 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl22 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '23'){
    crpres20.innerHTML = Math.ceil((lvl23 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl23 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '24'){
    crpres20.innerHTML = Math.ceil((lvl24 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl24 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '25'){
    crpres20.innerHTML = Math.ceil((lvl25 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl25 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '26'){
    crpres20.innerHTML = Math.ceil((lvl26 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl26 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '27'){
    crpres20.innerHTML = Math.ceil((lvl27 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl27 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '28'){
    crpres20.innerHTML = Math.ceil((lvl28 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl28 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '29'){
    crpres20.innerHTML = Math.ceil((lvl29 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl29 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '30'){
    crpres20.innerHTML = Math.ceil((lvl30 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl30 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '31'){
    crpres20.innerHTML = Math.ceil((lvl31 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl31 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '32'){
    crpres20.innerHTML = Math.ceil((lvl32 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl32 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '33'){
    crpres20.innerHTML = Math.ceil((lvl33 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl33 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '34'){
    crpres20.innerHTML = Math.ceil((lvl34 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl34 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '35'){
    crpres20.innerHTML = Math.ceil((lvl35 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl35 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '36'){
    crpres20.innerHTML = Math.ceil((lvl36 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl36 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '37'){
    crpres20.innerHTML = Math.ceil((lvl37 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl37 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '38'){
    crpres20.innerHTML = Math.ceil((lvl38 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl38 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '39'){
    crpres20.innerHTML = Math.ceil((lvl39 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl39 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '40'){
    crpres20.innerHTML = Math.ceil((lvl40 - crpexp)/exp20);
    crproad20.innerHTML = Math.ceil((lvl40 - crpexp)/road20);
    crp20.style.display = 'block';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp20b.style.display = 'block';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '41'){
    crpres40.innerHTML = Math.ceil((lvl41 - crpexp)/exp40);
    crproad40.innerHTML = Math.ceil((lvl41 - crpexp)/road40);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '42'){
    crpres40.innerHTML = Math.ceil((lvl42 - crpexp)/exp40);
    crproad40.innerHTML = Math.ceil((lvl42 - crpexp)/road40);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '43'){
    crpres40.innerHTML = Math.ceil((lvl43 - crpexp)/exp40);
    crproad40.innerHTML = Math.ceil((lvl43 - crpexp)/road40);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '44'){
    crpres40.innerHTML = Math.ceil((lvl44 - crpexp)/exp40);
    crproad40.innerHTML = Math.ceil((lvl44 - crpexp)/road40);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '45'){
    crpres40.innerHTML = Math.ceil((lvl45 - crpexp)/exp40);
    crproad40.innerHTML = Math.ceil((lvl45 - crpexp)/road40);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '46'){
    crpres40.innerHTML = Math.ceil((lvl46 - crpexp)/exp40);
    crproad40.innerHTML = Math.ceil((lvl46 - crpexp)/road40);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '47'){
    crpres40.innerHTML = Math.ceil((lvl47 - crpexp)/exp40);
    crproad40.innerHTML = Math.ceil((lvl47 - crpexp)/road40);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '48'){
    crpres40.innerHTML = Math.ceil((lvl48 - crpexp)/exp40);
    crproad40.innerHTML = Math.ceil((lvl48 - crpexp)/road40);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '49'){
    crpres40.innerHTML = Math.ceil((lvl49 - crpexp)/exp40);
    crproad40.innerHTML = Math.ceil((lvl49 - crpexp)/road40);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '50'){
    crpres40.innerHTML = Math.ceil((lvl50 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl50 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '51'){
    crpres40.innerHTML = Math.ceil((lvl51 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl51 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '52'){
    crpres40.innerHTML = Math.ceil((lvl52 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl52 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '53'){
    crpres40.innerHTML = Math.ceil((lvl53 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl53 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '54'){
    crpres40.innerHTML = Math.ceil((lvl54 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl54 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '55'){
    crpres40.innerHTML = Math.ceil((lvl55 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl55 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '56'){
    crpres40.innerHTML = Math.ceil((lvl56 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl56 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '57'){
    crpres40.innerHTML = Math.ceil((lvl57 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl57 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '58'){
    crpres40.innerHTML = Math.ceil((lvl58 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl58 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '59'){
    crpres40.innerHTML = Math.ceil((lvl59 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl59 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '60'){
    crpres40.innerHTML = Math.ceil((lvl59 - crpexp)/exp40b);
    crproad40.innerHTML = Math.ceil((lvl59 - crpexp)/road40b);
    crp40.style.display = 'block';
    crp20.style.display = 'none';
    crp60.style.display = 'none';
    crp70.style.display = 'none';
    crp40b.style.display = 'block';
    crp20b.style.display = 'none';
    crp60b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '61'){
    crpres60.innerHTML = Math.ceil((lvl61 - crpexp)/exp60);
    crproad60.innerHTML = Math.ceil((lvl61 - crpexp)/road60);
    crp60.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp70.style.display = 'none';
    crp60b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '62'){
    crpres60.innerHTML = Math.ceil((lvl62 - crpexp)/exp60);
    crproad60.innerHTML = Math.ceil((lvl62 - crpexp)/road60);
    crp60.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp70.style.display = 'none';
    crp60b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '63'){
    crpres60.innerHTML = Math.ceil((lvl63 - crpexp)/exp60);
    crproad60.innerHTML = Math.ceil((lvl63 - crpexp)/road60);
    crp60.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp70.style.display = 'none';
    crp60b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '64'){
    crpres60.innerHTML = Math.ceil((lvl64 - crpexp)/exp60);
    crproad60.innerHTML = Math.ceil((lvl64 - crpexp)/road60);
    crp60.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp70.style.display = 'none';
    crp60b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '65'){
    crpres60.innerHTML = Math.ceil((lvl65 - crpexp)/exp60);
    crproad60.innerHTML = Math.ceil((lvl65 - crpexp)/road60);
    crp60.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp70.style.display = 'none';
    crp60b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '66'){
    crpres60.innerHTML = Math.ceil((lvl66 - crpexp)/exp60);
    crproad60.innerHTML = Math.ceil((lvl66 - crpexp)/road60);
    crp60.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp70.style.display = 'none';
    crp60b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '67'){
    crpres60.innerHTML = Math.ceil((lvl67 - crpexp)/exp60);
    crproad60.innerHTML = Math.ceil((lvl67 - crpexp)/road60);
    crp60.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp70.style.display = 'none';
    crp60b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '68'){
    crpres60.innerHTML = Math.ceil((lvl68 - crpexp)/exp60);
    crproad60.innerHTML = Math.ceil((lvl68 - crpexp)/road60);
    crp60.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp70.style.display = 'none';
    crp60b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '69'){
    crpres60.innerHTML = Math.ceil((lvl69 - crpexp)/exp60);
    crproad60.innerHTML = Math.ceil((lvl69 - crpexp)/road60);
    crp60.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp70.style.display = 'none';
    crp60b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '70'){
    crpres60.innerHTML = Math.ceil((lvl70 - crpexp)/exp60);
    crproad60.innerHTML = Math.ceil((lvl70 - crpexp)/road60);
    crp60.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp70.style.display = 'none';
    crp60b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp70b.style.display = 'none';
  }
  if (crplvl == '71'){
    crpres70.innerHTML = Math.ceil((lvl71 - crpexp)/exp70c);
    crproad70.innerHTML = Math.ceil((lvl71 - crpexp)/road70c);
    crp70.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
  }
  if (crplvl == '72'){
    crpres70.innerHTML = Math.ceil((lvl72 - crpexp)/exp70c);
    crproad70.innerHTML = Math.ceil((lvl72 - crpexp)/road70c);
    crp70.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
  }
  if (crplvl == '73'){
    crpres70.innerHTML = Math.ceil((lvl73 - crpexp)/exp70c);
    crproad70.innerHTML = Math.ceil((lvl73 - crpexp)/road70c);
    crp70.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
  }
  if (crplvl == '74'){
    crpres70.innerHTML = Math.ceil((lvl74 - crpexp)/exp70c);
    crproad70.innerHTML = Math.ceil((lvl74 - crpexp)/road70c);
    crp70.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
  }
  if (crplvl == '75'){
    crpres70.innerHTML = Math.ceil((lvl75 - crpexp)/exp70c);
    crproad70.innerHTML = Math.ceil((lvl75 - crpexp)/road70c);
    crp70.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
  }
  if (crplvl == '76'){
    crpres70.innerHTML = Math.ceil((lvl76 - crpexp)/exp70c);
    crproad70.innerHTML = Math.ceil((lvl76 - crpexp)/road70c);
    crp70.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
  }
  if (crplvl == '77'){
    crpres70.innerHTML = Math.ceil((lvl77 - crpexp)/exp70c);
    crproad70.innerHTML = Math.ceil((lvl77 - crpexp)/road70c);
    crp70.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
  }
  if (crplvl == '78'){
    crpres70.innerHTML = Math.ceil((lvl78 - crpexp)/exp70c);
    crproad70.innerHTML = Math.ceil((lvl78 - crpexp)/road70c);
    crp70.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
  }
  if (crplvl == '79'){
    crpres70.innerHTML = Math.ceil((lvl79 - crpexp)/exp70c);
    crproad70.innerHTML = Math.ceil((lvl79 - crpexp)/road70c);
    crp70.style.display = 'block';
    crp20.style.display = 'none';
    crp40.style.display = 'none';
    crp60.style.display = 'none';
    crp70b.style.display = 'block';
    crp20b.style.display = 'none';
    crp40b.style.display = 'none';
    crp60b.style.display = 'none';
  }
}