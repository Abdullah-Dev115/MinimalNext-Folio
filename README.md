# Minimal Modern Portfolio

A minimal modern, responsive open source portfolio website built with Next.js, TailwindCSS, and Sanity CMS.
![](https://i.postimg.cc/hPq17Qfz/Cover.png)

## 🚀 Features

- 📱 Responsive design
- 🇸🇦 Optimized for Arabic language
- 📝 Content management with [Sanity](https://www.sanity.io/studio 'Sanity')
- 🌍 Internationalization support (Arabic and English)
- 🎨 Minimal & Modern UI

here is a my portfolio version of the app https://iAbdullah.dev

## 🛠️ Technologies Used

- Next.js
- React
- TailwindCSS
- Sanity CMS
- Next-intl

## 📦 Installation

1. Clone the project:

```
git clone https://github.com/Abdullah-Dev115/MinimalNext-Folio.git
```

2. Copy the existing environment template file:

```bash
cp .env.example .env
```

3. Install dependencies:

```bash
npm install
```

## 🔧 Sanity Setup

Sanity in this project is used as content managment system (CMS).

to setup Sanity:

1. Navigate to [Sanity](https://www.sanity.io/get-started?ref=homepage 'Sanity') and create new account, if you don't have one. Then create new sanity project.
   ![](https://i.postimg.cc/pXtxZ3kG/1.jpg)

2. Copy your Sanity project ID, to `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env` file.
   ![](https://i.postimg.cc/bvn33Vmg/2.png)
   ![](https://i.postimg.cc/C1VJtCtg/3.png)

3. Under API tab, Add new Editor API Token.
   ![](https://i.postimg.cc/15HtN9Pc/4.png)
   ![](https://i.postimg.cc/4xx36rxC/5.png)
   Copy the API Token that will appear, and paste it on `SANITY_WRITE_TOKEN` in `.env` file.
   ![](https://i.postimg.cc/02QgcxDC/6.jpg)
   ![](https://i.postimg.cc/c45pzjcG/7.png)

4. Under API tab, Add your Next.js local server origin "http://localhost:3000" as new CORS origin.
   ![](https://i.postimg.cc/dQSvMLqf/8.png)

## 📤 Contact form submission

You can use [Fromspree](https://formspree.io/ 'Fromspree') or any other service to `POST` contact message, then simply, add form endpoint to `CONTACT_FORM_POST_ENDPOINT` in `.env` file.

![](https://i.postimg.cc/k48dmyfX/13.png)

## Getting started locally

Run development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## 📝 Start writing posts and projects!

Open http://localhost:3000/studio , login with your Sanity account, then, start writing about your projects or blog posts!

![](https://i.postimg.cc/C1581z92/8-1.png)
![](https://i.postimg.cc/3RqvD3Tx/9.jpg)
![](https://i.postimg.cc/C5ffG9hH/10.jpg)
![](https://i.postimg.cc/dtyx31YD/11.jpg)
![](https://i.postimg.cc/x1VFz2f5/12.jpg)

## Customization

### Changing Content

This portfolio uses internationalization with English and Arabic support. To customize the content:

1. Locate the language files:

   - English: `/messages/en.json`
   - Arabic: `/messages/ar.json`

2. Edit these files to insert your personal information and any other information:

#### Some key sections to modify:

- **Personal Info**: Change name, position, and location

`/messages/en.json`

```json
"personalInfo": {
  "name": "John Doe",
  "position": "Software Engineer",
  "location": "New York, USA"
}
```

`/messages/ar.json`

```json
"personalInfo": {
  "name": "جون دو",
  "position": "مهندس برمجيات",
  "location": "نيويورك, الولايات المتحدة"
}
```

- **Projects**: Update project descriptions and details
- **Blog**: Customize blog content and descriptions
- **Footer**: Update copyright information

> **Note**: Make sure to update both language files to maintain consistency across languages.

## 🌟 Show Your Support

If you find project helpful, please consider giving a star on GitHub! It helps continue improving the project.

## Acknowledgments

- Design inspiration from Once-UI Portfolio

## 📝 License

MIT License - feel free to use this project for your own portfolio!
