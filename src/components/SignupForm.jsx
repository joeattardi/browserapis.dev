import React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import useScript from '../hooks/useScript';
import CallToAction from './CallToAction';

const CONVERTKIT_FORM_ID = 5053784;
const CONVERTKIT_JS_URL = 'https://f.convertkit.com/ckjs/ck.5.js';

export default function SignupForm() {
  useScript({ src: CONVERTKIT_JS_URL });
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <div 
      className={clsx(
        'mt-8 text-center flex flex-col space-y-4 items-center'
      )}
    >
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
            className="w-full"
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