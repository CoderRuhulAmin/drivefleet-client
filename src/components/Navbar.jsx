import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import NavItems from './NavItems';

const Navbar = () => {

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

            <ul className="flex justify-center items-center gap-3">
                <li>
                    <Link href={"/profile"}>Profile</Link>
                </li>

                <>
                    <li>
                        <Button size="sm" variant="danger" className={"rounded-none"}>
                            Logout
                        </Button>
                    </li>
                </>
                <>
                    <li>
                        <Link href={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link href={"/signup"}>Sign Up</Link>
                    </li>
                </>

            </ul>

        </nav>
    );
};

export default Navbar;