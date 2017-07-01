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
