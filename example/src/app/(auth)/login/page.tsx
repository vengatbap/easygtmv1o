import CardBox from "@/components/CardBox";
import AuthLogin from "@/components/AuthLogin";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Easy-GTM Login ",
  description: "Login to your app",
};

const Login = () => {
  return (
    <>
          <CardBox className="md:w-[450px] w-full border-none">
            <div className="mx-auto">
             <h1 className="text-xl">Get started with EasyGTM</h1>
            </div>
            <AuthLogin />
            <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
              <Link
                href={"/auth/auth2/register"}
                className="text-primary text-sm font-medium"
              >
                Sign in with google
              </Link>
            </div>
          </CardBox>
    </>
  );
};

export default Login;



// const Login = ({ title, subtitle, subtext }: loginType) => {

//   const router : any = useRouter()
//   const { login } = useAuth({
//       middleware: 'guest',
//       redirectIfAuthenticated: '/dashboard',
//   })
//   const [email, setEmail] = useState("admin@gtm.com");
//   const [password, setPassword] = useState('')
//   const [shouldRemember, setShouldRemember] = useState(false)
//   const [error, setErrors] = useState('')
//   const [status, setStatus] = useState(null);
  
//   useEffect(() => {
//     console.log(router)
//       if (router.reset?.length > 0 && error.length === 0) {
//           setStatus(atob(router.reset))
//       } else {
//           setStatus(null)
//       }
//   })

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//       login({
//           email,
//           password,
//           remember: shouldRemember,
//           setErrors,
//           setStatus,
//       })
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="mt-6">
//         <div className="mb-4">
//           <div className="mb-2 block">
//             <Label htmlFor="rmail" value="Email" />
//           </div>
//           <TextInput
//             id="Email"
//             type="text"
//             sizing="md"
//             value={email}
//             className={`form-control ${error != "" ? 'error-border' : ''}`}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <div className="mb-2 block">
//             <Label htmlFor="Password" value="Password" />
//           </div>
//           <TextInput
//             id="password"
//             type="password"
//             sizing="md"
//             className={`form-control ${error != "" ? 'error-border' : ''}`}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-between my-5">
//           <div className="flex items-center gap-2">
//             <Checkbox id="accept" className="checkbox" />
//             <Label
//               htmlFor="accept"
//               className="opacity-90 font-normal cursor-pointer"
//             >
//               Remeber this Device
//             </Label>
//           </div>
//           <Link href={"/forgot-password"} className="text-primary text-sm font-medium">
//             Forgot Password ?
//           </Link>
//         </div>
//         <Button color={"primary"} type="submit" className=" w-full">
//           Sign in
//         </Button>
//       </form>
//     </>
//   );
// };

// export default Login;
