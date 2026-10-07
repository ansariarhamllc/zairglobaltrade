CREATE TABLE public.quote_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 product text NOT NULL CHECK (char_length(product) BETWEEN 1 AND 200),
 quantity_mt numeric NOT NULL CHECK (quantity_mt > 0 AND quantity_mt <= 1000000),
 destination text NOT NULL CHECK (char_length(destination) BETWEEN 1 AND 200),
 packaging text NOT NULL CHECK (char_length(packaging) BETWEEN 1 AND 200),
 required_ship_date date NOT NULL,
 incoterm text NOT NULL CHECK (char_length(incoterm) BETWEEN 1 AND 100),
 company text NOT NULL CHECK (char_length(company) BETWEEN 1 AND 150),
 contact_name text NOT NULL CHECK (char_length(contact_name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255),
 whatsapp text NOT NULL CHECK (char_length(whatsapp) BETWEEN 7 AND 30)
);
GRANT ALL ON public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE TABLE public.quote_rate_limits (
 key_hash text PRIMARY KEY,
 window_start timestamptz NOT NULL DEFAULT now(),
 requests integer NOT NULL DEFAULT 1
);
GRANT ALL ON public.quote_rate_limits TO service_role;
ALTER TABLE public.quote_rate_limits ENABLE ROW LEVEL SECURITY;
CREATE FUNCTION public.allow_quote_request(_key text) RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE n integer;
BEGIN
 INSERT INTO public.quote_rate_limits(key_hash) VALUES (_key)
 ON CONFLICT(key_hash) DO UPDATE SET
 requests = CASE WHEN quote_rate_limits.window_start < now() - interval '1 hour' THEN 1 ELSE quote_rate_limits.requests + 1 END,
 window_start = CASE WHEN quote_rate_limits.window_start < now() - interval '1 hour' THEN now() ELSE quote_rate_limits.window_start END
 RETURNING requests INTO n;
 RETURN n <= 5;
END; $$;
REVOKE ALL ON FUNCTION public.allow_quote_request(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.allow_quote_request(text) TO service_role;