import React from "react";
import axios from "axios";

import { Body } from "../components/Body";
import Card from "../components/Card";
import Header from "../components/Header";
import { useState, useEffect } from "react";

function Home() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const Posts = async () => {
      try {
        const response = await axios.get(
          "https://otterwise-fake-api.herokuapp.com/tasks/04p06sl"
        );

        let dataPosts = response.data.tasks;
        setState(dataPosts);
      } catch (error) {
        console.error(error);
      }
    };

    Posts();
  }, []);

  return (
    <>
      <Body>
        <Header />
        {state.map((prop) => {
          return (
            <Card
              setState={setState}
              id={prop.id}
              key={prop.id}
              title={prop.title}
              description={prop.description}
            />
          );
        })}
      </Body>
    </>
  );
}

export default Home;
