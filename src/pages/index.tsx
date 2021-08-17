import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Persons from "./components/Persons";

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

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next + Typescript App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Typescript</h1>
      {members.map((member) => (
        <Persons
          key={member.id}
          name={member.name}
          id={member.id}
          tel={member.tel}
        />
      ))}
    </div>
  );
};

export default Home;
