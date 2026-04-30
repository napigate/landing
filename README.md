# NapiGate Landing

This directory contains the static marketing site for NapiGate.

Production URL: `https://napigate.com/`

Landing repository: `https://github.com/napigate/landing`

Main product repository: `https://github.com/napigate/napigate`

Published Docker image: `napigate/napigate`

Docker Hub page: `https://hub.docker.com/repository/docker/napigate/napigate/general`

## Files

- `index.html`
- `styles.css`
- `script.js`
- `CNAME`

## Deployment

This landing page can be published directly to GitHub Pages or any static host.
The included `CNAME` points the GitHub Pages deployment at `napigate.com`.

1. Push the files to `https://github.com/napigate/landing`.
2. In GitHub, open `Settings > Pages`.
3. Choose `Deploy from a branch`.
4. Select the branch and folder that contain these files.
5. Save and wait for the site to publish.

For the custom domain, keep the `CNAME` file next to `index.html` and point DNS records for `napigate.com` to the GitHub Pages target.
