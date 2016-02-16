Quintus.WitchyEnemies = function(Q) {

Q.enemyTypes = {
	hemoglob: {
		asset: 'hemoglob.gif',
		vx: -35,
		scale: .75,
	},
	sharkguy: {
		asset: 'sharkguy.gif',
		vx: -45,
		scale: .45,
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
				console.log('You are a bloody mess!');
				Q.stageScene('level')
			}
		}
	})
};