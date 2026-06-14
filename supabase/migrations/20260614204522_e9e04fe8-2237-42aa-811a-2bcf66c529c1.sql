DROP TABLE IF EXISTS public.contact_submissions;

CREATE TABLE public.quote_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    postal_code TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.quote_requests TO anon;
GRANT INSERT ON public.quote_requests TO authenticated;
GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
ON public.quote_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
    length(name) BETWEEN 1 AND 100
    AND length(email) BETWEEN 3 AND 255
    AND length(phone) BETWEEN 1 AND 50
    AND length(postal_code) BETWEEN 1 AND 20
    AND length(service) BETWEEN 1 AND 100
    AND (description IS NULL OR length(description) <= 2000)
);

CREATE POLICY "Service role can view all quote requests"
ON public.quote_requests
FOR SELECT
TO service_role
USING (true);