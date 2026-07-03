"use client";

import { MailIcon, MessageSquareIcon, PhoneIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { CandyButton } from "@/components/ui/candy-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSound } from "@/hooks/use-sound";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectIdea: "",
    /** Honeypot — leave blank; do not remove. */
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorHint, setErrorHint] = useState<string | null>(null);
  const playMailSent = useSound("/audio/mailsend.wav");
  const playError = useSound("/audio/error.wav");

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
    setErrorHint(null);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 25_000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      if (!response.ok) {
        let hint: string | null = null;
        try {
          const body = (await response.json()) as {
            error?: string;
            missing?: string[];
          };
          if (body.missing?.length) {
            const host = window.location.hostname;
            const isLocalDev =
              host === "localhost" ||
              host === "127.0.0.1" ||
              host === "[::1]" ||
              host.endsWith(".local");
            hint = isLocalDev
              ? `Set in .env.local (project root), then restart dev: ${body.missing.join(", ")}`
              : `Missing on the server. In Vercel: Project → Settings → Environment Variables, add ${body.missing.join(", ")} (same values as .env.local), then Redeploy.`;
          } else if (response.status === 429) {
            hint = "Too many submissions. Please wait and try again.";
          } else if (body.error) {
            hint = body.error;
          }
        } catch {
          // ignore JSON parse errors
        }
        playError(0.55);
        toast.error("Message not sent", {
          description: hint ?? "Something went wrong. Please try again later.",
        });
        setErrorHint(hint);
        setSubmitStatus("error");
        return;
      }

      playMailSent(0.6);
      toast.success("Message sent", {
        description: "Thank you! Your message has been sent successfully.",
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectIdea: "",
        website: "",
      });
    } catch {
      playError(0.55);
      toast.error("Message not sent", {
        description:
          "Network error or request timed out. Check your connection and try again.",
      });
      setSubmitStatus("error");
      setErrorHint(
        "Network error or request timed out. Check your connection and try again."
      );
    } finally {
      window.clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>Contact</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <form onSubmit={handleSubmit} className="relative space-y-4">
          <div
            className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
            aria-hidden="true"
          >
            <label htmlFor="contact-website">Company website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="name"
              className="font-geist flex items-center gap-2 text-sm font-medium text-muted-foreground"
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
              className="font-geist flex items-center gap-2 text-sm font-medium text-muted-foreground"
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
              className="font-geist flex items-center gap-2 text-sm font-medium text-muted-foreground"
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
              className="font-geist flex items-center gap-2 text-sm font-medium text-muted-foreground"
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
              <p>Something went wrong. Please try again later.</p>
              {errorHint ? (
                <p className="mt-2 font-mono text-xs opacity-90">{errorHint}</p>
              ) : null}
            </div>
          )}

          <div className="flex items-center justify-center pt-2">
            <CandyButton
              type="submit"
              disabled={isSubmitting}
              className="font-geist min-w-28 gap-2 px-6"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <MailIcon className="size-4" />
                  Submit
                </>
              )}
            </CandyButton>
          </div>
        </form>
      </PanelContent>
    </Panel>
  );
}
