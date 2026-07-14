OHGS WEBSITE - EXACT GITHUB + VERCEL DEPLOY STEPS
Packaged: 2026-07-14 09:38:36

IMPORTANT:
Upload the CONTENTS of this folder to GitHub.
Do NOT upload this ZIP file itself.
Your GitHub repo root should show:
- index.html
- products.html
- contact.html
- vercel.json
- package.json
- api/
- assets/
- images/
- videos/

FOLDER STRUCTURE:
Only 4 important folders are needed:
1. api      = hidden email notification backend
2. assets   = logo/favicon/social preview
3. images   = website pictures
4. videos   = optimized website videos

STEP 1 - CREATE GITHUB REPO:
1. Go to github.com
2. Click + on top right
3. Click New repository
4. Repository name: olotuhardware
5. Keep it Public or Private
6. Do NOT add README, .gitignore or license
7. Click Create repository

STEP 2 - UPLOAD WEBSITE FILES TO GITHUB:
1. Open the new repository
2. Click uploading an existing file
3. Extract this ZIP on your computer
4. Open the extracted folder
5. Select ALL files and folders inside it
6. Drag them into GitHub upload page
7. Wait for upload to finish
8. Commit message: Initial OHGS website upload
9. Click Commit changes

STEP 3 - CONNECT TO VERCEL:
1. Go to vercel.com
2. Login with GitHub
3. Click Add New > Project
4. Choose repository: olotuhardware
5. Framework Preset: Other
6. Build Command: leave empty
7. Output Directory: leave empty
8. Install Command: npm install
9. Click Deploy

STEP 4 - ADD EMAIL NOTIFICATION ENVIRONMENT VARIABLES:
In Vercel project:
1. Settings
2. Environment Variables
3. Add:
   NOTIFY_TO_EMAIL = scbernard004@gmail.com
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 465
   SMTP_USER = scbernard004@gmail.com
   SMTP_PASS = your Gmail App Password
   SMTP_FROM = scbernard004@gmail.com
4. Save
5. Go to Deployments
6. Redeploy latest deployment

STEP 5 - LINK YOUR DOMAIN:
1. Open Vercel project
2. Go to Settings > Domains
3. Add your domain, for example:
   olotuhardware.co.tz
   or www.olotuhardware.co.tz
4. Vercel will show DNS records.
5. Go to your domain provider DNS settings.
6. Add the records Vercel gives you.
7. Wait for verification.
8. When Vercel shows Valid Configuration, your website is live.

COMMON DNS:
For root domain:
A record
Name: @
Value: 76.76.21.21

For www:
CNAME
Name: www
Value: cname.vercel-dns.com

TEST LINKS:
Local test:
- OPEN_THIS_TO_TEST_LOCALLY.html

Online after Vercel:
- https://your-vercel-url.vercel.app
- https://your-domain.co.tz
