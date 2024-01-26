import * as z from "zod";

export const registerSchema = z.object({
  user_name: z.string().min(1, { message: "username is required" }),
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email("Not a valid email"),
  domicile: z.string().min(1, { message: "domisili is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email("Not a valid email"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
export type RegisterType = z.infer<typeof registerSchema>;
export type LoginType = z.infer<typeof registerSchema>;

export interface LoginPayload {
  email: string;
  role: string;
  token: string;
}
