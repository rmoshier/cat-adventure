
// var Cat = function (cat_name, cat_points) {
//   this.name = cat_name;
//   this.points = cat_points;
//   this.getDescription = function(){
//     return this.name + ": " this.points "points"
//   };
// };

var Room = function (new_name, new_description, new_exits, new_points) {
  this.name = new_name;
  this.description = new_description;
  this.exits = new_exits;
  this.points = new_points;
  this.getDescription = function(){
    return this.name + ": " + this.description;
  };
};


//
// Begin fixture data!
//
var kitchen = new Room(
  "Kitchen",
  "A nice roomy kitchen. Not very safe. There may be dogs nearby.",
  ["Living Room", "Dining Room"],
  0
);


var living_room = new Room(
  "Living Room",
  "Lots of perches, but frequently full of dogs. Kind of safe, but not a good spot for naps!",
  ["Kitchen"],
  2
);

var dining_room = new Room(
  "Dining Room",
  "There's a big table and some chairs and OH NO IT'S A DOG",
  ["Kitchen", "Bedroom"],
  -4
);

var bedroom = new Room(
  "Bedroom",
  "YAY! We finally found the nice toasty warm sunbeam!",
  ["Stairs"],
  20
);

// var currentRoom = dining_room;
var currentRoom = [kitchen, dining_room, bedroom]
currentRoom.map( function(item))
console.log(currentRoom);
// this part above isn't done yet!! i'm trying things out!
// [1,2,3,4].map( function(item) {
//   alert(item);
// })
//
// End fixture data!
//

// don't forget to populate this with data!
// var starbuck = new Cat(
//   "Starbuck",
//   5
// );

$(document).ready(function(){
  // should be replaced with your beginning/end game logic
  // while (true) {
    $("#dining-room").click(function() {
      alert( dining_room.getDescription() );
    });

    $("#living-room").click(function() {
      alert( living_room.getDescription() );
    });
    // Add more!
    // when we click on run towards kitchen
    $("#run-dining-room").click(function() {
      var currentLocationHeader =  document.getElementById("location");
      currentLocationHeader.innerHTML = "Oh no! Starbuck is trapped in the  " + currentRoom.name;
      alert( currentRoom.getDescription() );
      // console.log(currentLocation.innerHTML);
    });
  // }
});
