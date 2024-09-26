import React from 'react';
import StatItem from './ui/StatItem';
import { useInView } from 'react-intersection-observer';



const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  const statsData = [
    {id: 0, targetNumber: 15, label: 'Years of Experience' },
    {id: 1, targetNumber: 122, label: 'Success Projects' },
    {id: 2, targetNumber: 36, label: 'Team Members' },
    // {id: 3, targetNumber: 500, label: 'Happy Customers' }
  ];

  return (
    <div ref={ref} className=" py-10">
      <div className="container mx-auto grid  grid-cols-1 md:grid-cols-3 gap-4 text-center">
        
      
    {statsData.map(stat => (
      <StatItem
        key={`${stat.id}`}  // Ensure unique key
        targetNumber={stat.targetNumber}
        label={stat.label}
        inView={inView}
      />
    ))}
  

      </div>
    </div>
  );
};

export default Stats;
