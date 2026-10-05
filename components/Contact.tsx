"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2 } from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";

// 1. Define the Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // 2. Setup the Form
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // 2. Call the server action we created in Step 3
      const result = await sendEmail(data);

      if (result.success) {
        setSuccess(true);
        reset(); // This clears the form fields after success
      } else {
        alert("Server error: Failed to send email.");
      }
    } catch (error) {
      alert("System error: Something went wrong.");
    } finally {
      setIsSubmitting(false);
      // Hide the success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
        <p className="text-gray-400 mb-12">Let&apos;s discuss your next project or potential collaboration.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 font-mono uppercase tracking-tighter">Name</label>
              <input
                {...register("name")}
                className={`w-full bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-800'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 font-mono uppercase tracking-tighter">Email</label>
              <input
                {...register("email")}
                className={`w-full bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-800'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 font-mono uppercase tracking-tighter">Message</label>
            <textarea
              {...register("message")}
              rows={5}
              className={`w-full bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-gray-800'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors`}
              placeholder="How can I help you?"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={18} />}
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/50 text-emerald-500 rounded-lg text-center">
              Message sent successfully! I will get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}