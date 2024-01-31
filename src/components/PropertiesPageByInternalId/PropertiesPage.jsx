// src/pages/PropertiesPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './PropertiesPage.css';
import propertiesData from '../../data/propertiesData';


const PropertiesPage = () => {

  return (
    <div className="container">
      <h2>Featured Properties</h2>
      <div className="properties-grid">
        {propertiesData.map((property) => (
          <div key={property.id} className="properties-grid__item-wrap">
            {/* Use the Link to pass property data in the state */}
            <Link to={`/properties/${property.id}`} state={{ property }} className="properties-grid__item">
              <div className="properties-grid__img">
                <span className="status-tile">{property.status}</span>
                <img src={property.image} alt={property.name} />
              </div>
                <h3>{property.name}</h3>
                <div className="properties-grid__price serif">{property.price}</div>
              <p className="properties-grid__address">{property.address}</p>
              <div className="properties-grid__amenities">{property.amenities}</div>
              <div className="properties-grid__footer">
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
