'use client'

import { motion } from "framer-motion";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import { SocialLinks } from "./Navbar";
import { BsDiscord, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef<HTMLFormElement>(null)
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      )
      .then((result) => {
        setSuccess(true)
        form.current?.reset()
      }),
      (error: any) => {
        setError(true)
        console.log(error.text)
      };
  };
  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ x: "-300vh" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-8">
        <form
          onSubmit={sendEmail}
          ref={form}
          className="border border-gray-500 p-4 rounded-2xl"
        >
          <h1 className="antialiased text-3xl text-center mb-12">Contact Me</h1>
          <div className="flex flex-col gap-4 w-[300px]">
            <div className="flex flex-col gap-3">
              <Label htmlFor="message">Enter your message here</Label>
              <Textarea
                placeholder="Your message goes here..."
                autoComplete="off"
                name="user_message"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Enter your email here</Label>
              <Input
                placeholder="Your email goes here..."
                type="email"
                autoComplete="off"
                name="user_email"
                required
              />
            </div>
            <Button type="submit" className="mt-2">
              Submit
            </Button>
            {success && (
              <p className="text-green-500 mt-4 text-center">
                Message sent successfully
              </p>
            )}
            {error && (
              <p className="text-red-500 mt-4 text-center">
                Error sending message
              </p>
            )}
          </div>
        </form>
        <h3 className="antialiased text-md">
          Or you can contact me in any of these
        </h3>
        <div className="items-center gap-8 flex">
          <SocialLinks
            link="https://github.com/sparshak7"
            icon={<BsGithub className="size-5" />}
          />
          <SocialLinks
            link="https://www.linkedin.com/in/sparshak-nag-9211b314b/"
            icon={<BsLinkedin className="size-5" />}
          />
          <SocialLinks
            link="https://www.instagram.com/exzeitgeist/"
            icon={<BsInstagram className="size-5" />}
          />
          <SocialLinks
            link="https://discord.com/users/zeitgeist7"
            icon={<BsDiscord className="size-5" />}
          />
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
