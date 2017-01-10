window.onload=function () {
	function Game(canvas) {
		this.canvas=canvas;
		this.cobj=canvas.getContext("2d");
		this.frame=0;
		this.value=40;
		this.obstacle=[];
		this.person=new Person(canvas);
		// debugger;
	}
	Game.prototype={
		play:function () {
			this.update();
		},
		update:function () {
			this.frame++;
			this.cobj.clearRect(0,0,canvas.width,canvas.height);
			this.updateScene();
			this.updateObstacle();
			this.updatePerson();
			this.updateHitPix();
			requestAnimationFrame(this.update.bind(this));
		},
		updateScene:function () {
			this.canvas.style.backgroundPosition=-this.frame*5+"px 0";
		},
		updateObstacle:function () {
			if(this.frame==this.value){
				this.value+=40+Math.floor(Math.random()*80);
				var num=Math.random()<0.7?1:2;
				this.obstacle.push(new Obstacle(this.canvas,num));
				//console.log(this.value);
			}
			if(this.obstacle.length>4){
				var obj=this.obstacle.shift();
				obj=null;
			}
			this.obstacle.forEach(function (value) {
				value.update();
			})
		},
		updatePerson:function () {
			this.person.update(this.frame);
		},
		updateHitPix:function () {
			
			for(var i in this.obstacle){
				if(hitPix(canvas,this.person,this.obstacle[i])){
					debugger
					alert("you are die")
				}

				console.log(this.obstacle[i].width)
				console.log(this.obstacle[i].height)
				console.log(this.person.y)
			}
			// console.log(this.person.x+this.person.width)
			
		}
	}
	var canvas=document.querySelector("canvas"),
		newgame=new Game(canvas);
	 	newgame.play();
}