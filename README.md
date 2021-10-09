Official Tanjore.ca Website

# Tech Stack
- React
- React-Router
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Hosted on Github Pages

## Local Development

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Deployment

We use Github Pages for deployment. The site gets deployed at https://dev-corps.github.io/tanjore/

Our deployment process is as follows:

1. Merge commits via PRs into `main` branch 
2. Run `npm run deploy` from main branch
3. There is a special branch `gh-pages` which will auto deploy whatever is on main, onto tanjore.ca 

