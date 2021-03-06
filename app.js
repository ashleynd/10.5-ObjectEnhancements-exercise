
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

// ES2015 Version
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    };
  }



    // Computed Property Names
    let favoriteNumber = 42;
    let instructor = {
        firstName: "Colt"
      }
      instructor[favoriteNumber] = "That is my favorite!"

    // Computed Property Names ES2015 Version
    let favoriteNumber = 42;
    let instructor = {
        [firstName]: "Colt"
        [favoriteNumber]: "That is my favorite!"
      }

    //   Object Methods 
    var instructor = {
        firstName: "Colt",
        sayHi: function(){
          return "Hi!";
        },
        sayBye: function(){
          return this.firstName + " says bye!";
        }
      }

    //   Object Methods ES2015
    let instructor = {
        firstName: "Colt",
        sayHi(){
          return "Hi!";
        },
        sayBye(){
          return this.firstName + " says bye!";
        }
      }






       // ES2015 Version
      function createAnimal(species, verb, noise){
        return {
          species,
          [verb](){
            return noise;
          }
        }
      }
