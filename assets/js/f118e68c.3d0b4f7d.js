"use strict";(self.webpackChunkCSP451=self.webpackChunkCSP451||[]).push([[122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,u=h["".concat(c,".").concat(d)]||h[d]||m[d]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(3117),i=(n(7294),n(3905));const o={id:"git-basic-commands",title:"Git Command Line Interface Commands",sidebar_position:1,description:"TBD"},r=void 0,s={unversionedId:"tutorials-github/git-basic-commands",id:"tutorials-github/git-basic-commands",title:"Git Command Line Interface Commands",description:"TBD",source:"@site/docs/tutorials-github/16-basic-commnads.md",sourceDirName:"tutorials-github",slug:"/tutorials-github/git-basic-commands",permalink:"/CSP451/tutorials-github/git-basic-commands",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/CSP451/tree/main/docs/tutorials-github/16-basic-commnads.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"git-basic-commands",title:"Git Command Line Interface Commands",sidebar_position:1,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Cloning Repositories",permalink:"/CSP451/tutorials-github/repositories"},next:{title:"Introduction to Branching in Git",permalink:"/CSP451/tutorials-github/git-branching"}},c={},l=[{value:"Git cheat sheet",id:"git-cheat-sheet",level:2},{value:"Basic Git commands",id:"basic-git-commands",level:3},{value:"Example: Contribute to an existing repository",id:"example-contribute-to-an-existing-repository",level:3},{value:"Example: Start a new repository and publish it to GitHub",id:"example-start-a-new-repository-and-publish-it-to-github",level:3},{value:"Example: contribute to an existing branch on GitHub",id:"example-contribute-to-an-existing-branch-on-github",level:3},{value:"Sources",id:"sources",level:2}],p={toc:l};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"git-cheat-sheet"},"Git cheat sheet"),(0,i.kt)("p",null,"This Git cheat sheet saves you time when you just can't remember what a command is or don't want to use git help in the command line. It is hard to memorize all the important Git commands by heart, so print this out or save it to your desktop to resort to when you get stuck. Source: ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet"},"Git cheat sheet")),(0,i.kt)("p",null,"You can download it using this ",(0,i.kt)("a",{target:"_blank",href:n(4502).Z},"link"),"."),(0,i.kt)("h3",{id:"basic-git-commands"},"Basic Git commands"),(0,i.kt)("p",null,"To use Git, developers use specific commands to copy, create, change, and combine code. These commands can be executed directly from the command line or by using an application like GitHub. Here are some common commands for using Git:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git init")," initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," creates a local copy of a project that already exists remotely. The clone includes all the project's files, history, and branches.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git add")," stages a change. Git tracks changes to a developer's codebase, but it's necessary to stage and take a snapshot of the changes to include them in the project's history.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions like taking a photo. Anything that's been staged with ",(0,i.kt)("inlineCode",{parentName:"p"},"git add")," will become a part of the snapshot with ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git status")," shows the status of changes as untracked, modified, or staged.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git branch")," shows the branches being worked on locally.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git merge")," merges lines of development together. This command is typically used to combine changes made on two distinct branches.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," updates the local line of development with updates from its remote counterpart. Developers use this command if a teammate has made commits to a branch on a remote, and they would like to reflect those changes in their local environment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git push")," updates the remote repository with any commits made locally to a branch."))),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs"},"full reference guide to Git commands"),"."),(0,i.kt)("h3",{id:"example-contribute-to-an-existing-repository"},"Example: Contribute to an existing repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# download a repository on GitHub to our machine\n# Replace `owner/repo` with the owner and name of the repository to clone\ngit clone https://github.com/owner/repo.git\n\n# change into the `repo` directory\ncd repo\n\n# create a new branch to store any new changes\ngit branch my-branch\n\n# switch to that branch (line of development)\ngit checkout my-branch\n\n# make changes, for example, edit `file1.md` and `file2.md` using the text editor\n\n# stage the changed files\ngit add file1.md file2.md\n\n# take a snapshot of the staging area (anything that\'s been added)\ngit commit -m "my snapshot"\n\n# push changes to github\ngit push --set-upstream origin my-branch\n')),(0,i.kt)("h3",{id:"example-start-a-new-repository-and-publish-it-to-github"},"Example: Start a new repository and publish it to GitHub"),(0,i.kt)("p",null,"First, you will need to create a new repository on GitHub. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/start-your-journey/hello-world"},"Hello World"),". ",(0,i.kt)("strong",{parentName:"p"},"Do not")," initialize the repository with a ",(0,i.kt)("inlineCode",{parentName:"p"},"README"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"License")," file. This empty repository will await your code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# create a new directory, and initialize it with git-specific functions\ngit init my-repo\n\n# change into the `my-repo` directory\ncd my-repo\n\n# create the first file in the project\ntouch README.md\n\n# git isn\'t aware of the file, stage it\ngit add README.md\n\n# take a snapshot of the staging area\ngit commit -m "add README to initial commit"\n\n# provide the path for the repository you created on github\ngit remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git\n\n# push changes to github\ngit push --set-upstream origin main\n')),(0,i.kt)("h3",{id:"example-contribute-to-an-existing-branch-on-github"},"Example: contribute to an existing branch on GitHub"),(0,i.kt)("p",null,"This example assumes that you already have a project called ",(0,i.kt)("inlineCode",{parentName:"p"},"repo")," on the machine and that a new branch has been pushed to GitHub since the last time changes were made locally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# change into the `repo` directory\ncd repo\n\n# update all remote tracking branches, and the currently checked out branch\ngit pull\n\n# change into the existing branch called `feature-a`\ngit checkout feature-a\n\n# make changes, for example, edit `file1.md` using the text editor\n\n# stage the changed file\ngit add file1.md\n\n# take a snapshot of the staging area\ngit commit -m "edit file1"\n\n# push changes to github\ngit push\n')),(0,i.kt)("h2",{id:"sources"},"Sources"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("cite",null,"[GitHub Basic writing and formatting syntax][1]")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("cite",null,"[Git cheat sheet][2]"))))}m.isMDXComponent=!0},4502:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Atlassian-Git-Cheatsheet-7012d7ba772182043fff203cbc1e4cfa.pdf"}}]);