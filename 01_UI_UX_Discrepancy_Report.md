# UI/UX Discrepancy Report – FamX App
**Author:** Manasvee Rathie

## 1. Permissions Requested Without Explanation
- Location requested without stating purpose.
- Contacts requested only when user attempts payment.
- If denied, app shows "Contact not found" instead of asking user to enable permission.

---

## 2. Aadhaar OTP Flow Confusion
- OTP is sent to SMS app instead of in-app.
- Instruction "use the same OTP" is unclear.
- Exiting the flow triggers warning “Don’t lose your early access!”.

---

## 3. Branding Fragmentation
During KYC, user jumps between:
- FamX  
- DigiLocker  
- Digio  
- HyperVerge  

This breaks trust and feels inconsistent.

---

## 4. PAN Verification Experience
- Invalid PAN is detected only after pressing submit (no real-time validation).

---

## 5. Video KYC Fee Disclosure Issue
₹99 fee is shown *after* Aadhaar + PAN steps.

---

## 6. Contact Permission UX Bug
When permission is denied:
- Payment screen shows “Contact not found”
- Expected: “Enable Contacts permission to continue”

---

## 7. Email Verification Block Appears During Payment
Unexpected interruption:
“Add email for extra security (mandatory).”

---

## 8. Recents List Name Mismatch
User pays contact "Ishu"  
Recents list shows **Rahul Jain** (bank-verified name).

---

## 9. UPI PIN Setup Error – “UIDAI DECLINE”
Even with correct Aadhaar + OTP, many attempts fail first.

Error is overly technical.

---

## 10. Missing Dual Name Format
Should show:
**Ishu (Rahul Jain – UPI Verified)**  
App only shows bank name.
