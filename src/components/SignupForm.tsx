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
        'bg-sky-200 shadow-slate-700',
        'dark:bg-slate-950',
        'w-2/3 mx-auto p-4 text-center flex flex-col space-y-4 items-center rounded-lg'
      )}
    >
      <h3 className="text-2xl">Sign up for book updates</h3>
      <form
        action={`https://app.convertkit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`}
        method="post"
        data-sv-form={CONVERTKIT_FORM_ID}
        data-uid="25824d70c3"
        data-format="inline"
        data-version="5"
        className="w-2/3 space-y-4" 
      >
        <TextField
          {...register('email_address')}
          placeholder="hello@example.com"
          label="Email"
          name="email_address"
          type="email"
        />
        <div>
          <CallToAction>Sign up</CallToAction>
        </div>
      </form>
      <p className="text-sm">Occasional updates, no spam. Unsubscribe at any time.</p>
    </div>
  );
}