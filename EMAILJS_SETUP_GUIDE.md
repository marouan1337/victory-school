# 📧 EmailJS Contact Form - Complete Setup Guide

## ✅ Current Status

Your contact form is **ready** and configured with EmailJS! You just need to add your credentials.

---

## 🎯 What You Need to Do (5 Minutes)

### **Step 1: Get Your EmailJS Credentials** 🔑

Go to your EmailJS dashboard: **https://dashboard.emailjs.com/**

You need **3 pieces of information:**

1. **Public Key** (User ID)
2. **Service ID**
3. **Template ID**

---

### **Step 2: Find Your Public Key** 🔑

1. Go to: https://dashboard.emailjs.com/admin/account
2. Look for **"API Keys"** section
3. Copy your **Public Key** (looks like: `aBc123XyZ...`)

**Example:**
```
Public Key: aBc123XyZ-987DefGhi456
```

---

### **Step 3: Find Your Service ID** 📮

1. Go to: https://dashboard.emailjs.com/admin
2. Click on **"Email Services"** in the left menu
3. You should see your connected email service (Gmail/Outlook/etc.)
4. Copy the **Service ID** (looks like: `service_xxxxxx`)

**Example:**
```
Service ID: service_abc1234
```

**If you don't have a service yet:**
- Click **"Add New Service"**
- Choose your email provider (Gmail recommended)
- Connect with `contact@victory-school.com`
- Copy the generated Service ID

---

### **Step 4: Create Email Template** 📝

This is the most important step!

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Click **"Create New Template"**
3. **Template Name:** `Victory School Contact Form`

#### **Email Template Settings:**

**To Email:**
```
contact@victory-school.com
```

**From Name:**
```
{{from_name}}
```

**From Email:**
```
{{from_email}}
```

**Subject:**
```
Nouveau message depuis Victory School - {{subject}}
```

**Reply To:**
```
{{from_email}}
```

**Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
    <div style="background-color: #991b1b; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0;">École Victory</h1>
        <p style="color: #fca5a5; margin: 5px 0 0 0;">Nouveau message de contact</p>
    </div>
    
    <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-top: 0;">Informations du contact</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px; font-weight: bold; color: #374151; width: 30%;">👤 Nom:</td>
                <td style="padding: 12px; color: #1f2937;">{{from_name}}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px; font-weight: bold; color: #374151;">📧 Email:</td>
                <td style="padding: 12px; color: #1f2937;">
                    <a href="mailto:{{from_email}}" style="color: #991b1b; text-decoration: none;">{{from_email}}</a>
                </td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px; font-weight: bold; color: #374151;">📱 Téléphone:</td>
                <td style="padding: 12px; color: #1f2937;">{{phone}}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px; font-weight: bold; color: #374151;">📋 Sujet:</td>
                <td style="padding: 12px; color: #1f2937;">
                    <span style="background-color: #fee2e2; color: #991b1b; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                        {{subject}}
                    </span>
                </td>
            </tr>
        </table>
        
        <div style="margin-top: 30px;">
            <h3 style="color: #374151; margin-bottom: 10px;">💬 Message:</h3>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #991b1b; white-space: pre-wrap; color: #1f2937; line-height: 1.6;">{{message}}</div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <a href="mailto:{{from_email}}" style="display: inline-block; background-color: #991b1b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Répondre au message
            </a>
        </div>
    </div>
    
    <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
        <p style="margin: 5px 0;">École Victory - Laâyoune, Morocco</p>
        <p style="margin: 5px 0;">📞 +212 808 595 932 | 📧 contact@victory-school.com</p>
        <p style="margin: 5px 0;">Ce message a été envoyé depuis le formulaire de contact du site web</p>
    </div>
</div>
```

4. Click **"Save"**
5. Copy the **Template ID** (looks like: `template_xxxxxx`)

---

### **Step 5: Add Credentials to Your Code** 💻

Open the file: **`js/emailjs-contact.js`**

Find this section (around line 10-14):

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',        // From Account > API Keys
    serviceID: 'YOUR_SERVICE_ID',        // From Email Services
    templateID: 'YOUR_TEMPLATE_ID'       // From Email Templates
};
```

