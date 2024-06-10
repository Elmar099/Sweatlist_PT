import React from 'react'
import PriceCard from '@components/PriceCard';


const Pricing = () => {
  const pricingOptions = [
    {
      title: 'Standard',
      dsc: 'Perfect for beginners  and new-comers who need guidance to start and succeed.',
      price: '0.00',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    },
    {
      title: 'Beginner',
      dsc: 'Ideal for regular gym-goers who want more workouts and extended support.',
      price: 9.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    },
    {
      title: 'Professional',
      dsc: 'Best for fitness enthusiasts who want unlimited access and extra perks.',
      price: 14.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    }
  ];

  return (
    <div className='mt-10'>
      <h1 className='text-white text-4xl text-center mb-12'>Choose the best plan that fits your personal goals</h1>
      <div className='flex justify-center space-x-12'>
        {pricingOptions.map((option, index) => (
          <PriceCard 
            key={index}
            title={option.title}
            dsc={option.dsc}
            price={option.price}
            features={option.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;