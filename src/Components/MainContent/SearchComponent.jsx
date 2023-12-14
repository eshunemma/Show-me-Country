import React, { useState } from "react";

export const SearchComponent = (props) => {
  const [selectRegion, setSelectRegion] = useState("");

  const handleRegion = (event) => {
    setSelectRegion(event.target.value);
    props.filterCountry(event.target.value);
  };
  const handleSearch = (event) => {
    props.searchCountry(event.target.value);
  };

  return (
    <section>
      <div className="menu">
        <input
          id="search"
          type="text"
          placeholder="Search for a country..."
          onChange={handleSearch}
        />
        <select
          name="Regions"
          id="region"
          value={selectRegion}
          onChange={handleRegion}
        >
          <option value="">Filter By Region</option>
          <option className="select-op" value="Africa">Africa</option>
          <option className="select-op" value="Americas">Americas</option>
          <option className="select-op" value="Asia">Asia</option>
          <option className="select-op" value="Europe">Europe</option>
          <option className="select-op" value="Oceania">Oceania</option>
        </select>
      </div>
      <div id="country-list" className="country-list"></div>
    </section>
  );
};
