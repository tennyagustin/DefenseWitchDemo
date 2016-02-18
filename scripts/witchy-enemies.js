Quintus.WitchyEnemies = function(Q) {

Q.enemyTypes = {
	hemoglob: {
		asset: 'hemoglob.gif',
		vx: -35,
		scale: .75,
		energy: 10
	},
	sharkguy: {
		asset: 'sharkguy.gif',
		vx: -55,
		scale: .45,
		energy: 3
	},
	vampy: {
		asset: 'vampbat.png',
		vx: -75,
		scale: .55,
		energy: 2
	}
},

	Q.Sprite.extend("Enemy", {
		init: function(p){
			this._super(p, {
				type: Q.SPRITE_ENEMY,
				collisionMask: Q.SPRITE_BULLET
			});
			this.add("2d");

			this.on("hit", function(collision) {
				if(collision.obj.isA("Bullet")) {
					this.p.energy -= collision.obj.p.damage;
					collision.obj.destroy();
				}
				this.p.vx = this.p.originalVx;
			});
			},
		step: function(dt) {
			if(this.p.x<=120) {
				this.destroy();
				console.log('You are a bloody mess!');
				Q.stageScene('level')
			} 
			if(this.p.energy <= 0) {
				this.destroy();
			}
		}
	})
};