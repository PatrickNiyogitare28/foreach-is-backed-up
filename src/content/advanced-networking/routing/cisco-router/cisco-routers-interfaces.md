---
title: Cisco Router's Interfaces
description: Interfaces allow us to use the router. They are the various serial ports or ethernet ports which we use to connect the router to our LAN.
---

## Cisco Router's Interfaces

Interfaces allow us to use the router. They are the various **serial ports** or **ethernet ports** which we use to connect the router to our LAN.

Let's consider a device Cisco 891F.




## 2.1.1. FE (Fast Ethernet) WAN Port or Backup WAN port


<br>
Fast Ethernet WAN Port serves to make backups and load balancing.



## 2.1.2. ISDN S/T (Subscriber Terminal)





Integrated Services Digital Network (ISDN) is a set of communication standards for simultaneous digital transmission of voice, video, data, and other network services over the digitalized circuits of the Public Switched Telephone Network (PSTN). 


<br><br>
[Figure Above] A typical Subscriber Terminal

 

## 2.1.3. Primary WAN port—GE WAN



Gigabit ethernet (GE) is the evolution beyond Fast Ethernet. It is… a lot faster. The "Gigabit" stands for 1 gigabit of data per second, or Gbps. This translates to 1000 Mbps which you may recognize as being really fast.
<br>
Gigabit Ethernet (GbE or 1 GigE) is the term applied to transmitting Ethernet frames at a rate of a gigabit per second (1 billion bits per second). The most popular variant 1000BASE-T is defined by the IEEE 802.3ab standard. It came into use in 1999, and has replaced Fast Ethernet in wired local networks due to its considerable speed improvement over Fast Ethernet, as well as its use of cables and equipment that are widely available, economical, and similar to previous standards. 1000Base-T is a standard for Gigabit Ethernet over four pairs of unshielded copper cabling to achieve the gigabit data rate with a maximum length of 100 meters. "T" means twisted-pair cable. Generally, the Cat5/Cat5e/Cat6 cables can transmit data at 1000Mbps. 1000Base-T allows auto negotiation between 100Mbps and 1000Mbps, and the biggest advantage of 1000Base-T is that existing copper cabling can be used instead of having to rewire with optical fiber.


<br><br>
Dual WAN with FE Port & GE Port
<br>
Having two WAN ports a router can be configured to operate with Dual WAN. This means we can select two ISP connections to our router, a primary WAN connected through GE (Gigabit Ethernet) Port and a secondary WAN connected through FE (Fast Ethernet) port.
<br>
There are two modes we can choose to enable when using Dual WAN.


<br><br>
Failover and Failback Mode
<br>
In this mode, in order to provide an uninterrupted internet connection, the system will automatically detect our network status by periodically sending DNS queries to a DNS server or sending a ping to either the default gateway or the address we specified in the configuration. 

<br><br>
When our primary WAN connected through GE (Gigabit Ethernet) Port fails, our router will switch to the backup network connected through FE (Fast Ethernet) port, which allows your Internet connection to continue working after an error has occurred.
<br>
When the primary WAN (at GE Port) has been detected and is connected to the internet by using a physical cable, our connection will revert to the Primary WAN as long as failback has been enabled.


<br><br>
Load Balance Mode
<br>
When the Load Balance Mode is enabled, we can distribute the load between the Primary WAN (at GE Port) and Backup WAN (at FE). By enabling routing rules and adding rules appropriately, we can route requests from a particular device through the Primary WAN or Secondary (Backup) WAN.



## 2.1.4. SFP (Small Form-factor Pluggable)



An SFP port is a slot on a network device into which small form-factor pluggable (SFP) transceivers are inserted. An SFP port connection enables the transfer of data between two faraway network devices via an SFP transceiver and appropriate cabling. In other words, the port and its corresponding SFP transceiver allow the two network devices to communicate with each other over an extended distance.
<br>
SFP is helpful in military, industrial and commercial settings where numerous network devices in a widespread area require a wired, high-speed, reliable connection. SFP socket enables interfacing two faraway  network devices using a fiber optic or copper networking cable. SFP is hot-plugged. A hot-plugged (also known as hot-swappable) device is a device that is added or removed to the system without having to shut down the operating system or to power off the system.






## 2.1.5. USB Port



The Universal Serial Bus (USB) ports on the router enable important security and provisioning capabilities, including secure device authentication, storage of removable credentials for establishing secure VPN connections, secure distribution of configuration files, bulk flash storage for files and configuration, and booting from the USB. 
<br>
Two new features are available to take advantage of these USB ports: USB eToken device support and USB flash support. 

<br><br>
The USB eToken device feature provides secure configuration distribution and allows you to store VPN credentials for deployment. The USB eToken devices are supplied by SafeNet, and SafeNet owns the eToken trademark. 


<br><br>
The USB eToken device feature enables device authentication and simplifies the deployment and secure configuration of Cisco routers. It uses smart card technology in a USB form factor to facilitate the authentication and configuration process. The token provides secure access to the router. The token and a personal identification number (PIN) are necessary to access the configuration, keys, and credentials. You can also use the token to provide the configuration to the router securely, because the configuration can be encrypted on the token. 

