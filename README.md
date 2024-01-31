
## Local Development

### Install dependencies
```
npm install
```

### Run local app (assigns port and opens browser)
```
npm start
```

## Deploy

### Push changes to repo
```
git add . 
git commit -m "message"
git push origin main
```

### Deploy changes to website
```
npm run deploy -- -m "message"
```
> [!NOTE]  
> Behind the scenes, it creates a new branch called gh-pages, pushes the changes there and deploys them to the hosted website.


