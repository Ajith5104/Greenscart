import React from "react";

export default function Footer() {
  const year = new Date();
  return (
    <footer className="py-1">
      <p className="text-center text-dark mt-1">
        GreensCart &copy; 2023 - {year.getFullYear()}, All Rights Reserved
      </p>
    </footer>
  );
}
