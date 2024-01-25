import React from 'react'
import { Button } from './ui/button';
import { Input } from "./ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "@/components/ui/label"



const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <Card className='w-[800px]'>
        <div className='w-1/2'>
            <CardHeader>
            <img className='mx-32' src="/logo.png" width={100} height={50} />
                <CardTitle className='text-center'>
                    HealthSync
                </CardTitle>
            </CardHeader>

            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name='email' placeholder="Enter your email here" type='email'/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name='password' placeholder="Password" type='password'/>
                        
                        </div>
                    </div>
                </form>       
            </CardContent>
            <CardFooter className="flex flex-1 justify-center">
                <Button className='bg-green-800 px-8'>Login</Button>
            </CardFooter>
            <div className='text-center text-cyan-500 ' >
                <a href='/forgot-password'>Forgot Password?</a>
            </div>
        </div>
        </Card>

    </div>
    
  )
}

export default Login;