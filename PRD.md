# PRD — Jackie Fleming personal site

**Status:** Draft v1 · 2026-11-09
**Live URL (target):** https://jackiefleming.github.io
**Hosting:** GitHub Pages (static; no server, no API keys)

## 1. User problem

**Primary users:** Recruiters and hiring managers for **Corporate FP&A** roles, and
secondarily **Supply / Demand Planning** roles. Secondary: MBA classmates, alumni,
and networking contacts.

**Their goal:** In ~60 seconds, decide whether Jackie is worth an interview or a
coffee chat — and know how to reach her.

**Today's friction:** A PDF resume and LinkedIn don't show *how* Jackie thinks, and a
path that runs through retail inventory planning → pricing analytics → MBA → Target
FP&A internship can read as scattered unless it's framed as one story: *planning and
forecasting expertise, now applied to corporate finance.*

## 2. Main workflow

1. Visitor lands on **About** → reads headline + 2–3 sentence positioning.
2. Scans strengths / highlights (with real numbers).
3. Opens **Resume** to view full experience on the page (no download).
4. Optionally opens **Portfolio** for 3–4 short case studies.
5. Contacts via **email** or **LinkedIn**.

## 3. MVP — must-haves (v1)

- [ ] **Positioning** rewritten for FP&A first, demand planning second.
- [ ] **Location:** Salt Lake City, UT area (not New York). Past job locations on
      the resume stay as they were.
- [ ] **Contact:** email + LinkedIn (`https://www.linkedin.com/in/jackie-fleming/`) only.
      **Phone number removed everywhere.**
- [ ] **Resume page** matches the 2026 ATS resume: adds the Target MBA Finance
      Intern role, quantified results (10% forecast accuracy, $18M BU, 19% → <1.5%
      variance, 30+ dashboards), core competencies, "Finance and Analytics"
      emphasis, graduation Apr 2027, interests.
      *Viewable on the page as HTML; no PDF download link* (this also keeps the
      phone number on the PDF off the public web).
- [ ] **Portfolio hidden** for v1 (nav link + route removed, code kept) until real
      case studies are ready.
- [ ] **Interests** (sustainability/sewing & thrifting, Menlo Park Craft Night,
      trail running) shown on About.
- [ ] Readable on a phone; no broken links; deep links (e.g. `/resume`) work on
      GitHub Pages.
- [ ] Published at `jackiefleming.github.io`.

## 4. Out of scope for v1 (later add-ons, in rough priority)

1. **Portfolio** — re-enable with real case studies (Advanced Financial Modeling,
   Financial Statement Analysis work; possibly Target/See's/West Elm approach-only
   write-ups). Confidential data stays out.
2. Headshot photo on About.
3. Custom domain (e.g. jackiefleming.com).
4. Blog / writing.
5. Contact form (would need a third-party form service).
6. Analytics (privacy-friendly visitor counts).

## 5. Name & design direction

- **Site name:** "Jackie Fleming", with focus line **"FP&A · Planning & Strategy"**.
- **Look:** keep the current "polished & editorial" style — warm cream paper
  background, near-black ink text, one claret accent (`#9a3b2e`); **Fraunces**
  (serif headings; Newsreader tried but Fraunces stands out more) + Inter (body). Generous whitespace, no decorative clutter.
- **What users notice first:** name, focus line, one-sentence value statement, and
  contact links above the fold.

## 6. Success criteria

- A stranger can answer "What does Jackie do, and how do I reach her?" within 30s.
- Every resume number on the site matches the ATS resume.
- No phone number anywhere in the published site or repo content.
- Looks correct at 375px (phone) and desktop widths.
- Live link works and Jackie would put it on her resume/LinkedIn.

## 7. Open questions

None — PRD locked for v1.
