$(function(){

  var loc;

  $.getJSON('http://ipinfo.io', function(d){
    console.log("assigning that data...");
    loc = d.loc;
    console.log(loc);
    //call to the weather API

  })
})
