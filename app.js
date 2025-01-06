class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = 'Animal') {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Meow...");
  }
  toString() {
    return super.toString("Cat");
  }
}

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("Dog");
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    return super.toString("Cow");
  }
}

class Person extends Animal {
    constructor(hair, isAwake, isMoving, race) {
        super(2, 2, isAwake, isMoving);
        this._hair = hair; // Use _hair as the internal property name
        this._wearsCloths = false; //Initialize this property
        this._ableToTalk = true; //Initialize this property
        //this.#race = race; // Initialize the private #race
    }
    speak() {
        super.speak("whats up!");
    }
    toString() {
        return super.toString("Person"); // Corrected to "Person"
    }
    talk() {
        super.speak("talking animal, this is");
    }
    get hair() { // Corrected getter name
        return this._hair;
    }
    set hair(newHair) {
        this._hair = newHair;
    }
    get wearsCloths() {
        return this._wearsCloths;
    }
    set wearsCloths(value) {
        this._wearsCloths = value;
    }
    get ableToTalk() {
        return this._ableToTalk;
    }
    set ableToTalk(value) {
        this._ableToTalk = value;
    }
    get legs(){
        return super.legs;
    }
    set legs(value){
        super.legs = value
    }
//    get race() { // Getter for the private #race
//        return this.#race;
//    }
//    set race(newRace) { // Setter for the private #race
//        this.#race = newRace;
//    }
}
const person1 = new Person("brown", true, false);
console.log(person1.toString()); // Output: This Person has 2 eyes and 2 legs. It is awake, and is not moving.
person1.hair = "blond";
console.log(person1.hair); // Output: blond
person1.wearsCloths = true;
console.log(person1.wearsCloths); // Output: true
person1.ableToTalk = false;
console.log(person1.ableToTalk); // Output: false
person1.legs = 4;
console.log(person1.legs);
person1.race = "African American"; // Setting a new race using the setter
console.log(person1.race);
console.log(person1.toString()); // Output: This Person has 2 eyes and 4 legs. It is awake, and is not moving.


////////////////////////////////


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }

const adventurer1 = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
}

const adventurer2 = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        },
        roll (mod = 0) {
             const result = Math.floor(Math.random() * 20) + 1 + mod;
             console.log(`${this.name} rolled a ${result}.`);
        }
    }    
}

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
}

  class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  class companion extends Adventurer {
    constructor (name, type) {
        super(name);
        this.type = type;
        this.inventory.push("teeth", "claw");

    }
  }

/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////
//Part 1: Humble Beginnings

console.log("Part 1: Humble Beginnings");

const adventurer10 = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"]
}

adventurer10.inventory.forEach(element => {
  console.log(element);
});

const adventurer11 = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "leo",
    type: "cat",
    companion : {
      name: "frank",
      type: "flea",
      inventory: ["hat", "sunglasses"]
    },
  },
  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}
console.log(adventurer11.roll());
console.log(adventurer11.roll());
console.log(adventurer11.roll());

//////////////////////////////////////////////////
//Part 2: Class Fantasy

console.log("Part 2: Class Fantasy");


class Character2 {
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    this.companion2 = companion2;
  }  
  roll(mod) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
  }
}

class companion2 {
  constructor (name, type, inventory=[], companion2) {
    this.name = name;
    this.type = type;
    this.inventory = inventory;
    companion2 = companion2;
  }
}

const Robin = new Character2("Robin");
const Robin2 = new Character2;
Robin2.name = "Robin";
console.log(Robin2.name);
console.log(Robin2.health); 
console.log(Robin2);
Robin2.inventory = ["apple", "orange", "mango"];
console.log(Robin2);
console.log(Robin2.inventory[1]);
Robin2.health = 200;
Robin2.name = "name changed";
console.log(Robin2);
Robin.name = "namechanged";
Robin.name = "Robin";
Robin2.name = "robin";
console.log(Robin);
console.log(Robin2.roll(5));

// let access companion within companion now

leo2 = new companion2;
leo2.name = "leo";
leo2.type = "cat";
leo2.inventory = ["something", "somethingmore"];
frank2 = new companion2;
frank2.name = "frank";
frank2.type ="flea";
frank2.inventory= ["hat","sunglasses"];

