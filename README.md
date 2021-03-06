Official Tanjore.ca Website

# Tech Stack
- React
- React-Router
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Hosted on Github Pages

## Local Setup

In the project directory, you can run:

### `yarn start`

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
2. Checkout main branch locally
3. Git pull 
4. Run `npm run deploy` from main branch
5. There is a special branch `gh-pages` which will auto deploy whatever is on main, onto tanjore.ca 
6. Open Github settings: https://github.com/devcore-ca/tanjore/settings/pages
7. Inside the "Custom Domain" field, we should put `tanjore.ca` and hit Save. 


### Errors during deployment
| Failed to compile
- Run `npm install`
- Run `yarn`


We're using `gh-pages` 
