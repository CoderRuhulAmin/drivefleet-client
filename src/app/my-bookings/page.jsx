import BookingCard from '@/components/BookingCard';
import { getMyBookings } from '@/lib/data';
import React from 'react';
export const dynamic = "force-dynamic";
const MyBookingsPage = async () => {
    
    const data = await getMyBookings();
    const bookings = data?.data || [];

    // console.log("All bookings: ", bookings)

    return (
        <section className='py-12 bg-gray-100'>
            <div className="container mx-auto">
                <h2 className='text-2xl font-bold mb-2'>
                    My Bookings <span className='text-cyan-600'>({bookings.length})</span>
                </h2>
                <div className="grid grid-cols-1 gap-5">
                    {
                        bookings.map(booking => <BookingCard key={booking._id} booking={booking} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyBookingsPage;