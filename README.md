# NapiGate Landing

Static landing site for `https://napigate.com/`.

## Product links

- Production site: `https://napigate.com/`
- Landing repository: `https://github.com/napigate/landing`
- Main product repository: `https://github.com/napigate/napigate`
- Docker image: `napigate/napigate`
- Docker Hub page: `https://hub.docker.com/repository/docker/napigate/napigate/general`

## What the site should communicate

The landing page is intentionally technical. It should make the current NapiGate contract obvious to an operator before they install it:

- route-centric gateway model
- separate public and admin listeners
- built-in admin, live monitor, and audit trail
- scoped clients and multiple auth methods
- output profiles, cache precedence, and trusted hooks
- published Docker image for the fastest install path
- optional Redis and Postgres backends
- explicit protocol catalog for services and routes
- HTTP ingress plus HTTP and unary gRPC upstream execution today
- declared-but-not-executed protocol types should be described honestly, not marketed as already working runtime paths

## Files

- `index.html`
- `styles.css`
- `script.js`
- `CNAME`

## Deployment

This site is static and can be published through GitHub Pages or any other static host. The checked-in `CNAME` keeps the GitHub Pages deployment mapped to `napigate.com`.

1. Push the files to `https://github.com/napigate/landing`.
2. In GitHub, open `Settings > Pages`.
3. Choose `Deploy from a branch`.
4. Select the branch and folder that contain these files.
5. Save and wait for the site to publish.

For the custom domain, keep `CNAME` beside `index.html` and point the DNS records for `napigate.com` at the GitHub Pages target.
