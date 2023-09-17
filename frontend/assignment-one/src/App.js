import './App.css';
import QuestionsScreen from './screens/QuestionsScreen/QuestionsScreen';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserProfileScreen from './screens/UserProfileScreen/UserProfileScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import { useAuth } from './utils/AuthContext';

const dummyData = [
    {
      "id": 1,
      "Title": "Reverse a String",
      "Categories": [
        "Strings",
        "Algorithms"
      ],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/reverse-string/",
      "Description": "<p>Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.</p>\n\n<p>You must do this by modifying the input array <a href=\"https://en.wikipedia.org/wiki/In-place_algorithm\" target=\"_blank\">in-place</a> with <code>O(1)</code> extra memory.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> s = [\"h\",\"e\",\"l\",\"l\",\"o\"]\n<strong>Output:</strong> [\"o\",\"l\",\"l\",\"e\",\"h\"]\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]\n<strong>Output:</strong> [\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>s[i]</code> is a <a href=\"https://en.wikipedia.org/wiki/ASCII#Printable_characters\" target=\"_blank\">printable ascii character</a>.</li>\n</ul>\n"
    },
    {
      "id": 2,
      "Title": "Linked List Cycle Detection",
      "Categories": [
        "Data Structures",
        "Algorithms"
      ],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/linked-list-cycle/",
      "Description": "<p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.</p>\n\n<p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the&nbsp;<code>next</code>&nbsp;pointer. Internally, <code>pos</code>&nbsp;is used to denote the index of the node that&nbsp;tail's&nbsp;<code>next</code>&nbsp;pointer is connected to.&nbsp;<strong>Note that&nbsp;<code>pos</code>&nbsp;is not passed as a parameter</strong>.</p>\n\n<p>Return&nbsp;<code>true</code><em> if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png\" style=\"width: 300px; height: 97px; margin-top: 8px; margin-bottom: 8px;\">\n<pre><strong>Input:</strong> head = [3,2,0,-4], pos = 1\n<strong>Output:</strong> true\n<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png\" style=\"width: 141px; height: 74px;\">\n<pre><strong>Input:</strong> head = [1,2], pos = 0\n<strong>Output:</strong> true\n<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 0th node.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png\" style=\"width: 45px; height: 45px;\">\n<pre><strong>Input:</strong> head = [1], pos = -1\n<strong>Output:</strong> false\n<strong>Explanation:</strong> There is no cycle in the linked list.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of the nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.</li>\n\t<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>\n\t<li><code>pos</code> is <code>-1</code> or a <strong>valid index</strong> in the linked-list.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Can you solve it using <code>O(1)</code> (i.e. constant) memory?</p>\n"
    },
    {
      "id": 3,
      "Title": "Roman to Integer",
      "Categories": [
        "Algorithms"
      ],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/roman-to-integer/",
      "Description": "<p>Roman numerals are represented by seven different symbols:&nbsp;<code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p>\n\n<pre><strong>Symbol</strong>       <strong>Value</strong>\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000</pre>\n\n<p>For example,&nbsp;<code>2</code> is written as <code>II</code>&nbsp;in Roman numeral, just two ones added together. <code>12</code> is written as&nbsp;<code>XII</code>, which is simply <code>X + II</code>. The number <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.</p>\n\n<p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:</p>\n\n<ul>\n\t<li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9.&nbsp;</li>\n\t<li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90.&nbsp;</li>\n\t<li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li>\n</ul>\n\n<p>Given a roman numeral, convert it to an integer.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input:</strong> s = \"III\"\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> III = 3.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> s = \"LVIII\"\n<strong>Output:</strong> 58\n<strong>Explanation:</strong> L = 50, V= 5, III = 3.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre><strong>Input:</strong> s = \"MCMXCIV\"\n<strong>Output:</strong> 1994\n<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 15</code></li>\n\t<li><code>s</code> contains only&nbsp;the characters <code>('I', 'V', 'X', 'L', 'C', 'D', 'M')</code>.</li>\n\t<li>It is <strong>guaranteed</strong>&nbsp;that <code>s</code> is a valid roman numeral in the range <code>[1, 3999]</code>.</li>\n</ul>\n"
    },
    {
      "id": 4,
      "Title": "Add Binary",
      "Categories": [
        "Bit Manipulation",
        "Algorithms"
      ],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/add-binary/",
      "Description": "<p>Given two binary strings <code>a</code> and <code>b</code>, return <em>their sum as a binary string</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> a = \"11\", b = \"1\"\n<strong>Output:</strong> \"100\"\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> a = \"1010\", b = \"1011\"\n<strong>Output:</strong> \"10101\"\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= a.length, b.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>a</code> and <code>b</code> consist&nbsp;only of <code>'0'</code> or <code>'1'</code> characters.</li>\n\t<li>Each string does not contain leading zeros except for the zero itself.</li>\n</ul>\n"
    },
    {
      "id": 5,
      "Title": "Fibonacci Number",
      "Categories": [
        "Recursion",
        "Algorithms"
      ],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/fibonacci-number/",
      "Description": "<p>The <b>Fibonacci numbers</b>, commonly denoted <code>F(n)</code> form a sequence, called the <b>Fibonacci sequence</b>, such that each number is the sum of the two preceding ones, starting from <code>0</code> and <code>1</code>. That is,</p>\n\n<pre>F(0) = 0, F(1) = 1\nF(n) = F(n - 1) + F(n - 2), for n &gt; 1.\n</pre>\n\n<p>Given <code>n</code>, calculate <code>F(n)</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input:</strong> n = 2\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> F(2) = F(1) + F(0) = 1 + 0 = 1.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> n = 3\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> F(3) = F(2) + F(1) = 1 + 1 = 2.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre><strong>Input:</strong> n = 4\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> F(4) = F(3) + F(2) = 2 + 1 = 3.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= n &lt;= 30</code></li>\n</ul>\n"
    },
    {
      "id": 6,
      "Title": "Implement Stack using Queues",
      "Categories": [
        "Data Structures"
      ],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/implement-stack-using-queues/",
      "Description": "<p>Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (<code>push</code>, <code>top</code>, <code>pop</code>, and <code>empty</code>).</p>\n\n<p>Implement the <code>MyStack</code> class:</p>\n\n<ul>\n\t<li><code>void push(int x)</code> Pushes element x to the top of the stack.</li>\n\t<li><code>int pop()</code> Removes the element on the top of the stack and returns it.</li>\n\t<li><code>int top()</code> Returns the element on the top of the stack.</li>\n\t<li><code>boolean empty()</code> Returns <code>true</code> if the stack is empty, <code>false</code> otherwise.</li>\n</ul>\n\n<p><b>Notes:</b></p>\n\n<ul>\n\t<li>You must use <strong>only</strong> standard operations of a queue, which means that only <code>push to back</code>, <code>peek/pop from front</code>, <code>size</code> and <code>is empty</code> operations are valid.</li>\n\t<li>Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input</strong>\n[\"MyStack\", \"push\", \"push\", \"top\", \"pop\", \"empty\"]\n[[], [1], [2], [], [], []]\n<strong>Output</strong>\n[null, null, null, 2, 2, false]\n\n<strong>Explanation</strong>\nMyStack myStack = new MyStack();\nmyStack.push(1);\nmyStack.push(2);\nmyStack.top(); // return 2\nmyStack.pop(); // return 2\nmyStack.empty(); // return False\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= x &lt;= 9</code></li>\n\t<li>At most <code>100</code> calls will be made to <code>push</code>, <code>pop</code>, <code>top</code>, and <code>empty</code>.</li>\n\t<li>All the calls to <code>pop</code> and <code>top</code> are valid.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow-up:</strong> Can you implement the stack using only one queue?</p>\n"    
    },
    {
      "id": 7,
      "Title": "Combine Two Tables",
      "Categories": [
        "Databases"
      ],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/combine-two-tables/",
      "Description": "<p>Table: <code>Person</code></p>\n\n<pre>+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| personId    | int     |\n| lastName    | varchar |\n| firstName   | varchar |\n+-------------+---------+\npersonId is the primary key (column with unique values) for this table.\nThis table contains information about the ID of some persons and their first and last names.\n</pre>\n\n<p>&nbsp;</p>\n\n<p>Table: <code>Address</code></p>\n\n<pre>+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| addressId   | int     |\n| personId    | int     |\n| city        | varchar |\n| state       | varchar |\n+-------------+---------+\naddressId is the primary key (column with unique values) for this table.\nEach row of this table contains information about the city and state of one person with ID = PersonId.\n</pre>\n\n<p>&nbsp;</p>\n\n<p>Write a solution to report the first name, last name, city, and state of each person in the <code>Person</code> table. If the address of a <code>personId</code> is not present in the <code>Address</code> table, report <code>null</code> instead.</p>\n\n<p>Return the result table in <strong>any order</strong>.</p>\n\n<p>The result format is in the following example.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input:</strong> \nPerson table:\n+----------+----------+-----------+\n| personId | lastName | firstName |\n+----------+----------+-----------+\n| 1        | Wang     | Allen     |\n| 2        | Alice    | Bob       |\n+----------+----------+-----------+\nAddress table:\n+-----------+----------+---------------+------------+\n| addressId | personId | city          | state      |\n+-----------+----------+---------------+------------+\n| 1         | 2        | New York City | New York   |\n| 2         | 3        | Leetcode      | California |\n+-----------+----------+---------------+------------+\n<strong>Output:</strong> \n+-----------+----------+---------------+----------+\n| firstName | lastName | city          | state    |\n+-----------+----------+---------------+----------+\n| Allen     | Wang     | Null          | Null     |\n| Bob       | Alice    | New York City | New York |\n+-----------+----------+---------------+----------+\n<strong>Explanation:</strong> \nThere is no address in the address table for the personId = 1 so we return null in their city and state.\naddressId = 1 contains information about the address of personId = 2.\n</pre>\n"
    },
    {
      "id": 8,
      "Title": "Repeated DNA Sequences",
      "Categories": [
        "Algorithms",
        "Bit Manipulation"
      ],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/repeated-dna-sequences/",
      "Description": "<p>The <strong>DNA sequence</strong> is composed of a series of nucleotides abbreviated as <code>'A'</code>, <code>'C'</code>, <code>'G'</code>, and <code>'T'</code>.</p>\n\n<ul>\n\t<li>For example, <code>\"ACGAATTCCG\"</code> is a <strong>DNA sequence</strong>.</li>\n</ul>\n\n<p>When studying <strong>DNA</strong>, it is useful to identify repeated sequences within the DNA.</p>\n\n<p>Given a string <code>s</code> that represents a <strong>DNA sequence</strong>, return all the <strong><code>10</code>-letter-long</strong> sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in <strong>any order</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> s = \"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT\"\n<strong>Output:</strong> [\"AAAAACCCCC\",\"CCCCCAAAAA\"]\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> s = \"AAAAAAAAAAAAA\"\n<strong>Output:</strong> [\"AAAAAAAAAA\"]\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>s[i]</code> is either <code>'A'</code>, <code>'C'</code>, <code>'G'</code>, or <code>'T'</code>.</li>\n</ul>\n"
    },
    {
      "id": 9,
      "Title": "Course Schedule",
      "Categories": [
        "Data Structures",
        "Algorithms"
      ],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/course-schedule/",
      "Description": "<p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you <strong>must</strong> take course <code>b<sub>i</sub></code> first if you want to take course <code>a<sub>i</sub></code>.</p>\n\n<ul>\n\t<li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li>\n</ul>\n\n<p>Return <code>true</code> if you can finish all courses. Otherwise, return <code>false</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input:</strong> numCourses = 2, prerequisites = [[1,0]]\n<strong>Output:</strong> true\n<strong>Explanation:</strong> There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0. So it is possible.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> numCourses = 2, prerequisites = [[1,0],[0,1]]\n<strong>Output:</strong> false\n<strong>Explanation:</strong> There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= numCourses &lt;= 2000</code></li>\n\t<li><code>0 &lt;= prerequisites.length &lt;= 5000</code></li>\n\t<li><code>prerequisites[i].length == 2</code></li>\n\t<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; numCourses</code></li>\n\t<li>All the pairs prerequisites[i] are <strong>unique</strong>.</li>\n</ul>\n"
    },
    {
      "id": 10,
      "Title": "LRU Cache Design",
      "Categories": [
        "Data Structures"
      ],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/lru-cache/",
      "Description": "<p>Design a data structure that follows the constraints of a <strong><a href=\"https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU\" target=\"_blank\">Least Recently Used (LRU) cache</a></strong>.</p>\n\n<p>Implement the <code>LRUCache</code> class:</p>\n\n<ul>\n\t<li><code>LRUCache(int capacity)</code> Initialize the LRU cache with <strong>positive</strong> size <code>capacity</code>.</li>\n\t<li><code>int get(int key)</code> Return the value of the <code>key</code> if the key exists, otherwise return <code>-1</code>.</li>\n\t<li><code>void put(int key, int value)</code> Update the value of the <code>key</code> if the <code>key</code> exists. Otherwise, add the <code>key-value</code> pair to the cache. If the number of keys exceeds the <code>capacity</code> from this operation, <strong>evict</strong> the least recently used key.</li>\n</ul>\n\n<p>The functions <code>get</code> and <code>put</code> must each run in <code>O(1)</code> average time complexity.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input</strong>\n[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\n<strong>Output</strong>\n[null, null, null, 1, null, -1, null, -1, 3, 4]\n\n<strong>Explanation</strong>\nLRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // cache is {1=1}\nlRUCache.put(2, 2); // cache is {1=1, 2=2}\nlRUCache.get(1);    // return 1\nlRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}\nlRUCache.get(2);    // returns -1 (not found)\nlRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}\nlRUCache.get(1);    // return -1 (not found)\nlRUCache.get(3);    // return 3\nlRUCache.get(4);    // return 4\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= capacity &lt;= 3000</code></li>\n\t<li><code>0 &lt;= key &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= value &lt;= 10<sup>5</sup></code></li>\n\t<li>At most <code>2 * 10<sup>5</sup></code> calls will be made to <code>get</code> and <code>put</code>.</li>\n</ul>\n"
    },
    {
      "id": 11,
      "Title": "Longest Common Subsequence",
      "Categories": [
        "Strings",
        "Algorithms"
      ],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/longest-common-subsequence/",
      "Description": "<p>Given two strings <code>text1</code> and <code>text2</code>, return <em>the length of their longest <strong>common subsequence</strong>. </em>If there is no <strong>common subsequence</strong>, return <code>0</code>.</p>\n\n<p>A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.</p>\n\n<ul>\n\t<li>For example, <code>\"ace\"</code> is a subsequence of <code>\"abcde\"</code>.</li>\n</ul>\n\n<p>A <strong>common subsequence</strong> of two strings is a subsequence that is common to both strings.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input:</strong> text1 = \"abcde\", text2 = \"ace\" \n<strong>Output:</strong> 3  \n<strong>Explanation:</strong> The longest common subsequence is \"ace\" and its length is 3.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> text1 = \"abc\", text2 = \"abc\"\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The longest common subsequence is \"abc\" and its length is 3.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre><strong>Input:</strong> text1 = \"abc\", text2 = \"def\"\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> There is no such common subsequence, so the result is 0.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= text1.length, text2.length &lt;= 1000</code></li>\n\t<li><code>text1</code> and <code>text2</code> consist of only lowercase English characters.</li>\n</ul>\n"
    },
    {
      "id": 12,
      "Title": "Rotate Image",
      "Categories": [
        "Arrays",
        "Algorithms"
      ],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/rotate-image/",
      "Description": "<p>You are given an <code>n x n</code> 2D <code>matrix</code> representing an image, rotate the image by <strong>90</strong> degrees (clockwise).</p>\n\n<p>You have to rotate the image <a href=\"https://en.wikipedia.org/wiki/In-place_algorithm\" target=\"_blank\"><strong>in-place</strong></a>, which means you have to modify the input 2D matrix directly. <strong>DO NOT</strong> allocate another 2D matrix and do the rotation.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg\" style=\"width: 500px; height: 188px;\">\n<pre><strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]\n<strong>Output:</strong> [[7,4,1],[8,5,2],[9,6,3]]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg\" style=\"width: 500px; height: 201px;\">\n<pre><strong>Input:</strong> matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n<strong>Output:</strong> [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == matrix.length == matrix[i].length</code></li>\n\t<li><code>1 &lt;= n &lt;= 20</code></li>\n\t<li><code>-1000 &lt;= matrix[i][j] &lt;= 1000</code></li>\n</ul>\n"
    },
    {
      "id": 13,
      "Title": "Airplane Seat Assignment Probability",
      "Categories": [
        "Probability",
        "Brainteaser"
      ],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/airplane-seat-assignment-probability/",
      "Description": "<p><code>n</code> passengers board an airplane with exactly <code>n</code> seats. The first passenger has lost the ticket and picks a seat randomly. But after that, the rest of the passengers will:</p>\n\n<ul>\n\t<li>Take their own seat if it is still available, and</li>\n\t<li>Pick other seats randomly when they find their seat occupied</li>\n</ul>\n\n<p>Return <em>the probability that the </em><code>n<sup>th</sup></code><em> person gets his own seat</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input:</strong> n = 1\n<strong>Output:</strong> 1.00000\n<strong>Explanation: </strong>The first person can only get the first seat.</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> n = 2\n<strong>Output:</strong> 0.50000\n<strong>Explanation: </strong>The second person has a probability of 0.5 to get the second seat (when first person gets the first seat).\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>\n</ul>\n"
    },
    {
      "id": 14,
      "Title": "Validate Binary Search Tree",
      "Categories": [
        "Data Structures",
        "Algorithms"
      ],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/validate-binary-search-tree/",
      "Description": "<p>Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.</p>\n\n<p>A <strong>valid BST</strong> is defined as follows:</p>\n\n<ul>\n\t<li>The left <span data-keyword=\"subtree\" class=\" cursor-pointer relative text-dark-blue-s text-sm\"><div class=\"popover-wrapper inline-block\" data-headlessui-state=\"\"><div><div aria-expanded=\"false\" data-headlessui-state=\"\" id=\"headlessui-popover-button-:rh:\"><div>subtree</div></div><div style=\"position: fixed; z-index: 40; inset: 0px auto auto 0px; transform: translate(117px, 316px);\"></div></div></div></span> of a node contains only nodes with keys <strong>less than</strong> the node's key.</li>\n\t<li>The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node's key.</li>\n\t<li>Both the left and right subtrees must also be binary search trees.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg\" style=\"width: 302px; height: 182px;\">\n<pre><strong>Input:</strong> root = [2,1,3]\n<strong>Output:</strong> true\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg\" style=\"width: 422px; height: 292px;\">\n<pre><strong>Input:</strong> root = [5,1,4,null,null,3,6]\n<strong>Output:</strong> false\n<strong>Explanation:</strong> The root node's value is 5 but its right child's value is 4.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>\n\t<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n"
    },
    {
      "id": 15,
      "Title": "Sliding Window Maximum",
      "Categories": [
        "Arrays",
        "Algorithms"
      ],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/sliding-window-maximum/",
      "Description": "<p>You are given an array of integers&nbsp;<code>nums</code>, there is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p>\n\n<p>Return <em>the max sliding window</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input:</strong> nums = [1,3,-1,-3,5,3,6,7], k = 3\n<strong>Output:</strong> [3,3,5,5,6,7]\n<strong>Explanation:</strong> \nWindow position                Max\n---------------               -----\n[1  3  -1] -3  5  3  6  7       <strong>3</strong>\n 1 [3  -1  -3] 5  3  6  7       <strong>3</strong>\n 1  3 [-1  -3  5] 3  6  7      <strong> 5</strong>\n 1  3  -1 [-3  5  3] 6  7       <strong>5</strong>\n 1  3  -1  -3 [5  3  6] 7       <strong>6</strong>\n 1  3  -1  -3  5 [3  6  7]      <strong>7</strong>\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> nums = [1], k = 1\n<strong>Output:</strong> [1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= k &lt;= nums.length</code></li>\n</ul>\n"
    },
    {
      "id": 16,
      "Title": "N-Queen Problem",
      "Categories": [
        "Algorithms"
      ],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/n-queens/",
      "Description": "<p>The <strong>n-queens</strong> puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.</p>\n\n<p>Given an integer <code>n</code>, return <em>all distinct solutions to the <strong>n-queens puzzle</strong></em>. You may return the answer in <strong>any order</strong>.</p>\n\n<p>Each solution contains a distinct board configuration of the n-queens' placement, where <code>'Q'</code> and <code>'.'</code> both indicate a queen and an empty space, respectively.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/13/queens.jpg\" style=\"width: 600px; height: 268px;\">\n<pre><strong>Input:</strong> n = 4\n<strong>Output:</strong> [[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]\n<strong>Explanation:</strong> There exist two distinct solutions to the 4-queens puzzle as shown above\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> n = 1\n<strong>Output:</strong> [[\"Q\"]]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n &lt;= 9</code></li>\n</ul>\n"    
    },
    {
      "id": 17,
      "Title": "Serialize and Deserialize a Binary Tree",
      "Categories": [
        "Data Structures",
        "Algorithms"
      ],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      "Description": "<p>Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.</p>\n\n<p>Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.</p>\n\n<p><strong>Clarification:</strong> The input/output format is the same as <a href=\"https://support.leetcode.com/hc/en-us/articles/360011883654-What-does-1-null-2-3-mean-in-binary-tree-representation-\" target=\"_blank\">how LeetCode serializes a binary tree</a>. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg\" style=\"width: 442px; height: 324px;\">\n<pre><strong>Input:</strong> root = [1,2,3,null,null,4,5]\n<strong>Output:</strong> [1,2,3,null,null,4,5]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> root = []\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>\n\t<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n"
    },
    {
      "id": 18,
      "Title": "Wildcard Matching",
      "Categories": [
        "Strings",
        "Algorithms"
      ],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/wildcard-matching/",
      "Description": "<p>Given an input string (<code>s</code>) and a pattern (<code>p</code>), implement wildcard pattern matching with support for <code>'?'</code> and <code>'*'</code> where:</p>\n\n<ul>\n\t<li><code>'?'</code> Matches any single character.</li>\n\t<li><code>'*'</code> Matches any sequence of characters (including the empty sequence).</li>\n</ul>\n\n<p>The matching should cover the <strong>entire</strong> input string (not partial).</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input:</strong> s = \"aa\", p = \"a\"\n<strong>Output:</strong> false\n<strong>Explanation:</strong> \"a\" does not match the entire string \"aa\".\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> s = \"aa\", p = \"*\"\n<strong>Output:</strong> true\n<strong>Explanation:</strong>&nbsp;'*' matches any sequence.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre><strong>Input:</strong> s = \"cb\", p = \"?a\"\n<strong>Output:</strong> false\n<strong>Explanation:</strong>&nbsp;'?' matches 'c', but the second letter is 'a', which does not match 'b'.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= s.length, p.length &lt;= 2000</code></li>\n\t<li><code>s</code> contains only lowercase English letters.</li>\n\t<li><code>p</code> contains only lowercase English letters, <code>'?'</code> or <code>'*'</code>.</li>\n</ul>\n"
    },
    {
      "id": 19,
      "Title": "Chalkboard XOR Game",
      "Categories": [
        "Brainteaser"
      ],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/chalkboard-xor-game/",
      "Description": "<p>You are given an array of integers <code>nums</code> represents the numbers written on a chalkboard.</p>\n\n<p>Alice and Bob take turns erasing exactly one number from the chalkboard, with Alice starting first. If erasing a number causes the bitwise XOR of all the elements of the chalkboard to become <code>0</code>, then that player loses. The bitwise XOR of one element is that element itself, and the bitwise XOR of no elements is <code>0</code>.</p>\n\n<p>Also, if any player starts their turn with the bitwise XOR of all the elements of the chalkboard equal to <code>0</code>, then that player wins.</p>\n\n<p>Return <code>true</code> <em>if and only if Alice wins the game, assuming both players play optimally</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input:</strong> nums = [1,1,2]\n<strong>Output:</strong> false\n<strong>Explanation:</strong> \nAlice has two choices: erase 1 or erase 2. \nIf she erases 1, the nums array becomes [1, 2]. The bitwise XOR of all the elements of the chalkboard is 1 XOR 2 = 3. Now Bob can remove any element he wants, because Alice will be the one to erase the last element and she will lose. \nIf Alice erases 2 first, now nums become [1, 1]. The bitwise XOR of all the elements of the chalkboard is 1 XOR 1 = 0. Alice will lose.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> nums = [0,1]\n<strong>Output:</strong> true\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre><strong>Input:</strong> nums = [1,2,3]\n<strong>Output:</strong> true\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 1000</code></li>\n\t<li><code>0 &lt;= nums[i] &lt; 2<sup>16</sup></code></li>\n</ul>\n"
    },
    {
      "id": 20,
      "Title": "Trips and Users",
      "Categories": [
        "Databases"
      ],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/trips-and-users/",
      "Description": "<p>Table: <code>Trips</code></p>\n\n<pre>+-------------+----------+\n| Column Name | Type     |\n+-------------+----------+\n| id         | int      |\n| client_id   | int      |\n| driver_id   | int      |\n| city_id     | int      |\n| status      | enum     |\n| request_at  | date     |     \n+-------------+----------+\nid is the primary key (column with unique values) for this table.\nThe table holds all taxi trips. Each trip has a unique id, while client_id and driver_id are foreign keys to the users_id at the Users table.\nStatus is an ENUM (category) type of ('completed', 'cancelled_by_driver', 'cancelled_by_client').\n</pre>\n\n<p>&nbsp;</p>\n\n<p>Table: <code>Users</code></p>\n\n<pre>+-------------+----------+\n| Column Name | Type     |\n+-------------+----------+\n| users_id    | int      |\n| banned      | enum     |\n| role        | enum     |\n+-------------+----------+\nusers_id is the primary key (column with unique values) for this table.\nThe table holds all users. Each user has a unique users_id, and role is an ENUM type of ('client', 'driver', 'partner').\nbanned is an ENUM (category) type of ('Yes', 'No').\n</pre>\n\n<p>&nbsp;</p>\n\n<p>The <strong>cancellation rate</strong> is computed by dividing the number of canceled (by client or driver) requests with unbanned users by the total number of requests with unbanned users on that day.</p>\n\n<p>Write a solution to find the <strong>cancellation rate</strong> of requests with unbanned users (<strong>both client and driver must not be banned</strong>) each day between <code>\"2013-10-01\"</code> and <code>\"2013-10-03\"</code>. Round <code>Cancellation Rate</code> to <strong>two decimal</strong> points.</p>\n\n<p>Return the result table in <strong>any order</strong>.</p>\n\n<p>The&nbsp;result format is in the following example.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre><strong>Input:</strong> \nTrips table:\n+----+-----------+-----------+---------+---------------------+------------+\n| id | client_id | driver_id | city_id | status              | request_at |\n+----+-----------+-----------+---------+---------------------+------------+\n| 1  | 1         | 10        | 1       | completed           | 2013-10-01 |\n| 2  | 2         | 11        | 1       | cancelled_by_driver | 2013-10-01 |\n| 3  | 3         | 12        | 6       | completed           | 2013-10-01 |\n| 4  | 4         | 13        | 6       | cancelled_by_client | 2013-10-01 |\n| 5  | 1         | 10        | 1       | completed           | 2013-10-02 |\n| 6  | 2         | 11        | 6       | completed           | 2013-10-02 |\n| 7  | 3         | 12        | 6       | completed           | 2013-10-02 |\n| 8  | 2         | 12        | 12      | completed           | 2013-10-03 |\n| 9  | 3         | 10        | 12      | completed           | 2013-10-03 |\n| 10 | 4         | 13        | 12      | cancelled_by_driver | 2013-10-03 |\n+----+-----------+-----------+---------+---------------------+------------+\nUsers table:\n+----------+--------+--------+\n| users_id | banned | role   |\n+----------+--------+--------+\n| 1        | No     | client |\n| 2        | Yes    | client |\n| 3        | No     | client |\n| 4        | No     | client |\n| 10       | No     | driver |\n| 11       | No     | driver |\n| 12       | No     | driver |\n| 13       | No     | driver |\n+----------+--------+--------+\n<strong>Output:</strong> \n+------------+-------------------+\n| Day        | Cancellation Rate |\n+------------+-------------------+\n| 2013-10-01 | 0.33              |\n| 2013-10-02 | 0.00              |\n| 2013-10-03 | 0.50              |\n+------------+-------------------+\n<strong>Explanation:</strong> \nOn 2013-10-01:\n  - There were 4 requests in total, 2 of which were canceled.\n  - However, the request with Id=2 was made by a banned client (User_Id=2), so it is ignored in the calculation.\n  - Hence there are 3 unbanned requests in total, 1 of which was canceled.\n  - The Cancellation Rate is (1 / 3) = 0.33\nOn 2013-10-02:\n  - There were 3 requests in total, 0 of which were canceled.\n  - The request with Id=6 was made by a banned client, so it is ignored.\n  - Hence there are 2 unbanned requests in total, 0 of which were canceled.\n  - The Cancellation Rate is (0 / 2) = 0.00\nOn 2013-10-03:\n  - There were 3 requests in total, 1 of which was canceled.\n  - The request with Id=8 was made by a banned client, so it is ignored.\n  - Hence there are 2 unbanned request in total, 1 of which were canceled.\n  - The Cancellation Rate is (1 / 2) = 0.50\n</pre>\n"
    }
];

function App() {

  const { user, login, logout } = useAuth();

  // need to render the routes, then let the conditional values render the correct page 
  return (
    <Router>
      <div className='container'>
        <Header isLoggedIn={user}/>
          <main className='content'>
            <Routes>
              <Route path="/" 
                element=
                  {
                    user 
                    ? <QuestionsScreen data={dummyData} logout={logout} /> 
                    : <SignInScreen login={login}/>
                  } 
              />
              <Route path="/questions" 
                element=
                  {
                    user 
                    ? <QuestionsScreen data={dummyData} logout={logout}/> 
                    : <SignInScreen login={login}/>
                  } 
              />
              <Route path="/sign-up" 
                element=
                  {
                    user 
                    ? <QuestionsScreen data={dummyData} logout={logout}/> 
                    : <SignUpScreen/>
                  } 
              />
              <Route path="/user-profile" 
                element=
                  {
                    user 
                    ? <UserProfileScreen/> 
                    : <SignInScreen login={login}/> 
                  } 
              />
              <Route path="*" element={<Navigate to="/"/> }/>
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
