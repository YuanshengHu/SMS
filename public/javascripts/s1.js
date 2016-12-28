/**
 * Created by huyuansheng on 2016/10/29.
 */
$(document).ready(function(){
    $("#hhh").click(function(){
        var st1= Date.parse(new Date($("#hh5").val()))
        var ss = Number(st1)
        $.post("/storage",
            {
                sk:1,
                name:$("#hh1").val(),
                count:$("#hh2").val(),
                supplier:$("#hh3").val(),
                price:$("#hh4").val(),
                time:ss
            },
            function(data,status){}
        )
    })
    $("#hhhh").click(function(){
        var st1= Date.parse(new Date($("#hhh3").val()))
        var ss = Number(st1)
        $.post("/storage",
            {
                sk:2,
                name:$("#hhh1").val(),
                count:$("#hhh2").val(),
                time:ss
            },
            function(data,status){}
        )
    })
});