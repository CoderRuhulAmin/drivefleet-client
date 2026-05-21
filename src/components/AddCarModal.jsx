"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Select, ListBox, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";

const AddCarModal = () => {
    const { data: session } = authClient.useSession();
    // console.log(session);
    const user = session?.user;
    console.log(user);

    const [carType, setCarType] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newCar = Object.fromEntries(formData.entries());

        newCar.carType = carType;
        newCar.availabilityStatus = "Available";
        newCar.userEmail = user?.email;
        // console.log('New Car Data: ', newCar);

        const { data: tokenData } = await authClient.token();
        const token = tokenData?.token;
        console.log(token);
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cars`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify(newCar),
        });

        const data = await res.json();
        console.log("Server Response:", data);
    };

    return (
        <Modal>
            <Button variant="secondary">Add Car</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-2xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Add New Car</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <TextField className="w-full" name="carName" type="text" variant="secondary">
                                        <Label>Car Name</Label>
                                        <Input placeholder="Enter your car name" />
                                    </TextField>

                                    <TextField className="w-full" name="dailyRentPrice" type="text" variant="secondary">
                                        <Label>Daily Rent Price</Label>
                                        <Input placeholder="Enter daily rent price" />
                                    </TextField>

                                    <Select
                                        className="w-[256px]"
                                        placeholder="Select one"
                                        selectedKey={carType}
                                        onSelectionChange={(key) =>
                                            setCarType(key)
                                        }
                                    >
                                        <Label>Car Type</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="SUV" textValue="SUV">
                                                    SUV
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Sedan" textValue="Sedan">
                                                    Sedan
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Hatchback" textValue="Hatchback">
                                                    Hatchback
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Luxury" textValue="Luxury">
                                                    Luxury
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                    <TextField className="w-full" name="seatCapacity" type="text" variant="secondary">
                                        <Label>Seat Capacity</Label>
                                        <Input placeholder="Enter seat capacity" />
                                    </TextField>

                                    <TextField className="w-full" name="pickupLocation" type="text" variant="secondary">
                                        <Label>Pickup Location</Label>
                                        <Input placeholder="Enter pickup location" />
                                    </TextField>

                                    <TextField className="w-full" name="description" type="text" variant="secondary">
                                        <Label>Description</Label>
                                        <Input placeholder="Enter description" />
                                    </TextField>

                                    <TextField className="w-full" name="imageUrl" type="text" variant="secondary">
                                        <Label>Image Url</Label>
                                        <Input placeholder="Enter image url" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

export default AddCarModal