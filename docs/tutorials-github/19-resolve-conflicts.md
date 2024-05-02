---
id: conflict-resolution
title: Conflict Resolution Strategies 
sidebar_position: 1
description: TBD
---

## Git Merge conflicts

Version control systems are all about managing contributions between multiple distributed authors ( usually developers ). Sometimes multiple developers may try to edit the same content. If Developer A tries to edit code that Developer B is editing a conflict may occur. Conflict Resolution is crucial for collaborative software development, allowing multiple developers to work on the same codebase simultaneously without chaos reigning supreme.

By working in isolated branches, developers can focus on their tasks without stepping on each other's toes. And when it's time to integrate their work, Git's `merge` command comes into play. It brings those separate branches together, reconciling any conflicting changes that may have occurred. This way, the final result is a cohesive blend of everyone's contributions.

Managing conflicts **gracefully** is a hallmark of a well-run version control system. It ensures smooth collaboration and minimizes headaches for developers.

## Types of merge conflicts

### 1. Git fails to start the merge

A merge will fail to start when Git sees there are changes in either the working directory or staging area of the current project. Git fails to start the merge because these pending changes could be written over by the commits that are being merged in. When this happens, it is not because of conflicts with other developer's, but conflicts with pending local changes. The local state will need to be stabilized using git stash, git checkout, git commit or git reset. A merge failure on start will output the following error message:

```bash
error: Entry '<fileName>' not uptodate. Cannot merge. (Changes in working directory)
```

### 2. Git fails during the merge

A failure DURING a merge indicates a conflict between the current local branch and the branch being merged. This indicates a conflict with another developers code. Git will do its best to merge the files but will leave things for you to resolve manually in the conflicted files. A mid-merge failure will output the following error message:

```bash
error: Entry '<fileName>' would be overwritten by merge. Cannot merge. (Changes in staging area)
```

## How to resolve merge conflicts?

Git always produces some descriptive output letting us know that a **CONFLICT** has occurred. Assume two contributors have worked on the same file `test.txt` and a conflict has occurred. You can gain further insight by running the `git` status command

```bash
$ git status
On branch main
You have unmerged paths.
(fix conflicts and run "git commit")
(use "git merge --abort" to abort the merge)

Unmerged paths:
(use "git add <file>..." to mark resolution)

both modified:   test.txt
```

The output from `git status` indicates that there are unmerged paths due to a conflict. The `test.text` file now appears in a modified state. Let's examine the file and see what is modified.

```bash
$ cat test.txt
<<<<<<< HEAD
this is some content to mess with
content to append
=======
totally different content to merge later
>>>>>>> new_branch_to_merge_later
```

Here you have used the cat command to put out the contents of the `test.txt` file. You can see some strange new additions

```bash
<<<<<<< HEAD
=======
>>>>>>> new_branch_to_merge_later
```

Think of these new lines as _conflict dividers_. The `=======` line is the **center** of the conflict. All the content between the `center` and the `<<<<<<< HEAD` line is content that exists in the current branch `main` which the `HEAD ref` is pointing to. Alternatively all content between the `center` and `>>>>>>> new_branch_to_merge_later` is content that is present in our merging branch.

### How to resolve merge conflicts using the command line?

The most direct way to resolve a merge conflict is to `edit` the conflicted file. Open the `test.txt` file in your favorite editor. For our example lets simply remove all the conflict dividers. The modified `test.txt` content should then look like:

```text
this is some content to mess with
content to append
totally different content to merge later
```

Once the file has been edited use `git add test.txt` to stage the new merged content. To finalize the merge create a new commit by executing:

```bash
git commit -m "merged and resolved the conflict in `test.txt`"
```

Git will see that the conflict has been resolved and creates a new merge commit to finalize the merge.

### Git commands that can help resolve merge conflicts

The `git status` command is in frequent use when a working with Git and during a merge it will help identify conflicted files.

```bash
git status
```

Passing the `--merge` argument to the `git log` command will produce a log with a list of commits that conflict between the merging branches.

```bash
git log --merge
```

The `git diff` helps find differences between states of a repository/files. This is useful in predicting and preventing merge conflicts.

```bash
git diff
```

Most useful for when git _fails to start a merge_ `git checkout` can be used for undoing changes to files, or for changing branches.

```bash
git checkout
```

The `git reset` can be used to undo changes to the working directory and staging area.

```bash
git reset --mixed
```

Most useful for wen git conflicts arise during a merge, executing `git merge` with the `--abort` option will exit from the merge process and return the branch to the state before the merge began.

```bash
git merge --abort
```

Git reset can be used during a merge conflict to reset conflicted files to a know good state

```bash
git reset
```

## Sources

1. [Git merge conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)