import { Topic } from "@/types/quiz";

export const quizTopics: Topic[] = [
  {
    id: "principles-of-software-engineering",
    title: "Principles of Software Engineering",
    description: "Test your knowledge on the history, paradigms, and definitions of software engineering.",
    icon: "Terminal",
    color: "#9c27b0",
    questions: [
      {
        id: "se-1",
        question: "According to the text, where did the first primitive form of software engineering take place in 1944?",
        options: [
          { id: "a", text: "MIT Laboratories" },
          { id: "b", text: "Bletchley Park (Station X)" },
          { id: "c", text: "CERN" },
          { id: "d", text: "AT & T Bell Laboratories" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-2",
        question: "Which computer was developed as part of the Allied war effort to decrypt Axis power ciphers?",
        options: [
          { id: "a", text: "The Enigma" },
          { id: "b", text: "The VAX" },
          { id: "c", text: "The Colossus" },
          { id: "d", text: "The Apple Macintosh" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "se-3",
        question: "Which 1950s programming language was primarily used by the scientific and engineering communities?",
        options: [
          { id: "a", text: "COBOL" },
          { id: "b", text: "BASIC" },
          { id: "c", text: "FORTRAN" },
          { id: "d", text: "Pascal" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "se-4",
        question: "Which language focused on business, banking, and data storage?",
        options: [
          { id: "a", text: "ALGOL" },
          { id: "b", text: "COBOL" },
          { id: "c", text: "C++" },
          { id: "d", text: "FORTRAN" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-5",
        question: "In the early days of development, software design focused on efficiency in terms of minimal computations and minimal use of what?",
        options: [
          { id: "a", text: "Core memory" },
          { id: "b", text: "Internet bandwidth" },
          { id: "c", text: "Graphical processing" },
          { id: "d", text: "External hard drives" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "se-6",
        question: "Which language became central to the development of programming microprocessors?",
        options: [
          { id: "a", text: "C#" },
          { id: "b", text: "Java" },
          { id: "c", text: "BASIC" },
          { id: "d", text: "Smalltalk" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "se-7",
        question: "Pascal was developed in 1970 primarily to serve what purpose?",
        options: [
          { id: "a", text: "To replace COBOL in banking" },
          { id: "b", text: "To teach programming as a systematic discipline" },
          { id: "c", text: "To enable internet browsing" },
          { id: "d", text: "To control hardware drivers" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-8",
        question: "What was the original goal of PL/1 (Programming Language 1)?",
        options: [
          { id: "a", text: "To create a web-based language" },
          { id: "b", text: "To succeed FORTRAN with better data structuring" },
          { id: "c", text: "To simply integer arithmetic" },
          { id: "d", text: "To emulate UNIX on PCs" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-9",
        question: "Which company developed the VAX/VMS (Virtual Address Extension/Virtual Memory System)?",
        options: [
          { id: "a", text: "Microsoft" },
          { id: "b", text: "Apple" },
          { id: "c", text: "Digital" },
          { id: "d", text: "Xerox" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "se-10",
        question: "Where were the C programming language and the UNIX operating system developed?",
        options: [
          { id: "a", text: "Bletchley Park" },
          { id: "b", text: "CERN" },
          { id: "c", text: "AT & T Bell Laboratories" },
          { id: "d", text: "MIT" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "se-11",
        question: "Which laboratory pioneered the concept of a visual or graphical approach (GUI) to computing in the mid-late 1970s?",
        options: [
          { id: "a", text: "Xerox Laboratories" },
          { id: "b", text: "Apple Research" },
          { id: "c", text: "Microsoft Labs" },
          { id: "d", text: "IBM" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "se-12",
        question: "Where was the concept of a distributed information communications network (the Internet) invented?",
        options: [
          { id: "a", text: "Stanford University" },
          { id: "b", text: "CERN particle physics Laboratories" },
          { id: "c", text: "Pentagon" },
          { id: "d", text: "Silicon Valley" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-13",
        question: "What does the acronym BASIC stand for?",
        options: [
          { id: "a", text: "Basic Algorithmic System Information Code" },
          { id: "b", text: "Beginners All-purpose Symbolic Instruction Code" },
          { id: "c", text: "Binary Analog System Interface Computer" },
          { id: "d", text: "Business Applications Standard Input Code" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-14",
        question: "Which language had the most far-reaching influence on the design and definition of languages in the 1960s?",
        options: [
          { id: "a", text: "ALGOL" },
          { id: "b", text: "PL/1" },
          { id: "c", text: "Pascal" },
          { id: "d", text: "DOS" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "se-15",
        question: "The development of Microsoft Windows from DOS was independently accompanied by the development of which language?",
        options: [
          { id: "a", text: "Java from C" },
          { id: "b", text: "C++ from C" },
          { id: "c", text: "C# from C++" },
          { id: "d", text: "Pascal from ALGOL" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-16",
        question: "In Object Oriented Programming, what are the two principal features of an object?",
        options: [
          { id: "a", text: "Syntax and Semantics" },
          { id: "b", text: "Attributes and Behaviour" },
          { id: "c", text: "Input and Output" },
          { id: "d", text: "Loops and Arrays" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-17",
        question: "What feature of an object describes how it is different from other objects (often implemented as member variables)?",
        options: [
          { id: "a", text: "Behaviour" },
          { id: "b", text: "Methods" },
          { id: "c", text: "Attributes" },
          { id: "d", text: "Inheritance" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "se-18",
        question: "Sending a message to an object in OOP is equivalent to what action in procedure-oriented programming?",
        options: [
          { id: "a", text: "Defining a variable" },
          { id: "b", text: "Calling a function" },
          { id: "c", text: "Compiling code" },
          { id: "d", text: "Writing a comment" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-19",
        question: "Objects are instances of what?",
        options: [
          { id: "a", text: "Classes" },
          { id: "b", text: "Functions" },
          { id: "c", text: "Variables" },
          { id: "d", text: "Drivers" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "se-20",
        question: "Which feature is arguably one of the most important in OOP because it leads to component-based software engineering?",
        options: [
          { id: "a", text: "Complexity" },
          { id: "b", text: "Reusability" },
          { id: "c", text: "Redundancy" },
          { id: "d", text: "Connectivity" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-21",
        question: "Structured programming is designed so that code can be read in what way?",
        options: [
          { id: "a", text: "Like a dictionary (alphabetically)" },
          { id: "b", text: "Like a book (left to right, top to bottom)" },
          { id: "c", text: "Randomly (jumping between modules)" },
          { id: "d", text: "Like a blueprint (bottom up)" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-22",
        question: "Which of the following is listed as one of the leading commercial object-oriented languages?",
        options: [
          { id: "a", text: "COBOL" },
          { id: "b", text: "Smalltalk" },
          { id: "c", text: "FORTRAN" },
          { id: "d", text: "Pascal" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-23",
        question: "Procedure Oriented Programming involves identifying a sequence of specific processes to form what?",
        options: [
          { id: "a", text: "Objects" },
          { id: "b", text: "Procedures (or functions)" },
          { id: "c", text: "Databases" },
          { id: "d", text: "User Interfaces" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-24",
        question: "When was the term \"Software Engineering\" first popularized?",
        options: [
          { id: "a", text: "1944 Bletchley Park Meeting" },
          { id: "b", text: "1968 NATO Software Engineering Conference" },
          { id: "c", text: "1970 UNIX Launch" },
          { id: "d", text: "1980 Microsoft Incorporation" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-25",
        question: "IEEE Standard  610.12 defines software engineering as the application of what kind of approach?",
        options: [
          { id: "a", text: "A creative, artistic, and abstract approach" },
          { id: "b", text: "A systematic, disciplined, and quantifiable approach" },
          { id: "c", text: "A rapid, agile, and flexible approach" },
          { id: "d", text: "A theoretical, mathematical, and logical approach" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-26",
        question: "Why is \"craftsmanship\" suggested as an appropriate metaphor for software development?",
        options: [
          { id: "a", text: "It implies the work is done by hand without tools" },
          { id: "b", text: "It focuses on the skills of the developer as the key to success" },
          { id: "c", text: "It suggests the field is obsolete" },
          { id: "d", text: "It implies that no engineering principles are used" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-27",
        question: "Compilers, editors, and drivers are examples of what category of software?",
        options: [
          { id: "a", text: "Business software" },
          { id: "b", text: "System software" },
          { id: "c", text: "Embedded software" },
          { id: "d", text: "Artificial Intelligence" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-28",
        question: "CAD (Computer Aided Design) and CFD (Computational Fluid Dynamics) belong to which software category?",
        options: [
          { id: "a", text: "Real-time software" },
          { id: "b", text: "Scientific and engineering software" },
          { id: "c", text: "PC software" },
          { id: "d", text: "Business software" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-29",
        question: "Which of the following is an example of embedded software mentioned in the text?",
        options: [
          { id: "a", text: "Games" },
          { id: "b", text: "Mobile communication systems" },
          { id: "c", text: "Relational databases" },
          { id: "d", text: "Compilers" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-30",
        question: "Which element completes the error chain: Input errors $\rightarrow$ ______ $\rightarrow$ Output errors?",
        options: [
          { id: "a", text: "Compiler errors" },
          { id: "b", text: "Algorithm errors" },
          { id: "c", text: "Hardware errors" },
          { id: "d", text: "User errors" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-31",
        question: "How is Absolute Error ($\mathcal{E}$) defined mathematically?",
        options: [
          { id: "a", text: "$\mathcal{E} = n \times N$" },
          { id: "b", text: "$\mathcal{E} = n - N$" },
          { id: "c", text: "$\mathcal{E} = N / n$" },
          { id: "d", text: "$\mathcal{E} = n + N$" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-32",
        question: "Why is Relative Error often more important than Absolute Error?",
        options: [
          { id: "a", text: "It is easier to calculate" },
          { id: "b", text: "It helps appreciate the error size by comparing it to the quantity being approximated" },
          { id: "c", text: "It is the only error type computers can detect" },
          { id: "d", text: "It is always a positive integer" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-33",
        question: "Mistakes made in copying data from one form to another are called:",
        options: [
          { id: "a", text: "Rounding errors" },
          { id: "b", text: "Transcription errors" },
          { id: "c", text: "Truncation errors" },
          { id: "d", text: "Conversion errors" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-34",
        question: "What type of error occurs when a limited number of terms of an infinite series are used to approximate a number?",
        options: [
          { id: "a", text: "Rounding error" },
          { id: "b", text: "Truncation error" },
          { id: "c", text: "Transcription error" },
          { id: "d", text: "Data error" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-35",
        question: "Removing digits after the nth decimal place results in which type of error?",
        options: [
          { id: "a", text: "Algorithmic error" },
          { id: "b", text: "Rounding error" },
          { id: "c", text: "Input error" },
          { id: "d", text: "Overflow error" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-36",
        question: "Algorithmic errors frequently depend on the number of operations performed and what else?",
        options: [
          { id: "a", text: "The programming language used" },
          { id: "b", text: "The order of the operations performed" },
          { id: "c", text: "The speed of the CPU" },
          { id: "d", text: "The brand of the computer" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-37",
        question: "What method reduces error accumulation by reducing the number of operations?",
        options: [
          { id: "a", text: "Looping" },
          { id: "b", text: "Nesting" },
          { id: "c", text: "Compiling" },
          { id: "d", text: "Debugging" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-38",
        question: "A system is \"ill-conditioned\" if:",
        options: [
          { id: "a", text: "It has too many lines of code" },
          { id: "b", text: "A small change in data yields large changes in the solution" },
          { id: "c", text: "It cannot run on modern hardware" },
          { id: "d", text: "It contains syntax errors" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-39",
        question: "Which formula represents Relative Error?",
        options: [
          { id: "a", text: "$|\mathcal{E} - N|$" },
          { id: "b", text: "$|\mathcal{E} / N|$" },
          { id: "c", text: "$|\mathcal{E} \times N|$" },
          { id: "d", text: "$|N / \mathcal{E}|$" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-40",
        question: "What is the difference between syntax and semantics?",
        options: [
          { id: "a", text: "Syntax is the meaning; Semantics is the grammar." },
          { id: "b", text: "Syntax is the grammar; Semantics is the meaning." },
          { id: "c", text: "Syntax is for compilers; Semantics is for interpreters." },
          { id: "d", text: "There is no difference." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-41",
        question: "The process of assigning values to variables before using them is called:",
        options: [
          { id: "a", text: "Declaration" },
          { id: "b", text: "Initialization" },
          { id: "c", text: "Compilation" },
          { id: "d", text: "Segmentation" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-42",
        question: "In older Fortran compilers, which variables were integer by default?",
        options: [
          { id: "a", text: "a, b, c, d, e, f" },
          { id: "b", text: "i, j, k, l, m, n" },
          { id: "c", text: "x, y, z" },
          { id: "d", text: "u, v, w" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-43",
        question: "Which of the following is NOT one of the three categories of program control structures?",
        options: [
          { id: "a", text: "Sequences" },
          { id: "b", text: "Selections" },
          { id: "c", text: "Compilations" },
          { id: "d", text: "Repetitions" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "se-44",
        question: "Which control structure is used for decision-making (e.g., if-then-else)?",
        options: [
          { id: "a", text: "Sequences" },
          { id: "b", text: "Repetitions" },
          { id: "c", text: "Selections" },
          { id: "d", text: "Loops" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "se-45",
        question: "The repeated performance of the same statement is referred to as:",
        options: [
          { id: "a", text: "Selection" },
          { id: "b", text: "Looping" },
          { id: "c", text: "Sequencing" },
          { id: "d", text: "Branching" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-46",
        question: "What are the two basic types of subprograms?",
        options: [
          { id: "a", text: "Inputs and Outputs" },
          { id: "b", text: "Integers and Reals" },
          { id: "c", text: "Functions and Procedures" },
          { id: "d", text: "Loops and Switches" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "se-47",
        question: "How do function calls differ from procedure calls in code?",
        options: [
          { id: "a", text: "Function calls are statements; Procedure calls are expressions." },
          { id: "b", text: "Function calls are expressions; Procedure calls are statements." },
          { id: "c", text: "Function calls cannot return values." },
          { id: "d", text: "Procedure calls cannot have parameters." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-48",
        question: "What ratio of comments to code does the text suggest is argued by many programmers?",
        options: [
          { id: "a", text: "One line of comment for every ten lines of code" },
          { id: "b", text: "Two lines of comment for every one line of code" },
          { id: "c", text: "One line of comment for every one line of code" },
          { id: "d", text: "No comments are necessary if the code is clean" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-49",
        question: "What is \"segmentation\" in the context of program efficiency?",
        options: [
          { id: "a", text: "Breaking code into different files" },
          { id: "b", text: "Parts of the program taking turns occupying the same area of main storage" },
          { id: "c", text: "Separating data from logic" },
          { id: "d", text: "Using multiple hard drives" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "se-50",
        question: "How does the text describe a C++ class in relation to C?",
        options: [
          { id: "a", text: "A class is a struct with a few more features" },
          { id: "b", text: "A class is a replacement for a function" },
          { id: "c", text: "A class is a completely new concept unrelated to C" },
          { id: "d", text: "A class is a variable that holds text only" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
    ]
  }
];

export const getTopicById = (id: string): Topic | undefined => {
  return quizTopics.find((topic) => topic.id === id);
};

export const getAllTopics = (): Topic[] => {
  return quizTopics;
};
