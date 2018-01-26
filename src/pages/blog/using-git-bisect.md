---
title: "Using Git bisect"
description: "How to use git bisect."
date: "August 15, 2014"
author: "Drew Brokke"
layout: "blog"
---

<article>

{$page.description}

```git bisect``` is used to find the problem commit for regression bugs; bugs that were once fixed but have been re-broken.

When a problem is discovered, it is not always clear what modification caused the regression. Sometimes it is easy to figure out, but in some cases, the only way to find out is by going back and testing each commit in the history of the file(s) to find out when the problem was introduced.

Checking each commit individually can take a significant amount of time, that is why we use ```git bisect``` which will help automate the process to find the problem commit.

```git bisect``` uses binary search to look at all of the commits between good and bad commits, picks the middle one, and switches the current *HEAD* to that commit. It repeats the process until the problem commit is found.

To start ```git bisect```, you need to specify at least one good and bad commits. So we begin by finding a commit where things were working and another commit where things are broken.

*You can test whether a commit works or not by switching to that commit with ```git checkout <commit hash>``` and rebuilding the source code*.

1. Start ```git bisect``` by running the following command in your *Terminal/Git Bash*.
    ```shell
    git bisect start
    ```
2. Specify good working commit by running the following command in your *Terminal/Git Bash*.
    ```shell
    git bisect good <commit hash>
    ```
3. Specify bad commit by running the following command in your *Terminal/Git Bash*.
    ```shell
    git bisect bad <commit hash>
    ```
4. Git bisect switches the current *HEAD* to the middle commit between the specified good and bad commits. You then mark the current commit as either good or bad by running the following command in your *Terminal/Git Bash*.
    ```shell
    git bisect good # good commit
    git bisect bad # bad commit
    ```
5. Continues the process until you reach the final commit.
6. End your ```git bisect``` session by running the following command in your *Terminal/Git Bash*.
    ```shell
    git bisect reset
    ```

</article>