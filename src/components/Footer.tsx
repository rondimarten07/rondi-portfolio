"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Rondi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
