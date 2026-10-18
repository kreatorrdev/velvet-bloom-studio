"use client";

import { createContext, useContext, useState, type AnchorHTMLAttributes, type Dispatch, type ReactNode, type SetStateAction } from "react";

export type SubmitState = "idle" | "demo";

type BookingState = {
  serviceId: string;
  selectService: (id: string) => void;
  status: SubmitState;
  setStatus: Dispatch<SetStateAction<SubmitState>>;
};

const BookingContext = createContext<BookingState | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [serviceId, setServiceId] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");

  function selectService(id: string) {
    setServiceId(id);
    setStatus("idle");
  }

  return <BookingContext.Provider value={{ serviceId, selectService, status, setStatus }}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const booking = useContext(BookingContext);
  if (!booking) throw new Error("Booking controls must be inside BookingProvider.");
  return booking;
}

type TreatmentLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & { serviceId: string };

export function TreatmentLink({ serviceId, children, ...props }: TreatmentLinkProps) {
  const booking = useBooking();
  return <a {...props} href="#contact" onClick={() => booking.selectService(serviceId)}>{children}</a>;
}
