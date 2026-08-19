'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'company' | 'interest' | 'message', string>>
}

const interests = [
  'Bagh (Restaurants)',
  'Property OS',
  'E-commerce OS',
  'Sports OS',
  'Coffee Shop OS',
  'Services & growth',
  'Something else',
]

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const interest = String(formData.get('interest') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  // Honeypot — hidden field real users never fill.
  const trap = String(formData.get('company_website') ?? '').trim()

  const errors: ContactState['errors'] = {}

  if (name.length < 2) errors.name = 'Please enter your name.'
  if (name.length > 100) errors.name = 'That name is too long.'
  if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.'
  if (company.length > 120) errors.company = 'That company name is too long.'
  if (interest && !interests.includes(interest))
    errors.interest = 'Please choose a valid option.'
  if (message.length < 10)
    errors.message = 'Please add a little more detail (at least 10 characters).'
  if (message.length > 4000) errors.message = 'That message is too long.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors }
  }

  // Silently accept bots (honeypot filled) without revealing the trap.
  if (trap) {
    return { status: 'success', message: 'Thanks — we&apos;ll be in touch soon.' }
  }

  // In production this would forward to email / CRM / database.
  // For now we simulate a successful, validated submission.
  await new Promise((r) => setTimeout(r, 600))

  return {
    status: 'success',
    message: `Thanks, ${name.split(' ')[0]}. We've received your message and will be in touch soon.`,
  }
}

export { interests }
