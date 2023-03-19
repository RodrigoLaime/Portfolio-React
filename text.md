## Proyeco react en vite

## npm i styled-components

## deploy githubpages
npm i gh-pages

## en vite.config
  base: '/Portfolio-React/'

## crear un archivo en la raiz
  deploy.sh

  luego de configurar ejecutar npm run build


## en package.json
"deploy": "gh-pages -d dist"









-swc


# ##################################### packacage
    /* "build": "vite build",
    "preview": "vite preview", */
# ##################################### archivo deploy.sh
#!usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigation into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git checkout -b main
git add -A
git commit -m 'deploy'

# fi you deploying to https://<USERNAME>.github.<REPO>
# git push -f git@github.com:RodrigoLaime/Portfolio-React.git main:gh-pages

cd .