function Person(canvas) {
	this.cobj=canvas.getContext("2d");
	this.x=100;
	this.y=240;
	this.width=120;
	this.height=120;
	this.pos=0;
	this.jump=false;
	this.click();
	this.img=document.querySelectorAll(".person");
	this.jumpheight=0;
	this.heightcontrol=40;
}
Person.prototype={
	click:function () {
		document.onclick=(function () {
			this.jump=true;
		}).bind(this)
	},
	draw:function () {
		this.cobj.drawImage(this.img[this.pos],0,0,720,480,this.x,this.y-this.jumpheight,this.width,this.height)
	},
	update:function (frame) {
		if(this.jump){
			this.pos=4;
			if(frame%2==0){
				this.heightcontrol-=5;
				this.jumpheight+=this.heightcontrol;
				if(this.jumpheight<=0){
					this.jumpheight=0;
					this.jump=false;
					this.heightcontrol=40;
				}
			}
			this.draw();
		}
		this.pos=Math.floor(frame/5)%this.img.length;
		this.draw();
	}
}