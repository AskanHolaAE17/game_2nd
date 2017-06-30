var canvas = document.getElementById('canvas');

document.onkeydown = press_key;

var ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
ctx.fillStyle = 'black';
canvas_color('green');

var req;

var walk_step = 5;
var side = 40;   // left-right-top-bottom

var prew_keycode_ar = ['', 0];
var cur_keycode_ar  = ['', 0];

var timer_cur = 0.0;

var x = canvas.width/2 - side/2;
var y = canvas.height/2 - side/2 + canvas.height/4;
ctx.strokeRect(x,y,side,side);


var jump_level = 0;
var jump_step = 3;
var jump_vertical_ratio = 1; // koef
var jump_long_cur = 0;
var jump_long_end = 20;

var action_delay = 0.0003;
    


function timer() {
  timer_cur += 0.00001;
  //ctx.clearRect(10,50,1000,60);
  //ctx.fillText(timer_cur, 10, 50);
  
  requestAnimationFrame(timer);
}
timer();

function press_key(e){
  var keyCode = (typeof e.which == "number") ? e.which : e.keyCode 
  
  
  
  prew_keycode_ar = cur_keycode_ar.slice(0);
  cur_keycode_ar[0] = keyCode;
  cur_keycode_ar[1] = timer_cur;
  
  if(cur_keycode_ar[1] - prew_keycode_ar[1] < action_delay && prew_keycode_ar[1] != 0){
    
    if(prew_keycode_ar[0] == 37 && cur_keycode_ar[0] == 39) {
      beat(); 
    }
    
  }
  
  
  
  if([37, 38, 39, 40].includes(keyCode)){    
    
    switch (keyCode){  
    case 37:
      left();
      break;
    case 38:
      up();
      break;
    case 39:
      right();
      break;
    case 40:
      //down();
      break;  
    }
  }
  
  else{
    beat();  
  }
}

function left(){      
  if(x > side/2){
    clean_hero();
    x-=walk_step;
    draw_hero();
  }  
      
}

function up(){   
  
  function jump_up(){
    if(jump_level < 15){ 
      
      clean_hero();
      y-=jump_step*jump_vertical_ratio;
      draw_hero();
      
      jump_level++;
      req = requestAnimationFrame(jump_up);
    }
    
    else{
      
      cancelAnimationFrame(req);      
   
      function jump_stay_down(){
        if(jump_long_cur < jump_long_end && x<canvas.width-100+side){ 
      
          clean_hero();
          x+=jump_step;
          draw_hero();
      
          jump_long_cur++;
          req = requestAnimationFrame(jump_stay_down);
        }  
        else{
          jump_long_cur = 0;
          cancelAnimationFrame(req); 
        
          function jump_down(){              
            if(jump_level > 0){ 
          
              clean_hero();
              y+=jump_step*jump_vertical_ratio;
              draw_hero();
          
              jump_level -= 1;                
              req = requestAnimationFrame(jump_down)
            }  
            else   
              cancelAnimationFrame(req);            
        }
        jump_down();      
      }
    }
    jump_stay_down();          
  }
  }
  if(jump_level == 0)
    jump_up();
}

function right(){  
  if(x < canvas.width-100+side){
    clean_hero(); 
    x+=walk_step;
    draw_hero();
  }  
      
}

function down(){  
  if(y < canvas.height-100){
    clean_hero();    
    y+=walk_step;
    draw_hero();
  }  
      
}


// ACTIONS

function beat(){
  canvas_color('pink')
  setTimeout(beat_end, 50);
  
  function beat_end(){
    canvas_color('green');
  }  
}  



//  HERO RENDERING

function clean_hero(){
  ctx.clearRect(x-1,y-1,side+2,side+2);
}

function draw_hero(){
  ctx.strokeRect(x,y,side,side);
}
      

//EXCEPTIONS_____________________________________

function exc(){
  canvas_color('PaleGreen');
}

function canvas_color(color) {
  canvas.style = 'background-color: ' + color + ';';
}


// SPARE // Запасное_____________________________

// JUMP+BEAT
  /*
      function jump_stay(){
        if(jump_long < 60){ 
      
          clean_hero();
          x+=jump_step;
          draw_hero();
      
          jump_long++;
          req = requestAnimationFrame(jump_stay);
        }  
      }  
  */  
