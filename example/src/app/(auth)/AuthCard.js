import AuthNav from "@/components/AuthNavLink";
import LeftSidebarPart from "@/components/LeftSidebarPart";
import { Button } from "flowbite-react";

const AuthCard = ({ children }) => (
  <div className="relative overflow-hidden h-screen">
    <div className="grid grid-cols-12 gap-3 h-screen bg-authlayout">
      <div className="xl:col-span-5 lg:col-span-5 col-span-12 bg-auth lg:block hidden relative overflow-hidden">
        <LeftSidebarPart />
      </div>
      <div className="xl:col-span-7 lg:col-span-7 col-span-12 sm:px-12 px-4">
        <div className="flex h-screen items-center px-3 lg:justify-start justify-center">
          <div className="max-w-[420px] w-full mx-auto">
            <AuthNav />
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AuthCard
