$(function(){
    var date = new Date();
    $("#today_date").html(date.getDate()+"-"+(date.getMonth())+"-"+date.getFullYear());
});