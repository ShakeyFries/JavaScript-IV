// CODE here for your Lambda Classes

// base-class. everything will inherit from this
class Person {
   constructor(attrs) {
      this.name = attrs.name;
      this.age = attrs.age;
      this.location = attrs.location;
      this.catchPhrase = attrs.catchPhrase;
      this.specialty = attrs.specialty;
   }
   speak = function () {
         return (`Hello my name is ${this.name}, I am from ${this.location}.`)
   }
};
// Instructors at Lambda
class Instructor extends Person{
  constructor (instAttrs) {
      super (instAttrs);
      this.favLanguage = instAttrs.favLanguage;
      
  }
  demo = function(subject) {
      return (`Today we are learning about ${subject}.`)
  }
  grade = function (student, subject) {
        return (`${student.name} receives a perfect score on ${subject}.`)
  }
};

// Lambda Students
class Student extends Person{
  constructor (stuAttrs) {
      super (stuAttrs);
      this.previousBackground = stuAttrs.previousBackground;
      this.className = stuAttrs.previousBackground;
      this.favSubjects = stuAttrs.favSubjects;
  }
  listsSubjects = function (){
        return (student.favSubjects);
  }
  PRAssignment = function (student, subject){
      return (`${student.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge = function (student, subject){
      return (`${student.name} has begun sprint challenge on ${subject}.`);
  }
};

class teamLead extends Instructor {
  constructor (tlAttrs) {
       super (tlAttrs);
       this.gradClassName = tlAttrs.gradClassName;
       this.favInstructor = tlAttrs.favInstructor;
  }
  standUp = function (tl, channel){
        return (`${tl.name} announces to ${channel}, @channel standy times!​​​​​`)
  }
  debugsCode = function (tl, student, subject){
      return (`${tl.name} debugs ${student.name}'s code on ${subject}`)
  }
};
// ======================= New Objects here ==================================================================

// const fred = new Instructor({
//       name: 'Fred',
//       location: 'Bedrock',
//       age: 37,
//       favLanguage: 'JavaScript',
//       specialty: 'Front-end',
//       catchPhrase: `Don't forget the homies`
//     });
//     console.log (fred.speak());

const chrisDaley = new Student ({
      name: 'Chris',
      location: 'Orem',
      age: 32,
      specialty: 'Jokes',
      catchPhrase: 'I dont get it...',
      previousBackground: 'Costco',
      className: 'WebPT9',
      favSubjects: [
            'Html',
            'CSS',
            'Javascript',
]
});
console.log (chrisDaley.specialty);
console.log (chrisDaley.catchPhrase);
const paceEllsworth = new Instructor ({
      name: 'Pace',
      location: 'Arizona',
      age: 33,
      favLanguage: 'JavaScript',
      specialty: 'instructing',
      catchPhrase: 'Broder',
});
console.log (paceEllsworth.speak());
console.log (paceEllsworth.catchPhrase);

const kimBerlee = new teamLead ({
      name: 'Kimberlee',
      location: 'San Francisco',
      age: 21,
      favLanguage: 'Emoji',
      specialty: 'Leading Teams',
      catchPhrase: 'Rose, Bud, Thorn!',
      gradClassName: 'Web19',
      favInstructor: 'Josh Knell...I think',
});
console.log (kimBerlee.speak());
console.log (kimBerlee.catchPhrase);
console.log (paceEllsworth.demo('Javascript'));
console.log (paceEllsworth.grade(chrisDaley, "Javascript...somehow"));
console.log (chrisDaley.favSubjects);
console.log (chrisDaley.PRAssignment(chrisDaley, "Javascript"));
console.log (chrisDaley.sprintChallenge(chrisDaley, "Javascript"));
console.log (kimBerlee.standUp(kimBerlee, "WebPt9"));
console.log (kimBerlee.debugsCode(kimBerlee, chrisDaley, "Javascript"));