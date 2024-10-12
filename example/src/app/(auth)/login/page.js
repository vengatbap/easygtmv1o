'use client'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import React , { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Input from '@/components/Input'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }
    const handleSubmit = async event => {
        event.preventDefault()
        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={handleSubmit} className="mt-6">
                <div className="mb-4">
                    <div className="mb-2 block">
                    <Label htmlFor="email" value="email" />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        value={email}
                        className={`form-rounded-md block mt-1 w-full ${errors.message ? 'error-border' : ''}`}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoFocus
                    />
                </div>
                <div className="mb-4">
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="password" />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        className={`form-rounded-md block mt-1 w-full ${errors.message ? 'error-border' : ''}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex justify-between my-5">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember_me"
                            type="checkbox"
                            name="remember"
                            className=" border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={event =>
                                setShouldRemember(event.target.checked)
                            }
                        />
                        <Label
                            htmlFor="remember_me"
                            className="opacity-90 font-normal cursor-pointer"
                        >
                            Remeber this Device
                        </Label>
                    </div>
                    <Link href={"/forgot-password"} className="text-primary text-sm font-medium">
                        Forgot Password ?
                    </Link>
                </div>
                <Button color="primary"  className="bg-primary w-full rounded-md">
                    Sign in
                </Button>

            </form>
        </>
    )
}

export default Login
