# Sanity Testing Suite – FamX App  
**Author:** Manasvee Rathie

## A. App Launch
- App opens without crash  
- Home screen loads correctly  

## B. Signup & OTP
- Valid/mobile number accepted  
- Invalid numbers rejected  
- OTP auto-read (when permission allowed)  
- Manual OTP entry works  
- Timer and resend flows working  

## C. Permissions
- Location permission request  
- Deny → fallback explanation  
- Contacts permission updates UI after enabling via Settings  

## D. Dashboard
- Shows correct KYC progress  
- Cards update after Aadhaar/PAN/Video KYC  

## E. Aadhaar KYC
- Aadhaar validation  
- OTP flow  
- Retry flow after exit  

## F. PAN Verification
- Invalid PAN error  
- Valid PAN accepted  

## G. Video KYC Payment
- Razorpay loads  
- Payment failure retry  
- Success status updates dashboard  

## H. Video KYC (HyperVerge)
- Permission handling  
- Resume after interruption  

## I. Email Verification
- Payment blocked until email added  

## J. Bank Linking
- Account list fetch  
- Primary account highlighting  

## K. UPI PIN Setup
### Aadhaar Method
- Enter Aadhaar  
- OTP request  
- “UIDAI DECLINE” error handling  
- Retry success  
- Success screen: “UPI PIN Set!”

### Debit Card Method
- Validates card data  

## L. ₹1 Activation Payment
- Mandatory for first payment  
- Works reliably  

## M. UPI Payments
- Contact search  
- Recents list (bug: shows bank name)  
- UPI PIN entry screen  
- Payment success screen  
