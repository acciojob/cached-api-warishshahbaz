import React, { useEffect, useMemo, useState } from "react";
import "./../styles/App.css";
import "regenerator-runtime/runtime";

const App = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let result = await res.json();
      console.log(result);
      setData(result ?? []);
    } catch (error) {
      console.log(error);
    }
  }
  const catchedValue = useMemo(() => {
    return data;
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="app">
      <ul>
        {catchedValue.length > 0 ? (
          catchedValue?.map((val, i) => {
            return (
              <div key={i}>
                <li>{val.title ?? ""}</li>
                <p>{val.body ?? ""}</p>
              </div>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </div>
  );
};

export default App;
