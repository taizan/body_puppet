$(document).ready(function () {
   
    //bodys
    $(".leg").rotatable({
        handle:"this",
        rotationCenterX: 50.0,
        rotationCenterY: 10.0
    });
    $(".arm").rotatable({
        handle: "this",
        rotationCenterX: 50.0,
        rotationCenterY: 10.0
    });
    $(".body_top").rotatable({
        handle: "this",
        rotationCenterX: 50.0,
        rotationCenterY: 90.0
    });
    $(".body_under").rotatable({
        handle: "this",
        rotationCenterX: 50.0,
        rotationCenterY: 32.0
    });
    $(".neck").rotatable({
        handle: "this",
        rotationCenterX: 50.0,
        rotationCenterY: 80.0
    });
    $(".head").rotatable({
        handle: "this",
        rotationCenterX: 50.0,
        rotationCenterY: 80.0
    });
    $(".part")
        .mouseover(function () {
            $(this).children(".ui-resizable-handle").show();
            $(this).children(".ui-rotatable-handle").show();
        })
        .mouseout(function () {

        $(this).children(".ui-resizable-handle").hide();
        $(this).children(".ui-rotatable-handle").hide();
        });

    $(".ui-resizable-handle").hide();
    $(".ui-rotatable-handle").hide();
  

});