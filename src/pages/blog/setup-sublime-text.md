---
title: "Setting up Sublime Text"
description: "Simple configurations for Sublime Text."
date: "March 10, 2014"
author: "Micah Moegelin"
layout: "blog"
---

<article>

{$page.description}

Sublime Text has a ton of features that are indispensable for development. If you use this as your text editor of choice, here are some settings and plugins that will help you get started.

### User settings

Customize your Sublime Text settings for a better development experience.

Below is an example ```Preferences.sublime-settings``` file.

```shell
{
    "bold_folder_labels": true, // makes the sidebar more readable at a glance
    "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",
    "default_line_ending": "unix", // set the default line ending to Unix-style (Liferay only allows you to commit files with this type of ending)
    "draw_white_space": "all", // show a dot every time there is a white-space character
    "font_face": "Ubuntu Mono", // requires some work, but changes the font to something nicer
    "font_size": 11,
    "ignored_packages": [ "Vintage" ],
    "rulers": [ 80 ], // show a vertical bar at a distance of 80 characters from the left margin
    "tab_size": 4, // set tabs to be the same width as 4 spaces
    "translate_tabs_to_spaces": true, // use spaces to indent rather than tab characters
    "trim_trailing_white_space_on_save": true, // auto-delete trailing white space every time you save
    "word_wrap": true
}
```

Most of these settings are personal preference, but some of these will be helpful during your development.

* **default_line_ending**: Set your line endings to be *unix*
* **draw_white_space**: Display all white-space characters throughout a file.
* **rulers**: Set a vertical bar at 80 characters. When editing Liferay's Java files, 80 characters are the maximum number of characters per line.
* **tab_size**: Set a default tab size to keep code consistent throughout the file. *The typical tab size is 4 spaces, although there are occasional exceptions*.
* **trim_trailing_white_space_on_save**: Remove extra line breaks and white-space upon saving of a file.

For a complete list of settings, go to *Preferences*, click on *Settings*, and then click on *Default*. You can override of these settings; just copy it into your user preferences file and change the value.

### Package Control

Package Control makes it easy to download and install useful Sublime Text plugins. Exploration here is very valuable because there are a lot of things that you can find to make your life easier or just customize Sublime Text to your liking.

More information about [installing](https://packagecontrol.io/installation) and [using](https://packagecontrol.io/docs/usage) package control can be found at [https://packagecontrol.io/](https://packagecontrol.io/).

* **[Alignment](https://packagecontrol.io/packages/Alignment)**: Easy alignment of multiple selections and multi-line selections.
* **[BracketHighlighter](https://packagecontrol.io/packages/BracketHighlighter)**: Bracket and tag highlighter for Sublime Text http://facelessuser.github.io/BracketHighlighter/
* **[GitHubinator](https://packagecontrol.io/packages/GitHubinator)**: Sublime Text plugin that shows selected text on remote GitHub or Bitbucket repo.
* **[GitGutter](https://packagecontrol.io/packages/GitGutter)**: A Sublime Text 2/3 plugin to see git diff in gutter

</article>