import { atom } from "jotai";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  hobbies: string[];
};

const firstNameAtom = atom<string>("");
const lastNameAtom = atom<string>("");
const ageAtom = atom<number>(0);
const hobbiesAtom = atom<string[]>([]);
const userlistAtom = atom<User[]>([]);

export { firstNameAtom, lastNameAtom, ageAtom, hobbiesAtom, userlistAtom };
