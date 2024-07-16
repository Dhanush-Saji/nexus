"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandGoogle,IconRefresh,IconLoader,IconEye,
  IconEyeOff
} from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { AvatarGenerator } from "random-avatar-generator";
import Image from "next/image";
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";

const Page = () => {
  const [isLoading, setisLoading] = useState(false)
  const [avatarUrl, setavatarUrl] = useState('')
  const router = useRouter()
  const initialForm = {fullname:'',email:'', password:''}
  const [formData, setformData] = useState(initialForm)
  const [passType, setpassType] = useState('password')
  const handleSubmit = async() => {
    if(!formData.fullname || !formData.email || !formData.password){
      toast.error('Fill the data')
      return
    }
    try {  
      setisLoading(true)  
      const userCredential = await createUserWithEmailAndPassword(auth,formData?.email,formData?.password)
      const user = userCredential.user
      await setDoc(doc(firestore, "users",user.uid), {
        name: formData.fullname,
        email: formData.email,
        avatarUrl: avatarUrl
      });
      setformData(initialForm)
      router.push('/')
    } catch (error) {
      console.log(error)
    }finally{
      setisLoading(false)
    }
  };
  const generateAvatar = () => {
    const generator = new AvatarGenerator();
     return generator.generateRandomAvatar()  
  };
  const handleRefreshAvatar = () => {
    setavatarUrl(generateAvatar())
  };
  useEffect(()=>{
    setavatarUrl(generateAvatar())
  },[])
  return (
    <div className='p-4 justify-center items-center flex w-full h-[100vh]'>
    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-6 shadow-input border border-neutral-600 bg-gradient-to-b from-[#131335] to-[#05051e]">
      <div className=" relative w-fit mx-auto mb-3">
      <img src={avatarUrl} alt="avatar" width={60} height={60} className="mx-auto" />
      <button onClick={handleRefreshAvatar} className=" bg-slate-500 p-[0.2rem] rounded-full absolute bottom-0 right-[-10px]">
        <IconRefresh />
      </button>
      </div>
      <h2 className="font-bold text-xltext-neutral-200 text-xl">
      Create Your Nexus Account
      </h2>
      <p className="text-sm max-w-sm text-neutral-300">
      Join Nexus to connect globally with real-time translation. Enter your details to start!
      </p>

      <div className="mt-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="fullname">Name</Label>
            <Input value={formData?.fullname} onChange={(e)=>setformData({...formData,fullname:e.target.value})} id="name" placeholder="Enter name" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input value={formData?.email} onChange={(e)=>setformData({...formData,email:e.target.value})} id="email" placeholder="Enter email" type="email"  />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
          <Input value={formData?.password} onChange={(e)=>setformData({...formData,password:e.target.value})} id="password" placeholder="••••••••" type={passType} />
          <button onClick={()=>{
            if(passType == 'password'){
              setpassType('text')
            }else{
              setpassType('password')
            }
          }} className="absolute right-2 top-[50%] translate-y-[-50%] rounded-[10px] bg-slate-600 p-[0.2rem] flex ">
            {passType == 'password'?<IconEye fontSize={'0.8rem'} />:<IconEyeOff fontSize={'0.8rem'} />}
          </button>
          </div>
        </LabelInputContainer>
        <button onClick={handleSubmit} disabled={isLoading}
          className={` ${isLoading?'bg-[#403f72]':' bg-gradient-to-b from-[#5C59FD] to-[#33327e]'} transition hover:bg-gradient-to-b hover:from-[#444394] hover:to-[#444394] relative group/btn block w-full text-white rounded-[8px] h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]`}
        >
          {
            isLoading?<div className="flex justify-center items-center">
            <IconLoader className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </div>:<>
            Sign up &rarr;
            </>
          }
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[1px] w-full mt-4" />

        <div className="flex flex-col space-y-4 mt-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-[8px] h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
            <span className="text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
        <Link href={'/login'} className='mx-auto w-full flex justify-center mt-4 text-[0.9rem] opacity-50'>Already have an account?</Link>
      </div>
    </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Page
