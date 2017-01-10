function Obstacle(canvas,num){
	this.canvas=canvas;
	this.cobj=canvas.getContext("2d");
	this.x=canvas.width;
	this.y=300;
	this.width=60;
	this.height=60;
	this.img=document.querySelectorAll(".obstacle");//
	this.type=num;// 地上障碍物
}
Obstacle.prototype={
	draw:function () {
		if(this.type==1){
			this.cobj.drawImage(this.img[0],0,0,67,38,this.x,this.y,this.width,this.height);//障碍物图片
			// console.log(this.img)
		} else if(this.type==2){
			this.cobj.drawImage(this.img[1],0,0,134,144,this.x,this.y-100,this.width,this.height);
		}
	},
	update:function () {
		this.x-=5;
		this.draw();
	}
}
