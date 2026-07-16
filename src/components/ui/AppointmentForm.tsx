import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CheckCircle2, MessageSquare, AlertCircle, X, Calendar } from "lucide-react";
import type { AppointmentFormValues } from "@/lib/contact";
import { buildAppointmentMessage, openWhatsApp } from "@/lib/contact";
import { SERVICES } from "@/lib/site-data";

// Validation Schema using Zod
const schema = zod.object({
  ownerName: zod.string().min(2, "Owner Name must be at least 2 characters"),
  phone: zod.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: zod.string().email("Please enter a valid email").optional().or(zod.literal("")),
  petName: zod.string().optional().or(zod.literal("")),
  petType: zod.enum(["Dog", "Cat"]),
  breed: zod.string().min(2, "Breed description is required (e.g., Shih Tzu, Persian)"),
  age: zod.string().min(1, "Age is required (e.g., 2 years, 6 months)"),
  isVaccinated: zod.boolean(),
  serviceRequired: zod.string().min(1, "Please select a service"),
  preferredDate: zod.string()
    .min(1, "Please select a date")
    .refine((val) => {
      if (!val) return false;
      const [year, month, day] = val.split("-").map(Number);
      const date = new Date(year, month - 1, day);
      return date.getDay() !== 0; // 0 = Sunday
    }, "Sundays are closed. Please choose another date."),
  preferredTime: zod.string().min(1, "Please select a preferred time slot"),
  medicalConditions: zod.string().optional(),
  additionalNotes: zod.string().optional(),
});

