---
title: DeffApp — a panic button
date: 2024-09-27
kind: work
project: DeffApp
summary: An emergency app — a one-tap SOS with your location sent to trusted contacts, background operation and subscriptions.
tags: [Mobile app, React Native, iOS, Android, Geolocation]
cover:
  type: image
  src: /media/deffapp-cover.jpg
  alt: DeffApp app icon
links:
  - label: App Store
    href: https://apps.apple.com/us/app/deffapp/id6741679635
---

DeffApp is a panic button on your phone. In a dangerous situation, a single tap sends an SOS with your location to people you've added as trusted contacts in advance. The app runs in the background and is available at any moment.

## Features

- **One-tap SOS.** The alert and your precise location go straight to trusted contacts.
- **Trusted contacts.** Added from the phone's address book.
- **Map.** The recipient sees where the person is and can immediately build a route to them in any navigation app.
- **Background operation.** The app stays connected even when minimized.
- **Subscriptions** via in-app purchases.

## Under the hood

- **React Native** for iOS and Android.
- **Background geolocation**: background tasks and timers so the location keeps updating and the alert goes out while the app is minimized.
- **Mapbox** for maps and **Turf** for geo calculations, e.g. fitting points on screen.
- **Push notifications**: Firebase Cloud Messaging and Notifee, critical SOS notifications on iOS and Android.
- **Contacts** from the phone book with permission requests.
- **In-app purchases** for subscriptions on the App Store and Google Play.
- **Data**: TanStack Query with an offline cache in MMKV, global state with Jotai.
- **UI**: Reanimated and Lottie for animations, bottom sheets, localization via i18next.

## Result

The app is published; over time it got a refreshed interface and subscriptions.
