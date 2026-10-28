---
title: TETIS TRAVEL — jeep tours across Mangystau
date: 2026-10-15
kind: work
project: TETIS TRAVEL
summary: A website for a tour company from Aktau, built entirely from scratch — find a tour in 30 seconds, handy filters by places and budget, three languages.
tags: [Astro, React, GitHub, CI/CD, Website]
cover:
  type: image
  src: /media/tetis-cover.jpg
  alt: The tetis-travel.kz website on a laptop and a phone
links:
  - label: tetis-travel.kz
    href: https://tetis-travel.kz/
---

TETIS TRAVEL takes guests around Mangystau in prepared off-road vehicles: Bozzhyra, canyons, underground mosques, the Valley of Balls and the empty beaches of the Caspian. They pick you up at your door in Aktau, serve lunch in the steppe and bring you back in the evening.

I built the site entirely from scratch, from structure and interface to deployment.

## The challenge

The company has more than twenty day trips, and many of them overlap in places. A guest needs to quickly understand which tour suits them, how much it costs and how many cars the company will need — not scroll through a long list.

## What I did

- **Find a tour in 30 seconds.** Three questions: how many of you, how many places you want to see and what exactly interests you (Bozzhyra, canyons, mosques, the sea, dunes, etc.). The site immediately shows matching routes and calculates how many cars are needed.
- **Handy filters and sorting.** Tours are filtered by places and sorted by order or price. Each place's page shows how many tours go there.
- **Route cards.** Each card lists the route's stops, mileage, whether lunch is included and the price per car. The full route opens in one click.
- **Three languages.** Russian, English and Kazakh.
- **Contact without extra forms.** A question or a booking goes to WhatsApp in one tap.
- **SEO.** Dedicated pages for tours and places, so the site is found for queries like "Bozzhyra jeep tour from Aktau".

## Technology

The site is built with **Astro**: pages are served as static files and open instantly even on a weak mobile connection. The interactive parts — the tour finder and filters — are written in **React** and load only where they're needed. The code lives on **GitHub**, and **CI/CD** builds and deploys the site after every change.

## Result

A fast, clear site where a traveler finds their route in half a minute and messages the company right away. Next up: multi-day tours — 15 routes of 2–8 days with yurts and tents.
