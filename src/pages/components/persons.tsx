import { FC } from "react";

type members = {
  name: string;
  tel: string;
  id: number;
};

const members = [
  { name: "としみつ", tel: "090-0000-0000", id: 3 },
  { name: "rika", tel: "090-0000-0010", id: 5 },
  { name: "まさき", tel: "090-0110-0010", id: 8 },
  { name: "yoshiaki", tel: "090-0010-0010", id: 1 },
  { name: "いっち", tel: "090-0010-0011", id: 2 },
];

members.sort(function (a, b) {
  if (a.id > b.id) {
    return 1;
  } else {
    return -1;
  }
});

export const Persons: FC<members> = () => {
  return (
    <>
      <ul>
        {members.map((member) => (
          <div key={member.id}>
            <li>
              名前:{member.name}
              <br />
              電話番号:{member.tel}
              <br />
              ID:{member.id}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Persons;
