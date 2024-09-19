export const GenderOptions = ["male", "female"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-ambode.png",
    name: "Brutus Ambode",
  },
  {
    image: "/assets/images/dr-dancemore.png",
    name: "Yeva Dancemore",
  },
  {
    image: "/assets/images/dr-emmanuel.png",
    name: "David Emmanuel",
  },
  {
    image: "/assets/images/dr-fayeez.png",
    name: "Khalid Fayeez",
  },
  {
    image: "/assets/images/dr-kofi.png",
    name: "Julian Kofi",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Marcus Livingston",
  },
  {
    image: "/assets/images/dr-thadi.png",
    name: "Amahle Thadi",
  },
  {
    image: "/assets/images/dr-thandeka.png",
    name: "Juliet Thandeka",
  },
  {
    image: "/assets/images/dr-tope.png",
    name: "Mojola Oluwatope",
  },
  {
    image: "/assets/images/dr-ugo.png",
    name: "Christian Ugochukwu",
  },
  {
    image: "/assets/images/dr-wole.png",
    name: "Bryce Wole",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};