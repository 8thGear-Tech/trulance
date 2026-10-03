import type { ComponentProps, ReactNode } from "react";
import type { FormState } from "@/app/actions";

const control =
  "mt-2 block w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-base text-ink placeholder:text-slate/70 focus:border-ink focus:outline-none focus:ring-2 focus:ring-signal/40 aria-[invalid=true]:border-ember";

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p id={`${id}-error`} className="mt-2 text-sm font-medium text-ember">
      {errors[0]}
    </p>
  );
}

type Common = { name: string; label: string; state: FormState; hint?: ReactNode; optional?: boolean };

export function Field({ name, label, state, hint, optional, ...props }: Common & ComponentProps<"input">) {
  const errors = state.errors?.[name];
  return (
    <div>
      <label htmlFor={name} className="font-semibold">
        {label}
        {optional ? <span className="font-normal text-slate"> (optional)</span> : null}
      </label>
      <input
        id={name}
        name={name}
        className={control}
        aria-invalid={errors ? true : undefined}
        aria-describedby={errors ? `${name}-error` : undefined}
        {...props}
      />
      {hint ? <p className="mt-2 text-sm text-slate">{hint}</p> : null}
      <FieldError id={name} errors={errors} />
    </div>
  );
}

export function TextArea({ name, label, state, ...props }: Common & ComponentProps<"textarea">) {
  const errors = state.errors?.[name];
  return (
    <div>
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={6}
        className={control}
        aria-invalid={errors ? true : undefined}
        aria-describedby={errors ? `${name}-error` : undefined}
        {...props}
      />
      <FieldError id={name} errors={errors} />
    </div>
  );
}

export function Select({
  name,
  label,
  state,
  options,
  ...props
}: Common & ComponentProps<"select"> & { options: { value: string; label: string }[] }) {
  const errors = state.errors?.[name];
  return (
    <div>
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={control}
        aria-invalid={errors ? true : undefined}
        aria-describedby={errors ? `${name}-error` : undefined}
        {...props}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <FieldError id={name} errors={errors} />
    </div>
  );
}

/** Hidden from people; bots that fill it are silently dropped. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormStatus({ state }: { state: FormState }) {
  return (
    <div aria-live="polite" role="status">
      {state.status === "error" ? (
        <p className="rounded-xl bg-ember/10 px-4 py-3 font-medium text-ember">{state.message}</p>
      ) : null}
    </div>
  );
}

export function SuccessPanel({ message }: { message: string }) {
  return (
    <div role="status" className="rounded-3xl bg-ink p-10 text-white">
      <span aria-hidden="true" className="block h-4 w-4 rounded-full bg-signal" />
      <h2 className="mt-6 text-3xl font-extrabold tracking-tightest">Message received</h2>
      <p className="mt-3 text-lg text-mist">{message}</p>
    </div>
  );
}

export const initialFormState: FormState = { status: "idle", message: "" };
