<div align="center">

```
███████╗██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗██████╗ ███████╗
██╔════╝██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝██╔══██╗██╔════╝
█████╗  ██║██║        ██║   ██║██║   ██║██╔██╗ ██║█████╗  ██████╔╝███████╗
██╔══╝  ██║██║        ██║   ██║██║   ██║██║╚██╗██║██╔══╝  ██╔══██╗╚════██║
██║     ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████╗██║  ██║███████║
╚═╝     ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚══════╝
```

**A free ebook library for classics, contemporary fiction, and everything in between.**  
Browse them. Download them. Read them.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4-646CFF?style=flat-square&logo=vite&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-F5A96B?style=flat-square)

</div>

---

## ✦ What is Fictioners?

Fictioners is a browser-based ebook library. No sign-up. No login. Just a curated collection of books organized by author and genre, ready to browse and download as EPUB files.

Classics, science fiction, romance, thrillers — all in one place.

---

## ✦ Features

| | |
|---|---|
| 📚 **Browse books** | Curated collection of EPUBs across multiple genres, with 8 random picks surfaced on every visit |
| 🔍 **Search** | Find books instantly by title or author |
| ⬇️ **Download** | All books available as EPUB files — free, no account needed |
| ✍️ **Authors** | Dedicated pages per author with bio, genre, and their complete works |
| 💬 **Quotes** | A handpicked collection of famous lines from great authors |
| 📱 **Responsive** | Fully usable on desktop and mobile |

---

## ✦ Requirements

- **Node.js v18+** → [nodejs.org](https://nodejs.org/)

---

## ✦ Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/nagraj05/fictioners.git
cd fictioners

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open your browser to `http://localhost:5173`. The site loads with a short intro animation.

---

## ✦ Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

Output lands in the `dist/` folder.

---

## ✦ Project Structure

```
fictioners/
├── src/
│   ├── data/
│   │   ├── Booksdata.jsx       ← all book entries (title, author, genre, pages, cover)
│   │   ├── AuthorsData.jsx     ← author list with their books
│   │   ├── AuthorsInfo.jsx     ← extended author bios (genre, born, died, about)
│   │   └── QuotesData.jsx      ← famous quotes
│   ├── Components/             ← Navbar, Navigation, BookCard, SearchBar, Footer …
│   ├── Pages/                  ← Home, BooksPage, Authors, AuthorsPage, Quotes …
│   └── assets/                 ← book covers, author photos, icons
└── public/books/               ← EPUB files served for download
```

---

## ✦ Adding a Book

1. Drop the cover image into `src/assets/bookcovers/`.
2. Import it and add an entry to `src/data/Booksdata.jsx`:

```js
{
  id: 999,
  value: "filename-without-extension",   // must match the .epub in public/books/
  img: coverImport,
  title: "Book Title",
  author: "Author Name",
  genre: "Genre",
  pages: 320
}
```

3. Place the EPUB at `public/books/filename-without-extension.epub`.

If the author is new, also add their photo to `src/assets/authorimages/` and create entries in both `AuthorsData.jsx` and `AuthorsInfo.jsx`.

---

## ✦ Troubleshooting

**Book won't download**  
→ Make sure the EPUB exists at `public/books/<value>.epub` and that `value` in `Booksdata.jsx` matches the filename exactly (no extension).

**Page shows blank or crashes**  
→ Run `npm run lint` — a missing import or malformed data entry in one of the `src/data/` files is usually the cause.

---

## ✦ Credits

Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).  
Animations via [Lottie](https://github.com/airbnb/lottie-web) and [LottieFiles](https://lottiefiles.com). Icons from [Material UI](https://mui.com/).

---

<div align="center">

Made with ♥ and pani puri by Nagraj.

</div>
