// JavaScript Document
$.getJSON("http://twitter.com/statuses/user_timeline/darko_lulz.json?callback=?", function(data){$("div div ul li#twitter").html(data[0].text);});