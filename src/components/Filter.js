import React, { useState } from "react";

function Filter({ filteredYear }) {
  const [selectOption, setSelectOption] = useState("");

  const selectOptionHandler = (event) => {
    setSelectOption(event.target.value);
    filteredYear(event.target.value);
  };
  return (
    <div>
      <p>selected option: {selectOption}</p>
      <select onChange={selectOptionHandler}>
        <option>Select a date:</option>
        <option value={2019}>2019</option>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
      </select>
    </div>
  );
}

export default Filter;
