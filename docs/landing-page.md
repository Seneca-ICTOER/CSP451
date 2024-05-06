---
id: landing-page
title: Welcome to CSP451
sidebar_position: 1
slug: /
description: Landing Page CSP451
---

## Computer Systems Project <a id="top"></a>

## Useful Resources

| [MySeneca (Blackboard)](https://my.senecacollege.ca/) | [Course Outline](https://apps.senecapolytechnic.ca/ssos/findOutline.do?termCode=08424&subjectCode=CSP451&schoolCode=ITAS) | [Student Services](https://www.senecapolytechnic.ca/about/policies/academics-and-student-services.html) |
| :--- | :--- | :--- |

## Quick Links

| [Course Policies](./course-info/course-setup.md) | [Assessment Policies](./course-info/assessments.md) | [GitHub Collaborations](./course-info/collaborations.md) | [Course Setup](./course-info/course-setup.md) |
| :--- | :--- | :--- | :--- |

## Course Description

This is a project-based course that provides an opportunity for you to apply the knowledge you have acquired in all of the subjects in the previous semesters in multiple real-world projects focusing on the issues and considerations related to the interconnectivity and administration of various IT services in a cloud environment. You learn to identify, isolate, and solve problems that cloud architects and developers deal with in the real world. By the end of this course, you will be able to design, provision, troubleshoot and maintain virtual infrastructure.

## Learning Objectives

- Understand the fundamentals of version control and its importance in software development.
- Learn the key features and functionalities of GitHub for version control.
- Master branching strategies and understand best practices for collaborating with others on GitHub.
- Explore advanced topics such as GitHub Actions for automation and workflow customization.
- Gain a better understanding of cloud computing principles and services.
- Design and implement reliable and secure computer systems projects in the cloud environment.
- Utilize monitoring and logging tools effectively.
- Optimize costs by effectively managing cloud resources and understanding pricing models.
- Gain hands-on experience in deploying and managing scalable, portable, and resilient applications using Docker and Kubernetes.
- Learn how to design and deploy containerized applications using Docker.
- Explore Kubernetes as a container orchestration tool for managing scalable and resilient application deployments.
- Implement scaling strategies using Kubernetes to handle varying workloads and ensure application availability.


## Course Outline

This course is divided to three parts:

- Part One - Version Control Systems
- Part Two - Azure Computer Networking
- Part Three - Scalable, Portable, Resilient Design Patterns

### Part One - Version Control Systems

![git-icon](../static/img/about/git_icon.png)

This part covers key topics in version control systems, where you will gain a better understanding of GitHub branching, conflict resolution, and actions, enabling you to effectively collaborate on projects, automate workflows, and streamline development processes using GitHub's powerful features. Key topics covered in this part are:

1. Introduction to Version Control and GitHub:
    - Overview of version control systems and their importance in software development.
    - Understanding GitHub, creating and managing repositories.
2. Git Branches:
    - Creating and switching between branches locally using Git.
    - Branching models, best practices for branching, and branch naming conventions.
3. Pull Requests:
    - Understanding pull requests and their role in code review and collaboration.
    - Creating, reviewing, and merging pull requests on GitHub.
4. Conflict Resolution:
    - Identifying and resolving merge conflicts in Git.
    - Strategies for handling conflicting changes in code files during merges.
5. GitHub Actions:
    - Introduction to GitHub Actions.
    - Configuring workflows using YAML syntax to automate build, test, and deployment processes.
6. Case Studies and Real-World Applications:
    - Managing repositories, users, and permissions in GitHub Enterprise environments.
    - Best practices and lessons learned from successful GitHub workflows and deployments.

### Part Two - Azure Computer Networking

![azure-icon](../static/img/about/azure_icon.jpg)

This part focuses on the design and deployment of a crafted network topology leveraging Azure's Virtual Network (VNet) capabilities, you'll gain better understanding of secure and isolated network segments, meticulously tailored to meet the unique needs of diverse workloads. Key topics covered in this part are:

1. Azure Virtual Machine Fundamentals:
    - Understanding Azure Virtual Machine  principles and design considerations.
    - Choosing the Right Virtual Machine Size and Configuration.
    - Creating, configuring, and managing VM instances using the Azure Portal.
2. Azure Networking Fundamentals:
    - Configuring virtual networks (VNets) and subnets in Azure.
    - Implementing network security groups (NSGs), peering, and Azure Route Tables.
3. Introduction to Azure Resource Manager (ARM) Templates for Azure Resource Deployment
    - Manual vs. Automated deployment strategies.
    - Automating creation and configuration of resources using CLI scripting and ARM templates.
4. Security and Compliance:
    - Best practices for securing Virtual Machines instances and networks.
    - Implementing network security services to filter and inspect network traffic.
5. Monitoring, Logging, and Troubleshooting:
    - Utilizing Azure Monitor for monitoring VM performance metrics, logging, and diagnostics.
6. Cost Management and Optimization:
    - Creating Custom Dashboards in Azure Monitor for Cost Visibility and Analysis
    - Strategies for cost optimization, including rightsizing instances and using Custom Images

### Part Three - Scalable, Portable, Resilient Design Patterns

![azure-icon](../static/img/about/k8s_icon.png)

This part focuses on design and deploy containerized solutions for reliable performance and scalability. You'll explore creating and deploying containerized applications using Docker. You will learn techniques for building portable applications that can run consistently across different environments, from development to production, leveraging Docker's containerization technology. Key topics covered in this part are:

1. Introduction to Containerization with Docker:
    - Docker fundamentals, including: images, containers, and registries.
    - Docker ecosystem and differences between VMs and Containers.
2. Introduction to Multi-Tenancy and Docker:
    - Understanding multi-tenancy design patterns.
    - Deployment of a Multi-tenant application with Docker Engine.
3. Introduction to Docker Compose:
    - Using Docker Compose for container orchestration.
    - Key features, benefits of Docker Compose and where to use it.
4. Introduction to Orchestration with Kubernetes
    - Understanding Kubernetes and container orchestration.
    - Kubernetes features and cluster management.
5. Networking and Service Discovery in Kubernetes
    - Kubernetes networking concepts.
    - Service types and load balancing.
6. Multi-Tenant Application Deployment
    - Deploy a multi-tenant application using Kind/Minikube.
    - Deploy a multi-tenant application in Azure Kubernetes Services (AKS).

Go back to [Top](#top)
