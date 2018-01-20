---
title: "Step 5: Understanding Git"
description: "Understanding how Liferay and Git work together."
buttonTitle: "Step 5 Complete"
parentId: "machine"
layout: "tutorial"
weight: 5
---

## {$page.title}

We are going to learn how Liferay uses Git for it's *source* code. Since we already know how to use Git, we will focus on its usage within Liferay.

### Branches vs Trunk

<figure>
    <img src="/images/tree.png" alt="Git Tree">
</figure>

* *Trunk* is the latest source code that is currently available. There are many branches of Liferay, so when you start working, you need to be aware of which branch you are working on and what branch you fix should be put in (6.1.x, 6.2.x, 7.0.x, master, etc).

* *Branches* are like the limbs of trunk – each branch includes some improvement over the previous branch(es), but once branched, there will not be any new improvements or functionality added. (New changes would remain in trunk until the next branch spawns). When a new branch is created, it will be similar to code in *trunk*, until trunk has new improvements and updates added to it.

### Git's repositories

With Git, you have to understand three repositories:

**local repository**
* The local repository is the source code that is stored on your computer. This is where you will be making all your commits to the source code before sending them to others to review.
* When you have made a commit that you want to submit for review, you will push it from your local repository to your remote *origin* repository.
* Make sure to keep your local repository up to date with the remote *upstream* repository *before* making any changes.

**remote origin repository**
* The remote origin repository is the copy of the source code stored in your personal GitHub account. This repository should be identical to your local repository when you are sending code for review.
* Any code you submit for review will be sent from your *local* repository into your remote *origin* repository.

**remote upstream repository**
* The remote upstream repository is the copy of the source code where all final changes and updates are stored.  This is typically in Liferay's GitHub account/cloud.
* This only contains source code that has been reviewed, approved, and tested for everyone to begin using.
* Only certain people with approved access are allowed to push files into the remote upstream repository. Even though you will be working with source code, you will never actually be pushing directly to this repository; your code will go through rigorous code reviews before finally making it here.

### Git's workflow

When working with Git, it is important to use best practices to avoid merge conflicts and rebase issues in your pull requests and code causing them to be rejected and uncommitted.

#### Keeping master in sync

<figure>
    <img src="/images/git_master_workflow.png" alt="Git Workflow">
</figure>

1. [Brian Chan](https://github.com/brianchandotcom) and/or other approved committers **push** reviewed, tested, and approved content to the remote **upstream** repository.  The branch most commonly used to push to is the **master** branch.
2. **Fetch** changes from the remote **upstream/master** branch into your **local/master** branch to make sure everything is up to date with the latest changes. Run the following command to complete this action.
    ```shell
    # Fetch from upstream remote
    git fetch upstream
    ```
3. Merge the changes from the remote **upstream/master** branch into your **local/master** branch to make sure both branches are in sync with one another. Run the following commands to complete this action.
    ```shell
    # Checkout your master branch
    git checkout master

    # Merge changes from upstream into your local master branch
    git merge upstream/master
    ```
4. We then **push** your **local/master** branch to our remote **origin/master** branch to make sure everything is now identical.

If you notice, your **local/master** branch, remote **origin/master** branch, and remote **upstream/master** branch are all identical. You should *never* make changes to the **master** branch.

#### Submitting a pull request for review

To make changes and submit code for review, you should always make sure everything is in sync first.

1. **Fetch** changes from the remote **upstream/master** branch into your **local/master** branch to make sure everything is up to date with the latest changes.
2. Merge the changes from the remote **upstream/master** branch into your **local/master** branch to make sure both branches are in sync with one another.
3. Create a new **development** branch based off of the **local/master** branch. Run the following commands to complete this action.
    ```shell
    # Checkout the local master branch - you want your new branch to come from master
    git checkout master

    # Create a new branch named newfeature (give your branch its own simple informative name)
    git branch newfeature
    ```
4. Checkout this new **development** branch as you will begin making your changes on this branch. Run the following command to complete this action.
    ```shell
    # Switch to your new branch
    git checkout newfeature
    ```
5. Make your changes and commit them to this **development** branch.
6. When you are ready to have your code reviewed, make sure to rebase your development branch on top of the remote **upstream/master** branch so merging will be simple and not have any conflicts. Run the following commands to complete this action.
    ```shell
    # Fetch upstream master and merge with your repo's master branch
    git fetch upstream
    git checkout master
    git merge upstream/master

    # If there were any new commits, rebase your development branch
    git checkout newfeature
    git rebase master
    ```
7. **Push** your **development** branch to your remote **origin** repository. This will allow others to view your branch on your personal GitHub.com fork.
8. Send a pull request to your reviewer using the GitHub.com GUI. Go to your fork on GitHub.com, select your **development** branch and click the **pull request** button.

For more information about pull requests, please read [About pull requests](https://help.github.com/articles/about-pull-requests) and [Creating a pull request](https://help.github.com/articles/creating-a-pull-request).

An interactive guide about Git's workflow, can be found at [https://guides.github.com/introduction/flow/](https://guides.github.com/introduction/flow/).
