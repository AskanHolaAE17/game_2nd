
//  HERO RENDERING

function clean_hero(){
  ctx.clearRect(x-1,y-1,side+2,side+2);
}

function draw_hero(){
  ctx.strokeRect(x,y,side,side);
} 
