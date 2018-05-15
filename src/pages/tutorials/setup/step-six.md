---
title: "Step 6: Setting up Git"
description: "Learn how to set up Git."
buttonTitle: "Step 6 Complete"
parentId: "setup"
layout: "tutorial"
weight: 6
---

## {$page.title}

We are going to setup our Git account so we can begin development.

### Create an account on GitHub.com

Please replace the place holders tokens in the following tutorials with the correct values (ie. FIRSTNAME, LASTNAME, etc).

1. Create an account on [Github.com](https://github.com) using your Liferay email address (```FIRSTNAME.LASTNAME@liferay.com```) as your email address. Do not use the word **liferay** in your username.
2. Add your Full Name to your GitHub.com public profile.
3. Add a picture using [gravatar](https://en.gravatar.com). Be sure to use your ```FIRSTNAME.LASTNAME@liferay.com``` email address when registering with gravatar.
4. Follow [Brian Chan](https://github.com/brianchandotcom) on GitHub.com.
5. **Optional**: If you need access to any private Liferay repositories, email [it-support@liferay.com](it-support@liferay.com) with your GitHub.com **username**, while CC-ing your manager.

### Configuring .gitconfig

1. You should have already installed Git from step 1. If you do not already have Git installed, please install it now.
2. Add your user name to your global ```.gitconfig```. Run the following command to complete this action.
    ```shell
    git config --global user.name "FIRSTNAME LASTNAME"
    ```

    **Example**

    ```shell
    git config --global user.name "Brian Chan"
    ```
3. Add your Liferay email address (```FIRSTNAME.LASTNAME@liferay.com```) to your ```.gitconfig```. Run the following command to complete this action.
    ```shell
    git config --global user.email "FIRSTNAME.LASTNAME@liferay.com"
    ```
    **Example**
    ```shell
    git config --global user.email "brian.chan@liferay.com"
    ```
4. On a windows machine, you *might* run into an error because Git has a limit of 4096 characters for a file name; windows has a limit of 260 characters. You will need to set longpaths to true only on a **windows** machine. Run the following command to complete this action.
    ```shell
    git config --global core.longpaths true
    ```