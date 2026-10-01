"use client";

import { useState } from "react";
import Link from "next/link";

export default function WaitlistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [model, setModel] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          model: model || undefined,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  const models = [
    { value: "", label: "No preference" },
    { value: "l-ombre", label: "L'Ombre" },
    { value: "minuit", label: "Minuit" },
    { value: "heritage", label: "H\u00e9ritage" },
  ];

  return (
    <div className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mb-16">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
            &mdash; WAITLIST
          </p>
          <h1 className="section-title">
            Secure Your Edition
          </h1>
          <div className="w-12 h-px bg-mirror/30 mt-6" />
          <p className="text-mirror-muted text-sm max-w-xl mt-6 leading-relaxed">
            Join the waitlist for your chosen model. You&apos;ll be notified
            when production slots open &mdash; typically within 12&ndash;16 weeks
            from order confirmation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Info panel */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
                &mdash; WHY JOIN?
              </p>
              <div className="space-y-6 mt-4">
                {[
                  {
                    title: "Priority Access",
                    desc: "Waitlist members receive 48-hour early access to new limited editions and seasonal dial colours before the public.",
                  },
                  {
                    title: "Atelier Visit",
                    desc: "We invite waitlist members to visit our atelier in La Chaux-de-Fonds for a personal fit session and movement viewing.",
                  },
                  {
                    title: "No Obligation",
                    desc: "Joining the waitlist is free and non-binding. You will be informed before any charges are processed.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-mirror/20 pl-4">
                    <h3 className="font-display text-base text-mirror mb-1">{item.title}</h3>
                    <p className="text-sm text-mirror-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8 mt-6">
              <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
                &mdash; CURRENT LEAD TIMES
              </p>
              <div className="space-y-3">
                {[
                  { model: "L'Ombre", time: "14\u201316 weeks" },
                  { model: "Minuit", time: "12\u201314 weeks" },
                  { model: "H\u00e9ritage", time: "16\u201318 weeks" },
                ].map((item) => (
                  <div key={item.model} className="flex items-center justify-between border-b border-mirror/5 pb-2">
                    <p className="font-mono text-detail text-mirror">{item.model}</p>
                    <p className="font-mono text-micro text-mirror-muted">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="card p-12 text-center animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-mirror/20 flex items-center justify-center">
                  <span className="font-display text-2xl text-mirror">✓</span>
                </div>
                <h2 className="font-display text-2xl text-mirror mb-4">
                  You&apos;re on the List
                </h2>
                <p className="text-mirror-muted text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  {message}
                </p>
                <Link href="/collection" className="btn-outline">
                  Explore the Collection
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8">
                <p className="font-mono text-micro text-mirror-muted tracking-extra mb-6">
                  &mdash; YOUR DETAILS
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="font-mono text-micro text-mirror-muted tracking-extra mb-2 block">
                      Name <span className="text-mirror-light">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-micro text-mirror-muted tracking-extra mb-2 block">
                      Email <span className="text-mirror-light">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-micro text-mirror-muted tracking-extra mb-2 block">
                      Preferred Model
                    </label>
                    <select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full"
                    >
                      {models.map((m) => (
                        <option key={m.value} value={m.value}>
                          {m.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {status === "error" && (
                  <div className="mt-4 p-4 border border-mirror/20 bg-mirror/[0.03]">
                    <p className="font-mono text-micro text-mirror tracking-extra">
                      {message}
                    </p>
                  </div>
                )}

                <div className="mt-8">
                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={status === "loading"}
                  >
                    <span className="w-4 h-px bg-noir-950" />
                    {status === "loading" ? "Submitting..." : "Join Waitlist"}
                  </button>
                  <p className="font-mono text-micro text-mirror-muted text-center mt-3">
                    Free &mdash; no obligation
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}