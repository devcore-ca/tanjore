Official Tanjore.ca Website

# Tech Stack

- React
- React-Router
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Hosted on Github Pages

## Local Setup

In the project directory, you can run:

`npm install`
`npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Deployment to Github Pages

We use Github Pages for deployment. The site gets deployed at tanjore.ca which points to devcore-ca.github.io
Initial setup

Our deployment process is as follows:

1. Make sure `package.json` has `"homepage"` set to `"https://tanjore.ca"`.
1. Merge commits via PRs into `main` branch
1. Checkout main branch locally
1. Git pull
1. Run `npm run deploy` from main branch
1. There is a special branch `gh-pages` which will auto deploy whatever is on main, onto tanjore.ca. You don't need to manually touch the `gh-pages` branch at all for deployment.
1. Open Github settings: https://github.com/devcore-ca/tanjore/settings/pages
1. Inside the "Custom Domain" field, we should put `tanjore.ca` and hit Save. Must do after every deploy.
1. Check https://tanjore.ca/ and devcore-ca.github.io/tanjore

### Errors during deployment

| Failed to compile

- Run `npm install`

We're using `gh-pages`
