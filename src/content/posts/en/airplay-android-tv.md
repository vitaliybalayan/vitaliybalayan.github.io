---
title: AirPlay Receiver for Android TV
date: 2026-03-01
kind: work
project: AirPlay Receiver
summary: An app that turns Android TV and Google TV into an AirPlay receiver — the iPhone sees the TV as an Apple TV and streams screen and sound to it, even when the app is in the background.
tags: [Android TV, AirPlay, Kotlin, C++, Jetpack Compose, Open Source]
cover:
  type: image
  src: /media/airplay-tv-cover.jpg
  alt: An iPhone mirroring its screen to an Android TV over AirPlay
links:
  - label: GitHub
    href: https://github.com/vitaliybalayan/AirPlay
---

Plenty of people have an Android TV at home and an iPhone in their pocket, and the two don't get along: out of the box, AirPlay only works with Apple TV and a handful of "smart" TVs. I built an app that closes the gap: the TV pretends to be an Apple TV, and an iPhone, iPad or Mac connects to it through the regular Screen Mirroring.

The project is open source and under active development. The main test device is a Philips 65PUD7029/71.

## How it works

- **The TV becomes an Apple TV.** The app announces itself on the local network over Bonjour (mDNS), just like a real set-top box. The iPhone finds the TV in its device list with no setup or IP addresses.
- **Screen mirroring.** Video from the iPhone arrives at the TV and is rendered by the hardware decoder. Smooth picture, minimal latency.
- **Audio.** Music and app sound are sent over RAOP, the same protocol AirPlay speakers use, and play through the TV speakers.
- **Runs in the background.** The receiver lives as a foreground service and starts automatically when the TV turns on. No need to keep the app open: pick up the iPhone, choose the TV, and it shows the picture on top of everything.
- **Remote-friendly UI.** Screens are designed for Android TV: large elements, remote navigation and a hint on how to turn on mirroring on the iPhone.

## Stack

**Android / UI**
- **Kotlin** — the app's main language.
- **Jetpack Compose** and **Compose for TV** (`androidx.tv.foundation`, `androidx.tv.material`) — UI for the remote and the big screen.
- **Media3 / ExoPlayer** with **HLS** support — video playback when the iPhone sends a link rather than its screen.
- **MediaCodec / AudioTrack** — hardware decoding of the H.264 mirroring stream and PCM audio output.
- **Foreground Service** (`specialUse`), a **BOOT_COMPLETED** receiver, **Wi-Fi MulticastLock**, drawing over other apps — what keeps the receiver alive in the background and discoverable on the network.
- minSdk 24, targetSdk 36, built with **Gradle Kotlin DSL**.

**Native part (C/C++, Android NDK)**
- **CMake + JNI** — the bridge between Kotlin and the native server.
- Native implementation of the **AirPlay** and **RAOP** (RTSP/RTP) protocols: handshake, sessions, receiving video and audio streams.
- **mDNSResponder (Bonjour)** — embedded mDNS so the TV shows up in the list of AirPlay devices.
- Protocol cryptography: **FairPlay** handshake, **Curve25519**, **Ed25519**, **AES-CTR**, SHA/HMAC — for pairing and stream decryption.
- Audio codecs: **ALAC** (Apple Lossless) and **FDK-AAC** (AAC-ELD for mirroring).
- Built for **armeabi-v7a** and **arm64-v8a**, i.e. every mainstream TV box and TV.

The native part is based on open-source protocol implementations. I combined them into a single app, adapted them for Android TV and wrote the entire Android layer around them.

**AI-assisted development.** The app was built and optimized heavily together with AI models: CodeX, Claude Opus 4.6 and Gemini 3.1 Pro.

## What's next

A known issue: YouTube over AirPlay doesn't work yet, and that's next on the list. After that — stability across TV models and a Google Play release.