export default function AppointmentForm() {
  const [showModal, setShowModal] = useState(false);
  const [summaryData, setSummaryData] = useState<AppointmentFormValues | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      petType: "Dog",
      serviceRequired: "",
      preferredTime: "",
      isVaccinated: false,
    },
  });

  const petTypeWatch = watch("petType");

  const onSubmit = (data: AppointmentFormValues) => {
    setSummaryData(data);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (summaryData) {
      const message = buildAppointmentMessage(summaryData);
      openWhatsApp(message);
      setShowModal(false);
      reset(); // Clear form
    }
  };

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  return (
    <div className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-soft">
      <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-1 flex items-center gap-2">
        <Calendar className="text-primary h-5 w-5 md:h-6 md:w-6" />
        Book a Grooming Session
      </h3>
      <p className="font-sans text-sm text-muted-foreground mb-8">
        Grooming is by appointment-only. Fill out the form, review the summary, and click send to confirm via WhatsApp.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* Owner Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold text-foreground" htmlFor="ownerName">
              Owner Name *
            </label>
            <input
              id="ownerName"
              type="text"
              placeholder="e.g., Maxon Mathew"
              {...register("ownerName")}
              className={`rounded-2xl border bg-surface px-4 py-3 text-sm focus:outline-none transition-colors ${
                errors.ownerName ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
              }`}
            />
            {errors.ownerName && (
              <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                <AlertCircle className="h-3 w-3" /> {errors.ownerName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold text-foreground" htmlFor="phone">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g., 7994755458"
              {...register("phone")}
              className={`rounded-2xl border bg-surface px-4 py-3 text-sm focus:outline-none transition-colors ${
                errors.phone ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
              }`}
            />
            {errors.phone && (
              <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                <AlertCircle className="h-3 w-3" /> {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-xs font-semibold text-foreground" htmlFor="email">
            Email Address (Optional)
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g., petfocuz24@gmail.com"
            {...register("email")}
            className={`rounded-2xl border bg-surface px-4 py-3 text-sm focus:outline-none border-border focus:border-primary transition-colors`}
          />
          {errors.email && (
            <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
              <AlertCircle className="h-3 w-3" /> {errors.email.message}
            </span>
          )}
        </div>

        {/* Pet Details */}
        <div className="border-t border-border pt-6 flex flex-col gap-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest text-left block">
            PET DESCRIPTION
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-foreground" htmlFor="petName">
                Pet Name (Optional)
              </label>
              <input
                id="petName"
                type="text"
                placeholder="e.g., Rocky"
                {...register("petName")}
                className={`rounded-2xl border bg-surface px-4 py-3 text-sm focus:outline-none transition-colors ${
                  errors.petName ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                }`}
              />
              {errors.petName && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                  <AlertCircle className="h-3 w-3" /> {errors.petName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-foreground">
                Pet Type *
              </label>
              <div className="flex items-center gap-2 bg-surface p-1 rounded-2xl border border-border">
                <button
                  type="button"
                  onClick={() => setValue("petType", "Dog")}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
                    petTypeWatch === "Dog"
                      ? "bg-primary text-background shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  🐶 Dog
                </button>
                <button
                  type="button"
                  onClick={() => setValue("petType", "Cat")}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
                    petTypeWatch === "Cat"
                      ? "bg-primary text-background shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  🐱 Cat
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-foreground" htmlFor="breed">
                Breed *
              </label>
              <input
                id="breed"
                type="text"
                placeholder={petTypeWatch === "Dog" ? "e.g., Golden Retriever" : "e.g., Persian Cat"}
                {...register("breed")}
                className={`rounded-2xl border bg-surface px-4 py-3 text-sm focus:outline-none transition-colors ${
                  errors.breed ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                }`}
              />
              {errors.breed && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                  <AlertCircle className="h-3 w-3" /> {errors.breed.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-foreground" htmlFor="age">
                Age *
              </label>
              <input
                id="age"
                type="text"
                placeholder="e.g., 2 Years / 6 Months"
                {...register("age")}
                className={`rounded-2xl border bg-surface px-4 py-3 text-sm focus:outline-none transition-colors ${
                  errors.age ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                }`}
              />
              {errors.age && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                  <AlertCircle className="h-3 w-3" /> {errors.age.message}
                </span>
              )}
              <div className="flex items-center gap-2 mt-2">
                <input
                  id="isVaccinated"
                  type="checkbox"
                  {...register("isVaccinated")}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary/50 cursor-pointer"
                />
                <label htmlFor="isVaccinated" className="text-xs font-semibold text-foreground cursor-pointer select-none">
                  Fully Vaccinated
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment details */}
        <div className="border-t border-border pt-6 flex flex-col gap-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest text-left block">
            APPOINTMENT SLOT
          </span>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold text-foreground" htmlFor="serviceRequired">
              Service Required *
            </label>
            <select
              id="serviceRequired"
              {...register("serviceRequired")}
              className={`rounded-2xl border bg-surface px-4 py-3 text-sm focus:outline-none transition-colors ${
                errors.serviceRequired ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
              }`}
            >
              <option value="" disabled>Select a Service</option>
              {SERVICES.map((service) => (
                <Fragment key={service.id}>
                  <option value={service.title}>
                    {service.title}
                  </option>
                  {service.id === "dog-grooming" && (
                    <option value="Dog Grooming + Pick and Drop">
                      Dog Grooming + Pick and Drop
                    </option>
                  )}
                </Fragment>
              ))}
            </select>
            {errors.serviceRequired && (
              <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                <AlertCircle className="h-3 w-3" /> {errors.serviceRequired.message}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-foreground" htmlFor="preferredDate">
                Preferred Date * <span className="text-red-500 font-medium">(Sundays Closed)</span>
              </label>
              <input
                id="preferredDate"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                {...register("preferredDate")}
                className={`rounded-2xl border bg-surface px-4 py-3 text-sm focus:outline-none transition-colors ${
                  errors.preferredDate ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                }`}
              />
              {errors.preferredDate && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                  <AlertCircle className="h-3 w-3" /> {errors.preferredDate.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-foreground" htmlFor="preferredTime">
                Preferred Time Slot *
              </label>
              <select
                id="preferredTime"
                {...register("preferredTime")}
                className={`rounded-2xl border bg-surface px-4 py-3 text-sm focus:outline-none transition-colors ${
                  errors.preferredTime ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                }`}
              >
                <option value="" disabled>Select Time Slot</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.preferredTime && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                  <AlertCircle className="h-3 w-3" /> {errors.preferredTime.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Additional fields */}
        <div className="border-t border-border pt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold text-foreground" htmlFor="medicalConditions">
              Medical Conditions (Allergies, joint issues, skin sensitivity)
            </label>
            <textarea
              id="medicalConditions"
              rows={2}
              placeholder="e.g., Allergic to cheap soap, joint stiffness on back leg"
              {...register("medicalConditions")}
              className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold text-foreground" htmlFor="additionalNotes">
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              rows={3}
              placeholder="e.g., Tends to get nervous around hair dryers, behaves well with treats"
              {...register("additionalNotes")}
              className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none transition-colors"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="gradient-primary w-full py-4 rounded-full font-sans font-bold text-base shadow-lift flex items-center justify-center gap-2 mt-4 cursor-pointer"
        >
          <Calendar className="h-5 w-5" />
          Confirm Appointment Details
        </button>
      </form>

      {/* Confirmation Modal */}
      {showModal && summaryData && (
        <div className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Scrim click close */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setShowModal(false)} />

          <div className="relative w-full max-w-lg bg-background rounded-3xl p-6 md:p-8 shadow-lift border border-border z-10 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center rounded-full bg-surface text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-border"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Title */}
            <div className="flex flex-col items-center gap-2 mb-6 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary animate-bounce" />
              <h4 className="font-display font-bold text-xl text-foreground mt-2">
                Confirm Appointment Details
              </h4>
              <p className="font-sans text-xs text-muted-foreground">
                Please review your slot details below. Confirming will redirect you to WhatsApp.
              </p>
            </div>

            {/* Summary Details */}
            <div className="bg-surface rounded-2xl border border-border p-5 text-left font-sans text-sm flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-2 border-b border-border/50 pb-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Owner Name</span>
                  <p className="font-semibold text-foreground text-sm leading-tight mt-0.5">{summaryData.ownerName}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Phone Number</span>
                  <p className="font-semibold text-foreground text-sm leading-tight mt-0.5">{summaryData.phone}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-b border-border/50 pb-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Pet Name</span>
                  <p className="font-semibold text-foreground text-sm leading-tight mt-0.5">{summaryData.petName || "N/A"}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Type</span>
                  <p className="font-semibold text-foreground text-sm leading-tight mt-0.5">{summaryData.petType}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Breed</span>
                  <p className="font-semibold text-foreground text-sm leading-tight mt-0.5 truncate">{summaryData.breed}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-b border-border/50 pb-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Age</span>
                  <p className="font-semibold text-foreground text-sm leading-tight mt-0.5">{summaryData.age}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Vaccinated</span>
                  <p className="font-semibold text-foreground text-sm leading-tight mt-0.5">{summaryData.isVaccinated ? "Yes" : "No"}</p>
                </div>
              </div>

              <div className="border-b border-border/50 pb-2">
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Selected Service</span>
                <p className="font-semibold text-foreground text-sm leading-tight mt-0.5">{summaryData.serviceRequired}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Date</span>
                  <p className="font-semibold text-foreground text-sm leading-tight mt-0.5">{summaryData.preferredDate}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Preferred Time</span>
                  <p className="font-semibold text-foreground text-sm leading-tight mt-0.5">{summaryData.preferredTime}</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex-1 bg-surface border border-border py-3 rounded-full font-sans font-semibold text-sm hover:bg-border/20 transition-colors cursor-pointer"
              >
                Go Back
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="flex-1 gradient-primary py-3 rounded-full font-sans font-semibold text-sm flex items-center justify-center gap-2 shadow-soft cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 fill-background stroke-none" />
                Open WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
