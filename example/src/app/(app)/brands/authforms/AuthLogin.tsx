"use client";
import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { loginType } from "@/app/(admin)/types/auth/auth";
// import { signIn, useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
import { Icon } from "@iconify/react";
// import { Session } from "inspector";
import axios from '@/utils/axios';
import { GET } from '@/app/services'

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  // const { data: Session, status } = useSession();
  const [username, setUsername] = useState("admin@gtm.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {

     const res = await GET('https://84bf-2003-ef-2f05-756a-2334-920f-c99a-87b7.ngrok-free.app/')

    console.log(res)
    loginHit()
      // const addedInvoice = response.data;
    } catch (error) {
      console.error('Error login:', error);
    }
    // const result = await signIn("credentials", {
    //   redirect: false,
    //   username,
    //   password,
    // });

    // console.log(result);
    //   if (result?.error) {
    //     // Handle successful sign-in
    //     setError(result.error);
    //   }
  };
  const loginHit = async()=>{
  
    const credential = { email: username, password: password }
    const response = await axios.post('https://84bf-2003-ef-2f05-756a-2334-920f-c99a-87b7.ngrok-free.app/login', credential, );
    console.log(response)
  }
  // if(status === 'authenticated' && Session) {
  //   return redirect("/dashboard");
  // }
  return (
    <>
      {title ? <p>{title}</p> : null}

      {subtext}
      {error ? (
        <div className="mt-4">
          <Alert
            color={"lighterror"}
            icon={() => (
              <Icon
                icon="solar:info-circle-outline"
                className="me-3"
                height={20}
              />
            )}
          >
            Sign-in error: Username or Password is Wrong
          </Alert>
        </div>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="Username" value="Username" />
          </div>
          <TextInput
            id="Username"
            type="text"
            sizing="md"
            value={username}
            className={`form-control ${error !== "" ? 'error-border' : ''}`}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            type="password"
            sizing="md"
            className={`form-control ${error !== "" ? 'error-border' : ''}`}
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

      {subtitle}
    </>
  );
};

export default AuthLogin;
