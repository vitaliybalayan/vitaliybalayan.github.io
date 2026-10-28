---
title: Urban — UrbanWay and UrbanHub
date: 2025-10-01
kind: work
project: Urban
summary: Two mobile apps for a designated driver and taxi service in Almaty — one for customers and one for drivers. I built the entire frontend as a contractor.
tags: [Mobile app, iOS, Android, Maps, Geolocation]
cover:
  type: image
  src: /media/urban-cover.jpg
  alt: UrbanWay and UrbanHub app screens
links:
  - label: UrbanWay — App Store
    href: https://apps.apple.com/us/app/urbanway/id6755356348
  - label: UrbanWay — Google Play
    href: https://play.google.com/store/apps/details?id=kz.pinfinity.urbanway
  - label: UrbanHub — App Store
    href: https://apps.apple.com/us/app/urbanhub/id6758265061
  - label: UrbanHub — Google Play
    href: https://play.google.com/store/apps/details?id=kz.pinfinity.urbanhub
---

Urban is an Almaty service for when you shouldn't get behind the wheel: after a meeting, a party or just a rough day. A driver comes to the customer and takes them home in their own car. No car? You can book a regular ride.

The project consists of two apps: **UrbanWay** for customers and **UrbanHub** for drivers. I worked on it as a contractor and was responsible for the frontend of both apps, from the first screen to publishing on the App Store and Google Play.

## UrbanWay — for customers

- **Book in a couple of taps.** Point A → B, "decide on the spot" or a scheduled ride. Saved addresses like "Home" always at hand.
- **Route and price upfront.** The route is drawn on the map, with travel time and cost shown right away. There's an hourly rate for long trips.
- **Real-time driver search.** The nearest available driver is found. After confirmation, you can see them on the map all the way to pickup and throughout the ride.
- **Chat with the driver.** A built-in chat to clarify the entrance, agree on details or warn about a delay without leaving the app.
- **Ride control.** Route monitoring and the history of all rides.
- **Profile.** Your cars, addresses, order history and support in one place.

## UrbanHub — for drivers

- **Step-by-step onboarding.** Drivers fill in their details and documents step by step and pass verification before going online.
- **Going online.** One button puts the driver online to receive nearby orders and notifications about new rides.
- **Order navigation.** Route to the customer and to the destination, with continuous location tracking.
- **Chat with the customer.** Messaging right inside the order.
- **Earnings.** Daily earnings, a breakdown of every order and a transparent system of payouts and commissions.
- **Rating and rules.** Rating, tenure, number of rides, penalties, service rules and a customer blacklist.

## What was interesting

The hardest part is everything to do with the map and time. Routes, moving driver markers, background geolocation and order statuses must change for both the customer and the driver simultaneously and without delay — all without draining the battery and while gracefully surviving poor connectivity. The second challenge was making driver onboarding clear: lots of steps and documents, but nobody should get lost in them.

## Result

Both apps are live on iOS and Android and running in Almaty: customers book rides, drivers go online and earn.

And this is just the beginning. Urban has ambitious plans: the service will keep evolving, gaining new features and growing beyond what it is today.
