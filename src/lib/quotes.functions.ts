import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteSchema = z.object({
  service: z.string().trim().min(1).max(100),
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(1, { message: "Phone is required" }).max(50),
  postalCode: z.string().trim().min(1, { message: "Postal code is required" }).max(20),
  description: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((data) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("quote_requests").insert({
      service: data.service,
      name: data.name,
      email: data.email,
      phone: data.phone,
      postal_code: data.postalCode,
      description: data.description ? data.description : null,
    });

    if (error) {
      console.error("Quote request error:", error);
      throw new Error("Failed to submit request. Please try again.");
    }

    return { success: true };
  });
