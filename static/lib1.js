/*var intDiff = parseInt(60);//倒计时总秒数量
function timer(intDiff, showDiv){
	var intDiff = intDiff;
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $(showDiv).html(hour+":"+minute+":"+second);
    intDiff--;
    }, 1000);
}*/

/*$(function(){
    timer(intDiff);
});*/
var gcontract = "0x62bD064d399016490933915200534a7Bb0D7466f";
var ticket = "0x499C83DC2d90303382a5315f6E3DaBF46eaADE19";
var fcontract = "0xD4585de767522084fAe6379f2CA9cda68D860878";

function Tick(_intDiff, _showDiv) {
	
	this.intDiff = _intDiff;
	this.showDiv = _showDiv;
	var t;
	
	this.timer = function(ob){
		if(ob.t)clearInterval(ob.t);
		
		this.t = window.setInterval(function(){
	    var day=0,
	        hour=0,
	        minute=0,
	        second=0;//时间默认值        
	    if(ob.intDiff > 0){
	        day = Math.floor(ob.intDiff / (60 * 60 * 24));
	        hour = Math.floor(ob.intDiff / (60 * 60)) - (day * 24);
	        minute = Math.floor(ob.intDiff / 60) - (day * 24 * 60) - (hour * 60);
	        second = Math.floor(ob.intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
	    }
		if (hour <= 9) hour = '0' + hour;
	    if (minute <= 9) minute = '0' + minute;
	    if (second <= 9) second = '0' + second;
		
	    $(ob.showDiv).html(hour+":"+minute+":"+second);
		if(ob.intDiff <= 0) clearInterval(ob.t);
	    ob.intDiff--;
	    }, 1000);
	};
	
	this.clear = function(){
		clearInterval(this.t);
	};
	
};
