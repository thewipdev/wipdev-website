# How to Deploy to GitHub

You have a local git repository ready. Now you need to push it to GitHub.

## Step 1: Create a Repository on GitHub
1.  Go to [github.com/new](https://github.com/new).
2.  Enter a **Repository name** (e.g., `my-portfolio`).
3.  Choose **Public** or **Private**.
4.  **Do not** check "Initialize this repository with a README" (since we already have code).
5.  Click **Create repository**.

## Step 2: Push Your Code
Once the repository is created, you will see a section called **"…or push an existing repository from the command line"**.
Copy the commands shown there. They will look like this:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages (Optional)
If you want to host the site for free:
1.  Go to your repository **Settings**.
2.  Click on **Pages** in the left sidebar.
3.  Under **Build and deployment**, select **Source** as `Deploy from a branch`.
4.  Select `main` branch and `/ (root)` folder.
5.  Click **Save**.

*Note: For a Vite app, you might need to configure `base` in `vite.config.js` if you are not deploying to a custom domain.*
