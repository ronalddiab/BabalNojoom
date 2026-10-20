# AI Changes Log

## 2026-10-20

- **Files:**
  - `application/modules/reports/views/admin_landing_pdf_chsb_reporting_reports.php`
  - `application/modules/reportscron/views/admin_landing_pdf_chsb_reporting_reports.php`
- **Change:** Replaced BabalNojoom's old `writeHTML()`-based CHSB (Cornell Hotel Sustainability Benchmarking) report page with the native-TCPDF rewrite already deployed in the Rotana environment (same codebase, same modules). The new version adds peer-range sparkline visuals, a measure-unit-parsing fix (handles names already ending in "(unit)" or a bare "%"), and a YTD/5-year period-label fallback fix, with helper functions wrapped in `if (!function_exists(...))` per this codebase's view-reload convention.
- **Verification:** Confirmed the file is environment-agnostic (no Rotana-specific hardcoded values) before copying. Confirmed Rotana's `reports/` and `reportscron/` copies of this file are byte-identical (CRLF-normalized diff), so the same content was copied to both BabalNojoom locations. Ran `php -l` on both resulting files — no syntax errors.
- **Not changed:** `application/config/settings.php`, branding assets, and the hardcoded `heportal.net/<site>` URLs in `annual_report.js`/`quarterly_report.js`/`upper_management_report.js`/`upper_management_utilities_report.js` were intentionally left untouched — these are legitimate per-environment config, not part of this sync.
- **Follow-up still needed:** Generate a live CHSB report in BabalNojoom to visually confirm correct rendering against BabalNojoom's own data before considering this complete.
