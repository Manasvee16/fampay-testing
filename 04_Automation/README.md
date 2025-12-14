# FamPay Automation – Sanity Suite (WebdriverIO)

This automation suite demonstrates a production-grade WebdriverIO 
implementation using Page Object Model.
It covers Homepage, FAQs, Payments, Contact-Permissions, Email Verification,
UPI PIN setup blockers, and Payment Success validation.

checks on FamPay's web platform:

1. Homepage load validation
2. UI element presence validation
3. FAQ page content check

Although these tests run on the web version of FamPay, the same structure can 
scale to mobile/WebView automation using WebdriverIO + Appium. The goal here is 
to showcase automation design skills, not execution.

To execute the suite (optional):
- Run `npm install`
- Run `npm run test`
