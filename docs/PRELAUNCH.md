# MVM Packaging — Pre-Launch Checklist

This checklist is the release gate for making the MVM Packaging website publicly accessible.

## 1. Legal and company information

- Confirm the legal company name to publish.
- Add registered office details.
- Add VAT / tax identification details where required.
- Review and finalize the Legal page.
- Review and finalize the Privacy page.
- Confirm the public contact email and any additional company contact details.

## 2. Privacy, analytics and lead handling

- Decide whether analytics will be enabled at launch.
- If analytics or non-essential cookies are used, implement the required consent flow before enabling them.
- Decide whether the project brief remains email-based or is replaced by a web form.
- If a web form is introduced, define where lead data is stored and document the privacy basis and retention process.
- Confirm CRM destination and ownership of incoming leads before enabling automated lead transfer.

## 3. Commercial content

- Validate all public product references against the operational Notion database.
- Confirm that no supplier/manufacturer names are exposed publicly unless explicitly approved.
- Verify MOQ, lead-time, sample and technical claims before publication.
- Review category coverage and remove any empty or misleading catalogue states.
- Confirm final commercial positioning, calls to action and contact workflow.

## 4. Brand and visual assets

- Insert the definitive MVM logo without altering the approved V geometry.
- Add approved favicon and social-preview assets.
- Verify final navy, white and gold brand treatments.
- Review responsive rendering on desktop, tablet and mobile.

## 5. Technical release

- Run a production build with no TypeScript or Next.js errors.
- Check all internal links, product routes and project-prefill links.
- Verify 404 behavior.
- Verify metadata, canonical URLs, Open Graph data and sitemap.
- Remove the temporary `noindex` / `nofollow` configuration only when the site is approved for launch.
- Update `robots.ts` from disallow-all to the intended public crawling policy at launch.
- Reconnect `mvmpackaging.com` and `www.mvmpackaging.com` in Vercel only after final approval.
- Verify DNS without modifying Google Workspace MX, SPF/DKIM or verification records.

## 6. Hosting and security

- Move from a non-commercial Hobby setup to a Vercel plan suitable for commercial production before launch.
- Confirm deployment protection strategy for preview/staging environments.
- Keep production credentials and API secrets outside the repository.
- Verify no internal supplier, pricing or sourcing information is shipped in public frontend code.

## 7. Final launch gate

The site can be made public only after all of the following are explicitly approved:

- legal/privacy content;
- final product catalogue and commercial claims;
- final brand assets;
- production build and responsive QA;
- hosting plan and deployment configuration;
- domain reconnection;
- search-engine indexing settings.

Until then, the custom domain must remain disconnected and the deployment must remain protected.
