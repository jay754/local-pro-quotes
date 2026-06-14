import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteSchema = z.object({
  service: z.string().min(1, "Service is required"),
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

    return { success: true };
  });