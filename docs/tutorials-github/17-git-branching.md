---
id: git-branching
title: Collaboration using Branches
sidebar_position: 1
description: TBD
---

## Git Branch

Git branches serve as pointers to specific snapshots of your codebase, allowing you to work on new features, fixes, or experiments without directly modifying the main codebase. By creating a new branch for each task or change, you isolate your work from the main branch (e.g., master), reducing the risk of introducing unstable or incomplete code into the production environment.

Branching also provides several benefits:

- **Isolation:** Each branch represents a separate line of development, allowing you to work on changes independently without interfering with other ongoing work or the stability of the main branch.
- **Collaboration:** Branches facilitate collaboration among team members by allowing them to work on different features or fixes simultaneously. Once a branch is complete, it can be reviewed and merged back into the main branch.
- **Experimentation:** Branches provide a safe space for experimentation and prototyping. You can create temporary branches to test new ideas, explore alternative solutions, or conduct performance optimizations without affecting the main codebase.
- **History Cleanup:** Before merging a branch into the main branch, you have the opportunity to clean up its commit history, ensuring that the commit log remains clean and meaningful. This helps maintain a clear and comprehensible history of changes over time.

[![Creating and merging branches in Git - Git Guides (2020)](https://img.youtube.com/vi/S2TUommS3O0/0.jpg)](https://www.youtube.com/watch?v=S2TUommS3O0)

## How it Works?

Learning Git branching is essential for effectively managing software development workflows and collaborating with others on projects. Here's a step-by-step guide to get started with Git branching:

1. **Understand the Basics:** Familiarize yourself with the basic concepts of Git, including repositories, commits, branches, and merges. Learn how to install Git on your system and set up a new Git repository for your project.
2. **Create a New Branch:** Use the git branch command to create a new branch in your Git repository. replace `<branch-name>`  with your branch name and run:

    ```bash
    git branch <branch-name>
    ```

3. **Switch to the New Branch:** Use the git checkout command to switch to the newly created branch. For example:

    ```bash
    git checkout <branch-name>
    ```

4. **Make Changes:** Make changes to your code in the new branch. You can add, modify, or delete files as needed to implement your new feature or fix.

5. **Commit Your Changes:** Use the git add and git commit commands to stage and commit your changes to the branch. For example:

    ```bash
    git add .
    git commit -m "Implemented new feature"
    ```

6. **Merge Branches:** Once you've completed your changes and tested them, you can merge the changes back into the main branch (e.g., master). First, switch to the target branch:

    ```bash
    git checkout main # or master
    ```

    Then, merge the feature branch into the main branch:

    ```bash
    git merge <branch-name>
    ```

7. **Resolve Conflicts (if any):** In case of conflicts between changes made in different branches, Git will prompt you to resolve them manually. Use a text editor to resolve conflicts, then add and commit the changes.
8. **Delete Branch:** After merging the changes, you can delete the feature branch using the -d option:

    ```bash
    git branch -d <branch-name>
    ```

9. **Explore Advanced Branching Workflows:** Git offers advanced branching workflows such as GitFlow and feature branching strategies. Explore these workflows to learn more about how to organize and manage branches in larger projects.
10. **Practice and Experiment:** The best way to learn Git branching is by practicing and experimenting with different branching scenarios. Create test repositories, experiment with branching and merging, and familiarize yourself with various Git commands and options.

## Example: create and contribute to a branch on GitHub

This example assumes that you already have a project called `repo` on the machine and that a new branch has been pushed to GitHub since the last time changes were made locally.

```bash
# download a repository on GitHub to our machine
# Replace `owner/repo` with the owner and name of the repository to clone
git clone https://github.com/owner/repo.git

# change into the `repo` directory
cd <your-repo-name>

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

## Sources

1. [Creating and merging branches in Git](https://docs.github.com/en/get-started/using-git/about-git#basic-git-commands)
2. [Basic Git commands](https://www.atlassian.com/git/tutorials/using-branches)
