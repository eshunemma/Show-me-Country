import React, { useState } from "react";
import { SearchComponent } from "./SearchComponent";
import CountryList from "./CountryList";

const getData = async () => {
  return (await fetch("https://restcountries.com/v3.1/all")).json();
};
let data = await getData();

async function searchCountry(name) {
  return (
    (await fetch(`https://restcountries.com/v3.1/name/${name}`)).json() ?? []
  );
}

export function MainContent(props) {
  const [countryList, setCountryList] = useState(data);
  const styles = {
    backgroundColor: props.darkmode ? "#202C36" : "#fafafafa",
    transition: "1s",
  };

  function changeState(data) {
    setCountryList((prev) => (prev = data));
  }

  function filterCountry(region) {
    if (!region) {
      changeState(data);
    } else {
      let d1 = data.filter((country) => {
        console.log(country?.region);
        return country?.region === region;
      });
      changeState(d1);
    }
  }

  async function searchCountryData(name) {
    try {
      let d2 = await searchCountry(name);
      if (!name) {
        changeState(data);
      } else if (d2.status === 404) {
        changeState([]);
      } else {
        changeState(d2);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-content" style={styles}>
      <SearchComponent
        data={countryList}
        filterCountry={filterCountry}
        searchCountry={searchCountryData}
      />
      <CountryList
        dark={props.darkmode}
        data={countryList}
        changeState={changeState}
      />
    </div>
  );
}
