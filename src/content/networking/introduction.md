---
title: Introduction to Networking Security
description: Getting introduced to Networking Security concept
---

# Introduction to Networking Security

## 1. CIA Security Triad

CIA stands for  Confidentiality, Integrity and Availability.

It has nothing to do with a certain well-recognized US intelligence agency. The CIA Triad is a well-known model for the development of security policies used in identifying problem areas, along with necessary solutions.





### 1.1. Confidentiality

Data Confidentiality means Data Privacy. Protecting confidentiality is dependent on being able to define and enforce certain access levels for information. Some of the most common means used to manage confidentiality include

- access control lists (ACL),

- volume (or partition) and file encryption,

- and Unix file permissions



###  1.2. Integrity

Data integrity ensures data has not been modified on the way. This is an essential component of the CIA Triad designed to protect data from deletion or modification (alteration) from any unauthorized party, and it ensures that when an authorized person makes a change that should not have been made the damage can be reversed (or undone).



###  1.3. Availability

Availability refers to the actual availability of our data. Authentication mechanisms, access channels and systems all have to work properly for the information they protect and ensure it's available when it is needed.

High availability systems are the computing resources that have architectures that are specifically designed to improve availability. Based on the specific HA (High Availability) system design, this may target hardware failures, upgrades or power outages to help improve availability, or it may manage several network connections to route around various network outages.


A Denial-of-Service (DoS) attack is an attack meant to shut down a machine or network, making it inaccessible to its intended users. DoS attacks accomplish this by flooding the target with traffic, or sending it information that triggers a crash.





## 2. Security Safeguards, Data Privacy Rules and Non-Repudiation Measures

### 2.1. Security Safeguards

#### 2.1.1. Administrative safeguards

Administrative security involves the internal policies and training implemented to secure an organization’s PHI (Protected Health Information). 

Internal policies and training keep the employee fully aware of cybersecurity and having with her/him documented procedures or regulations in place to ensure data protection.

When staff members follow these guidelines PHI security will be maintained and even when there is a human error it will be mitigated.

PHI  is any information in a medical record that can be used to identify an individual. Personally identifiable information (PII) in medical records includes conversations between doctors and nurses about treatment. PHI also includes billing information and any patient-identifiable information in a health insurance company's computer system.



Protected Health Information is the definition used by HIPAA [read /hIpa:/] (Health Insurance Portability and Accountability Act) to define the type of patient information that falls under the jurisdiction of the law. eHealth applications that collect, store or share PHI need to follow HIPAA compliance guidelines in order to be compliant with the law.

In order for health data to be considered PHI and regulated by HIPAA it needs to be two things:

- Personally identifiable to the patient

- Used or disclosed to a covered entity during the course of care



**Examples of PHI are**:

- Billing information from our doctor,

- email to our doctor's office about a medication or prescription we need,

- appointment scheduling note with our doctor's office,

- an MRI scan,

- blood test results,

- phone records.



**Examples of health data that is not considered PHI are**:

- number of steps in a pedometer /pɪˈdɒmɪtə,pɛˈdɒmɪtə/. That is an instrument usually worn as a watch by a runner for estimating the distance travelled on foot by recording the number of steps taken.

- number of calories burned,

- blood sugar readings without personally identifiable user information (PII), i.e not linked to the patient's account or username,

- heart rate readings without PII



####  2.1.2. Technical safeguards

Technical safeguards refer to the software and hardware systems in place to maintain network and data security effectively reducing the risk and damage of a cybersecurity breach. 


We can list:

- Antivirus programs,

- encryption,

- firewalls,

- any other common digital measures



#### 2.1.3. Physical safeguards

In contrast to technical safeguards, physical safeguards refer to the on-site measures a business takes in protecting their PHI.

This includes

- protection of buildings

- protection of devices and equipment containing sensitive information,

- physical locks

- installed security system to alert staff members of a break-in.



## 2.2. Data Privacy Rules

Data privacy is the right of a person to control how personal information is collected and used.

Personal data must be protected in accordance with applicable data privacy laws and regulations.

According to the International Association of Privacy Professionals, Data privacy is the appropriate use of personal information under the circumstances. What is appropriate will depend on context, law, and the individual's expectations; also, the right of an individual to control the collection, use and disclosure of information.

This refers to the right of individuals to control or influence what information related to them may be collected and stored and by whom and to whom that information may be disclosed. See ISO 7498-2:1989 

A prime example of data privacy laws is the EU General Data Protection Regulation that grants data subjects a wide range of rights over their personal data, namely the right to:

- know what is being done with their data (consent),

- have their incorrect data corrected,

- have their data forgotten (data erasure),

- have restrictions on processing of their data (clear scope),

- have data portability (withdrawal of data) and

- object to their data being processed (adapting to changing situations).



### 2.3. Non-Repudiation Measures

A repudiation attack happens when an application or system does not adopt controls to properly track and log users' actions, thus permitting malicious manipulation (or forging the identification) of new actions. If this attack succeeds, the data stored on log files is turned invalid or misleading.

Non-repudiation assures the sender of data is provided with proof of delivery and the recipient is provided with proof of the sender’s identity, so neither party can deny sending, receiving, or accessing the data. Security principles should be used to prove identities and to validate the communication process.





## 3. Information Security System 

3.1. Hardware devices

This is the physical technology that works with information. Hardware can be as small as a smartphone that fits in a pocket or as large as a supercomputer that fills a building. Hardware also includes the peripheral devices that work with computers, such as keyboards, external disk drives, and routers. With the rise of the Internet of things, in which anything from home appliances to cars to clothes will be able to receive and transmit data, sensors that interact with computers are spread throughout the human environment.



#### 3.2. Software systems

The hardware needs to know what to do, and that is the role of software. Software can be divided into two types: system software and application software. The primary piece of system software is the operating system, such as Windows or iOS, which manages the hardware’s operation. Application software is designed for specific tasks, such as handling a spreadsheet, creating a document, or designing a Web page.



### 3.3. Network (LAN, WAN, Intranet, Extranet, Internet)

This component connects the hardware together to form a network. Connections can be through wires such as Ethernet cables or fibre optics, or wireless, such as through Wi-Fi. A network can be designed to tie together computers in a specific area, such as an office or a school, through a local area network (LAN). If computers are more dispersed, the network is called a wide area network (WAN). The Internet itself can be considered a network of networks.



### 3.4. Databases and Data Warehouses

This component is where the "material" that the other components work with resides. A database is a place where data is collected and from which it can be retrieved by querying it using one or more specific criteria. A data warehouse contains all of the data in whatever form that an organization needs. Databases and data warehouses have assumed even greater importance in information systems with the emergence of "big data," a term for the truly massive amounts of data that can be collected and analyzed.



### 3.5. Human Resources (Users), Operations and Procedures

The final, and possibly most important, component of information systems is the human element: the people that are needed to run the system and the procedures they follow so that the knowledge in the huge databases and data warehouses can be turned into learning that can interpret what has happened in the past and guide future action.