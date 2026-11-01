import { Head, Link, useForm } from "@inertiajs/react";
import type { FormEvent } from "react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post("/register");
    }

    return (
        <>
            <Head title="Register" />

            <main className="flex min-h-screen items-center justify-center p-6">
                <div className="w-full max-w-md space-y-6">
                    <div>
                        <h1 className="text-2xl font-semibold">
                            Create an account
                        </h1>
                        <p className="text-sm text-gray-500">
                            Enter your details to register.
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(event) =>
                                    setData("name", event.target.value)
                                }
                                autoComplete="name"
                                required
                                className="mt-1 w-full rounded border p-2"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-600">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(event) =>
                                    setData("email", event.target.value)
                                }
                                autoComplete="email"
                                required
                                className="mt-1 w-full rounded border p-2"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(event) =>
                                    setData("password", event.target.value)
                                }
                                autoComplete="new-password"
                                required
                                className="mt-1 w-full rounded border p-2"
                            />
                            {errors.password && (
                                <p className="text-sm text-red-600">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium"
                            >
                                Confirm password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(event) =>
                                    setData(
                                        "password_confirmation",
                                        event.target.value,
                                    )
                                }
                                autoComplete="new-password"
                                required
                                className="mt-1 w-full rounded border p-2"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded bg-black p-2 text-white disabled:opacity-50"
                        >
                            {processing
                                ? "Creating account..."
                                : "Create account"}
                        </button>
                    </form>

                    <p className="text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </main>
        </>
    );
}
