import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ReactNode, ReactElement, useState, useEffect } from "react";
import axios from "axios";

interface User {
  competitiveStats: object;
  endorsement: number;
  endorsementIcon: string;
  gamesWon: number;
  icon: string;
  level: number;
  levelIcon: string;
  name: string;
  prestige: string;
  prestigeIcon: string;
  private: boolean;
  quickPlayStats: object;
  rating: number;
  ratingIcon: string;
}

export default function Home() {
  // const [system, setSystem] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const searchUser = async () => {
    const response = await axios(
      "https://ow-api.com/v1/stats/psn/us/hazard317/profile"
    );
    setUser(response.data);
  };

  return (
    <div>
      <button onClick={searchUser}>Search</button>
      {user && <p>{user.name}</p>}
    </div>
  );
}
