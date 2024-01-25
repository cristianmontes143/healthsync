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
    <div className='flex items-center justify-center'>
        <Card className='w-[500px]'>
            <CardHeader>
                <CardTitle className='text-center'>
                    Log in
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
                <Button className='bg-green-800 px-10'>Login</Button>
            </CardFooter>
        </Card>

    </div>
    
  )
}

export default Login;