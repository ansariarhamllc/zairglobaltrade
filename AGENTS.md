# Architecture rules
- Keep existing products and sourced business facts in shared data modules; missing specifications remain explicit placeholders so pages cannot silently invent trade terms.
- Receive RFQs through a validated, rate-limited Cloud edge function and private quote_requests table; only show receipt after a successful insert.
- Reuse PageShell and BuyerSections for factual page structure and buyer guidance; keep the five primary navigation destinations unchanged and expose Contact through shared links.
