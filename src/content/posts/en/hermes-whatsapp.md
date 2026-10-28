---
title: An AI sales manager on WhatsApp
date: 2026-10-05
kind: work
project: Hermes
summary: An AI agent on WhatsApp Business that answers customers on its own, recommends products from the live catalog and places real orders — powered by ChatGPT models.
tags: [AI, WhatsApp, ChatGPT, Docker]
---

An AI agent that works as a salesperson on the WhatsApp Business account of the Fraise store. Customers write to it as they would to a regular manager, and the agent replies, helps them choose, quotes current prices and places the order — around the clock, with no queue.

## How it works

- **Live catalog.** The agent doesn't rely on a stale export: it reads products, prices, stock, pickup points, delivery and payment terms from the store's API at the moment of the question. Responses are cached for a minute to avoid loading the storefront.
- **Real orders.** The agent builds a cart, validates it, clarifies delivery or pickup (location, day and time according to opening hours) and creates the order in the store's system. Required fields are validated in code, not on the model's word.
- **Sales behavior.** Dedicated sales rules: understand the need, offer 1–3 suitable products, name the real price. No made-up specs, discounts or products.
- **Voice messages.** Transcribed via OpenAI with automatic language detection, and the agent replies in the customer's language.
- **Handoff to a manager.** If the customer asks for a human or the question can't be resolved from store data (order status, wholesale, returns, complaints), a manager gets notified. They reply in the same chat from WhatsApp Business, and the agent recognizes that a human has stepped in and takes their messages into account.
- **New conversation alerts**: the manager sees who wrote for the first time and what about.
- **History.** All conversations are stored so dialogues can be reviewed and the agent improved.
- **Sessions.** After a long pause or a rules change, the dialogue is gracefully restarted so new rules apply without cutting off a live conversation.

## Stack

The Hermes agent on ChatGPT models (via Codex), the OpenAI API for voice transcription, WhatsApp Business, the agent's own tools for the catalog, orders and manager handoff, SQLite for chat history, Docker and Docker Compose.
