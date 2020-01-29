import React, { useState } from "react";
import Search from "../../components/Search";
import Logo from "../../components/Logo";
// import { getUser } from "../../services/api/users";

import "./style.css";

const Home = () => {

    // prevState inicial vazio
    const [valueInput, setValueInput] = useState("");
    const [user, setUser] = useState({});
    // const [error, setError] = useState("");

    console.log(valueInput)

    return (
        <div className="container__home">
          <div>
            <Logo classGit="Github-Search" classSearch="text-style-1" />
          </div>
          <div>
            <Search
              classSearch="text-style-1"
              typing={(e) => setValueInput(e.target.value)}
            // click={this.searching}
            />
          </div>
        </div>
      );
}

export default Home