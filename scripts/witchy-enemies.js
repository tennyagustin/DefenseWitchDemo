Quintus.WitchyEnemies = function(Q) {

Q.enemyTypes = {
	hemoglob: {
		asset: 'hemoglob.gif',
		vx: -35,
		scale: .75,
	},
	sharkguy: {
		asset: 'sharkguy.gif',
		vx: -55,
		scale: .5,
	},
	vampy: {
		asset: 'vampbat.png',
		vx: -75,
		scale: .55,
	}
},

	Q.Sprite.extend("Enemy", {
		init: function(p){
			this._super(p, {
				type: Q.SPRITE_ENEMY,
				collisionMask: Q.SPRITE_BULLET
			});
			this.add("2d");
			},
		step: function(dt) {
			if(this.p.x<=120) {
				this.destroy();
				console.log('They got you!');
				Q.stageScene('level')
			}
		}
	})
};