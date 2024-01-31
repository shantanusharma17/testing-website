
## Local Development

### Install dependencies
```
npm install
```

### Run local app (assigns port and opens browser)
```
npm start
```


## Deploy new version of the page

### Deploy new version of the page with local changes
```
npm run deploy -- -m "message"
```
> [!NOTE]  
> Behind the scenes, it creates a new branch called gh-pages, push the changes and deploys them to the hosted website.


### Push changes
```
git add . 
git commit -m "message"
git push origin main
```
