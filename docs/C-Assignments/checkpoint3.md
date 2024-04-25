---
id: topic-file-4
title: Checkpoint3
sidebar_position: 2
description: TBD
---

# Instructions & Submission Requirements

_This page only contains assignment instructions and submission requirements. Make sure to check Seneca Learning Portal: Blackboard for due dates_.

## Objectives

In this Checkpoint we will accomplish the following objectives:

- Understanding advanced git workflows and working with remote
- Collaborating using Pull Request workflow through branching
- Working with GitHub Desktop to manage GitHub workflows
- Effective use of VSCode as IDE and GitHub Desktop for workflow management

## Important Notes

🔥 Make sure to use the **exact names** and follow the exact steps as this assignment will be automatically marked and if your work deviates from the instructions you will receive no marks.

🔥 You are not allowed to work from remote through browser. You must use local repo in your laptop and azure. You can use any **IDE** of your choice, though the preferred option in this course is Microsoft VS Code. Choose the tool you will use for your workflow management. You can use the GitHub Extension in VSCode or GitHub Desktop or simply the Git Bash CLI, which is always my preferred option.

🔥🔥 You can only do these steps once. If you try to repeat this step it will not produce the same results! Maybe you would want to create a `Checkpoint-dummy` and experiment some of the steps before trying to do them in your `Checkpoint3` folder for submission.

🔥🔥🔥 Do **NOT** run `git pull`, unless instructions says so. If you run `git pull` it will change the workflow and cannot complete this part correctly.

🔥🔥🔥 Do **NOT** add your log files as you go, just do it after you finish all your work. The way this assignment works you will `reset` your commit `HEAD` a couple of times and your files will be deleted, so just add `logs` at the end before submission.

---

## ✨ Part A - Manage Conflicts - Overwrite Remote Changes

Work from local VS Code. Make sure you are working in the folder specific to this assignment. In your `CSP451-Azure-Projectfolder` run command `ls -la` and make sure you can see the `.git` hidden folder that contains all the git workflow information. Make a directory `Checkpoint3`. In this directory create a file `README.me`. Add `# Checkpoint3 Submission` header to `README.md`

- In your `Checkpoint3` folder create a subfolder called `conflict-resolution` and copy all files from [conflict-resolution](./conflict-resolution/) into your folder
- Navigate through the files and understand what it does, you will need to modify the content later on in this assignment. Install `HTML Preview` package form VSCode marketplace to preview the `index.html` file.
- Push your changes to remote: `add`, `commit`, `push` your work with comment _"adds conflict-resolution folder"_
- You need to modify your remote GitHub repo at this step. From your browser go to your repo and find the file `conflict-resolution/index.html` and find below line in it:

```html
<div id="about" style="color:blue">
```

- In this line, modify style color from _blue_ to _**red**_. Only replace _blue_ with _red_ and commit changes with comment _"modifies style color in index.html to red"_.
- In order to create a conflict, modify the file `conflict-resolution/index.html` in VSCode (local repo). Edit the same line and update color to _**green**_
- Commit your changes to local repo: `add`, `commit` your work with comment _"modifies style color in index.html to green"_. As you expect, if you try to run `git push` it will throw an error and will not synchronize your local changes with remote.
- **Create a `logs` folder OUTSIDE of your `CSP451-Azure-Project` folder in `<path-to-logs>/logs/`. After you complete all steps in this assignment, you will submit it. For now, just keep it outside of the repo. Follow later instructions for its submission**. I would use `<path-to-logs>/logs/` outside the repo and move it to `Checkpoint3` when I am done with all the parts of this assignment
- Redirect the error from `git push` into `<path-to-logs>/logs/part1-conflict-error.log` using `git push -v > <path-to-logs>/logs/part1-conflict-error.log 2>&1` command. Submit the log file in GitHub in `<path-to-logs>/logs` folder. Embed the content of this file as part of your submission, as well.
- Our strategy to resolve this conflict is to overwrite remote changes with local changes using `git push --force origin <branch-name>` command. Make sure to direct the output to a file `part1-conflict-overwrite.log` with below command:

```bash
git push --force origin main -v > <path-to-logs>/logs/part1-conflict-overwrite.log 2>&1
```

- **You can only do this once, if you try to repeat this step it will not produce same results!** Submit the log file in GitHub in `<path-to-logs>/logs` folder. Embed the content of this file as part of your submission, as well.