//leo.companion2.name = "frank";
//leo.companion2.type ="flea";
//leo.companion2.inventory= ["hat","sunglasses"];
leo2.companion2 = frank2;
Robin2.companion2 = leo2;
console.log(Robin2);
console.log(frank2);

//////////////////////////////////////////////////
//Part 3: Class Features (we can further improve on this above by using extend)
console.log("Part 3: Class Features ");

class Character3 {
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }  
  roll(mod) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
  }
}
class Companion3 extends Character3 {
  constructor(name, type, inventory = [], Companion3 = null) {
    super(name, 10, inventory); // Calling the parent constructor with default health = 10
    this.type = type;
    this.companion3 = Companion3; // Nested companion
  }
}
console.log ("---");
const Lisa = new Character3;
Lisa.name = "Lisa"
Lisa.health = 123;
Lisa.inventory = ["pick", "pol"];
console.log(Lisa.roll(3));
//const fleaCompanion = new companion3("frank", "flea", ["hat", "sunglasses"]);
//const LisaFlee = new Companion3("LisaLee", "fle", ["knief", "blade"]);
const LisaFlee = new Companion3("LisaLeeFlee", "flee", ["knief", "blade"]);
console.log ("-------------");
LisaFlee.name = "LisaFlee";
LisaFlee.type =  "flees";
LisaFlee.inentory = ["tip","top","toe"];
console.log(LisaFlee);
console.log(Lisa.roll(4));
console.log(Lisa);
Lisa.Companion3 = LisaFlee;
console.log ("-------------");
console.log(`Lisa is: ${Lisa}`);
console.log(Lisa);

class Companion4 extends Character3 {
    constructor(name, type, inventory = [], Companion3 = null) {
    //constructor(name, type, Companion3 = null) {
    super(name, 10, inventory); // Calling the parent constructor with default health = 10
    //super(); // Calling the parent constructor with default health = 10
    this.type = type;
    this.companion3 = Companion3; // Nested companion
  }
}

console.log ("-------------");
const test = new Companion4;
test.name = "ginger";
test.type = "notype";
test.inventory = ["123", "234"];
console.log(test.roll(4));
console.log(test);
//console.log(Object.keys(test));


//////////////////////////////////////////////////
//Part 4: Class Uniforms: Using static properties and methods
console.log("Part 4: Class Uniforms:");

class Character5 {
  static MAX_HEALTH = 100;
  constructor (name, health) {
    if (!health > Character5.MAX_HEALTH) {
      throw new Error(`Invalid Health: ${health}". Cannot be greater then: ${Character5.MAX_HEALTH}.`);
    }
    this.name = name;
    this.inventory = [];
  }  
  roll(mod) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
  }
}

class Adventurer5 extends Character5{
  // Static property for valid roles
  static ROLES = ["Fighter", "Healer", "Wizard"];
  static MAX_HEALTH = 100;

  constructor(name, health, inventory = [], role) {
    // Validate the role against the ROLES array
    if (!Adventurer5.ROLES.includes(role)) {
       console.log(role);
       throw new Error(`Invalid role: "${role}". Valid roles are: ${Adventurer5.ROLES}.`);
//       throw new Error(`Invalid role: "${role}". Valid roles are: ${Adventurer5.ROLES.join(", ")}.`);
    }
    super(name, health, inventory); 
//    this.name = name;
//    this.health = health;
//    this.inventory = inventory;
    this.role = role; // Assign the validated role
  }

//  roll(mod = 0) {
//    const result = Math.floor(Math.random() * 20) + 1 + mod;
//    console.log(`${this.name} (Role: ${this.role}) rolled a ${result}.`);
//  }
}

Chr = new Character5;
Chr.Name = "Chr1";
Adv = new Adventurer5 ("jill", 22, ["ab", "bc"],"Fighter");
//Adv.Name = "Adv";
//Chr.role = "Fighter";
//console.log(Chr);
//Adv.role = "Fighter";
console.log(Adv);
//Chr.health = 120;
//console.log(Chr.helath);


//////////////////////////////////////////////////
//Part 5: Gather your Party: Using factory keyword for shared property values.
console.log("Part 5: Gather your Party:");

class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

console.log(healers);
console.log(robin);

//////////////////////////////////////////////////
//Part 6: Developing Skills: Using factory keyword for shared property values.
console.log("Part 6: Developing Skills:");

