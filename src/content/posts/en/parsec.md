---
title: An on-premises employee access tracking system
date: 2025-04-01
kind: work
project: Parsec
summary: A local web system for tracking employee entries on top of the Parsec access control system — entry and exit reports, Excel export and offline operation.
tags: [Node.js, React, Docker, Access control]
---

An internal system for tracking employee access. It connects to the Parsec access control system, pulls entry and exit events and turns them into clear reports: who arrived and left when, and how long they were on site.

## What I did

- **Access control integration.** An Express backend calls Parsec over its SOAP API and fetches employees and access events.
- **Reports.** A React and Vite web UI with filtering by employee and date.
- **Excel export** with formatting, ready to send to management or accounting.
- **Works without internet.** The system is deployed locally in Docker behind nginx. For sites without a network there's an offline bundle: unpack the archive, run the script, and everything works.
- **Reliability.** Caching of access control requests and logging with file rotation.

Thanks to [NODA Lab](https://noda-lab.ru/) for the opportunity to work on this project.
