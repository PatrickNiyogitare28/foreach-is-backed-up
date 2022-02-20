# What are Embedded Systems?

Main Objective of the lesson: Introduce learners to Embedded Systems. Let them have a general idea of the type of hardware and software that’ll be dealt with during the course Experimental Embedded Systems & IoT 



## Required Materials

- Computer with installed Arduino IDE

- Arduino UNO board with its USB cable (x1)

- Additional ATMEGA328P-PU chip (x1) (optional)

- Arduino Nano with its USB cable (x1)

- Crystal Oscillator 16MHz (x1)

- 22pF capacitor (x2)

- Breadboard (x1)

- Jumper wires (a dozen or 2)

- 10K resistor (x1)

- LED’s (red x1, green x1, white x2)

- 220R resistor (x4)

- Chip puller (x1)





Embedded systems are everywhere around us, they are made up from combining together hardware and software.  Software is embedded in hardware as a significant component. Embedded systems are either fixed in capability or programmable. Cars, mobile phones, washing machines, etc..., all are examples of embedded systems.



## What do embedded systems consist of?

There are three important components that make up an embedded  system: 

- Hardware, 

- Software, and 

- Time Operating System.

Hardware consists of processors, system applications,  specific circuits, timers, and memory.

Software must do specific tasks in series facing three constraints which are: availability of system memory, availability of processor speed, and the need to limit the power dissipation.

Time Operating System organizes the system and provides a technique that lets the processor run according to the schedule, switching from one process to the other.



## What are the qualities of an efficient embedded system?

- High speed of task processing

- Low Power Dissipation

- Smaller and lightweight

- Very high accuracy (100%)

- High adaptability and accessibility


- High reliability over a long period of time



Embedded systems are classified according to their practical and performance into four categories:
1 - Stand Alone Embedded system:
It is a system that works by itself, and does not need a host system like a computer.

It takes digital or analog inputs, does some processing to them and outputs the data to the output service to which that Embedded System is attached.

Some examples of stand-alone embedded systems include:

- Smartwatches

- Video game consoles

- Digital cameras

- MP3 players

- Calculators


## 2 - Real-Time Embedded System :
It gives the output in a specific time, so it basically follows deadlines to complete the tasks. The following two systems are the types of Real Time system:

A - Hard Real-Time system :
Those systems interact usually with physical hardware instead of interacting with a human being. Time violation will have an effect on it in a way it can cause damage or calamity.

Some examples of hard real-time embedded systems are:

- Autopilot systems

- Car engine control systems

- Pacemakers

These systems require all deadlines to be met or they will fail.



B - Soft Real-Time Embedded System :
For a Soft Real Time  Embedded System, missing few deadlines is harmless. However if the number of deadlines missed increases the system will get weakened and things will get worse.

Some examples of soft real-time embedded systems are:

- Video games

- Live audio-video systems

These systems allow for some latency while still remaining functional. 



## 3 - Networked Embedded system:
It has network interfaces enabling it to be either on a local area network (LAN), on a wide area network (WAN), or on the internet. It can be connected either by wires or wirelessly.

Some examples of where networked embedded systems are used include:

- ATM machines

- IoT devices

- Card swipe machines



## 4 - Mobile Embedded systems :
Some examples of mobile embedded systems are most of the portable devices such as mobiles, digital cameras. They commonly have memory constraints.

Some examples of where mobile embedded systems can be found are:

- Smartphones

- Digital personal assistants

- Digital Cameras



My Questions :

1 - What is the mechanic of getting it to work ?

2 - Why Soft Real-Time systems miss deadlines eventually?

3 - How does missing deadlines affect real-time systems?

4 - When do we consider the system as reliable ?


5 - How does the operating system organize the time?


## References :

1. IoTAgenda at TechTarget

2. Embedded Systems Design at IgniteTechnologies
3. PhotoLink

4. Embedded Systems Basics at SlideShare

5. Components of Embedded Systems at PurpleLeap
6. Embedded Systems Applications at SlideShare