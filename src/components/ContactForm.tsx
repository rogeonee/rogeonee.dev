import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './Button';

const CONTACT_SCHEMA = z.object({
    firstName: z.string().min(1, 'Please enter your first name'),
    lastName: z.string().min(1, 'Please enter your last name'),
    email: z.string().email('Enter a valid email'),
    message: z.string().min(1, 'Please enter a message'),
});

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
};

export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        defaultValues: initialValues,
        resolver: zodResolver(CONTACT_SCHEMA),
    });

    const onSubmit = async (data: any) => {
        console.log(data);
        reset();
    };


    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:flex-row sm:gap-4">
                <div className="flex flex-col mb-3 w-full">
                    <label htmlFor="first name" className="font-medium mb-0.5">
                        First name
                    </label>
                    <input 
                        {...register("firstName")} 
                        className="valid bg-gray-dark px-4 py-1.5 rounded-2xl border-gray-light focus:border-accent hover:border-accent/30" 
                    />
                    <p>{errors.firstName?.message}</p>
                </div>

                <div className="flex flex-col mb-3 w-full">
                    <label htmlFor="last name" className="font-medium mb-0.5">
                        Last name
                    </label>
                    <input 
                        {...register("lastName")} 
                        className="valid bg-gray-dark border-gray-light focus:border-accent hover:border-accent/30 px-4 py-1.5 rounded-2xl" 
                    />
                    <p>{errors.lastName?.message}</p>
                </div>
            </div>

            <div className="flex flex-col mb-3 w-full">
                <label htmlFor="email" className="font-medium mb-0.5">
                    Email
                </label>
                <input 
                    {...register("email")} 
                    type="email" 
                    className="valid bg-gray-dark border-gray-light focus:border-accent hover:border-accent/30 px-4 py-1.5 rounded-2xl" 
                />
                <p>{errors.email?.message}</p>
            </div>


            <div className="flex flex-col mb-3 w-full">
                <label htmlFor="message" className="font-medium mb-0.5" >
                    Message
                </label>
                <textarea 
                    {...register("message")} 
                    className="valid bg-gray-dark border-gray-light focus:border-accent hover:border-accent/30 px-4 py-1.5 rounded-2xl"
                />
                <p>{errors.message?.message}</p>
            </div>


            <div className="flex items-center gap-6 mt-5">
                <Button 
                    disabled={isSubmitting}
                    extras={isSubmitting ? "loading" : undefined}
                    className="min-w-fit"
                    intent="primary"
                    type="submit"
                >
                    Send it
                </Button>
            </div>
        </form>
    )
}