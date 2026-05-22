# 🚀 Hostinger Deployment Guide - Cambridge Float Fix

## ❌ Problem: Cambridge Floating Window Not Working on Hostinger

---

## ✅ Step-by-Step Solution

### **Step 1: Upload Test File** 🧪

1. **Upload `test-cambridge.html` to your Hostinger `public_html` folder**
2. **Visit:** `https://your-domain.com/test-cambridge.html`
3. **Check the test results** - it will tell you exactly what's wrong!

---

### **Step 2: Most Common Issues & Fixes**

#### **🔴 Issue #1: Files Not Uploaded**

**Symptoms:**
- Test page shows "CSS file NOT loaded"
- Test page shows "JavaScript NOT loaded"

**Solution:**
Make sure these files exist on Hostinger:

```
public_html/
├── js/
│   └── cambridge-float.js       ← Upload this!
├── css/
│   └── cambridge-float.css      ← Upload this!
└── logo/
    └── cambridge_logo12.jpg     ← Upload this!
```

**How to upload:**
1. Go to Hostinger **File Manager**
2. Navigate to `public_html`
3. Create folders if they don't exist: `js`, `css`, `logo`
4. Upload files to correct folders

---

#### **🔴 Issue #2: Case-Sensitive Filenames**

**Symptoms:**
- Test shows "Logo image NOT found"
- Browser console shows 404 error for image

**Problem:**
Linux servers (like Hostinger) are **case-sensitive**!

**Your file:** `cambridge_logo12.jpg` (lowercase)  
**If named:** `Cambridge_Logo12.jpg` (uppercase) → **WILL FAIL!**

**Solution:**
1. Check exact filename on server
2. Make sure it's **all lowercase**: `cambridge_logo12.jpg`
3. If wrong, rename the file on server

---

#### **🔴 Issue #3: Wrong File Permissions**

**Symptoms:**
- Files uploaded but still don't load
- 403 Forbidden errors

**Solution:**
Set correct permissions in Hostinger File Manager:

| File/Folder | Permission |
|-------------|------------|
| **Folders** (`js`, `css`, `logo`) | 755 |
| **Files** (`.js`, `.css`, `.jpg`) | 644 |

**How to change permissions:**
1. Right-click file in File Manager
2. Click "Change Permissions"
3. Set to 644 (files) or 755 (folders)

---

#### **🔴 Issue #4: Browser Cookie Blocking Card**

**Symptoms:**
- Everything loads but card doesn't appear
- Test shows "Cookie is set"

**Problem:**
You closed the card before, and browser remembers!

**Solution:**
1. Clear your browser cookies
2. **OR** test in Incognito/Private mode
3. **OR** click "Clear Cookie" button on test page

---

#### **🔴 Issue #5: HTML Pages Missing Script Tags**

**Symptoms:**
- Test page works
- But card doesn't show on actual pages

**Problem:**
Your HTML pages might be missing the script/css links!

**Solution:**
Check that **EVERY** HTML page has these lines:

```html
<head>
    <!-- Other head content -->
    
    <!-- Cambridge Float CSS -->
    <link rel="stylesheet" href="css/cambridge-float.css">
</head>

<body>
    <!-- Your page content -->
    
    <!-- At the end, before </body> -->
    <script src="js/cambridge-float.js"></script>
</body>
```

**Pages to check:**
- index.html
- contact.html
- galerie.html
- inscriptions.html
- pedagogie.html
- vie-scolaire.html

---

#### **🔴 Issue #6: Path Issues with Subfolders**

**Symptoms:**
- Works on some pages, not others
- Files load from root but not subpages

**Problem:**
If you have pages in subfolders, paths might be wrong!

**Example:**
```
public_html/
├── index.html              ← css/cambridge-float.css works
└── pages/
    └── about.html          ← css/cambridge-float.css FAILS!
```

**Solution A:** Use absolute paths (recommended)
```html
<!-- Change from: -->
<link rel="stylesheet" href="css/cambridge-float.css">
<script src="js/cambridge-float.js"></script>

<!-- To: -->
<link rel="stylesheet" href="/css/cambridge-float.css">
<script src="/js/cambridge-float.js"></script>
```

