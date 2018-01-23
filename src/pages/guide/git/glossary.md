---
title: "Glossary"
description: "Define the terminology used in Git."
layout: "guide"
weight: 1
---

###### {$page.description}

<article id="1">

## Branch

A branch represents an independent line of development. Branches serve as an abstraction for the edit/stage/commit process discussed in Git Basics, the first module of this series. You can think of them as a way to request a brand new working directory, staging area, and project history. New commits are recorded in the history for the current branch, which results in a fork in the history of the project.

</article>

<article id="2">

## Centralized Workflow

If your developers are already comfortable with Subversion, the Centralized Workflow lets you experience the benefits of Git without having to adapt to an entirely new process. It also serves as a friendly transition into more Git-oriented workflows.

</article>

<article id="3">

## Feature Branch Workflow

The Feature Branch Workflow builds on the Centralized Workflow by encapsulating new features into dedicated branches. This enables the use of pull requests as a means to discuss changes before they’re integrated into the official project.

</article>

<article id="4">

## Forking

Instead of using a single server-side repository to act as the “central” codebase, forking gives every developer a server-side repository. This means that each contributor has not one, but two Git repositories: a private local one and a public server-side one.

</article>

<article id="5">

## HEAD

Git’s way of referring to the current snapshot. Internally, the git checkout command simply updates the HEAD to point to either the specified branch or commit. When it points to a branch, Git doesn't complain, but when you check out a commit, it switches into a “detached HEAD” state.

</article>

<article id="6">

## Hook

A script that runs automatically every time a particular event occurs in a Git repository. Hooks let you customize Git’s internal behavior and trigger customizable actions at key points in the development life cycle.

</article>

<article id="7">

## Master

The default development branch. Whenever you create a git repository, a branch named "master" is created, and becomes the active branch.

</article>

<article id="8">

## Pull Request

Pull requests are a feature that makes it easier for developers to collaborate using Bitbucket. They provide a user-friendly web interface for discussing proposed changes before integrating them into the official project.

</article>

<article id="9">

## Repository

A collection of commits, and branches and tags to identify commits.

</article>

<article id="10">

## Tag

A reference typically used to mark a particular point in the commit chain. In contrast to a head, a tag is not updated by the commit command.

</article>

<article id="11">

## Version Control

A system that records changes to a file or set of files over time so that you can recall specific versions later.

</article>

<article id="12">

## Working Tree

The tree of actual checked out files, normally containing the contents of the HEAD commit's tree and any local changes you've made but haven't yet committed.

</article>