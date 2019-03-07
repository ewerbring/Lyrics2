$(".flex-item").click(function(){
  $(".wedding").toggle();
});

 $('#changeframebiggie').click(function () {
      $('#declinedframe').attr('src', 'https://3dwarehouse.sketchup.com/embed.html?mid=a8fa2f06-802f-41d3-9cca-3d5c57b7f0e2');
      $('#text').html("Super Nintendo, Sega Genesis<br>When I was dead broke, man, I couldn't picture this<br>50-inch screen, money-green leather sofa<br>Got two rides, a limousine with a chauffeur<br>Phone bill about two G's flat<br>No need to worry, my accountant handles that<br>And my whole crew is loungin'<br>Celebratin' every day, no more public housin'<br>Thinkin' back on my one-room shack<br>Now my mom pimps a Ac' with minks on her back<br>And she loves to show me off of course<br>Smiles every time my face is up in The Source<br>We used to fuss when the landlord dissed us<br>No heat, wonder why Christmas missed us<br>Birthdays was the worst days<br>Now we sip Champagne when we thirsty<br>Uh, damn right, I like the life I live<br>'Cause I went from negative to positive<br>And it's all (It's all good)<br>And if you don't know, now you know, you know<br>");
      $('#lat').attr('src', 'juicy.m4a');
      $('#list2').hide();
      $('#list3').hide();
      $('#list4').hide();
      $('#list').show();
  });

  $('#changeframemaskin').click(function () {
       $('#declinedframe').attr('src', 'https://3dwarehouse.sketchup.com/embed.html?mid=ee9747c8-3d46-4701-af00-b84fc7912300');
        $('#text').html("The machines are our friends<br>Without them, no paradise<br>The machines are our friends<br>Naturally<br><br>Press a button<br>And the lamp is shining<br>Press a button<br>When you are feeling cold<br>Press a button<br><br>Press a button<br>The clothes get washed<br>Press a button<br>The mouths get fed<br>Press a button<br><br>The machines are our friends<br>Without them, no paradise<br>The machines are our friends<br>Naturally");
        $('#lat').attr('src', 'maskinerna1.m4a');
        $('#list').hide();
        $('#list3').hide();
        $('#list4').hide();
        $('#list2').show();
   });

 $('#changeframeman').click(function () {
      $('#declinedframe').attr('src', 'https://3dwarehouse.sketchup.com/embed.html?mid=e0574de9-e017-44e1-aa32-b01fdf7827cc');
      $('#text').text('An object is the result of looking at something which in itself have no quality or charm. I pick something which in itself have no meaning at all. I disregard completely the aesthetic quality of the object. Im against craftsmanship. The world is full of wonderful craftsmen. But there are very few practical dreamers.');
      $('#lat').attr('src', 'manray.mp3');
      $('#list').hide();
      $('#list2').hide();
      $('#list4').hide();
      $('#list3').show();
  });
 $('#changeframead').click(function () {
      $('#declinedframe').attr('src', 'https://3dwarehouse.sketchup.com/embed.html?mid=711803a6-5a94-42ad-950b-14dd8a5395c6');
      $('#text').html("Recently I was looking through my little black book and I realized I didn't have too many friends.<br><br>So I went out and bought some Tommy Hilfiger cologne and put it on and now everyone likes me and I have tons of friends.<br><br>And then I took a look at my physique and I noticed I was really skinny so I bought some Calvin Klein underwear and now I'm buff and good looking and get laid all the time.<br><br>And I've always wanted to be more rugged so I started smoking Marlboros.<br><br>And I'd like to be original so I got myself an iMac.<br><br>And I could be more swab and debonaire so I started to make martinis with sky vodka.<br><br>And if I want to feel wacky and zany id get a burger at jack and the box.<br><br>And I never had a positive attitude about life but my new Nikes keep me optimistic and now I'm a real go-getter.<br><br>Anyway, now my life is perfect and I'm a much happier person.");
      $('#lat').attr('src', 'adbusters.m4a');
      $('#list').hide();
      $('#list2').hide();
      $('#list3').hide();
      $('#list4').show();
  });

// When one artist is clicked
// call function
// function gets acces to divs
//replace innerhtml with content from clicked object
//event deligation
//assign event to whole scrollbox 2
