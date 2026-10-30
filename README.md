# Synthetic.al

An early-stage Physical AI validation initiative. This zero-dependency static website preserves the supplied design and distinguishes proposed services and illustrative diagrams from measured results.

## Current inquiry status

**Inquiries are disabled.** The operator selected GitHub hosting instead of Netlify. GitHub Pages cannot process the supplied Netlify form. No inquiry fields, POST handlers, browser storage or false submission confirmations remain in the current version. `info@synthetic.al` is owner-approved as an intended address, but mailbox setup and receipt have not been verified; it is not advertised as a working channel.

Before collecting inquiries: confirm the responsible operator's actual identity/business status, a monitored contact/privacy channel, applicable retention/legal details, and an authorized form processor or verified visitor-sent email path. Update privacy.html first. Test actual message persistence and receipt; a success page or HTTP 2xx is not delivery evidence. Legal review remains pending.

## Preview

From this directory: `python3 -m http.server 8087 --bind 127.0.0.1`, then visit http://127.0.0.1:8087/. No install or build command is needed.

## Source and hosting

Dedicated repository: https://github.com/USinani/synthetic-al-site. Intended primary branch: main; launch work: codex/launch-2026-10-30. GitHub Actions packages an explicit allowlist of website files into `_site`, then deploys to GitHub Pages. README, operational docs, Git metadata and workflow sources are excluded from the website artifact. No runtime secrets or paid services are needed.

Verified staging address before custom-domain attachment: https://usinani.github.io/synthetic-al-site/. Deployed website commit: 7ea3a7f722cfe7a78d1b0b45ce6cbc7ae534dba8; successful Actions run: 41066786616. After custom-domain attachment this address redirects toward synthetic.al, so there is no independent staging environment. Production https://synthetic.al/ and its certificate remain pending owner DNS edits and verification; do not report production live yet.

GitHub Pages does not honor netlify.toml headers. A compatible CSP is supplied via HTML meta; CSP frame-ancestors and HTTP X-Frame-Options, Permissions-Policy, Referrer-Policy and X-Content-Type-Options are not application-controlled on Pages. No third-party scripts, fonts or analytics are used. A complete security-header review needs a host/proxy with configurable headers.

## Domain migration

Before snapshot: apex A 23.227.38.65; www CNAME shops.myshopify.com; CloudyDNS NS; MX 0 synthetic.al. Owner authorizes replacing old Shopify website records and reports no email currently in use. Leave NS/MX/TXT and other services unchanged. The MX targets the apex, so future mail setup must replace that placeholder with the actual mail provider's records before claiming working email.

Attach synthetic.al to this GitHub Pages repository before changing DNS. Then, subject to GitHub's current dashboard instructions, use apex A records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; www CNAME usinani.github.io. No wildcard, nameserver switch or domain purchase. Enable HTTPS after certificate provisioning; check two public resolvers, apex/www redirects, certificate validity and mixed content.

## Verification

Check desktop/tablet/mobile at 320, 390, 768 and 1440 px; no horizontal overflow; all scenario tabs by click, arrows, Home/End; aria selection/panel/SVG changes; mobile navigation/Escape/links; keyboard skip/focus; all public routes and assets; no console errors, external runtime assets, forms, POSTs or misleading thank-you text. Repeat against the actual staging and production URLs.

## Rollback

Revert the faulty change with a normal `git revert` on main and push it to trigger a fresh Pages deployment; do not force-push. Alternatively rerun the last known good Actions deployment after verifying its commit and artifact. For DNS rollback restore only the previous website A/CNAME records listed above, preserving NS/MX/TXT and all other services. No prior successful deployment exists at initial setup, so disable Pages if the first deployment must be withdrawn.

Original supplied ZIP SHA-256: 2944bbbb0fc94f562177fec72216c322fa8939961e8100187a947c5f7544d42f. The initial import commit preserves the original Netlify version for traceability; it must not be deployed with the unfinished privacy notice/form.
