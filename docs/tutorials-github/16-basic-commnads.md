---
id: git-basic-commands
title: Git Command Line Interface (CLI)
sidebar_position: 1
description: TBD
---


## Git cheat sheet

This Git cheat sheet saves you time when you just can't remember what a command is or don't want to use git help in the command line. It is hard to memorize all the important Git commands by heart, so print this out or save it to your desktop to resort to when you get stuck. Source: [Git cheat sheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)

You can download it using this [link](../../static/files/Atlassian-Git-Cheatsheet.pdf).

### Basic Git commands

To use Git, developers use specific commands to copy, create, change, and combine code. These commands can be executed directly from the command line or by using an application like GitHub. Here are some common commands for using Git:

### git init

[`git init`](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init) initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.

### git clone

[`git clone`](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) creates a local copy of a project that already exists remotely. The clone includes all the project's files, history, and branches.

### git add

[`git add`](https://www.atlassian.com/git/tutorials/saving-changes) stages a change. Git tracks changes to a developer's codebase, but it's necessary to stage and take a snapshot of the changes to include them in the project's history.

### git commit

[`git commit`](https://www.atlassian.com/git/tutorials/saving-changes/git-commit) saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions like taking a photo. Anything that's been staged with `git add` will become a part of the snapshot with `git commit`.

### git status

[`git status`](https://www.atlassian.com/git/tutorials/inspecting-a-repository) is used to inspect repositories. It shows the status of changes as untracked, modified, or staged.

### git branch

[`git branch`](https://www.atlassian.com/git/tutorials/using-branches) shows the branches being worked on locally.

### git merge

[`git merge`](https://www.atlassian.com/git/tutorials/using-branches/git-merge) merges lines of development together. This command is typically used to combine changes made on two distinct branches.

### git pull

[`git pull`](https://www.atlassian.com/git/tutorials/syncing/git-pull) updates the local line of development with updates from its remote counterpart. Developers use this command if a teammate has made commits to a branch on a remote, and they would like to reflect those changes in their local environment.

### git push

[`git push`](https://www.atlassian.com/git/tutorials/syncing/git-push) updates the remote repository with any commits made locally to a branch.

For more information, see the [full reference guide to Git commands](https://git-scm.com/docs).

### Example: Contribute to an existing repository

```bash
# download a repository on GitHub to our machine
# Replace `owner/repo` with the owner and name of the repository to clone
git clone https://github.com/owner/repo.git

# change into the `repo` directory
cd repo

# create a new branch to store any new changes
git branch my-branch

# switch to that branch (line of development)
git checkout my-branch

# make changes, for example, edit `file1.md` and `file2.md` using the text editor

# stage the changed files
git add file1.md file2.md

# take a snapshot of the staging area (anything that's been added)
git commit -m "my snapshot"

# push changes to github
git push --set-upstream origin my-branch
```

### Example: contribute to an existing branch on GitHub

This example assumes that you already have a project called `repo` on the machine and that a new branch has been pushed to GitHub since the last time changes were made locally.

```bash
# change into the `repo` directory
cd repo

# update all remote tracking branches, and the currently checked out branch
git pull

# change into the existing branch called `feature-a`
git checkout feature-a

# make changes, for example, edit `file1.md` using the text editor

# stage the changed file
git add file1.md

# take a snapshot of the staging area
git commit -m "edit file1"

# push changes to github
git push
```

## Sources

1. <cite>[GitHub Basic writing and formatting syntax][1]</cite>
2. <cite>[Git cheat sheet][2]</cite>

[1]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
[2]: https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet