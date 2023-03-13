import React, { useState, useEffect } from "react";
import "./Style2.css";

function People() {
  const [results, setResults] = useState([]);

  //USE EFFECT
  useEffect(() => {
    //fetch API
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setResults(data.results);
      });
  }, []);

  //mapping throught the API
  const RenderMe = results.map((item, idx) => {
    return (
      <div key={idx}>
        <img src={item.picture.large} alt="" width="120px" />
        <p>
          {item.name.first} {item.name.last}
        </p>
        <p>{item.email}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>happy people</h1>
      <div className="api_container">{RenderMe} </div>
    </div>
  );
}

export default People;
