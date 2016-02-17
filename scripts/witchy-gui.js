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
							y: 40, 
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
					}
});

			/*	
			Q.UI.Button.extend("ShootButton", {
				init: function(p) {
					this._super(p, {
						asset: "tapbutton.png"
			}, function() {
				Q.Player.shoot();
			})
			*/
};
