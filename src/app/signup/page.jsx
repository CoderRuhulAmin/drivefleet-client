"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";


const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newUser = Object.fromEntries(formData.entries());
        console.log('New User Data: ', newUser);

        const { data, error } = await authClient.signUp.email({
            email: newUser.email,
            password: newUser.password,
            name: newUser.name,
            image: newUser.image
        })

        console.log('data: ', data, 'error: ', error);

        if (error) {
            alert({ error });
        }

        if (data) {
            alert(`User is created successful!`, data);
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
                        <Card.Header>
                            <Card.Title>Create Account</Card.Title>
                            <Card.Description>Enter your credentials to create your new account</Card.Description>
                        </Card.Header>
                        <Form onSubmit={onSubmit}>
                            <Card.Content>
                                <div className="flex flex-col gap-4">
                                    <TextField isRequired name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter you name" variant="secondary" />
                                        <FieldError />
                                    </TextField>
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
                                    <TextField name="image" type="text">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter your image link" variant="secondary" />
                                        <FieldError />
                                    </TextField>
                                </div>
                            </Card.Content>
                            <Card.Footer className="mt-4 flex flex-col gap-2">
                                <Button className="w-full" type="submit">
                                    Create Account
                                </Button>
                            </Card.Footer>
                        </Form>
                        <div className="flex justify-center items-center gap-2">
                            <span>Already have an account?</span>

                            <Link
                                href="/login"
                                className="text-cyan-500 font-medium hover:underline"
                            >
                                Sign In
                            </Link>
                        </div>
                        <div className="flex justify-center items-center gap-3 mt-5">
                            <Separator />
                            <div className="whitespace-nowrap"> Or sign up with </div>
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

export default SignUpPage;