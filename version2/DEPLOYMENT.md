# Dipa Signature Realms Deployment Guide

## 1) Push to GitHub
1. Create a GitHub repository.
2. Upload all contents of the `codex` folder to repository root.
3. Commit and push.

## 2) Enable GitHub Pages
1. Open `Settings -> Pages`.
2. Build and deployment: `Deploy from a branch`.
3. Select branch (`main`) and folder (`/root`).
4. Save and wait for published URL.

## 3) Optional Custom Domain
1. In `Settings -> Pages`, add your custom domain.
2. Create DNS records:
   - Subdomain: `CNAME` -> `<username>.github.io`
   - Apex domain: A/ALIAS records as per GitHub docs.
3. Enable HTTPS once DNS propagates.

## 4) Configure Frontend Business Values
Open `script.js` and update:
- `CONFIG.upiId`
- `CONFIG.upiName`
- `CONFIG.sheetsEndpoints.orders`
- `CONFIG.sheetsEndpoints.reviews`
- `CONFIG.sheetsEndpoints.visits`

WhatsApp is already set to `8669214433` (`918669214433` format).

## 5) Google Apps Script Setup
1. Open `google-apps-script.gs` in Google Apps Script.
2. Deploy as Web App (`Anyone` access).
3. Copy deployment URL.
4. Paste that URL into all 3 `CONFIG.sheetsEndpoints` values in `script.js`.

## 6) Media Management
- All local high-quality assets are under `media/` with separate folders:
  - `media/dipas-beauty-treats`
  - `media/dipas-divine`
  - `media/dipas-tarot-oracle`
  - `media/crystal-vault`
- Replace any image file directly with your own image using the same filename for instant updates.

## 7) Analytics Placeholder
- GA placeholder exists in `index.html` (`<script id="ga-placeholder">`).
- Replace with your GA4 script when ready.

## 8) Final Verification Checklist
1. Open site and test section navigation.
2. Add products to cart and complete COD checkout.
3. Test UPI flow and QR generation.
4. Confirm WhatsApp message includes order ID/items/total/address/payment.
5. Submit a review and verify Google Sheets row creation.
6. Check map, call, and Instagram links.
