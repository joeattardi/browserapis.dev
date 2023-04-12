import React from 'react';

export default function Alert({ icon, title, children }) {
  const IconComponent = icon;

  return (
    <div className="bg-amber-100 p-4 shadow rounded-md my-4">
      <div>{}</div>
      <div>
        <h2 className="flex items-center text-xl">
          <IconComponent className="mr-2" size={24} />
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
