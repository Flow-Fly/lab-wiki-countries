import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = ({ match, countries }) => {
  const id = match.params.id;
  const country = countries.find((country) => country.alpha3Code === id);

  const hasBordersWith = countries.map((searchedCountry) => {
    if (country.borders.includes(searchedCountry.alpha3Code)) {
      const id = searchedCountry.alpha3Code;
      const name = searchedCountry.name;
      return { id, name };
    } else return false;
  });
  const filtered = hasBordersWith.filter((country) => country);

  return (
    <div className="col-7">
      <h1>{country.name}</h1>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Flag</td>
            <td>
              <img
                style={{
                  height: '30px',
                  width: 'auto',
                }}
                src={country.flag}
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td
              style={{
                width: '30%',
              }}
            >
              Capital
            </td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {filtered.length > 0 ? (
                  filtered.map((c) => {
                    return (
                      <li key={c.id} className="list-item unstyled">
                        <Link to={c.id}>{c.name}</Link>
                      </li>
                    );
                  })
                ) : (
                  <li className="list-item unstyled">
                    This country has no terrestrial borders
                  </li>
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
