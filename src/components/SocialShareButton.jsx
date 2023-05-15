import React from 'react';

export default function SocialShareButton({ color, Icon, title, network }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className="st-custom-button px-2 py-1 text-white" 
      data-network={network}
      title={title}
    >
      <Icon size={16} />
    </button>
  )
}