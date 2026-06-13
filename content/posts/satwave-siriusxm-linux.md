---
title: Getting SiriusXM running on Linux with Satwave
date: 2026-02-20
readingTime: 7 min read
tags: [C, GStreamer, GTK4]
excerpt: "There was no good way to listen to satellite radio on a Linux desktop. So I wrote one in C, with a GStreamer pipeline and a little retro LCD display."
---

I wanted SiriusXM on my Linux desktop and there simply wasn't a decent native option. So Satwave happened: a GTK4 app in C that authenticates, lists the channel lineup, and streams live audio through GStreamer.

## The pipeline

GStreamer does the heavy lifting. The app builds a playbin, points it at the resolved stream URL, and surfaces now-playing metadata onto a retro LCD-style widget for that satellite-receiver feel.

```c
GstElement *play = gst_element_factory_make("playbin3", "play");
g_object_set(play, "uri", stream_uri, NULL);
gst_element_set_state(play, GST_STATE_PLAYING);
```

You'll need a paid SiriusXM subscription — Satwave is a client, not a way around the paywall. But once you're signed in, it's just a clean native player.
