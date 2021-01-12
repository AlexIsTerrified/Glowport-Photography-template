export default class Snow {
	constructor(){
		this.canvas = document.getElementById("canvasbg");
		this.ctx = this.canvas.getContext("2d");
		this.snowflakes = [];
		
		
		window.addEventListener("resize",()=>this.onResize());
		this.onResize();
		this.updateBound = this.update.bind(this);
		requestAnimationFrame(this.updateBound);
		
		this.createSnowFlake();
	}
	onResize(){
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}
	createSnowFlake(){
		const flakes = window.innerWidth/40;
		
		
		for(let s=0;s<flakes;s++){
			this.snowflakes.push(new Snowflake());
			console.log("");
		}
		
	}
	update(){
		this.ctx.clearRect(0,0,this.width,this.height);
		
		for(const flake of this.snowflakes){
			flake.update();
			
			this.ctx.save();
			this.ctx.fillStyle='#fd7';
			this.ctx.beginPath();
			this.ctx.arc(flake.x,flake.y,flake.radius,0,Math.PI*2);
			this.ctx.closePath();
			this.ctx.globalAlpha = flake.alpha;
			this.ctx.fill();
			this.ctx.restore();
		}
		requestAnimationFrame(this.updateBound);
	}
}

class Snowflake{
	constructor (opts){
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.radius = 0;
		this.alpha = 0;
		
		this.reset();
	}
	reset(){
		this.x = this.randBetween(0,window.innerWidth);
		this.y = this.randBetween(window.innerHeight/2,window.innerHeight*2);
		this.vy = this.randBetween(-0.3,-0.6);
		this.vx = this.randBetween(-0.2,0.2);
		this.radius = this.randBetween(1,4);
		this.alpha = this.randBetween(0.1,0.9);
	}
	randBetween(min,max){
		return min + Math.random() * (max-min);
	}
	update(){
		this.x += this.vx;
		this.y += this.vy;
		if(this.y+this.radius<0){
			this.reset();
		}
	}
}