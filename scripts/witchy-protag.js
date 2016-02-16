Quintus.WitchyProtagonist = function(Q) {
	
	Q.Sprite.extend("Player", {
		init: function(p){
			this._super(p, {
				sheet: "player",
				x: 10,
				y: 90,
				asset: 'cutiewitch.gif',
				collisionMask: Q.SPRITE_ENEMY
			});
			this.add("2d, platformerControls");
			}
			
	})
};
