---
id: cidr-addressing
title: CIDR Addressing and IP Address Classes
sidebar_position: 1
description: TBD
---

This module is a review of the fundamentals of IP addressing, focusing on Classless Inter-Domain Routing (CIDR) and the traditional Class A, B, and C addressing. This module is not intended to be a comprehensive tutorial about CIDR and classless IP addressing, treat it as a refresher. If you need more in-depth understanding, follow the references and links.

## IP Address Classes

IPv4 addresses are 32-bit numbers typically represented in decimal format, split into four 8-bit octets. Traditionally, IP addresses were divided into five classes (A, B, C, D, E), but for simplicity, we will focus on the most common ones: A, B, and C.

## Class A, B, and C Addresses

| Class | Starting Address | Ending Address | Default Subnet Mask | Number of Networks | Number of Hosts per Network |
|-|-|-|-|-|-|
| A | 0.0.0.0 | 127.255.255.255 | 255.0.0.0 | 128 | 16,777,214 |
| B | 128.0.0.0 | 191.255.255.255 | 255.255.0.0 | 16,384 | 65,534 |
| C | 192.0.0.0 | 223.255.255.255 | 255.255.255.0 | 2,097,152 | 254 |

## Classless Inter-Domain Routing (CIDR)

CIDR was introduced to improve the efficiency of IP address allocation and to replace the classful network design. CIDR notation is a compact representation of an IP address and its associated network mask.

## CIDR Notation

CIDR notation combines an IP address and a suffix indicating the number of bits in the subnet mask. For example, `192.168.0.0/24` represents a network with an IP range from `192.168.0.0` to `192.168.0.255` and a subnet mask of `255.255.255.0`.

## Example: CIDR vs. Classful Addressing

| CIDR Notation | Equivalent Classful Address | IP Range | Number of Hosts |
|-|-|-|-|
| 192.168.1.0/24 | Class C | 192.168.1.0 - 192.168.1.255 | 256 |
| 10.0.0.0/8 | Class A | 10.0.0.0 - 10.255.255.255 | 16,777,216 |
| 172.16.0.0/12 | Class B | 172.16.0.0 - 172.31.255.255 | 1,048,576 |

## CIDR Address Allocation

CIDR allows for more flexible IP address allocation, which helps to reduce the wastage of IP addresses. For example, instead of assigning a Class B address (65,534 hosts) to a network needing only 200 addresses, CIDR can assign a smaller block like `192.168.1.0/24`.


## Further Reading

1. [RFC 1519 - Classless Inter-Domain Routing (CIDR): an Address Assignment and Aggregation Strategy](https://tools.ietf.org/html/rfc1519)
2. CCNP Self-Study: Advanced IP Addressing [CIDR and Subnetting](https://www.ciscopress.com/articles/article.asp?p=174107&seqNum=3)
3. DigitalOcean tutorial Series [Understanding IP Addresses, Subnets, and CIDR Notation for Networking](https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking)