**Solution B:** Use relative paths
```html
<!-- For pages in subfolders: -->
<link rel="stylesheet" href="../css/cambridge-float.css">
<script src="../js/cambridge-float.js"></script>
```

---

### **Step 3: Browser Console Debugging** 🔍

**How to check:**
1. Visit your live website
2. Press **F12** (or **Ctrl+Shift+I**)
3. Click **Console** tab
4. Look for errors

**Common errors and fixes:**

| Error Message | Problem | Fix |
|---------------|---------|-----|
| `Failed to load resource: cambridge-float.css` | CSS file missing | Upload CSS file |
| `Failed to load resource: cambridge-float.js` | JS file missing | Upload JS file |
| `Failed to load resource: cambridge_logo12.jpg` | Image missing or wrong case | Check filename case |
| `Uncaught ReferenceError: CambridgeFloat is not defined` | JS not loading | Check script tag |
| `404 Not Found` | File doesn't exist at that path | Check file path |
| `403 Forbidden` | Wrong permissions | Set to 644 |

---

### **Step 4: Network Tab Debugging** 🌐

**How to check:**
1. Press **F12**
2. Click **Network** tab
3. Refresh page (**Ctrl+R**)
4. Look for red items (failed loads)

**What to check:**
- Status codes (should be 200, not 404 or 403)
- File paths (are they correct?)
- File sizes (should not be 0 bytes)

---

## 🔧 Quick Fixes Checklist

Run through this checklist:

- [ ] **Files uploaded to Hostinger**
  - [ ] `js/cambridge-float.js` exists
  - [ ] `css/cambridge-float.css` exists
  - [ ] `logo/cambridge_logo12.jpg` exists

- [ ] **File permissions correct**
  - [ ] Folders: 755
  - [ ] Files: 644

- [ ] **Filenames are lowercase**
  - [ ] `cambridge_logo12.jpg` (not Cambridge_Logo12.jpg)

- [ ] **HTML pages have script tags**
  - [ ] CSS link in `<head>`
  - [ ] JS script before `</body>`

- [ ] **Paths are correct**
  - [ ] Using `/css/` for absolute paths
  - [ ] Or correct relative paths

- [ ] **Browser cache cleared**
  - [ ] Hard refresh (Ctrl+Shift+R)
  - [ ] Or test in Incognito mode

- [ ] **Cookie cleared**
  - [ ] Delete `cambridge_float_closed` cookie
  - [ ] Or use test page Clear Cookie button

---

## 🧪 Testing Procedure

### **Method 1: Use Test Page**

1. Upload `test-cambridge.html` to `public_html`
2. Visit `https://your-domain.com/test-cambridge.html`
3. Check all status indicators
4. Click test buttons
5. Fix any red ❌ items

### **Method 2: Browser Console**

1. Visit your homepage
2. Press **F12**
3. Console tab - check for errors
4. Network tab - check file loads
5. Type: `CambridgeFloat.show()` in console
6. Card should appear if files loaded

### **Method 3: Force Show**

Add this to your page temporarily:

```html
<script>
// Wait for page load, then force show
window.addEventListener('load', function() {
    // Clear cookie
    document.cookie = 'cambridge_float_closed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    // Show card after 1 second
    setTimeout(function() {
        if (typeof CambridgeFloat !== 'undefined') {
            CambridgeFloat.show();
            console.log('✅ Card forced to show');
        } else {
            console.error('❌ CambridgeFloat not loaded');
        }
    }, 1000);
});
</script>
```

---

## 📋 File Upload Verification

### **Method 1: File Manager**

1. Login to Hostinger
2. Go to **File Manager**
3. Navigate to `public_html`
4. Verify structure:

```
public_html/
├── index.html
├── contact.html
├── galerie.html
├── inscriptions.html
├── pedagogie.html
├── vie-scolaire.html
│
├── css/
│   ├── cambridge-float.css      ✅
│   └── (other CSS files)
│
├── js/
│   ├── cambridge-float.js       ✅
│   ├── components.js
│   └── (other JS files)
│
└── logo/
    ├── cambridge_logo12.jpg     ✅
    └── (other images)
```

### **Method 2: Direct URL Test**

Try accessing files directly in browser:

