import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Instagram } from 'lucide-react';

import Link from "next/link";
const page = () => {
  return (
    <div className="max-h-screen  max-w-7xl w-full  h-screen   mx-auto  md:py-20 ">
      <div className="w-full ">
        <div className="flex flex-col-reverse md:flex-row max-w-4xl justify-center mx-auto md:mt-14 ">
          <ul className="flex md:flex-col w-full md:w-fit p-5 gap-4   items-center justify-center   ">
            <li className="w-full">
              <Button variant="outline" asChild>
                <Link className="w-full" href="#">
                  <Github />
                </Link>
              </Button>
            </li>
            <li className="w-full">
              <Button variant="outline"  asChild>
                <Link className="w-full" href="#">
                  <FaFacebookMessenger size="20" />
                </Link>
              </Button>
            </li>
            <li className="w-full">
              <Button variant="outline"    asChild>
                <Link className="w-full" href="#">
                  <FaLinkedin size="20" />
                </Link>
              </Button>
            </li>
            <li className="w-full">
              <Button variant="outline" asChild>
                <Link className="w-full" href="#">
                  <Instagram />
                </Link>
              </Button>
            </li>
          </ul>
          <div className="flex flex-col w-full items-center justify-center">
            <h1 className="text-3xl mb-2">Let's Connect </h1>
            <p className="text-sm p-5">I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <Separator />
            <div className="w-full px-5 mt-8 space-y-5 ">
              <div>
                <Label htmlFor="email">Your Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="E.g xxxx@gmail.com"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Hello..." />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Let's talk about.." />
              </div>
              <Button className="w-full">Send message</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
