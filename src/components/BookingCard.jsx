import React from "react";
import { Card, CardFooter, Button, Chip, CardTitle, } from "@heroui/react";
import Image from "next/image";

import {
    CalendarDays,
    MapPin,
    BadgeCheck,
    CarFront,
    Wallet,
} from "lucide-react";

const BookingCard = ({ booking }) => {
    return (
        <Card className="w-full flex flex-col lg:flex-row overflow-hidden rounded-2xl shadow-lg">

            {/* Image Section */}
            <div className="relative w-full lg:w-[320px] h-[220px] lg:h-auto shrink-0">
                <Image
                    src={booking.imageUrl}
                    alt={booking.carName}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                />

                <Chip
                    color="success"
                    className="absolute top-3 right-3"
                >
                    {booking.bookingStatus}
                </Chip>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 gap-5">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                        <h2 className="text-2xl font-bold">
                            {booking.carName}
                        </h2>

                        <p className="text-default-500 text-sm">
                            Booking ID: {booking.bookingId}
                        </p>
                    </div>

                    <CarFront
                        size={30}
                        className="text-primary"
                    />
                </div>

                {/* Description */}
                <p className="text-sm text-default-600 leading-relaxed">
                    {booking.specialNote}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                    <div className="bg-default-100 rounded-xl p-3">
                        <p className="text-xs text-default-500">
                            Car Type
                        </p>

                        <h4 className="font-semibold">
                            {booking.carType}
                        </h4>
                    </div>

                    <div className="bg-default-100 rounded-xl p-3 flex items-center gap-2">
                        <CalendarDays size={18} />

                        <div>
                            <p className="text-xs text-default-500">
                                Days
                            </p>

                            <h4 className="font-semibold">
                                {booking.bookingDays}
                            </h4>
                        </div>
                    </div>

                    <div className="bg-default-100 rounded-xl p-3 flex items-center gap-2">
                        <MapPin size={18} />

                        <div>
                            <p className="text-xs text-default-500">
                                Pickup
                            </p>

                            <h4 className="font-semibold truncate">
                                {booking.pickupLocation}
                            </h4>
                        </div>
                    </div>

                    <div className="bg-default-100 rounded-xl p-3">
                        <p className="text-xs text-default-500">
                            Driver
                        </p>

                        <h4 className="font-semibold">
                            {booking.driverNeeded}
                        </h4>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-auto">

                    <div className="flex items-center gap-3">
                        <Wallet
                            size={24}
                            className="text-primary"
                        />

                        <div>
                            <p className="text-sm text-default-500">
                                Total Price
                            </p>

                            <h3 className="text-3xl font-bold text-primary">
                                ৳{booking.totalPrice}
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <Button
                            radius="full"
                            className="w-full bg-cyan-600 sm:w-auto"
                        >
                            View Details
                        </Button>

                        <Button
                            variant="danger"
                            radius="full"
                            className="w-full sm:w-auto"
                        >
                            Cancel Booking
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default BookingCard;