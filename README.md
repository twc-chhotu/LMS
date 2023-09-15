# LMS Frontend

### setup instruction

1. clone the project

```
    git clone https://github.com/twc-chhotu/LMS.git
```

2. move into directory

```
    cd LMS
```

3. install dependencies

```
    npm i
```

4. run or up the server

```
    npm run dev
```

### Setup instructions for Tailwind CSS

1. install tailwind css dependencies

```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

2. add in tailwind.config.js file

```
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
```

3. add in index.css file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

4. server up with tailwind css

```
    npm run dev
```
