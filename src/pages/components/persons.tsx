import { FC } from "react";

type Props = {
  name: string;
  tel: string;
  id: number;
};

export const Persons: FC<Props> = (props) => {
  return (
    <>
      <ul>
        <li>名前:{props.name}</li>
        <li>電話番号:{props.tel}</li>
        <li>ID:{props.id}</li>
      </ul>
    </>
  );
};
export default Persons;
