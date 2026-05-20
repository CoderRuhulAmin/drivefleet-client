"use client";
import { Button, Dropdown, Label } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import NavItems from './NavItems';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import NavbarUser from './NavbarUser';

const Navbar = () => {

    const { data: session } = authClient.useSession();
    // console.log(session);
    const user = session?.user;
    // console.log(user);

    // const handleSignOut = () => {
    //     //
    // }
    return (
        <nav className="grid grid-cols-1 lg:grid-cols-3 container mx-auto space-y-4 lg:space-y-0">

            <div className='flex items-center gap-3'>
                <h1 className='text-3xl font-bold'>DRIVE<strong className='text-cyan-600'>FLEET</strong></h1>
            </div>

            <ul className="flex justify-center items-center gap-3">
                <NavItems />
            </ul>

            <NavbarUser user={user} />

        </nav>
    );
};

export default Navbar;