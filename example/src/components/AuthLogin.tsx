"use client";
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import React , { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { loginType } from "@/app/(app)/types/auth/auth";

const Login = ({ title, subtitle, subtext }: loginType) => {

  const router : any = useRouter()
  const { login } = useAuth({
      middleware: 'guest',
      redirectIfAuthenticated: '/dashboard',
  })
  const [email, setEmail] = useState("admin@gtm.com");
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(false)
  const [error, setErrors] = useState('')
  const [status, setStatus] = useState<string | null>(null);
  
  useEffect(() => {
    console.log(router)
      if (router.reset?.length > 0 && error.length === 0) {
          setStatus(atob(router.reset))
      } else {
          setStatus(null)
      }
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="rmail" value="Email" />
          </div>
          <TextInput
            id="Email"
            type="text"
            sizing="md"
            value={email}
            className={`form-control ${error != "" ? 'error-border' : ''}`}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="Password" value="Password" />
          </div>
          <TextInput
            id="password"
            type="password"
            sizing="md"
            className={`form-control ${error != "" ? 'error-border' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between my-5">
          <div className="flex items-center gap-2">
            <Checkbox id="accept" className="checkbox" />
            <Label
              htmlFor="accept"
              className="opacity-90 font-normal cursor-pointer"
            >
              Remeber this Device
            </Label>
          </div>
          <Link href={"/forgot-password"} className="text-primary text-sm font-medium">
            Forgot Password ?
          </Link>
        </div>
        <Button color={"primary"} type="submit" className=" w-full">
          Sign in
        </Button>
      </form>
    </>
  );
};

export default Login;
