"use client";

import React from "react";

type JsonLdProps = {
  data: Record<string, unknown>;
};

// Convert to a proper React component instead of a function
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
} 