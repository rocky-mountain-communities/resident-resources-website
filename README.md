# RMC Resident Resource Center

This Github repository hosts the code for the [Rocky Mountain Communities](https://rockymountaincommunities.org/) Resident Resource Center. You can view the site by visiting [rmcresources.com](https://rmcresources.com).

## Overview

The Resident Resource Center is an online resource for residents living in one of RMC's communities. The site is built using the [NextJS](https://nextjs.org/) web development framework and is hosted on [Github pages](https://pages.github.com/).

## Folder Structure

```
.
├── README.md
├── app
├── content
│   ├── contacts
│   │   └── resident-services.json
│   └── schedules
│       ├── arroyo-village.json
│       ├── example-schedule.json
│       ├── garden-court.json
│       └── mountain-terrace.json
├── public
│   ├── ArroyoVillageLogo.svg
│   ├── RMCLogo.svg
│   ├── RMCLogoWhite.png
│   ├── RMCPattern.svg
│   ├── images
│   │   ├── arroyo-village.png
│   │   ├── garden-court.png
│   │   └── mountain-terrace.png
│   └── locales
│       ├── en.json
│       └── es.json
├── script
├── tailwind.config.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
└── tsconfig.json
```

## README

The `README` is the main file for this repository and is what you see when you land on the Github page https://github.com/rockymountaincommunities.

## app

The `app` folder contains the application code. Software developers supporting the project will spend most of their time working in this folder.

## content

The `content` folder contains information that does not require translations like schedule timetables or contact information.

## public

The `public` folder contains assets that are served up by the website like images and translations. The translation files are the primary place community members will update content on the site. This folder has two primary subfolders, `images` and `locales`.

## script

The `script` folder contains programs that software engineers use in development.

## Configuration files

There are several configuration files in the main project folder. These files are used by softwar engineers and Github pages to build and deploy the site.

- tailwind.config.ts
- next.config.mjs
- package-lock.json
- package.json
- postcss.config.js
- tsconfig.json

## Terminology

Below we have common terminology used is software development and important for understanding how this website works.

- **git**: A distributed version control system that tracks changes in source code during software development, enabling collaboration and version management.
- **GitHub**: A web-based platform that uses Git for version control, offering hosting for software development, collaboration tools, and project management.
- **README**: A text file commonly included in software projects, providing an overview of the project, installation instructions, usage guidelines, and other essential information.
- **Programming Language**: A formal language comprising a set of instructions that produce various kinds of output, used by developers to write software and applications. Examples include JavaScript, Python, and C++.
- **Markup Language**: A system for annotating a document in a way that is syntactically distinguishable from the text, used to define the structure, formatting, and presentation of information
- **Markdown**: A lightweight markup language with plain text formatting syntax, used to create formatted text that can be easily converted to HTML or other formats.
- **HTML (HyperText Markup Language)**: The standard markup language used for creating web pages, defining the structure and content of a webpage.
- **CSS (Cascading Style Sheets)**: A style sheet language used for describing the presentation (layout, colors, fonts) of a document written in HTML or XML.
- **JavaScript**: A high-level, dynamic programming language commonly used to create interactive effects and dynamic content on websites.
- **GitHub Pages**: A feature of GitHub that allows you to host static websites directly from a GitHub repository, often used for personal or project documentation websites.
- **JSON (JavaScript Object Notation)**: A lightweight data-interchange format that's easy for humans to read and write and easy for machines to parse and generate, often used in web applications.
- **Pull Request**: A feature in GitHub that allows developers to propose changes to a codebase, enabling others to review, discuss, and merge those changes into the main branch.
- **GitHub Issue**: A tool within GitHub for tracking bugs, tasks, feature requests, or any other work related to a project, allowing team members to discuss and manage progress.

## TODO
