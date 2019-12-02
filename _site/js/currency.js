function convertToZib() {
    var cp = document.getElementById("cp").value;
    var sp = document.getElementById("sp").value;
    var ep = document.getElementById("ep").value;
    var gp = document.getElementById("gp").value;
    var pp = document.getElementById("pp").value;

    var cpToZib = cp*1;
    var spToZib = sp*10;
    var epToZib = ep*50;
    var gpToZib = gp*100;
    var ppToZib = pp*1000;
    var totalZibs = cpToZib + spToZib + epToZib + gpToZib + ppToZib;
    if (totalZibs >= 100) {
      var totalZinos = Math.floor(totalZibs/100);
      var newTotalZibs = totalZibs % 100;
      document.getElementById("result").innerHTML = `${totalZinos} zinos, ${newTotalZibs} zibs`
    }
    else {
      document.getElementById("result").innerHTML = totalZibs + " zibs";
    }    
}

function convertFromZib() {
  var zibs = document.getElementById("zib").value;
  var zinos = document.getElementById("zino").value;

  var zibToCp = zibs*1;
  var zinoToCp = zinos*100;
  var totalCp = zibToCp + zinoToCp;
  if (totalCp >= 100) {
    var totalGp = Math.floor(totalCp/100);
    var newTotalCp = totalCp % 100;
    document.getElementById("result").innerHTML = `${totalGp} gp, ${newTotalCp} cp`;
  }
  else {
    document.getElementById("result").innerHTML = totalCp + " cp";
  }
  
}