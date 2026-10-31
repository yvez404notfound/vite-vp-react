# React Vite Template

Use this template to kickstart your Vite React project. It uses Vite+ by default that offers lots of tools that your project needs without configuring it.

**Toolchain used: Vite+**

What Vite+ offers out of the box:

- Bundler: Vite
- Package Manager: pnpm
- Linter: OXC Lint
- Formatter: OXC Formatter.
- Github Hooks

## What I added

### CSS normalization

I used Modern Normalize and added a bit of css to make the stylings of the CSS across browsers as consistent as possible.

### Removed Vite scaffold boilerplate

When you run create react vite script, it does create a default landing page by default. I've removed this on the template so you can start the building.

### CI Setup

Configurations for basic CI checks are already in this template repository, the CI uses github actions and does the following:

- Checkout Repo
- Setup Vite+
- Audit Dependencies
- Lint
- Format
- Test (this is commented as template does not have existing tests)
- Build

### Git Hook for Pre-Commit

Git hooks are scripts you can run before a commit. It run checks before git commits your changes and will prevent you from doing it if the checks failed.

### Formatter rules

I've added formatter rules that makes the code more readable, they can be commented out, removed, or changed anytime.

### Zod Package

I've decided to add a zod package by default. It is a library that used to sanitize inputs your app take. I recommend to start using this library to protect your app from attacks like SQL Injection, cross-site scripting, etc.

## Setup

**(1) Install Vite+ on your machine**

```bash
# for linux
curl -fsSL https://vite.plus | bash

# for windows
irm https://vite.plus/ps1 | iex
```

**(2) Use this repo as a template to create your repo**
<br/>
On the repository page click the _"Use this template"_ button (placed beside the star button). The button would redirect you to the create repo page, complete the necessary details.

**(3) Clone your created repo on your machine**

```bash
git clone <your-repo-ssh>
```

**(4) Do a clean install for Vite Plus and enable Vite Plus hooks**

```bash
vp install
vp hooks enable
```
