var diamondID = "Diamond";

var loadSound = function(){
	createjs.Sound.registerSound("sounds/diamond.mp3", diamondID);
}

var playSound = function(){
	createjs.Sound.registerSound(diamondID);
}

var init = function(){
	var stage = new createjs.Stage("soundCanvas");

	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(100,100,25);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);

	var circle2 = new createjs.Shape();
	circle2.graphics.beginFill('#F471EA').drawCircle(20,20,25);
	circle2.x = 20;
	circle2.y = 20;
	stage.addChild(circle2);

	var square = new createjs.Shape();
	square.graphics.beginFill('#A8B4DA').drawRect(10,120,20,20);

	stage.addChild(square);

	createjs.Tween.get(square, {loop: true})
					.to({ x: 800 }, 1000, createjs.Ease.getPowInOut(4) )
					// .to({ y:  300}, 500, createjs.Ease.getPowInOut(2) )
					// .to({ x: 0 }, 500, createjs.Ease.getPowInOut(4) )
					.to({ x: 10 }, 800, createjs.Ease.getPowInOut(2));

	createjs.Tween.get(circle, {loop: true})
					.to({ x: 500 }, 1500, createjs.Ease.getPowInOut(2))
					.to({ x: 100 }, 1500, createjs.Ease.getPowInOut(2));

	createjs.Tween.get(circle2, {loop: true})
					.to({ x: 500 }, 1500, createjs.Ease.getPowInOut(2))
					.to({ x: 20 }, 1500, createjs.Ease.getPowInOut(2));

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);

	playSound();
	stage.update();
}


window.addEventListener('load', function(){
	loadSound();
	init();
})