---

## ✨ Part B - Manage Conflicts - Reset Local Commit Head

If you have done Part1 correctly, you will have below line both in remote repo and in VSCode (local repo):

```html
<div id="about" style="color:green">
```

- Modify your remote GitHub repo and modify style color from _red_ to _**maroon**_. You will only need to replace _red_ with _maroon_ and commit changes with comment _"modifies style color in index.html to maroon"_.
- In order to create a conflict, modify the file `conflict-resolution/index.html` in VSCode (local repo). Edit same line of code and update the color to _**darkolivegreen**_
- Commit your changes to local repo: `add`, `commit` your work with comment _"modifies style color in index.html to darkolivegreen"_. As you expect, if you try running `git push` it will throw an error and will not synchronize your local changes with remote. Redirect the error from `git push` into `<path-to-logs>logs/part2-conflict-error.log`. Submit the log file in GitHub in `<path-to-logs>/logs` folder. Embed the content of this file as part of your submission, as well.

- Take a look at `logs/part2-conflict-error.log` file. It would contain below lines:

```bash
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
```

- If you do not see these lines, then you have missed some steps.
- Let's try to follow the suggestion and run a `git pull`, while redirecting the output to `part2-pull-error.log` with `git pull -v > <path-to-logs>/logs/part2-pull-error.log 2>&1` command. Submit the log file in GitHub in`<path-to-logs>/logs` folder. Embed the content of this file as part of your submission, as well.
- In this part, our strategy to resolve this conflict is to **RESET** commit head at local repo using `git reset --hard HEAD~1`. Make sure to direct the output to a file `part2-reset-head.log` with below command.

```bash
git reset --hard HEAD~1 > <path-to-logs>/logs/part2-reset-head.log 2>&1
```

- **You can only do this once, if you try to repeat this step it will not produce same results!** Submit the log file in GitHub in `<path-to-logs>/logs` folder. Embed the content of this file as part of your submission, as well.
- The above step reset then commit head back one commit. Think of it like taking the time machine back one commit. Add the latest log record to the file to demonstrate this point, using `git log -n 1 >> <path-to-logs>/logs/part2-reset-head.log 2>&1` command. Take note of `>>`, when you have a single `>` it means `redirect + overwrite` but when you have double `>>` it means `redirect + append`.
- ⚠️ Now that you have taken the `HEAD` back you are ready to overwrite your local changes. You do this by `git pull`. Let's make sure you redirect the output to `part2-pull-success.log` with below command:

```bash
git pull -v > <path-to-logs>/logs/part2-pull-success.log 2>&1
```

- Do not miss the last step above, if you miss the last `git pull` you can not complete Part C.
  
---

## ✨ Part C - Manage Conflicts - Merge Editor

Start from remote GitHub repo (in browser).

- ⚠️ **Start with creating a new branch in remote** called `feat-body-text`. Make sure you are working in your new branch. Search the `conflict-resolution/index.html` file, and find below line

```html
<p>Replace with your paragraphs</p>
```

Replace it with this line:

```html
<p>Merge conflicts are inevitable. Learn to deal with them.</p>
```

- Commit changes with comment _"adds a paragraph to index.html"_.
- In order to create a conflict, modify the file `conflict-resolution/index.html` in VSCode (local repo)
- Update your name and email in `<footer>` section, change `xxx` with your name and email:

```html
<footer>
  <p>Author: xxx xxx</p>
  <p><a href="mailto:xxx@myseneca.ca"></a>xxx@myseneca.ca</p>
  <p><a href="https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts">Git Merge Conflicts</a></p>
  </footer>
</html>
```

- Replace the text paragraph `<p>Replace with your paragraphs</p>` with:

```html
 <p>This is confusing! I'm lost 😕</p>
```

- Commit your changes to local repo: `add`, `commit` your work with comment _"updates contact in index.html"_. Confirm that you can successfully synchronize your local changes with remote in `main` branch using `git push`. This should not throw any errors as you, since you have done your remote changes in a branch and not `main`. So let's create a conflict by running below command that redirects output to `part3-pull-conflict.log` file.

```bash
git pull origin feat-body-text -v > <path-to-logs>/logs/part3-pull-conflict.log 2>&1
```

