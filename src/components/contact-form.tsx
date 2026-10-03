"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import { Field, FormStatus, Honeypot, initialFormState, Select, SuccessPanel, TextArea } from "./form-fields";
import { Button } from "./ui";

const topics = [
  { value: "general", label: "General enquiry" },
  { value: "project", label: "I have a tech project" },
  { value: "join", label: "I want to join as a freelancer" },
  { value: "partnership", label: "Partnership" },
];

export function ContactForm({ defaultTopic = "general" }: { defaultTopic?: string }) {
  const [state, action, pending] = useActionState(submitContact, initialFormState);

  if (state.status === "success") return <SuccessPanel message={state.message} />;

  return (
    <form action={action} noValidate className="relative space-y-6 rounded-3xl bg-white p-8 sm:p-10">
      <Honeypot />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field name="name" label="Full name" autoComplete="name" required state={state} />
        <Field name="email" label="Email" type="email" autoComplete="email" required state={state} />
      </div>
      <Select
        name="topic"
        label="What's this about?"
        options={topics}
        defaultValue={topics.some((t) => t.value === defaultTopic) ? defaultTopic : "general"}
        state={state}
      />
      <TextArea name="message" label="Message" required state={state} />
      <FormStatus state={state} />
      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
