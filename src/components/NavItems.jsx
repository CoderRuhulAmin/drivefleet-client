'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
    Home,
    CarFront,
    CalendarCheck2,
    PlusCircle,
} from "lucide-react";

const NavItems = () => {


    const pathname = usePathname();

    const navItems = [
        {
            title: "Home",
            href: "/",
            icon: Home,
        },
        {
            title: "Explore Cars",
            href: "/cars",
            icon: CarFront,
        },
        {
            title: "My Bookings",
            href: "/my-booking",
            icon: CalendarCheck2,
        },
        {
            title: "Add Car",
            href: "/add-car",
            icon: PlusCircle,
        },
    ];

    return (
        <>
            {
                navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <li key={item.href}>
                            <Link href={item.href} className={`px-2 py-1 rounded-md hover:text-cyan-600 ${isActive ? "text-cyan-600" : ""}`}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })
            }
        </>
    );
};

export default NavItems;