export const people = [
  {
    id: 1,
    name: "nick",
    age: 28,
    gender: "male"
  },
  {
    id: 2,
    name: "nono",
    age: 18,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};
