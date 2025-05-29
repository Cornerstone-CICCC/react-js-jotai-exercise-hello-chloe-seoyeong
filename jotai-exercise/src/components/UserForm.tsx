import { useAtom } from "jotai";
import {
  firstNameAtom,
  lastNameAtom,
  ageAtom,
  hobbiesAtom,
  userlistAtom,
} from "../atoms/user.atom";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

const hobbiesList = [
  { hobby: "bouldering", status: false },
  { hobby: "coding", status: false },
  { hobby: "reading", status: false },
];

const UserForm = () => {
  const [firstName, setFirstName] = useAtom(firstNameAtom);
  const [lastName, setLastName] = useAtom(lastNameAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [hobbies, setHobbies] = useAtom(hobbiesAtom);
  const [checkHobbies, setCheckHobbies] = useState([...hobbiesList]);
  const [userlist, setUserList] = useAtom(userlistAtom);

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserList([
      ...userlist,
      {
        id: uuidv4(),
        firstName,
        lastName,
        age,
        hobbies: hobbies,
      },
    ]);
    setFirstName("");
    setLastName("");
    setAge(0);
    setHobbies([]);
    setCheckHobbies([...hobbiesList]);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setCheckHobbies(
      checkHobbies.map((h) =>
        h.hobby === value ? { ...h, status: !h.status } : h
      )
    );

    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((h) => h !== value));
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter first name... "
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter last name..."
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Enter age... "
      />
      <fieldset>
        <legend>Select your hobbies</legend>
        {checkHobbies.map((hobby) => (
          <div key={hobby.hobby}>
            <label htmlFor={hobby.hobby}>{hobby.hobby}</label>
            <input
              type="checkbox"
              name="hobbies"
              id={hobby.hobby}
              value={hobby.hobby}
              checked={hobby.status}
              onChange={(e) => handleCheckboxChange(e)}
            />
          </div>
        ))}
      </fieldset>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
