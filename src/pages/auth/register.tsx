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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginType,
  RegisterType,
  loginSchema,
  registerSchema,
} from "@/utils/apis/auth/types";
import { userLogin, userRegister } from "@/utils/apis/auth/api";
import { useToken } from "@/utils/context/token";
import { useNavigate } from "react-router-dom";

const register = () => {
  const { changeToken } = useToken();

  const { register, handleSubmit } = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const { register: login, handleSubmit: handleSubmit2 } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const handleRegister = async (body: RegisterType) => {
    try {
      const result = await userRegister(body);
      alert(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const handleLogin = async (body: LoginType) => {
    try {
      const result = await userLogin(body);
      console.log(result.data);
      changeToken(result.data.token);
      result?.data.role === "admin" ? navigate("/admin-user") : navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
              <form onSubmit={handleSubmit2(handleLogin)}>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input {...login("email")} id="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      {...login("password")}
                      id="password"
                      type="password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-80 rounded-full text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105">
                    Login
                  </button>
                </CardFooter>
              </form>
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
              <form onSubmit={handleSubmit(handleRegister)}>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      {...register("user_name")}
                      id="username"
                      type="username"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input {...register("email")} id="email" type="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="domisili">Domisili</Label>
                    <Input
                      {...register("domicile")}
                      id="domisili"
                      type="domisili"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      {...register("password")}
                      id="password"
                      type="password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-80 rounded-full text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105">
                    Register
                  </button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default register;
