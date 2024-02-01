// src/pages/ListingPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';
import propertiesData from '../../data/propertiesData';
import './ListingPage.css';

const ListingPage = () => {
  const { id } = useParams();
  const property = propertiesData.find((item) => String(item.id) === id);

  if (!property) {
    // Handle the case when the property is not found
    return <div>Property not found</div>;
  }

  return (
    <div className="container">
      <h2>{property.name} Details</h2>
      <div className="property-details">
        <img src={property.image} alt={property.name} />
        <p>Status: {property.status}</p>
        <p>Price: {property.price}</p>
        <p>Address: {property.address}</p>
        <p>Amenities: {property.amenities}</p>
        {/* Add more details as needed */}
      </div>
      <br />
      <h2>Request more information</h2>
      <ContactForm />
    </div>
  );
};

export default ListingPage;
