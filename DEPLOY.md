# Deploy to GitHub Pages (Option B)

The **built** app (from `dist/rteam-website/browser`) is pushed to the `gh-pages` branch. GitHub Pages must serve **that branch**, not `main`.

## ⚠️ If you see the README instead of your website

- **Cause:** Pages is set to deploy from **main** (source code) instead of **gh-pages** (built site).
- **Fix:** Run the deploy script below, then in **Settings → Pages** set **Branch** to **gh-pages** (not main).

---

## One-time: Enable Pages correctly

1. Open **https://github.com/rTeamTechies/rteam-website-ui-angular**
2. **Settings** → **Pages**
3. **Source:** **Deploy from a branch**
4. **Branch:** choose **gh-pages** (not main/master) → **/ (root)** → **Save**

---

## Deploy (every time you want to update the site)

From the repo root (where `angular.json` is):

```bash
./deploy-gh-pages.sh
```

This builds the app and pushes **only the build output** to `gh-pages`. The live site is that output, not the source on `main`.

---

## Live URL

**https://rteamtechies.github.io/rteam-website-ui-angular/**

(Shows the R-Team website only when Pages is deploying from **gh-pages**.)
