---
title: "Keyboard Shortcuts: DevTools"
description: "Keyboard shortcuts to save time and extra clicks."
date: "August 22, 2013"
author: "Adam Parower"
layout: "blog"
---

<article>

{$page.description}

The best way to learn keyboard shortcuts is to use them. There are plenty of lists and cheat sheets available online to help you learn them; therefore, the shortcuts listed here are merely some of the ones we found to be the most useful and/or obscure.

**Tip:** Force yourself to use keyboard shortcuts. The faster you become at navigating around your computer, the more thought you will be able to devote to creating and fixing things.

*Programmers love to use keyboard shortcuts, so if you ever catch yourself thinking "I wish there was a faster way to do this...", there probably is.*

## General Tips

Liberate yourself from the right click when it comes to accomplishing simple tasks; tasks like cutting, copying, pasting, and many other things. Do not waste your time using the right click if you do not need to!

### Chrome DevTools

Common shortcuts for Chrome DevTools. If you find yourself using Chrome to inspect and debug a page, use the following shortcuts to help.

#### Opening DevTools

| Description | Windows | OS X |
|--- | --- | --- |
| Open whatever panel you used last | F12 (Or Control + Shift + I) | Command + Option + I |
| Open the Console panel | Control + Shift + J | Command + Option + J |
| Open the Elements panel | Control + Shift + C | Command + Option + C |

#### Global keyboard shorcuts

The following keyboard shortcuts are available in most, if not all, DevTools panels.

| Description | Windows | OS X |
|--- | --- | --- |
| Show Settings | F1 (Or ?) | Function + F1 (Or ?) |
| Focus the next panel | Control + ] | Command + ] |
| Focus the previous panel | Control + [ | Command + [ |
| Switch back to whatever docking position you last used. If DevTools has been in its default position for the entire session, then this shortcut undocks DevTools into a separate window | Control + Shift + D | Command + Shift + D |
| Toggle Device Mode | Control + Shift + M | Command + Shift + M |
| Toggle Inspect Element Mode | Control + Shift + C | Command + Shift + C |
| Open the Command Menu | Control + Shift + P | Command + Shift + P |
| Toggle the Drawer | Escape | Escape |
| Normal reload | F5 (Or Control + R) | Command + R |
| Hard reload | Control + F5 (Or Control + Shift + R) | Command + Shift + R |
| Search for text within the current panel. Not supported in the Audits, Application, and Security panels | Control + F | Command + F |
| Opens the Search tab in the Drawer, which lets you search for text across all loaded resources | Control + Shift + F | Command + Option + F |
| Open a file in the Sources panel | Control + O (Or Control + P) | Command + O (Or Command + P) |
| Zoom in | Control + Shift + + | Command + Shift + + |
| Zoom out | Control + - | Command + - |
| Restore default zoom level | Control + 0 | Command + 0 |
| Run snippet | Press ```Control + O``` to open the Command Menu, type ```!``` followed by the name of the script, then press ```Enter``` | Press ```Command + O``` to open the Command Menu, type ```!``` followed by the name of the script, then press ```Enter``` |

#### Elements panel

| Description | Windows | OS X |
|--- | --- | --- |
| Undo change | Control + Z | Command + Z |
| Redo change | Control + Y | Command + Shift + Z |
| Select the element above / below the currently-selected element | Up Arrow / Down Arrow | Up Arrow / Down Arrow |
| Expand the currently-selected node. If the node is already expanded, this shortcut selects the element below it | Right Arrow | Right Arrow |
| Collapse the currently-selected node. If the node is already collapsed, this shortcut selects the element above it | Left Arrow | Left Arrow |
| Expand or collapse the currently-selected node and all of its children | Hold ```Control + Alt``` then click the arrow icon next to the element's name | Hold ```Option``` then click the arrow icon next to the element's name |
| Toggle Edit Attributes mode on the currently-selected element | Enter | Enter |
| Select the next / previous attribute after entering Edit Attributes mode | Tab / Shift + Tab | Tab / Shift + Tab |
| Hide the currently-selected element | H | H |
| Toggle Edit as HTML mode on the currently-selected element | F2 | Function + F2 |

#### Console panel

| Description | Windows | OS X |
|--- | --- | --- |
| Accept autocomplete suggestion | Right Arrow (Or Tab) | Right Arrow (Or Tab) |
| Reject autocomplete suggestion | Escape | Escape |
| Get previous statement | Up Arrow | Up Arrow |
| Get next statement | Down Arrow | Down Arrow |
| Focus the Console | Control + \` | Control + \`|
| Clear the Console | Control + L | Command + K (Or Option + L) |
| Force a multi-line entry. Note that DevTools should detect multi-line scenarios by default, so this shortcut is now usually unnecessary | Shift + Enter | Command + Return |
| Execute command | Enter | Return |
| Expand all sub-properties of an object that's been logged to the Console | Hold ```Alt``` then click ```Expand``` | Hold ```Alt``` then click ```Expand``` |


This has been adapted from [https://developers.google.com/web/tools/chrome-devtools/shortcuts](https://developers.google.com/web/tools/chrome-devtools/shortcuts).

</article>