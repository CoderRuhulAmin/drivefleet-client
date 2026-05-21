"use client";
import React from 'react';
import NavItems from './NavItems';
import { authClient } from '@/lib/auth-client';
import NavbarUser from './NavbarUser';
import Link from 'next/link';
import AddCarModal from './AddCarModal';

const Navbar = () => {

    const { data: session } = authClient.useSession();
    // console.log(session);
    const user = session?.user;
    // console.log(user);

    return (
        <nav className="grid grid-cols-1 lg:grid-cols-3 container mx-auto space-y-4 lg:space-y-0">

            <div className='flex items-center gap-3'>
                <Link href='/'>
                    <h2 className='text-3xl font-bold'>DRIVE<strong className='text-cyan-600'>FLEET</strong></h2>
                </Link>
            </div>

            <ul className="flex justify-center items-center gap-3">
                <NavItems />
                <AddCarModal />
            </ul>

            <NavbarUser user={user} />

        </nav>
    );
};

export default Navbar;