**Replace with your actual values:**

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'aBc123XyZ-987DefGhi456',     // ← Your Public Key
    serviceID: 'service_abc1234',            // ← Your Service ID
    templateID: 'template_xyz9876'           // ← Your Template ID
};
```

**Save the file!**

---

### **Step 6: Test Your Form** 🧪

1. Open your website
2. Go to the Contact page
3. Fill out the form
4. Click "Envoyer le message"
5. Check `contact@victory-school.com` inbox

**You should receive a beautifully formatted email!**

---

## 📊 EmailJS Dashboard Overview

### **What Each Section Does:**

| Section | Purpose | What to Do |
|---------|---------|------------|
| **Account** | Your credentials | Get Public Key |
| **Email Services** | Connect email provider | Get Service ID |
| **Email Templates** | Design email format | Get Template ID |
| **Stats** | View usage | Monitor submissions |
| **Blocked** | Anti-spam | Check if emails blocked |

---

## 🎨 Template Variables Reference

Use these in your EmailJS template:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Sender's name | "Ahmed El Mansouri" |
| `{{from_email}}` | Sender's email | "ahmed@email.com" |
| `{{phone}}` | Phone number | "+212 661 234 567" |
| `{{subject}}` | Selected subject | "inscription" |
| `{{message}}` | User's message | "Bonjour, je suis..." |
| `{{to_email}}` | Your school email | "contact@victory-school.com" |

---

## ✨ Features Included

Your contact form now has:

### **✅ User Experience:**
- Loading spinner during submission
- Success message after sending
- Error messages for validation
- Form reset after success
- Smooth scrolling to messages
- Real-time email validation

### **✅ Validation:**
- Name: minimum 2 characters
- Email: valid format check
- Phone: minimum 8 characters
- Subject: must be selected
- Message: minimum 10 characters

### **✅ Security:**
- Client-side validation
- No exposed credentials (using public key)
- EmailJS rate limiting
- Form honeypot (spam protection)

### **✅ Analytics:**
- Console logging for debugging
- Google Analytics integration ready
- Conversion tracking support

---

## 🔍 Troubleshooting

### **Problem: "EmailJS n'est pas encore configuré"**

**Solution:**
- You forgot to add your credentials in `js/emailjs-contact.js`
- Make sure you replaced ALL three values:
  - `YOUR_PUBLIC_KEY` → your actual public key
  - `YOUR_SERVICE_ID` → your actual service ID
  - `YOUR_TEMPLATE_ID` → your actual template ID

---

### **Problem: Email not received**

**Solutions:**

1. **Check spam folder**
   - EmailJS emails might go to spam initially
   - Mark as "Not Spam"

2. **Verify Email Service is active**
   - Go to EmailJS Dashboard > Email Services
   - Make sure service status is "Active" (green)
   - Re-authenticate if needed

3. **Check Template Settings**
   - Go to EmailJS Dashboard > Email Templates
   - Verify "To Email" is set to: `contact@victory-school.com`
   - Make sure template status is "Active"

4. **Check Browser Console**
   - Press F12 to open Developer Tools
   - Look for errors in Console tab
   - Share the error messages if you need help

5. **Test Email Service**
   - Go to EmailJS Dashboard > Email Services
   - Click "Test" next to your service
   - Send a test email to verify connection

---

### **Problem: Form shows error after submission**

**Check these:**

1. **Service ID correct?**
   - Should start with `service_`
   - Get it from Email Services page

2. **Template ID correct?**
   - Should start with `template_`
   - Get it from Email Templates page

3. **Public Key correct?**
   - Should be a long string
   - Get it from Account > API Keys

4. **Template variables match?**
   - Make sure your template uses: `{{from_name}}`, `{{from_email}}`, etc.
   - Variable names must match exactly

---

### **Problem: Loading spinner stuck**

**Solutions:**

1. **Check internet connection**
   - EmailJS requires internet to work

2. **Check EmailJS status**
   - Visit: https://status.emailjs.com/
   - Make sure service is operational

3. **Clear browser cache**
   - Refresh page with Ctrl+Shift+R (Windows)
   - Or Cmd+Shift+R (Mac)

---

## 📈 EmailJS Free Plan Limits

### **What You Get Free:**

- ✅ **200 emails per month**
- ✅ **Unlimited email services**
- ✅ **Unlimited templates**
- ✅ **Email history (30 days)**
- ✅ **Basic support**

### **If You Need More:**

| Plan | Emails/Month | Price |
|------|--------------|-------|
| **Free** | 200 | $0 |
| **Email** | 1,000 | $9/month |
| **Pro** | 5,000 | $29/month |

**For a school:** 200 emails/month is usually enough unless you have massive traffic.

---

## 🎯 Email Template Best Practices

### **DO:**
- ✅ Use clear, readable fonts
- ✅ Include all form data
- ✅ Make sender email clickable
- ✅ Add "Reply" button/link
- ✅ Include school branding
- ✅ Use responsive design
- ✅ Test on mobile

### **DON'T:**
- ❌ Use too many images (may trigger spam)
- ❌ Forget to include sender's email
- ❌ Use complex JavaScript
- ❌ Make text too small
- ❌ Forget mobile optimization

---

## 🔐 Security Best Practices

### **Public Key Safety:**

- ✅ **Safe to expose:** Your public key CAN be in client-side code
- ✅ **EmailJS knows:** It's designed to be public
- ✅ **Rate limited:** EmailJS limits requests per key
- ❌ **Never share:** Private keys (you don't have any)

### **Additional Security:**

1. **Enable EmailJS anti-spam:**
   - Go to Account > Security
   - Enable "Check form submission origin"
   - Add your website domain

2. **Monitor usage:**
   - Check Stats regularly
   - Watch for unusual spikes
   - Block suspicious IPs if needed

3. **Keep credentials private:**
   - Don't share Service IDs publicly
   - Don't post Template IDs on forums
   - Use environment variables in production

---

## 📧 Sample Emails You'll Receive

### **Inscription Request:**

```
Subject: Nouveau message depuis Victory School - inscription

