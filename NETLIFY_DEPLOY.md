# Netlify deploy branch

Your latest contact-form changes are on branch **design-revamp** (committed and pushed).

If the live site still shows old content, Netlify is probably building **main** instead of **design-revamp**.

## Option A – Deploy design-revamp as production

1. Netlify dashboard → your site → **Site configuration**
2. **Build & deploy** → **Continuous deployment**
3. Under **Branch deploy**, set **Production branch** to **design-revamp**
4. Save. Netlify will redeploy from `design-revamp` and the new contact options will appear.

## Option B – Merge into main so current production shows the changes

From your repo (in a terminal):

```bash
git checkout main
git pull origin main
git merge design-revamp
git push origin main
```

Then in Netlify, trigger a deploy for **main** (or wait for auto-deploy). The live site will show the updated contact form.
