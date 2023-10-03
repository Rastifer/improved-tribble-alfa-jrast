// A $( document ).ready() block.
// $ = jQuery world

$( document ).ready(function() { 
  console.log( "ready!" );
  //what happens when you click the button
  
  $('#btnUserName').click(function() {
    console.log("Button Clicked");
// var x;
// var x = ""; //string
// var y = 8;
// var z = TRUE;
    
    let fname = $('#fname').val();

    console.log(fname);
    // $('#fname').val()
      
    let greeting;
    greeting = "Hey there, " + fname + "! " + "I hope you're doing well!"
    
   $('#ThisButton').text(greeting);
   
     
  });
  
});