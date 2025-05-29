import { useAtomValue } from "jotai";
import {
  // firstNameAtom,
  // lastNameAtom,
  // ageAtom,
  // hobbiesAtom,
  userlistAtom,
} from "../atoms/user.atom";

const User = () => {
  // const firstName = useAtomValue(firstNameAtom);
  // const lastName = useAtomValue(lastNameAtom);
  // const age = useAtomValue(ageAtom);
  // const hobbies = useAtomValue(hobbiesAtom);
  const userlist = useAtomValue(userlistAtom);

  return (
    <div>
      <span>
        {userlist.length > 0 && (
          <div>
            {userlist.map((user) => (
              <div key={user.id}>
                Name: {user.firstName} {user.lastName} <br /> Age: {user.age}{" "}
                <br /> Hobbies:{" "}
                {user.hobbies.map((hobby, i) =>
                  i === user.hobbies.length - 1 ? `${hobby}.` : `${hobby},`
                )}
              </div>
            ))}
          </div>
        )}
      </span>
    </div>
  );
};

export default User;
