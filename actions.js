
// ACTIONS

function beat(){
  canvas_color('pink')
  setTimeout(beat_end, 50);
  
  function beat_end(){
    canvas_color('green');
  }  
}   
