import React from 'react'

const PriceCard = ({ title, dsc, price, features}) => {
return (
<div className="bg-white p-6 rounded-lg shadow-lg text-left">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-3xl font-bold mb-4">${price}</p>
      <p className="mb-4 w-64">{dsc}</p>
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <p className='text-center'><button className="bg-blue-500 text-white text-center px-8 py-2 rounded hover:bg-blue-700 transition-all">Choose Plan</button></p>
    </div>
  );
};

export default PriceCard;