<br><br>

The USB flash feature allows you to store images and configurations, and boot images directly through USB flash memory. The USB flash feature provides an optional secondary storage capability and an additional boot device. Images, configurations, and other files can be copied to or from the Cisco USB flash memory with the same reliability as storing and retrieving files using the Compact Flash card. Cisco USB flash memory is available in 64-, 128-, and 256-MB sizes.



## 2.1.6. V.92 Backup Port



V.92 provides dial backup and remote management functions if the main WAN link fails.
<br>
V.92 is an ITU-T recommendation, titled Enhancements to Recommendation V.90, that establishes a modem standard allowing near 56 kb/s download and 48 kb/s upload rates. With V.92 PCM is used for both the upstream and downstream connections; previously 56K modems only used PCM for downstream data.


<br><br>
Pulse-code modulation (PCM) is a method used to digitally represent sampled analog signals. It is the standard form of digital audio in computers, compact discs, digital telephony and other digital audio applications. In a PCM stream, the amplitude of the analog signal is sampled regularly at uniform intervals, and each sample is quantized to the nearest value within a range of digital steps. 




## 2.1.7. 8xLAN Ethernet Ports ( 4xGE Ports & 4xPoE Ports)



LAN stands for local area network. That is an industry term for a private network.
<br>
The LAN port allows a computer to connect to a network using a wired connection. The picture is a close up of what a LAN port looks like for a network cable using a RJ-45 connector. 
<br>
4 among this group of 8 LAN ports are GE (Gigabit Ethernet) ports. We discussed above what a Gigabit Ethernet port is and what is capable of doing. The remaining 4 ports are PoE.

Let's discuss about PoE (Power over Ethernet).
<br>
Power over Ethernet (PoE) is a technology that passes electric power over twisted-pair Ethernet cable to powered devices (PD), such as wireless access points, IP cameras, and VoIP phones in addition to the data that cable usually carries. It enables one RJ45 cable to provide both data connection and electric power to PDs instead of having a separate cable for each.
<br>
In a PoE system, power-source equipment (PSE) injects 56.5 V at a maximum current level of 350 mA onto a standard Ethernet LAN cable. Maximum power at the Ethernet switch is 15.4 W per PSE port. However, due to cable losses, the maximum voltage and power available at powered-device (PD) equipment (phones, wireless access points, cameras, etc.) is ­48 V and 12.95 W, respectively.

<br><br>
It's worth noting that there are many systems which run lower voltages (commonly 12 volts). Therefore there are PoE models that will run on 12VDC or 24VDC.





### 2.1.8. Console/Auxiliary port



Console port is used to connect a computer directly to a router or switch and manage the router or switch since there is no display device for a router or switch . The console port must be used to initially configure routers because there is no network connection available for connecting to a router using SSH, HTTP or HTTPS. Connecting to the router via the console port means we are physically making a connection with a physical cable to the router. This implies we have to be close to the router itself. A router can be configured to use telnet allowing us to connect to the router from anywhere in the network, and that doesn't require a physical cable connection.




<br><br>
Console vs. AUX

On a router, the console port is used to directly connect the router to a PC using serial communication (terminal emulation) programs like minicom, screen, Putty on Linux and HyperTerminal, Putty on Windows. The router is connected to the PC using a console cable and no network connection is involved.



The AUX port is used for a dial in access to the router. The AUX port is connected to a modem, which in turn is connected to the phone line. A user with a PC, connected to a modem and phone line, can then dial the phone number of the modem connected with the router and get access to the router console remotely.



### 2.1.9. Power connector (Supporting PoE)





### 2.1.10. On/Off Switch





### 2.1.11. Reset Button



A factory reset button can be used to completely wipe the device. Factory resetting our Cisco router will remove all of our current settings, including our network name and WiFi password. So we should be sure to proceed with caution.



### 2.1.12. Earth Ground Connection



Earthing is used to protect people from an electric shock. It does this by providing a path (a protective conductor) for a fault current to flow to earth. These losses of current may occur, for example, when a damaged power cable is stripped and the electrical wires come into contact with the device's casing. Without an earth or ground wire, the current would pass through the body of the first person who might touch the device: this is electrocution.









2.1.13. Kensington security slot
A Kensington Security Slot is part of an anti-theft system designed in the early 1990s and patented by Kryptonite in 1999–2000, assigned to Schlage in 2002, and since 2005 owned and marketed by Kensington Computer Products Group. 

    <- Slot                   <- Lock               <- Lock





In addition to the specific names of interfaces of typical device Cisco 891F seen above, here is a list of names Cisco has given some of the interfaces:

E0: first Ethernet interface

E1: second Ethernet interface

S0: first Serial interface

S1: second Serial interface

BRI 0: first Basic Rate Interface channel for ISDN

BRI 1: Basic Rate Interface channel for ISDN