- **You can only do this once, if you try to repeat this step it will not produce same results!** Submit the log file in GitHub in `<path-to-logs>/logs` folder. Embed the content of this file as part of your submission, as well.
- Open the `index.html` file in VSCode, if it is not open and check it. If you have the correct VSCode settings, the editor will show the conflict. It would look somewhat like below image:

<img src="./images/conflict-merge.jpg"
     alt="conflict Merge"
     title="Conflict Merge"
     style="float: left; margin-right: 10px;" />

- Click on `Resolve in Merge Editor` and again if your VSCode extensions are properly installed, it should open a merge editor page that looks somewhat like below:

<img src="./images/conflict-merge-diff.jpg"
     alt="conflict Merge Diff"
     title="Conflict Merge Editor"
     style="float: left; margin-right: 10px;" />

- In the top left find `Accept Incoming` and click on it and then find `Accept Current` and click on it, both are shown in red circles in above image.
- Once you have accepted both the changes, click the `Complete Merge` button. This will merge both incoming and local changes into your file. You could choose to ignore both or first accept local and then incoming. Remember that you will always control how this workflow will be implemented.
- Run a `git status` command. If you have followed all steps correctly it will indicate that you have changes to be committed. Redirect the output to a file using `git status > <path-to-logs>/logs/part3-status.log`. Then `commit` your changes in `main` branch with comment _"commits merged index.html to local repo"_.
- ⚠️ Follow by a `git push` to `main` branch. Then go to remote and make sure you will see both the paragraphs in the `index.html`. It should like below. Add a screenshot in your submission.

<img src="./images/conflict-merge-final.jpg"
     alt="conflict Merge Final"
     style="float: left; margin-right: 10px;" />

---

## ✨ Part D - Collaboration - Creating Pull Request

You learned in class that the `Pull Request` workflow requires proper planning and strictly following the steps that are required by your GitHub admin team. In here we will follow steps from class presentation:

- Start from VSCode (local repo) and make sure the working tree is clean. If you have `untracked files` or your `commit` is behind, make sure to do the needful and clean your working tree. Run `git status` and make sure the output looks like this:

```log
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

- Create a branch `feat-learn-markdown` and checkout to it, using `git checkout -b feat-learn-markdown`.
- Working in this branch create a directory called `learn-markdown`.
- Copy [./learn-markdown/README.md](./learn-markdown/README.md) into your folder. Study this file and learn how to collapse a block in markdown
- Push your changes to remote: `add`, `commit`, `push` your work with comment _"adds learn-markdown/README.md"_.
- You will need to create the upstream using `git push --set-upstream origin feat-learn-markdown`.
- Check your remote in browser.
- Create a `Pull Request` with proper commit comment and message body.
- **Do not use me as reviewer, it will spam my mailbox, and you will receive zero mark for this assignment**. You can act as your own viewer.
- Send the review request to yourself.
- Act as a reviewer and make a comment that one example of `collapsed section` is enough. Suggest that the section under `### Example Two: Collapsed Section with Python Code` can be deleted.
- Continue to work on `learn-markdown/README.md` in the`feat-learn-markdown` branch from VSCode (local repo) and delete the section the reviewer has asked.
- Push your changes to remote: `add`, `commit`, `push` your work with comment _"updates to remove Example Two"_.
- Go back to your `Pull Request` in browser and send another review request to yourself with details of changes done.
- Act as your reviewer and merge and approve the `Pull Request`
- Take a screenshot of your `Pull Request` summary and add it as Part D submission in your `README.md`

## GitHub Submission Instructions

> [!NOTE]  
> Remember you can not use GitHub portal, unless instruction specifically asks for it.

> [!TIP]
> Experiment with dummy branch and dummy **Pull Request** on your own before doing this assignment

> [!IMPORTANT]  
> Do **NOT** run `git pull`, unless instructions says so

> [!WARNING]  
> Do **NOT** add your log files inside your repo for Part A/B. Create a logs folder outside your **Repo**

> [!CAUTION]
> Follow the **exact names** and the exact steps.

In your "CSP451-Azure-Project" repository make a directory `Checkpoint3`. In this directory create a file `README.me`. **Do not to copy / paste content from Instruction in your `README.md`**. This work must be your authentic genuine work. You may use other resources as reference, but `README.md` that will be considered for your marking must be your genuine authentic work.

