# Contributing

Thank you for your interest in contributing to this project.

This repository contains both open-source software and personal portfolio content. Contributions are welcome where they improve the software, accessibility, performance, maintainability or overall quality of the project.

## How to contribute

Please submit changes through a pull request.

A typical contribution should:

1. Fork the repository or create a separate branch where appropriate.
2. Make the proposed changes.
3. Run the relevant checks locally.
4. Submit a pull request explaining what changed and why.

Changes should not be pushed directly to the `main` branch.

## Before submitting

Please make sure that:

- the project builds successfully;
- relevant automated tests pass;
- appropriate manual or exploratory checks have been completed;
- existing behaviour has not been unintentionally broken;
- accessibility is considered where relevant;
- the change follows the existing structure and design language;
- unnecessary dependencies are avoided;
- the pull request is focused on a clear purpose.

For changes to the application, run:

```bash
npm run lint
npm run build
npm run test:e2e
```

When changing social-preview copy or visual treatments, regenerate and review
the committed images:

```bash
npm run generate:social-images
```

The Playwright suite builds and serves the production application
automatically. On a first-time local setup, install its managed Chromium
browser with:

```bash
npx playwright install chromium
```

See the [test strategy and manual regression guide](docs/testing.md) for test
scope, debugging commands, selector guidance, manual checks, and preview or
production verification.
