import { Topic } from "@/types/quiz";

export const quizTopics: Topic[] = [
  {
    id: "javascript",
    title: "JavaScript",
    description: "Test your knowledge of JavaScript fundamentals and advanced concepts",
    icon: "Code2",
    color: "#f7df1e",
    questions: [
      {
        id: "js-1",
        question: "What is the output of typeof null in JavaScript?",
        options: [
          { id: "a", text: '"null"', whyWrong: "This is incorrect. 'null' is not returned by typeof null due to a historical bug in JavaScript." },
          { id: "b", text: '"undefined"', whyWrong: "Undefined is a different primitive type. typeof undefined returns 'undefined', not typeof null." },
          { id: "c", text: '"object"' },
          { id: "d", text: '"boolean"', whyWrong: "Boolean is a different type. null is not a boolean value." }
        ],
        correctAnswer: "c",
        explanation: "This is a well-known bug in JavaScript that has existed since the first version. typeof null returns 'object' due to how values were represented in the original implementation."
      },
      {
        id: "js-2",
        question: "Which method creates a new array with the results of calling a function on every element?",
        options: [
          { id: "a", text: "forEach()", whyWrong: "forEach() executes a function on each element but returns undefined, not a new array." },
          { id: "b", text: "map()" },
          { id: "c", text: "filter()", whyWrong: "filter() creates a new array with elements that pass a test, not transformed elements." },
          { id: "d", text: "reduce()", whyWrong: "reduce() accumulates values into a single result, not necessarily an array." }
        ],
        correctAnswer: "b",
        explanation: "map() creates a new array populated with the results of calling a provided function on every element in the calling array."
      },
      {
        id: "js-3",
        question: "What is a closure in JavaScript?",
        options: [
          { id: "a", text: "A way to close the browser window", whyWrong: "This describes window.close(), not the concept of closures." },
          { id: "b", text: "A function bundled with its lexical environment" },
          { id: "c", text: "A method to end a loop", whyWrong: "break or return statements end loops, not closures." },
          { id: "d", text: "A type of variable declaration", whyWrong: "Variable declarations use let, const, or var. Closures are a different concept." }
        ],
        correctAnswer: "b",
        explanation: "A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has returned."
      },
      {
        id: "js-4",
        question: "What does the '===' operator check?",
        options: [
          { id: "a", text: "Value equality only", whyWrong: "That's what '==' does. '===' is stricter." },
          { id: "b", text: "Type equality only", whyWrong: "It checks both type AND value, not just type." },
          { id: "c", text: "Value and type equality" },
          { id: "d", text: "Reference equality only", whyWrong: "Reference equality applies to objects, but === checks value and type for primitives." }
        ],
        correctAnswer: "c",
        explanation: "The strict equality operator (===) checks both the value and the type without performing type coercion."
      },
      {
        id: "js-5",
        question: "What is the purpose of the 'async' keyword?",
        options: [
          { id: "a", text: "To make a function synchronous", whyWrong: "Async does the opposite - it enables asynchronous behavior." },
          { id: "b", text: "To define a function that returns a Promise" },
          { id: "c", text: "To pause code execution", whyWrong: "That's what 'await' does inside an async function." },
          { id: "d", text: "To import modules", whyWrong: "Module imports use the 'import' keyword." }
        ],
        correctAnswer: "b",
        explanation: "The async keyword transforms a function to always return a Promise and enables the use of await inside it."
      }
    ]
  },
  {
    id: "react",
    title: "React",
    description: "Challenge yourself with React hooks, components, and best practices",
    icon: "Atom",
    color: "#61dafb",
    questions: [
      {
        id: "react-1",
        question: "What hook is used to manage state in a functional component?",
        options: [
          { id: "a", text: "useEffect", whyWrong: "useEffect is for side effects like API calls, not for managing state." },
          { id: "b", text: "useState" },
          { id: "c", text: "useContext", whyWrong: "useContext is for accessing context values, not local state management." },
          { id: "d", text: "useReducer", whyWrong: "While useReducer can manage state, useState is the primary hook for simple state." }
        ],
        correctAnswer: "b",
        explanation: "useState is the fundamental hook for adding state to functional components. It returns a state value and a function to update it."
      },
      {
        id: "react-2",
        question: "What is the virtual DOM?",
        options: [
          { id: "a", text: "A copy of the browser's DOM kept in memory" },
          { id: "b", text: "A new HTML element", whyWrong: "The virtual DOM is not an HTML element but a JavaScript representation." },
          { id: "c", text: "A CSS framework", whyWrong: "The virtual DOM has nothing to do with CSS." },
          { id: "d", text: "A database for React", whyWrong: "React doesn't have a built-in database. The virtual DOM is for UI rendering." }
        ],
        correctAnswer: "a",
        explanation: "The virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to efficiently update only the parts of the UI that have changed."
      },
      {
        id: "react-3",
        question: "What does the useEffect cleanup function do?",
        options: [
          { id: "a", text: "Clears the browser cache", whyWrong: "Browser cache is managed by the browser, not React hooks." },
          { id: "b", text: "Deletes the component", whyWrong: "Components are unmounted by React's lifecycle, not by cleanup functions." },
          { id: "c", text: "Runs before the component unmounts or before the next effect" },
          { id: "d", text: "Resets all state values", whyWrong: "State is not automatically reset by cleanup. You must do it explicitly." }
        ],
        correctAnswer: "c",
        explanation: "The cleanup function returned from useEffect runs before the component unmounts and before every re-execution of the effect. It's used to clean up subscriptions, timers, etc."
      },
      {
        id: "react-4",
        question: "What is the purpose of the key prop in React lists?",
        options: [
          { id: "a", text: "To style list items", whyWrong: "Styling is done with className or style, not key." },
          { id: "b", text: "To help React identify which items have changed" },
          { id: "c", text: "To add event handlers", whyWrong: "Event handlers are added separately, like onClick." },
          { id: "d", text: "To set the list order", whyWrong: "List order is determined by the array order, not the key prop." }
        ],
        correctAnswer: "b",
        explanation: "Keys help React identify which items have changed, been added, or removed. This improves performance during re-renders."
      },
      {
        id: "react-5",
        question: "What is prop drilling?",
        options: [
          { id: "a", text: "A way to style components", whyWrong: "Styling uses CSS or inline styles, not prop drilling." },
          { id: "b", text: "Passing props through multiple component layers" },
          { id: "c", text: "A debugging technique", whyWrong: "Prop drilling is a pattern problem, not a debugging technique." },
          { id: "d", text: "Creating new props automatically", whyWrong: "Props are explicitly defined, not auto-generated." }
        ],
        correctAnswer: "b",
        explanation: "Prop drilling is when you pass props through many intermediate components to reach a deeply nested component. Context API or state management libraries can help avoid this."
      }
    ]
  },
  {
    id: "css",
    title: "CSS",
    description: "Explore CSS selectors, layouts, and modern styling techniques",
    icon: "Palette",
    color: "#264de4",
    questions: [
      {
        id: "css-1",
        question: "What does 'flex: 1' do in a flex container?",
        options: [
          { id: "a", text: "Sets the width to 1px", whyWrong: "flex: 1 doesn't set a fixed width. It controls the flex-grow property." },
          { id: "b", text: "Allows the item to grow and fill available space" },
          { id: "c", text: "Creates one column", whyWrong: "Columns are created with flex-direction or grid, not flex: 1." },
          { id: "d", text: "Sets z-index to 1", whyWrong: "z-index is a separate property for stacking order." }
        ],
        correctAnswer: "b",
        explanation: "flex: 1 is shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0. It allows the item to grow and fill available space equally with other flex: 1 items."
      },
      {
        id: "css-2",
        question: "Which unit is relative to the viewport width?",
        options: [
          { id: "a", text: "em", whyWrong: "em is relative to the font-size of the element." },
          { id: "b", text: "rem", whyWrong: "rem is relative to the root element's font-size." },
          { id: "c", text: "vw" },
          { id: "d", text: "px", whyWrong: "px is an absolute unit, not relative to viewport." }
        ],
        correctAnswer: "c",
        explanation: "vw stands for viewport width. 1vw equals 1% of the viewport width. Similarly, vh is for viewport height."
      },
      {
        id: "css-3",
        question: "What is the CSS specificity order from lowest to highest?",
        options: [
          { id: "a", text: "ID, Class, Element", whyWrong: "This is the reverse order. Element has the lowest specificity." },
          { id: "b", text: "Element, Class, ID" },
          { id: "c", text: "Class, ID, Element", whyWrong: "Element selectors have the lowest specificity, not in the middle." },
          { id: "d", text: "ID, Element, Class", whyWrong: "This order is incorrect. ID has the highest specificity." }
        ],
        correctAnswer: "b",
        explanation: "CSS specificity from lowest to highest: Element selectors (1), Class selectors (10), ID selectors (100). Inline styles have even higher specificity (1000)."
      },
      {
        id: "css-4",
        question: "What does 'position: sticky' do?",
        options: [
          { id: "a", text: "Removes the element from document flow", whyWrong: "That's what position: absolute or fixed does." },
          { id: "b", text: "Toggles between relative and fixed based on scroll" },
          { id: "c", text: "Makes the element unmovable", whyWrong: "Elements with sticky can still move with scroll until triggered." },
          { id: "d", text: "Centers the element", whyWrong: "Positioning doesn't center elements. Use flexbox or margin: auto for that." }
        ],
        correctAnswer: "b",
        explanation: "position: sticky acts like position: relative until the element reaches a specified scroll position, then it acts like position: fixed."
      },
      {
        id: "css-5",
        question: "What is the purpose of the CSS 'clamp()' function?",
        options: [
          { id: "a", text: "To create animations", whyWrong: "Animations use @keyframes and animation properties." },
          { id: "b", text: "To set a value between a minimum and maximum" },
          { id: "c", text: "To add shadows", whyWrong: "Shadows use box-shadow or text-shadow properties." },
          { id: "d", text: "To compress images", whyWrong: "CSS doesn't compress images. That's done in image editing tools." }
        ],
        correctAnswer: "b",
        explanation: "clamp(min, preferred, max) restricts a value between a minimum and maximum. It's great for responsive typography: clamp(1rem, 2.5vw, 2rem)."
      }
    ]
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "Master TypeScript types, interfaces, and advanced features",
    icon: "FileCode",
    color: "#3178c6",
    questions: [
      {
        id: "ts-1",
        question: "What is the difference between 'interface' and 'type' in TypeScript?",
        options: [
          { id: "a", text: "There is no difference", whyWrong: "While similar, they have key differences like declaration merging." },
          { id: "b", text: "Interfaces can be extended and merged, types cannot be merged" },
          { id: "c", text: "Types are faster", whyWrong: "Performance difference is negligible. The differences are in capabilities." },
          { id: "d", text: "Interfaces only work with classes", whyWrong: "Interfaces can describe any object shape, not just classes." }
        ],
        correctAnswer: "b",
        explanation: "Interfaces support declaration merging (defining the same interface multiple times) and extension. Types use intersections (&) to combine and cannot be merged."
      },
      {
        id: "ts-2",
        question: "What does the 'unknown' type represent?",
        options: [
          { id: "a", text: "The same as 'any'", whyWrong: "'any' bypasses type checking. 'unknown' requires type narrowing." },
          { id: "b", text: "A type-safe version of 'any'" },
          { id: "c", text: "An undefined variable", whyWrong: "'undefined' is a specific type, not the same as 'unknown'." },
          { id: "d", text: "A nullable type", whyWrong: "Nullable types use unions like 'string | null'." }
        ],
        correctAnswer: "b",
        explanation: "'unknown' is the type-safe counterpart of 'any'. You must narrow the type (using type guards) before performing operations on unknown values."
      },
      {
        id: "ts-3",
        question: "What is a generic type in TypeScript?",
        options: [
          { id: "a", text: "A type that applies to all variables", whyWrong: "That would be 'any'. Generics are parameterized types." },
          { id: "b", text: "A reusable type that works with multiple types" },
          { id: "c", text: "The default type for functions", whyWrong: "Functions don't have a default type. Return types must be specified or inferred." },
          { id: "d", text: "A type for generating code", whyWrong: "TypeScript doesn't generate code at runtime based on types." }
        ],
        correctAnswer: "b",
        explanation: "Generics allow you to create reusable components that work with multiple types while maintaining type safety. Example: Array<T>, Promise<T>."
      },
      {
        id: "ts-4",
        question: "What does 'readonly' do to a property?",
        options: [
          { id: "a", text: "Makes it private", whyWrong: "Private properties use the 'private' keyword." },
          { id: "b", text: "Prevents reassignment after initialization" },
          { id: "c", text: "Makes it optional", whyWrong: "Optional properties use the '?' modifier." },
          { id: "d", text: "Hides it from other files", whyWrong: "Visibility is controlled by export, not readonly." }
        ],
        correctAnswer: "b",
        explanation: "The 'readonly' modifier prevents a property from being reassigned after the object is created. It's similar to 'const' but for object properties."
      },
      {
        id: "ts-5",
        question: "What is a union type?",
        options: [
          { id: "a", text: "A type that combines interfaces", whyWrong: "Combining interfaces uses 'extends' or intersection (&)." },
          { id: "b", text: "A type that can be one of several types" },
          { id: "c", text: "A type for arrays only", whyWrong: "Arrays use Type[] or Array<Type> syntax." },
          { id: "d", text: "A type from external libraries", whyWrong: "External types are imported, not defined as union types." }
        ],
        correctAnswer: "b",
        explanation: "A union type (using |) allows a value to be one of several types. Example: string | number means the value can be either a string or a number."
      }
    ]
  }
];

export const getTopicById = (id: string): Topic | undefined => {
  return quizTopics.find((topic) => topic.id === id);
};

export const getAllTopics = (): Topic[] => {
  return quizTopics;
};
