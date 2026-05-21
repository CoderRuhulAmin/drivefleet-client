import { getCars } from '@/lib/data';
import React from 'react';
import CarCard from './CarCard';

const AvailableCars = async () => {
    const status = "Available";
    const data = await getCars(status);
    const cars = data.data;

    console.log("available cars: ", cars)



    return (
        <section className='py-12 bg-gray-100'>
            <div className="container mx-auto">
                <h2 className='text-2xl font-bold mb-2'>
                    Available Cars <span className='text-cyan-600'>({cars.length})</span>
                </h2>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {
                        cars.map(car => <CarCard key={car._id} car={car} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AvailableCars;