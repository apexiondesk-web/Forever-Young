# Forever Young — Premium Clinic Website

A complete responsive static website, ready to upload to GitHub and deploy on Vercel. No npm installation, build process, environment variables or paid API needed.

## Quick preview
Open `index.html` in your browser. Internet access loads the Google Fonts; serif and sans-serif fallbacks are included. All photographs and the logo are included locally.

For a local web server (optional):

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## GitHub → Vercel

1. Extract this ZIP.
2. Create a new GitHub repository, for example `forever-young-clinic`.
3. Choose **Add file → Upload files**. Upload the extracted files and the `assets` folder. `index.html` must appear at the repository root. Do not upload only the ZIP.
4. Commit the files.
5. In Vercel, choose **Add New → Project**, connect GitHub and import that repository.
6. Use **Framework Preset: Other**, **Root Directory: repository root**, and leave the **Build Command empty**. The included `vercel.json` sets the output directory to `.` (the repository root).
7. Click **Deploy**. Open the URL provided by Vercel.
8. For your own domain, add the domain in the Vercel project's Domains settings and follow its DNS instructions.

Later changes committed to the connected GitHub repository can be deployed through Vercel's Git integration.

Official configuration reference: https://vercel.com/docs/builds/configure-a-build

## Files

- `index.html`: page content, navigation, FAQs and enquiry dialog.
- `style.css`: wine/ivory design, responsive layouts, hover transitions and reduced-motion support.
- `app.js`: mobile navigation, enquiry message generator, copy-to-clipboard and dialog behavior.
- `config.js`: Instagram enquiry destination.
- `assets/`: logo, optimized WebP images and favicon.
- `vercel.json`: static deployment configuration.
- `ASSET_NOTES.md`: provenance and image-generation prompt.

## What works

- Desktop and mobile navigation.
- Buttons opening the enquiry dialog with the relevant interest selected.
- Optional first-name entry and editable interest selection.
- Generated enquiry message and copy action. If clipboard access is unavailable, the message is selected for manual copying.
- Instagram link where the visitor can paste and send the message.
- Expandable FAQs.
- Sticky desktop header and mobile enquiry bar.
- Keyboard focus, native dialog Escape behavior, labels, skip link and reduced-motion support.

## Important content and enquiry details

The Instagram profile could not be read during creation. Only the supplied clinic name, logo and Instagram handle were used. The care areas are conversation categories, not a verified treatment catalogue. The website deliberately does not invent doctors, credentials, prices, patient reviews, results, phone numbers or a clinic address.

Before using it as the clinic's official public website, replace or add clinic-approved treatment descriptions, practitioner details, opening hours, address and contact number. The current version is suitable as a design demonstration and an Instagram enquiry page.

The enquiry form is client-side only. It does not submit, store, email or book anything. Visitors must send their copied message on Instagram; the clinic must confirm the appointment. No backend or appointment availability calendar is connected.

Photographs are AI-generated editorial models, not real patients, staff, clinic interiors or treatment outcomes. This is disclosed on the page.

## Validation

JavaScript syntax, local asset references, internal anchors and ZIP integrity were checked. CSS includes breakpoints for desktop, tablet and mobile. Live browser visual/interaction testing was blocked by the preview connection, so review in your browser after extraction before client launch.

## Design

Deep wine and ivory, Cormorant Garamond editorial typography, Manrope interface text, full-height photography, staggered image sections, refined transitions and a dedicated mobile layout.

## Readability update

Explicit light/dark section text colors fix preview theme inheritance. Headings now use medium weight, body copy has stronger contrast, mobile heading sizes and spacing are more compact, and the decorative monogram has been removed.

## Clickable update

Entire care cards (including photos and text) open their matching enquiry. The hero image opens a general enquiry. Goal-strip buttons open relevant enquiries; section navigation and return-to-top links scroll within the page. Native buttons preserve keyboard access.
