---
title: "Commands"
description: "Frequently used commands in Git."
layout: "guide"
weight: 2
---

###### {$page.description}

<article id="1">

## Stage changes

**Usage**
```bash
git add
```

Moves changes from the working directory to the staging area. This gives you the opportunity to prepare a snapshot before committing it to the official history.

</article>

<article id="2">

## Manage branches

**Usage**
```bash
git branch
```

This command is your general-purpose branch administration tool. It lets you create isolated development environments within a single repository.

</article>

<article id="3">

## Checkout changes

**Usage**
```bash
git checkout
```

In addition to checking out old commits and old file revisions, git checkout is also the means to navigate existing branches. Combined with the basic Git commands, it’s a way to work on a particular line of development.

</article>

<article id="4">

## Remove untracked changes

**Usage**
```bash
git clean
```

Removes untracked files from the working directory. This is the logical counterpart to git reset, which (typically) only operates on tracked files.

</article>

<article id="5">

## Copy repository

**Usage**
```bash
git clone
```

Creates a copy of an existing Git repository. Cloning is the most common way for developers to obtain a working copy of a central repository.

</article>

<article id="6">

## Commit changes

**Usage**
```bash
git commit
```

Takes the staged snapshot and commits it to the project history. Combined with git add, this defines the basic workflow for all Git users.

</article>

<article id="7">

## Update message

**Usage**
```bash
git commit --amend
```

Passing the --amend flag to git commit lets you amend the most recent commit. This is very useful when you forget to stage a file or omit important information from the commit message.

</article>

<article id="8">

## Manage configuration

**Usage**
```bash
git config
```

A convenient way to set configuration options for your Git installation. You’ll typically only need to use this immediately after installing Git on a new development machine.

</article>

<article id="9">

## Download changes

**Usage**
```bash
git fetch
```

Fetching downloads a branch from another repository, along with all of its associated commits and files. But, it doesn't try to integrate anything into your local repository. This gives you a chance to inspect changes before merging them with your project.

</article>

<article id="10">

## Initialize a repository

**Usage**
```bash
git init
```

Initializes a new Git repository. If you want to place a project under revision control, this is the first command you need to learn.

</article>

<article id="11">

## View changes

**Usage**
```bash
git log
```

Lets you explore the previous revisions of a project. It provides several formatting options for displaying committed snapshots.

</article>

<article id="12">

## Integrate changes

**Usage**
```bash
git merge
```

A powerful way to integrate changes from divergent branches. After forking the project history with git branch, git merge lets you put it back together again.

</article>

<article id="13">

## Download and integrate changes

**Usage**
```bash
git pull
```

Pulling is the automated version of git fetch. It downloads a branch from a remote repository, then immediately merges it into the current branch. This is the Git equivalent of svn update.

</article>

<article id="14">

## Send changes

**Usage**
```bash
git push
```

Pushing is the opposite of fetching (with a few caveats). It lets you move a local branch to another repository, which serves as a convenient way to publish contributions. This is like svn commit, but it sends a series of commits instead of a single changeset.

</article>

<article id="15">

## Move changes around

**Usage**
```bash
git rebase
```

Rebasing lets you move branches around, which helps you avoid unnecessary merge commits. The resulting linear history is often much easier to understand and explore.

</article>

<article id="16">

## Move changes around advanced

**Usage**
```bash
git rebase -i
```

The -i flag is used to begin an interactive rebasing session. This provides all the benefits of a normal rebase, but gives you the opportunity to add, edit, or delete commits along the way.

</article>

<article id="17">

## View Git history

**Usage**
```bash
git reflog
```

Git keeps track of updates to the tip of branches using a mechanism called reflog. This allows you to go back to changesets even though they are not referenced by any branch or tag.

</article>

<article id="18">

## Manage remote connections

**Usage**
```bash
git remote
```

A convenient tool for administering remote connections. Instead of passing the full URL to the fetch, pull, and push commands, it lets you use a more meaningful shortcut.

</article>

<article id="19">

## Undo changes

**Usage**
```bash
git reset
```

Undoes changes to files in the working directory. Resetting lets you clean up or completely remove changes that have not been pushed to a public repository.

</article>

<article id="20">

## Undo commit

**Usage**
```bash
git revert
```

Undoes a committed snapshot. When you discover a faulty commit, reverting is a safe and easy way to completely remove it from the code base.

</article>

<article id="21">

## View current state

**Usage**
```bash
git status
```

Displays the state of the working directory and the staged snapshot. You’ll want to run this in conjunction with git add and git commit to see exactly what’s being included in the next snapshot.

</article>