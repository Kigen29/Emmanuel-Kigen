"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import instagram from "@/components/images/Instagram.png";
import github from "@/components/images/Github.png";
import linkedin from "@/components/images/Linkedin.png";
import { sendContactForm } from "@/app/contact/action";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required." }),
  lastName: z.string().min(1, { message: "Last Name is required." }),
  email: z.string().min(1, { message: "Email is required." }).email({
    message: "Invalid email address.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      const result = await sendContactForm(data);

      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Message sent successfully.",
          variant: "default",
        });
        reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="px-10 py-12 flex w-full mt-2 max-w-[1240px] m-auto flex-col" id="contact">
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">
        Connect With Me
      </p>

      <div className="w-full p-2 mt-3 px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Grid Section */}
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <Image src={instagram} alt="Instagram" width={50} height={50} />
            <h3 className="mt-2">Instagram</h3>
          </div>
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <Image src={github} alt="GitHub" width={50} height={50} />
            <h3 className="mt-2">GitHub</h3>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <Image src={linkedin} alt="LinkedIn" width={50} height={50} />
            <h3 className="mt-2">LinkedIn</h3>
          </div>
        </a>

        <div className="flex align-center col-span-1 md:col-span-3">
          <form
            className="bg-white p-6 shadow-xl rounded-xl w-full max-w-full mx-auto"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h3 className="text-xl mb-4">Get in Touch</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className={`w-full border border-gray-300 p-2 rounded-lg ${errors.firstName ? "border-red-500" : ""}`}
                {...register("firstName")}
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className={`w-full border border-gray-300 p-2 rounded-lg ${errors.lastName ? "border-red-500" : ""}`}
                {...register("lastName")}
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`w-full border border-gray-300 p-2 rounded-lg ${errors.email ? "border-red-500" : ""}`}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full border border-gray-300 p-2 rounded-lg ${errors.message ? "border-red-500" : ""}`}
                {...register("message")}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>
            <div className="flex justify-center">
              <button
                className={`${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"
                } bg-[#F65B36] text-white p-3 rounded-lg hover:bg-[#4a4aef] transition duration-300`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
