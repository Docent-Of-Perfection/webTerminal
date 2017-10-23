//use .val() for inputs, .text() for elements
//wow really not a fan of nested callback functions and setTimeout()s.
setTimeout(function(){
        $(".inputSim0").typed({
            strings: ["apt install lynx > /dev/null"],
            typeSpeed: 50, // typing speed
            loop: false,
          callback:function(){

            setTimeout(function(){$('.t1').show()
            $('.inputSim1').typed({
              strings: ["lynx ininger.me/about"],
              typeSpeed: 45,
              loop:false,
           callback:function(){
             setTimeout(function(){
             $('.web').show();
     $(document).keyup(function(e) {
       if(e.which == 81){
         $('.web, .t1, .t0').remove();
         $('.t2').show();
         $(".inputSim2").typed({
            strings: ["Thanks for checking my site out. Have a great day! Or don't, I'm not the boss of you."],
            typeSpeed: 40, // typing speed
            loop: false,
           callback:function(){}
         });
       }
     })
       }, 500);
         }
            });
            }, 500);

          }
        });

    }, 0);
