---
title: "Git for Dummies"
description: "Git for Dummies."
date: "October 2, 2013"
author: "Pei-Jung Lan"
layout: "blog"
---

<article>

Git can be *incredibly* confusing when you start using it. The [Git guide](/guide/git/) has some great tips, but don't rely solely on it; feel free to look for Git tutorials on Google or YouTube; there are a lot of great beginner tips out there, and the faster you understand Git, the faster you can get up to speed with the rest of Liferay. It may take time, but it'll make sense eventually.

[Git Magic](http://www-cs-students.stanford.edu/~blynn/gitmagic) provides an introduction about Git; a basic understanding of what Git is and what it is useful for.

[Pro Git](https://git-scm.com/book/en/v2) contains extensive documentation on how to use Git.

First off, you're going to have to use the command line. There are other means of going about using Git, using [GUI clients](https://git-scm.com/downloads/guis) such as [SmartGit](http://www.syntevo.com/smartgit), but the command line is usually (but not always) the most effective way to use Git. A lot of Git is just learning to understand what you're seeing on the command line.

### Some things to know

Git is best described as a "decentralized source control management system". That means that instead of having one *master* source that everyone has to work with (it can be destroyed, shut down, corrupted, etc.) every user is given an independent copy of the *master source code*.

They can make changes and then merge those changes back into the source repository (*upstream*).

This main repository is called *trunk*.

What makes Git unique is that it only records the changes (*commits*) made by individual users. So when a change is made, instead of having to upload thousands of files, whatever changes have been made are applied to the main repository, and the rest of the files are left untouched. It's like a painter adding onto a painting when he wants to make a change, as opposed to starting from scratch and making the change.

For further reference, a great beginner video series is the [AVA series on YouTube](https://www.youtube.com/watch?v=sUQALbfDdAI&feature=c4-overview-vl&list=PL08C8894B4C602654). It is incredibly simple, and made for absolute Git beginners, which most interns typically are. In addition, most of the Git commands you will need to use at Liferay can be found [here](/guide/git/commands.html).

#### Overview of the Git workflow

1. Initialize and setup a Git repository
2. Create a local branch to work on and make changes to
3. Add any new/modified changes that you want to include in the commit
4. Commit often so it is easier to keep track of all your work
5. Push local commits to the remote repository
6. Submit a pull request

#### Updating branches and repositories

There are two ways to update your local branches to reflect upstream changes.

The first is by using ```git pull --rebase upstream BRANCH```, which performs the entire process in a single step. The second, faster, way, is to use ```git fetch upstream```, which pulls changes from all upstream branches but does not merge them. Since using *fetch* shows you all the branches that have changed, you can choose to update only those branches. The next step is to use ```git branch -f BRANCH upstream/BRANCH```, which forces your local copy of *BRANCH* to be identical to its corresponding upstream branch. This operation executes instantaneously, unlike *pull --rebase*, which takes a little bit of time.

*Just make sure you always create local branches when you need to make changes and never make changes to your local copies of upstream branches, or else using branch -f will make your changes disappear.*

The biggest thing to remember, if you are just starting out with Git is just to be careful and patient. Always make a new branch (```git checkout -b <branchname>```) for the work that you are doing - if you always work in a separate branch there may be a little bit more overhead time, but if you screw up then you can easily fix it.

If you send code off to be approved, don't touch it - if you need to work on it again, you'll get it back, or receive an okay to work on it again, don't risk conflicting with changes that a supervisor might make and then send to you by changing stuff in your specific copy that could conflict with someone else's. Don't ever try to *recreate* changes someone else made that you don't have access to, ask them for a pull request or get your hands on it the right way. Git can have a high degree of complexity as a whole, but you can make your little slice of things pretty simple, so don't make it harder on yourself.

#### Resolving a bug in Liferay

This is a conceptual walk-through about how to use Git to resolve a bug found in Liferay Portal.

It won't cover every specific command, but it will detail a process that should help you better understand what is going on in Git and how to use Git for a simple bug fix.

1. Update our local copy of Liferay Portal to match Liferay Portal trunk (*upstream* on GitHub). This would ensure that all the changes that have recently been added to the trunk are reflected in your local copy (because you most likely won't want to be working off of an outdated version of portal). We would do this using a git pull. This would pull all the changes from Liferay's *source* code onto our personal machine.
2. Make a new branch. This helps to preserve both the integrity of the *master* branch and the changes you've made to accomplish a specific task (just in case you need to refer to those changes in the future). For this example, we'll create a branch called *BugFix9*. All the changes we make will be made on this branch, but if all goes well, they will be merged into the master branch. *Note: A good convention to follow is to include the ticket number in the branch name. For example, LPS-12345-bugFix*.
3. Checkout our new branch and make our changes *Note: You'll likely make your changes in your bundle before making the changes to your branch in portal*. Once our changes have been made, we would add them to our working tree, using ```git add```. This merely means that Git is now waiting to commit those specific changes we've added.
4. Rebuild our changes with the bugfix to see if the fix really works (run ```ant all``` on your liferay-portal repository will ensure your changes are deployed). This will help ensure that your bugfix isn't another bug in itself. *Tip: Doing ant all on liferay-portal usually takes a while, so to from rebuilding all the source code in the portal, if you only make changes to a sub-directory (for example, the bookmarks portlet), you can navigate to the sub-directory in your Terminal/Git Bash and run ```gradle clean deploy``` instead of ant all.*
5. Now that we've fixed our bug and tested everything. All our changes have been added (another word for this is staged), and we're ready to commit them. This means that we're going to add them to the *source* code of our current branch. We run ```git commit```, and now the fixes we made are part of the branch *BugFix9*. *Note: For bug fixes, we usually include the ticket number in front of the commit message. For example, LPS-12345 Your commit message.*
6. Before we push our work to our origin, we need to update our local branch with *upstream/master* to make sure that all changes are compatible with the most recent changes on *upstream/master*.Occasionally, this update and merging process does not go smoothly. If we changed the same part of the same file differently in the two branches that we are merging together, Git won't be able to merge them.
7. However, our changes will likely go through a reviewer (or two or three), so we'll push our branch to our our *origin* and then send a pull request to a reviewer. We would do this by sending our local branch to our remote *origin* repository using ```git push``` (e.g. ```git push origin BugFix9```).
8. Finally, we submit a pull request to our reviewer. If our code looks good, it will get pushed into the remote *upstream* repository and become a part of the trunk. *Note: When sending pull requests for bug fixes, another good convention to follow is to include the link to the JIRA ticket in the body section of the pull request.*
9. Congratulations! You have successful fixed a bug in Liferay's *source* code.

### Git shortcuts and tips

Below are some helpful shortcuts for Git. If you haven't wrapped your mind around the basics of Git yet, you may want to study and use Git more before trying some of these shortcuts.

#### .gitconfig
In your *~* directory, you'll also find a file called *.gitconfig*. Editing this file allows you to set more advanced options for Git.

Here is a snippet of code from a sample *.gitconfig* file.

```shell
[user]
    name = Your Name
    email = your.name@liferay.com
[core]
    filemode = false
    # Make Sublime Text the default editor rather than Vim for operations such as interactive rebase
    editor = 'C:/program files/sublime text 2/sublime_text.exe' -w
[push]
    # When you run git push origin, all local branches are automatically pushed to their corresponding remote branches
    default = matching
```

Liferay provides a list of commonly used [Git commands and alias](https://github.com/liferay/git-tools/blob/master/gitconfig) in [Liferay's Git Tool repository](https://github.com/liferay/git-tools/blob/master/gitconfig).

#### Using the * operator

When there are several files that you have changed and you only want to stage some of them for a commit, you can use ```git add``` with the _*_ operator to select multiple files with similar file paths.

Let's say that you run ```git status``` and get the following result:

```shell
# Changes not staged for commit:#
#    modified:   portal-web/docroot/html/portlet/bookmarks/css/main.css
#    modified:   portal-web/docroot/html/portlet/document_library_display/search.jsp
#    modified:   portal-web/docroot/html/themes/classic/_diffs/css/color_schemes/dark.css
#    modified:   portal-web/docroot/layouttpl/custom/1_2_1_columns.tpl#
```

If you only want to commit the changes to the *Bookmarks* and *Document Library Display* portlets, you can simply run ````git add portal-web/docroot/html/p *```, which will only add the two files in the *portal-web/docroot/html/portlet* folder.

#### Creating aliases

One of the things we recommend you do to improve your Git workflow is creating a ```.bash_profile``` with aliases. Aliases allow you to type custom, shorter commands in place of longer ones.

To get started, create a file called ```.bash_profile``` in your **~** directory (Note: the tilde symbol, **~**, is equivalent to the file path of your home directory - e.g. ```C:\Users\liferay```).

Let's say that you wanted to use the shorter string *cm* in place of *commit*. Add the following line in your ```.bash_profile```.

```shell
alias cm="commit"
```

Now, you can use ```git cm``` instead of ```git commit```.

Another example of useful aliases is chaining successive commands together.

If you wanted to checkout the *master* branch, update it with the remote *upstream* repository, and push these changes to your remote *origin* repository, you could create an alias in your ```.bash_profile``` with the following line.

```shell
alias updateMaster="git checkout master; git pull upstream master; git push origin master"
```

(You must close and re-open your *Terminal/Git Bash* for the changes to take effect).

You can also use aliases to represent non-Git commands as well. If you wanted to navigate to a folder location without typing everything out, you could create an alias in your ```.bash_profile``` with the following line.

```shell
alias portal="cd ~/Desktop/Liferay/liferay-portal"
```

Now you can type *portal* in your *Terminal/Git Bash* instead of having to type out the entire path every time.

For an example of many of the things you can do with a ```.bash_profile```, check out [Jon's configFiles](https://github.com/jonmak08/configFiles).

In fact, it may even be more beneficial to navigate the long way for a while before you start setting up super shortcuts. However, you'll eventually want to start using them, because they significantly improve your workflow, allowing you to spend less time on busy work (i.e. typing in unreasonably long commands) and more time creating and fixing things!

#### Gitk

If you would like to see the commit history for a particular branch or see exactly what lines or what files have been changed, run ```gitk``` in your *Terminal/Git Bash*.

This brings up a Git GUI that will help you visualize where your branches are, what changes you have staged, and much more.

[SmartGit](http://www.syntevo.com/smartgit) is an even more robust tool and it is particularly good for solving merge conflicts.

#### Rebase interactively

Interactive rebase is a very helpful feature of Git that gives you the opportunity to easily alter a series of commits by rearranging the order, editing the messages, or squashing commits together into a single commit.

Run the following command in your *Terminal/Git Bash*.

```shell
git rebase -i
```

This will launch the text editor with a file listing the commits that will be rebased.

If you wanted to only pick the last few commits in the current branch rather than the entire branch, use ```git rebase -i HEAD~n```, where *n* is the number of commits.

For example, to rebase the last two commits, run the following command in your *Terminal/Git Bash*.

```shell
git rebase -i HEAD~2
```

The file, *git-rebase-to*, will open up in the text editor and looks like the following:

```shell
pick 4a66600 Commit 1
pick 2566fcf Commit 2

# Rebase 617640f..2566fcf onto 617640f
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

Select what you want to do and proceed by saving and closing the file.

#### Resolving merge conflicts with SmartGit

A merging conflict occurs when we try to do a merge, rebase or cherry-pick operation while there are conflicting changes between two or more commits. If that happens, Git will pause the merging process for us to fix the problem. In order to resolve the conflicts, we need to go through all conflicted files one by one and modify them as needed.

Below is a brief walk-through on how to use SmartGit's Conflict Solver Tool to resolve the conflicts.

1. Open SmartGit
2. Open the file with conflicts (*Usually indicated as a file with an exclamation mark*).  This will open up a three-panel editor, Smart Git's Conflict Solver.
    * The left panel shows what is new on the *master* branch. Usually these are the changes that we want to keep.
    * The center panel is the current *working* branch. This is where we select the changes that we want and make any further modifications if needed.
    * The right panel shows the changes we have made, the conflicted branch.
3. Fix the conflicts and stage the changes. Staging the file marks it as resolved in Git.
4. Continue the process for all the conflicted file until there are no more conflicts.
5. Run ```git rebase --continue``` in your *Terminal/Git Bash* to continue the merging process when all the conflicts are resolved.

##### Squashing/Merging Commits

Find the commits you want to squash/merge by running the following command in your *Terminal/Git Bash*.

```shell
git rebase -i HEAD~n
```

To merge the newer commits into the previous commit, change the pick command before each commit to *squash* or *s*.

```shell
pick 4a66600 Commit 1
squash 2566fcf Commit 2
# Rebase 617640f..2566fcf onto 617640f
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

Save and close the editor to begin Git's rebase.

Git will pause the rebase again after the merge is done and open the editor with the commit messages from all the commits. Edit the message if needed, save and close the editor to resume the rebase.

##### Splitting commits

Find the commits you want to split by running the following command in your *Terminal/Git Bash*.

```shell
git rebase -i HEAD~n
```

Unstage the files by running the following command in your *Terminal/Git Bash*.

```shell
git reset HEAD^
```

Add the files you want to stage for the commits and make commits.

After you have made all the changes that you want, resume rebase by running the following command in your *Terminal/Git Bash*.

```shell
git rebase --continue
```

To learn more about interactive rebase, visit [https://help.github.com/articles/about-git-rebase](https://help.github.com/articles/about-git-rebase).

#### pull-request script

If you would like to be able to send pull requests from the command line rather than on GitHub.com, there are command line tools created by Liferay to do so.

* **[git-tools](https://github.com/liferay/git-tools)**: A Python script to send and receive pull requests based on Liferay usernames.

* **[node-gh](http://nodegh.io)**: A node script to send and receive pull requests, comment in JIRA, and create Gists.

</article>