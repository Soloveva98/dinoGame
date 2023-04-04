(()=>{"use strict";var e=document.querySelector("canvas"),i=document.querySelector(".coin__img"),t=document.querySelector(".life__img"),n=document.querySelector("#scoreEl"),o=document.querySelector("#coinEl"),s=document.querySelector("#heartEl"),a=document.querySelector(".level"),g=document.querySelector(".bg"),r=document.querySelector(".win"),m=document.querySelector("#scoreWin"),l=document.querySelector("#coinWin"),h=document.querySelector("#heartWin"),y=document.querySelector(".restart"),p=document.URL;function x(e){var i=new Image;return i.src=p+e,i.onload=function(){console.log("imageLoad")},i}var w=x("static/coin.png"),c=x("static/coin.png"),u=x("static/heart.png"),f=x("static/heart.png");i.append(w),t.append(u),l.before(c),h.before(f);var d=x("static/level_1/platform.png"),v=x("static/level_1/player.png"),P=x("static/level_1/playerLeft.png"),_=x("static/level_1/playerCollisionLeft.png"),L=x("static/level_1/playerCollisionRight.png"),S=x("static/level_1/background.png"),M=x("static/level_1/platformSmall.png"),R=x("static/level_1/platformMini.png"),T=x("static/level_1/stone.png"),H=x("static/level_1/unit.png"),E=x("static/level_1/boss.png"),b=x("static/level_1/bossRight.png"),k=x("static/level_1/win.png"),I=x("static/level_1/winMountain.png"),q=x("static/level_2/platform.png"),C=x("static/level_2/player.png"),W=x("static/level_2/playerLeft.png"),j=x("static/level_2/playerCollisionLeft.png"),O=x("static/level_2/playerCollisionRight.png"),A=x("static/level_2/background.png"),F=x("static/level_2/platformSmall.png"),N=x("static/level_2/platformMini.png"),U=x("static/level_2/stone.png"),z=x("static/level_2/unit.png"),B=x("static/level_2/boss.png"),D=x("static/level_2/win.png"),G=x("static/level_2/winMountain.png"),J=x("static/level_3/platform.png"),K=x("static/level_3/player.png"),Q=x("static/level_3/playerLeft.png"),V=x("static/level_3/playerCollisionLeft.png"),X=x("static/level_3/playerCollisionRight.png"),Y=x("static/level_3/background.png"),Z=x("static/level_3/platformSmall.png"),$=x("static/level_3/platformMini.png"),ee=x("static/level_3/stone.png"),ie=x("static/level_3/unit.png"),te=x("static/level_3/unitRight.png"),ne=x("static/level_3/boss.png"),oe=x("static/level_3/bossRight.png"),se=x("static/level_3/win.png"),ae=x("static/level_3/winMountain.png");function ge(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function re(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function me(e,i,t){return i&&re(e.prototype,i),t&&re(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var le=e.getContext("2d");e.width=1024,e.height=590;var he,ye,pe=0,xe=0,we=100,ce=0,ue=0,fe=!1,de=0,ve=function(){function e(i){var t=i.x,n=i.y,o=i.image;ge(this,e),this.position={x:t,y:n},this.image=o,this.width=o.width,this.height=o.height}return me(e,[{key:"draw",value:function(){le.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}}]),e}(),Pe=function(){function e(i){var t=i.x,n=i.y,o=i.image;ge(this,e),this.position={x:t,y:n},this.image=o,this.width=o.width,this.height=o.height}return me(e,[{key:"draw",value:function(){le.drawImage(this.image,this.position.x,this.position.y)}}]),e}(),_e=function(){function i(e){var t=e.image,n=e.imageleft,o=e.collisionRight,s=e.collisionLeft;ge(this,i),this.speed=10,this.position={x:100,y:100},this.movement={x:0,y:0},this.width=80,this.height=80,this.image=t,this.frames=0,this.sprites={right:t,left:n,collision:{right:o,left:s}},this.currentSprite=this.sprites.right}return me(i,[{key:"draw",value:function(){this.currentSprite!==this.sprites.collision.right&&this.currentSprite!==this.sprites.collision.left?le.drawImage(this.currentSprite,this.position.x,this.position.y,this.width,this.height):le.drawImage(this.currentSprite,175*this.frames,0,171,175,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.currentSprite!==this.sprites.collision.right&&this.currentSprite!==this.sprites.collision.left||(this.frames++,this.frames>15&&(this.frames=0)),this.draw(),this.position.x+=this.movement.x,this.position.y+=this.movement.y,this.position.y+this.height+this.movement.y<=e.height&&(this.movement.y+=1.8)}}]),i}(),Le=function(){function e(i){var t=i.x,n=i.y;ge(this,e),this.position={x:t,y:n},this.width=35,this.height=35,this.image=x("static/coin.png")}return me(e,[{key:"draw",value:function(){le.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}}]),e}(),Se=function(){function e(i){var t=i.x,n=i.y,o=i.image;ge(this,e),this.position={x:t,y:n},this.width=80,this.height=60,this.image=o}return me(e,[{key:"draw",value:function(){le.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}}]),e}(),Me=function(){function e(i){var t=i.x,n=i.y,o=i.maxPos,s=i.minPos,a=i.image,g=i.imageRight;ge(this,e),this.speed=2,this.position={x:t,y:n},this.maxPos=o,this.minPos=s,this.image=a,this.width=a.width,this.height=a.height,this.sprites={left:a,right:g},this.currentSprite=this.sprites.left}return me(e,[{key:"draw",value:function(){le.drawImage(this.currentSprite,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.draw(),this.position.x>this.maxPos?(this.currentSprite=this.sprites.left,this.speed=-this.speed):this.position.x<this.minPos&&(this.currentSprite=this.sprites.right,this.speed=-this.speed),this.position.x+=this.speed}}]),e}(),Re={right:{pressed:!1},left:{pressed:!1},top:{pressed:!1}},Te=1;window.localStorage.getItem("level")&&(Te=Number(window.localStorage.getItem("level")));var He=[],Ee=[],be=[],ke=[],Ie=[],qe={1:{init:function(){ye=new _e({image:v,imageleft:P,collisionLeft:_,collisionRight:L}),Ee=[new Pe({x:-1,y:-1,image:S}),new Pe({x:7240,y:300,image:k}),new Pe({x:7260,y:300,image:I})],He=[new ve({x:2273,y:400,image:R}),new ve({x:4820,y:400,image:R}),new ve({x:8524,y:400,image:R}),new ve({x:8778,y:350,image:R}),new ve({x:9030,y:300,image:R}),new ve({x:9320,y:350,image:R}),new ve({x:10067,y:350,image:R}),new ve({x:4008,y:450,image:M}),new ve({x:5736,y:450,image:M}),new ve({x:5987,y:450,image:M}),new ve({x:-1,y:500,image:d}),new ve({x:565,y:500,image:d}),new ve({x:1230,y:500,image:d}),new ve({x:1998,y:500,image:d}),new ve({x:2664,y:500,image:d}),new ve({x:3330,y:500,image:d}),new ve({x:4153,y:500,image:d}),new ve({x:5070,y:500,image:d}),new ve({x:6240,y:500,image:d}),new ve({x:6806,y:500,image:d}),new ve({x:7552,y:500,image:d}),new ve({x:8250,y:500,image:d}),new ve({x:8816,y:500,image:d}),new ve({x:9382,y:500,image:d}),new ve({x:10350,y:500,image:d})],be=[new Le({x:600,y:450}),new Le({x:820,y:450}),new Le({x:1700,y:450}),new Le({x:2330,y:350}),new Le({x:2800,y:450}),new Le({x:3500,y:450}),new Le({x:3940,y:350}),new Le({x:4875,y:350}),new Le({x:5795,y:400}),new Le({x:6045,y:400}),new Le({x:8850,y:450}),new Le({x:9e3,y:450}),new Le({x:9150,y:450}),new Le({x:9300,y:450}),new Le({x:9450,y:450})],ke=[new Se({x:700,y:443,image:T}),new Se({x:3e3,y:443,image:T}),new Se({x:7e3,y:443,image:T})],Ie=[new Me({x:1700,y:443,maxPos:1750,minPos:1250,image:H,imageRight:H}),new Me({x:2450,y:443,maxPos:2500,minPos:2e3,image:H,imageRight:H}),new Me({x:4450,y:443,maxPos:4650,minPos:4180,image:H,imageRight:H}),new Me({x:6450,y:443,maxPos:6940,minPos:6250,image:H,imageRight:H}),new Me({x:8450,y:443,maxPos:9100,minPos:8250,image:H,imageRight:H}),new Me({x:9800,y:408,maxPos:9850,minPos:9300,image:E,imageRight:b})],pe=0,n.innerHTML=pe,xe=0,o.innerHTML=xe,we=100,s.innerHTML=we,ce=0,ue=0,he=setInterval((function(){pe+=10,n.innerHTML=pe}),1e4),de=0}},2:{init:function(){ye=new _e({image:C,imageleft:W,collisionLeft:j,collisionRight:O}),Ee=[new Pe({x:-2,y:-1,image:A}),new Pe({x:7230,y:300,image:D}),new Pe({x:7260,y:300,image:G})],He=[new ve({x:2804,y:400,image:N}),new ve({x:3262,y:350,image:N}),new ve({x:6318,y:350,image:N}),new ve({x:7275,y:350,image:N}),new ve({x:9228,y:350,image:N}),new ve({x:1452,y:450,image:F}),new ve({x:1752,y:450,image:F}),new ve({x:6070,y:450,image:F}),new ve({x:6573,y:450,image:F}),new ve({x:6973,y:450,image:F}),new ve({x:-1,y:500,image:q}),new ve({x:650,y:500,image:q}),new ve({x:2053,y:500,image:q}),new ve({x:3059,y:500,image:q}),new ve({x:3709,y:500,image:q}),new ve({x:4566,y:500,image:q}),new ve({x:5217,y:500,image:q}),new ve({x:7600,y:500,image:q}),new ve({x:8435,y:500,image:q}),new ve({x:9500,y:500,image:q}),new ve({x:10340,y:500,image:q})],be=[new Le({x:900,y:450}),new Le({x:1e3,y:450}),new Le({x:1100,y:450}),new Le({x:1510,y:400}),new Le({x:1810,y:400}),new Le({x:2860,y:350}),new Le({x:3320,y:300}),new Le({x:4450,y:300}),new Le({x:6130,y:400}),new Le({x:6375,y:300}),new Le({x:6630,y:400}),new Le({x:7030,y:400}),new Le({x:7330,y:300}),new Le({x:9285,y:300})],ke=[new Se({x:760,y:444,image:U}),new Se({x:3800,y:444,image:U}),new Se({x:5500,y:444,image:U}),new Se({x:7900,y:444,image:U})],Ie=[new Me({x:2450,y:443,maxPos:2650,minPos:2050,image:z,imageRight:z}),new Me({x:3150,y:443,maxPos:3750,minPos:3060,image:z,imageRight:z}),new Me({x:4e3,y:443,maxPos:4300,minPos:3890,image:z,imageRight:z}),new Me({x:4700,y:443,maxPos:5400,minPos:4560,image:z,imageRight:z}),new Me({x:8600,y:443,maxPos:9e3,minPos:8450,image:z,imageRight:z}),new Me({x:9600,y:408,maxPos:10050,minPos:9500,image:B,imageRight:z})],pe=0,n.innerHTML=pe,xe=0,o.innerHTML=xe,we=100,s.innerHTML=we,he=setInterval((function(){pe+=10,n.innerHTML=pe}),1e4),de=0}},3:{init:function(){ye=new _e({image:K,imageleft:Q,collisionLeft:V,collisionRight:X}),Ee=[new Pe({x:-16,y:-17,image:Y}),new Pe({x:7220,y:300,image:se}),new Pe({x:7250,y:300,image:ae})],He=[new ve({x:753,y:350,image:$}),new ve({x:1024,y:400,image:$}),new ve({x:2709,y:350,image:$}),new ve({x:3009,y:300,image:$}),new ve({x:3360,y:300,image:$}),new ve({x:5917,y:400,image:$}),new ve({x:6169,y:350,image:$}),new ve({x:6419,y:300,image:$}),new ve({x:6529,y:300,image:$}),new ve({x:2107,y:450,image:Z}),new ve({x:2410,y:450,image:Z}),new ve({x:3710,y:450,image:Z}),new ve({x:4816,y:450,image:Z}),new ve({x:6870,y:450,image:Z}),new ve({x:8726,y:450,image:Z}),new ve({x:8976,y:450,image:Z}),new ve({x:9229,y:450,image:Z}),new ve({x:-1,y:500,image:J}),new ve({x:1305,y:500,image:J}),new ve({x:4012,y:500,image:J}),new ve({x:5116,y:500,image:J}),new ve({x:7172,y:500,image:J}),new ve({x:7974,y:500,image:J}),new ve({x:9500,y:500,image:J}),new ve({x:10332,y:500,image:J})],be=[new Le({x:810,y:300}),new Le({x:1080,y:350}),new Le({x:2165,y:400}),new Le({x:2465,y:400}),new Le({x:2765,y:300}),new Le({x:3065,y:250}),new Le({x:3415,y:250}),new Le({x:3765,y:400}),new Le({x:4875,y:400}),new Le({x:5975,y:350}),new Le({x:6225,y:300}),new Le({x:6455,y:250}),new Le({x:6600,y:250}),new Le({x:6928,y:400}),new Le({x:8785,y:400}),new Le({x:9030,y:400}),new Le({x:9285,y:400})],ke=[new Se({x:1750,y:442,image:ee}),new Se({x:8300,y:442,image:ee})],Ie=[new Me({x:1500,y:443,maxPos:1680,minPos:1300,image:ie,imageRight:te}),new Me({x:4100,y:443,maxPos:4570,minPos:4e3,image:ie,imageRight:te}),new Me({x:5350,y:443,maxPos:5700,minPos:5100,image:ie,imageRight:te}),new Me({x:7300,y:443,maxPos:7750,minPos:7200,image:ie,imageRight:te}),new Me({x:9800,y:380,maxPos:10050,minPos:9500,image:ne,imageRight:oe})],pe=0,n.innerHTML=pe,xe=0,o.innerHTML=xe,we=100,s.innerHTML=we,he=setInterval((function(){pe+=10,n.innerHTML=pe}),1e4),de=0}}};function Ce(e,i,t){if(e.position.x+e.width-10>=i.position.x&&e.position.x+e.width<=i.position.x+i.width&&e.position.y+e.height>=i.position.y)e.currentSprite=e.sprites.collision.right,setTimeout((function(){e.currentSprite=e.sprites.right}),2e3),"stone"===t?e.position.x-=30:"unit"===t&&(i.image===H||i.image===z||i.image===ie?(e.position.x-=80,we-=20,s.innerHTML=we):i.image!==E&&i.image!==B&&i.image!==ne||(e.position.x-=80,we-=50,s.innerHTML=we));else{if(!(e.position.x+10<=i.position.x+i.width&&e.position.x>i.position.x&&e.position.y+e.height>=i.position.y))return!1;e.currentSprite=e.sprites.collision.left,setTimeout((function(){e.currentSprite=e.sprites.left}),3e3),"stone"===t?e.position.x+=30:"unit"===t&&(i.image===H||i.image===z||i.image===ie?(e.position.x+=80,we-=20,s.innerHTML=we):i.image!==E&&i.image!==B&&i.image!==ne||(e.position.x+=80,we-=50,s.innerHTML=we))}}function We(e,i,t){e.position.x>i.position.x+i.width&&e.position.x<i.position.x+i.width+11&&Re.right.pressed&&("stone"===t?pe+=10:"unit"===t&&(pe+=30),n.innerHTML=pe)}function je(){fe||(requestAnimationFrame(je),le.fillStyle="black",le.fillRect(0,0,e.width,e.height),function(){Ee.forEach((function(e){e.draw()})),He.forEach((function(e){e.draw()}));for(var e=be.length-1;e>=0;e--){var i=be[e];i.draw(),Math.hypot(i.position.x-ye.position.x,i.position.y-ye.position.y)<i.width/2+ye.width/2&&(be.splice(e,1),xe+=10,o.innerHTML=xe)}ke.forEach((function(e){e.draw(),Ce(ye,e,"stone"),We(ye,e,"stone")})),Ie.forEach((function(e){e.update(),Ce(ye,e,"unit"),We(ye,e,"unit")}))}(),ye.update(),Re.right.pressed&&ye.position.x<400?ye.movement.x=ye.speed:Re.left.pressed&&ye.position.x>100||Re.left.pressed&&0===de&&ye.position.x>0?ye.movement.x=-ye.speed:(ye.movement.x=0,Re.right.pressed?(de+=1)<Ee[0].position.x+Ee[0].width-350?(He.forEach((function(e){e.position.x-=ye.speed})),Ee.forEach((function(e){e.position.x-=.66*ye.speed})),be.forEach((function(e){e.position.x-=ye.speed})),ke.forEach((function(e){e.position.x-=ye.speed})),Ie.forEach((function(e){e.position.x-=ye.speed,e.minPos-=ye.speed,e.maxPos-=ye.speed}))):de>Ee[0].position.x+Ee[0].width-350&&(ye.movement.x=ye.speed):Re.left.pressed&&de>0&&(de-=1,He.forEach((function(e){e.position.x+=ye.speed})),Ee.forEach((function(e){e.position.x+=.66*ye.speed})),be.forEach((function(e){e.position.x+=ye.speed})),ke.forEach((function(e){e.position.x+=ye.speed})),Ie.forEach((function(e){e.position.x+=ye.speed,e.minPos+=ye.speed,e.maxPos+=ye.speed})))),He.forEach((function(e){ye.position.y+ye.height<=e.position.y&&ye.position.y+ye.height+ye.movement.y>=e.position.y&&ye.position.x+ye.width>=e.position.x&&ye.position.x<=e.position.x+e.width&&(ye.movement.y=0)})),(ye.position.y>e.height||we<=0)&&(pe=0,n.innerHTML=pe,xe=0,o.innerHTML=xe,clearInterval(he),qe[Te].init()),ye.position.x+ye.width>=Ee[2].position.x&&0===ye.movement.y&&Te<=3&&function(){if(3===Te)return fe=!0,ce+=pe,ue+=xe,m.innerHTML=ce,l.innerHTML=ue,h.innerHTML=we,g.style.opacity=1,r.style.opacity=1,window.localStorage.removeItem("level"),!0;fe=!0,ce+=pe,ue+=xe,Te++,g.style.opacity=1,a.innerHTML="level ".concat(Te),window.localStorage.setItem("level",Te),setTimeout((function(){a.innerHTML="",g.style.opacity=0,fe=!1,qe[Te].init(),je()}),2e3)}())}window.onload=function(){console.log("onload"),qe[Te].init(),je()},addEventListener("keydown",(function(e){var i=e.keyCode;if(65===i||37===i)Re.left.pressed=!0,ye.currentSprite=ye.sprites.left;else if(68===i||39===i)Re.right.pressed=!0,ye.currentSprite=ye.sprites.right;else if(87===i||38===i){if(event.repeat)return;Re.top.pressed=!0,ye.movement.y-=25}})),addEventListener("keyup",(function(e){var i=e.keyCode;65===i||37===i?Re.left.pressed=!1:68===i||39===i?Re.right.pressed=!1:87!==i&&38!==i||(Re.top.pressed=!1)})),y.addEventListener("click",(function(){Te=1,ce=0,ue=0,fe=!1,a.innerHTML="",g.style.opacity=0,r.style.opacity=0,qe[Te].init(),je()}))})();