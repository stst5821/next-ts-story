import { FC } from "react";

type members = {
  name: string;
  tel: string;
  id: number;
};

// exportをつけないとPersons.storiesでエラーが出る。
export const Persons: FC<members> = (member) => {
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
// これ書かないと、index.tsxのPersons importでエラーが出る。
export default Persons;
