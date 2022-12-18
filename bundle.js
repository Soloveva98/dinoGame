(()=>{"use strict";var e=document.querySelector("canvas"),i=document.querySelector("#scoreEl"),t=document.querySelector("#coinEl"),n=document.querySelector("#heartEl"),s=document.querySelector(".level"),o=document.querySelector(".bg"),a=document.querySelector(".win"),g=document.querySelector("#scoreWin"),r=document.querySelector("#coinWin"),m=document.querySelector("#heartWin"),h=document.querySelector(".restart");function l(i){var t=new Image;return t.src=i,e.append(t),t}var y=l("./../static/level_1/platform.png"),x=l("./../static/level_1/player.png"),p=l("./../static/level_1/playerLeft.png"),w=l("./../static/level_1/playerCollisionLeft.png"),c=l("./../static/level_1/playerCollisionRight.png"),u=l("./../static/level_1/background.png"),f=l("./../static/level_1/platformSmall.png"),d=l("./../static/level_1/platformMini.png"),v=l("./../static/level_1/stone.png"),P=l("./../static/level_1/unit.png"),_=l("./../static/level_1/boss.png"),S=l("./../static/level_1/bossRight.png"),L=l("./../static/level_1/win.png"),R=l("./../static/level_1/winMountain.png"),M=l("./../static/level_2/platform.png"),T=l("./../static/level_2/player.png"),E=l("./../static/level_2/playerLeft.png"),H=l("./../static/level_2/playerCollisionLeft.png"),b=l("./../static/level_2/playerCollisionRight.png"),k=l("./../static/level_2/background.png"),I=l("./../static/level_2/platformSmall.png"),q=l("./../static/level_2/platformMini.png"),C=l("./../static/level_2/stone.png"),W=l("./../static/level_2/unit.png"),j=l("./../static/level_2/boss.png"),O=l("./../static/level_2/win.png"),A=l("./../static/level_2/winMountain.png"),F=l("./../static/level_3/platform.png"),N=l("./../static/level_3/player.png"),z=l("./../static/level_3/playerLeft.png"),B=l("./../static/level_3/playerCollisionLeft.png"),D=l("./../static/level_3/playerCollisionRight.png"),G=l("./../static/level_3/background.png"),J=l("./../static/level_3/platformSmall.png"),K=l("./../static/level_3/platformMini.png"),Q=l("./../static/level_3/stone.png"),U=l("./../static/level_3/unit.png"),V=l("./../static/level_3/unitRight.png"),X=l("./../static/level_3/boss.png"),Y=l("./../static/level_3/bossRight.png"),Z=l("./../static/level_3/win.png"),$=l("./../static/level_3/winMountain.png");function ee(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function ie(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function te(e,i,t){return i&&ie(e.prototype,i),t&&ie(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var ne=e.getContext("2d");e.width=1024,e.height=590;var se,oe,ae=0,ge=0,re=100,me=!1,he=0,le=function(){function e(i){var t=i.x,n=i.y,s=i.image;ee(this,e),this.position={x:t,y:n},this.image=s,this.width=s.width,this.height=s.height}return te(e,[{key:"draw",value:function(){ne.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}}]),e}(),ye=function(){function e(i){var t=i.x,n=i.y,s=i.image;ee(this,e),this.position={x:t,y:n},this.image=s,this.width=s.width,this.height=s.height}return te(e,[{key:"draw",value:function(){ne.drawImage(this.image,this.position.x,this.position.y)}}]),e}(),xe=function(){function i(e){var t=e.image,n=e.imageleft,s=e.collisionRight,o=e.collisionLeft;ee(this,i),this.speed=10,this.position={x:100,y:100},this.movement={x:0,y:0},this.width=80,this.height=80,this.image=t,this.frames=0,this.sprites={right:t,left:n,collision:{right:s,left:o}},this.currentSprite=this.sprites.right}return te(i,[{key:"draw",value:function(){this.currentSprite!==this.sprites.collision.right&&this.currentSprite!==this.sprites.collision.left?ne.drawImage(this.currentSprite,this.position.x,this.position.y,this.width,this.height):ne.drawImage(this.currentSprite,175*this.frames,0,171,175,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.currentSprite!==this.sprites.collision.right&&this.currentSprite!==this.sprites.collision.left||(this.frames++,this.frames>15&&(this.frames=0)),this.draw(),this.position.x+=this.movement.x,this.position.y+=this.movement.y,this.position.y+this.height+this.movement.y<=e.height&&(this.movement.y+=1.8)}}]),i}(),pe=function(){function e(i){var t=i.x,n=i.y;ee(this,e),this.position={x:t,y:n},this.width=35,this.height=35,this.image=l("./../static/coin.png")}return te(e,[{key:"draw",value:function(){ne.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}}]),e}(),we=function(){function e(i){var t=i.x,n=i.y,s=i.image;ee(this,e),this.position={x:t,y:n},this.width=80,this.height=60,this.image=s}return te(e,[{key:"draw",value:function(){ne.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}}]),e}(),ce=function(){function e(i){var t=i.x,n=i.y,s=i.maxPos,o=i.minPos,a=i.image,g=i.imageRight;ee(this,e),this.speed=2,this.position={x:t,y:n},this.maxPos=s,this.minPos=o,this.image=a,this.width=a.width,this.height=a.height,this.sprites={left:a,right:g},this.currentSprite=this.sprites.left}return te(e,[{key:"draw",value:function(){ne.drawImage(this.currentSprite,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.draw(),this.position.x>this.maxPos?(this.currentSprite=this.sprites.left,this.speed=-this.speed):this.position.x<this.minPos&&(this.currentSprite=this.sprites.right,this.speed=-this.speed),this.position.x+=this.speed}}]),e}(),ue={right:{pressed:!1},left:{pressed:!1},top:{pressed:!1}},fe=1;window.localStorage.getItem("level")&&(fe=Number(window.localStorage.getItem("level")));var de=[],ve=[],Pe=[],_e=[],Se=[],Le={1:{init:function(){oe=new xe({image:x,imageleft:p,collisionLeft:w,collisionRight:c}),ve=[new ye({x:-1,y:-1,image:u}),new ye({x:7240,y:300,image:L}),new ye({x:7260,y:300,image:R})],de=[new le({x:2273,y:400,image:d}),new le({x:4820,y:400,image:d}),new le({x:8524,y:400,image:d}),new le({x:8778,y:350,image:d}),new le({x:9030,y:300,image:d}),new le({x:9320,y:350,image:d}),new le({x:10067,y:350,image:d}),new le({x:4008,y:450,image:f}),new le({x:5736,y:450,image:f}),new le({x:5987,y:450,image:f}),new le({x:-1,y:500,image:y}),new le({x:565,y:500,image:y}),new le({x:1230,y:500,image:y}),new le({x:1998,y:500,image:y}),new le({x:2664,y:500,image:y}),new le({x:3330,y:500,image:y}),new le({x:4153,y:500,image:y}),new le({x:5070,y:500,image:y}),new le({x:6240,y:500,image:y}),new le({x:6806,y:500,image:y}),new le({x:7552,y:500,image:y}),new le({x:8250,y:500,image:y}),new le({x:8816,y:500,image:y}),new le({x:9382,y:500,image:y}),new le({x:10350,y:500,image:y})],Pe=[new pe({x:600,y:450}),new pe({x:820,y:450}),new pe({x:1700,y:450}),new pe({x:2330,y:350}),new pe({x:2800,y:450}),new pe({x:3500,y:450}),new pe({x:3940,y:350}),new pe({x:4875,y:350}),new pe({x:5795,y:400}),new pe({x:6045,y:400}),new pe({x:8850,y:450}),new pe({x:9e3,y:450}),new pe({x:9150,y:450}),new pe({x:9300,y:450}),new pe({x:9450,y:450})],_e=[new we({x:700,y:443,image:v}),new we({x:3e3,y:443,image:v}),new we({x:7e3,y:443,image:v})],Se=[new ce({x:1700,y:443,maxPos:1750,minPos:1250,image:P,imageRight:P}),new ce({x:2450,y:443,maxPos:2500,minPos:2e3,image:P,imageRight:P}),new ce({x:4450,y:443,maxPos:4650,minPos:4180,image:P,imageRight:P}),new ce({x:6450,y:443,maxPos:6940,minPos:6250,image:P,imageRight:P}),new ce({x:8450,y:443,maxPos:9100,minPos:8250,image:P,imageRight:P}),new ce({x:9800,y:408,maxPos:9850,minPos:9300,image:_,imageRight:S})],ae=0,i.innerHTML=ae,ge=0,t.innerHTML=ge,re=100,n.innerHTML=re,se=setInterval((function(){ae+=10,i.innerHTML=ae}),1e4),he=0}},2:{init:function(){oe=new xe({image:T,imageleft:E,collisionLeft:H,collisionRight:b}),ve=[new ye({x:-2,y:-1,image:k}),new ye({x:7230,y:300,image:O}),new ye({x:7260,y:300,image:A})],de=[new le({x:2804,y:400,image:q}),new le({x:3262,y:350,image:q}),new le({x:6318,y:350,image:q}),new le({x:7275,y:350,image:q}),new le({x:9228,y:350,image:q}),new le({x:1452,y:450,image:I}),new le({x:1752,y:450,image:I}),new le({x:6070,y:450,image:I}),new le({x:6573,y:450,image:I}),new le({x:6973,y:450,image:I}),new le({x:-1,y:500,image:M}),new le({x:650,y:500,image:M}),new le({x:2053,y:500,image:M}),new le({x:3059,y:500,image:M}),new le({x:3709,y:500,image:M}),new le({x:4566,y:500,image:M}),new le({x:5217,y:500,image:M}),new le({x:7600,y:500,image:M}),new le({x:8435,y:500,image:M}),new le({x:9500,y:500,image:M}),new le({x:10340,y:500,image:M})],Pe=[new pe({x:900,y:450}),new pe({x:1e3,y:450}),new pe({x:1100,y:450}),new pe({x:1510,y:400}),new pe({x:1810,y:400}),new pe({x:2860,y:350}),new pe({x:3320,y:300}),new pe({x:4450,y:300}),new pe({x:6130,y:400}),new pe({x:6375,y:300}),new pe({x:6630,y:400}),new pe({x:7030,y:400}),new pe({x:7330,y:300}),new pe({x:9285,y:300})],_e=[new we({x:760,y:444,image:C}),new we({x:3800,y:444,image:C}),new we({x:5500,y:444,image:C}),new we({x:7900,y:444,image:C})],Se=[new ce({x:2450,y:443,maxPos:2650,minPos:2050,image:W,imageRight:W}),new ce({x:3150,y:443,maxPos:3750,minPos:3060,image:W,imageRight:W}),new ce({x:4e3,y:443,maxPos:4300,minPos:3890,image:W,imageRight:W}),new ce({x:4700,y:443,maxPos:5400,minPos:4560,image:W,imageRight:W}),new ce({x:8600,y:443,maxPos:9e3,minPos:8450,image:W,imageRight:W}),new ce({x:9600,y:408,maxPos:10050,minPos:9500,image:j,imageRight:W})],re=100,n.innerHTML=re,se=setInterval((function(){ae+=10,i.innerHTML=ae}),1e4),he=0}},3:{init:function(){oe=new xe({image:N,imageleft:z,collisionLeft:B,collisionRight:D}),ve=[new ye({x:-16,y:-17,image:G}),new ye({x:7220,y:300,image:Z}),new ye({x:7250,y:300,image:$})],de=[new le({x:753,y:350,image:K}),new le({x:1024,y:400,image:K}),new le({x:2709,y:350,image:K}),new le({x:3009,y:300,image:K}),new le({x:3360,y:300,image:K}),new le({x:5917,y:400,image:K}),new le({x:6169,y:350,image:K}),new le({x:6419,y:300,image:K}),new le({x:6529,y:300,image:K}),new le({x:2107,y:450,image:J}),new le({x:2410,y:450,image:J}),new le({x:3710,y:450,image:J}),new le({x:4816,y:450,image:J}),new le({x:6870,y:450,image:J}),new le({x:8726,y:450,image:J}),new le({x:8976,y:450,image:J}),new le({x:9229,y:450,image:J}),new le({x:-1,y:500,image:F}),new le({x:1305,y:500,image:F}),new le({x:4012,y:500,image:F}),new le({x:5116,y:500,image:F}),new le({x:7172,y:500,image:F}),new le({x:7974,y:500,image:F}),new le({x:9500,y:500,image:F}),new le({x:10332,y:500,image:F})],Pe=[new pe({x:810,y:300}),new pe({x:1080,y:350}),new pe({x:2165,y:400}),new pe({x:2465,y:400}),new pe({x:2765,y:300}),new pe({x:3065,y:250}),new pe({x:3415,y:250}),new pe({x:3765,y:400}),new pe({x:4875,y:400}),new pe({x:5975,y:350}),new pe({x:6225,y:300}),new pe({x:6455,y:250}),new pe({x:6600,y:250}),new pe({x:6928,y:400}),new pe({x:8785,y:400}),new pe({x:9030,y:400}),new pe({x:9285,y:400})],_e=[new we({x:1750,y:442,image:Q}),new we({x:8300,y:442,image:Q})],Se=[new ce({x:1500,y:443,maxPos:1680,minPos:1300,image:U,imageRight:V}),new ce({x:4100,y:443,maxPos:4570,minPos:4e3,image:U,imageRight:V}),new ce({x:5350,y:443,maxPos:5700,minPos:5100,image:U,imageRight:V}),new ce({x:7300,y:443,maxPos:7750,minPos:7200,image:U,imageRight:V}),new ce({x:9800,y:380,maxPos:10050,minPos:9500,image:X,imageRight:Y})],re=100,n.innerHTML=re,se=setInterval((function(){ae+=10,i.innerHTML=ae}),1e4),he=0}}};function Re(e,i,t){if(e.position.x+e.width-10>=i.position.x&&e.position.x+e.width<=i.position.x+i.width&&e.position.y+e.height>=i.position.y)e.currentSprite=e.sprites.collision.right,setTimeout((function(){e.currentSprite=e.sprites.right}),2e3),"stone"===t?e.position.x-=30:"unit"===t&&(i.image===P||i.image===W||i.image===U?(e.position.x-=80,re-=20,n.innerHTML=re):i.image!==_&&i.image!==j&&i.image!==X||(e.position.x-=80,re-=50,n.innerHTML=re));else{if(!(e.position.x+10<=i.position.x+i.width&&e.position.x>i.position.x&&e.position.y+e.height>=i.position.y))return!1;e.currentSprite=e.sprites.collision.left,setTimeout((function(){e.currentSprite=e.sprites.left}),3e3),"stone"===t?e.position.x+=30:"unit"===t&&(i.image===P||i.image===W||i.image===U?(e.position.x+=80,re-=20,n.innerHTML=re):i.image!==_&&i.image!==j&&i.image!==X||(e.position.x+=80,re-=50,n.innerHTML=re))}}function Me(e,t,n){e.position.x>t.position.x+t.width&&e.position.x<t.position.x+t.width+11&&ue.right.pressed&&("stone"===n?ae+=10:"unit"===n&&(ae+=30),i.innerHTML=ae)}function Te(){me||(requestAnimationFrame(Te),ne.fillStyle="black",ne.fillRect(0,0,e.width,e.height),function(){ve.forEach((function(e){e.draw()})),de.forEach((function(e){e.draw()}));for(var e=Pe.length-1;e>=0;e--){var i=Pe[e];i.draw(),Math.hypot(i.position.x-oe.position.x,i.position.y-oe.position.y)<i.width/2+oe.width/2&&(Pe.splice(e,1),ge+=10,t.innerHTML=ge)}_e.forEach((function(e){e.draw(),Re(oe,e,"stone"),Me(oe,e,"stone")})),Se.forEach((function(e){e.update(),Re(oe,e,"unit"),Me(oe,e,"unit")}))}(),oe.update(),ue.right.pressed&&oe.position.x<400?oe.movement.x=oe.speed:ue.left.pressed&&oe.position.x>100||ue.left.pressed&&0===he&&oe.position.x>0?oe.movement.x=-oe.speed:(oe.movement.x=0,ue.right.pressed?(he+=1)<ve[0].position.x+ve[0].width-350?(de.forEach((function(e){e.position.x-=oe.speed})),ve.forEach((function(e){e.position.x-=.66*oe.speed})),Pe.forEach((function(e){e.position.x-=oe.speed})),_e.forEach((function(e){e.position.x-=oe.speed})),Se.forEach((function(e){e.position.x-=oe.speed,e.minPos-=oe.speed,e.maxPos-=oe.speed}))):he>ve[0].position.x+ve[0].width-350&&(oe.movement.x=oe.speed):ue.left.pressed&&he>0&&(he-=1,de.forEach((function(e){e.position.x+=oe.speed})),ve.forEach((function(e){e.position.x+=.66*oe.speed})),Pe.forEach((function(e){e.position.x+=oe.speed})),_e.forEach((function(e){e.position.x+=oe.speed})),Se.forEach((function(e){e.position.x+=oe.speed,e.minPos+=oe.speed,e.maxPos+=oe.speed})))),de.forEach((function(e){oe.position.y+oe.height<=e.position.y&&oe.position.y+oe.height+oe.movement.y>=e.position.y&&oe.position.x+oe.width>=e.position.x&&oe.position.x<=e.position.x+e.width&&(oe.movement.y=0)})),(oe.position.y>e.height||0===re)&&(clearInterval(se),Le[fe].init()),oe.position.x+oe.width>=ve[2].position.x&&0===oe.movement.y&&fe<=3&&function(){if(3===fe)return me=!0,g.innerHTML=ae,r.innerHTML=ge,m.innerHTML=re,o.style.opacity=1,a.style.opacity=1,window.localStorage.removeItem("level"),!0;me=!0,fe++,o.style.opacity=1,s.innerHTML="level ".concat(fe),window.localStorage.setItem("level",fe),setTimeout((function(){s.innerHTML="",o.style.opacity=0,me=!1,Le[fe].init(),Te()}),2e3)}())}window.onload=function(){console.log("onload"),Le[fe].init(),Te()},addEventListener("keydown",(function(e){var i=e.keyCode;if(65===i||37===i)ue.left.pressed=!0,oe.currentSprite=oe.sprites.left;else if(68===i||39===i)ue.right.pressed=!0,oe.currentSprite=oe.sprites.right;else if(87===i||38===i){if(event.repeat)return;ue.top.pressed=!0,oe.movement.y-=25}})),addEventListener("keyup",(function(e){var i=e.keyCode;65===i||37===i?ue.left.pressed=!1:68===i||39===i?ue.right.pressed=!1:87!==i&&38!==i||(ue.top.pressed=!1)})),h.addEventListener("click",(function(){fe=1,me=!1,s.innerHTML="",o.style.opacity=0,a.style.opacity=0,Le[fe].init(),Te()}))})();