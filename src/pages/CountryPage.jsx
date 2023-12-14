import React from "react";
import CountryDetailsPage from "../Components/CountryPage/CountryDetails";
const CountryPage = (props) => {
  return (
    <>
      <CountryDetailsPage dark={props.darkmode} />;
    </>
  );
};

export default CountryPage;
