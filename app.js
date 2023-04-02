const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", {useNewUrlParser: true});
 
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "choose a name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
/*const fruit = new Fruit({
  
  rating: 8,
  review: "Pretty solid as a fruit."
});*/
//fruit.save();
////////////////////////////////////////////////////////////
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});
const Person = mongoose.model("Person", peopleSchema);

/////////////////////////////////////////////////////////////
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Pretty good."
});
const orange = new Fruit({
  name: "Orange",
  rating: 10,
  review: "ne3met rabbena"
});
const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "ne3met rabbena bardo"
});
const watermellon = new Fruit({
  name: "Watermellon",
  rating: 10,
  review: "ne3met rabbena Elgamela"
});
watermellon.save();
///////////////////////////////////////////////////
const hossam = new Person({
  name: "Hossam",
  age: 37,
  favouriteFruit: orange
});

//hossam.save();
/*Fruit.insertMany([kiwi, orange, banana])
.then(function () {
  console.log("Successfully saved all the fruits to fruitsDB");
})
.catch(function (err) {
  console.log(err);
 });*/

 /*Fruit.updateOne(
  {_id: "6424266ed92fd6c30526a324"}, 
  {name: "Batteekh"})
  .then(function(){
    Fruit.find()
    .then(function(fruits){
      fruits.forEach(function(fruit){
        console.log(fruit.name);
        //mongoose.connection.close();
      });
    })
    .catch(function(err){
      console.log(err);
    });
  })
  .catch(function(err){
    console.log(err);
  });

  Fruit.deleteOne({name: "Banana"})
  .then(function(){
    Fruit.find()
    .then(function(fruits){
      fruits.forEach(function(fruit){
        console.log(fruit.name);
        mongoose.connection.close();
      });
    })
    .catch(function(err){
      console.log(err);
    });
  })
  .catch(function(err){
    console.log(err);
  });*/

  /*Person.deleteMany({name: "John"})
  .then(function(){
    Person.find()
    .then(function(){
      console.log("successfully deleted!");
      mongoose.connection.close();
    })
    .catch(function(err){
      console.log(err);
    });
  })
  .catch(function(err){
    console.log(err);
  });*/

  /*Person.updateOne(
    {name: "Hossam"}, 
    {favouriteFruit: watermellon})
    .then(function(){
      Person.find()
      .then(function(people){
        people.forEach(function(person){
          console.log(person.name);
          mongoose.connection.close();
        });
      })
      .catch(function(err){
        console.log(err);
      });
    })
    .catch(function(err){
      console.log(err);
    });*/






