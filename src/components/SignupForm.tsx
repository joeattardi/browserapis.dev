import React from 'react';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

import useScript from '../hooks/useScript';
import CallToAction from './CallToAction';
import TextField from './forms/TextField';

type EmailSignup = {
  email_address: string;
}

const CONVERTKIT_FORM_ID = 5053784;
const CONVERTKIT_JS_URL = 'https://f.convertkit.com/ckjs/ck.5.js';

export default function SignupForm() {
  useScript({ src: CONVERTKIT_JS_URL });
  const { register, handleSubmit, watch, formState: { errors } } = useForm<EmailSignup>();

  return (
    <div 
      className={clsx(
        'bg-sky-700 shadow-slate-700 text-white',
        'dark p-8 mt-8 text-center flex flex-col space-y-4 items-center rounded-lg'
      )}
    >
      <h3 className="text-2xl">Read the Book</h3>
      <p>
        Sign up to receive email updates about the book's progress, and find out
        when it is available for early access!
      </p>
      <form
        action={`https://app.convertkit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`}
        method="post"
        data-sv-form={CONVERTKIT_FORM_ID}
        data-uid="25824d70c3"
        data-format="inline"
        data-version="5"
        className="w-full space-y-4" 
      >
        <div className="flex flex-col items-start w-full">
          <label 
            className="mb-1 text-base font-bold text-sky-900 dark:text-sky-100" 
            htmlFor="email_address"
          >
            Email address
          </label>
          <input
            required
            type="email"
            id="email_address"
            {...register('email_address')}
            placeholder="hello@example.com"
            className="w-full px-4 py-2 rounded bg-slate-800"
          />
        </div>
        <div>
          <CallToAction>Sign me up!</CallToAction>
        </div>
      </form>
      <p className="text-sm">Occasional updates, no spam. Unsubscribe at any time.</p>
    </div>
  );
}