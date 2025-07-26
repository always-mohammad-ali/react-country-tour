import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,subregion,languages,currencies,cca2"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = visitedCountry =>{
    console.log('add countries to visited container')
    console.log(visitedCountry);
  }

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      
      <div>
        <h3>Visited Countries Container</h3>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.name.official}

            country={country.name}
            countryFlag={country.flags}
            countryCode={country.cca2}

            handleVisitedCountries = {handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
