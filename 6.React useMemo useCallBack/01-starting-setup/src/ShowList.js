import React, { useMemo } from "react";

import "./ShowList.css";

const ShowList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("ShowList RUNNING");

  return (
    <div className="list">
      <h2>{props.text}</h2>
      <ul>
        {sortedList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ShowList);
