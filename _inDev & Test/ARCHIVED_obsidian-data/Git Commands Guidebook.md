---
link: 
tags:
  - github
  - repo
  - versioning
  - versioncontrol
  - App
  - dataflow
registry: App
token: "[[4-Data Registries/App/Git|Git]]"
source: 
Data Id: Git Commands Guidebook
Data Generated: 3Q24, Aug 15th - 10.19
Modified: 3Q24, Sep 14th - 17.45
---

# Git Commands Guidebook

* [Everyday Git in twenty commands or so](#everyday-git-in-twenty-commands-or-so)
* [Show helpful guides that come with Git](#show-helpful-guides-that-come-with-git)
* [Search change by content](#search-change-by-content)
* [Show changes over time for specific file](#show-changes-over-time-for-specific-file)
* [Remove sensitive data from history, after a push](#remove-sensitive-data-from-history-after-a-push)
* [Sync with remote, overwrite local changes](#sync-with-remote-overwrite-local-changes)
* [List of all files till a commit](#list-of-all-files-till-a-commit)
* [Git reset first commit](#git-reset-first-commit)
* [Reset: preserve uncommitted local changes](#reset-preserve-uncommitted-local-changes)
* [List all the conflicted files](#list-all-the-conflicted-files)
* [List of all files changed in a commit](#list-of-all-files-changed-in-a-commit)
* [Unstaged changes since last commit](#unstaged-changes-since-last-commit)
* [Changes staged for commit](#changes-staged-for-commit)
* [Show both staged and unstaged changes](#show-both-staged-and-unstaged-changes)
* [List all branches that are already merged into master](#list-all-branches-that-are-already-merged-into-master)
* [Quickly switch to the previous branch](#quickly-switch-to-the-previous-branch)
* [Remove branches that have already been merged with master](#remove-branches-that-have-already-been-merged-with-master)
* [List all branches and their upstreams, as well as last commit on branch](#list-all-branches-and-their-upstreams-as-well-as-last-commit-on-branch)
* [Track upstream branch](#track-upstream-branch)
* [Delete local branch](#delete-local-branch)
* [Delete remote branch](#delete-remote-branch)
* [Create local tag](#create-local-tag)
* [Delete local tag](#delete-local-tag)
* [Delete remote tag](#delete-remote-tag)
* [Undo local changes with the last content in head](#undo-local-changes-with-the-last-content-in-head)
* [Revert: Undo a commit by creating a new commit](#revert-undo-a-commit-by-creating-a-new-commit)
* [Reset: Discard commits, advised for private branch](#reset-discard-commits-advised-for-private-branch)
* [Reword the previous commit message](#reword-the-previous-commit-message)
* [See commit history for just the current branch](#see-commit-history-for-just-the-current-branch)
* [Amend author.](#amend-author)
* [Reset author, after author has been changed in the global config.](#reset-author-after-author-has-been-changed-in-the-global-config)
* [Changing a remote's URL](#changing-a-remotes-url)
* [Get list of all remote references](#get-list-of-all-remote-references)
* [Get list of all local and remote branches](#get-list-of-all-local-and-remote-branches)
* [Get only remote branches](#get-only-remote-branches)
* [Stage parts of a changed file, instead of the entire file](#stage-parts-of-a-changed-file-instead-of-the-entire-file)
* [Get git bash completion](#get-git-bash-completion)
* [What changed since two weeks?](#what-changed-since-two-weeks)
* [See all commits made since forking from master](#see-all-commits-made-since-forking-from-master)
* [Pick commits across branches using cherry-pick](#pick-commits-across-branches-using-cherry-pick)
* [Find out branches containing commit-hash](#find-out-branches-containing-commit-hash)
* [Git Aliases](#git-aliases)
* [Saving current state of tracked files without commiting](#saving-current-state-of-tracked-files-without-commiting)
* [Saving current state of unstaged changes to tracked files](#saving-current-state-of-unstaged-changes-to-tracked-files)
* [Saving current state including untracked files](#saving-current-state-including-untracked-files)
* [Saving current state with message](#saving-current-state-with-message)
* [Saving current state of all files (ignored, untracked, and tracked)](#saving-current-state-of-all-files-ignored-untracked-and-tracked)
* [Show list of all saved stashes](#show-list-of-all-saved-stashes)
* [Show the contents of any stash in patch form](#show-the-contents-of-any-stash-in-patch-form)
* [Apply any stash without deleting from the stashed list](#apply-any-stash-without-deleting-from-the-stashed-list)
* [Apply last stashed state and delete it from stashed list](#apply-last-stashed-state-and-delete-it-from-stashed-list)
* [Delete all stored stashes](#delete-all-stored-stashes)
* [Grab a single file from a stash](#grab-a-single-file-from-a-stash)
* [Show all tracked files](#show-all-tracked-files)
* [Show all untracked files](#show-all-untracked-files)
* [Show all ignored files](#show-all-ignored-files)
* [Create new working tree from a repository (git 2.5)](#create-new-working-tree-from-a-repository-git-25)
* [Create new working tree from HEAD state](#create-new-working-tree-from-head-state)
* [Untrack files without deleting](#untrack-files-without-deleting)
* [Before deleting untracked files/directory, do a dry run to get the list of these files/directories](#before-deleting-untracked-filesdirectory-do-a-dry-run-to-get-the-list-of-these-filesdirectories)
* [Forcefully remove untracked files](#forcefully-remove-untracked-files)
* [Forcefully remove untracked directory](#forcefully-remove-untracked-directory)
* [Update all the submodules](#update-all-the-submodules)
* [Show all commits in the current branch yet to be merged to master](#show-all-commits-in-the-current-branch-yet-to-be-merged-to-master)
* [Rename a branch](#rename-a-branch)
* [Rebases 'feature' to 'master' and merges it in to master](#rebases-feature-to-master-and-merges-it-in-to-master)
* [Archive the `master` branch](#archive-the-master-branch)
* [Modify previous commit without modifying the commit message](#modify-previous-commit-without-modifying-the-commit-message)
* [Prunes references to remove branches that have been deleted in the remote.](#prunes-references-to-remove-branches-that-have-been-deleted-in-the-remote)
* [Delete local branches that has been squash and merged in the remote.](#delete-local-branches-that-has-been-squash-and-merged-in-the-remote)
* [Retrieve the commit hash of the initial revision.](#retrieve-the-commit-hash-of-the-initial-revision)
* [Visualize the version tree.](#visualize-the-version-tree)
* [Visualize the tree including commits that are only referenced from reflogs](#visualize-the-tree-including-commits-that-are-only-referenced-from-reflogs)
* [Deploying git tracked subfolder to gh-pages](#deploying-git-tracked-subfolder-to-gh-pages)
* [Adding a project to repo using subtree](#adding-a-project-to-repo-using-subtree)
* [Get latest changes in your repo for a linked project using subtree](#get-latest-changes-in-your-repo-for-a-linked-project-using-subtree)
* [Export a branch with history to a file.](#export-a-branch-with-history-to-a-file)
* [Import from a bundle](#import-from-a-bundle)
* [Get the name of current branch.](#get-the-name-of-current-branch)
* [Ignore one file on commit (e.g. Changelog).](#ignore-one-file-on-commit-eg-changelog)
* [Stash changes before rebasing](#stash-changes-before-rebasing)
* [Fetch pull request by ID to a local branch](#fetch-pull-request-by-id-to-a-local-branch)
* [Show the most recent tag on the current branch.](#show-the-most-recent-tag-on-the-current-branch)
* [Show inline word diff.](#show-inline-word-diff)
* [Show changes using common diff tools.](#show-changes-using-common-diff-tools)
* [Don’t consider changes for tracked file.](#dont-consider-changes-for-tracked-file)
* [Undo assume-unchanged.](#undo-assume-unchanged)
* [Clean the files from `.gitignore`.](#clean-the-files-from-gitignore)
* [Restore deleted file.](#restore-deleted-file)
* [Restore file to a specific commit-hash](#restore-file-to-a-specific-commit-hash)
* [Always rebase instead of merge on pull.](#always-rebase-instead-of-merge-on-pull)
* [List all the alias and configs.](#list-all-the-alias-and-configs)
* [Make git case sensitive.](#make-git-case-sensitive)
* [Add custom editors.](#add-custom-editors)
* [Auto correct typos.](#auto-correct-typos)
* [Check if the change was a part of a release.](#check-if-the-change-was-a-part-of-a-release)
* [Dry run. (any command that supports dry-run flag should do.)](#dry-run-any-command-that-supports-dry-run-flag-should-do)
* [Marks your commit as a fix of a previous commit.](#marks-your-commit-as-a-fix-of-a-previous-commit)
* [Squash fixup commits normal commits.](#squash-fixup-commits-normal-commits)
* [Skip staging area during commit.](#skip-staging-area-during-commit)
* [Interactive staging.](#interactive-staging)
* [List ignored files.](#list-ignored-files)
* [Status of ignored files.](#status-of-ignored-files)
* [Commits in Branch1 that are not in Branch2](#commits-in-branch1-that-are-not-in-branch2)
* [List n last commits](#list-n-last-commits)
* [Reuse recorded resolution, record and reuse previous conflicts resolutions.](#reuse-recorded-resolution-record-and-reuse-previous-conflicts-resolutions)
* [Open all conflicted files in an editor.](#open-all-conflicted-files-in-an-editor)
* [Count unpacked number of objects and their disk consumption.](#count-unpacked-number-of-objects-and-their-disk-consumption)
* [Prune all unreachable objects from the object database.](#prune-all-unreachable-objects-from-the-object-database)
* [Instantly browse your working repository in gitweb.](#instantly-browse-your-working-repository-in-gitweb)
* [View the GPG signatures in the commit log](#view-the-gpg-signatures-in-the-commit-log)
* [Remove entry in the global config.](#remove-entry-in-the-global-config)
* [Checkout a new branch without any history](#checkout-a-new-branch-without-any-history)
* [Extract file from another branch.](#extract-file-from-another-branch)
* [List only the root and merge commits.](#list-only-the-root-and-merge-commits)
* [Change previous two commits with an interactive rebase.](#change-previous-two-commits-with-an-interactive-rebase)
* [List all branch is WIP](#list-all-branch-is-wip)
* [Find guilty with binary search](#find-guilty-with-binary-search)
* [Bypass pre-commit and commit-msg githooks](#bypass-pre-commit-and-commit-msg-githooks)
* [List commits and changes to a specific file (even through renaming)](#list-commits-and-changes-to-a-specific-file-even-through-renaming)
* [Clone a single branch](#clone-a-single-branch)
* [Create and switch new branch](#create-and-switch-new-branch)
* [Ignore file mode changes on commits](#ignore-file-mode-changes-on-commits)
* [Turn off git colored terminal output](#turn-off-git-colored-terminal-output)
* [Specific color settings](#specific-color-settings)
* [Show all local branches ordered by recent commits](#show-all-local-branches-ordered-by-recent-commits)
* [Find lines matching the pattern (regex or string) in tracked files](#find-lines-matching-the-pattern-regex-or-string-in-tracked-files)
* [Clone a shallow copy of a repository](#clone-a-shallow-copy-of-a-repository)
* [Search Commit log across all branches for given text](#search-commit-log-across-all-branches-for-given-text)
* [Get first commit in a branch (from master)](#get-first-commit-in-a-branch-from-master)
* [Unstaging Staged file](#unstaging-staged-file)
* [Force push to Remote Repository](#force-push-to-remote-repository)
* [Adding Remote name](#adding-remote-name)
* [List all currently configured remotes](#list-all-currently-configured-remotes)
* [Show the author, time and last revision made to each line of a given file](#show-the-author-time-and-last-revision-made-to-each-line-of-a-given-file)
* [Group commits by authors and title](#group-commits-by-authors-and-title)
* [Forced push but still ensure you don't overwrite other's work](#forced-push-but-still-ensure-you-dont-overwrite-others-work)
* [Show how many lines does an author contribute](#show-how-many-lines-does-an-author-contribute)
* [Revert: Reverting an entire merge](#revert-reverting-an-entire-merge)
* [Number of commits in a branch](#number-of-commits-in-a-branch)
* [Alias: git undo](#alias-git-undo)
* [Add object notes](#add-object-notes)
* [Show all the git-notes](#show-all-the-git-notes)
* [Apply commit from another repository](#apply-commit-from-another-repository)
* [Specific fetch reference](#specific-fetch-reference)
* [Find common ancestor of two branches](#find-common-ancestor-of-two-branches)
* [List unpushed git commits](#list-unpushed-git-commits)
* [Add everything, but whitespace changes](#add-everything-but-whitespace-changes)
* [Edit [local/global] git config](#edit-localglobal-git-config)
* [blame on certain range](#blame-on-certain-range)
* [Show a Git logical variable.](#show-a-git-logical-variable)
* [Preformatted patch file.](#preformatted-patch-file)
* [Get the repo name.](#get-the-repo-name)
* [logs between date range](#logs-between-date-range)
* [Exclude author from logs](#exclude-author-from-logs)
* [Generates a summary of pending changes](#generates-a-summary-of-pending-changes)
* [List references in a remote repository](#list-references-in-a-remote-repository)
* [Backup untracked files.](#backup-untracked-files)
* [List all git aliases](#list-all-git-aliases)
* [Show git status short](#show-git-status-short)
* [Checkout a commit prior to a day ago](#checkout-a-commit-prior-to-a-day-ago)
* [Push the current branch to the same name on the remote repository](#push-the-current-branch-to-the-same-name-on-the-remote-repository)
* [Push a new local branch to remote repository and track](#push-a-new-local-branch-to-remote-repository-and-track)
* [Change a branch base](#change-a-branch-base)
* [Use SSH instead of HTTPs for remotes](#use-ssh-instead-of-https-for-remotes)
* [Update a submodule to the latest commit](#update-a-submodule-to-the-latest-commit)
* [Prevent auto replacing LF with CRLF](#prevent-auto-replacing-lf-with-crlf)

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end toc -->

<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->

## Everyday Git in Twenty Commands or so

```sh
git help everyday
```

## Show Helpful Guides that come with Git

```sh
git help -g
```

## Search Change by Content

```sh
git log -S'<a term in the source>'
```

## Show Changes over time for Specific File

```sh
git log -p <file_name>
```

## Remove Sensitive Data from History, after a Push

```sh
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch <path-to-your-file>' --prune-empty --tag-name-filter cat -- --all && git push origin --force --all
```

## Sync with Remote, Overwrite Local Changes

```sh
git fetch origin && git reset --hard origin/master && git clean -f -d
```

## List of All Files till a Commit

```sh
git ls-tree --name-only -r <commit-ish>
```

## Git Reset First Commit

```sh
git update-ref -d HEAD
```

## Reset: Preserve Uncommitted Local Changes

```sh
git reset --keep <commit>
```

## List All the Conflicted Files

```sh
git diff --name-only --diff-filter=U
```

## List of All Files Changed in a Commit

```sh
git diff-tree --no-commit-id --name-only -r <commit-ish>
```

## Unstaged Changes since Last Commit

```sh
git diff
```

## Changes Staged for Commit

```sh
git diff --cached
```

__Alternatives:__

```sh
git diff --staged
```

## Show both Staged and Unstaged Changes

```sh
git diff HEAD
```

## List All Branches that Are Already Merged into Master

```sh
git branch --merged master
```

## Quickly Switch to the Previous Branch

```sh
git checkout -
```

__Alternatives:__

```sh
git checkout @{-1}
```

## Remove Branches that Have Already Been Merged with Master

```sh
git branch --merged master | grep -v '^\*' | xargs -n 1 git branch -d
```

__Alternatives:__

```sh
git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d # will not delete master if master is not checked out
```

## List All Branches and Their Upstreams, as well as Last Commit on Branch

```sh
git branch -vv
```

## Track upstream Branch

```sh
git branch -u origin/mybranch
```

## Delete Local Branch

```sh
git branch -d <local_branchname>
```

## Delete Remote Branch

```sh
git push origin --delete <remote_branchname>
```

__Alternatives:__

```sh
git push origin :<remote_branchname>
```

```sh
git branch -dr <remote/branch>
```

## Create Local Tag

```sh
git tag <tag-name>
```

## Delete Local Tag

```sh
git tag -d <tag-name>
```

## Delete Remote Tag

```sh
git push origin :refs/tags/<tag-name>
```

## Undo Local Changes with the Content in index(staging)

```sh
git checkout -- <file_name>
```

## Revert: Undo a Commit by Creating a New Commit

```sh
git revert <commit-ish>
```

## Reset: Discard Commits, Advised for Private Branch

```sh
git reset <commit-ish>
```

## Reword the Previous Commit Message

```sh
git commit -v --amend
```

## See Commit History for just the Current Branch

```sh
git cherry -v master
```

## Amend Author.

```sh
git commit --amend --author='Author Name <email@address.com>'
```

## Reset Author, after Author Has Been Changed in the Global Config.

```sh
git commit --amend --reset-author --no-edit
```

## Changing a Remote's URL

```sh
git remote set-url origin <URL>
```

## Get List of All Remote References

```sh
git remote
```

__Alternatives:__

```sh
git remote show
```

## Get List of All Local and Remote Branches

```sh
git branch -a
```

## Get only Remote Branches

```sh
git branch -r
```

## Stage Parts of a Changed File, instead of the Entire File

```sh
git add -p
```

## Get Git Bash Completion

```sh
curl -L http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```

## What Changed since Two Weeks?

```sh
git log --no-merges --raw --since='2 weeks ago'
```

__Alternatives:__

```sh
git whatchanged --since='2 weeks ago'
```

## See All Commits Made since Forking from Master

```sh
git log --no-merges --stat --reverse master..
```

## Pick Commits across Branches Using Cherry-pick

```sh
git checkout <branch-name> && git cherry-pick <commit-ish>
```

## Find out Branches Containing Commit-hash

```sh
git branch -a --contains <commit-ish>
```

__Alternatives:__

```sh
git branch --contains <commit-ish>
```

## Git Aliases

```sh
git config --global alias.<handle> <command> 
git config --global alias.st status
```

## Saving Current State of Tracked Files without Commiting

```sh
git stash
```

__Alternatives:__

```sh
git stash push
```

## Saving Current State of Unstaged Changes to Tracked Files

```sh
git stash -k
```

__Alternatives:__

```sh
git stash --keep-index
```

```sh
git stash push --keep-index
```

## Saving Current State including Untracked Files

```sh
git stash -u
```

__Alternatives:__

```sh
git stash push -u
```

```sh
git stash push --include-untracked
```

## Saving Current State with Message

```sh
git stash push -m <message>
```

__Alternatives:__

```sh
git stash push --message <message>
```

## Saving Current State of All Files (ignored, Untracked, and tracked)

```sh
git stash -a
```

__Alternatives:__

```sh
git stash --all
```

```sh
git stash push --all
```

## Show List of All Saved Stashes

```sh
git stash list
```

## Show the Contents of Any Stash in Patch Form

```sh
git stash show -p <stash@{n}>
```

## Apply Any Stash without Deleting from the Stashed List

```sh
git stash apply <stash@{n}>
```

## Apply Last Stashed State and Delete it from Stashed List

```sh
git stash pop
```

__Alternatives:__

```sh
git stash apply stash@{0} && git stash drop stash@{0}
```

## Delete All Stored Stashes

```sh
git stash clear
```

__Alternatives:__

```sh
git stash drop <stash@{n}>
```

## Grab a Single File from a Stash

```sh
git checkout <stash@{n}> -- <file_path>
```

__Alternatives:__

```sh
git checkout stash@{0} -- <file_path>
```

## Show All Tracked Files

```sh
git ls-files -t
```

## Show All Untracked Files

```sh
git ls-files --others
```

## Show All Ignored Files

```sh
git ls-files --others -i --exclude-standard
```

## Create New Working Tree from a Repository (git 2.5)

```sh
git worktree add -b <branch-name> <path> <start-point>
```

## Create New Working Tree from HEAD State

```sh
git worktree add --detach <path> HEAD
```

## Untrack Files without Deleting

```sh
git rm --cached <file_path>
```

__Alternatives:__

```sh
git rm --cached -r <directory_path>
```

## Before Deleting Untracked files/directory, Do a Dry Run to Get the List of These files/directories

```sh
git clean -n
```

## Forcefully Remove Untracked Files

```sh
git clean -f
```

## Forcefully Remove Untracked Directory

```sh
git clean -f -d
```

## Update All the Submodules

```sh
git submodule foreach git pull
```

__Alternatives:__

```sh
git submodule update --init --recursive
```

```sh
git submodule update --remote
```

## Show All Commits in the Current Branch yet to Be Merged to Master

```sh
git cherry -v master
```

__Alternatives:__

```sh
git cherry -v master <branch-to-be-merged>
```

## Rename a Branch

```sh
git branch -m <new-branch-name>
```

__Alternatives:__

```sh
git branch -m [<old-branch-name>] <new-branch-name>
```

## Rebases 'feature' to 'master' and Merges it in to Master

```sh
git rebase master feature && git checkout master && git merge -
```

## Archive the `master` Branch

```sh
git archive master --format=zip --output=master.zip
```

## Modify Previous Commit without Modifying the Commit Message

```sh
git add --all && git commit --amend --no-edit
```

## Prunes References to Remove Branches that Have Been Deleted in the Remote.

```sh
git fetch -p
```

__Alternatives:__

```sh
git remote prune origin
```

## Delete Local Branches that Has Been Squash and Merged in the Remote.

```sh
git branch -vv | grep ': gone]' | awk '{print <!-- @doxie.inject start -->}' | xargs git branch -D
```

## Retrieve the Commit Hash of the Initial Revision.

```sh
 git rev-list --reverse HEAD | head -1
```

__Alternatives:__

```sh
git rev-list --max-parents=0 HEAD
```

```sh
git log --pretty=oneline | tail -1 | cut -c 1-40
```

```sh
git log --pretty=oneline --reverse | head -1 | cut -c 1-40
```

## Visualize the Version Tree.

```sh
git log --pretty=oneline --graph --decorate --all
```

__Alternatives:__

```sh
gitk --all
```

```sh
git log --graph --pretty=format:'%C(auto) %h | %s | %an | %ar%d'
```

## Visualize the Tree including Commits that Are only Referenced from Reflogs

```sh
git log --graph --decorate --oneline $(git rev-list --walk-reflogs --all)
```

## Deploying Git Tracked Subfolder to Gh-pages

```sh
git subtree push --prefix subfolder_name origin gh-pages
```

## Adding a Project to Repo Using Subtree

```sh
git subtree add --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

## Get Latest Changes in Your Repo for a Linked Project Using Subtree

```sh
git subtree pull --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

## Export a Branch with History to a File.

```sh
git bundle create <file> <branch-name>
```

## Import from a Bundle

```sh
git clone repo.bundle <repo-dir> -b <branch-name>
```

## Get the name of Current Branch.

```sh
git rev-parse --abbrev-ref HEAD
```

## Ignore One File on Commit (e.g. Changelog).

```sh
git update-index --assume-unchanged Changelog; git commit -a; git update-index --no-assume-unchanged Changelog
```

## Stash Changes before Rebasing

```sh
git rebase --autostash
```

## Fetch Pull Request by ID to a Local Branch

```sh
git fetch origin pull/<id>/head:<branch-name>
```

__Alternatives:__

```sh
git pull origin pull/<id>/head:<branch-name>
```

## Show the Most Recent Tag on the Current Branch.

```sh
git describe --tags --abbrev=0
```

## Show Inline Word Diff.

```sh
git diff --word-diff
```

## Show Changes Using Common Diff Tools.

```sh
git difftool [-t <tool>] <commit1> <commit2> <path>
```

## Don’t Consider Changes for Tracked File.

```sh
git update-index --assume-unchanged <file_name>
```

## Undo Assume-unchanged.

```sh
git update-index --no-assume-unchanged <file_name>
```

## Clean the Files from `.gitignore`.

```sh
git clean -X -f
```

## Restore Deleted File.

```sh
git checkout <deleting_commit> -- <file_path>
```

## Restore File to a Specific Commit-hash

```sh
git checkout <commit-ish> -- <file_path>
```

## Always Rebase instead of Merge on Pull.

```sh
git config --global pull.rebase true
```

__Alternatives:__

```sh
#git < 1.7.9
git config --global branch.autosetuprebase always
```

## List All the Alias and Configs.

```sh
git config --list
```

## Make Git case Sensitive.

```sh
git config --global core.ignorecase false
```

## Add Custom Editors.

```sh
git config --global core.editor '$EDITOR'
```

## Auto Correct Typos.

```sh
git config --global help.autocorrect 1
```

## Check if the Change Was a part of a Release.

```sh
git name-rev --name-only <SHA-1>
```

## Dry Run. (any Command that Supports Dry-run Flag Should do.)

```sh
git clean -fd --dry-run
```

## Marks Your Commit as a Fix of a Previous Commit.

```sh
git commit --fixup <SHA-1>
```

## Squash Fixup Commits Normal Commits.

```sh
git rebase -i --autosquash
```

## Skip Staging Area during Commit.

```sh
git commit --only <file_path>
```

## Interactive Staging.

```sh
git add -i
```

## List Ignored Files.

```sh
git check-ignore *
```

## Status of Ignored Files.

```sh
git status --ignored
```

## Commits in Branch1 that Are not in Branch2

```sh
git log Branch1 ^Branch2
```

## List N Last Commits

```sh
git log -<n>
```

__Alternatives:__

```sh
git log -n <n>
```

## Reuse Recorded Resolution, Record and Reuse Previous Conflicts Resolutions.

```sh
git config --global rerere.enabled 1
```

## Open All Conflicted Files in an Editor.

```sh
git diff --name-only | uniq | xargs $EDITOR
```

## Count Unpacked Number of Objects and Their Disk Consumption.

```sh
git count-objects --human-readable
```

## Prune All Unreachable Objects from the Object Database.

```sh
git gc --prune=now --aggressive
```

## Instantly Browse Your Working Repository in Gitweb.

```sh
git instaweb [--local] [--httpd=<httpd>] [--port=<port>] [--browser=<browser>]
```

## View the GPG Signatures in the Commit Log

```sh
git log --show-signature
```

## Remove Entry in the Global Config.

```sh
git config --global --unset <entry-name>
```

## Checkout a New Branch without Any History

```sh
git checkout --orphan <branch_name>
```

## Extract File from Another Branch.

```sh
git show <branch_name>:<file_name>
```

## List only the Root and Merge Commits.

```sh
git log --first-parent
```

## Change Previous Two Commits with an Interactive Rebase.

```sh
git rebase --interactive HEAD~2
```

## List All Branch is WIP

```sh
git checkout master && git branch --no-merged
```

## Find Guilty with Binary search

```sh
git bisect start                    # Search start 
git bisect bad                      # Set point to bad commit 
git bisect good v2.6.13-rc2         # Set point to good commit|tag 
git bisect bad                      # Say current state is bad 
git bisect good                     # Say current state is good 
git bisect reset                    # Finish search 

```

## Bypass Pre-commit and Commit-msg Githooks

```sh
git commit --no-verify
```

## List Commits and Changes to a Specific File (even through renaming)

```sh
git log --follow -p -- <file_path>
```

## Clone a Single Branch

```sh
git clone -b <branch-name> --single-branch https://github.com/user/repo.git
```

## Create and Switch New Branch

```sh
git checkout -b <branch-name>
```

__Alternatives:__

```sh
git branch <branch-name> && git checkout <branch-name>
```

```sh
git switch -c <branch-name>
```

## Ignore File Mode Changes on Commits

```sh
git config core.fileMode false
```

## Turn off Git Colored Terminal Output

```sh
git config --global color.ui false
```

## Specific Color Settings

```sh
git config --global <specific command e.g branch, diff> <true, false or always>
```

## Show All Local Branches Ordered by Recent Commits

```sh
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads/
```

## Find Lines Matching the Pattern (regex or string) in Tracked Files

```sh
git grep --heading --line-number 'foo bar'
```

## Clone a Shallow Copy of a Repository

```sh
git clone https://github.com/user/repo.git --depth 1
```

## Search Commit Log across All Branches for given Text

```sh
git log --all --grep='<given-text>'
```

## Get First Commit in a Branch (from master)

```sh
git log --oneline master..<branch-name> | tail -1
```

__Alternatives:__

```sh
git log --reverse master..<branch-name> | head -6
```

## Unstaging Staged File

```sh
git reset HEAD <file-name>
```

## Force Push to Remote Repository

```sh
git push -f <remote-name> <branch-name>
```

## Adding Remote name

```sh
git remote add <remote-nickname> <remote-url>
```

## List All Currently Configured Remotes

```sh
git remote -v
```

## Show the Author, time and Last Revision Made to Each line of a given File

```sh
git blame <file-name>
```

## Group Commits by Authors and Title

```sh
git shortlog
```

## Forced Push but Still Ensure You Don't Overwrite Other's Work

```sh
git push --force-with-lease <remote-name> <branch-name>
```

## Show how Many Lines Does an Author Contribute

```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | gawk '{ add += <!-- @doxie.inject start -->; subs += <!-- @doxie.inject end -->; loc += <!-- @doxie.inject start --> - <!-- @doxie.inject end --> } END { printf "added lines: %s removed lines: %s total lines: %s
", add, subs, loc }' -
```

__Alternatives:__

```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | awk '{ add += <!-- @doxie.inject start -->; subs += <!-- @doxie.inject end -->; loc += <!-- @doxie.inject start --> - <!-- @doxie.inject end --> } END { printf "added lines: %s, removed lines: %s, total lines: %s
", add, subs, loc }' - # on Mac OSX
```

## Revert: Reverting an Entire Merge

```sh
git revert -m 1 <commit-ish>
```

## Number of Commits in a Branch

```sh
git rev-list --count <branch-name>
```

## Alias: Git Undo

```sh
git config --global alias.undo '!f() { git reset --hard $(git rev-parse --abbrev-ref HEAD)@{${1-1}}; }; f'
```

## Add Object Notes

```sh
git notes add -m 'Note on the previous commit....'
```

## Show All the Git-notes

```sh
git log --show-notes='*'
```

## Apply Commit from Another Repository

```sh
git --git-dir=<source-dir>/.git format-patch -k -1 --stdout <SHA1> | git am -3 -k
```

## Specific Fetch Reference

```sh
git fetch origin master:refs/remotes/origin/mymaster
```

## Find Common Ancestor of Two Branches

```sh
git merge-base <branch-name> <other-branch-name>
```

## List Unpushed Git Commits

```sh
git log --branches --not --remotes
```

__Alternatives:__

```sh
git log @{u}..
```

```sh
git cherry -v
```

## Add Everything, but Whitespace Changes

```sh
git diff --ignore-all-space | git apply --cached
```

## Edit [local/global] Git Config

```sh
git config [--global] --edit
```

## Blame on Certain Range

```sh
git blame -L <start>,<end>
```

## Show a Git Logical Variable.

```sh
git var -l | <variable>
```

## Preformatted Patch File.

```sh
git format-patch -M upstream..topic
```

## Get the Repo Name.

```sh
git rev-parse --show-toplevel
```

## Logs between Date Range

```sh
git log --since='FEB 1 2017' --until='FEB 14 2017'
```

## Exclude Author from Logs

```sh
git log --perl-regexp --author='^((?!excluded-author-regex).*)

```

## Generates a Summary of pending Changes

```sh
git request-pull v1.0 https://git.ko.xz/project master:for-linus
```

## List References in a Remote Repository

```sh
git ls-remote git://git.kernel.org/pub/scm/git/git.git
```

## Backup Untracked Files.

```sh
git ls-files --others -i --exclude-standard | xargs zip untracked.zip
```

## List All Git Aliases

```sh
git config -l | grep alias | sed 's/^alias\.//g'
```

__Alternatives:__

```sh
git config -l | grep alias | cut -d '.' -f 2
```

## Show Git Status short

```sh
git status --short --branch
```

## Checkout a Commit prior to a Day ago

```sh
git checkout master@{yesterday}
```

## Push the Current Branch to the Same name on the Remote Repository

```sh
git push origin HEAD
```

## Push a New Local Branch to Remote Repository and Track

```sh
git push -u origin <branch_name>
```

## Change a Branch Base

```sh
git rebase --onto <new_base> <old_base>
```

## Use SSH instead of HTTPs for Remotes

```sh
git config --global url.'git@github.com:'.insteadOf 'https://github.com/'
```

## Update a Submodule to the Latest Commit

```sh
cd <path-to-submodule>
git pull origin <branch>
cd <root-of-your-main-project>
git```## Prevent Auto Replacing LF with CRLF

```sh
git config --global core.autocrlf false
```

