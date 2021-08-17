import { FC } from "react";

type members = {
  name: string;
  tel: string;
  id: number;
};

const Persons: FC<members> = (member) => {
  return (
    <>
      <ul>
        <div key={member.id}>
          <li>
            名前:{member.name}
            <br />
            電話番号:{member.tel}
            <br />
            ID:{member.id}
          </li>
        </div>
      </ul>
    </>
  );
};

export default Persons;
