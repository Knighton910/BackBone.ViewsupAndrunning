// // the render() is where we implement the rendering logic
// // this.$el is a jquery obj that contains the views dom element
// // the .html is a $query method
// // by convention we return a reference to the view @ the end of the render() great with chaining methods
let Song = Backbone.Model.extend();
let Songs = Backbone.Collection.extend({
	model: Song
});
let SongV = Backbone.View.extend({
	render: function () {
		this.$el.html(this.model.get("title"));

		return this;
	}
});
let SongsV = Backbone.View.extend({
	render: function () {
		let self = this;

		this.model.each(song => {
			let songV = new SongV({ model: song });
			self.$el.append(songV.render().$el);
		})
	}
})

let songs = new Songs([
	new Song({ title: "Blue in Green" }),
	new Song({ title: "So What" }),
	new Song({ title: "All Blues" })
])

let songsV = new SongsV({ el: "#container", model: songs });
songsV.render();



// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// let Vehicle = Backbone.Model.extend({
//
// 	idAttribute: "registrationNumber",
//
// 	urlRoot: "/api/vehicles",
//
// 	validate: function(attrs){
// 		if (!attrs.registrationNumber)
// 			return "Vehicle is not valid.";
// 	},
//
// 	start: function(){
// 		console.log("Vehicle started.");
// 	}
// });
//
// let Vehicles = Backbone.Collection.extend({
// 	Model: Vehicle
// });
//
// let Car = Vehicle.extend({
// 	start: function(){
// 		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
// 	}
// });
//
// var VehicleView = Backbone.View.extend({
// 	tagName: "li",
//
// 	className: "vehicle",
//
// 	events: {
// 		"click .delete": "onDelete",
// 	},
//
// 	render: function() {
// 		var source = $("#vehicleTemplate").html();
// 		var template = _.template(source);
//
// 		this.$el.html(template(this.model.toJSON()));
// 		this.$el.attr("data-color", this.model.get("color"));
//
// 		return this;
// 	},
//
// 	onDelete: function(){
// 		this.remove();
// 	}
// });
//
// var VehiclesView = Backbone.View.extend({
// 	tagName: "ul",
//
// 	render: function(){
// 		this.collection.each(function(vehicle){
// 			var vehicleView = new VehicleView({ model: vehicle });
// 			this.$el.append(vehicleView.render().$el);
// 		}, this); // note the reference to this here. When you set
// 		// the "this" pointer here (as the second argument to the
// 	    // each method, you'll be able to access "this" inside the
// 	    // callback function in the each method:
// 	    //
// 	    // this.$el.append(...)
//
// 		return this;
// 	}
// });
//
// var vehicles = new Vehicles([
// 	new Car({ registrationNumber: "XLI887", color: "Blue" }),
// 	new Car({ registrationNumber: "ZNP123", color: "Blue" }),
// 	new Car({ registrationNumber: "XUV456", color: "Gray" })
// ]);
//
// var vehiclesView = new VehiclesView({ collection: vehicles });
// $("#container").html(vehiclesView.render().$el);

