---
id: intro-networking
title: Introduction Azure Networking
sidebar_position: 1
description: TBD
---

> :sparkles: This page borrows most of its content from [Azure for network engineers](https://learn.microsoft.com/en-us/azure/networking/azure-for-network-engineers) to review and refresh your understanding about Azure networking. For a more comprehensive reference about Azure Networking, refer to [Azure networking documentation](https://learn.microsoft.com/en-us/azure/networking/) pages and explore additional resources on [Microsoft Learn](https://learn.microsoft.com/en-us/training/azure/).

## Virtual Networks (VNets)

A Virtual Network (VNet) in Azure serves as a logical boundary for deploying and managing Azure resources. Similar to traditional on-premises networks, VNets allow you to segment your network into subnets, define IP address spaces, and manage traffic routing. When creating a VNet, you specify an IP address range using CIDR notation, and you can define both IPv4 and IPv6 address ranges. VNets facilitate the secure communication of Azure resources with each other, the internet, and on-premises networks.

**VNet Configuration:**
Virtual Networks (VNets) in Azure allow you to create isolated networks within the Azure cloud, enabling secure communication between Azure resources. Configuring a VNet involves defining an address space using CIDR notation, which specifies the IP address range for the VNet. VNets can span multiple Azure regions, allowing for high availability and disaster recovery scenarios.

1. [Azure Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview).
2. [Tutorial: Route network traffic with a route table using the Azure portal]
3. Quickstart: [Use the Azure portal to create a virtual network](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) - Learn how to quickly create a virtual network using the Azure portal.

#### How-to Guides
1. [Create a public IP address](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-public-ip-address) - Instructions on creating and managing public IP addresses.
2. [Create a NAT gateway](https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway-resource) - Guide on configuring a NAT gateway for outbound internet connectivity.
3. [Connect virtual networks with virtual network peering](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering) - Steps to establish VNet peering.


For more detailed information, visit the [Azure Networking Fundamentals documentation](https://learn.microsoft.com/en-us/azure/networking/fundamentals/).

**Creating a VNet and Subnets:**
1. Navigate to "Virtual Networks" in the Azure portal.
2. Create a VNet by specifying the address space and defining subnets.


## Subnets

Subnets are subdivisions within a VNet that allow for the logical segmentation of network resources. Each subnet is assigned a specific range of IP addresses within the VNet's address space. Subnets play a crucial role in organizing and securing resources, enabling the application of Network Security Groups (NSGs) to control inbound and outbound traffic. Azure requires the creation of a "gateway subnet" for VNets that use a virtual network gateway, facilitating the assignment of IP addresses to gateway resources.

**Subnet Management:**
Subnets within a VNet help segment the network logically, making it easier to manage and secure resources. Each subnet is assigned a range of IP addresses from the VNet’s address space. Subnets can host various Azure resources like virtual machines (VMs), and you can apply Network Security Groups (NSGs) to subnets to control traffic flow.

Learn more about subnet management in [Azure Subnets documentation](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet).

## VNet Peering

VNet Peering connects two VNets, enabling resources in different VNets to communicate with each other as if they were within the same network. Peering supports both intra-region and cross-region connections, providing low-latency and high-bandwidth connectivity. It simplifies resource sharing, disaster recovery, and cross-region load balancing. VNet Peering uses the Azure backbone network, ensuring secure and efficient communication without the need for additional hardware.

**Peering Setup:**
VNet Peering allows two VNets to communicate directly with each other without the need for a gateway. This connection can be within the same Azure region (intra-region) or across different regions (cross-region). VNet Peering uses the Azure backbone network, ensuring secure, high-bandwidth, and low-latency connectivity. Peering can be used to connect VNets owned by different subscriptions, enhancing flexibility.

Explore the setup process in the [VNet Peering documentation](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview).

**Configuring VNet Peering:**
1. Select the VNet to peer.
2. Add a peering connection, specifying the target VNet and necessary options.

## Route Tables

Route Tables in Azure manage the flow of network traffic within a VNet. By default, Azure creates system routes that enable communication between subnets, to the internet, and to on-premises networks. Custom Route Tables, or User Defined Routes (UDRs), can be created to define specific routes for directing traffic through network virtual appliances or enforcing security policies. Azure also supports Border Gateway Protocol (BGP) routes for dynamic routing between on-premises networks and Azure VNets.

**Route Table Customization:**
Custom Route Tables, or User Defined Routes (UDRs), allow you to define specific routes for traffic within your VNet. This capability enables you to direct traffic through network virtual appliances or implement complex routing scenarios. Azure also supports Border Gateway Protocol (BGP) for dynamic routing with on-premises networks. Custom routes are essential for scenarios like forced tunneling and controlling traffic flow to the internet or other networks.

Detailed guidance is available in the [Azure Route Tables documentation](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview).

**Customizing Route Tables:**
1. Create a Route Table in the Azure portal.
2. Define routes and associate the table with the desired subnets.

## Security

Azure provides several mechanisms to secure network traffic within a VNet. Network Security Groups (NSGs) allow you to filter inbound and outbound traffic to and from Azure resources. NSGs contain Access Control List (ACL) rules that can be associated with subnets or individual network interfaces. Additionally, Azure supports network virtual appliances (NVAs) such as Azure Firewall and third-party firewall solutions to manage and enforce network security policies.

**Security Implementation:**
Securing Azure VNets involves applying Network Security Groups (NSGs) to filter traffic and deploying network virtual appliances (NVAs) for advanced security. NSGs contain rules that define what traffic is allowed or denied to and from resources within a subnet or network interface. Additionally, Azure Firewall and third-party NVAs can be deployed for centralized security management.

More information can be found in the [Azure Network Security documentation](https://learn.microsoft.com/en-us/azure/network-security/).

**Implementing Security:**
1. Create and configure NSGs with specific ACL rules.
2. Deploy NVAs as needed for enhanced security.

## Azure Bastion - Secure Remote Access

Azure Bastion is designed to provide secure remote desktop (RDP) and Secure Shell (SSH) access to virtual machines (VMs) hosted on Azure. Unlike traditional methods that require public IP addresses, Bastion allows you to access your VMs securely over a fully managed Azure service that is provisioned directly in your virtual network (VNet). This eliminates the need for managing and maintaining jump servers or VPNs and reduces the attack surface of your VMs.

Azure Bastion is particularly useful in scenarios where security is critical, and exposing VMs to the internet is not an option. It is ideal for managing remote servers, performing administrative tasks, and troubleshooting VMs without compromising security. Follow these **best practices** to ensure security of VMs will not be compromised:

1. Always use Azure Bastion for RDP and SSH access instead of exposing VMs to the internet.
2. Regularly review and update your network security rules and configurations to ensure optimal security.
3. Ensure that the AzureBastionSubnet is properly configured and does not overlap with other subnets in the VNet.
4. Use multi-factor authentication (MFA) and role-based access control (RBAC) to enhance access security.

For more detailed information and step-by-step guides, visit the [Azure Bastion documentation](https://learn.microsoft.com/en-us/azure/bastion/bastion-overview).

**Configuration and Setup:**
Setting up Azure Bastion involves a few straightforward steps. First, navigate to the Azure portal and search for the Bastion service. Create a new Bastion host by specifying the virtual network and subnet where it will be deployed. Azure requires a dedicated subnet named "AzureBastionSubnet" with a minimum size of `/27`. Once the Bastion host is deployed, you can access any VM in the associated VNet by selecting the **Connect** option and choosing Bastion as the connection method.

## Sources

1. [Azure for network engineers](https://learn.microsoft.com/en-us/azure/networking/azure-for-network-engineers)