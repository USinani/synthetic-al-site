# Synthetic.al launch verification — 30 October 2026

**Status: production HTTPS endpoint verified; final launch checks pending propagation and contact setup.**

- Repository: https://github.com/USinani/synthetic-al-site (private). Main is the publication branch; launch branch codex/launch-2026-10-30.
- Deployed website commit: 7ea3a7f722cfe7a78d1b0b45ce6cbc7ae534dba8. Successful deployment: https://github.com/USinani/synthetic-al-site/actions/runs/41066786616. Later commits update documentation only.
- Staging: https://usinani.github.io/synthetic-al-site/ — tested before custom-domain attachment; now redirects to the domain, not an independent staging environment.
- Production: https://synthetic.al/ — valid apex/www certificate, expires 2027-01-28. Full TLS hostname validation at the verified public GitHub IP passed. HTTPS www redirects to apex. Enforcement is enabled in GitHub; cached HTTP responses have not yet adopted it.

## DNS before / saved after

| Record | Before | Saved after |
|---|---|---|
| Apex A | 23.227.38.65 | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| www CNAME | shops.myshopify.com | usinani.github.io |
| NS | ns1/ns2/ns3.cloudydns.com | Preserved |
| MX | 0 synthetic.al | Preserved; does not establish a working mailbox |

Google and Cloudflare confirm the new A/CNAME records. Owner performed edits in their separate DNS browser profile. mail/ftp and other service records were outside the requested changes. Existing apex MX is a placeholder; configure an actual mail provider before advertising info@synthetic.al.

## Passed

ZIP hash/inventory, safe isolated import, secret-pattern scan, syntax and local references; nine live staging routes/assets match committed bytes and four non-site paths return 404; source public artifact excludes docs, Git metadata and operational files. Local actual Chrome at 320/390/768/1440 px passes layout, scenario mouse/keyboard/aria/SVG updates, mobile menu and privacy/skip navigation. Live staging mobile/desktop checks passed, no site-origin console errors. Nine production HTTPS responses match those exact source hashes; valid TLS 1.3 and www HTTPS redirect verified. Original visual identity and early-stage/illustrative wording preserved; social preview inspected.

## Outstanding and limitations

1. Normal production browser check blocked by stale local DNS pointing to Shopify. No security warning bypass. Wait for DNS cache expiry; previous TTL was about four hours.
2. HTTP apex and HTTP www still serve cached pre-enforcement behavior at the tested edge. Recheck automatic HTTPS redirects after cache/config propagation.
3. Customer inquiries disabled. GitHub Pages cannot process the original Netlify form. No submission persistence or notification delivery claimed. Actual operator identity, monitored mailbox and inquiry/privacy retention terms remain required before opening inquiries.
4. GitHub Pages does not support the original Netlify response headers; compatible CSP meta only. No Safari/physical touch device, formal accessibility audit or legal review.

## Rollback

For content, git revert the faulty commit on main and push normally to redeploy; never force-push. The successful deployed website baseline is 7ea3a7f. For DNS, restore only apex A 23.227.38.65 and www CNAME shops.myshopify.com if returning to the former website is intended; preserve all other records. The former Shopify HTTPS endpoint failed at baseline, so DNS rollback does not promise a working old site.
