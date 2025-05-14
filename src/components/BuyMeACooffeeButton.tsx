import Link from "next/link";
import React from "react";

const BuyMeACoffeeButton = () => {
  return (
    <Link
    href="https://www.buymeacoffee.com/srnoat"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg transition"
  >
    ☕ Buy Me a Coffee
  </Link>
  );
};

export default BuyMeACoffeeButton;
