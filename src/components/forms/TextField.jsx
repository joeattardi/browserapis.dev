import React, { forwardRef, useId } from 'react';

const TextField = forwardRef(({ placeholder, label, type, name, onChange, onBlur }, ref) => {
  const id = useId();
  return (
    <div className="flex flex-col items-start">
      <label 
        className="mb-1 text-base font-bold text-sky-900 dark:text-sky-100" 
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id} 
        onChange={onChange}
        onBlur={onBlur}
        className="px-4 py-2 rounded w-full" 
        placeholder={placeholder} 
        type={type} 
        name={name}
        ref={ref}
      />
    </div>
  );
});

export default TextField;