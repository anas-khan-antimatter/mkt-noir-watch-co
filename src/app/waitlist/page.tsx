"use client";
import { useState } from "react";

export default function WaitlistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("lombre");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interest }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Registration failed");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Could not reach the server. Please try again.");
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-noir-950">
        <section className="section-container pt-24 pb-24 text-center">
          <p className="micro-label mb-6">Registered</p>
          <h1 className="section-title mb-6">You&apos;re on the List</h1>
          <div className="divider-platinum mb-8" />
          <p className="text-noir-200 text-sm max-w-lg mx-auto leading-relaxed">
            Thank you, <span className="text-noir-50">{name}</span>. We will notify
            you at <span className="text-noir-50">{email}</span> when the{" "}
            <span className="text-noir-200">{interest}</span> collection is
            available for preview.
          </p>
          <div className="mt-10">
            <a href="/" className="btn-outline">Return Home</a>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-noir-950">
      <section className="section-container pt-24 pb-16">
        <p className="micro-label mb-4">Private Client</p>
        <h1 className="section-title">Waitlist Registration</h1>
        <div className="divider-platinum mt-6 mb-8" />
        <p className="text-noir-300 text-xs max-w-xl leading-relaxed">
          Register your interest in a collection. You will receive priority
          access when pieces become available from the atelier.
        </p>
      </section>

      <section className="section-container pb-24">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          {error && (
            <div className="border border-accent-red/60 bg-noir-850 p-4 mb-6">
              <p className="text-accent-red text-xs">{error}</p>
            </div>
          )}

          <div className="grid gap-6">
            <label className="block">
              <span className="micro-label block mb-2">Full Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-noir-900 border border-noir-700/40 p-3 text-noir-50 text-sm"
              />
            </label>

            <label className="block">
              <span className="micro-label block mb-2">Email Address</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-noir-900 border border-noir-700/40 p-3 text-noir-50 text-sm"
              />
            </label>

            <label className="block">
              <span className="micro-label block mb-2">Collection Interest</span>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full bg-noir-900 border border-noir-700/40 p-3 text-noir-50 text-sm"
              >
                <option value="lombre">L&apos;Ombre — The Shadow</option>
                <option value="minuit">Minuit — Midnight</option>
                <option value="heritage">Héritage — Heritage</option>
                <option value="bespoke">Bespoke / Private Order</option>
              </select>
            </label>

            <div className="mt-4">
              <button type="submit" className="btn-primary w-full">
                Register Interest
              </button>
            </div>

            <p className="text-noir-500 text-[9px] leading-relaxed mt-4 text-center">
              Your data is processed in accordance with Swiss privacy law.
              We never share your information with third parties.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}