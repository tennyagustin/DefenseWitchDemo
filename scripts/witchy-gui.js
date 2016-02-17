Quintus.WitchyGUI = function(Q) {

			Q.UI.Container.extend("SidePanel", {
					init: function() {
						this._super({
							fill: '#ccccff',
							x: 120/2,
							y: 30/2,
							radius: 10,
							border: 5,  
							shadow: 0,
							w: 90,
							h: 120,
						});

					this.on("inserted");

					var panel = this;
					Q.state.on("change.chocolate", function(){
						panel.refreshStats();
					});	
					},
					inserted: function() {
						var chocolate = new Q.Sprite({
							asset: 'chocolate.png',
							x: 60,
							y: 25, 
							scale: 1.25,
						});
						this.stage.insert(chocolate);

						this.totalChocolate = new Q.UI.Text({

							x: 60,
							y: 40,
							label: "0"
						});
						this.stage.insert(this.totalChocolate);

						this.refreshStats();
					},
					refreshStats: function() {
						this.totalChocolate.p.label = Q.state.get("chocolate") + "";
					},
});

			Q.Sprite.extend("Player", {
					init: function(p) {
						this._super(p, {
							asset: "flyingcutiewitch.png",
							x: 100,
							y: 300,
							scale: .3,
							type: Q.SPRITE_PLAYER,
						});
						//this.add('2d, stepControls');
						//Q.input.on("fire", this, "shoot");
						this.on("drag");
						this.on("touchEnd");
					},
					drag: function(touch) {
						this.p.dragging = true;
						this.p.x = touch.origX + touch.dx;
						this.p.y = touch.origY + touch.dy;
					},
					touchEnd: function(touch) {
						this.p.dragging=false;
					 },
					shoot: function() {
						var p = this.p;
						this.stage.insert(new Q.Bullet({
							x: p.x,
							y: p.y - p.w/2,
							vx: 300
						})) 
					}
				});


			Q.Sprite.extend("ShootButton", {
					init: function() {
						this._super({
							asset: "tapbutton.png",
							type: Q.SPRITE_UI,
							y: 360,
							x: 720,
							scale: 0.75,
					});
					this.on("touch");
				},
				touch: function(touch) {
					console.log("you touched it, good job");
		}
		});

		Q.Sprite.extend("Bullet", {
				init: function(p) {
						this._super(p, {
							type: Q.SPRITE_BULLET,
							asset: "magicblob.png",
							vx: 300
						});
					this.add('2d');
					},
					/*step: function(dt) {
						//destroy when out of range
						if(this.p.x => 1110) {
							this.destroy();
						}
					} */
			})
};