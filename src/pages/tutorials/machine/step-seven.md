---
title: "Step 7: Getting Liferay's source code"
description: "Learn how to get Liferay's source code."
buttonTitle: "Step 7 Complete"
parentId: "machine"
layout: "tutorial"
weight: 7
---

## {$page.title}

We are going to get Liferay's *source* code from GitHub.com on to your machine.

### Forking a repository

In order to begin making changes to *source* code and have it reviewed, tested, and approved, you will need to make a copy of this code locally.

A *fork* is copying a repository on GitHub.com from it's original owner to your personal GitHub.com account.  Forking a repository allows you to freely experiment with changes without affecting the original project.

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own ideas.

#### Forking Liferay Portal

Forking a repository is a simple two-step process.

1. On GitHub.com, navigate to the [liferay/liferay-portal](https://github.com/liferay/liferay-portal) repository.
2. In the top-right corner of the page, click **Fork**.

Congratulations!  You have now have a fork of the original [liferay/liferay-portal](https://github.com/liferay/liferay-portal) repository in your GitHub.com account.

#### Cloning Liferay Portal

Because forking the repository only makes a copy of the code in GitHub.com, we now need to get this code locally to begin.

1. Setup Git if you have not done so already in the previous steps.
2. Go to *your* fork of the liferay-portal repository on GitHub.com.
3. Click the **Clone or download** button. When connecting to a GitHub.com repository from Git, you will need to authenticate using either **HTTPS** (*recommended*) or **SSH**. If you clone with **HTTPS**, please review the following [instructions](https://help.github.com/articles/which-remote-url-should-i-use/#cloning-with-https-urls-recommended). If you clone with **SSH**, please review the following [instructions](https://help.github.com/articles/which-remote-url-should-i-use/#cloning-with-ssh-urls).
4. In the dialog that appears after clicking the **Clone or download** button, copy the URL that you want to use for your repository.
5. Open a *Terminal*/*Git Bash* window.
6. Browse to the location where you would like to download this repository.
7. We will download the repository from GitHub.com to our local machine by cloning it. Run the following command to complete this action.
    ```shell
    # Pasted URL should look something like:
    # SSH URL: git@github.com:brianchandotcom/liferay-portal.git
    # HTTPS: https://github.com/brianchandotcom/liferay-portal.git
    git clone PASTE URL HERE
    ```

    Upon completion, you should see something like the output below.

    ```shell
    Cloning into `liferay-portal`...remote: Counting objects: 10, done.
    ...
    remote: Compressing objects: 100% (8/8), done.
    remove: Total 10 (delta 1), reused 10 (delta 1)
    Unpacking objects: 100% (10/10), done.
    ```

Congratulations!  You now have a local copy of your fork of the liferay-portal repository!

#### Configuring your remote repository URLs

Now that we have have everything locally, we need to add a remote url. A remote URL is Git's fancy way of saying "the place where your code is stored." That URL could be your repository on GitHub.com, or another user's fork, or even on a completely different server.

1. Go to your newly cloned repository in *Terminal*/*Git Bash*.
2. Check what your currently remote repositories are by running the following command below.
    ```shell
    git remote -v
    ```

    The output should be something similar to below if your cloned your repository.

    ```shell
    origin    https://github.com/brianchandotcom/liferay-portal.git (fetch)
    origin    https://github.com/brianchandotcom/liferay-portal.git (push)
    ```

    If you do not have any remote URL's listed, you will have to add a remote URL for the **upstream** and **origin** repositories.
3. Add the upstream remote, if it is not already added, to point to the **upstream** repository URL. Run the following command to complete this action.
    ```shell
    # Copy the upstream repository URL
    git remote add upstream https://github.com/liferay/liferay-portal.git
    ```

    If you need to add the **origin** remote, follow the same steps but use the **origin** repository URL instead of the **upstream** repository URL.
4. Verify that your remote URL's are correctly pointing to the desired locations by running the following command below.
    ```shell
    git remote -v
    ```

    The output should be something similar to below if your cloned your repository.

    ```shell
    origin    https://github.com/brianchandotcom/liferay-portal.git (fetch)
    origin    https://github.com/brianchandotcom/liferay-portal.git (push)
    upstream    https://github.com/liferay/liferay-portal.git (fetch)
    upstream    https://github.com/liferay/liferay-portal.git (push)
    ```

    You can add as many remote URL's as you would like.  Just make sure to have each one named uniquely.

For more information about remotes, please read [About remote repositories](https://help.github.com/articles/about-remote-repositories/).