import { getCars, getFeaturedCars } from '@/lib/data';
import React from 'react';
import CarCard from './CarCard';

const FeaturedCars = async () => {
    const data = await getFeaturedCars();
    const cars = data.data;

    console.log("Featured cars: ", cars)



    return (
        <section className='py-12 bg-cyan-100'>
            <div className="container mx-auto">
                <h2 className='text-2xl font-bold mb-2'>Featured Cars</h2>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {
                        cars.map(car => <CarCard key={car._id} car={car} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedCars;