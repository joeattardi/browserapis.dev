import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

export default function IndexPage() {
  return (
    <h1>Hi</h1>
  )
}

export const Head: HeadFC = () => <title>Web Browser API Cookbook</title>;