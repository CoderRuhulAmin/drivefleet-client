"use client";

import Link from "next/link";
import { Dropdown, Button, Avatar, } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const userNavItems = [
    {
        title: "My Bookings",
        href: "/my-bookings",
    },
    {
        title: "My Added Cars",
        href: "/my-added-cars",
    },
    {
        title: "Add Car",
        href: "/add-car",
    },
];


const NavbarUser = ({ user }) => {

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <ul className="flex justify-end items-center gap-3">
            {
                user ? (
                    <li>
                        <Dropdown>
                            <Button className='flex items-center gap-3 bg-transparent text-black' aria-label="Menu">
                                <Avatar>
                                    <Avatar.Image referrerPolicy="no-referrer" alt={"user"} src={user?.image} />
                                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                                </Avatar>
                                <h2>{user?.name}</h2>
                            </Button>
                            <Dropdown.Popover>
                                <ul className='space-y-3 border-0 px-2 py-4'>
                                    {
                                        userNavItems.map((item, index) => {
                                            return (
                                                <li key={index} className="w-full">
                                                    <Link href={item.href} className="w-full block hover:bg-cyan-600 hover:text-white rounded-md px-3 py-1.5">{item.title}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                    <Button onClick={handleSignOut} size="sm" variant="danger" className={"rounded-md w-full"}>
                                        Logout
                                    </Button>
                                </ul>
                            </Dropdown.Popover>
                        </Dropdown>
                    </li>
                ) : (
                    <li className="bg-cyan-600 text-white rounded-md px-3 py-1.5">
                        <Link href={"/login"}>Login/Sign Up</Link>
                    </li>
                )
            }
        </ul>
    );
};

export default NavbarUser;