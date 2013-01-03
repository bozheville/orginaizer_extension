$(function(){
    console.log(storageArea.get("task"));
    var date = new Date();
    $("#today_date").html(date.getDate()+"-"+(date.getMonth())+"-"+date.getFullYear());
    $("#add_task").click(function(){storageArea.set({"task":$("#new_task").val()});});
});