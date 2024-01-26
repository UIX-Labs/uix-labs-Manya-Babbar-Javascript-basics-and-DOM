const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Write the code for 1st task below
const catName= cat["name"];
cat.greeting();
cat.color= "black";
//Write your code above




//Write your 2nd task below this
const band={
    name: "coldplay",
    nationality: "british",
    genre: "pop",
    members:  5,
    formed: "london", 
    split: false,
    albums: [
        {
            name: "Music of the Spheres",
            released: 2021,
        },
        {
            name: "Parachutes",
            released: 2000,
        }
    ],
};
const bandInfo = `
  ${band.name} is a ${band.genre} band hailing from ${band.nationality}. 
  Formed in ${band.formed}, the band consists of ${band.members} members. 
  They are known for pushing the boundaries of ${band.genre} music.

  ${band.name} has been active since ${band.formed}, and to date, they haven't split up. 
  One of their notable albums is "${band.albums[0].name}" released in ${band.albums[0].released}.

  Stay tuned for more from this groundbreaking ${band.genre} band! ` ;


console.log(bandInfo);
