var canvas = new fabric.Canvas('myCanvas');
var block_img_width = 140;
var block_img_height = 150;
var created_x = 10;
var created_y = 10;
var ctx=canvas.getContext("2d");

var player_object = "";
var block_img_object = "";

var body=["body1.png",
"body2.png",
"body3.png"];

var face=["face1.png",
"face2.png",
"face3.png",
"face4.png"];

var leftie=["lefthand1.png",
"lefthand2.png",
"lefthand3.png",
"lefthand4.png",
"lefthand5.png"];

var leg=["leg1.png",
"leg2.png",
"leg3.png"];

var righthand=["righthand1.png",
"righthand2.png",
"righthand3.png",
"righthand4.png"];

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        console.log("player update");
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        console.log("height , width");
        player_object.set({ top: created_y, left: created_x });
        console.log("player set");
        canvas.add(player_object);
    }
    );
    

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {

        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);

        block_img_object.set({ top: created_y, left: created_x });
        canvas.add(block_img_object);
    }

    );


}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    var key_value = e.keyCode;
    console.log(key_value);


    if (e.shiftKey == true && key_value == "80") {
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_width;
    }
    if (e.shiftKey == true && key_value == "77") {
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_width;
    }
    if (key_value == 70) {
        new_image("face2.png");
        console.log("f");
    }
    if (key_value == 66) {
        new_image("body3.png");
        console.log("b");
    }
    if (key_value == 76) {
        new_image("leg1.png");
        console.log("l");
    }
    if (key_value == 72 && 82) {
        new_image("righthand4.png");
        console.log("rh");
    }
    if (key_value == 72 && 76) {
        new_image("lefthand1.png");
        console.log("rh");
    }
    if (key_value == 38) {
        ggoouupp()
        console.log("up");
    }
    if (key_value == 40) {
        ggooddoowwnn()
        console.log("down");
    }
    if (key_value == 39) {
        ggoorriigghhtt()
        console.log("right");
    }
    if (key_value == 37) {
        ggoolleefftt()
        console.log("left");
    }

}