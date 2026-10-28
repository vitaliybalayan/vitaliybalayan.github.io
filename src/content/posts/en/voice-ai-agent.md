---
title: A voice AI assistant
date: 2026-09-28
kind: work
project: Voice AI
summary: A voice AI assistant for phone calls — ElevenLabs, a local trilingual speech recognizer and a custom intent classifier.
tags: [AI, ElevenLabs, Go, Python, WhatsApp, Speech recognition]
---

A voice AI assistant that talks to people on the phone: it takes inbound and makes outbound calls through the WhatsApp Business Calling API. Voice and dialogue are built on ElevenLabs, while speech recognition and intent understanding I built locally, on my own services.

## How it's built

- **Calls.** A Go backend for inbound and outbound calls via WhatsApp Business Calling: call creation, cancellation, a state machine and an event log. Both sides of the conversation are recorded to private storage.
- **Voice — ElevenLabs.** ElevenLabs Agents drive the dialogue and synthesize speech. Voice, stability and the agent are configurable, with an alternative provider on OpenAI.
- **Local transcriber.** A custom ASR service in Python with Vosk: it recognizes **Russian, Kazakh and English** in parallel with three models and picks the most confident one. For Russian there's the T-one streaming model. Audio is never written to disk, and text never ends up in logs.
- **Voice activity detection.** Silero VAD on ONNX Runtime splits the stream into phrases so the assistant knows when the person has finished speaking.
- **Classifier.** A separate embeddings-based NLU service determines what the person wants — faster and cheaper than asking a large model every time.
- **Streaming audio.** The browser sends 16 kHz PCM in 100 ms chunks over WebSocket via AudioWorklet, and Go keeps one stream to the ASR per conversation.

## Stack

Go (onion architecture), Python (Vosk, T-one, SpeechBrain, ONNX), Silero VAD, ElevenLabs Agents and Scribe, OpenAI, WhatsApp Business Calling API, PostgreSQL, MinIO, WebSocket, React/Vite for the test UI, Docker Compose.
