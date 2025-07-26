import { useState } from 'react';
import './Country.css'
const Country = ({country, countryFlag, countryCode, handleVisitedCountries}) => {
    // console.log(country, countryFlag, countryCode)

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }
    
    console.log(handleVisitedCountries)
    
    return (
        <div className={`country ${visited ? 'bgColorVisited' : 'bgColorNonVisited'}`}>
            
            <img src={countryFlag.png} alt="" />
            <h2 style={{color: visited ? 'black' : 'gray'}}>{country?.common}</h2>
            <p><small style={{color: visited ? 'black' : 'gray'}}>Code: {countryCode}</small></p>

            <button onClick={() => handleVisitedCountries(country)}>Visited Container</button>
            <hr />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited' : 'I want to visit'}
        </div>
    );
};

export default Country;