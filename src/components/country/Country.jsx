import './Country.css'
const Country = ({country, countryFlag}) => {
    console.log(country, countryFlag)
    
    
    return (
        <div className='country'>
            <p>Name: {country?.common}</p>
            <img src={countryFlag.png} alt="" />
        </div>
    );
};

export default Country;