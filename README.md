# Webpack-simple-starter

> Webpack 4 with SCSS, PostCSS(PurgeCSS), Babel & ESLint(Airbnb-base), Tailwindcss.

## Installation
```bash
# Git Clone this repo, where 'my-project' is the name of your project
git clone https://github.com/Artanisky/webpack-simple-starter.git my-project

#cd into the repo's diectory
cd my-project

#install NPM modules
npm install
```
## NPM commands
```bash
#start development server
npm run dev

#build for production
npm run build

#ESLint
npm run lint
npm run lint:fix
```

## Folder Structure
```.
├─ build                  # Webpack configurations
├─ dist                   # Compiled project files
└─ src                    # Source files
   └─ assets              # Assets folder
      ├─ images           # Images (alias ~images)
      ├─ scripts          # Javascript files
      └─ styles           # Style files (alias ~styles)
```
## License
Webpack-simple-starter is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
