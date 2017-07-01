document.onkeydown = press_key;


function left(){      
  if(x > side/2){
    clean_hero();
    x-=walk_step;
    draw_hero();
  }  
      
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










