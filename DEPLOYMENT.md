# Dipa Signature Realms Deployment Guide

## 1) Push the `codex` folder contents
1. Create or open your GitHub repository.
2. Upload all files from `codex` to repo root.
3. Commit and push to `main`.

## 2) Enable GitHub Pages
1. Go to `Settings -> Pages`.
2. Set source to `Deploy from a branch`.
3. Select `main` and `/root`.
4. Save and wait for publish URL.

## 3) Domain setup (optional)
1. Add custom domain in `Settings -> Pages`.
2. Configure DNS records as required by GitHub Pages.
3. Enable HTTPS after DNS propagation.

## 4) Business info you may want to customize
- Phone/WhatsApp number: `script.js` (`CONFIG.whatsapp`).
- Booking urgency close hour: `script.js` (`CONFIG.slotCloseHour`).
- SEO text and schema: `index.html` (`meta` tags and JSON-LD block).

## 5) Verify before going live
1. Check section navigation and mobile menu.
2. Test WhatsApp buttons and lead form message flow.
3. Confirm crystal filters and service cards render correctly.
4. Test Google Map embed and call links.
5. Run hard refresh once after deploy (`Ctrl+F5`) due service-worker cache.

## 6) PWA note
- `service-worker.js` caches core files and generated design assets.
- On major UI updates, increase `CACHE_NAME` to force fresh cache.
