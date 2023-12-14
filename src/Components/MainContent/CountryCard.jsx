import React from "react";

const CountryCard = (props) => {
  const styles = {
    backgroundColor: props.dark.dark ? "#2B3844" : "#fafafafa",
    boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
    color: props.dark.dark ? "white" : "black",
    transition: "1s",
  };
  return (
    <div className="country-over" style={styles}>
      <img src={props.flag} alt="Flag" />
      <h2>{props.name}</h2>
      <ul>
        <li>
          <strong>Population:</strong> {props.population}
        </li>
        <li>
          <strong>Region:</strong> {props.region}
        </li>
        <li>
          <strong>Capital:</strong> {props.capital}
        </li>
      </ul>
    </div>
  );
};

export default CountryCard;
