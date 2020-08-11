SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });
  
  $(document).ready(function() { 
    SC.stream('/tracks/215112973',function(sound){ 
       //function for dtart
        $('#start').click(function(e) {
            e.preventDefault();
            sound.start();
          });
          //function for stop 
          $('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
 
    });
   });  