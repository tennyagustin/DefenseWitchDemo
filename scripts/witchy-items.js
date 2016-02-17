Quintus.WitchyItems = function(Q) {
	Q.Sprite.extend("Chocolate", {
		init: function(p) {
			this._super(p, {
				asset: 'chocolate.png',
				type: Q.SPRITE_CHOCOLATE,
				x: 200 + Math.random()*(500),
				y: Math.random()*(400),
				
			});
			this.add("2d");
			this.on("touch");
		},
		touch: function(touch) {
			console.log("grab chocolate");
			Q.state.inc("chocolate",1);
			this.destroy();
		}
	
	});
};