import React, { useState } from "react";
import Search from "../../components/Search";
import Logo from "../../components/Logo";
import { getUser } from "../../services/api/users";

import "./style.css";

const Home = () => {

  // prevState inicial vazio
  const [valueInput, setValueInput] = useState("");
  const [user, setUser] = useState({});
  // const [error, setError] = useState("");

  console.log(valueInput)

  function searching() {
    if (valueInput !== "") {
      getUser(valueInput)
        .then(response => {
          setUser(response)
        }
        )
    };
  }

  console.log(user)

  return (
    <div className="container__home">
      <div>
        <Logo classGit="Github-Search" classSearch="text-style-1" />
      </div>
      <div>
        <Search
          classSearch="text-style-1"
          typing={(e) => setValueInput(e.target.value)}
          click={() => searching()}
        />
      </div>
    </div>
  );
}

export default Home