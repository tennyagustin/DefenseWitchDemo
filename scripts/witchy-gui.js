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

			Q.MovingSprite.extend("Player", {
					init: function(p) {
						this._super(p, {
							asset: "flyingcutiewitch.png",
							sx: 100,
							sy: 300,
							scale: .3,
							type: Q.SPRITE_PLAYER,
						});
						//this.add('2d, stepControls');
						//Q.input.on("fire", this, "shoot");
						this.on("drag");
						this.on("touchEnd");
						this.on("shoot");
					},
					drag: function(touch) {
						var p = this.p;
						this.p.dragging = true;
						x: this.p.x = touch.origX + touch.dx;
						y: this.p.y = touch.origY + touch.dy;
					},
					touchEnd: function(touch) {
						this.p.dragging=false;
					},
					moved: function() {
     					 this.p.moved = true;
    				},
					shoot: function(touch) {
						var p = this.p;
						var bullet = new Q.Bullet({
						x: this.p.x,
						y: this.p.y,
						vx: 300
						});
						Q.stage().insert(bullet) 
					}
				});
};