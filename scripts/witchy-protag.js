Quintus.WitchyProtagonist = function(Q) {
	
	Q.Sprite.extend("Player", {
		init: function(p){
			this._super(p, {
				sheet: "player",
				x: 410,
				y: 90,
				asset: 'flyingcutiewitch.png',
				type: Q.SPRITE_PLAYER,
				collisionMask: Q.SPRITE_ENEMY
			});
			this.add("2d, platformerControls");
			this.on("hit.sprite",function(collision){
				if(collision.obj.isA("Enemy")){
					Q.stageScene("endGame",1,{ label: "You died!"});
					this.destroy();
				}
					
	});
	