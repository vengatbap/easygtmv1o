import React, { useContext } from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

interface AuthNavProps {
    className: string;
    isActive : boolean
  }

const AuthNav : React.FC<AuthNavProps> = ({ className, isActive }) => {

    return (
    <>
        <div className="flex bg-muted p-1 rounded-sm">
        
            <div className="grid grid-cols-2 content-stretch w-full gap-3">
                <div className="flex col-span-1">
            <Button
                as={Link}
                href="/register"
                fullSized
                className="flex justify-center p-0.5 text-center bg-primary font-medium2 bg-transparent"
            >
                Sign Up
            </Button>
            </div>
            <div className="flex col-span-1">

            <Button
                as={Link}
                fullSized
                href="/login"
                className="flex justify-center p-0.5 text-center font-medium2 bg-transparent"
            >
                Sign In
            </Button>
            </div>
            </div>
        </div>

</>
  );
}

export default AuthNav;
