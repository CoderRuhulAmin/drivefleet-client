"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";


const LoginPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newUser = Object.fromEntries(formData.entries());
        console.log('New User Data: ', newUser);

        const { data, error } = await authClient.signIn.email({
            email: newUser.email,
            password: newUser.password,
        })

        console.log('data: ', data, 'error: ', error);

        if (error) {
            alert(`Credentials Error!`);
        }

        if (data) {
            alert(`User login is successful!`);
            redirect('/');
        }

    };
    const handleGoogleSignin = () => {
        //
    }

    return (
        <main className="bg-gray-100">
            <section className="py-12">
                <div className="max-w-xl mx-auto">
                    <Card className="w-full">
                        <Card.Header className="text-center my-3">
                            <Card.Title className="text-2xl font-bold">Login Account</Card.Title>
                            <Card.Description>Enter your credentials to access your account</Card.Description>
                        </Card.Header>
                        <Form onSubmit={onSubmit}>
                            <Card.Content>
                                <div className="flex flex-col gap-4">

                                    <TextField isRequired name="email" type="email">
                                        <Label>Email</Label>
                                        <Input placeholder="email@example.com" variant="secondary" />
                                        <FieldError />
                                    </TextField>

                                    <TextField isRequired minLength={8} name="password" type="password">
                                        <Label>Password</Label>
                                        <Input placeholder="••••••••" variant="secondary" />
                                        <FieldError />
                                    </TextField>

                                </div>
                            </Card.Content>
                            <Card.Footer className="mt-4 flex flex-col gap-2">
                                <Button className="w-full" type="submit">
                                    Sign In
                                </Button>
                            </Card.Footer>
                        </Form>
                        <div className="flex justify-center items-center gap-2">
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
                            <div className="whitespace-nowrap"> Or sign in with </div>
                            <Separator />
                        </div>
                        <div>
                            <Button onClick={handleGoogleSignin} variant="outline" className={'w-full rounded-md'}><FcGoogle /> Sign in with Google</Button>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    );
};

export default LoginPage;