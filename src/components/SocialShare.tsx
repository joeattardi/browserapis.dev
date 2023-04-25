import React from 'react';
import { FaEnvelope, FaFacebookF, FaReddit, FaRedditAlien, FaTwitter } from 'react-icons/fa';

import SocialShareButton from './SocialShareButton';

const networks = [
  { network: 'facebook', color: '#3b5998', Icon: FaFacebookF, title: 'Share to Facebook' },
  { network: 'twitter', color: '#1da1f2', Icon: FaTwitter, title: 'Tweet' },
  { network: 'reddit', color: '#ff5700', Icon: FaRedditAlien, title: 'Share to Reddit' },
  { network: 'email', color: '#333333', Icon: FaEnvelope, title: 'Email' }
];

export default function SocialShare() {
  return (
    <div className="flex items-center space-x-2">
      <span>Share this:</span>
      {networks.map(network =>
        <SocialShareButton key={network.network} {...network} />  
      )}
    </div>
  );
}