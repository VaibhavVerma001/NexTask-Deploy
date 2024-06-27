
import { z } from 'zod';


export const registerSchema = z.object({
  username: z
      .string({ required_error: 'Username is requiere' }),
  email: z
      .string({ required_error: 'Email is requiere' })
      .email({ message: 'Email is not vaild' }),
  password: z
      .string({ required_error: 'Password is requiere' })
      .min(6, { message: 'Password must be at laeast 6 characters' }),
});

export const loginSchema = z.object({
  email: z
      .string({ required_error: 'Email is requiere' })
      .email({ message: 'Email is not vaild' }),
  password: z
      .string({ required_error: 'Password is requiere' })
      .min(6, { message: 'Password must be at laeast 6 characters' }),
});