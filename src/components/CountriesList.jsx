import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div
      className="col-5"
      style={{
        maxHeight: '90vh',
        overflow: 'scroll',
      }}
    >
      <div className="list-group">
        {countries.map((country) => {
          return (
            <>
              <Link
                key={country.alpha3Code}
                className="list-group-item list-group-item-action"
                to={`/country/${country.alpha3Code}`}
              >
                <img
                  style={{
                    height: '15px',
                    width: '20px',
                  }}
                  className="thumbnail rounded"
                  src={country.flag}
                />
                &nbsp;&nbsp;{country.name}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
