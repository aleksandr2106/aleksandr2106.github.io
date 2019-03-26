export const ADD_PERSON = "ADD_PERSON";

export function addPerson(person) {
  return {
    type: ADD_PERSON,
    id: person["id"],
    name: person["name"],
    surname: person["surname"],
    desc: person["desc"]
  };
}
