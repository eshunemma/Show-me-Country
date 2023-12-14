import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetailsPage = (props) => {
  const styles = {
    backgroundColor: props.dark ? "#2B3844" : "#fafafafa",
    boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
    color: props.dark ? "white" : "black",
  };
  const styles2 = {
    backgroundColor: props.dark ? "#202C36" : "#fafafafa",
    boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
    color: props.dark ? "white" : "black",
  };
  async function getCountryData(name) {
    return (await fetch(`https://restcountries.com/v3.1/alpha/${name}`)).json();
  }
  const [country, setCountry] = useState({});
  let { name } = useParams();

  let data = getCountryData(name);
  data
    .then((res) => {
      setCountry((prev) => (prev = res["0"]));
    })
    .catch((err) => console.log(err));

  // console.log(country.borders);

  return (
    <>
      <div className="button-link" style={styles}>
        <Link to="/">
          <p>👈 Back Home</p>
        </Link>
      </div>

      <div className="content" style={styles2}>
        <img src={country.flags?.png} alt="flag" />
        <div className="topic-de">
          <h1>{country.name?.official}</h1>
          <div className="details">
            <div>
              <p>
                <span>
                  <strong>Native Name:</strong>
                </span>{" "}
                {country.name?.nativeName.eng?.official}
              </p>
              <p>
                <span>
                  <strong>Population:</strong>
                </span>{" "}
                {country.population}
              </p>
              <p>
                <span>
                  <strong>Region:</strong>
                </span>{" "}
                {country.region}
              </p>
              <p>
                <span>
                  <strong>Sub Region:</strong>
                </span>{" "}
                {country.subregion}
              </p>
              <p>
                <span>
                  <strong>Capital:</strong>
                </span>{" "}
                {country.capital}
              </p>
            </div>
            <div>
              <p>
                <span>
                  <strong>Top Level Domain:</strong>
                </span>{" "}
                Yet to be done
              </p>
              <p>
                <span>
                  <strong>Currencies:</strong>
                </span>{" "}
                Yet to be done
              </p>
              <p>
                <span>
                  <strong>Languages:</strong>
                </span>{" "}
                {country?.languages &&
                  Object.values(country.languages).map((lang) => {
                    return <p>{lang}</p>;
                  })}
              </p>
            </div>
          </div>
          <div className="borders">
            <p>
              <strong>Border Countries</strong>:
            </p>
            <ul>
              {country?.borders &&
                country.borders.map((p) => {
                  return (
                    <Link to={`/country-details/${p}`}>
                      <li className="borderNa" key={p}>
                        {p}
                      </li>{" "}
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetailsPage;
