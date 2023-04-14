import React from 'react';

import { FaGithub, FaTwitter, FaCodepen } from 'react-icons/fa';

function FooterLink({ Icon, href, title }) {
  return (
    <a href={href} title={title} target="_blank">
      <Icon size={24} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-200 p-4 flex flex-col flex-grow items-center">
      <div className="pb-4">
        &copy; 2023 Joe Attardi
      </div>
      <div className="flex items-center space-x-3">
        <FooterLink Icon={FaGithub} href="https://github.com/joeattardi" title="GitHub" />
        <FooterLink Icon={FaTwitter} href="https://twitter.com/joeattardi" title="Twitter" />
        <FooterLink Icon={FaCodepen} href="https://codepen.io/thinksincode" title="CodePen" />
      </div>
      <div className="py-4">
        Want to support my work? <a className="text-blue-800 underline" href="https://www.buymeacoffee.com/jattardiM">Buy me a coffee!</a>
      </div>
    </footer>
  )
}