```
https://your-domain.com/css/cambridge-float.css
https://your-domain.com/js/cambridge-float.js
https://your-domain.com/logo/cambridge_logo12.jpg
```

**Should see:**
- CSS file: Shows CSS code
- JS file: Shows JavaScript code
- Image: Shows logo image

**If you see 404:** File doesn't exist or path is wrong!

---

## 🔄 Re-upload Process

If files are corrupted or incomplete:

### **Step 1: Delete existing files**
```
public_html/js/cambridge-float.js         → Delete
public_html/css/cambridge-float.css       → Delete
public_html/logo/cambridge_logo12.jpg     → Delete
```

### **Step 2: Re-upload fresh copies**

From your local computer:
```
vict-main/js/cambridge-float.js           → Upload to public_html/js/
vict-main/css/cambridge-float.css         → Upload to public_html/css/
vict-main/logo/cambridge_logo12.jpg       → Upload to public_html/logo/
```

### **Step 3: Set permissions**
- Folders: 755
- Files: 644

### **Step 4: Clear cache & test**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check test page

---

## 🎯 Common Hostinger-Specific Issues

### **Issue: Files uploaded but URL shows old version**

**Cause:** Hostinger caching

**Fix:**
1. Go to Hostinger dashboard
2. Find "Clear Cache" option
3. Clear website cache
4. Wait 2-3 minutes
5. Hard refresh browser

---

### **Issue: Works locally but not on server**

**Cause:** Windows vs Linux differences

**Differences:**

| Windows (Local) | Linux (Hostinger) |
|----------------|-------------------|
| Case-insensitive | **Case-sensitive** |
| Uses `\` paths | Uses `/` paths |
| More permissive | Strict permissions |

**Fix:**
- Use lowercase filenames
- Use forward slashes `/`
- Check file permissions

---

### **Issue: Card appears for 1 second then disappears**

**Cause:** JavaScript error after card loads

**Fix:**
1. Check browser console for errors
2. Make sure all image paths are correct
3. Check for JavaScript conflicts with other scripts

---

## 📞 Still Not Working?

### **Gather this information:**

1. **Test page results**
   - Visit test-cambridge.html
   - Take screenshot of results

2. **Browser console errors**
   - Press F12 > Console
   - Copy all red error messages

3. **Network tab**
   - Press F12 > Network
   - Refresh page
   - Screenshot any failed requests (red items)

4. **File structure**
   - Screenshot of Hostinger File Manager
   - Show js/, css/, logo/ folders

5. **Your website URL**
   - Share your live website link

---

## ✅ Success Indicators

**You'll know it's working when:**

1. ✅ Test page shows all green checkmarks
2. ✅ Browser console has no errors
3. ✅ Card appears in bottom-right after 2 seconds
4. ✅ Card slides in smoothly
5. ✅ Closing card sets cookie (doesn't show again for 24h)
6. ✅ Card appears on all pages

---

## 🚀 Final Steps After Fix

Once working:

1. **Delete test file**
   - Remove `test-cambridge.html` from server
   - No longer needed

2. **Test all pages**
   - Visit each page of your site
   - Confirm card appears on all

3. **Test cookie functionality**
   - Close card
   - Refresh page
   - Card should NOT appear (for 24 hours)

4. **Test on mobile**
   - Check on phone
   - Card should be responsive

---

## 📝 Prevention Tips

**For future uploads:**

1. **Always use lowercase filenames**
2. **Set correct permissions immediately after upload**
3. **Test files directly via URL before expecting them to work**
4. **Keep local and server file structures identical**
5. **Use absolute paths (starting with `/`) when possible**

---

## 🎓 Understanding the Issue

**Why it works locally but not on server:**

| Aspect | Your Computer | Hostinger Server |
|--------|---------------|------------------|
| **OS** | Windows | Linux |
| **Case Sensitivity** | No | **YES** |
| **File Paths** | `C:\folder\file` | `/folder/file` |
| **Permissions** | Not enforced | **Strictly enforced** |
| **Cache** | Local browser | Server + Browser |

---

**Last Updated:** 2025-01-07  
**Status:** Ready for deployment  
**Test File:** test-cambridge.html
