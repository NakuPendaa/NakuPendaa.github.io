# 数据结构

::: warning
该文档并没有进行整理和调整，只是临时展示，等待后续调整。
:::

## 目录

-   [一、 考试目标](#一-考试目标)
-   [二、 考试范围及考试内容](#二-考试范围及考试内容)
-   [1、绪论](#1绪论)
    -   [（1） 什么是数据结构  ](#1-什么是数据结构--)
    -   [（2） 基本概念和术语     ](#2-基本概念和术语-----)
    -   [（3） 抽象数据类型的表示与实现   ](#3-抽象数据类型的表示与实现---)
    -   [（4） 算法和算法分析](#4-算法和算法分析)
    -   [2、线性表](#2线性表)
        -   [（1）线性表的定义和基本操作  ](#1线性表的定义和基本操作--)
        -   [（2）线性表的顺序表示和实现](#2线性表的顺序表示和实现)
        -   [
            （3）线性表的链式表示和实现   ](#3线性表的链式表示和实现---)
        -   [（4）线性表的应用](#4线性表的应用)
    -   [
        3、栈和队列](#3栈和队列)
    -   [（1） 栈和队列的基本概念    ](#1-栈和队列的基本概念----)
    -   [（2）栈和队列的顺序存储结构    ](#2栈和队列的顺序存储结构----)
    -   [
        （3）栈和队列的链式存储结构    ](#3栈和队列的链式存储结构----)
    -   [&#x20;
        （4）栈的应用：数制转换、括号匹配的检验、行编辑程序、表达式求值     ](#-4栈的应用数制转换括号匹配的检验行编辑程序表达式求值-----)
-   [
    4、树和二叉树](#4树和二叉树)
    -   [
        （1） 树的定义和基本术语    ](#1-树的定义和基本术语----)
    -   [
        （2） 二叉树：定义、顺序存储结构和链式存储结构、遍历    ](#2-二叉树定义顺序存储结构和链式存储结构遍历----)
    -   [
        （3）线索二叉树的基本概念和构造    ](#3线索二叉树的基本概念和构造----)
    -   [（4） 树和森林：存储结构、森林和二叉树的转换、树和森林的遍历      ](#4-树和森林存储结构森林和二叉树的转换树和森林的遍历------)
-   [
    5、图](#5图)
    -   [
        （1） 图的定义和术语    ](#1-图的定义和术语----)
    -   [ &#x20;
        （2） 图的存储结构：邻接矩阵、邻接表    ](#--2-图的存储结构邻接矩阵邻接表----)
    -   [&#x20;
        （3） 图的遍历：深度优先搜索、广度优先搜索    ](#-3-图的遍历深度优先搜索广度优先搜索----)
    -   [
        （4）图的基本应用： 最小生成树、最短路径、拓扑排序和关键路径](#4图的基本应用-最小生成树最短路径拓扑排序和关键路径)
-   [
    6、查找](#6查找)
    -   [
        （1） 静态查找表：顺序查找、折半查找、分块查找    ](#1-静态查找表顺序查找折半查找分块查找----)
    -   [
        （2） 动态查找表：二叉排序树、平衡二叉树  ](#2-动态查找表二叉排序树平衡二叉树--)
    -   [    &#x20;
        （3） 哈希表](#-----3-哈希表)
-   [
    7、内部排序](#7内部排序)
    -   [
        （1） 基本概念      ](#1-基本概念------)
    -   [
        （2） 插入排序：直接插入排序、折半插入排序、希尔排序       ](#2-插入排序直接插入排序折半插入排序希尔排序-------)
    -   [
        （3） 交换排序：起泡排序、快速排序      ](#3-交换排序起泡排序快速排序------)
    -   [
        （4） 选择排序  ](#4-选择排序--)
    -   [
        （5） 归并排序      ](#5-归并排序------)
    -   [
        （6） 基数排序      稳定](#6-基数排序------稳定)

## 一、 考试目标

1、 掌握数据结构的基本概念、基本原理和基本方法。
2、 掌握数据结构的逻辑结构、存储结构以及各种基本操作的实现，能够对算法进行基本的时间复杂度与空间复杂度的分析。
3、 能够运用数据结构基本原理和方法进行问题的分析与求解，能够对算法进行设计与分析。

## 二、 考试范围及考试内容

## 1、绪论

### （1） 什么是数据结构 &#x20;

数据结构：指互相之间存在着一种或多种特定关系的数据元素的集合，包括逻辑结构，存储结构和对数据的运算。

![](/image/image_swnpbkCOAm.png)

![](/image/image_KK8iBsXpuf.png)

![](/image/image_rNixDuqXUW.png)

### （2） 基本概念和术语    &#x20;

### （3） 抽象数据类型的表示与实现  &#x20;

&#x20; &#x20;

![](/image/image_tVxhYdHHU0.png)

### （4） 算法和算法分析

![](/image/image_CbscRxQ79E.png)

### 2、线性表

#### （1）线性表的定义和基本操作 &#x20;

定义：线性表是具有相同数据类型的n(n>0)个数据元素的有限序列，其中n为表长，当n=0时线性表是一个空表。

插入操作 ：平均时间复杂度O(n)

#### （2）线性表的顺序表示和实现

![](/image/image_bQ-Dv2AAx0.png)

![](/image/image_Dnon5BxC4P.png)

![](/image/image_ry6_3hEI53.png)

#### &#xA;（3）线性表的链式表示和实现  &#x20;

&#x20;

![](/image/image_XRoIF5Pg8r.png)

![](/image/image_7r53Q1zYv1.png)

![](/image/image_dvRehEDxk1.png)

![](/image/image_FL9esPWGWF.png)

![](/image/image_hnWvHeMoh-.png)

![](/image/image_meW5ujLXZm.png)

![](/image/image_tSsHQH_PqT.png)

![](/image/image_JAbpAD2s_k.png)

![](/image/image_rars4gQa--.png)

![](/image/image_JTL489-F8M.png)

![](/image/image_IyvKV6v2wz.png)

![](/image/image_IyvKV6v2wz.png)

#### （4）线性表的应用

### &#xA;3、栈和队列

### （1） 栈和队列的基本概念   &#x20;

栈：只允许在一端进行插入或删除操作的线性表。**后进先出(LIFO)，插入和删除只能在栈顶操作**

### （2）栈和队列的顺序存储结构   &#x20;

栈：只允许在一端进行插入或删除操作的线性表 先进后出，插入和删除只能在栈顶操作

> 栈的顺序存储结构

![](/image/image_1_iwCpDLpj.png)

![](/image/image_wnfigVcjcB.png)

![](/image/image_ZnsC814e6Z.png)

```c
#include<stdio.h>
#define MaxSize 10 //定义数组最大长度

typedef struct {
  int data[MaxSize]; //定义数组大小
  int top; //定义栈顶指针
}Sqstack;

void initStack(Sqstack &S) {
  S.top = -1; //初始化指针位置
}

bool insertStack(Sqstack &S,int e) {
  if (S.top == MaxSize-1) { //判断栈是否满
    printf("栈已经存满");
    return false;
  }
  S.top = S.top + 1; //如果栈没有满，让指针移动一位
  S.data[S.top] = e; //将元素插入到栈中
  return true;
}

bool deleteStack(Sqstack &S,int &e) {
  if (S.top == -1) { //判断栈是否为空
    printf("栈已经空了");
    return false;
  }
  e = S.data[S.top]; //将栈顶元素删除
  S.top = S.top - 1; //数组指针减少1
  return true;
}

bool getTopStack(Sqstack &S,int &e) {
  if (S.top == -1) { //判断栈是否为空
    printf("栈已经空了");
    return false;
  }
  e = S.data[S.top]; //将当前指针元素返回给e
  return true;
}
```

> 队列的顺序存储结构

队列：只允许在一端进行插入，另一端进行删除的线性表。**先进先出(FIFO)**

![](/image/image_S1wXA5lkjk.png)

![](/image/image_xFwNZP19pl.png)

![](/image/image_Pnn70z6yIm.png)

![](/image/image_8-VDaKZvyF.png)

![](/image/image_yvHMPGF2fl.png)

```c
#include <stdio.h>
#define MaxSize 10

typedef struct {
  int data[MaxSize]; //定义队列
  int front, rear; //对头指针和队尾指针
}SqQueue;

void initQueue(SqQueue &S) {
  S.rear = S.front = 0;//初始化队头队尾指针为0
}

bool insertQueue(SqQueue &S,int &e) {
  //判断队列是否为空
  if (S.rear+1%MaxSize == S.front) {
    printf("队列已满");
    return false;
  }
  //将元素插入到队尾
  S.data[S.rear] = e;
  //将队尾指针后移一位
  S.rear = S.rear + 1 % MaxSize; //如果队列已经出了元素，那么将队尾指针指向最新出队位置形成循环队列
  return true;
}

bool DeleteQueue(SqQueue &S,int e) {
  //判断队列是否为空
  if (S.front == S.rear) {
    printf("队列为空");
    return false;
  }
  S.data[S.front] = e; //将值给到队头
  S.front = S.front + 1 % MaxSize;
}

bool getHeadQueue(SqQueue &S,int &e) {
  //判断队列是否为空
  if (S.front == S.rear) {
    printf("队列为空");
    return false;
  }
  e = S.data[S.front]; //将对头的值赋值给e
}
```

### &#xA;（3）栈和队列的链式存储结构   &#x20;

> 链栈的存储结构

![](/image/image_EqtZdnpyuy.png)

![](/image/image_Ht2as4DnH8.png)

![](/image/image_vcUijpcUzD.png)

> 队列的链式存储结构

![](/image/image_gr_nzQhNCD.png)

![](/image/image_XZ5REycJqN.png)

![](/image/image_w-PgNuOPkW.png)

![](/image/image_My5ciHmat3.png)

![](/image/image_vWq51-Mewj.png)

```c
#include<stdio.h>
#include<malloc.h>

typedef struct LinkNode {
  int data;
  struct LinkNode* next;
}LinkNode;

typedef struct {
  LinkNode* front, * rear;
}LinkQueue;

void initQueue(LinkQueue &L) {
  //开辟内存空间
  L.front = L.rear = (LinkNode*)malloc(sizeof(LinkNode));
  //将头结点和尾节点指向头结点
  L.front->next = NULL;
}

void enQueue(LinkQueue &L,int e) {
  //申请新节点
  LinkNode* S = (LinkNode*)malloc(sizeof(LinkNode));
  //赋值操作
  S->data = e;
  //修改指针
  S->next = NULL;
  //将新节点插入到队尾
  L.rear->next = S;
  //修改队尾指针
  L.rear = S;
}

bool deleteQueue(LinkQueue &L,int &e) {
  //判断队列是否为空
  if (L.front == L.rear) {
    printf("队列为空");
    return false;
  }
  //将节点指向头结点后一位
  LinkNode* s = L.front->next;
  //将值带回（删除）
  e = s->data;
  //修改头结点下一位指针
  //也就是让头结点指针指向第二位
  L.front->next = s->next;
  //判断当前删除元素是最后一个元素时
  if (L.rear==s) {
    //将队尾指针指向对头
    L.rear = L.front;
  }
  //释放删除节点空间
  free(s);
  return true;
}
```

### &#x20;&#xA;（4）栈的应用：数制转换、括号匹配的检验、行编辑程序、表达式求值    &#x20;

![](/image/image_rEKSK8_SGJ.png)

![](/image/image_yeyu5froa1.png)

![](/image/image_ivrqgGkA6t.png)

（5） 队列的应用：杨辉三角

## 4、树和二叉树

### &#xA;（1） 树的定义和基本术语   &#x20;

![](/image/image_p1OXKGpO_l.png)

![](/image/image_as2YC81zTQ.png)

1.  树是n（n≥0）个结点的有限集合，n = 0时，称为**空树**。
2.  空树中应满足:
    1.  有且仅有一个特定的称为根的结点。
    2.  当n > 1时，其余结点可分为m（m>0）个互不相交的有限集合T1，T2，…，Tm，其中每个集合本身又是一棵树，并且称为根结点的子树
3.  度：树中一个结点的孩子个数称为该结点的度。所有结点的度的最大值是树的度。
4.  度大于0的结点称为分支结点，度为0的结点称为叶子结点。
5.  结点的层次（深度）：从上往下数。
6.  结点的高度：从下往上数。
7.  树的高度（深度）：树中结点的层数。
8.  有序树：逻辑上看，树中结点的各子树从左至右是有次序的，不能互换。
9.  若树中结点的各子树从左至右是有次序的，不能互换，则该树称为有序树，否则称为无序树。
10. 树中两个结点之间的路径是由这两个结点之间所经过的结点序列构成的，而路径长度是路径上所经过的边的个数。
11. 森林：森林是m（m≥0）棵互不相交的树的集合。

***

### &#xA;（2） 二叉树：定义、顺序存储结构和链式存储结构、遍历   &#x20;

![](/image/image_EO8Kp_Bo2X.png)

![](/image/image_fZpanbxIZo.png)

![](/image/image_J4QFmS8bHA.png)

![](/image/image_Sle2VQajdq.png)

![](/image/image_TKP7gnJNMi.png)

![](/image/image_-XslBzcJZZ.png)

![](/image/image_25bEUVmElH.png)

层次遍历：

![](/image/image_2JMBOjMAkd.png)

先后中序遍历：

-   先序遍历（NLR）根左右
-   中序遍历（LNR）左根右
-   后序遍历（LRN）左右根

![](/image/二叉树遍历_Uo4wUPUtE-.png)

***

> 📌先序遍历代码

```c
void preOrder(BiTree T) {
  if (T!=NULL) {
    printf("%d",T->data);
    preOrder(T->lchild);
    preOrder(T->rchild);
  }
}
```

> 📌中序遍历代码

```c
//中序遍历
void inOrder(BiTree T) {
  if (T!=NULL) {
    inOrder(T->lchild);
    printf("%d", T->data);
    inOrder(T->rchild);
  }
}

```

> 📌后序遍历代码

```c
void postOrder(BiTree T) {
  if (T!=NULL) {
    postOrder(T->lchild);
    postOrder(T->rchild);
    printf("%d", T->data);
  }
}


```

***

### &#xA;（3）线索二叉树的基本概念和构造   &#x20;

### （4） 树和森林：存储结构、森林和二叉树的转换、树和森林的遍历     &#x20;

![](/image/image_1rzIbgBEPi.png)

![](/image/image_ou8nYWXeZg.png)

![](/image/image_ZD5u6-bUfi.png)

![](/image/image_pXWJ6NwILo.png)

（5） 树和二叉树的应用：赫夫曼树及赫夫曼编码

二叉排序树查找长度：

![](/image/image_zcX1sOy1u-.png)

![](/image/image_wcP5IR1DJn.png)

![](/image/image_hH3WOJuTRg.png)

![](/image/image_AkYAbtcmwd.png)

## 5、图

### &#xA;（1） 图的定义和术语   &#x20;

![](/image/image_WH628r2EtR.png)

![](/image/image_ZjVu4SKKMF.png)

![](/image/image_oX4b_HoIqe.png)

![](/image/image_HGZE2i79Iv.png)

![](/image/image_tFm6c4NQP4.png)

![](/image/image_kVvi4RZFId.png)

![](/image/image_YMl8b9TVvF.png)

![](/image/image_HvNLCwJ8Xr.png)

### &#x20; &#xA;（2） 图的存储结构：邻接矩阵、邻接表   &#x20;

![](/image/image_yc1F5xyiAW.png)

![](/image/image_ReW8eLMMcV.png)

### &#x20;&#xA;（3） 图的遍历：深度优先搜索、广度优先搜索   &#x20;

广度优先搜索

![](/image/image_fdmoWnj4in.png)

![](/image/image_iLPq4LPzrH.png)

![](/image/image_jYePiWWJNW.png)

![](/image/image_2OQ9i5ivAI.png)

### &#xA;（4）图的基本应用： 最小生成树、最短路径、拓扑排序和关键路径

![](/image/image_lOZ7sUC4te.png)

![](/image/image_NFcN5ZVjLp.png)

最短路径

BFS算法

![](/image/image_jl8p5j0Vtx.png)

Dij算法：

![](/image/image_oJhYyVqs6g.png)

## 6、查找

### &#xA;（1） 静态查找表：顺序查找、折半查找、分块查找   &#x20;

&#x20;

> 顺序查找

![](/image/image_mNKUeVqQAj.png)

![](/image/image_gjJzwJs5Fi.png)

> 📌折半查找

![](/image/image_vnHGiOiIJk.png)

![](/image/image_W3KmouHp2n.png)

```c
typedef struct {
  int* elem; //动态数组基址
  int TabLen; //表的长度
}SSTable;

bool SearchHalf(SSTable S,int e) {
  int low = 0;
  int high = S.TabLen - 1;
  int mid;
  while(low<=high) {
    mid = (low + high) / 2;
    if (S.elem[mid] == e) {
      return e;
    }
    else if (S.elem[mid]>e) {
      high = mid - 1;
    }
    else {
      low = mid + 1;
    }
  }
  return -1;
}
```

### &#xA;（2） 动态查找表：二叉排序树、平衡二叉树 &#x20;

### &#x20;    &#xA;（3） 哈希表

![](/image/image_6h16p9cvCy.png)

![](/image/image_dR6th1cA6c.png)

![](/image/image__UUwAuN3mk.png)

![](/image/image_QP8xg0BOIT.png)

![](/image/image_I-z_2Mgz8R.png)

![](/image/image_PsBFYRcYtA.png)

![](/image/image_jd3QKjBo7U.png)

![](/image/image__cvNqblX55.png)

![](/image/image_yvW2vMbh9X.png)

![](/image/image_wNY3Cmfx2f.png)

## 7、内部排序

#### &#xA;（1） 基本概念     &#x20;

![](/image/image_7rUSLvYsOm.png)

![](/image/image_J9emiZD0lR.png)

#### &#xA;（2） 插入排序：直接插入排序、折半插入排序、希尔排序      &#x20;

最少n-1趟

![](/image/image_XqIg-atKn2.png)

![](/image/image_kIwWxUq6aB.png)

![](/image/image_DFzBQGHX-6.png)

#### &#xA;（3） 交换排序：起泡排序、快速排序     &#x20;

冒泡排序（稳定）

![](/image/image_wcUP7Cdd-k.png)

快速排序（不稳定）

![](/image/image_ghdvGWrdoQ.png)

![](/image/image_LpyXU9iR1a.png)

> 📌快速排序

```c
# include <stdio.h>

//将整个表划分为左右字表
int Partiton(int A[], int low, int high) {
    //定义基轴
    int pivot = A[low];
    //用low和high搜索基轴最后放下的位置
    while (low<high) {
        //比枢轴小的元素移动到左端
        while (low < high && A[high] >= pivot) --high;
        A[low] = A[high];
        //比枢轴大的元素移动到右端
        while (low < high && A[low] <= pivot) ++low;
        A[high] = A[low];
    }
    A[low] = pivot;
    return low;
}

void QuickSort(int A[],int low,int high) {
    int num = 0;
    //跳出递归条件
    if (low<high) {
        // 划分表
        int pivotpos = Partiton(A, low, high); 
        //左字表排序
        QuickSort(A, low, pivotpos - 1);
        //右子表排序
        QuickSort(A,pivotpos+1,high);
    }
}
int main()
{
    int A[] = { 9,8,7,6,5,4,1,10 };
    int low = 0;
    int high = 7;
    QuickSort(A,low,high);
    return 0;
}
```

#### &#xA;（4） 选择排序 &#x20;

简单选择排序（不稳定）n-1躺

![](/image/image_mOVGyKP7yK.png)

#### &#xA;（5） 归并排序     &#x20;

![](/image/image_NR9gDJvjll.png)

![](/image/image_ij35Om4ZlU.png)

![](/image/image_lu_8lkVgqV.png)

```c
void Merge(int A[],int low,int high,int mid)
{
  int* B = (int*)malloc(n * sizeof(int));
  int k, j,i;
  //将A数组复制到B数组中
  for (int i = low; i <= high;i++) {
    B[i] = A[i];
  }
  //将小的值赋给A数组
  for (i = low, j = mid + 1, k = low; k <= mid && j <= high;k++) {
    if (B[i]<=A[j]) {
      A[k] = B[i++];
    }
    else {
      B[k] = A[j++];
    }
  }
  while (i <= mid) A[k++] = B[i++];
  while (j <= mid) A[k++] = B[j++];
}

void MergeSort(int A[],int low,int high) {
  if (low < high) {
    int mid = (low + high) / 2; 
    MergeSort(A, low, high); //左半部分归并排序
    MergeSort(A, mid + 1, high); //右半部分归并排序
    Merge(A, low, high, mid); //归并
  }
}
```

#### &#xA;（6） 基数排序      稳定

![](/image/image_RNNfCd0zPW.png)

（7） 各种内部排序方法的比较讨论
