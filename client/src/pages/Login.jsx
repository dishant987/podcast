"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils.js";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

import { Link } from "react-router-dom"
import { Switch } from "../components/ui/switch";
import { toast } from "sonner";
import { Card } from '../components/ui/card'

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};

export default function Login() {


    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            setError(() => "Please fill out all fields");
            return;
        }

        setIsLoading(() => true);
        setError(() => "");

        setIsLoading(() => false);
    };

    return (
        <Card className="dark:bg-black md:max-w-[450px]  max-w-[350px] mx-auto mt-10">
            <div className="mx-auto  max-w-fit sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white shadow-input dark:bg-black rounded-3xl p-2 sm:p-6 md:p-8">
                <h2 className="font-bold text-neutral-800 dark:text-neutral-200 text-center text-2xl sm:text-3xl m-3">
                    <Link to={'/'} className=" uppercase">
                    Login to podcast
                    </Link>
                </h2>
                <p className="mt-2 max-w-sm text-sm sm:text-base text-neutral-600 dark:text-neutral-300 text-center py-3">
                    If you don&apos;t have an account,{" "}
                    <Link to="/sign-up" className="text-orange-500 hover:underline">

                        register
                    </Link>{" "}
                    with podcast
                </p>

                {error && (
                    <p className="mt-4 sm:mt-3 text-center text-sm text-red-500 dark:text-red-400">
                        {error}
                    </p>
                )}
                <form className="my-4 sm:my-8" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-3 sm:mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            className="border-gray-500"
                            id="email"
                            name="email"
                            placeholder="projectmayhem@fc.com"
                            type="email"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-3 sm:mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            className="border-gray-500"
                            id="password"
                            name="password"

                            placeholder="••••••••"
                            type={showPassword ? "text" : "password"}
                        />
                    </LabelInputContainer>
                    <div className="flex items-center my-3 sm:my-4">
                        <Switch
                            id="show-password"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                        <label htmlFor="show-password" className="ml-2">
                            Show password
                        </label>
                    </div>

                    <button
                        className="group/btn border relative flex items-center justify-center space-x-2 h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                Login &nbsp;

                            </>
                        ) : (
                            <>Login &rarr;</>
                        )}
                        <BottomGradient />
                    </button>

                    <div className="my-4 sm:my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                    <div className="flex flex-col space-y-3 sm:space-y-4">
                        <button
                            className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="button"
                            disabled={isLoading}
                        >
                            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                Google
                            </span>
                            <BottomGradient />
                        </button>
                        <button
                            className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="button"
                            disabled={isLoading}
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                GitHub
                            </span>
                            <BottomGradient />
                        </button>
                    </div>
                </form>
            </div>

        </Card>

    );
}
