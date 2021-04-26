---
layout: blog
author: babichjacob
created: 2020-08-23T00:00:00
title: "I hate your theme switch"
subtitle: "Just copy my system theme and be done with it."
---

Prologue.

# How did we get here?
This is where I'd write the introductory knowledge.

## Why you think your theme switch is a good idea
Sure, you're supporting multiple themes on your site, which is really nice for 

## The problems with this approach
It's another UI element to design.

Your site will never match my theme without writing custom JavaScript to copy it.
* Your site won't be themed without JavaScript enabled.
* Your users have to download that extra code for a feature that could be supported without it --- if you're willing to believe that manually switching themes on just one site is probably unnecessary *on your site*.
* (Extreme nitpick) your site's theme won't transition smoothly with the rest of the system on macOS. **Imagine I put a video here demonstrating**

# My preferred solutions
Reminder: This is all my opinion, and other users of your site may disagree.

## Option 1: No theme switch
Always use the system theme and be done with it.

## Option 2: Not a theme switch, but a theme option menu
Have 3 mutually exclusive buttons: use system theme, always use light theme, and always use dark theme.

## Implementation
Always do the theming in the CSS. Don't store theme information in JavaScript beyond the button interactivity.
