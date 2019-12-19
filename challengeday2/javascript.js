var d = new Date();    
var co = 360 / 60;
var graus_seconds = co * d.getSeconds() + (co * 15);

$(".second").html({
  "transform": "rotate(" +graus_seconds+ "deg)"
});

var co = 360 / 60;
var graus_seconds = co * (m = d.getMinutes()) + (co * 15);

$(".minute").html({
  "transform": "rotate(" +graus_seconds+ "deg)"
});    

var co = 360 / 12;
var graus_seconds = co * ( h = d.getHours()) + (co * 3);

$(".hour").html({
  "transform": "rotate(" +graus_seconds+ "deg)"
});