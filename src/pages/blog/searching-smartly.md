---
title: "Searching smartly"
description: "Tips for how to search smarter and quicker."
date: "May 27, 2014"
author: "Marc Lundgren"
layout: "blog"
---

<article>

{$page.description}

Much of the leg-work of what you'll be doing will involve a significant amount of searching - whether you are looking for a CSS class name, or a taglib attribute, or property value. Being able to search well is an invaluable asset for your experience and effectiveness while working at Liferay.

When searching for things, don't get tunnel vision; it's going to happen, but try to fight it. Try to start by looking at the whole picture, and then systematically narrow your search down. If you find you've spent a few days trying to pinpoint a certain class, or a specific JavaScript method, you probably have tunnel vision; this may not always be the case, but it's highly likely you are missing something.

If you are stuck, ask for help, whether it is Google, your coworker or even your manager. A lot of people have found what you're currently looking for so don't be afraid to ask for help.

*Choose good keywords or phrases*.

Searching the entire Liferay *source* code with a keyword that is too broad or common will return you hundreds of results. Use keywords that are likely to be unique for the situation you are looking for.

### Windows File Explorer

Windows File Explorer is great if you need to track down a file or a folder, but it can be incredibly misleading when trying to find keywords, especially ones that are parts of long strings of text.

Use *Sublime Text* for searching for anything that isn't obvious like a file or a folder.

### Sublime Text

```Ctrl + Shift + F``` is your friend when it comes to searching. This has been mentioned before, but seriously, you will find yourself using it a lot. If you know the type of files you are looking for, you can refine your search to just ```*.css```, or ```*.js```, or ```*.java```, or ```*.jsp``` files.

It may also be helpful to learn how to write regular expressions. Sublime Text uses the Perl Compatible Regular Expressions (PCRE) engine from the Boost library to power regular expressions in search panels. [Read more about regarding Sublime Text's regular expression](http://docs.sublimetext.info/en/latest/search_and_replace/search_and_replace_overview.html).

</article>