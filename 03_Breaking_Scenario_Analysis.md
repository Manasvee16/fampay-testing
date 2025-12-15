# Breaking Scenario Analysis – FamX App  
**Author:** Manasvee Rathie

## 1. OTP Loop Issue
Re-entering Aadhaar OTP repeatedly can cause inconsistent states.

## 2. Location Permission Deadlock
Without location, progress paths are unclear.

## 3. DigiLocker Redirection Risk
Back navigation breaks state and restarts KYC.

## 4. PAN Validation Delay
Real-time validation missing.

## 5. Contacts Denied → Misleading Error
Shows “Contact not found” instead of permission request.

## 6. Video KYC Payment Loop
Razorpay failure forces user into infinite loop.

## 7. Email Verification Interrupts Payment
Unexpected block during money transfer.

## 8. Aadhaar UPI PIN Setup Failure
“UIDAI DECLINE” even with correct details.

## 9. Incorrect Recents Display
Shows UPI name instead of contact name → identity confusion.

## 10. Dashboard State May Go Out-of-Sync
KYC completion sometimes needs manual app restart to refresh.
