---
link: 
tags: github repo reference versioncontrol dataflow versioning App
registry: App
token: "[[4-Data Registries/App/Git|Git]]"
source: 
Data Id: "Other Available Languages:"
Data Generated: 3Q24, Aug 15th - 10.11
Modified: 3Q24, Sep 14th - 17.44
---

Git Cheat Sheet English
===============

### Index

* [Set Up](#setup)
* [Configuration Files](#configuration-files)
* [Create](#create)
* [Local Changes](#local-changes)
* [Search](#search)
* [Commit History](#commit-history)
* [Move / Rename](#move--rename)
* [Branches & Tags](#branches--tags)
* [Update & Publish](#update--publish)
* [Merge & Rebase](#merge--rebase)
* [Undo](#undo)
* [Git Flow](#git-flow)

<hr>

## Setup

##### Show Current Configuration:

```
$ git config --list
```

##### Show Repository Configuration:

```
$ git config --local --list
```

##### Show Global Configuration:

```
$ git config --global --list
```

##### Show System Configuration:

```
$ git config --system --list
```

##### Set a name that is Identifiable for Credit when Review Version History:

```
$ git config --global user.name "[firstname lastname]"
```

##### Set an Email Address that Will Be Associated with Each History Marker:

```
$ git config --global user.email "[valid-email]"
```

##### Set Automatic Command line Coloring for Git for Easy Reviewing:

```
$ git config --global color.ui auto
```

##### Set Global Editor for Commit

```
$ git config --global core.editor vi
```

<hr>

## Configuration Files

##### Repository Specific Configuration File [--local]:

```
<repo>/.git/config
```

##### User-specific Configuration File [--global]:

```
~/.gitconfig
```

##### System-wide Configuration File [--system]:

```
/etc/gitconfig
```

<hr>

## Create

##### Clone an Existing Repository:

There are two ways:

Via SSH

```
$ git clone ssh://user@domain.com/repo.git
```

Via HTTP

```
$ git clone http://domain.com/user/repo.git
```

##### Create a New Local Repository in the Current Directory:

```
$ git init
```

##### Create a New Local Repository in a Specific Directory:

```
$ git init <directory>
```

<hr>

## Local Changes

##### Changes in Working Directory:

```
$ git status
```

##### Changes to Tracked Files:

```
$ git diff
```

##### See changes/difference of a Specific File:

```
$ git diff <file>
```

##### Add All Current Changes to the next Commit:

```
$ git add .
```

##### Add Some Changes in &lt;file&gt; to the next Commit:

```
$ git add -p <file>
```

##### Add only the Mentioned Files to the next Commit:

```
$ git add <filename1> <filename2>
```

##### Commit All Local Changes in Tracked Files:

```
$ git commit -a
```

##### Commit Previously Staged Changes:

```
$ git commit
```

##### Commit with Message:

```
$ git commit -m 'message here'
```

##### Commit Skipping the Staging Area and Adding Message:

```
$ git commit -am 'message here'
```

##### Commit to Some Previous Date:

```
$ git commit --date="`date --date='n day ago'`" -am "<Commit Message Here>"
```

##### Change Last commit:<br>

<em><sub>Don't amend published commits!</sub></em>

```
$ git commit -a --amend
```

##### Amend with Last Commit but Use the Previous Commit Log Message

<em><sub>Don't amend published commits!</sub></em>

```shell
$ git commit --amend --no-edit
```

##### Change Committer Date of Last Commit:

```
GIT_COMMITTER_DATE="date" git commit --amend
```

##### Change Author Date of Last Commit:

```shell
$ git commit --amend --date="date"
```

##### Move Uncommitted Changes from Current Branch to Some other branch:<br>

```
$ git stash
$ git checkout branch2
$ git stash pop
```

##### Restore Stashed Changes back to Current Branch:

```shell
$ git stash apply
```

#### Restore Particular Stash back to Current Branch:

- *{stash_number}* can be obtained from `git stash list`

```shell
$ git stash apply stash@{stash_number}
```

##### Remove the Last Set of Stashed Changes:

```
$ git stash drop
```

<hr>

## Search

##### A Text search on All Files in the Directory:

```
$ git grep "Hello"
```

##### In Any Version of a Text Search:

```
$ git grep "Hello" v2.5
```

##### Show Commits that Introduced a Specific Keyword

```
$ git log -S 'keyword'
```

##### Show Commits that Introduced a Specific Keyword (using a Regular expression)

```
$ git log -S 'keyword' --pickaxe-regex
```

<hr>

## Commit History

##### Show All Commits, Starting with Newest (it'll Show the Hash, Author Information, Date of Commit and Title of the commit):

```
$ git log
```

##### Show All the commits(it'll Show just the Commit Hash and the Commit message):

```
$ git log --oneline
```

##### Show All Commits of a Specific User:

```
$ git log --author="username"
```

##### Show Changes over time for a Specific File:

```
$ git log -p <file>
```

##### Display Commits that Are Present only in remote/branch in Right Side

```
$ git log --oneline <origin/master>..<remote/master> --left-right
```

##### Who Changed, what and when in &lt;file&gt;:

```
$ git blame <file>
```

##### Show Reference Log:

```
$ git reflog show
```

##### Delete Reference Log:

```
$ git reflog delete
```

<hr>

## Move / Rename

##### Rename a File:

Rename Index.txt to Index.html

```
$ git mv Index.txt Index.html
```

<hr>

## Branches & Tags

##### List All Local Branches:

```
$ git branch
```

#### List local/remote Branches

```
$ git branch -a
```

##### List All Remote Branches:

```
$ git branch -r
```

##### Switch HEAD Branch:

```
$ git checkout <branch>
```

##### Checkout Single File from Different Branch

```
$ git checkout <branch> -- <filename>
```

##### Create and Switch New Branch:

```
$ git checkout -b <branch>
```

##### Switch to the Previous Branch, without Saying the name Explicitly:

```
$ git checkout -
```

##### Create a New Branch from an Exiting Branch and Switch to New Branch:

```
$ git checkout -b <new_branch> <existing_branch>
```

#### Checkout and Create a New Branch from Existing Commit

```
$ git checkout <commit-hash> -b <new_branch_name>
```

##### Create a New Branch Based on Your Current HEAD:

```
$ git branch <new-branch>
```

##### Create a New Tracking Branch Based on a Remote Branch:

```
$ git branch --track <new-branch> <remote-branch>
```

##### Delete a Local Branch:

```
$ git branch -d <branch>
```

##### Rename Current Branch to New Branch name

```shell
$ git branch -m <new_branch_name>
```

##### Force Delete a Local Branch:

<em><sub>You will lose unmerged changes!</sub></em>

```
$ git branch -D <branch>
```

##### Apply Specific Commit from Another Branch:

```
git cherry-pick <commit hash>
```

##### Mark `HEAD` with a Tag:

```
$ git tag <tag-name>
```

##### Mark `HEAD` with a Tag and Open the Editor to Include a Message:

```
$ git tag -a <tag-name>
```

##### Mark `HEAD` with a Tag that Includes a Message:

```
$ git tag <tag-name> -am 'message here'
```

##### List All Tags:

```
$ git tag
```

##### List All Tags with Their Messages (tag Message or Commit Message if Tag Has no message):

```
$ git tag -n
```

<hr>

## Update & Publish

##### List All Current Configured Remotes:

```
$ git remote -v
```

##### Show Information about a Remote:

```
$ git remote show <remote>
```

##### Add New Remote Repository, Named &lt;remote&gt;:

```
$ git remote add <remote> <url>
```

##### Rename a Remote Repository, from &lt;remote&gt; to &lt;new_remote&gt;:

```
$ git remote rename <remote> <new_remote>
```

##### Remove a Remote:

```
$ git remote rm <remote>
```

<em><sub>Note: git remote rm does not delete the remote repository from the server. It simply removes the remote and its references from your local repository.</sub></em>

##### Download All Changes from &lt;remote&gt;, but Don't Integrate into HEAD:

```
$ git fetch <remote>
```

##### Download Changes and Directly merge/integrate into HEAD:

```
$ git remote pull <remote> <url>
```

##### Get All Changes from HEAD to Local Repository:

```
$ git pull origin master
```

##### Get All Changes from HEAD to Local Repository without a Merge:

```
$ git pull --rebase <remote> <branch>
```

##### Publish Local Changes on a Remote:

```
$ git push <remote> <branch>
```

##### Delete a Branch on the Remote:

```
$ git push <remote> :<branch> (since Git v1.5.0)
```

OR

```
$ git push <remote> --delete <branch> (since Git v1.7.0)
```

##### Publish Your Tags:

```
$ git push --tags
```

<hr>

#### Configure the Merge Tool Globally to Meld (editor)

```bash
$ git config --global merge.tool meld
```

##### Use Your Configured Merge Tool to Solve Conflicts:

```
$ git mergetool
```

## Merge & Rebase

##### Merge Branch into Your Current HEAD:

```
$ git merge <branch>
```

#### List Merged Branches

```
$ git branch --merged
```

##### Rebase Your Current HEAD onto &lt;branch&gt;:<br>

<em><sub>Don't rebase published commit!</sub></em>

```
$ git rebase <branch>
```

##### Abort a Rebase:

```
$ git rebase --abort
```

##### Continue a Rebase after Resolving Conflicts:

```
$ git rebase --continue
```

##### Use Your Editor to Manually Solve Conflicts and (after resolving) Mark File as Resolved:

```
$ git add <resolved-file>
```

```
$ git rm <resolved-file>
```

##### Squashing Commits:

```
$ git rebase -i <commit-just-before-first>
```

Now replace this,

```
pick <commit_id>
pick <commit_id2>
pick <commit_id3>
```

to this,

```
pick <commit_id>
squash <commit_id2>
squash <commit_id3>
```

<hr>

## Undo

##### Discard All Local Changes in Your Working Directory:

```
$ git reset --hard HEAD
```

##### Get All the Files out of the Staging area(i.e. Undo the Last `git add`):

```
$ git reset HEAD
```

##### Discard Local Changes in a Specific File:

```
$ git checkout HEAD <file>
```

##### Revert a Commit (by Producing a New Commit with Contrary changes):

```
$ git revert <commit>
```

##### Reset Your HEAD Pointer to a Previous Commit and Discard All Changes since Then:

```
$ git reset --hard <commit>
```

##### Reset Your HEAD Pointer to a Remote Branch Current State.

```
$ git reset --hard <remote/branch> e.g., upstream/master, origin/my-feature
```

##### Reset Your HEAD Pointer to a Previous Commit and Preserve All Changes as Unstaged Changes:

```
$ git reset <commit>
```

##### Reset Your HEAD Pointer to a Previous Commit and Preserve Uncommitted Local Changes:

```
$ git reset --keep <commit>
```

##### Remove Files that Were Accidentally Committed before They Were Added to .gitignore

```
$ git rm -r --cached .
$ git add .
$ git commit -m "remove xyz file"
```

<hr>

## Git-Flow

Improved [Git-flow](https://github.com/petervanderdoes/gitflow-avh)

### Index

* [Setup](#setup)
* [Getting Started](#getting-started)
* [Features](#features)
* [Make a Release](#make-a-release)
* [Hotfixes](#hotfixes)
* [Commands](#commands)

<hr>

### Setup

###### You Need a Working Git Installation as Prerequisite. Git Flow Works on OSX, Linux and Windows.

##### OSX Homebrew:

```
$ brew install git-flow-avh
```

##### OSX Macports:

```
$ port install git-flow
```

##### Linux (Debian-based):

```
$ sudo apt-get install git-flow
```

##### Windows (Cygwin):

###### You Need Wget and Util-linux to Install Git-flow.

```bash
$ wget -q -O - --no-check-certificate https://raw.githubusercontent.com/petervanderdoes/gitflow/develop/contrib/gitflow-installer.sh install <state> | bash
```

<hr>

### Getting Started

###### Git Flow Needs to Be Initialized in order to Customize Your Project Setup. Start Using Git-flow by Initializing it inside an Existing Git Repository:

##### Initialize:

###### You'll Have to Answer a Few Questions regarding the Naming Conventions for Your Branches. It's Recommended to Use the Default Values.

```shell
git flow init
```

OR

###### To Use Default

```shell
git flow init -d
```

<hr>

### Features

###### Develop New Features for Upcoming Releases. Typically Exist in Developers Repos Only.

##### Start a New Feature:

###### This Action Creates a New Feature Branch Based on 'develop' and Switches to It.

```
git flow feature start MYFEATURE
```

##### Finish up a Feature:

###### Finish the Development of a Feature. This Action Performs the Following:

###### 1) Merged MYFEATURE into 'develop'.

###### 2) Removes the Feature Branch.

###### 3) Switches back to 'develop' Branch

```
git flow feature finish MYFEATURE
```

##### Publish a Feature:

###### Are You Developing a Feature in Collaboration? Publish a Feature to the Remote Server so it Can Be Used by other Users.

```
git flow feature publish MYFEATURE
```

##### Getting a Published Feature:

###### Get a Feature Published by Another User.

```
git flow feature pull origin MYFEATURE
```

##### Tracking a Origin Feature:

###### You Can Track a Feature on Origin by Using

```
git flow feature track MYFEATURE
```

<hr>

### Make a Release

###### Support Preparation of a New Production Release. Allow for Minor Bug Fixes and Preparing Meta-data for a Release

##### Start a Release:

###### To Start a Release, Use the Git Flow Release Command. It Creates a Release Branch Created from the 'develop' Branch. You Can Optionally Supply a [BASE] Commit Sha-1 Hash to Start the Release From. The Commit Must Be on the 'develop' Branch.

```
git flow release start RELEASE [BASE]
```

###### It's Wise to Publish the Release Branch after Creating it to Allow Release Commits by other Developers. Do it Similar to Feature Publishing with the Command:

```
git flow release publish RELEASE
```

###### (You Can Track a Remote Release with The: ```git flow release track RELEASE``` command)

##### Finish up a Release:

###### Finishing a Release is One of the Big Steps in Git Branching. It Performs Several Actions:

###### 1) Merges the Release Branch back into 'master'

###### 2) Tags the Release with Its name

###### 3) Back-merges the Release into 'develop'

###### 4) Removes the Release Branch

```
git flow release finish RELEASE
```

###### Don't Forget to Push Your Tags with ```git push --tags```

<hr>

### Hotfixes

###### Hotfixes Arise from the Necessity to Act Immediately upon an Undesired State of a Live Production Version. May Be Branched off from the Corresponding Tag on the Master Branch that Marks the Production Version.

##### Git Flow Hotfix Start:

###### Like the other Git Flow Commands, a Hotfix is Started with

```
$ git flow hotfix start VERSION [BASENAME]
```

###### The Version Argument hereby Marks the New Hotfix Release Name. Optionally You Can Specify a Basename to Start From.

##### Finish a Hotfix:

###### By Finishing a Hotfix it Gets Merged back into Develop and Master. Additionally the Master Merge is Tagged with the Hotfix Version

```
git flow hotfix finish VERSION
```

<hr>

### Commands

<p align="center">
    <img alt="Git" src="./Img/git-flow-commands.png" height="270" width="460">
</p>
<hr>

### Git Flow Schema

<p align="center">
    <img alt="Git" src="Img/git-flow-commands-without-flow.png">
</p>
<hr>

# Other Available Languages:

1. [Arabic Git Cheat Sheet](./other-sheets/git-cheat-sheet-ar.md)
2. [Brazilian Portuguese Git Cheat Sheet](./other-sheets/git-cheat-sheet-pt_BR.md)
3. [Chinese Git Cheat Sheet](./other-sheets/git-cheat-sheet-zh.md)
4. [German Git Cheat Sheet](./other-sheets/git-cheat-sheet-de.md)
5. [Greek Git Cheat Sheet](./other-sheets/git-cheat-sheet-el.md)
6. [Hindi Git Cheat Sheet](./other-sheets/git-cheat-sheet-hi.md)
7. [Korean Git Cheat Sheet](./other-sheets/git-cheat-sheet-ko.md)
8. [Polish Git Cheat Sheet](./other-sheets/git-cheat-sheet-pl.md)
9. [Spanish Git Cheat Sheet](./other-sheets/git-cheat-sheet-es.md)
10. [Turkish Git Cheat Sheet](./other-sheets/git-cheat-sheet-tr.md)
11. [Bengali Git Cheat Sheet](./other-sheets/git-cheat-sheet-bn.md)

