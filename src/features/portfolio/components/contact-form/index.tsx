"use client";

import { MailIcon, MessageSquareIcon, PhoneIcon, UserIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectIdea: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with your form submission endpoint
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", projectIdea: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>Contact</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="flex items-center gap-2 font-mono text-sm font-medium text-muted-foreground"
            >
              <UserIcon className="size-4" />
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name..."
              className="w-full focus-visible:ring-[1px]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center gap-2 font-mono text-sm font-medium text-muted-foreground"
            >
              <MailIcon className="size-4" />
              Email ID
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com..."
              className="w-full focus-visible:ring-[1px]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="flex items-center gap-2 font-mono text-sm font-medium text-muted-foreground"
            >
              <PhoneIcon className="size-4" />
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (123) 456-7890..."
              className="w-full focus-visible:ring-[1px]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="projectIdea"
              className="flex items-center gap-2 font-mono text-sm font-medium text-muted-foreground"
            >
              <MessageSquareIcon className="size-4" />
              About Project Idea
            </label>
            <Textarea
              id="projectIdea"
              name="projectIdea"
              required
              value={formData.projectIdea}
              onChange={handleChange}
              placeholder="Tell me about your project idea..."
              rows={6}
              className="w-full resize-y focus-visible:ring-[1px]"
            />
          </div>

          {submitStatus === "success" && (
            <div className="rounded-md border border-green-500/30 bg-green-500/5 px-3 py-2 text-sm text-green-600 dark:text-green-400">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-md border border-red-500/30 bg-red-500/5 px-3 py-2 text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please try again later.
            </div>
          )}

          <div className="flex items-center justify-center pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="default"
              className="group/collapsible-trigger flex font-mono"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <MailIcon className="size-4" />
                  Submit
                </>
              )}
            </Button>
          </div>
        </form>
      </PanelContent>
    </Panel>
  );
}
