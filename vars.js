var req;

var walk_step = 5;
var side = 40;   // top-right-bottom-left

var prew_keycode_ar = ['', 0];
var cur_keycode_ar  = ['', 0];

var timer_cur = 0.0;

var x = canvas.width/2 - side/2;
var y = canvas.height/2 - side/2 + canvas.height/4;
ctx.strokeRect(x,y,side,side); 

var jump_level = 0;
var jump_scale = 3;  
var jump_vertical_ratio = 1; // koef
var jump_long_cur = 0;
var jump_long_end = 20;

var action_delay = 0.0003;