👤 Nom: Mohammed Alaoui
📧 Email: mohammed@email.com
📱 Téléphone: +212 661 234 567
📋 Sujet: inscription

💬 Message:
Bonjour,

Je souhaiterais inscrire mon fils en classe de CE2 pour 
la rentrée prochaine. Pourriez-vous me communiquer les 
modalités d'inscription et les tarifs ?

Merci d'avance.
```

### **Information Request:**

```
Subject: Nouveau message depuis Victory School - information

👤 Nom: Fatima Berrada
📧 Email: fatima@email.com
📱 Téléphone: +212 668 987 654
📋 Sujet: information

💬 Message:
Bonjour,

Je voudrais avoir plus d'informations sur votre école, 
notamment sur le programme de Cambridge. Est-ce que vous 
organisez des journées portes ouvertes ?

Cordialement.
```

---

## 🚀 Advanced Features (Optional)

### **1. Auto-Reply to Sender**

Add this to your EmailJS template settings:

**Auto-Reply Subject:**
```
Merci pour votre message - École Victory
```

**Auto-Reply Content:**
```
Bonjour {{from_name}},

Merci d'avoir contacté l'École Victory !

Nous avons bien reçu votre message concernant : {{subject}}

Notre équipe vous répondra dans les plus brefs délais, 
généralement sous 24-48 heures.

Cordialement,
L'équipe École Victory

---
📞 +212 808 595 932
📧 contact@victory-school.com
📍 Laâyoune, Morocco
```

### **2. Multiple Recipients (CC)**

Update your template "To Email" field:
```
contact@victory-school.com, admin@victory-school.com
```

### **3. Conditional Logic**

Create different templates for different subjects:
- `template_inscription` for registrations
- `template_cambridge` for Cambridge inquiries
- `template_general` for other questions

Then modify the JavaScript to choose template based on subject.

### **4. File Attachments**

EmailJS supports file uploads! Add to your form:

```html
<input type="file" name="attachment" accept=".pdf,.doc,.docx">
```

Update JavaScript to include files.

### **5. Custom Thank You Page**

Create `merci.html` with a thank you message, then add:

```javascript
// After successful submission:
window.location.href = 'merci.html';
```

---

## 📱 Testing on Different Devices

### **Desktop Testing:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### **Mobile Testing:**
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] iPad
- [ ] Tablet

### **Form Testing:**
- [ ] All fields required
- [ ] Email validation works
- [ ] Phone validation works
- [ ] Success message appears
- [ ] Error messages show
- [ ] Loading spinner works
- [ ] Form resets after success

---

## 📊 Monitoring & Analytics

### **EmailJS Dashboard:**

Check these metrics weekly:

1. **Total Sent:** Number of emails delivered
2. **Failed:** Emails that didn't send
3. **Blocked:** Spam prevention blocks
4. **Credits Used:** Approaching limit?

### **Google Analytics (Optional):**

The form sends events to Google Analytics:

```javascript
gtag('event', 'form_submission', {
    'event_category': 'Contact',
    'event_label': subject
});
```

Track:
- Form submission rate
- Which subjects are most popular
- Conversion from form to enrollment

---

## ✅ Final Checklist

Before going live:

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Template created with proper variables
- [ ] Public Key added to code
- [ ] Service ID added to code
- [ ] Template ID added to code
- [ ] Test email sent successfully
- [ ] Email received in inbox
- [ ] Reply-to works correctly
- [ ] Mobile responsive tested
- [ ] All fields validate properly
- [ ] Success message appears
- [ ] Error handling works
- [ ] Form resets after submission

---

## 🎉 You're Done!

Your contact form is now:

- ✅ **Professional** - Beautiful email format
- ✅ **Reliable** - Powered by EmailJS
- ✅ **Fast** - Instant delivery
- ✅ **Secure** - Spam protected
- ✅ **User-Friendly** - Clear feedback
- ✅ **Mobile-Ready** - Works everywhere
- ✅ **Free** - 200 emails/month

---

## 📞 Need Help?

### **EmailJS Support:**
- Email: support@emailjs.com
- Docs: https://www.emailjs.com/docs/
- FAQ: https://www.emailjs.com/docs/faq/

### **Quick Links:**
- Dashboard: https://dashboard.emailjs.com/
- Docs: https://www.emailjs.com/docs/
- Status: https://status.emailjs.com/
- Pricing: https://www.emailjs.com/pricing/

---

**Last Updated:** 2025-01-07  
**File:** `js/emailjs-contact.js`  
**Status:** ✅ Ready for configuration