Add below lines to `README.md` and update with your details

```markdown
# Checkpoint3 Submission

- **COURSE INFORMATION: xxx**
- **STUDENT’S NAME: xxx**
- **STUDENT'S NUMBER: xxx**
- **GITHUB USER ID: xxx**
- **TEACHER’S NAME: xxx**
```

Add a table of contents sections with headers showing your specific headers

```markdown
### Table of Contents
1. [Part A - Manage Conflicts - Overwrite Remote Changes](#header1)
2. [Part B - Manage Conflicts - Reset Local Commit Head](#header2)
3. [Part C - Manage Conflicts - Merge Editor](#header3)
4. [Part D - Collaboration - Creating Pull Request](#header4)
```

You must then add below content into your `README.md`:

1. Part A - Manage Conflicts - Overwrite Remote Changes: Follow the instructions and submit all files, and embed logs when asked in your `READMe.md`. What is the color of the text after you forcefully overwrite remote with local changes?
2. Part B - Manage Conflicts - Reset Local Commit Head: Follow the instructions and submit all files, and embed logs when asked in your `READMe.md`. What is the color of the text after you forcefully overwrite remote with local changes?
3. Part C - Manage Conflicts - Merge Editor: Follow the instructions and submit all files, and add screenshots asked in your `READMe.md`.
4. Part D - Collaboration - Creating Pull Request: Follow the instructions and submit all files, and add screenshots asked in your `READMe.md`.

⚠️ Copy your `<path-to-log>/logs/` to `Checkpoint3/` and push to remote, make sure your `logs` are properly submitted in GitHub.

## Blackboard Submission Instructions

You need to submit below in Blackboard, follow the exact submission order::

1. A Hyperlink to your Checkpoint3. If your link does not open to `CSP451-Azure-Project/Checkpoint3` where I can see the `README.md`, you will receive no marks
2. Your `README.md` file
3. A single pdf file with title `CP3-student number.pdf`. If your file is not `.pdf` I will not mark it

In your 'pdf' file include below information:

1. A link to your GitHub repository root folder
2. A link to your `Checkpoint3` folder that contains your `README.md` and all other files
3. A screenshot of your `Checkpoint3/README.md` commit history folder
4. Details of your last commit number to `Checkpoint3/README.md`
5. Log record of your last commit from local repository using `git log -n 1` command

**Take note:**

- Your report file format and naming must follow above instruction, **no marks** will be given to submissions that do not follow the above instructions.
- Do not copy anything from the course notes or references in your submission. What you submit must be your authentic work, even if it is brief. A zero mark will be given to works that are copied from other people's work, and you will be reported to academic misconduct committee for further actions.
- [Seneca’s Copyright Policy](#seneca’s-copyright-policy) applies to all the content you create and all the material provided to you throughout the course.

---

### Useful Links

- [Pull requests documentation - GitHub](https://docs.github.com/en/pull-requests)
- [Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [10 Must Know Git Commands](https://blog.webdevsimplified.com/2021-10/advanced-git-commands/)

### Bonus Marks

The course content and assignment instructions keep changing and evolving. Mistakes are inevitable. There would be a bonus mark for finding errors in any form in the instructions. Also a bonus mark for suggestions about how to improve the instructions to make them more clear and easier to follow.

---

### Seneca’s Copyright Policy

> Most of the materials posted in this course are protected by copyright. It is a violation of Canada's Copyright Act and [Seneca's Copyright Policy](https://www.senecacollege.ca/about/policies/copyright-policy.html) to share, post, and/or upload course material in part or in whole without the permission of the copyright owner. This includes posting materials to third-party file-sharing sites such as assignment-sharing or homework help sites. Course material includes teaching material, assignment questions, tests, and presentations created by faculty, other members of the Seneca community, or other copyright owners.

> It is also prohibited to reproduce or post to a third-party commercial website work that is either your own work or the work of someone else, including (but not limited to) assignments, tests, exams, group work projects, etc. This explicit or implied intent to help others may constitute a violation of [Seneca’s Academic Integrity Policy](https://www.senecacollege.ca/about/policies/academic-integrity-policy.html) and potentially involve such violations as cheating, plagiarism, contract cheating, etc.  

> These prohibitions remain in effect both during a student’s enrollment at the college as well as withdrawal or graduation from Seneca.
