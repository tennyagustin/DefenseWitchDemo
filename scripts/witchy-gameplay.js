Quintus.WitchyGameplay = function(Q) {
	Q.Sprite.extend("Level", {
		init: function(p) {
			this._super(p, {
				asset: "redskybg.png",
				type: Q.SPRITE_GROUND,
				x: 600/2,
				y: 400/2,
				//w: 900,
				//h: 700
				});

			this.on("touch");
		},
		touch: function(touch) {
			console.log("you touched the ground");
		}
	});
}