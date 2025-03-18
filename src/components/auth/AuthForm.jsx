
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, Github, Loader2 } from 'lucide-react';

// Schema for login form - still using zod for validation without TypeScript type inference
const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

// Extended schema for signup form
const signupSchema = loginSchema.extend({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters' }),
  role: z.enum(['project_manager', 'developer', 'designer', 'other'], {
    required_error: 'Please select a role',
  }),
});

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login';
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Initialize the appropriate form based on mode
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signupForm = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      company: '',
      role: 'developer',
    },
  });

  // Form submission handlers
  const onLoginSubmit = (data) => {
    setIsLoading(true);
    console.log('Login data:', data);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Login successful',
        description: 'Welcome back to Taskflow!',
      });
      navigate('/dashboard');
    }, 1500);
  };

  const onSignupSubmit = (data) => {
    setIsLoading(true);
    console.log('Signup data:', data);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Account created successfully',
        description: 'Welcome to Taskflow! Your account is ready.',
      });
      navigate('/dashboard');
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    console.log(`Logging in with ${provider}`);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: `${provider} login successful`,
        description: 'Welcome to Taskflow!',
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Button>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>
            {mode === 'login' ? 'Log In to Your Account' : 'Create Your Account'}
          </CardTitle>
          <CardDescription>
            {mode === 'login' 
              ? 'Enter your credentials to access your account.' 
              : 'Sign up to start managing your projects with AI.'
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {mode === 'login' ? (
            <Form {...loginForm}>
              <form 
                onSubmit={loginForm.handleSubmit(onLoginSubmit)} 
                className="space-y-4"
              >
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...
                    </>
                  ) : (
                    'Log In'
                  )}
                </Button>
              </form>
            </Form>
          ) : (
            <Form {...signupForm}>
              <form 
                onSubmit={signupForm.handleSubmit(onSignupSubmit)} 
                className="space-y-4"
              >
                <FormField
                  control={signupForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={signupForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={signupForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={signupForm.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={signupForm.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="project_manager">Project Manager</SelectItem>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </Button>
              </form>
            </Form>
          )}
          
          <div className="relative mt-6 mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <Button 
              variant="outline" 
              onClick={() => handleSocialLogin('GitHub')}
              disabled={isLoading}
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </div>
        </CardContent>
        
        <CardFooter>
          <div className="text-sm text-center w-full text-muted-foreground">
            {mode === 'login' ? (
              <>
                Don't have an account?{' '}
                <Button 
                  variant="link" 
                  className="p-0" 
                  onClick={() => navigate('/auth?mode=signup')}
                >
                  Sign up
                </Button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Button 
                  variant="link" 
                  className="p-0" 
                  onClick={() => navigate('/auth?mode=login')}
                >
                  Log in
                </Button>
              </>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
