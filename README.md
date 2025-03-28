# 中文学习平台推荐算法简介

我们的中文学习平台旨在提升用户复习效率。为此，我们在课程主页设计了一套推荐算法，用来推荐用户最近学过的课程。

该算法通过自动化机制提升复习效率，减少用户操作成本。

---

## 什么是推荐算法？

推荐算法（Recommendation Algorithm）是一种根据用户行为，自动为用户“推荐”内容的技术。

推荐系统会基于用户的历史行为进行分析，以提供个性化内容建议。

---

## 我们的推荐是怎么做出来的？

我们的推荐逻辑基于时间过滤与用户行为数据，流程非常简单，总共分为三步：

### 第一步：记录你学了什么

当你在平台上学习课程时，系统会自动记录下来，例如：

| 日期        | 学过的课程           |
|-------------|----------------------|
| 3月20日     | 第1课：拼音基础       |
| 3月21日     | 第3课：常用问候语     |
| 3月22日     | 第7课：中文时间表达   |

这些学习记录就像你在课堂上的“学习行为日志”，帮助系统知道你最近在学什么。

---

### 第二步：找出你最近学过的课程

当你下一次打开课程主页时，系统会做一件事：

> 找出你过去 3 天内学过的课程，并按照时间从新到旧排序。

例如你是 3 月 23 日访问网站，那么系统就会推荐你在 3 月 20~22 日之间学过的课程。

---

### 第三步：展示推荐结果

最后，平台会在首页展示这些你“最近学过”的课程，方便你快速点击进入复习。推荐结果将按照学习日期进行排序，并限制推荐数量以保证内容的相关性。例如：

- 第7课：中文时间表达（3月22日学习）
- 第3课：常用问候语（3月21日学习）
- 第1课：拼音基础（3月20日学习）

---


