# 操作系统
::: warning
该文档并没有进行整理和调整，只是临时展示，等待后续调整。
:::
-   [1、绪论  ](#1绪论--)
    -   [操作系统的定义 ](#操作系统的定义-)
    -   [操作系统的功能   ](#操作系统的功能---)
    -   [操作系统的接口（用户接口：命令行和图形界面、程序接口：系统调用）](#操作系统的接口用户接口命令行和图形界面程序接口系统调用)
    -   [操作系统的发展简史和分类](#操作系统的发展简史和分类)
    -   [操作系统的结构（内核态与用户态，中断与异常，系统调用）。](#操作系统的结构内核态与用户态中断与异常系统调用)
-   [2、进程与线程  ](#2进程与线程--)
    -   [进程的基本概念 ](#进程的基本概念-)
    -   [进程状态与转换 ](#进程状态与转换-)
    -   [进程控制  ](#进程控制--)
    -   [进程同步（临界区、互斥和信号量及硬件与软件实现方法）](#进程同步临界区互斥和信号量及硬件与软件实现方法)
    -   [经典进程的同步问题（生产者与消费者、读者与写者和哲学家进餐）](#经典进程的同步问题生产者与消费者读者与写者和哲学家进餐)
    -   [进程通信（共享存储、消息传递和管道）](#进程通信共享存储消息传递和管道)
    -   [线程（概念和多线程模型）。](#线程概念和多线程模型)
-   [3、处理机调度与死锁 ](#3处理机调度与死锁-)
    -   [处理机调度的基本概念 ](#处理机调度的基本概念-)
    -   [调度时机、切换与过程  ](#调度时机切换与过程--)
    -   [调度的基本原则  ](#调度的基本原则--)
    -   [调度方式 ](#调度方式-)
    -   [典型的调度算法（先来线服务，短任务、短进程、短线程优先调度算法，时间片轮转法，优先级调度，多级反馈队列调度）](#典型的调度算法先来线服务短任务短进程短线程优先调度算法时间片轮转法优先级调度多级反馈队列调度)
    -   [产生死锁的原因和必要条件以及预防死锁的方法。](#产生死锁的原因和必要条件以及预防死锁的方法)
-   [4、内存管理  ](#4内存管理--)
    -   [内存管理概念（程序的装入和链接、逻辑地址与物理地址、内存保护）](#内存管理概念程序的装入和链接逻辑地址与物理地址内存保护)
    -   [交换与覆盖 ](#交换与覆盖-)
    -   [连续分配方式（单一连续和分区）](#连续分配方式单一连续和分区)
    -   [非连续分配方式（分页、分段和段页式）](#非连续分配方式分页分段和段页式)
    -   [虚拟内存管理（虚拟内存的基本概念、请求分页、分段、段页式存储器管理方式、页面置换算法）](#虚拟内存管理虚拟内存的基本概念请求分页分段段页式存储器管理方式页面置换算法)
    -   [常用的页面置换算法（最佳置换OPT算法、先进先出置换FIFO算法、最近最少使用置换LRU算法、时钟置换CLOCK算法）](#常用的页面置换算法最佳置换OPT算法先进先出置换FIFO算法最近最少使用置换LRU算法时钟置换CLOCK算法)
-   [5、设备管理](#5设备管理)
    -   [I/O管理（I/O设备、I/O管理目标、I/O管理功能、I/O应用接⼝、I/O控制方式和I/O软件层次结构）](#IO管理IO设备IO管理目标IO管理功能IO应用接IO控制方式和IO软件层次结构)
    -   [I/O内核子系统（I/O调度概念、高速缓存与缓冲区、设备分配与回收、假脱机技术(SPOOLing)](#IO内核子系统IO调度概念高速缓存与缓冲区设备分配与回收假脱机技术SPOOLing)
-   [6、文件系统  ](#6文件系统--)
    -   [文件系统基础（文件概念，文件结构--顺序文件、索引文件和索引顺序文件，目录结构-文件控制块和索引节点、单级目录结构和两级目录结构、树形目录结构和图形目录结构，文件共享--共享动机、共享方式和共享语义，文件保护--访问类型和访问控制）](#文件系统基础文件概念文件结构--顺序文件索引文件和索引顺序文件目录结构-文件控制块和索引节点单级目录结构和两级目录结构树形目录结构和图形目录结构文件共享--共享动机共享方式和共享语义文件保护--访问类型和访问控制)
    -   [文件系统实现（文件系统层次结构，目录实现，文件实现）](#文件系统实现文件系统层次结构目录实现文件实现)
    -   [磁盘组织与管理（磁盘的结构、磁盘调度算法和磁盘的管理）](#磁盘组织与管理磁盘的结构磁盘调度算法和磁盘的管理)
    -   [常用的磁盘调度算法（FIFO，SSTF，SCAN，C-SCAN）。](#常用的磁盘调度算法FIFOSSTFSCANC-SCAN)


### 操作系统的定义&#x20;

*是管理计算机硬件与软件资源的计算机程序*

### 操作系统的功能  &#x20;

![](/image/image__UeDuUnAHO.png)

![](/image/image_oZwi18MsIr.png)

*进程管理、存储管理、设备管理、文件管理、作业管理*

### 操作系统的接口（用户接口：命令行和图形界面、程序接口：系统调用）

![](/image/image_9YV-WD4-70.png)

-   操作系统提供的接口分为两类：**`命令接口和程序接口`**
-   `命令接口`：用户可以`直接`使用的，利用这些操作命令来组织和控制作业的执行
-   `程序接口`：用户通过程序`间接`使用的，编程人员可以使用它们来请求操作系统服务

### 操作系统的发展简史和分类

1.  手工操作阶段

    缺点：效率太低，计算机大部分时间都等待用户输入。
2.  批处理阶段
    1.  单道批处理系统

        优点：缓解了一定程度的人机速度矛盾，资源利用率有所提升。

        缺点：内存中仅能有- -道程序运行，只有该程序运行结束之后才
        能调入下一道程序。CPU有大量的时间是在空闲等待I/0完成。资源利
        用率依然很低。
    2.  多道批处理系统

        优点:多道程序并发执行，共享计算机资源。资源利用率大幅提升，CPU和其他资源保持“忙碌”状态， 系统吞吐量增大。

        缺点：用户响应时间长，没有人机交互功能(用户提交自己的作业之后就只能等待计算机处理完成，
        中间不能控制自己的作业执行)
        &#x20;  c.分时操作系统
    ![](/image/image_JfTaHvOaSM.png)

    &#x20;   d.实时操作系统

    ![](/image/image_a71p9CXQQC.png)

    e.其他系统

    ![](/image/image_risfHZhITd.png)

#### 操作系统的结构（内核态与用户态，中断与异常，系统调用）。

> 指令

![](/image/image_O8xS5MN2LL.png)

> 处理器状态

![](/image/image_bWu4N0OAq2.png)

> 程序分类

![](/image/image_1BvrXHlPrE.png)

> 体系结构

![](/image/image_gKr8gpod4Q.png)

![](/image/image_Ux4XWJkWOT.png)

> 中断

![](/image/image_RuKhoi_MoW.png)

![](/image/image_66DkP6RX-v.png)

![](/image/image_oFq2cOpv9z.png)

> 系统调用

![](/image/image_2oB89wftVz.png)

### 2、进程与线程 &#x20;

#### 进程的基本概念&#x20;

**进程**：一个具有一定独立功能的程序关于某个数据集合的一次运行活动，是系统进行资源分配和调度运行的基本单位

#### 进程状态与转换&#x20;

> 三种基本状态

![](/image/image_zH3S2CT-QZ.png)

![](/image/image_dyTZSJJ9uS.png)

> 进程转换

![](/image/image_zZVT-CHhir.png)

**活动阻塞态→静止阻塞态**
由两种情况会发生这种挂起变化。

1、若当前不存在活动就绪进程，则至少需要一个活动阻塞进程由内存对换至外存成为静止阻塞进程，以腾出空间从外存调入静止就绪进程使其称为活动就绪进程。

2、操作系统根据当前的资源状态和新跟那个要求决定。
**静止阻塞态→活动阻塞态**
当系统已经得知导致该进程阻塞的事件即将结束和内存有很大的空闲的空间时，则会从外存调入静止阻塞态使其称为活动阻塞态。
**静止阻塞态→静止就绪态**
静止阻塞进程所需的资源得到满足或等待的事件已经完成。
**静止就绪态→活动就绪态**
有三种情况会发生种情况：

1、外存的静止就绪进程具有比内存中的活动就绪进程更高的优先级。

2、内存出现一大块空闲空间。

3、当前内存中没有活动就绪进程
**活动就绪态→静止就绪态**
这种状态变化主要是由于系统调节负荷的需要，或者是系统优化性能的需求，而将某些不需要运行的活动就绪进程由内存换出至外存。
**运行态挂起→静止就绪态**
原因：程序出现错误或异常，或者是对运行进程进行分析的需要

#### 进程控制 &#x20;

进程控制的主要功能是对系统中的所有进程实施有效的管理，它具有创建新进程、撤销已有进程、实现
进程状态转换等功能。

简化理解：进程控制就是要实现进程状态的转换

用**原语**实现进程控制。原语的**特点**是执行期间**不允许中断**，只能一气呵成。
这种不可被中断的操作即**原子操作**。
原语采用“**关中断**指令”和“**开中断**指令”实现

#### 进程同步（临界区、互斥和信号量及硬件与软件实现方法）

进程同步：

![](/image/image_RTKHutws2v.png)

进程互斥：

![](/image/image_7MtYGMyw1N.png)

临界资源：

我们把一个时间段内只允许一个进程使用的资源称为临界资源。许多物理设备(比如摄像头、打印机)都属于临界资源。此外还有许多变量、数据、内存缓冲区等都属于临界资源。
对临界资源的访问，必须互斥地进行。互斥，亦称间接制约关系。进程互斥指当一个进程访问某临界资源时，另一个想要访问该临界资源的进程必须等待。当前访问临界资源的进程访问结束，释放该资源之后,另一个进程才能去访问临界资源。&#x20;

临界资源互斥访问四部分：

![](/image/image_r_xmXjZwMU.png)

临界资源四原则：

![](/image/image_IgNW2RbSTi.png)

***

> 📌进程互斥软件实现方法

![](/image/image_r83mDtUshf.png)

![](/image/image_a8qD93h6Yq.png)

![](/image/image_-xGUhLtmSA.png)

![](/image/image_2Pjf60NdUe.png)

***

> 📌进程互斥硬件实现方法

![](/image/image_lz_rM7_QL8.png)

![](/image/image_UZDDQO60fw.png)

![](/image/image_DSJT5O3GBe.png)

***

> 📌信号量

![](/image/image_U_QeW2DMwU.png)

![](/image/image_yFvQaXV-Lo.png)

![](/image/image_eScx-fSE7L.png)

![](/image/image_U25aNzBllL.png)

![](/image/image_Yi2Z8SssO0.png)

![](/image/image_hLpuoIklIp.png)

![](/image/image_V_EzZsKhQT.png)

#### 经典进程的同步问题（生产者与消费者、读者与写者和哲学家进餐）

> 📌生产者与消费者

![](/image/image_A-BXenDdyr.png)

> 📌读者与写者

![](/image/image_k49_fLb53C.png)

#### 进程通信（共享存储、消息传递和管道）

> 📌共享存储

![](/image/image_2VofWN5b21.png)

> 📌管道

![](/image/image_7j2v-83X7x.png)

> 📌消息传递

![](/image/image_jHV7xD-_gM.png)

***

#### 线程（概念和多线程模型）。

线程是一个基本的CPU执行单元也是程序执行流最小单位。

引入线程后，进程只作为除CPU之外的系统资源分配单元。

进程是资源**分配**的基本单位，线程是资源**调度**的基本单位。

> 📌多线程模型

![](/image/image_oCCV9RS1q4.png)

![](/image/image_vqaGQm1lNU.png)

![](/image/image_na4QkAlS4z.png)

### 3、处理机调度与死锁&#x20;

#### 处理机调度的基本概念&#x20;

按某种算法选择一个进程将处理机分配给它

![](/image/image_buFMkPjH6A.png)

#### 调度时机、切换与过程 &#x20;

![](/image/image_Ix69T4_hlQ.png)

#### 调度的基本原则 &#x20;

> CPU利用率

![](/image/image_Lj7WZwpCfp.png)

> 系统吞吐量

![](/image/image_pAArM7AyD6.png)

> 周转时间

![](/image/image_ARvDXj2zN3.png)

![](/image/image_mZUvDpCq40.png)

> 等待时间

![](/image/image_wGPGlbeR7S.png)

> 响应时间

![](/image/image_2G_TsFoRvx.png)

#### 调度方式&#x20;

![](/image/image_C1pH-VNQHV.png)

#### 典型的调度算法（先来线服务，短任务、短进程、短线程优先调度算法，时间片轮转法，优先级调度，多级反馈队列调度）

> 📌先来先服务（FCFS）

![](/image/image_2Y-mWz1Jv8.png)

![](/image/image_Ll6KVQ-oTA.png)

***

> 📌短作业优先（SJF）

![](/image/image_bF5eVgD4JB.png)

![](/image/image_7nFo66267r.png)

***

> 📌高响应比优先（HRRN）

![](/image/image_I0Y6cy09Ev.png)

![](/image/image_OqgWjs1aAt.png)

***

> 📌总结

![](/image/image_OvKyG2N1gM.png)

***

> 📌优先级调度算法

![](/image/image_oxYQyAlzB0.png)

![](/image/image_Tt0TugNoQx.png)

![](/image/image_wp7eckcvqW.png)

![](/image/image_2AlT_Rky33.png)

***

> 📌优先级调度算法

![](/image/image_v0Iyuyv6Gv.png)

**抢占式：**

![](/image/image_UhasfPNkl7.png)

**非抢占式：**

![](/image/image_5so7617Iav.png)

***

> 📌多级反馈队列调度算法

![](/image/image_Ah0V-tocgq.png)

![](/image/image__Mif3ph7-E.png)

***

> 📌总结

适用于**交互式**系统

![](/image/image_BCqH8ws3ds.png)

#### 产生死锁的原因和必要条件以及预防死锁的方法。

![](/image/image_AhTKW98LOY.png)

![](/image/image_xGpP_cR72x.png)

![](/image/image_uhA8d0cmB_.png)

### 4、内存管理 &#x20;

#### 内存管理概念（程序的装入和链接、逻辑地址与物理地址、内存保护）

> 装入

![](/image/image_YeJVhrtwX0.png)

![](/image/image_Bo3xMFDQlZ.png)

![](/image/image_HyolmXot4w.png)

> 链接

![](//image/image_yChtmaN6Rs.png)

![](/image/image_x55TxBenGj.png)

![](/image/image_cXF1ibp5Br.png)

![](/image/image_F6DkClm76F.png)

![](/image/image_OS1HYMnE7Y.png)

#### 交换与覆盖&#x20;

![](/image/image_s3SRraJW8R.png)

![](/image/image_WPeTm6p94k.png)

![](/image/image_9G6lvyzT5r.png)

#### 连续分配方式（单一连续和分区）

**连续分配**：指为用户进程分配的必须是一个连续空间

![](/image/image_3Eo49aXCgO.png)

![](/image/image_CKNPygPbEz.png)

![](/image/image_h5jyxQdZEQ.png)

![](/image/image_p3Xzq_vsxF.png)

![](/image/image_dRVD2mbb9m.png)

![](/image/image_wEkSd58uXb.png)

#### 非连续分配方式（分页、分段和段页式）

> 基本分页存储

非连续分配：为用户进程分配的可以是一些分散的内存空间&#x20;

页号=逻辑地址/页面长度（取除法的整数部分）

页内偏移量=逻辑地址%页面长度（取除法的余数部分)

页面在内存中的起始位置：操作系统需要用某种数据结构记录进程各个页面的起始位置

![](/image/image_-x1lLfYShJ.png)

![](/image/image_sOL_rYiBBN.png)

![](/image/image_Ykt1_PhuAf.png)

![](/image/image_xhjBhnnnv1.png)

![](/image/image_BGpLxjf8Lw.png)

![](/image/image_7pclMtPK3P.png)

![](/image/image_hXsyex8XTH.png)

![](/image/image_mIcxcYfkwL.png)

![](/image/image_i9Rgp7x3gH.png)

> 基本分段存储管理

![](/image/image_jt-VgHuoQM.png)

![](/image/image_oBQbSm4Kpt.png)

![](/image/image_-HJv5_aCHA.png)

![](/image/image__7DcIQIFf5.png)

> 段页

![](/image/image_o_RsLASl5J.png)

#### 虚拟内存管理（虚拟内存的基本概念、请求分页、分段、段页式存储器管理方式、页面置换算法）

![](/image/image_RlCJcAsGla.png)


![](/image/image_PM2QL41OII.png)
 
![](/image/image_qVjgqlTimm.png)

![](/image/image_Za_on4kwoo.png)

![](/image/image_EM2Jy_iGpj.png)

> 请求分页

#### 常用的页面置换算法（最佳置换OPT算法、先进先出置换FIFO算法、最近最少使用置换LRU算法、时钟置换CLOCK算法）

![](/image/image_14ufC3VOpa.png)

![](/image/image_qdR3tX8eo-.png)

![](/image/image_Vt-2Kb7GJO.png)

![](/image/image_-rCjSHrETy.png)

![](/image/image_ZUgmVc9y0l.png)

![](/image/image_ZR33tscJ_X.png)

### 5、设备管理

#### I/O管理（I/O设备、I/O管理目标、I/O管理功能、I/O应用接⼝、I/O控制方式和I/O软件层次结构）

> 📌I/O控制方式

![](/image/image_UpjDlIe9gs.png)

![](/image/image_IM0jovHVo4.png)

![](/image/image_XxXMZ3T4k1.png)

![](/image/image_TxFaEGwgoR.png)

![](/image/image_llEj97IZzB.png)

> 📌I/O软件层次结构

![](/image/image_Xp7Zt8fVFD.png)

#### I/O内核子系统（I/O调度概念、高速缓存与缓冲区、设备分配与回收、假脱机技术(SPOOLing)

![](/image/image_5j4eb0_uxw.png)

![](/image/image_6medMS4QOs.png)

![](/image/image_RP8kcfE9Ka.png)

![](/image/image_rssdSDerOH.png)

![](/image/image_ta5euXvz8_.png)

![](/image/image_CC7bGHc2CC.png)

![](/image/image_89WGjSqZmx.png)

![](/image/image_v2rqyiyBFk.png)

![](/image/image_E_rfCMB5M8.png)

### 6、文件系统 &#x20;

#### 文件系统基础（文件概念，文件结构--顺序文件、索引文件和索引顺序文件，目录结构-文件控制块和索引节点、单级目录结构和两级目录结构、树形目录结构和图形目录结构，文件共享--共享动机、共享方式和共享语义，文件保护--访问类型和访问控制）

> 📌顺序文件

![](/image/image_JVgLDvdsM9.png)

![](/image/image_wme7jFYWnw.png)

> 📌索引文件

![](/image/image_hlNwvADRnU.png)

> 📌索引顺序文件

![](/image/image_o5s_lg2s3O.png)

***

> 📌文件控制块

![](/image/image_rr0uhdYXUC.png)

> 📌单级目录

![](/image/image_y7hLphwMzc.png)

> 📌两级目录结构

![](/image/image_zz9ntxWnpp.png)

> 📌多级目录结构

![](/image/image_DN-sopUcx6.png)

> 📌图形目录结构

![](/image/image_T0D1eJTmxK.png)

> 📌索引节点

![](/image/image_9fn-JKEqpj.png)

> 📌总结

![](/image/image_CIua4P6GbT.png)

***

> 📌文件共享

![](/image/image_Xt2YLWImLU.png)

![](/image/image_a_EI5Qp8Ge.png)

***

> 📌文件保护

![](/image/image_sZowWI9CQr.png)

![](/image/image_U-AHHZGx8L.png)

![](/image/image_nd0kDe2jX6.png)

![](/image/image_DCjadh5lrg.png)

![](/image/image_mttJfIO6O9.png)

#### 文件系统实现（文件系统层次结构，目录实现，文件实现）

![](/image/image_eWayxz6RgE.png)

![](/image/image_wAOslDc0HY.png)

#### 磁盘组织与管理（磁盘的结构、磁盘调度算法和磁盘的管理）

![](/image/image_49sbpZTbJV.png)

![](/image/image_7ngWFJdFA3.png)

![](/image/image_q1pnjWWSEK.png)

![](/image/image_DMWMHFcu_Y.png)

> 📌磁盘管理

![](/image/image_TSv8COucMV.png)

#### 常用的磁盘调度算法（FIFO，SSTF，SCAN，C-SCAN）。

![](/image/image_4qrIk4YY46.png)

![](/image/image_e7EBz-Owv1.png)

![](/image/image_tDxjOfMq1e.png)

![](/image/image_2i5887Wjmw.png)

![](/image/image_wQrFSBJ-TE.png)

![](/image/image_m1LSNoVMxX.png)

![](/image/image_IYay1Spbq3.png)
