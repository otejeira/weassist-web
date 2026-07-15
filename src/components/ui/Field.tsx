"use client";

import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";

const inputBase =
  "w-full rounded-control border bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-cyan-500 focus:outline-none";

interface FieldWrapProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  id: string;
  children: React.ReactNode;
}

function FieldWrap({ label, error, hint, required, className, id, children }: FieldWrapProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label htmlFor={id} className="field-label">
          {label}
          {required && <span className="text-blue-700"> *</span>}
        </label>
      )}
      {children}
      {hint && !error && <p className="text-[11px] text-ink-500">{hint}</p>}
      {error && (
        <p className="text-[11px] font-medium text-[#c0392b]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
  wrapClassName?: string;
};

/** Campo de texto con label uppercase 11px y estado de error inline. */
export const Field = forwardRef<HTMLInputElement, InputProps>(function Field(
  { label, error, hint, required, wrapClassName, className, id, ...rest },
  ref,
) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldWrap
      id={fieldId}
      label={label}
      error={error}
      hint={hint}
      required={required}
      className={wrapClassName}
    >
      <input
        ref={ref}
        id={fieldId}
        required={required}
        aria-invalid={error ? true : undefined}
        className={cn(inputBase, error ? "border-[#c0392b]" : "border-line-300", className)}
        {...rest}
      />
    </FieldWrap>
  );
});

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  hint?: string;
  wrapClassName?: string;
  options: { value: string; label: string }[];
};

/** Select estilizado con label. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, hint, required, wrapClassName, className, id, options, ...rest },
  ref,
) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldWrap
      id={fieldId}
      label={label}
      error={error}
      hint={hint}
      required={required}
      className={wrapClassName}
    >
      <select
        ref={ref}
        id={fieldId}
        required={required}
        className={cn(inputBase, "appearance-none pr-9", error ? "border-[#c0392b]" : "border-line-300", className)}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldWrap>
  );
});

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  hint?: string;
  wrapClassName?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, hint, required, wrapClassName, className, id, ...rest },
  ref,
) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldWrap
      id={fieldId}
      label={label}
      error={error}
      hint={hint}
      required={required}
      className={wrapClassName}
    >
      <textarea
        ref={ref}
        id={fieldId}
        required={required}
        className={cn(inputBase, "min-h-[110px] resize-y", error ? "border-[#c0392b]" : "border-line-300", className)}
        {...rest}
      />
    </FieldWrap>
  );
});
