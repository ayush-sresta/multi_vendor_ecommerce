"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<"email" | "number">("email");
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Logging in with ${loginMethod}:`, value);
    // Add auth logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-background">
      <h1 className="text-3xl font-bold mb-8 text-foreground">
        Welcome to XYZ
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 rounded-lg shadow-xl bg-card flex flex-col"
      >
        {/* Input Field */}
        <div className="mb-4">
          <Label className="mb-2">
            {loginMethod === "email" ? "Email Address" : "Phone Number"}
          </Label>
          <Input
            type={loginMethod === "email" ? "email" : "tel"}
            placeholder={
              loginMethod === "email" ? "Enter your email" : "Enter your number"
            }
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        {/* Main Continue Button */}
        <Button type="submit"size={"lg"} className="w-full mb-4">
          {loginMethod === "email"
            ? "Continue with Email"
            : "Continue with Number"}
        </Button>

        {/* Separator */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-t border-muted mr-2" />
          <span className="text-muted-foreground text-sm">or</span>
          <hr className="flex-1 border-t border-muted ml-2" />
        </div>

        {/* Other Options */}
        <div className="flex flex-col gap-2">
          <Button
            type="button"
            variant="outline"
            size={"lg"}
            className="w-full"
          >
            Continue with Google
          </Button>

          <Button
            type="button"
            variant="outline"
            size={"lg"}
            className="w-full"
            onClick={() =>
              setLoginMethod(loginMethod === "email" ? "number" : "email")
            }
          >
            {loginMethod === "email"
              ? "Continue with Number"
              : "Continue with Email"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
