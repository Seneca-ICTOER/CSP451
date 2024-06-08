"use strict";(self.webpackChunkCSP451=self.webpackChunkCSP451||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=d;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n.mdxType="string"==typeof e?e:o,s[1]=n;for(var p=2;p<l;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>p});var a=r(3117),o=(r(7294),r(3905));const l={id:"code-review-pull-request",title:"Code Review Pull Request",sidebar_position:1,description:"TBD"},s=void 0,n={unversionedId:"tutorials-github/code-review-pull-request",id:"tutorials-github/code-review-pull-request",title:"Code Review Pull Request",description:"TBD",source:"@site/docs/tutorials-github/18-code-review-pull-request.md",sourceDirName:"tutorials-github",slug:"/tutorials-github/code-review-pull-request",permalink:"/CSP451/tutorials-github/code-review-pull-request",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/CSP451/tree/main/docs/tutorials-github/18-code-review-pull-request.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"code-review-pull-request",title:"Code Review Pull Request",sidebar_position:1,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Collaboration using Branches",permalink:"/CSP451/tutorials-github/git-branching"},next:{title:"Conflict Resolution Strategies",permalink:"/CSP451/tutorials-github/conflict-resolution"}},i={},p=[{value:"What is Pull Request?",id:"what-is-pull-request",level:2},{value:"GitHub collaborative development models",id:"github-collaborative-development-models",level:2},{value:"1. Fork and pull model",id:"1-fork-and-pull-model",level:3},{value:"2. Shared repository model",id:"2-shared-repository-model",level:3},{value:"Pull Request Process",id:"pull-request-process",level:2},{value:"Code Review Workflow Steps",id:"code-review-workflow-steps",level:2},{value:"Sources",id:"sources",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-pull-request"},"What is Pull Request?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A pull request is a proposal to merge a set of changes from one branch into another")),(0,o.kt)("p",null,"Pull requests are a key feature of collaborative development on platforms like GitHub. They provide a structured way for developers to propose changes to a repository and facilitate communication, code review, and collaboration among team members."),(0,o.kt)("p",null,"When a pull request is opened, it serves as a discussion thread where developers can ",(0,o.kt)("strong",{parentName:"p"},"review the proposed changes"),", provide feedback, ask questions, and suggest improvements. The pull request workflow enables teams to ensure that changes meet quality standards, align with project goals, and integrate smoothly into the main codebase. By allowing for iterative discussion and refinement of changes before merging, pull requests help maintain code quality, prevent errors, and foster a culture of collaboration and transparency in software development projects."),(0,o.kt)("h2",{id:"github-collaborative-development-models"},"GitHub collaborative development models"),(0,o.kt)("p",null,"The way you use pull requests depends on the type of development model you use in your project. You can use the ",(0,o.kt)("strong",{parentName:"p"},"fork and pull model")," or the ",(0,o.kt)("strong",{parentName:"p"},"shared repository model"),". Below you can find a brief description of each model:"),(0,o.kt)("h3",{id:"1-fork-and-pull-model"},"1. Fork and pull model"),(0,o.kt)("p",null,"In the fork and pull model, anyone can fork an existing repository and push changes to their personal fork. You do not need permission to the source repository to push to a user-owned fork. The changes can be pulled into the source repository by the project maintainer. When you open a pull request proposing changes from your user-owned fork to a branch in the source (upstream) repository, you can allow anyone with push access to the upstream repository to make changes to your pull request. This model is popular with open source projects as it reduces the amount of friction for new contributors and allows people to work independently without upfront coordination."),(0,o.kt)("h3",{id:"2-shared-repository-model"},"2. Shared repository model"),(0,o.kt)("p",null,"In the shared repository model, collaborators are granted push access to a single shared repository and topic branches are created when changes need to be made. Pull requests are useful in this model as they initiate code review and general discussion about a set of changes before the changes are merged into the main development branch. This model is more prevalent with small teams and organizations collaborating on private projects."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u2728 In this course, we will only use the ",(0,o.kt)("strong",{parentName:"p"},"shared repository model with a single contributor"),". The fork model is more complicated and requires more advanced skills.\n\u2728 Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests"},"GitHub Pull requests documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/making-a-pull-request"},"Atlassian Tutorial - Making a Pull Request")," for a more comprehensive reference about Code Review Workflow using Pull Request.")),(0,o.kt)("h2",{id:"pull-request-process"},"Pull Request Process"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Feature Development:")," A developer creates a new feature or makes changes in a dedicated branch within their local repository. This isolation ensures that changes are contained and can be developed independently of the main codebase.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Pushing Changes to Remote:")," Once the feature is developed and tested locally, the developer pushes the branch containing the changes to a remote repository, typically hosted on a platform like GitHub. This makes the changes accessible to other team members for review and collaboration.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Creating a Pull Request:")," The developer initiates a pull request on GitHub, proposing the changes made in their branch to be merged into the main codebase. The pull request serves as a discussion thread where reviewers can provide feedback, ask questions, and suggest improvements to the proposed changes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code Review and Discussion:")," Reviewers, which may include other developers or project maintainers, review the code changes included in the pull request. They discuss the proposed changes, provide feedback, and suggest improvements to ensure code quality, adherence to coding standards, and alignment with project goals.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Merge and Close Pull Request:")," Once the proposed changes have been reviewed and approved, the project maintainer merges the feature branch into the official repository, integrating the changes into the main codebase. The pull request is then closed, marking the completion of the feature development and its successful integration into the project.\nOverall, this Pull Request Process promotes collaboration, code quality, and transparency in software development projects, enabling teams to effectively manage and integrate changes into the codebase while fostering communication and feedback among team members."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"![Pull Request Process Overview](../../static/img/tutorials/github/pull-request-process-overview.png)\n")))),(0,o.kt)("h2",{id:"code-review-workflow-steps"},"Code Review Workflow Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare your local branch"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"pull-request-prep-local-1",src:r(6968).Z,width:"909",height:"452"}),"\n",(0,o.kt)("img",{alt:"pull-request-prep-local-2",src:r(9389).Z,width:"830",height:"464"}),"\n",(0,o.kt)("img",{alt:"pull-request-prep-local-3",src:r(8246).Z,width:"892",height:"452"}),"\n",(0,o.kt)("img",{alt:"pull-request-prep-local-4",src:r(137).Z,width:"624",height:"319"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Work on your CL (code change list) on the local branch"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"pull-request-prep-code",src:r(5549).Z,width:"974",height:"454"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Commit your CL to the local repo"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"pull-request-commit-local",src:r(415).Z,width:"914",height:"456"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push your CL to the remote repo"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"pull-request-push-remote-1",src:r(4154).Z,width:"864",height:"434"}),"\n",(0,o.kt)("img",{alt:"pull-request-push-remote-2",src:r(6441).Z,width:"882",height:"472"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a pull request for your CL"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"pull-request-create-pr",src:r(6114).Z,width:"903",height:"514"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get code reviews from your team members and improve your CL"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"pull-request-code-review-1",src:r(1160).Z,width:"624",height:"436"}),"\n",(0,o.kt)("img",{alt:"pull-request-code-review-2",src:r(3746).Z,width:"1218",height:"287"}),"\n",(0,o.kt)("img",{alt:"pull-request-code-review-3",src:r(7997).Z,width:"1252",height:"386"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Iterate 2, 3, 4, 5, 6 until you get LGTM (Looks Good to Me)"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"pull-request-iterate",src:r(5349).Z,width:"1235",height:"356"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Merge your branch with the base one (master)"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"pull-request-merge-branch-1",src:r(9198).Z,width:"772",height:"494"}),"\n",(0,o.kt)("img",{alt:"pull-request-merge-branch-2",src:r(4014).Z,width:"942",height:"420"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Congratulations, your Pull Request in now merged to the base code!"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"pull-request-congradulations",src:r(5654).Z,width:"965",height:"360"})))),(0,o.kt)("h2",{id:"sources"},"Sources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models"},"About collaborative development models"))))}c.isMDXComponent=!0},1160:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-code-review-1-75ec063fbd622d8618234d8f0d012a05.png"},3746:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-code-review-2-4247f9550135d44d9e588de06ec2372e.png"},7997:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-code-review-3-9b6cf6ac567a358b2e641b3aa143399c.png"},415:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-commit-local-e1bce2b042f6f46993f785787add748e.png"},5654:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-congradulations-97342ae042e8942c0a7bdb78a20cd4d3.png"},6114:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-create-pr-7c221b692426132b88d44442fe68b103.png"},5349:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-iterate-6851b217b8881a5df6e6a558694067c9.png"},9198:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-merge-branch-1-bdb5d4c18755661d4a2bb04b92f4be90.png"},4014:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-merge-branch-2-4666716ca7ea9e7322034d66d1c00f86.png"},5549:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-prep-code-db69daa608cfe72aa9ca83bf10c0f162.png"},6968:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-prep-local-1-f60b1d95a06d81660e00b0456a8031a6.png"},9389:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-prep-local-2-a4a0ea84996cec414ec1ae3a94ade76d.png"},8246:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-prep-local-3-79b343f12ba7f81eafafa2f1a52a0f7e.png"},137:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-prep-local-4-6917c4606559ebacc210ebf7d3b378c8.png"},4154:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-push-remote-1-abba1574473f1ac91644f126979ef457.png"},6441:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pull-request-push-remote-2-7b118b08a7c4ab112ba834eccd6f5614.png"}}]);