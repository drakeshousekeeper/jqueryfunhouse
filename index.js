$(document).ready( function(){
    
    // -- NAME
    $("#submit-name").click(function(){
    $("#greeting").html("What up, " + $("#name").val());
    })
    
    // -- CHANGE COLOR
    var colors = ["#800000", "#ADFB57", "#575bfb"]
    $('#change-color').click(function(){
        $('body').css("background-color", colors[Math.round(Math.random() * 2)]);
    })
    
    // -- PICS
    $(".gallery-thumb").click(function(){
    //$("#gallery-main").attr("img", "")
    })
    
})

