import React from "react";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const CountryList = (props) => {
  const styles = {
    backgroundColor: props.dark ? "#2B3844" : "#fafafafa",
    boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
    transition: "1s",
  };
  const countryCard = props?.data?.map((item) => {
    return (
      <Link
        to={`/country-details/${item.cca2}`}
        key={item.cca2}
        className="country-over"
        style={styles}
      >
        <CountryCard
          key={item.cca2}
          flag={item.flags.png}
          name={item.name.official}
          population={item.population}
          region={item.region}
          capital={item.capital}
          dark={props}
        />
      </Link>
    );
  });
  return <div className="country-list">{countryCard}</div>;
};

export default CountryList;
