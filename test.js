const data = [
  {
    firstname: 'Marge',
    lastname: 'Simpson',
    gender: 'Women',
    age: 34,
  },
  {
    firstname: 'Ned',
    lastname: 'Flanders',
    age: 61,
  },
  {
    firstname: 'Charles Montgomery',
    lastname: 'Burns',
    age: 104,
  },
  {
    firstname: 'Waylon',
    lastname: 'Smithers',
    age: 36,
  },
];


const characters = data.map(callback);
console.log('valeur du retour du map -> characters:',characters);

//la function callback doit prendre au moins un param, la valeur à traiter
//deuxieme paramù l'index en cours de traitement
//troisieme le tableau envoyé
//et un quatrieme qui est lié au this
function callback(character, index, data) {
  console.log('du callback character :',character);
  console.log('du callback index:',index);
  console.log('du callback data ;', data);
 return {
    name: character.firstname + ' ' + character.lastname,
    young: character.age < 50
  };

  // return character.age < 50;
}

const props = Object.keys(data[0])
console.log(props)