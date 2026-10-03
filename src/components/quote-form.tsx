"use client";

import { useActionState } from "react";
import { submitQuote } from "@/app/actions";
import { disciplines } from "@/lib/site";
import { Field, FormStatus, Honeypot, initialFormState, Select, SuccessPanel, TextArea } from "./form-fields";
import { Button } from "./ui";

const planOptions = [
  { value: "not-sure", label: "Not sure yet" },
  { value: "starter", label: "Starter (single project)" },
  { value: "growth", label: "Growth (dedicated talent)" },
  { value: "squad", label: "Squad (managed team)" },
];

const budgets = [
  { value: "", label: "Select a range" },
  { value: "[BUDGET RANGE 1]", label: "[BUDGET RANGE 1]" },
  { value: "[BUDGET RANGE 2]", label: "[BUDGET RANGE 2]" },
  { value: "[BUDGET RANGE 3]", label: "[BUDGET RANGE 3]" },
  { value: "Not sure", label: "Not sure yet" },
];

const timelines = [
  { value: "", label: "Select a timeline" },
  { value: "ASAP", label: "As soon as possible" },
  { value: "Within a month", label: "Within a month" },
  { value: "1-3 months", label: "1–3 months" },
  { value: "Flexible", label: "Flexible" },
];

export function QuoteForm({ defaultPlan = "not-sure" }: { defaultPlan?: string }) {
  const [state, action, pending] = useActionState(submitQuote, initialFormState);

  if (state.status === "success") return <SuccessPanel message={state.message} />;

  const serviceErrors = state.errors?.services;

  return (
    <form action={action} noValidate className="relative space-y-8 rounded-3xl bg-white p-8 sm:p-10">
      <Honeypot />

      <fieldset className="space-y-6">
        <legend className="font-mono text-sm uppercase tracking-wider text-ember">About you</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field name="name" label="Full name" autoComplete="name" required state={state} />
          <Field name="email" label="Work email" type="email" autoComplete="email" required state={state} />
          <Field name="company" label="Company" autoComplete="organization" optional state={state} />
          <Field name="phone" label="Phone" type="tel" autoComplete="tel" optional state={state} />
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-mono text-sm uppercase tracking-wider text-ember">Your project</legend>

        <div>
          <p id="services-label" className="font-semibold">
            Services needed
          </p>
          <div role="group" aria-labelledby="services-label" aria-describedby={serviceErrors ? "services-error" : undefined} className="mt-3 grid gap-3 sm:grid-cols-2">
            {disciplines.map((d) => (
              <label
                key={d.slug}
                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-ink/20 px-4 py-3 has-[:checked]:border-ink has-[:checked]:bg-paper"
              >
                <input type="checkbox" name="services" value={d.title} className="h-4 w-4 accent-[#101828]" />
                {d.title}
              </label>
            ))}
          </div>
          {serviceErrors ? (
            <p id="services-error" className="mt-2 text-sm font-medium text-ember">
              {serviceErrors[0]}
            </p>
          ) : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <Select
            name="plan"
            label="Preferred plan"
            options={planOptions}
            defaultValue={planOptions.some((p) => p.value === defaultPlan) ? defaultPlan : "not-sure"}
            state={state}
          />
          <Select name="budget" label="Budget" options={budgets} defaultValue="" state={state} />
          <Select name="timeline" label="Timeline" options={timelines} defaultValue="" state={state} />
        </div>

        <TextArea
          name="details"
          label="Project details"
          placeholder="What are you building, what does success look like, and any links we should see?"
          required
          state={state}
        />
      </fieldset>

      <FormStatus state={state} />
      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending…" : "Request my quote"}
      </Button>
    </form>
  );
}
