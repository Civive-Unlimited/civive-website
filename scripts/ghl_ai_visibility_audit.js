#!/usr/bin/env node
const fs = require('fs');

const SUBACCOUNT_ID = 'FySiQXrk1tIwqcZOlnYG';
const OUT = 'civive-ai-visibility-full-prospect-bucket-audit-20260429.json';
const apiKey = process.env.GHL_API_KEY;

const baseRecord = {
  company_name: null,
  contact_id: null,
  website_url: null,
  google_business_profile_url: null,
  category: null,
  fit_status: 'manual-review',
  primary_bucket: 'bucket:manual-review',
  secondary_buckets: [],
  ai_visibility_report_name: 'AI Visibility Report',
  main_problem: 'Blocked: missing GHL API access in runtime.',
  why_civive_can_help: 'Once records are accessible, Civive can diagnose missed-call, visibility, and conversion leaks.',
  recommended_offer: 'AI Visibility Report + bucket-specific fix plan',
  recommended_first_message_angle: 'I ran your AI Visibility Report and found one major leak worth fixing first.',
  evidence_urls: [],
  ghl_update_status: 'blocked-no-api-access',
  readback_gate_status: 'blocked-no-api-access',
  manual_review_notes: 'Set GHL_API_KEY and rerun; then perform contact update + readback gate checks.'
};

function writeBlockedExport() {
  const payload = {
    generated_at: new Date().toISOString(),
    subaccount_id: SUBACCOUNT_ID,
    status: 'blocked',
    reason: 'GHL_API_KEY is not set in this environment.',
    records: []
  };
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2));
  console.log(`Wrote ${OUT} (blocked placeholder).`);
}

if (!apiKey) {
  writeBlockedExport();
  process.exit(0);
}

console.log('GHL_API_KEY detected. Implement live pull/update flow in connected runtime.');
fs.writeFileSync(OUT, JSON.stringify({
  generated_at: new Date().toISOString(),
  subaccount_id: SUBACCOUNT_ID,
  status: 'ready-for-live-run',
  records: [baseRecord]
}, null, 2));
console.log(`Wrote ${OUT}.`);
