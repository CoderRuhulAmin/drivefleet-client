import { headers } from "next/headers";
import { auth } from "./auth";

export const getCars = async (status) => {
    try {
        const response = await fetch(
            `${process.env.API_BASE_URL}/cars?status=${status}`
        );

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to fetch cars:", error);
    }
};

export const getFeaturedCars = async () => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/featured`);

        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {

        console.error("Failed to fetch cars:", error);

    }
};

export const getMyBookings = async () => {
    try {
        const { token } = await auth.api.getToken({
            headers: await headers()
        })

        const response = await fetch(`${process.env.API_BASE_URL}/my-bookings`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();

        console.log(data);

        return data;

    } catch (error) {
        console.error("Failed to fetch cars:", error);
    }
};