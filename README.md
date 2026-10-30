# Synthetic.al — physical AI validation landing page

An original, responsive, zero-dependency static site for an **early-stage** robotics validation venture.

## Files

- `index.html` — landing page / Netlify-ready inquiry form
- `styles.css` — responsive dark UI / accessibility styles
- `script.js` — interactive test-scenario explorer, mobile navigation and form state
- `privacy.html` — **draft** privacy notice, with mandatory operator details outstanding
- `thank-you.html` — post-submission page
- `assets/favicon.svg` and `assets/social-preview.png` — original visual identity
- `netlify.toml` — static hosting settings and baseline security headers
- `robots.txt`, `sitemap.xml`

## Local preview

From the extracted site directory:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/`. The scenario explorer and responsive navigation work locally. **The inquiry form intentionally does not send anything on localhost.**

## Before going public (required)

1. **Complete the privacy policy.** Add the actual legal operator/data controller and a valid contact for privacy requests; have your local privacy/data rules checked. It is currently marked DRAFT. Confirm that Netlify's form processing and data location fit your obligations.
2. **Set up hosting** (e.g. connect this folder as a static site on Netlify) and confirm Forms is enabled. Deploy and inspect Netlify's forms dashboard for the `robotics-inquiry` form. If needed, Netlify may require enabling form detection/redeploying.
3. **Test an actual inquiry** on the live staging hostname (never with confidential content). Verify it appears in the dashboard and that the submitted fields, success page, spam protection and notification destination are correct. The JavaScript only acknowledges success on HTTP OK; it does not itself guarantee the hosting provider persisted a submission, so verify it in the Forms dashboard before launch.
4. **Configure lead notifications** to an actual inbox you control; no email address was invented in the source.
5. **Check domain and HTTPS.** Only point `synthetic.al` at the site after testing staging. `og:url`, `og:image`, `robots.txt` and `sitemap.xml` currently assume `https://synthetic.al`.
6. **Validate business assertions.** Current copy clearly says early-stage and prospective services. It does not claim existing customers, an operational testing platform, safety certification or measured performance.
7. **Legal/commercial review.** Check business registration, applicable consumer/business rules, data protection obligations, and any engineering service disclaimers before accepting work.

## Editorial choices

- Lead with the client's future **deployment risk**, not with the domain or AI buzzwords.
- Four interactive failure scenarios are *examples*, not simulated test data.
- A concept robot schematic is vector artwork, not a photo of equipment owned by the venture.
- NIST/CoRL/ISO references are independent research/standards sources, not endorsements or certifications.
- Site carries no third-party scripts or tracking pixels.

## Test locally

You can check routes and accessibility at multiple screen sizes with Playwright/Chromium. A browser test script and screenshots can be provided as part of development, but the distributed site needs no Node build step.
