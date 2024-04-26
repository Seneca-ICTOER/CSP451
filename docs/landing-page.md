---
id: landing-page
title: Welcome to CSP451
sidebar_position: 1
slug: /
description: Landing Page CSP451
---

## Computer Systems Project

## Quick Links

| [CSP451 GitHub](https://github.com/CSP451) | [CSP451 Discussions](https://github.com/orgs/CSP451/discussions) | [MySeneca (Blackboard)](https://my.senecacollege.ca/) | [Course Outline](https://apps.senecapolytechnic.ca/ssos/findOutline.do?termCode=08424&subjectCode=CSP451&schoolCode=ITAS) | [Student Services](https://www.senecapolytechnic.ca/about/policies/academics-and-student-services.html) | [Copyright Policy](https://www.senecapolytechnic.ca/about/policies/copyright-policy.html) |
| :--- | :--- | :--- | :--- | :--- | :--- |

## Course Description

This course is designed to provide you with hands-on experience in designing, implementing, and deploying computer systems projects in Cloud platforms. Through a combination of tutorials, practical exercises, and real-world case studies, you will gain proficiency in leveraging cloud services for building scalable, reliable, and secure computer systems.

This is a project-based course that provides an opportunity for you to apply the knowledge you have acquired in all of the subjects in the previous semesters in multiple real-world projects focusing on the issues and considerations related to the interconnectivity and administration of various IT services in a cloud environment. You learn to identify, isolate, and solve problems that cloud architects and developers deal with in the real world. By the end of this course, you will be able to design, provision, troubleshoot and maintain virtual infrastructure.

## Learning Objectives

- Gain a better understanding of cloud computing principles and services.
- Design and implement reliable, robust, and secure computer systems projects in the cloud environment.
- Utilize monitoring and logging tools to ensure the performance and availability of infrastructure and service in the cloud environment.
- Design, provision and troubleshoot scalable, portable, and resilient solutions and containerized applications.
- Optimize costs by effectively managing cloud resources and understanding pricing models.

## Course Key Components

This course has three main components

### Part One - Version Control Systems

![git-icon](/img/about/git_icon.png)

This part covers key topics in version control systems, where you will gain a comprehensive understanding of GitHub branching, conflict resolution, and actions, enabling you to effectively collaborate on projects, automate workflows, and streamline development processes using GitHub's powerful features. Key topics covered in this part are:

1. Introduction to Version Control and Git:
    - Overview of version control systems and their importance in software development.
    - Introduction to Git as a distributed version control system.
2. GitHub Basics:
    - Understanding GitHub and its role as a platform for hosting Git repositories.
    - Creating and managing repositories, branches, and pull requests on GitHub.
3. Branching Strategies:
    - Overview of branching models, including feature branching, gitflow, and trunk-based development.
    - Best practices for branching and branch naming conventions.
4. Working with Branches:
    - Creating and switching between branches locally using Git.
    - Pushing and pulling branches to and from remote repositories on GitHub.
5. Pull Requests:
    - Understanding pull requests and their role in code review and collaboration.
    - Creating, reviewing, and merging pull requests on GitHub.
6. Conflict Resolution:
    - Identifying and resolving merge conflicts in Git.
    - Strategies for handling conflicting changes in code files during merges.
7. GitHub Actions:
    - Introduction to GitHub Actions as a continuous integration and continuous deployment (CI/CD) tool.
    - Configuring workflows using YAML syntax to automate build, test, and deployment processes.
8. Case Studies and Real-World Applications:
    - Managing repositories, users, and permissions in GitHub Enterprise environments.
    - Best practices and lessons learned from successful GitHub workflows and deployments.

### Part Two - Azure Computer Networking

![azure-icon](/img/about/azure_icon.jpg)

This part focuses on the design and deployment of a crafted network topology engineered to deliver reliable performance, scalability, and resilience. Leveraging Azure's Virtual Network (VNet) capabilities, you'll delineate secure and isolated network segments, meticulously tailored to meet the unique needs of diverse workloads. Key topics covered in this part are:

1. Azure Virtual Machine Fundamentals:
    - Understanding Azure VM principles and design considerations.
    - Creating, configuring, and managing VM instances using the Azure Portal, Azure CLI, and PowerShell.
2. Azure Networking Fundamentals:
    - Configuring virtual networks (VNets) and subnets in Azure.
    - Implementing network security groups (NSGs), peering, and Azure Route Tables.
3. Compute Engine Deployment Strategies:
    - Automated provisioning with Deployment Manager and Terraform.
    - High availability and fault tolerance strategies using managed instance groups and regional deployments.
4. Security and Compliance:
    - Best practices for securing Virtual Machines instances and networks.
    - Implementing network security services to filter and inspect network traffic at the network perimeter.
5. Monitoring, Logging, and Troubleshooting:
    - Utilizing Azure Monitor for monitoring VM performance metrics, logging, and diagnostics.
    - Diagnosing and troubleshooting common issues in Azure VM deployments.
5. Cost Management and Optimization:
    - Cost estimation and pricing models for Compute Engine resources.
    - Strategies for cost optimization, including rightsizing instances, utilizing preemptible VMs and leveraging sustained use discounts.

### Part Three - Scalable, Portable, Resilient Design Patterns

![azure-icon](/img/about/k8s_icon.png)

This part focuses on the design and deployment of a crafted network topology engineered to deliver reliable performance, scalability, and resilience. Leveraging Azure's Virtual Network (VNet) capabilities, you'll delineate secure and isolated network segments, meticulously tailored to meet the unique needs of diverse workloads. Key topics covered in this part are:

Efficient Resource Utilization: Kubernetes allows for efficient resource utilization in serverless designs by automatically scaling resources up or down based on demand. This ensures that only the necessary resources are allocated at any given time, optimizing cost and performance.
Container Orchestration: Kubernetes excels at container orchestration, enabling the deployment and management of serverless functions packaged as containers. With Kubernetes, serverless workloads can be easily scaled, managed, and monitored across clusters of machines.
Event-Driven Architecture: Serverless designs using Kubernetes can leverage event-driven architecture, where functions are triggered in response to events such as HTTP requests, messages from queues, or changes in data stores. Kubernetes supports various event sources and can efficiently route events to the appropriate serverless functions.
Automatic Scaling: Kubernetes provides built-in autoscaling capabilities that dynamically adjust the number of serverless function instances based on workload demand. This ensures that applications can handle varying levels of traffic efficiently without manual intervention.
Fault Tolerance and Resilience: Kubernetes offers robust fault tolerance and resilience features, ensuring that serverless functions remain highly available even in the event of failures or disruptions. Features such as automatic container restarts, rolling updates, and self-healing mechanisms contribute to the overall reliability of serverless deployments.
Developer Productivity: By abstracting away infrastructure management complexities, Kubernetes enables developers to focus on writing code and building features rather than worrying about server provisioning, scaling, and maintenance. This enhances developer productivity and accelerates time-to-market for serverless applications.
Portability and Flexibility: Kubernetes provides a consistent platform for deploying serverless functions across on-premises data centers, public clouds, and hybrid environments. This portability ensures that serverless applications can run anywhere Kubernetes is deployed, offering flexibility and avoiding vendor lock-in.
Integration with Ecosystem Tools: Kubernetes integrates seamlessly with a wide range of ecosystem tools and services, including monitoring and logging solutions, CI/CD pipelines, service meshes, and API gateways. This enables comprehensive observability, automation, and management of serverless workloads within Kubernetes environments.

