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
					},
					inserted: function() {
						var potion = new Q.Sprite({
							asset: 'potion.png',
							x: 60,
							y: 40, 
							scale: .85,
						});
						this.stage.insert(potion);

						/*this.totalPotion = new Q.UI.Text({
							x: 60,
							y: 40,
							label: "potion"
						})*/
					}
})
};
