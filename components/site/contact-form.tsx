'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { Check, Loader2 } from 'lucide-react'
import { submitContact, interests, type ContactState } from '@/app/contact/actions'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

const fieldBase =
  'w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground shadow-soft outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:ring-2 focus:ring-brand/20'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-[0.95rem] font-medium text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-raised active:translate-y-px disabled:opacity-60"
    >
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Sending…
        </>
      ) : (
        'Send message'
      )}
    </button>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="text-xs text-destructive" role="alert">
      {message}
    </p>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-success/30 bg-success/5 p-8">
        <span className="flex size-11 items-center justify-center rounded-full bg-success/15 text-success">
          <Check className="size-5" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight">Message received</h3>
        <p className="text-pretty leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      {state.status === 'error' && state.message ? (
        <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive" role="alert">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!state.errors?.name}
            aria-describedby="name-error"
            className={cn(fieldBase, state.errors?.name ? 'border-destructive' : 'border-border')}
            placeholder="Your name"
          />
          <FieldError id="name-error" message={state.errors?.name} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!state.errors?.email}
            aria-describedby="email-error"
            className={cn(fieldBase, state.errors?.email ? 'border-destructive' : 'border-border')}
            placeholder="you@company.com"
          />
          <FieldError id="email-error" message={state.errors?.email} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium">
            Company <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            aria-invalid={!!state.errors?.company}
            aria-describedby="company-error"
            className={cn(fieldBase, state.errors?.company ? 'border-destructive' : 'border-border')}
            placeholder="Your business"
          />
          <FieldError id="company-error" message={state.errors?.company} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="interest" className="text-sm font-medium">
            I&apos;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            aria-invalid={!!state.errors?.interest}
            aria-describedby="interest-error"
            className={cn(fieldBase, 'appearance-none', state.errors?.interest ? 'border-destructive' : 'border-border')}
          >
            <option value="" disabled>
              Select an option
            </option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          <FieldError id="interest-error" message={state.errors?.interest} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!state.errors?.message}
          aria-describedby="message-error"
          className={cn(fieldBase, 'resize-y', state.errors?.message ? 'border-destructive' : 'border-border')}
          placeholder="Tell us about your business and what you're looking for."
        />
        <FieldError id="message-error" message={state.errors?.message} />
      </div>

      {/* Honeypot — visually hidden, not announced to screen readers */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_website">Do not fill this field</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-1">
        <SubmitButton />
      </div>
    </form>
  )
}
