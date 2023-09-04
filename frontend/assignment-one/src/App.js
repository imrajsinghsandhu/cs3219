import './App.css';
import Questions from './components/Questions/Questions';

const dummyData = [
  {
      "id": 1,
      "Title": "Reverse a String",
      "Categories": ["Strings", "Algorithms"],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/reverse-string/"
  },
  {
      "id": 2,
      "Title": "Linked List Cycle Detection",
      "Categories": ["Data Structures", "Algorithms"],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/linked-list-cycle/"
  },
  {
      "id": 3,
      "Title": "Roman to Integer",
      "Categories": ["Algorithms"],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/roman-to-integer/"
  },
  {
      "id": 4,
      "Title": "Add Binary",
      "Categories": ["Bit Manipulation", "Algorithms"],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/add-binary/"
  },
  {
      "id": 5,
      "Title": "Fibonacci Number",
      "Categories": ["Recursion", "Algorithms"],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/fibonacci-number/"
  },
  {
      "id": 6,
      "Title": "Implement Stack using Queues",
      "Categories": ["Data Structures"],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/implement-stack-using-queues/"
  },
  {
      "id": 7,
      "Title": "Combine Two Tables",
      "Categories": ["Databases"],
      "Complexity": "Easy",
      "Link": "https://leetcode.com/problems/combine-two-tables/"
  },
  {
      "id": 8,
      "Title": "Repeated DNA Sequences",
      "Categories": ["Algorithms", "Bit Manipulation"],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/repeated-dna-sequences/"
  },
  {
      "id": 9,
      "Title": "Course Schedule",
      "Categories": ["Data Structures", "Algorithms"],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/course-schedule/"
  },
  {
      "id": 10,
      "Title": "LRU Cache Design",
      "Categories": ["Data Structures"],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/lru-cache/"
  },
  {
      "id": 11,
      "Title": "Longest Common Subsequence",
      "Categories": ["Strings", "Algorithms"],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/longest-common-subsequence/"
  },
  {
      "id": 12,
      "Title": "Rotate Image",
      "Categories": ["Arrays", "Algorithms"],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/rotate-image/"
  },
  {
      "id": 13,
      "Title": "Airplane Seat Assignment Probability",
      "Categories": ["Probability", "Brainteaser"],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/airplane-seat-assignment-probability/"
  },
  {
      "id": 14,
      "Title": "Validate Binary Search Tree",
      "Categories": ["Data Structures", "Algorithms"],
      "Complexity": "Medium",
      "Link": "https://leetcode.com/problems/validate-binary-search-tree/"
  },
  {
      "id": 15,
      "Title": "Sliding Window Maximum",
      "Categories": ["Arrays", "Algorithms"],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/sliding-window-maximum/"
  },
  {
      "id": 16,
      "Title": "N-Queen Problem",
      "Categories": ["Algorithms"],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/n-queens/"
  },
  {
      "id": 17,
      "Title": "Serialize and Deserialize a Binary Tree",
      "Categories": ["Data Structures", "Algorithms"],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
  },
  {
      "id": 18,
      "Title": "Wildcard Matching",
      "Categories": ["Strings", "Algorithms"],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/wildcard-matching/"
  },
  {
      "id": 19,
      "Title": "Chalkboard XOR Game",
      "Categories": ["Brainteaser"],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/chalkboard-xor-game/"
  },
  {
      "id": 20,
      "Title": "Trips and Users",
      "Categories": ["Databases"],
      "Complexity": "Hard",
      "Link": "https://leetcode.com/problems/trips-and-users/"
  }
];

function App() {
  return (
    <div className="App">
      <Questions data={dummyData}/>
    </div>
  );
}

export default App;
