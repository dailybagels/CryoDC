# Netlify Forms setup

This project uses **Netlify Forms**. Submissions are received in the Netlify dashboard with no API calls or extra backend.

## 1. Enable form detection (required)

Form detection is **not** in the repo; you turn it on in the Netlify UI:

1. In [Netlify](https://app.netlify.com), open your site (CryoDC).
2. Go to **Forms** in the top nav.
3. Under **Form detection**, select **Enable form detection**.

On the next deploy, Netlify will scan the built site, find forms that have the `data-netlify="true"` (or `netlify`) attribute, and start accepting submissions for them.

## 2. HTML form with Netlify attribute (already in repo)

A static HTML form is included so Netlify can detect it at deploy time:

- **File:** `public/__forms.html`
- **Form name:** `contact`
- **Attributes:** `method="POST"` and `data-netlify="true"` on the `<form>` tag.

That file is a hidden form used only for detection. The visible form is in `components/Contact.tsx`; it submits via JavaScript to `/__forms.html`, which Netlify serves and uses to handle the POST.

## 3. Receive submissions by email

To get each submission at **alif@cryodc.io** (or another address):

1. Netlify dashboard → your site → **Forms**.
2. Open the **contact** form.
3. Go to **Form notifications** (or **Notifications**).
4. **Add notification** → **Email notification**.
5. Set **Email to notify** to **alif@cryodc.io** (or the address you want) and save.

Submissions will appear in **Forms** → **contact** → **Submissions**, and email notifications will go to the address you set.
