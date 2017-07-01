function up(){   
  
  if(jump_level == 0)
    jump_up();
} 



  function jump_up(){
    if(jump_level < 15){ 
      
      clean_hero();
      y-=jump_scale*jump_vertical_ratio;
      draw_hero();
      
      jump_level++;
      req = requestAnimationFrame(jump_up);
    }
    
    else{
      
      cancelAnimationFrame(req);      
   
    jump_stay_down();          
    }
  }
  


      function jump_stay_down(){
        if(jump_long_cur < jump_long_end && x<canvas.width-100+side){ 
      
          clean_hero();
          x+=jump_scale;
          draw_hero();
      
          jump_long_cur++;
          req = requestAnimationFrame(jump_stay_down);
        }  
        else{
          jump_long_cur = 0;
          cancelAnimationFrame(req); 
        
        jump_down();      
        }
      }  
    
    
    
          function jump_down(){              
            if(jump_level > 0){ 
          
              clean_hero();
              y+=jump_scale*jump_vertical_ratio;
              draw_hero();
          
              jump_level -= 1;                
              req = requestAnimationFrame(jump_down)
            }  
            else   
              cancelAnimationFrame(req);   
            
          }    




