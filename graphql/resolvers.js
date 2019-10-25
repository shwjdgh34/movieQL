const people = [
  {
    name: "nick",
    age: 28,
    gender: "male"
  },
  {
    name: "nono",
    age: 18,
    gender: "female"
  }
];
const resolvers = {
  Query: {
    people: () => people
  }
};
export default resolvers;
