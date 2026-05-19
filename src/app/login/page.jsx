"use client";

import { Card, Separator } from "@heroui/react";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });


        if (data) {
            redirect('/')
        }

        if (error) {
            // toast
            alert("Error");
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <main className="bg-gray-100">
            <section className="py-12">
                <div className="container mx-auto my-20">
                    <div className="w-4/12 mx-auto">
                        <Card className="card shadow-xl rounded-xl">
                            <div className="text-center my-3">
                                <h1 className="text-2xl font-bold">Login</h1>
                                <p className="text-neutral-500">Start your journey with DriveFleet</p>
                            </div>
                            <Form onSubmit={onSubmit} className="flex flex-col gap-4">
                                <TextField
                                    isRequired
                                    name="email"
                                    type="email"
                                    validate={(value) => {
                                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                            return "Please enter a valid email address";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label>Email</Label>
                                    <Input placeholder="john@example.com" />
                                    <FieldError />
                                </TextField>
                                <TextField
                                    isRequired
                                    minLength={8}
                                    name="password"
                                    type="password"
                                    validate={(value) => {
                                        if (value.length < 8) {
                                            return "Password must be at least 8 characters";
                                        }
                                        if (!/[A-Z]/.test(value)) {
                                            return "Password must contain at least one uppercase letter";
                                        }
                                        if (!/[0-9]/.test(value)) {
                                            return "Password must contain at least one number";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label>Password</Label>
                                    <Input placeholder="Enter your password" />
                                    <Description>
                                        Must be at least 8 characters with 1 uppercase and 1 number
                                    </Description>
                                    <FieldError />
                                </TextField>
                                <div className="flex justify-center gap-2">
                                    <Button className={"w-full bg-cyan-500 rounded-md"} type="submit">
                                        Login
                                    </Button>
                                </div>
                            </Form>

                            <div className="flex justify-center items-center gap-3">
                                <span>Don't have an account?</span>

                                <Link
                                    href="/signup"
                                    className="text-cyan-500 font-medium hover:underline"
                                >
                                    Sign Up
                                </Link>
                            </div>
                            <div className="flex justify-center items-center gap-3 mt-5">
                                <Separator />
                                <div className="whitespace-nowrap"> Or sign up with </div>
                                <Separator />
                            </div>
                            <div>
                                <Button
                                    onClick={handleGoogleSignin}
                                    variant="outline"
                                    className={"w-full rounded-md"}
                                >
                                    <FcGoogle /> Sign in with Google
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LoginPage;
