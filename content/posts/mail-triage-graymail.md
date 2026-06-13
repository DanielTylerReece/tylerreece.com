---
title: Self-hosting M365 gray-mail filtering with Mail-Triage
date: 2026-04-02
readingTime: 5 min read
tags: [Python, Microsoft 365, self-hosted]
excerpt: "Newsletters, receipts, notifications — the gray mail that isn't spam but isn't important either. Here's the small self-hosted service I built to keep it out of the way."
---

Gray mail is the stuff that technically isn't spam but absolutely isn't worth your attention either: receipts, shipping updates, the fourth newsletter you forgot you subscribed to. Microsoft 365's built-in tools never quite drew the line where I wanted it.

## One config file, many mailboxes

Mail-Triage runs as a self-hosted service and reads a single plain-text config. Each mailbox gets its rules, and every action lands in an audit log so I can see exactly what moved and why.

```yaml
mailboxes:
  - user: tyler@example.com
    rules:
      - match: "from:newsletters"
        action: archive
      - match: "subject:receipt"
        action: label: Receipts
```

It's deliberately boring. It does one thing, it tells you what it did, and it leaves the data on hardware I control.
