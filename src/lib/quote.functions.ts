import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";

const quoteSchema = z.object({
  service: z.string().min(1, "Service is required"),
  projectType: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  description: z.string().optional(),
});

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((data) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("quote_requests").insert({
      service: data.service,
      name: data.name,
      email: data.email,
      phone: data.phone,
      postal_code: data.postalCode,
      description: data.description || null,
    });

    if (error) {
      console.error("Quote submission error:", error);
      throw new Error("Failed to submit quote request.");
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL;

    if (resendApiKey && notifyEmail) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Get Home Quotes <leads@gethomequotes.ca>",
        to: notifyEmail,
        subject: `New lead: ${data.service}`,
        text: `
New quote request received:

Service: ${data.service}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Postal Code: ${data.postalCode}

Description:
${data.description || "No description provided."}
        `.trim(),
      });
    }

    return { success: true };
  });