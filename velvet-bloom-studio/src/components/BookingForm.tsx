"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { services } from "../data/site";
import { ArrowUpRightIcon } from "./Icons";
import { useBooking } from "./BookingContext";

const emptyDetails = { name: "", email: "", date: "", message: "", consent: false };

function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export default function BookingForm() {
  const { serviceId, selectService, status, setStatus } = useBooking();
  const [details, setDetails] = useState(emptyDetails);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const dateField = form.elements.namedItem("preferred_date") as HTMLInputElement;
    dateField.min = localDate();
    if (!form.reportValidity()) return;
    // Portfolio-only: there is no endpoint, fetch, persistence or reservation.
    setStatus("demo");
  }

  function fillSampleDetails() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    selectService(serviceId || services[0].id);
    setDetails({
      name: "Alex Morgan",
      email: "alex@example.com",
      date: localDate(tomorrow),
      message: "Sample enquiry for the portfolio demo.",
      consent: true,
    });
  }

  function clearDemo() {
    setDetails(emptyDetails);
    selectService("");
  }

  return (
    <form className="booking-form" autoComplete="off" onSubmit={handleSubmit} aria-describedby="booking-mode booking-hint"
      onChange={() => { if (status !== "idle") setStatus("idle"); }}>
      <div className="form-header"><span className="eyebrow">AN INTERACTIVE PREVIEW</span><p>A little time, just for you.</p></div>
      <p id="booking-mode" className="booking-mode">Demo booking form — nothing is sent, saved or reserved. Please use sample details only.</p>
      <div className="demo-actions"><button type="button" className="demo-action" onClick={fillSampleDetails}>Fill sample details</button><button type="button" className="demo-action" onClick={clearDemo}>Clear demo</button></div>
      <fieldset className="booking-fields">
        <legend className="sr-only">Demo appointment details</legend>
        <div className="form-grid">
          <label className="field"><span>Your name *</span><input name="name" type="text" placeholder="e.g. Alex Morgan" value={details.name} onChange={(event) => setDetails({ ...details, name: event.target.value })} required minLength={2} maxLength={100}/></label>
          <label className="field"><span>Email address *</span><input name="email" type="email" placeholder="alex@example.com" value={details.email} onChange={(event) => setDetails({ ...details, email: event.target.value })} required maxLength={254}/></label>
          <label className="field"><span>Preferred treatment *</span><select name="service" required value={serviceId} onChange={(event) => selectService(event.target.value)}><option value="" disabled>Select a treatment</option>{services.map((service) => <option key={service.id} value={service.id}>{service.title} — {service.price}</option>)}</select></label>
          <label className="field"><span>Preferred date *</span><input name="preferred_date" type="date" value={details.date} onChange={(event) => setDetails({ ...details, date: event.target.value })} onFocus={(event) => { event.currentTarget.min = localDate(); }} required/></label>
          <label className="field field-full"><span>A little more about your visit</span><textarea name="message" placeholder="A sample note about your preferred experience." value={details.message} onChange={(event) => setDetails({ ...details, message: event.target.value })} rows={4} maxLength={1500}/></label>
        </div>
        <label className="consent"><input type="checkbox" required name="consent" checked={details.consent} onChange={(event) => setDetails({ ...details, consent: event.target.checked })}/><span>I understand this is a demo and no appointment will be booked. *</span></label>
        <button type="submit" className="button button-gold submit-button">Preview your request <ArrowUpRightIcon size={17}/></button>
      </fieldset>
      <p id="booking-hint" className="form-hint">Fields marked * are required. <Link href="/privacy">About this demo and your details</Link></p>
      <div aria-live="polite" role="status" aria-atomic="true">
        {status === "demo" && <p className="form-feedback form-feedback-info">Demo preview complete. Nothing was sent, saved, or booked.</p>}
      </div>
      <noscript><p className="form-feedback">Enable JavaScript to try this interactive demo. No appointments are available on this concept site.</p><style>{".booking-fields, .demo-actions { display: none; }"}</style></noscript>
    </form>
  );
}
