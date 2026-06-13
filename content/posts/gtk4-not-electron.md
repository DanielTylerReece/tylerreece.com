---
title: Why I build GTK4 apps instead of Electron
date: 2026-05-18
readingTime: 6 min read
tags: [GTK4, libadwaita, opinion]
excerpt: "Every desktop app being a browser in a trench coat is not a law of nature. Here's why I keep choosing the native toolkit — and what you get for the trouble."
---

There's a running joke that the modern desktop app is just a browser in a trench coat. It's funny because it's mostly true — and I got tired of it. Every chat client, every music player, every little utility shipping a hundred-megabyte runtime to draw a list and a text field.

## What native actually buys you

When I write an app against GTK4 and libadwaita, it starts instantly, it follows the system theme and accent color for free, and it speaks the platform's language: portals, notifications, the dark-style preference, keyboard navigation. Users don't think about any of that — it just feels right.

It also keeps its configuration where I can read it. Plain text. No opaque blob in some app-data directory.

```go
app := adw.NewApplication("com.tylerreece.Chirp", gio.ApplicationFlagsNone)
app.ConnectActivate(func() {
    win := adw.NewApplicationWindow(&app.Application)
    win.SetContent(buildChatView())
    win.SetDefaultSize(420, 720)
    win.Present()
})
```

## The trade I'm happy to make

Native is more work up front. You write more code, you handle more edge cases, you can't lean on a million npm packages. But the result is software that respects the machine it runs on — and that's the whole point.
