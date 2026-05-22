# ⚡ EmailJS Quick Start - 5 Minutes Setup

## 🎯 You Need 3 Things

Go to: **https://dashboard.emailjs.com/**

---

## 1️⃣ **PUBLIC KEY** 🔑

**Where:** Account > API Keys  
**URL:** https://dashboard.emailjs.com/admin/account

```
Copy this: aBc123XyZ-987DefGhi456
          └─ Your Public Key ─┘
```

---

## 2️⃣ **SERVICE ID** 📮

**Where:** Email Services  
**URL:** https://dashboard.emailjs.com/admin

```
Copy this: service_abc1234
          └─ Your Service ID ─┘
```

**If empty:**
- Click "Add New Service"
- Choose Gmail/Outlook
- Connect `contact@victory-school.com`

---

## 3️⃣ **TEMPLATE ID** 📝

**Where:** Email Templates  
**URL:** https://dashboard.emailjs.com/admin/templates

**Click "Create New Template"**

### Template Settings:

**To:**
```
contact@victory-school.com
```

**Subject:**
```
Nouveau message depuis Victory School - {{subject}}
```

**Content:** Copy this HTML template:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2>Nouveau message de contact</h2>
    
    <table style="width: 100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 10px; font-weight: bold;">Nom:</td>
            <td style="padding: 10px;">{{from_name}}</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 10px; font-weight: bold;">Email:</td>
            <td style="padding: 10px;">{{from_email}}</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 10px; font-weight: bold;">Téléphone:</td>
            <td style="padding: 10px;">{{phone}}</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 10px; font-weight: bold;">Sujet:</td>
            <td style="padding: 10px;">{{subject}}</td>
        </tr>
    </table>
    
    <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
        <strong>Message:</strong><br>
        <p style="white-space: pre-wrap;">{{message}}</p>
    </div>
</div>
```

**Save** and copy the **Template ID**:
```
Copy this: template_xyz9876
          └─ Your Template ID ─┘
```

---

## 4️⃣ **ADD TO CODE** 💻

Open: **`js/emailjs-contact.js`**

Find this (line ~10):

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',
    serviceID: 'YOUR_SERVICE_ID',
    templateID: 'YOUR_TEMPLATE_ID'
};
```

**Replace with YOUR values:**

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'aBc123XyZ-987DefGhi456',    // ← PASTE HERE
    serviceID: 'service_abc1234',           // ← PASTE HERE
    templateID: 'template_xyz9876'          // ← PASTE HERE
};
```

**Save the file!**

---

## 5️⃣ **TEST** ✅

1. Open your website
2. Go to Contact page
3. Fill form
4. Click "Envoyer"
5. Check `contact@victory-school.com`

---

## ✨ Done!

Your form now:
- ✅ Sends emails instantly
- ✅ Works on all devices
- ✅ Shows loading spinner
- ✅ Validates inputs
- ✅ Displays success/error
- ✅ Free 200 emails/month

---

## 🆘 Not Working?

### **Check:**

1. **Credentials correct?**
   - Public Key: from Account page
   - Service ID: starts with `service_`
   - Template ID: starts with `template_`

2. **Template variables correct?**
   - Use: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`

3. **Email service active?**
   - Dashboard > Email Services
   - Status should be "Active" (green)

4. **Browser console errors?**
   - Press F12
   - Check Console tab
   - Share errors if you need help

---

## 📚 Full Guide

Need more details? Check: **`EMAILJS_SETUP_GUIDE.md`**

---

**That's it!** Your form is ready! 🎉
