# Static Site Generator (Node.js + EJS)

A lightweight static site generator built with **Node.js**, using **EJS templates**, **glob**, and **promisified file handling** to generate fast, SEO-friendly static websites.

## 🚀 Features

* 🧩 EJS templating for reusable layouts
* 📁 File-based routing using `glob`
* ⚡ Fast static HTML generation
* 🔁 Async file operations using `util.promisify`
* 🏗️ Simple and minimal build system
* 📦 Easy to extend for blogs, portfolios, and landing pages

---

## 🛠️ Tech Stack

* Node.js
* EJS
* Glob
* fs-extra
* util.promisify

---

## 📂 Project Structure

```
project-root/
│
├── src/
│   ├── pages/        # EJS page templates
│   ├── layouts/      # Layout files (header, footer, etc.)
│   ├── partials/     # Reusable components
│   └── assets/       # CSS, JS, images
│
├── dist/             # Generated static site
├── build.js          # Main build script
└── package.json
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/static-site-generator.git
cd static-site-generator
npm install
```

---

## ▶️ Usage

### Build the site

```bash
npm run serve
```

This will:

* Read all EJS files using `glob`
* Render templates using EJS
* Output static HTML into the `dist/` folder

---

## 🧠 How It Works

* `glob` scans all page files inside `/src/pages`
* `promisify` converts callback-based file functions into async/await
* Each `.ejs` file is rendered into `.html`
* Output is saved in `/dist` as a fully static site

---

## 📌 Example Build Script Features

* Dynamic routing based on file structure
* Layout injection using EJS includes
* Clean async file handling with `fs-extra`

---

## 📈 Use Cases

* Personal portfolios
* Blogs
* Documentation sites
* Landing pages

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📜 License

MIT License

