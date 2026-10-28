---
title: Fusion Studio — several AI agents on one team
date: 2026-10-01
kind: work
project: Fusion Studio
summary: A local app that makes Claude Code, Codex and Antigravity work together — drafts, cross-critique, merging and review of the final document.
tags: [AI, Claude Code, Codex, TypeScript, Node.js]
---

Fusion Studio is my system for "fusing" several AIs. Instead of asking a single model, the app launches several CLI agents at once (Claude Code, Codex CLI, Antigravity CLI and any others) and runs them through a pipeline:

**drafts → cross-critique → merge → review → revisions**

Each agent writes its own version, then critiques the others; the best ideas are merged into one document, which then goes through review. The output is a spec, an architecture or an ADR where one model's weak spots are covered by the others.

## What it does

- **Live progress.** The dashboard shows in real time what each agent is doing and how the final document comes together.
- **Your subscriptions.** The CLIs run on your machine under your accounts. Signing in and checking agents is done right from the settings.
- **Cost tracking.** Per-run and monthly budgets, with failed and cancelled attempts tracked separately.
- **Secure by default.** The app only listens on localhost, and keys are stored separately with restricted permissions.
- **Demo mode** for running without any agents installed.

## Stack

TypeScript, Node.js 22, a pnpm monorepo, Vite for the UI, Playwright for end-to-end tests. Runs on Windows, macOS and Linux.
