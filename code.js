var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["04972da7-df31-4a9b-89da-ba480259fe01","e55175fe-5a79-4b20-bacf-f690e52f2984","0209f284-8a86-4f4c-b016-85d16992d9d0","fe686786-4bdc-459a-8a17-0024db4dd4ae","ebef7a27-5ead-480d-9e88-3554d37b34fb","860596ca-fcd8-4dda-b879-83c5796ea485","11dfe657-76e7-45cc-b24f-9cae34aaac4e","7a6a50ed-e9f4-479d-9257-e08625c5b92e","f9734b8d-b21b-4725-97f1-6ea673bcdbfb","5ba4f95d-8eb9-4cf5-83e9-edef7585d27c","7dc8c7b1-fb51-453f-b109-7780f63394a7","b875b309-d378-4353-982e-13b24ed5b317","b4d41595-547a-49e4-a4d9-ea24cfe844ae","ea18ff4a-00fd-42ab-bb8a-fc0cbd093971","740055ec-c8fc-47bb-96a8-a7f8c849a5c3","1b55115a-578f-49e2-8e4a-92ac0fa76837","72ef1363-becb-4d78-adf1-f7abad939120","23cd1d8a-46fd-4d15-93ec-7600ba0f349f","63e991d9-4eaa-4982-8f5d-3400767eb467","098fe44b-18f8-433c-873a-9702b82faea2","5bd12ff4-b14e-4c57-9350-290e1614181c","581d611b-3636-43f9-bc64-72bf185e8219","31a1295b-2722-4211-b5ec-531ca057112a"],"propsByKey":{"04972da7-df31-4a9b-89da-ba480259fe01":{"name":"enemyBlack1_1","sourceUrl":null,"frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"SniNDzvP7sXtnYd7703q2LpNPpjeyETZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/04972da7-df31-4a9b-89da-ba480259fe01.png"},"e55175fe-5a79-4b20-bacf-f690e52f2984":{"name":"enemyBlack1_2","sourceUrl":null,"frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"tmwXXJ6kqNYoU.w8vraVxlKINhDj_Rdc","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/e55175fe-5a79-4b20-bacf-f690e52f2984.png"},"0209f284-8a86-4f4c-b016-85d16992d9d0":{"name":"enemyBlack1_3","sourceUrl":null,"frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"RpXmpf3_wnrb_p_tOgdeCIYFF0yJvzn.","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/0209f284-8a86-4f4c-b016-85d16992d9d0.png"},"fe686786-4bdc-459a-8a17-0024db4dd4ae":{"name":"enemyBlack1_4","sourceUrl":null,"frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"PtfB8jAcn9t0bPu6OZd3qwjQUScXhS8Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/fe686786-4bdc-459a-8a17-0024db4dd4ae.png"},"ebef7a27-5ead-480d-9e88-3554d37b34fb":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":50,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"py6rkcj2PNhs2CLUqApmPfofpNoiF9z4","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":60},"rootRelativePath":"assets/ebef7a27-5ead-480d-9e88-3554d37b34fb.png"},"860596ca-fcd8-4dda-b879-83c5796ea485":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"YEo2iEXiWghuh2Zb_0KVqPVS_BtbS_BT","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/860596ca-fcd8-4dda-b879-83c5796ea485.png"},"11dfe657-76e7-45cc-b24f-9cae34aaac4e":{"name":"space","sourceUrl":null,"frameSize":{"x":403,"y":886},"frameCount":1,"looping":true,"frameDelay":12,"version":"Dcb6fuq9wMJXqyfzM7aXA6M.HB3CH51e","loadedFromSource":true,"saved":true,"sourceSize":{"x":403,"y":886},"rootRelativePath":"assets/11dfe657-76e7-45cc-b24f-9cae34aaac4e.png"},"7a6a50ed-e9f4-479d-9257-e08625c5b92e":{"name":"enemyRed3_1","sourceUrl":null,"frameSize":{"x":103,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"4D.ZMIuyyyRpJBx_0h8.WxEG9Gv6bt6p","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":84},"rootRelativePath":"assets/7a6a50ed-e9f4-479d-9257-e08625c5b92e.png"},"f9734b8d-b21b-4725-97f1-6ea673bcdbfb":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":69,"y":99},"frameCount":1,"looping":true,"frameDelay":12,"version":"c.cur9_dsmnTyaD.U1jr5FXXR38ucQyZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":99},"rootRelativePath":"assets/f9734b8d-b21b-4725-97f1-6ea673bcdbfb.png"},"5ba4f95d-8eb9-4cf5-83e9-edef7585d27c":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":91,"y":57},"frameCount":1,"looping":true,"frameDelay":12,"version":"bWfAPEF7OZylRMC30CoWqxwjuN6cbA4b","loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":57},"rootRelativePath":"assets/5ba4f95d-8eb9-4cf5-83e9-edef7585d27c.png"},"7dc8c7b1-fb51-453f-b109-7780f63394a7":{"name":"animation_5","sourceUrl":null,"frameSize":{"x":316,"y":226},"frameCount":1,"looping":true,"frameDelay":12,"version":"0_Yzk8cun444uGjkMrEvEdAETJoklUoE","loadedFromSource":true,"saved":true,"sourceSize":{"x":316,"y":226},"rootRelativePath":"assets/7dc8c7b1-fb51-453f-b109-7780f63394a7.png"},"b875b309-d378-4353-982e-13b24ed5b317":{"name":"animation_6","sourceUrl":null,"frameSize":{"x":306,"y":99},"frameCount":1,"looping":true,"frameDelay":12,"version":"uaA_OSCK26ulqzhx0FIVidbRzUcM9hga","loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":99},"rootRelativePath":"assets/b875b309-d378-4353-982e-13b24ed5b317.png"},"b4d41595-547a-49e4-a4d9-ea24cfe844ae":{"name":"animation_6_copy_1","sourceUrl":null,"frameSize":{"x":306,"y":99},"frameCount":1,"looping":true,"frameDelay":12,"version":"Vk.je.5M7N1hl65e1aiRE7BJv7iCD0N4","loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":99},"rootRelativePath":"assets/b4d41595-547a-49e4-a4d9-ea24cfe844ae.png"},"ea18ff4a-00fd-42ab-bb8a-fc0cbd093971":{"name":"animation_6_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":306,"y":99},"frameCount":1,"looping":true,"frameDelay":12,"version":"rBxUBXwDOsE5OwqTKqQoVBWr7okwzo6K","loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":99},"rootRelativePath":"assets/ea18ff4a-00fd-42ab-bb8a-fc0cbd093971.png"},"740055ec-c8fc-47bb-96a8-a7f8c849a5c3":{"name":"animation_6_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":306,"y":99},"frameCount":2,"looping":true,"frameDelay":10,"version":"LWuGmXd_JV6Hd8xBmgENH3wvKWnACNrx","loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":198},"rootRelativePath":"assets/740055ec-c8fc-47bb-96a8-a7f8c849a5c3.png"},"1b55115a-578f-49e2-8e4a-92ac0fa76837":{"name":"animation_6_copy_1_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":306,"y":99},"frameCount":2,"looping":true,"frameDelay":12,"version":"gjFsxweDRjwDgb4C.FQG9r5EtBHPx1Yy","loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":198},"rootRelativePath":"assets/1b55115a-578f-49e2-8e4a-92ac0fa76837.png"},"72ef1363-becb-4d78-adf1-f7abad939120":{"name":"enemyBlack1_6","sourceUrl":"assets/api/v1/animation-library/gamelab/SAFuCJHV.dgXCcH9OpiEssbcokha1O9H/category_vehicles/enemyBlack1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"SAFuCJHV.dgXCcH9OpiEssbcokha1O9H","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SAFuCJHV.dgXCcH9OpiEssbcokha1O9H/category_vehicles/enemyBlack1.png"},"23cd1d8a-46fd-4d15-93ec-7600ba0f349f":{"name":"enemyBlack1_6_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/SAFuCJHV.dgXCcH9OpiEssbcokha1O9H/category_vehicles/enemyBlack1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"SAFuCJHV.dgXCcH9OpiEssbcokha1O9H","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SAFuCJHV.dgXCcH9OpiEssbcokha1O9H/category_vehicles/enemyBlack1.png"},"63e991d9-4eaa-4982-8f5d-3400767eb467":{"name":"enemyBlack1_6_copy_1_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/SAFuCJHV.dgXCcH9OpiEssbcokha1O9H/category_vehicles/enemyBlack1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"SAFuCJHV.dgXCcH9OpiEssbcokha1O9H","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SAFuCJHV.dgXCcH9OpiEssbcokha1O9H/category_vehicles/enemyBlack1.png"},"098fe44b-18f8-433c-873a-9702b82faea2":{"name":"enemyBlack1_6_copy_1_copy_1_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/SAFuCJHV.dgXCcH9OpiEssbcokha1O9H/category_vehicles/enemyBlack1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"SAFuCJHV.dgXCcH9OpiEssbcokha1O9H","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SAFuCJHV.dgXCcH9OpiEssbcokha1O9H/category_vehicles/enemyBlack1.png"},"5bd12ff4-b14e-4c57-9350-290e1614181c":{"name":"animation_2_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"581d611b-3636-43f9-bc64-72bf185e8219":{"name":"animation_2_2","sourceUrl":null,"frameSize":{"x":20,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"i_BxsvlvbhWLC1nkvuFwTVasbXdF9lPC","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":26},"rootRelativePath":"assets/581d611b-3636-43f9-bc64-72bf185e8219.png"},"31a1295b-2722-4211-b5ec-531ca057112a":{"name":"solar","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gamestate = "shoot";

var lif = 0;

var timer = 0;

var back = createSprite(200, 200, 400, 400);

var enemy= createSprite(randomNumber(5, 390), randomNumber(-30, -5), 30, 30);
var enemy1 = createSprite(randomNumber(5, 390), randomNumber(-30, -5), 30, 30);
var player = createSprite(10, 10, 20, 20);

var score = 0;
var power = createSprite(356, 9, 40, 20);

power.setAnimation("animation_6");
power.height = 20;
power.width = 50;


player.setAnimation("animation_3");
player.height = 20;
player.width = 20;


enemy1.velocityY = 2;
enemy1.setAnimation("enemyRed3_1");

back.setAnimation("space");

enemy.velocityY = 2;
enemy.setAnimation("enemyBlack1_1"); 

var bullet = createSprite(200, 450, 5, 10);
var life = createSprite(200, -40, 20, 20);

life.setAnimation("animation_2");
bullet.shapeColor = "red";

var space = createSprite(200  , 350, 20, 20);
space.setAnimation("enemyBlack1_3");

back.y=back.height / 2;
back.velocityY = 5;

function draw() {
  background("white");
  
  createEdgeSprites();
  
  space.bounceOff(edges);
  
  if (keyDown("q")) {
    if (keyDown(UP_ARROW)) {
      space.y = space.y - 5;
      space.setAnimation("enemyBlack1_3");
    }
    if(keyDown(DOWN_ARROW)){
      space.y = space.y+5;
    }
  }
  
  
  if (keyDown("space") && gamestate === "shoot") {
  shoot();
  gamestate = "hit";
  }
  
  if (keyDown(LEFT_ARROW)){
  space.x = space.x-5;
  }
  
  if (keyDown(RIGHT_ARROW)) {
  space.x = space.x+5;
  }
  
  if (back.y>400){
    back.y = 200;
  }
  
  if (bullet.y<0){
  reset();
  gamestate = "shoot";
  }
  
  if (bullet.isTouching(enemy)){
    reset();
    enemy.x = randomNumber(5, 390);
    enemy.y = randomNumber(-30, -5);
    gamestate = "shoot";
  }
  
  if (bullet.isTouching(enemy1)){
    reset();
    enemy1.x = randomNumber(5, 390);
    enemy1.y = randomNumber(-30, -5);
    gamestate = "shoot";
  }
  
  if (enemy.y>450) {
    enemy.x = randomNumber(5, 390);
    enemy.y = randomNumber(-30, -5);
    score = score+1;
  }
  
  if (enemy1.y>450) {
    enemy1.x = randomNumber(5, 390);
    enemy1.y = randomNumber(-30, -5);
    score = score+1;
  }
  
  if (enemy.isTouching(space)){
    enemy.x = randomNumber(5, 390);
    enemy.y = randomNumber(-30, -5);
    score = score+1;
  }
  
  if
  (enemy1.isTouching(space)){
    enemy1.x = randomNumber(5, 390);
    enemy1.y = randomNumber(-30, -5);
    score = score+1;
  }
  
  
  drawSprites();
  textSize(24);
  fill("green");
  text("press space to shoot",100,200);
  textSize(20);
  fill("yellow");
  text(timer, 194, 15);
  timer = timer+1;
  lif = lif+1;
  if ( lif === 1000 ){
     lif = 0;
    life.velocityY = 3;
  }
  if (lif === 0) {
    life.x = 200;
    life.y = -10;
  }
 
  if (mouseIsOver(player) || score === 4) {
    fill("yellow");
    textSize(20);
    text("Press R to restart", 200, 200);
    if (keyDown("r")) {
      score = 0;
      re();
    }
   
    
  }
  if (score === 0) {
    power.setAnimation("animation_6");
   
  }
  if (score === 1) {
    power.setAnimation("animation_6_copy_1");
     if (space.isTouching(life)) {
      score = score - 1;
    }
  }
  if (score === 2) {
    power.setAnimation("animation_6_copy_1_copy_1");
     if (space.isTouching(life)) {
      score = score - 1;
    }
  }
  if (score === 3) {
    power.setAnimation("animation_6_copy_1_copy_1_copy_1"); if (space.isTouching(life)) {
      score = score - 1;
    }
  }
  if (score === 4) {
     power.setAnimation("animation_6_copy_1_copy_1_copy_1_copy_1");
     enemy.x = randomNumber(5, 390);
     enemy.y = randomNumber(-30, -5);
     enemy1.x = randomNumber(5, 390);
     enemy1.y = randomNumber(-30, -5);
     enemy.velocityX = 0;
     enemy.velocityY = 0;
     enemy1.velocityX = 0;
     enemy1.velocityY = 0;
     space.velocityY = 0.5;
      if (space.isTouching(life)) {
      score = score - 1;
    }
  }
function shoot() {
  bullet.y = space.y;
  bullet.x = space.x;
  bullet.velocityX = 0;
  bullet.velocityY = -50;
  playSound("assets/category_explosion/playful_game_explosive_hit.mp3");
}
function reset() {
  bullet.x = 200;
  bullet.y = 450;
  bullet.velocityX = 0;
  bullet.velocityY = 0;
}
  function re() {
    score = 0;
    enemy.x = randomNumber(5, 390);
    enemy.y = randomNumber(-30, -5);
    enemy1.x = randomNumber(5, 390);
    enemy1.y = randomNumber(-30, -5);
    enemy.velocityY = 2;
    enemy1.velocityY = 2;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
