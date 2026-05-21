import React from "react";
import { Card, CardFooter, Button, Chip, CardTitle, } from "@heroui/react";
import { Users, MapPin, CarFront } from "lucide-react";
import Image from "next/image";

const CarCard = ({ car }) => {

    const { _id, carName, dailyRentPrice, carType, imageUrl, seatCapacity, pickupLocation, description, availabilityStatus, userEmail } = car;

    return (
        <Card className="max-w-sm rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-none">
            <CardTitle className="p-0 relative">
                <Image
                    removeWrapper
                    src={imageUrl}
                    alt={carName}
                    width={200}
                    height={200}
                    className="w-full h-64 object-cover"
                />

                <Chip
                    color="success"
                    variant="solid"
                    className="absolute top-4 right-4 z-10"
                >
                    {availabilityStatus}
                </Chip>
            </CardTitle>

            <CardFooter className="flex flex-col items-start gap-4 p-5">
                <div className="w-full flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">
                            {carName}
                        </h2>

                        <p className="text-default-500 text-sm">
                            Premium {carType} for comfortable rides
                        </p>
                    </div>

                    <CarFront className="text-primary" size={28} />
                </div>

                <div className="grid grid-cols-2 gap-3 w-full">
                    <div className="bg-default-100 rounded-xl p-3 flex items-center gap-2">
                        <Users size={18} />
                        <div>
                            <p className="text-xs text-default-500">
                                Seats
                            </p>
                            <h4 className="font-semibold">
                                {seatCapacity} Persons
                            </h4>
                        </div>
                    </div>

                    <div className="bg-default-100 rounded-xl p-3 flex items-center gap-2">
                        <MapPin size={18} />
                        <div>
                            <p className="text-xs text-default-500">
                                Location
                            </p>
                            <h4 className="font-semibold">
                                {pickupLocation}
                            </h4>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-default-600 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between w-full pt-2">
                    <div>
                        <p className="text-sm text-default-500">
                            Daily Rent
                        </p>

                        <h3 className="text-3xl font-bold text-primary">
                            ৳{dailyRentPrice}
                            <span className="text-base font-medium text-default-500">
                                /day
                            </span>
                        </h3>
                    </div>

                    <Button
                        color="primary"
                        radius="full"
                        size="lg"
                        className={'bg-cyan-600'}
                    >
                        Rent Now
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default CarCard;