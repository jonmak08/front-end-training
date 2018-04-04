---
title: "Debugging effectively"
description: "Tips for how to debug your JavaScript effectively."
date: "August 15, 2014"
author: "Drew Brokke"
layout: "blog"
---

<article>

{$page.description}

Throughout the training, you will find yourself working with code that does not do what you want it to do, and you will wonder why. Instead of blankly staring at the code, hopefully these tips will the debugging process easier.

### Search for surrounding text

Maybe you are looking for something around an error message (e.g. "A user with that OpenID already exists.") that is appearing in a portlet. Use *Sublime Text* to search for the error message string in Liferay's *source* code. Your search results should return several ```Language_*.properties``` files. These files indicate that this text is being translated from English to other languages.

The underlying property name is a *language key* that matches this value, *a-user-with-that-open-id-already-exists*. Now search for this string within Liferay's *source* code and ignore all the results in the ```Language_*.properties``` files. You will see, in a file called ```open_id.jsp```, that this message is displayed when a *DuplicateOpenIdException* occurs.

What causes a *DuplicateOpenIdException* to be thrown?

Search for ```throw new DuplicateOpenIdException``` and you will find the answer in ```UserLocalServiceImpl.java```.

A similar technique can be used to locate the file in which a particular view of a portlet is being generated. Just look for a rare string and search for it using *Sublime Text*.

Along the lines of the last point, if you see a call to a function and think the bug you're looking for is occurring in that function, search for the function definition.

If you are looking at a function definition and know that the file with the bug in it must be using that function, search for all calls to the function.

*Sublime Text has a plugin [WhoCalled Function Finder](https://packagecontrol.io/packages/WhoCalled%20Function%20Finder) for this exact use case*.

### Print output

If you are debugging a JavaScript file and want to know the value of any variable or expression at any point in the code, use ```console.log()```. This will print the value of the expression to the browser's JavaScript console within the DevTools.

In a ```.java``` file or a Java scriptlet in a ```.jsp``` file, a ```System.out.println()``` statement will print to the *Terminal/Git Bash* in which you are running Tomcat.

Outside a Java scriptlet in a ```.jsp``` file, you can print directly to the browser by enclosing the Java expression in a block surrounded by ```<%=``` and ```%>``` tags.

### Browser's JavaScript console

Use the browser's JavaScript console to debug and test code. If you declare a JavaScript variable as a *window* variable within the Liferay's *source* code (e.g, ```window.numColors = 2;``` instead of ```var numColors = 2;```), you can access this variable by typing it in the browser's JavaScript console.

Just be sure to remove all declarations of *window* variables before submitting your code for review. If this variable has a function available to it, say ```toString()```, you can get the function definition by typing ```numColors.toString```, or you can get the result of a function call by typing ```numColors.toString()```.

More generally, you can use the console to test your own snippets of JavaScript code before putting them in Liferay's *source* code.

Again, don't be afraid to ask for help when you need to.

</article>