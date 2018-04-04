---
title: "Step 4: Understanding Liferay's code"
description: "Making sense of Liferay's code."
buttonTitle: "Step 4 Complete"
parentId: "setup"
layout: "tutorial"
weight: 4
---

## {$page.title}

We are going to define what the difference is between all the versions of Liferay's code.

### Source code

Source code refers to the *uncompiled* code – if you want to use it, you have to use commands to compile it. This version of the code is constantly being updated. This is the code that anyone could download and modify. The source branches/versions are named like: 6.0.x, 6.1.x, 6.2.x, 7.0x, etc.

[See Liferay's source code.](https://github.com/liferay/liferay-portal)

### Compiled code

Compiled code is derived from the *source* code. Basically, someone had to take the source code and compile it for people to use. This code cannot be modified directly, you would need to modify the source which would have to be recompiled for use.  This is the code that is delivered to users in our downloadable bundles.

### Liferay Bundle

A Liferay bundle contains the compiled code and an application server. The bundle is what customers download and use in production environments. The bundles are named after their source versions, like: 6.0.6, 6.0.12, 6.1.0, 6.1.10, 7.0.1, etc.

[See Liferay's bundles.](https://www.liferay.com/downloads)

An example of all of this is like baking a cake. The source code would be the recipe for the cake. Modifying any source code would be like modifying the cake ingredients. The compiled code is the mixed, unbaked, cake batter. The bundle is the finished cake, ready to be eaten.

### How do you get source code?

Since Liferay is an open source software, all source code is available on [GitHub](https://github.com/liferay/liferay-portal) for download and use.

For every CE version, including master, which contains the latest features, the source code is available for anyone to check out.  However, for every DE version, source code is only available to Liferay's developers.

### Why do I need the source code?

If you find a bug in Liferay, it is good practice to find out if it is also in the latest bundle version. If it exists in the latest version of that bundle version, a fix should be applied to all versions of that bundle.

In order to submit any fix, you would need to get the latest source code for your respective branch and submit a fix in the source code. Once your fix gets merged into its respective branch, QA will build a bundle and test your fix.

**Ex.** If you found a bug in 7.0.1 GA2, you should check to see if the same bug exists in 7.0.x. If it does, then you should submit your fix against 7.0.x. Once it is committed and tested by QA, it will be backported to all the older versions of 7.0.x.