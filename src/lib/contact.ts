// Single source of truth for Petfocuz contact and location information

export const WHATSAPP_NUMBER = "917994755458";
export const BUSINESS_PHONE = "+91 79947 55458";
export const BUSINESS_EMAIL = "petfocuz24@gmail.com";
export const BUSINESS_HOURS = "Mon - Sat: 10:00 AM - 8:00 PM (Sunday Closed)";

export const MAP_LINKS = {
  groomingStudio: "https://maps.app.goo.gl/3j1ML7pGbCNh6XjaA?g_st=ac",
  homeBoarding: "https://maps.app.goo.gl/pkWZnf1nnn7uuAMQ6?g_st=ic",
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/petfocuz?igsh=eDB6MDNkenhhOWFv",
  facebook: "",
  youtube: "https://www.youtube.com/@Petfocuz",
};

export interface AppointmentFormValues {
  ownerName: string;
  phone: string;
  email?: string;
  petName?: string;
  petType: "Dog" | "Cat";
  breed: string;
  age: string;
  isVaccinated: boolean;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: string;
  medicalConditions?: string;
  additionalNotes?: string;
}

export function buildAppointmentMessage(values: AppointmentFormValues): string {
  const isPickupAndDrop = values.serviceRequired === "Dog Grooming + Pick and Drop";

  return `Hello Petfocuz,

I would like to book an appointment.

Owner Name: ${values.ownerName}
Phone: ${values.phone}
Email: ${values.email || "N/A"}
Pet Name: ${values.petName || "N/A"}
Pet Type: ${values.petType}
Breed: ${values.breed}
Age: ${values.age}
Vaccinated: ${values.isVaccinated ? "Yes" : "No"}
Selected Service: ${values.serviceRequired}
Preferred Date: ${values.preferredDate}
Preferred Time: ${values.preferredTime}${isPickupAndDrop ? "\nPickup/Drop Address: <Enter Address Here>" : ""}
Medical Conditions: ${values.medicalConditions || "None"}
Additional Notes: ${values.additionalNotes || "None"}

Thank you.`;
}

export function openWhatsApp(message?: string): void {
  const encoded = message ? encodeURIComponent(message) : "";
  const url = `https://wa.me/${WHATSAPP_NUMBER}${encoded ? `?text=${encoded}` : ""}`;
  window.open(url, "_blank");
}
