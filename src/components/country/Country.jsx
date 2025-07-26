import { useState } from 'react';
import './Country.css'
const Country = ({country, countryFlag, countryCode}) => {
    console.log(country, countryFlag, countryCode)

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }
    
    
    return (
        <div className='country'>
            
            <img src={countryFlag.png} alt="" />
            <h2>{country?.common}</h2>
            <p><small>Code: {countryCode}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited' : 'I want to visit'}
        </div>
    );
};

export default Country;