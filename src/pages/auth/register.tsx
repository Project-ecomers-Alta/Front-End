import logo from "../../assets/ecommerce.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const register = () => {
  return (
    <div className="flex flex-col justify-center h-screen font-poppins text-black">
      <div className="hidden md:flex flex-row items-center justify-center">
        <div className="bg-cyan-200 min-h-screen w-full flex flex-col items-center justify-end">
          <img src={logo} className="mb-20 h-3/4 w-3/4" />
        </div>
        <Tabs defaultValue="login" className="w-[800px] px-16">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login to your existing account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" />
                </div>
              </CardContent>
              <CardFooter>
                <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-80 rounded-full text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105">
                  Login
                </button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Don't have an account? Sign-up here!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="username" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="domisili">Domisili</Label>
                  <Input id="domisili" type="domisili" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-80 rounded-full text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105">
                  Register
                </button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default register;
