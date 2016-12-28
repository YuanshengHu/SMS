$(document).ready(function(){
    $("#searchingbutton").click(function(){
        var a = $("#searching").val()
        $.post("/m2",
            {
                name:a
            },
            function(data,status){
                $("#hh1").text($(data).find("id").text())
                $("#hh2").text($(data).find("name").text())
                $("#hh3").text($(data).find("gen").text())
                $("#hh4").text($(data).find("rank").text())
                $("#hh5").text($(data).find("po").text())
                $("#hh6").text($(data).find("sid").text())
                $("#hh7").text($(data).find("sa").text())
                $("#hh8").text($(data).find("ab").text())
                $("#hh9").text($(data).find("note").text())
            }
        )
    })
    $("#saj").click(function () {
        var a = $("#sab").val()
        $("#hh7").text(a)
        $.post("/m2",
            {
                changesa:$("#hh2").text(),
                changenum:a
            },
            function(data){}
        )
    })
    $("#poj").click(function () {
        var a = $("#pob").val()
        $("#hh5").text(a)
        $.post("/m2",
            {
                changepo:$("#hh2").text(),
                changenum:a
            },
            function(data){}
        )
    })
    $("#suj").click(function () {
        var a = $("#sub").val()
        $("#hh6").text(a)
        $.post("/m2",
            {
                changesu:$("#hh2").text(),
                changenum:a
            },
            function(data){}
        )
    })
    $("#raj").click(function () {
        var a = $("#rab").val()
        $("#hh4").text(a)
        $.post("/m2",
            {
                changera:$("#hh2").text(),
                changenum:a
            },
            function(data){}
        )
    })
    $("#fire").click(function(){
        $.post("/m2",
            {
                ssp:$("#hh2").text(),
                tt:0
            },
            function(data){}
        )
    })
    $("#absence").click(function () {
        var a = Number($("#hh8").text())
        console.log(a)
        $("#hh8").text(a+1)
        $.post("/m2",
            {
                ssr:$("#hh2").text(),
                cc:a+1
            },
            function(data){}
        )
    })
    $("#pay").click(function(){
        var a = Number($("#hh7").text())
        $.post("/m2",
            {
                pay:a
            },
            function(data){}
        )
    })
    $("#note").click(function () {
        $("#hh9").text($("#content").val())
        $.post("/m2",
            {
                kkll:$("#content").val(),
                sspp:$("#hh2").text()
            },
            function(data) {}
        )
    })
});