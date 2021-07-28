import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ReactNode, ReactElement, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { User } from "./interfaces/interfaces";
import PlayerCard from "../components/PlayerCard";

export default function Home() {
  const [system, setSystem] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const searchUser = async () => {
    const response: AxiosResponse = await axios(
      `https://ow-api.com/v1/stats/${system}/us/${username}/profile`
    );

    setUser(response.data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your user name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <select onChange={(e) => setSystem(e.target.value)}>
        <option value="" selected disabled>
          Select System
        </option>
        <option value="pc">PC</option>
        <option value="psn">Playstation 4</option>
        <option value="xbl">Xbox One</option>
        <option value="nintendo-switch">Nintendo Switch</option>
      </select>
      <button onClick={searchUser}>Search</button>
      {user && <PlayerCard user={user} />}
    </div>
  );
}
