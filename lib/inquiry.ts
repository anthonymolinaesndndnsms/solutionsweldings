// Shared between the contact form and /api/contact so both enforce the same
// limits.

export const CONTACT_EMAIL = "shawn@solutionscontractinggroup.com";
export const CONTACT_PHONE = "(980) 339-0527";

/** Stays under the 4.5 MB request limit for serverless functions. */
export const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;

export const ATTACHMENT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
];

export const ATTACHMENT_ACCEPT = ".jpg,.jpeg,.png,.webp,.heic,.heif,.pdf";

export type Inquiry = {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  schedule: string;
};

export function inquiryText(q: Inquiry) {
  return [
    `Name: ${q.name}`,
    `Company: ${q.company || "-"}`,
    `Email: ${q.email}`,
    `Phone: ${q.phone || "-"}`,
    `Facility location: ${q.location}`,
    `Desired schedule: ${q.schedule || "-"}`,
    "",
    "Project description:",
    q.description,
  ].join("\n");
}
