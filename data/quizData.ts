import { Topic } from "@/types/quiz";

export const quizTopics: Topic[] = [
  {
  "id": "principles-of-software-engineering",
  "title": "Principles of Software Engineering",
  "description": "Test your knowledge on the history, paradigms, and definitions of software engineering.",
  "icon": "Terminal",
  "color": "#9c27b0",
  "questions": [
    {
      "id": "se-1",
      "question": "According to the text, where did the first primitive form of software engineering take place in 1944?",
      "options": [
        { "id": "a", "text": "MIT Laboratories" },
        { "id": "b", "text": "Bletchley Park (Station X)" },
        { "id": "c", "text": "CERN" },
        { "id": "d", "text": "AT & T Bell Laboratories" }
      ],
      "correctAnswer": "b",
      "explanation": "The text states that arguably the first example of software engineering, albeit in a primitive form, took place at Bletchley Park (Station X) in 1944[cite: 4]."
    },
    {
      "id": "se-2",
      "question": "Which computer was developed as part of the Allied war effort to decrypt Axis power ciphers?",
      "options": [
        { "id": "a", "text": "The Enigma" },
        { "id": "b", "text": "The VAX" },
        { "id": "c", "text": "The Colossus" },
        { "id": "d", "text": "The Apple Macintosh" }
      ],
      "correctAnswer": "c",
      "explanation": "The Colossus was developed at Bletchley Park as part of the Allied war effort to decrypt the ciphers of the Axis powers[cite: 4]."
    },
    {
      "id": "se-3",
      "question": "Which 1950s programming language was primarily used by the scientific and engineering communities?",
      "options": [
        { "id": "a", "text": "COBOL" },
        { "id": "b", "text": "BASIC" },
        { "id": "c", "text": "FORTRAN" },
        { "id": "d", "text": "Pascal" }
      ],
      "correctAnswer": "c",
      "explanation": "FORTRAN was one of the popular early languages and was used by the scientific and engineering communities[cite: 8]."
    },
    {
      "id": "se-4",
      "question": "Which language focused on business, banking, and data storage?",
      "options": [
        { "id": "a", "text": "ALGOL" },
        { "id": "b", "text": "COBOL" },
        { "id": "c", "text": "C++" },
        { "id": "d", "text": "FORTRAN" }
      ],
      "correctAnswer": "b",
      "explanation": "COBOL (Common Business Oriented Language) was used in business, the banking industry, and the financial sector, focusing on data storage and access[cite: 8, 10]."
    },
    {
      "id": "se-5",
      "question": "In the early days of development, software design focused on efficiency in terms of minimal computations and minimal use of what?",
      "options": [
        { "id": "a", "text": "Core memory" },
        { "id": "b", "text": "Internet bandwidth" },
        { "id": "c", "text": "Graphical processing" },
        { "id": "d", "text": "External hard drives" }
      ],
      "correctAnswer": "a",
      "explanation": "Early software design prioritized efficiency in minimal computations and specifically the minimal use of core memory due to hardware limitations [cite: 12-14]."
    },
    {
      "id": "se-6",
      "question": "Which language became central to the development of programming microprocessors?",
      "options": [
        { "id": "a", "text": "C#" },
        { "id": "b", "text": "Java" },
        { "id": "c", "text": "BASIC" },
        { "id": "d", "text": "Smalltalk" }
      ],
      "correctAnswer": "c",
      "explanation": "BASIC (Beginners All-purpose Symbolic Instruction Code) became central to the development for programming microprocessors[cite: 17]."
    },
    {
      "id": "se-7",
      "question": "Pascal was developed in 1970 primarily to serve what purpose?",
      "options": [
        { "id": "a", "text": "To replace COBOL in banking" },
        { "id": "b", "text": "To teach programming as a systematic discipline" },
        { "id": "c", "text": "To enable internet browsing" },
        { "id": "d", "text": "To control hardware drivers" }
      ],
      "correctAnswer": "b",
      "explanation": "Pascal was developed in 1970 to make available a language suitable to teach programming as a systematic discipline[cite: 25]."
    },
    {
      "id": "se-8",
      "question": "What was the original goal of PL/1 (Programming Language 1)?",
      "options": [
        { "id": "a", "text": "To create a web-based language" },
        { "id": "b", "text": "To succeed FORTRAN with better data structuring" },
        { "id": "c", "text": "To simply integer arithmetic" },
        { "id": "d", "text": "To emulate UNIX on PCs" }
      ],
      "correctAnswer": "b",
      "explanation": "PL/1 was designed as a multi-purpose language whose original goal was to succeed FORTRAN by including more extensive data structuring facilities[cite: 28]."
    },
    {
      "id": "se-9",
      "question": "Which company developed the VAX/VMS (Virtual Address Extension/Virtual Memory System)?",
      "options": [
        { "id": "a", "text": "Microsoft" },
        { "id": "b", "text": "Apple" },
        { "id": "c", "text": "Digital" },
        { "id": "d", "text": "Xerox" }
      ],
      "correctAnswer": "c",
      "explanation": "The VAX/VMS was developed by the American-based company Digital[cite: 30]."
    },
    {
      "id": "se-10",
      "question": "Where were the C programming language and the UNIX operating system developed?",
      "options": [
        { "id": "a", "text": "Bletchley Park" },
        { "id": "b", "text": "CERN" },
        { "id": "c", "text": "AT & T Bell Laboratories" },
        { "id": "d", "text": "MIT" }
      ],
      "correctAnswer": "c",
      "explanation": "Both the C programming language and the UNIX operating system were developed at the AT & T Bell Laboratories in the early 1970s[cite: 31]."
    },
    {
      "id": "se-11",
      "question": "Which laboratory pioneered the concept of a visual or graphical approach (GUI) to computing in the mid-late 1970s?",
      "options": [
        { "id": "a", "text": "Xerox Laboratories" },
        { "id": "b", "text": "Apple Research" },
        { "id": "c", "text": "Microsoft Labs" },
        { "id": "d", "text": "IBM" }
      ],
      "correctAnswer": "a",
      "explanation": "The concept of a visual or graphical approach (GUI) was considered at the Xerox Laboratories in the mid-late 1970s[cite: 35]."
    },
    {
      "id": "se-12",
      "question": "Where was the concept of a distributed information communications network (the Internet) invented?",
      "options": [
        { "id": "a", "text": "Stanford University" },
        { "id": "b", "text": "CERN particle physics Laboratories" },
        { "id": "c", "text": "Pentagon" },
        { "id": "d", "text": "Silicon Valley" }
      ],
      "correctAnswer": "b",
      "explanation": "The concept of a distributed information communications network (leading to the Internet and WWW) was invented at the CERN particle physics Laboratories in Switzerland[cite: 42]."
    },
    {
      "id": "se-13",
      "question": "What does the acronym BASIC stand for?",
      "options": [
        { "id": "a", "text": "Basic Algorithmic System Information Code" },
        { "id": "b", "text": "Beginners All-purpose Symbolic Instruction Code" },
        { "id": "c", "text": "Binary Analog System Interface Computer" },
        { "id": "d", "text": "Business Applications Standard Input Code" }
      ],
      "correctAnswer": "b",
      "explanation": "BASIC stands for Beginners All-purpose Symbolic Instruction Code[cite: 17]."
    },
    {
      "id": "se-14",
      "question": "Which language had the most far-reaching influence on the design and definition of languages in the 1960s?",
      "options": [
        { "id": "a", "text": "ALGOL" },
        { "id": "b", "text": "PL/1" },
        { "id": "c", "text": "Pascal" },
        { "id": "d", "text": "DOS" }
      ],
      "correctAnswer": "a",
      "explanation": "ALGOL (Algorithmic Language) is noted as having been particularly important, with no other single language having such a far-reaching influence on language design[cite: 17]."
    },
    {
      "id": "se-15",
      "question": "The development of Microsoft Windows from DOS was independently accompanied by the development of which language?",
      "options": [
        { "id": "a", "text": "Java from C" },
        { "id": "b", "text": "C++ from C" },
        { "id": "c", "text": "C# from C++" },
        { "id": "d", "text": "Pascal from ALGOL" }
      ],
      "correctAnswer": "b",
      "explanation": "The development of Microsoft Windows from DOS was independently accompanied by the development of C++ from C[cite: 32]."
    },
    {
      "id": "se-16",
      "question": "In Object Oriented Programming, what are the two principal features of an object?",
      "options": [
        { "id": "a", "text": "Syntax and Semantics" },
        { "id": "b", "text": "Attributes and Behaviour" },
        { "id": "c", "text": "Input and Output" },
        { "id": "d", "text": "Loops and Arrays" }
      ],
      "correctAnswer": "b",
      "explanation": "In object-oriented programming, an object contains two principal features: attributes and behaviour[cite: 56]."
    },
    {
      "id": "se-17",
      "question": "What feature of an object describes how it is different from other objects (often implemented as member variables)?",
      "options": [
        { "id": "a", "text": "Behaviour" },
        { "id": "b", "text": "Methods" },
        { "id": "c", "text": "Attributes" },
        { "id": "d", "text": "Inheritance" }
      ],
      "correctAnswer": "c",
      "explanation": "Attributes, which can be member variables, describe an object and determine how it is different from other objects[cite: 57]."
    },
    {
      "id": "se-18",
      "question": "Sending a message to an object in OOP is equivalent to what action in procedure-oriented programming?",
      "options": [
        { "id": "a", "text": "Defining a variable" },
        { "id": "b", "text": "Calling a function" },
        { "id": "c", "text": "Compiling code" },
        { "id": "d", "text": "Writing a comment" }
      ],
      "correctAnswer": "b",
      "explanation": "Sending a message to an object is equivalent to calling a function using a procedure-oriented approach[cite: 63]."
    },
    {
      "id": "se-19",
      "question": "Objects are instances of what?",
      "options": [
        { "id": "a", "text": "Classes" },
        { "id": "b", "text": "Functions" },
        { "id": "c", "text": "Variables" },
        { "id": "d", "text": "Drivers" }
      ],
      "correctAnswer": "a",
      "explanation": "Objects are defined as instances of classes, and they are instantiated individually[cite: 60]."
    },
    {
      "id": "se-20",
      "question": "Which feature is arguably one of the most important in OOP because it leads to component-based software engineering?",
      "options": [
        { "id": "a", "text": "Complexity" },
        { "id": "b", "text": "Reusability" },
        { "id": "c", "text": "Redundancy" },
        { "id": "d", "text": "Connectivity" }
      ],
      "correctAnswer": "b",
      "explanation": "Reusability is argued to be one of the most important features of object-oriented programming, leading directly to component-based software engineering[cite: 66]."
    },
    {
      "id": "se-21",
      "question": "Structured programming is designed so that code can be read in what way?",
      "options": [
        { "id": "a", "text": "Like a dictionary (alphabetically)" },
        { "id": "b", "text": "Like a book (left to right, top to bottom)" },
        { "id": "c", "text": "Randomly (jumping between modules)" },
        { "id": "d", "text": "Like a blueprint (bottom up)" }
      ],
      "correctAnswer": "b",
      "explanation": "Structured programming involves designing functions using well-defined control statements so the code can be read as a book: from left to right and from top to bottom[cite: 52]."
    },
    {
      "id": "se-22",
      "question": "Which of the following is listed as one of the leading commercial object-oriented languages?",
      "options": [
        { "id": "a", "text": "COBOL" },
        { "id": "b", "text": "Smalltalk" },
        { "id": "c", "text": "FORTRAN" },
        { "id": "d", "text": "Pascal" }
      ],
      "correctAnswer": "b",
      "explanation": "The text lists C++, Smalltalk, and Java as leading commercial object-oriented languages[cite: 68]."
    },
    {
      "id": "se-23",
      "question": "Procedure Oriented Programming involves identifying a sequence of specific processes to form what?",
      "options": [
        { "id": "a", "text": "Objects" },
        { "id": "b", "text": "Procedures (or functions)" },
        { "id": "c", "text": "Databases" },
        { "id": "d", "text": "User Interfaces" }
      ],
      "correctAnswer": "b",
      "explanation": "Procedure-oriented programming is concerned with identifying a sequence of specific processes that form the basis of a set of procedures (or functions)[cite: 51]."
    },
    {
      "id": "se-24",
      "question": "When was the term \"Software Engineering\" first popularized?",
      "options": [
        { "id": "a", "text": "1944 Bletchley Park Meeting" },
        { "id": "b", "text": "1968 NATO Software Engineering Conference" },
        { "id": "c", "text": "1970 UNIX Launch" },
        { "id": "d", "text": "1980 Microsoft Incorporation" }
      ],
      "correctAnswer": "b",
      "explanation": "The term was first popularized by the 1968 NATO Software Engineering Conference held in Garmisch, Germany[cite: 73]."
    },
    {
      "id": "se-25",
      "question": "IEEE Standard 610.12 defines software engineering as the application of what kind of approach?",
      "options": [
        { "id": "a", "text": "A creative, artistic, and abstract approach" },
        { "id": "b", "text": "A systematic, disciplined, and quantifiable approach" },
        { "id": "c", "text": "A rapid, agile, and flexible approach" },
        { "id": "d", "text": "A theoretical, mathematical, and logical approach" }
      ],
      "correctAnswer": "b",
      "explanation": "IEEE Standard 610.12 defines software engineering as the application of a systematic, disciplined, quantifiable approach to the development of software [cite: 75-76]."
    },
    {
      "id": "se-26",
      "question": "Why is \"craftsmanship\" suggested as an appropriate metaphor for software development?",
      "options": [
        { "id": "a", "text": "It implies the work is done by hand without tools" },
        { "id": "b", "text": "It focuses on the skills of the developer as the key to success" },
        { "id": "c", "text": "It suggests the field is obsolete" },
        { "id": "d", "text": "It implies that no engineering principles are used" }
      ],
      "correctAnswer": "b",
      "explanation": "Craftsmanship is considered an appropriate metaphor because it focuses on the skills of the developer as the key to the success of the manufacturing process [cite: 81-84]."
    },
    {
      "id": "se-27",
      "question": "Compilers, editors, and drivers are examples of what category of software?",
      "options": [
        { "id": "a", "text": "Business software" },
        { "id": "b", "text": "System software" },
        { "id": "c", "text": "Embedded software" },
        { "id": "d", "text": "Artificial Intelligence" }
      ],
      "correctAnswer": "b",
      "explanation": "Compilers, editors, drivers, and operating system components are categorized as System software [cite: 93-98]."
    },
    {
      "id": "se-28",
      "question": "CAD (Computer Aided Design) and CFD (Computational Fluid Dynamics) belong to which software category?",
      "options": [
        { "id": "a", "text": "Real-time software" },
        { "id": "b", "text": "Scientific and engineering software" },
        { "id": "c", "text": "PC software" },
        { "id": "d", "text": "Business software" }
      ],
      "correctAnswer": "b",
      "explanation": "CAD/CAM/CAE and CFD are categorized under Scientific and engineering software [cite: 106-111]."
    },
    {
      "id": "se-29",
      "question": "Which of the following is an example of embedded software mentioned in the text?",
      "options": [
        { "id": "a", "text": "Games" },
        { "id": "b", "text": "Mobile communication systems" },
        { "id": "c", "text": "Relational databases" },
        { "id": "d", "text": "Compilers" }
      ],
      "correctAnswer": "b",
      "explanation": "Mobile communication systems are listed as an example of Embedded software[cite: 115]."
    },
    {
      "id": "se-30",
      "question": "Which element completes the error chain: Input errors $\\rightarrow$ ______ $\\rightarrow$ Output errors?",
      "options": [
        { "id": "a", "text": "Compiler errors" },
        { "id": "b", "text": "Algorithm errors" },
        { "id": "c", "text": "Hardware errors" },
        { "id": "d", "text": "User errors" }
      ],
      "correctAnswer": "b",
      "explanation": "The algorithm induces errors, creating the chain: Input errors -> Algorithm errors -> Output errors [cite: 132-133]."
    },
    {
      "id": "se-31",
      "question": "How is Absolute Error ($\\mathcal{E}$) defined mathematically?",
      "options": [
        { "id": "a", "text": "$\\mathcal{E} = n \\times N$" },
        { "id": "b", "text": "$\\mathcal{E} = n - N$" },
        { "id": "c", "text": "$\\mathcal{E} = N / n$" },
        { "id": "d", "text": "$\\mathcal{E} = n + N$" }
      ],
      "correctAnswer": "b",
      "explanation": "Absolute error is defined as $\\mathcal{E}=n-N$, where $n$ is the approximate value and $N$ is the exact value [cite: 140-141]."
    },
    {
      "id": "se-32",
      "question": "Why is Relative Error often more important than Absolute Error?",
      "options": [
        { "id": "a", "text": "It is easier to calculate" },
        { "id": "b", "text": "It helps appreciate the error size by comparing it to the quantity being approximated" },
        { "id": "c", "text": "It is the only error type computers can detect" },
        { "id": "d", "text": "It is always a positive integer" }
      ],
      "correctAnswer": "b",
      "explanation": "Relative Error allows the importance of an error to be better appreciated by comparing it to the quantity being approximated, especially for very small or large numbers[cite: 142, 144]."
    },
    {
      "id": "se-33",
      "question": "Mistakes made in copying data from one form to another are called:",
      "options": [
        { "id": "a", "text": "Rounding errors" },
        { "id": "b", "text": "Transcription errors" },
        { "id": "c", "text": "Truncation errors" },
        { "id": "d", "text": "Conversion errors" }
      ],
      "correctAnswer": "b",
      "explanation": "Transcription errors are explicitly defined as mistakes in copying from one form to another[cite: 165]."
    },
    {
      "id": "se-34",
      "question": "What type of error occurs when a limited number of terms of an infinite series are used to approximate a number?",
      "options": [
        { "id": "a", "text": "Rounding error" },
        { "id": "b", "text": "Truncation error" },
        { "id": "c", "text": "Transcription error" },
        { "id": "d", "text": "Data error" }
      ],
      "correctAnswer": "b",
      "explanation": "Truncation errors occur when a limited number of terms of an infinite series are taken to approximate a number [cite: 173-174]."
    },
    {
      "id": "se-35",
      "question": "Removing digits after the nth decimal place results in which type of error?",
      "options": [
        { "id": "a", "text": "Algorithmic error" },
        { "id": "b", "text": "Rounding error" },
        { "id": "c", "text": "Input error" },
        { "id": "d", "text": "Overflow error" }
      ],
      "correctAnswer": "b",
      "explanation": "Rounding errors occur when not all significant digits are given; for example, when digits after the nth place are removed [cite: 166-170]."
    },
    {
      "id": "se-36",
      "question": "Algorithmic errors frequently depend on the number of operations performed and what else?",
      "options": [
        { "id": "a", "text": "The programming language used" },
        { "id": "b", "text": "The order of the operations performed" },
        { "id": "c", "text": "The speed of the CPU" },
        { "id": "d", "text": "The brand of the computer" }
      ],
      "correctAnswer": "b",
      "explanation": "The errors produced by an algorithm frequently depend on the order of the operations performed and the number of operations performed [cite: 179-180]."
    },
    {
      "id": "se-37",
      "question": "What method reduces error accumulation by reducing the number of operations?",
      "options": [
        { "id": "a", "text": "Looping" },
        { "id": "b", "text": "Nesting" },
        { "id": "c", "text": "Compiling" },
        { "id": "d", "text": "Debugging" }
      ],
      "correctAnswer": "b",
      "explanation": "Nesting is a method that reduces the number of operations, thereby reducing error accumulation [cite: 208-209]."
    },
    {
      "id": "se-38",
      "question": "A system is \"ill-conditioned\" if:",
      "options": [
        { "id": "a", "text": "It has too many lines of code" },
        { "id": "b", "text": "A small change in data yields large changes in the solution" },
        { "id": "c", "text": "It cannot run on modern hardware" },
        { "id": "d", "text": "It contains syntax errors" }
      ],
      "correctAnswer": "b",
      "explanation": "Conditioning is important for ill-conditioned systems, which are systems where a small change to the data yields large changes in the solution[cite: 210]."
    },
    {
      "id": "se-39",
      "question": "Which formula represents Relative Error?",
      "options": [
        { "id": "a", "text": "$|\\mathcal{E} - N|$" },
        { "id": "b", "text": "$|\\mathcal{E} / N|$" },
        { "id": "c", "text": "$|\\mathcal{E} \\times N|$" },
        { "id": "d", "text": "$|N / \\mathcal{E}|$" }
      ],
      "correctAnswer": "b",
      "explanation": "Relative error is defined by the formula $|\\mathcal{E}/N|$[cite: 143]."
    },
    {
      "id": "se-40",
      "question": "What is the difference between syntax and semantics?",
      "options": [
        { "id": "a", "text": "Syntax is the meaning; Semantics is the grammar." },
        { "id": "b", "text": "Syntax is the grammar; Semantics is the meaning." },
        { "id": "c", "text": "Syntax is for compilers; Semantics is for interpreters." },
        { "id": "d", "text": "There is no difference." }
      ],
      "correctAnswer": "b",
      "explanation": "The syntax of a language refers to the grammatical rules, while the semantics refers to the rules that govern its meaning (what happens when executed) [cite: 225-227]."
    },
    {
      "id": "se-41",
      "question": "The process of assigning values to variables before using them is called:",
      "options": [
        { "id": "a", "text": "Declaration" },
        { "id": "b", "text": "Initialization" },
        { "id": "c", "text": "Compilation" },
        { "id": "d", "text": "Segmentation" }
      ],
      "correctAnswer": "b",
      "explanation": "The process of assigning values to variables before using them is explicitly called initialization[cite: 237]."
    },
    {
      "id": "se-42",
      "question": "In older Fortran compilers, which variables were integer by default?",
      "options": [
        { "id": "a", "text": "a, b, c, d, e, f" },
        { "id": "b", "text": "i, j, k, l, m, n" },
        { "id": "c", "text": "x, y, z" },
        { "id": "d", "text": "u, v, w" }
      ],
      "correctAnswer": "b",
      "explanation": "In older Fortran compilers, the variables i, j, k, l, m, n were taken to be integer by default, often used for array indexing[cite: 239]."
    },
    {
      "id": "se-43",
      "question": "Which of the following is NOT one of the three categories of program control structures?",
      "options": [
        { "id": "a", "text": "Sequences" },
        { "id": "b", "text": "Selections" },
        { "id": "c", "text": "Compilations" },
        { "id": "d", "text": "Repetitions" }
      ],
      "correctAnswer": "c",
      "explanation": "Program control structures fall into three categories: sequences, selections, and repetitions. [cite_start]'Compilations' is not a control structure [cite: 257-258]."
    },
    {
      "id": "se-44",
      "question": "Which control structure is used for decision-making (e.g., if-then-else)?",
      "options": [
        { "id": "a", "text": "Sequences" },
        { "id": "b", "text": "Repetitions" },
        { "id": "c", "text": "Selections" },
        { "id": "d", "text": "Loops" }
      ],
      "correctAnswer": "c",
      "explanation": "Selections form part of the decision-making facilities, such as the if-then-else statement [cite: 263-267]."
    },
    {
      "id": "se-45",
      "question": "The repeated performance of the same statement is referred to as:",
      "options": [
        { "id": "a", "text": "Selection" },
        { "id": "b", "text": "Looping" },
        { "id": "c", "text": "Sequencing" },
        { "id": "d", "text": "Branching" }
      ],
      "correctAnswer": "b",
      "explanation": "The repeated performance of the same statement is referred to as looping[cite: 270]."
    },
    {
      "id": "se-46",
      "question": "What are the two basic types of subprograms?",
      "options": [
        { "id": "a", "text": "Inputs and Outputs" },
        { "id": "b", "text": "Integers and Reals" },
        { "id": "c", "text": "Functions and Procedures" },
        { "id": "d", "text": "Loops and Switches" }
      ],
      "correctAnswer": "c",
      "explanation": "The two basic types of subprogram are functions and procedures (also called subroutines)[cite: 281]."
    },
    {
      "id": "se-47",
      "question": "How do function calls differ from procedure calls in code?",
      "options": [
        { "id": "a", "text": "Function calls are statements; Procedure calls are expressions." },
        { "id": "b", "text": "Function calls are expressions; Procedure calls are statements." },
        { "id": "c", "text": "Function calls cannot return values." },
        { "id": "d", "text": "Procedure calls cannot have parameters." }
      ],
      "correctAnswer": "b",
      "explanation": "Procedure calls are statements, whereas function calls appear in programs as expressions[cite: 306]."
    },
    {
      "id": "se-48",
      "question": "What ratio of comments to code does the text suggest is argued by many programmers?",
      "options": [
        { "id": "a", "text": "One line of comment for every ten lines of code" },
        { "id": "b", "text": "Two lines of comment for every one line of code" },
        { "id": "c", "text": "One line of comment for every one line of code" },
        { "id": "d", "text": "No comments are necessary if the code is clean" }
      ],
      "correctAnswer": "b",
      "explanation": "Many programmers argue that for every one line of code there should be at least two lines of comment[cite: 361]."
    },
    {
      "id": "se-49",
      "question": "What is \"segmentation\" in the context of program efficiency?",
      "options": [
        { "id": "a", "text": "Breaking code into different files" },
        { "id": "b", "text": "Parts of the program taking turns occupying the same area of main storage" },
        { "id": "c", "text": "Separating data from logic" },
        { "id": "d", "text": "Using multiple hard drives" }
      ],
      "correctAnswer": "b",
      "explanation": "A segmented program is one that allows some parts of the program (segments) to take turns in occupying the same area of main storage[cite: 382]."
    },
    {
      "id": "se-50",
      "question": "How does the text describe a C++ class in relation to C?",
      "options": [
        { "id": "a", "text": "A class is a struct with a few more features" },
        { "id": "b", "text": "A class is a replacement for a function" },
        { "id": "c", "text": "A class is a completely new concept unrelated to C" },
        { "id": "d", "text": "A class is a variable that holds text only" }
      ],
      "correctAnswer": "a",
      "explanation": "The text states that C++ can be viewed as C with classes, and a class is essentially a struct with a few more features [cite: 428-430]."
    }
  ]
},
  {
    id: "programming-with-cpp",
    title: "Programming with C++",
    description: "Test your knowledge of C++ syntax, OOP concepts, compilers, and algorithms.",
    icon: "Code",
    color: "#00599C",
    questions: [
      {
        id: "cpp-1",
        question: "C++ was developed as an extension of which programming language?",
        options: [
          { id: "a", text: "Java" },
          { id: "b", text: "Pascal" },
          { id: "c", text: "C" },
          { id: "d", text: "Basic" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-2",
        question: "In C++, what term is used to describe an \"abstract data type\"?",
        options: [
          { id: "a", text: "Object" },
          { id: "b", text: "Class" },
          { id: "c", text: "Method" },
          { id: "d", text: "Library" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-3",
        question: "Which of the following best describes a \"class\" in C++ according to the text?",
        options: [
          { id: "a", text: "A struct with a few more features" },
          { id: "b", text: "A function with private data" },
          { id: "c", text: "A completely new data format unrelated to C" },
          { id: "d", text: "An external library file" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-4",
        question: "What is the key difference between a C struct and a C++ class mentioned in the text?",
        options: [
          { id: "a", text: "A class cannot store data." },
          { id: "b", text: "A struct cannot be public." },
          { id: "c", text: "A class can keep part of its data private." },
          { id: "d", text: "A struct supports inheritance by default." },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-5",
        question: "What are the \"three pillars\" of Object-Oriented Programming (OOP)?",
        options: [
          { id: "a", text: "Editing, Compiling, Linking" },
          { id: "b", text: "Encapsulation, Inheritance, Polymorphism" },
          { id: "c", text: "Input, Processing, Output" },
          { id: "d", text: "Classes, Functions, Variables" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-6",
        question: "The concept of \"Data Hiding\" is achieved through which OOP pillar?",
        options: [
          { id: "a", text: "Inheritance" },
          { id: "b", text: "Polymorphism" },
          { id: "c", text: "Encapsulation" },
          { id: "d", text: "Structured Programming" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-7",
        question: "In the text's analogy, a resistor or a refrigerator is an example of what concept?",
        options: [
          { id: "a", text: "Inheritance" },
          { id: "b", text: "Encapsulation (a \"black box\")" },
          { id: "c", text: "Polymorphism" },
          { id: "d", text: "A compiler" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-8",
        question: "Which concept allows a programmer to take an existing class and augment or modify it?",
        options: [
          { id: "a", text: "Inheritance" },
          { id: "b", text: "Encapsulation" },
          { id: "c", text: "Interpretation" },
          { id: "d", text: "Debugging" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-9",
        question: "What does \"Polymorphism\" mean?",
        options: [
          { id: "a", text: "Many forms" },
          { id: "b", text: "Hidden data" },
          { id: "c", text: "Single structure" },
          { id: "d", text: "Machine code" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-10",
        question: "\"Procedural programming\" focuses primarily on what?",
        options: [
          { id: "a", text: "Objects" },
          { id: "b", text: "Procedures (functions)" },
          { id: "c", text: "Data security" },
          { id: "d", text: "User Interfaces" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-11",
        question: "What translates source code directly into actions as it reads it?",
        options: [
          { id: "a", text: "Compiler" },
          { id: "b", text: "Linker" },
          { id: "c", text: "Interpreter" },
          { id: "d", text: "Editor" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-12",
        question: "A compiler translates source code into what intermediary form?",
        options: [
          { id: "a", text: "Script file" },
          { id: "b", text: "Object file" },
          { id: "c", text: "Text file" },
          { id: "d", text: "Library file" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-13",
        question: "What tool combines object files into an executable program?",
        options: [
          { id: "a", text: "Text Editor" },
          { id: "b", text: "Preprocessor" },
          { id: "c", text: "Interpreter" },
          { id: "d", text: "Linker" },
        ],
        correctAnswer: "d",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-14",
        question: "Why do compiled programs generally run faster than interpreted ones?",
        options: [
          { id: "a", text: "They use less memory." },
          { id: "b", text: "The translation to machine language is done once at compile time." },
          { id: "c", text: "They do not require an operating system." },
          { id: "d", text: "They are always smaller in size." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-15",
        question: "Who developed the C++ programming language?",
        options: [
          { id: "a", text: "Dennis Ritchie" },
          { id: "b", text: "Bill Gates" },
          { id: "c", text: "Bjarne Stroustrup" },
          { id: "d", text: "The ANSI Committee" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-16",
        question: "According to the text, is it necessary to learn C before learning C++?",
        options: [
          { id: "a", text: "Yes, it is mandatory." },
          { id: "b", text: "Yes, because C++ is a superset of C." },
          { id: "c", text: "No, it might even be advantageous not to." },
          { id: "d", text: "Only if you want to use pointers." },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-17",
        question: "C++ and Java are so similar that learning one is said to be learning what percentage of the other?",
        options: [
          { id: "a", text: "50%" },
          { id: "b", text: "75%" },
          { id: "c", text: "90%" },
          { id: "d", text: "100%" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-18",
        question: "Interpreters are often referred to as what in modern programming?",
        options: [
          { id: "a", text: "Script engines" },
          { id: "b", text: "Linkers" },
          { id: "c", text: "Compilers" },
          { id: "d", text: "Debuggers" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-19",
        question: "What is the principal idea behind \"Structured Programming\"?",
        options: [
          { id: "a", text: "Hide the data" },
          { id: "b", text: "Divide and conquer" },
          { id: "c", text: "Use only global variables" },
          { id: "d", text: "Eliminate functions" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-20",
        question: "In the example of \"Acme Motors,\" creating a \"Quasar\" car from a \"Star\" car illustrates which concept?",
        options: [
          { id: "a", text: "Encapsulation" },
          { id: "b", text: "Inheritance" },
          { id: "c", text: "Iteration" },
          { id: "d", text: "Linking" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-21",
        question: "Programs that use an interpreter are often called what?",
        options: [
          { id: "a", text: "Applications" },
          { id: "b", text: "Executables" },
          { id: "c", text: "Scripts" },
          { id: "d", text: "Objects" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-22",
        question: "What type of file does a text editor produce for programming?",
        options: [
          { id: "a", text: "Object file" },
          { id: "b", text: "Executable file" },
          { id: "c", text: "Source file" },
          { id: "d", text: "Library file" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-23",
        question: "Which of the following is a common file extension for C++ source files?",
        options: [
          { id: "a", text: ".txt" },
          { id: "b", text: ".cpp" },
          { id: "c", text: ".exe" },
          { id: "d", text: ".obj" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-24",
        question: "What is the extension of an object file produced by the compiler?",
        options: [
          { id: "a", text: ".cpp" },
          { id: "b", text: ".obj or .o" },
          { id: "c", text: ".h" },
          { id: "d", text: ".bin" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-25",
        question: "Which software component runs before the compiler to handle lines starting with #?",
        options: [
          { id: "a", text: "Linker" },
          { id: "b", text: "Preprocessor" },
          { id: "c", text: "Debugger" },
          { id: "d", text: "Editor" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-26",
        question: "What does the #include command tell the preprocessor to do?",
        options: [
          { id: "a", text: "Run the program immediately" },
          { id: "b", text: "Print a line of text" },
          { id: "c", text: "Find a file, read it, and place it right there" },
          { id: "d", text: "Ignore the following lines" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-27",
        question: "If a compiler error states \"cannot find file iostream,\" what is a likely cause?",
        options: [
          { id: "a", text: "The computer is out of memory." },
          { id: "b", text: "The include path or environment variables are not set up." },
          { id: "c", text: "The main function is missing." },
          { id: "d", text: "The internet connection is down." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-28",
        question: "Errors that show up only when you run the program are often called what?",
        options: [
          { id: "a", text: "Syntax errors" },
          { id: "b", text: "Link errors" },
          { id: "c", text: "Bugs (Run-time errors)" },
          { id: "d", text: "Typos" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-29",
        question: "The \"link\" step fails if:",
        options: [
          { id: "a", text: "The source code has a syntax error." },
          { id: "b", text: "The object file cannot be combined with necessary libraries." },
          { id: "c", text: "The computer is too slow." },
          { id: "d", text: "The variable names are too long." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-30",
        question: "What is a \"library\" in the context of C++?",
        options: [
          { id: "a", text: "A collection of linkable files (functions/classes)" },
          { id: "b", text: "A manual for the programming language" },
          { id: "c", text: "A database of variable names" },
          { id: "d", text: "A folder for saving .cpp files" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-31",
        question: "Every C++ program must have which function?",
        options: [
          { id: "a", text: "start()" },
          { id: "b", text: "begin()" },
          { id: "c", text: "main()" },
          { id: "d", text: "init()" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-32",
        question: "What constitutes a \"block of code\" in a function?",
        options: [
          { id: "a", text: "Everything between ( and )" },
          { id: "b", text: "Everything between { and }" },
          { id: "c", text: "Everything on a single line" },
          { id: "d", text: "Everything after #include" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-33",
        question: "What symbol is used for \"output redirection\" (printing to screen)?",
        options: [
          { id: "a", text: ">>" },
          { id: "b", text: "==" },
          { id: "c", text: "<<" },
          { id: "d", text: "::" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-34",
        question: "The std:: prefix before cout indicates what?",
        options: [
          { id: "a", text: "It is a standard variable." },
          { id: "b", text: "It belongs to the standard namespace." },
          { id: "c", text: "It is a static function." },
          { id: "d", text: "It is a system driver." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-35",
        question: "Which of the following is a legal variable name in C++?",
        options: [
          { id: "a", text: "my Age" },
          { id: "b", text: "23Jump" },
          { id: "c", text: "myAge" },
          { id: "d", text: "class" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-36",
        question: "C++ is \"case sensitive,\" which means:",
        options: [
          { id: "a", text: "All commands must be in uppercase." },
          { id: "b", text: "age, Age, and AGE are considered different variables." },
          { id: "c", text: "Variables must always start with a capital letter." },
          { id: "d", text: "It automatically corrects capitalization errors." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-37",
        question: "According to Table  5.9.8, what is the size of a double variable?",
        options: [
          { id: "a", text: "2 bytes" },
          { id: "b", text: "4 bytes" },
          { id: "c", text: "8 bytes" },
          { id: "d", text: "1 byte" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-38",
        question: "Which variable type is used to hold a True or False value?",
        options: [
          { id: "a", text: "int" },
          { id: "b", text: "char" },
          { id: "c", text: "bool" },
          { id: "d", text: "float" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-39",
        question: "What does the keyword typedef do?",
        options: [
          { id: "a", text: "Creates a new variable type from scratch." },
          { id: "b", text: "Creates an alias or synonym for an existing type." },
          { id: "c", text: "Defines a type of function." },
          { id: "d", text: "Imports a definition from a library." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-40",
        question: "In the statement unsigned short width = 5;, what is the operator = called?",
        options: [
          { id: "a", text: "Equality operator" },
          { id: "b", text: "Assignment operator" },
          { id: "c", text: "Math operator" },
          { id: "d", text: "Logical operator" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-41",
        question: "What is \"Hungarian notation\"?",
        options: [
          { id: "a", text: "Writing variable names in all caps." },
          { id: "b", text: "Prefixing variables with characters that describe their type (e.g., iAge)." },
          { id: "c", text: "Using underscores between words (e.g., my_age)." },
          { id: "d", text: "Using random letters for variables." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-42",
        question: "Which of the following allows you to create comments in C++?",
        options: [
          { id: "a", text: "**" },
          { id: "b", text: "$$" },
          { id: "c", text: "//" },
          { id: "d", text: "##" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-43",
        question: "The character \\n inside a string is used to:",
        options: [
          { id: "a", text: "End the program." },
          { id: "b", text: "Insert a new line." },
          { id: "c", text: "Sound a beep." },
          { id: "d", text: "Clear the screen." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-44",
        question: "What happens if you try to use a C++ keyword (like if or while) as a variable name?",
        options: [
          { id: "a", text: "It works fine." },
          { id: "b", text: "It works but gives a warning." },
          { id: "c", text: "It is not allowed; keywords are reserved." },
          { id: "d", text: "The compiler automatically renames it." },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-45",
        question: "The factorial of a number $N$ is calculated as:",
        options: [
          { id: "a", text: "$N + (N-1) + ... + 1$" },
          { id: "b", text: "$N * (N-1) * (N-2) * ... * 1$" },
          { id: "c", text: "$N * N$" },
          { id: "d", text: "$2^N$" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-46",
        question: "In the recursive factorial function, what is the \"Base Case\" defined in the text?",
        options: [
          { id: "a", text: "If $n < 0$" },
          { id: "b", text: "If $n == 100$" },
          { id: "c", text: "If $n == 0$ or $n == 1$" },
          { id: "d", text: "There is no base case." },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-47",
        question: "Why is the variable type long long used for storing factorials in the example code?",
        options: [
          { id: "a", text: "Because factorials grow very quickly and exceed standard int capacity." },
          { id: "b", text: "Because factorials are always negative." },
          { id: "c", text: "Because int is not a valid type in C++." },
          { id: "d", text: "To use less memory." },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-48",
        question: "What is the mathematical definition of the Fibonacci series used in the text?",
        options: [
          { id: "a", text: "$F_K = F_{K-1} * F_{K-2}$" },
          { id: "b", text: "$F_K = F_{K-1} + F_{K-2}$" },
          { id: "c", text: "$F_K = F_{K-1} - 1$" },
          { id: "d", text: "$F_K = 2 * K$" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-49",
        question: "In the recursive Fibonacci function, what happens if $n=0$?",
        options: [
          { id: "a", text: "It returns 1." },
          { id: "b", text: "It returns 0." },
          { id: "c", text: "It calls the function again." },
          { id: "d", text: "It prints an error." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "cpp-50",
        question: "Which programming construct is used in the \"Iterative\" solution for Factorial?",
        options: [
          { id: "a", text: "A function calling itself" },
          { id: "b", text: "A for loop" },
          { id: "c", text: "A class definition" },
          { id: "d", text: "A switch statement" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
    ]
  },
  {
    id: "intro-to-computers",
    title: "Introduction to Computers & History",
    description: "Test your knowledge on computer history, networks, ubiquitous computing, and the internet.",
    icon: "Monitor", 
    color: "#2e7d32",
    questions: [
      {
        id: "intro-1",
        question: "What is the course code for \"Computing and Software Engineering\" described in the document?",
        options: [
          { id: "a", text: "CSE 211" },
          { id: "b", text: "GET 211" },
          { id: "c", text: "CPE 301" },
          { id: "d", text: "EEE 211" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-2",
        question: "According to the learning outcomes, which languages are preferred for the practical object-oriented programming exposure?",
        options: [
          { id: "a", text: "Python, Java, or C++" },
          { id: "b", text: "Ruby, Perl, or PHP" },
          { id: "c", text: "C#, Swift, or Kotlin" },
          { id: "d", text: "Assembly, Fortran, or Cobol" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "intro-3",
        question: "Which device, released in April 2024 for about 700 dollars, is cited as an example of an AGI-driven Computer System?",
        options: [
          { id: "a", text: "The AI Pin" },
          { id: "b", text: "Google Glass 2" },
          { id: "c", text: "The Neuralink Chip" },
          { id: "d", text: "The Meta Quest 4" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "intro-4",
        question: "Which law is mentioned as driving the cost-wise development of today's computers?",
        options: [
          { id: "a", text: "Amdahl's Law" },
          { id: "b", text: "Moore's Law" },
          { id: "c", text: "Metcalfe's Law" },
          { id: "d", text: "Gustafson's Law" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-5",
        question: "Computers used by many people at the same time are often referred to as:",
        options: [
          { id: "a", text: "Personal Computers" },
          { id: "b", text: "Time sharing systems" },
          { id: "c", text: "Embedded Systems" },
          { id: "d", text: "Micro-controllers" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-6",
        question: "Which type of computer is used mainly for data acquisition systems, process controls, and hosting in manufacturing plants?",
        options: [
          { id: "a", text: "Personal Computer" },
          { id: "b", text: "Industrial Computer" },
          { id: "c", text: "Tablet PC" },
          { id: "d", text: "Wearable Computer" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-7",
        question: "Speed in computer systems is expressed in what unit?",
        options: [
          { id: "a", text: "Bytes" },
          { id: "b", text: "Flops" },
          { id: "c", text: "Hertz" },
          { id: "d", text: "Pixels" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-8",
        question: "What are the outputs from computers referred to as?",
        options: [
          { id: "a", text: "Data" },
          { id: "b", text: "Processing" },
          { id: "c", text: "Information" },
          { id: "d", text: "Input" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-9",
        question: "A computer network allows the sharing of resources. Which of the following is listed as a shareable resource?",
        options: [
          { id: "a", text: "Motherboards" },
          { id: "b", text: "Printers" },
          { id: "c", text: "Power Supply Units" },
          { id: "d", text: "Users" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-10",
        question: "Which of the following is an example of a communication protocol listed in the text?",
        options: [
          { id: "a", text: "HTML" },
          { id: "b", text: "BGP (Border Gateway Protocol)" },
          { id: "c", text: "SQL" },
          { id: "d", text: "USB" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-11",
        question: "The military radar system \"Semi-Automatic Ground Environment\" (SAGE) started in which era?",
        options: [
          { id: "a", text: "Late 1940s" },
          { id: "b", text: "Late 1950s" },
          { id: "c", text: "Early 1970s" },
          { id: "d", text: "Late 1980s" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-12",
        question: "Who created the first wide area network (WAN) in 1965?",
        options: [
          { id: "a", text: "Vinton Cerf" },
          { id: "b", text: "Thomas Marill and Lawrence G. Roberts" },
          { id: "c", text: "Leonard Kleinrock" },
          { id: "d", text: "Tim Berners-Lee" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-13",
        question: "In which network topology are all nodes connected to a special central node?",
        options: [
          { id: "a", text: "Bus" },
          { id: "b", text: "Ring" },
          { id: "c", text: "Star" },
          { id: "d", text: "Mesh" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-14",
        question: "In a ring network, how is each node connected?",
        options: [
          { id: "a", text: "To a central hub" },
          { id: "b", text: "To every other node" },
          { id: "c", text: "To its left and right neighbor" },
          { id: "d", text: "To a common medium line" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-15",
        question: "What is the distinguishing feature of a mesh network?",
        options: [
          { id: "a", text: "All nodes connect to a server" },
          { id: "b", text: "Nodes connect in a circle" },
          { id: "c", text: "There is at least one traversal from any node to any other" },
          { id: "d", text: "Data travels in one direction only" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-16",
        question: "Which protocol defines the rules and data formats for exchanging information on a network?",
        options: [
          { id: "a", text: "Communication protocol" },
          { id: "b", text: "Operating System" },
          { id: "c", text: "Encryption key" },
          { id: "d", text: "Topography" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "intro-17",
        question: "Ubiquitous computing is defined as machines that:",
        options: [
          { id: "a", text: "Force humans to enter their environment" },
          { id: "b", text: "Fit the human environment" },
          { id: "c", text: "Are only found in laboratories" },
          { id: "d", text: "Require command-line interfaces" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-18",
        question: "Mark Weiser proposed three basic forms for ubiquitous devices. Which of these is NOT one of them?",
        options: [
          { id: "a", text: "Tabs" },
          { id: "b", text: "Pads" },
          { id: "c", text: "Boards" },
          { id: "d", text: "Spheres" },
        ],
        correctAnswer: "d",
        explanation: "No explanation provided."
      },
      {
        id: "intro-19",
        question: "How are \"Tabs\" defined in the context of ubiquitous computing?",
        options: [
          { id: "a", text: "Meter-sized displays" },
          { id: "b", text: "Hand-held decimeter-sized devices" },
          { id: "c", text: "Wearable centimeter-sized devices" },
          { id: "d", text: "Invisible sensors" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-20",
        question: "Which new form of ubiquitous device refers to ensembles of MEMS formed into arbitrary three-dimensional shapes?",
        options: [
          { id: "a", text: "Dust" },
          { id: "b", text: "Skin" },
          { id: "c", text: "Clay" },
          { id: "d", text: "Fabric" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-21",
        question: "\"Dust\" in ubiquitous computing refers to devices ranging from nanometers to:",
        options: [
          { id: "a", text: "Centimeters" },
          { id: "b", text: "Millimeters" },
          { id: "c", text: "Decimeters" },
          { id: "d", text: "Meters" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-22",
        question: "When did the word \"Internet\" first appear?",
        options: [
          { id: "a", text: "1969" },
          { id: "b", text: "1975" },
          { id: "c", text: "1982" },
          { id: "d", text: "1990" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-23",
        question: "Which Nigerian Earth Station was established in 1965?",
        options: [
          { id: "a", text: "Abuja Earth Station" },
          { id: "b", text: "Lanlate Earth Station" },
          { id: "c", text: "Lagos Earth Station" },
          { id: "d", text: "NORSAR" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-24",
        question: "The \"Internet\" is described as a:",
        options: [
          { id: "a", text: "Single centralized network" },
          { id: "b", text: "Network of networks" },
          { id: "c", text: "Synonym for the World Wide Web" },
          { id: "d", text: "Government-owned database" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-25",
        question: "What organization administers the Internet's core infrastructure and name spaces (like domain names)?",
        options: [
          { id: "a", text: "UNESCO" },
          { id: "b", text: "IEEE" },
          { id: "c", text: "ICANN" },
          { id: "d", text: "ISO" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-26",
        question: "The World Wide Web (WWW) is described as:",
        options: [
          { id: "a", text: "The same thing as the Internet" },
          { id: "b", text: "Just one of many services running on the Internet" },
          { id: "c", text: "A hardware component of the Internet" },
          { id: "d", text: "A replacement for Email" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-27",
        question: "Which term is used to describe the Internet's structure regarding IP routing and hypertext links?",
        options: [
          { id: "a", text: "Scale-free networks" },
          { id: "b", text: "Linear networks" },
          { id: "c", text: "Rigid networks" },
          { id: "d", text: "Closed-loop networks" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "intro-28",
        question: "Who used a Teletype machine in 1940 to send instructions from Dartmouth College to New York?",
        options: [
          { id: "a", text: "Charles Babbage" },
          { id: "b", text: "George Stibitz" },
          { id: "c", text: "Alan Turing" },
          { id: "d", text: "John McCarthy" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-29",
        question: "The first two nodes of the ARPANET were interconnected in which year?",
        options: [
          { id: "a", text: "1965" },
          { id: "b", text: "1969" },
          { id: "c", text: "1972" },
          { id: "d", text: "1982" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-30",
        question: "When was the ARPANET decommissioned?",
        options: [
          { id: "a", text: "1985" },
          { id: "b", text: "1990" },
          { id: "c", text: "1995" },
          { id: "d", text: "2000" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-31",
        question: "Which of the following is listed as an early Internet Service Provider (ISP) in Nigeria?",
        options: [
          { id: "a", text: "Starlink" },
          { id: "b", text: "LinkServe Limited" },
          { id: "c", text: "Verizon" },
          { id: "d", text: "AT&T" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-32",
        question: "RFC 675, which used the term \"internet\" as shorthand for internetworking, was written by whom?",
        options: [
          { id: "a", text: "Roberts and Kleinrock" },
          { id: "b", text: "Vinton Cerf, Yogen Dalal, and Carl Sunshine" },
          { id: "c", text: "Bill Gates and Paul Allen" },
          { id: "d", text: "Tim Berners-Lee" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-33",
        question: "Which discipline integrates several fields of electrical engineering and computer science?",
        options: [
          { id: "a", text: "Information Technology" },
          { id: "b", text: "Software Engineering" },
          { id: "c", text: "Computer Engineering" },
          { id: "d", text: "Information Systems" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-34",
        question: "Herb Grosh postulated in the 1950s that the world would operate on dumb terminals powered by about how many large data centers?",
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "15" },
          { id: "c", text: "100" },
          { id: "d", text: "1000" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-35",
        question: "The \"Cloud\" symbol was used to represent the internet as early as:",
        options: [
          { id: "a", text: "1990" },
          { id: "b", text: "1994" },
          { id: "c", text: "1998" },
          { id: "d", text: "2005" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-36",
        question: "What was \"Eucalyptus\" (2008) known for?",
        options: [
          { id: "a", text: "The first web browser" },
          { id: "b", text: "The first open source software for deploying private and hybrid clouds" },
          { id: "c", text: "A famous computer virus" },
          { id: "d", text: "A new operating system by Apple" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-37",
        question: "\"Smarter Computing\" gave birth to Cloud Computing on which specific date?",
        options: [
          { id: "a", text: "January 1, 2000" },
          { id: "b", text: "March 1, 2011" },
          { id: "c", text: "December 25, 2010" },
          { id: "d", text: "July 4, 2012" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-38",
        question: "The hardware subsystem refers to:",
        options: [
          { id: "a", text: "The programs installed" },
          { id: "b", text: "The physical/electro-mechanical components" },
          { id: "c", text: "The data stored" },
          { id: "d", text: "The cloud connection" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-39",
        question: "Which software category includes anti-virus, backup software, and disk cleaners?",
        options: [
          { id: "a", text: "Application Software" },
          { id: "b", text: "Utility Software" },
          { id: "c", text: "Firmware" },
          { id: "d", text: "Business Software" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-40",
        question: "Which utility is designed to move file fragments to one location on a hard disk to increase efficiency?",
        options: [
          { id: "a", text: "Disk Cleaner" },
          { id: "b", text: "Disk Partition" },
          { id: "c", text: "Disk Defragmenter" },
          { id: "d", text: "Registry Cleaner" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-41",
        question: "What is the function of \"Revision Control\" utilities?",
        options: [
          { id: "a", text: "To scan for viruses" },
          { id: "b", text: "To clean the registry" },
          { id: "c", text: "To deal with situations where more than one user modifies the same file" },
          { id: "d", text: "To compress files" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "intro-42",
        question: "A device driver is best described as:",
        options: [
          { id: "a", text: "A physical tool to repair computers" },
          { id: "b", text: "A program that operates or controls a particular type of device attached to a computer" },
          { id: "c", text: "A type of computer virus" },
          { id: "d", text: "The central processing unit" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-43",
        question: "Which of the following is an example of a Command User Interface (CUI) operating system?",
        options: [
          { id: "a", text: "Windows 10" },
          { id: "b", text: "MS DOS" },
          { id: "c", text: "Android" },
          { id: "d", text: "macOS" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-44",
        question: "Registry cleaners are used to:",
        options: [
          { id: "a", text: "Clean the computer screen" },
          { id: "b", text: "Remove old registry keys that are no longer in use" },
          { id: "c", text: "Wipe the hard drive completely" },
          { id: "d", text: "Organize desktop icons" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-45",
        question: "Which utility outputs a shorter stream or smaller file when provided with a stream or file?",
        options: [
          { id: "a", text: "Data Compression utility" },
          { id: "b", text: "Disk Checker" },
          { id: "c", text: "Memory Tester" },
          { id: "d", text: "Clipboard Manager" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "intro-46",
        question: "\"Computer Organization\" refers to:",
        options: [
          { id: "a", text: "The logical execution of programs" },
          { id: "b", text: "The operational units and their interconnections" },
          { id: "c", text: "The specific programming language used" },
          { id: "d", text: "The software interface" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-47",
        question: "\"Computer Architecture\" refers to attributes visible to whom?",
        options: [
          { id: "a", text: "The manufacturer" },
          { id: "b", text: "The programmer" },
          { id: "c", text: "The electrician" },
          { id: "d", text: "The end-user" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-48",
        question: "A \"Bus\" in a computer system is described as:",
        options: [
          { id: "a", text: "A vehicle for transporting computers" },
          { id: "b", text: "A bunch of wires for connecting components and communicating signals" },
          { id: "c", text: "A type of storage device" },
          { id: "d", text: "A software protocol" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "intro-49",
        question: "Which of the following is mentioned as a type of interconnection in Chapter 2?",
        options: [
          { id: "a", text: "Single bus interconnection" },
          { id: "b", text: "Triple wire interconnection" },
          { id: "c", text: "Bluetooth interconnection" },
          { id: "d", text: "Fiber optic interconnection" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "intro-50",
        question: "If a laptop and a desktop have the same processor (e.g., Core i7), they share the same:",
        options: [
          { id: "a", text: "Organization" },
          { id: "b", text: "Architecture" },
          { id: "c", text: "Weight" },
          { id: "d", text: "Power consumption" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
    ]
  },
  {
    id: "chapter-4-problem-solving",
    title: "Chapter 4: Problem Solving, Data, & Speed",
    description: "Test your knowledge on algorithms, flowcharts, numerical methods, and software engineering history.",
    icon: "Cpu",
    color: "#ff9800",
    questions: [
      {
        id: "ch4-1",
        question: "What is the term for the series of instructions written to solve tasks on a computer system?",
        options: [
          { id: "a", text: "Computer Heuristic" },
          { id: "b", text: "Computer Architecture" },
          { id: "c", text: "Computer Program" },
          { id: "d", text: "Computer Syntax" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-2",
        question: "Which of the following is NOT a tool mentioned for developing computer programs?",
        options: [
          { id: "a", text: "Algorithm" },
          { id: "b", text: "Flowchart" },
          { id: "c", text: "Pseudo-code" },
          { id: "d", text: "Compiler" },
        ],
        correctAnswer: "d",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-3",
        question: "How many binary digits make up a \"Nibble\"?",
        options: [
          { id: "a", text: "2" },
          { id: "b", text: "4" },
          { id: "c", text: "8" },
          { id: "d", text: "16" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-4",
        question: "Which unit is used to measure the speed of computer systems used for scientific calculations in floating-point format?",
        options: [
          { id: "a", text: "Hertz (Hz)" },
          { id: "b", text: "MIPS" },
          { id: "c", text: "FLOPS" },
          { id: "d", text: "RPM" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-5",
        question: "What is the value of 1 PetaFLOP?",
        options: [
          { id: "a", text: "$10^{12}$ FLOPS" },
          { id: "b", text: "$10^{15}$ FLOPS" },
          { id: "c", text: "$10^{18}$ FLOPS" },
          { id: "d", text: "$10^{21}$ FLOPS" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-6",
        question: "According to the document, which programming language is described as having \"weakly typed\" data types?",
        options: [
          { id: "a", text: "PASCAL" },
          { id: "b", text: "C++" },
          { id: "c", text: "BASIC" },
          { id: "d", text: "FORTRAN" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-7",
        question: "What is the storage allocation size for a \"Long int\"?",
        options: [
          { id: "a", text: "1 byte" },
          { id: "b", text: "2 bytes" },
          { id: "c", text: "4 bytes" },
          { id: "d", text: "8 bytes" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-8",
        question: "What is the range of values for a signed char data type?",
        options: [
          { id: "a", text: "0 to 255" },
          { id: "b", text: "-128 to 127" },
          { id: "c", text: "-32768 to 32767" },
          { id: "d", text: "0 to 65535" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-9",
        question: "Which operator is used to return the remainder after carrying out Integer division?",
        options: [
          { id: "a", text: "/" },
          { id: "b", text: "#" },
          { id: "c", text: "%" },
          { id: "d", text: "&" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-10",
        question: "In the expression K = (i > j) ? i : j, what kind of operator is ? :?",
        options: [
          { id: "a", text: "Logical Operator" },
          { id: "b", text: "Relational Operator" },
          { id: "c", text: "Ternary Operator" },
          { id: "d", text: "Bitwise Operator" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-11",
        question: "If I = 5, what is the result of the calculation I = i++ * i++ as described in the text?",
        options: [
          { id: "a", text: "25" },
          { id: "b", text: "27" },
          { id: "c", text: "30" },
          { id: "d", text: "36" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-12",
        question: "According to the Operator Precedence Rules table, which operator has the highest order of evaluation?",
        options: [
          { id: "a", text: "+ - (Binary Additive)" },
          { id: "b", text: "* / % (Binary Multiplication)" },
          { id: "c", text: "() -> (Array subscript, function call)" },
          { id: "d", text: "&& (Logical AN" },
          { id: "d", text: "" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-13",
        question: "At which stage of the Program Development Cycle is the problem defined and a deep understanding of input/output relationships established?",
        options: [
          { id: "a", text: "Design" },
          { id: "b", text: "Coding" },
          { id: "c", text: "Analysis" },
          { id: "d", text: "Testing" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-14",
        question: "What is the process of finding errors in a program called?",
        options: [
          { id: "a", text: "Debugging" },
          { id: "b", text: "Testing" },
          { id: "c", text: "Compiling" },
          { id: "d", text: "Documenting" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-15",
        question: "Which type of documentation consists of annotations and comments within the program?",
        options: [
          { id: "a", text: "External documentation" },
          { id: "b", text: "User documentation" },
          { id: "c", text: "Internal documentation" },
          { id: "d", text: "System documentation" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-16",
        question: "How does the text differentiate an Algorithm from Heuristics?",
        options: [
          { id: "a", text: "Algorithms are individual dependent; Heuristics are not." },
          { id: "b", text: "Heuristics guarantee a solution; Algorithms do not." },
          { id: "c", text: "Algorithms allow anyone to solve the problem the same way; Heuristics depend on experience and may fail." },
          { id: "d", text: "Heuristics are used for computers; Algorithms are for humans." },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-17",
        question: "In a flowchart, which geometric symbol represents a \"Decision\"?",
        options: [
          { id: "a", text: "Oval" },
          { id: "b", text: "Rectangle" },
          { id: "c", text: "Diamond" },
          { id: "d", text: "Parallelogram" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-18",
        question: "Which flowchart symbol is depicted as a rectangle with a wavy base?",
        options: [
          { id: "a", text: "Data storage" },
          { id: "b", text: "Document" },
          { id: "c", text: "Manual Input" },
          { id: "d", text: "Display" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-19",
        question: "What does a parallelogram represent in a flowchart?",
        options: [
          { id: "a", text: "Processing" },
          { id: "b", text: "Terminator (Start/End)" },
          { id: "c", text: "Input/Output" },
          { id: "d", text: "Connector" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-20",
        question: "Euclid’s algorithm is used to determine which of the following?",
        options: [
          { id: "a", text: "The factorial of a number" },
          { id: "b", text: "The Fibonacci series" },
          { id: "c", text: "The Highest Common Factor (HCF) of two numbers" },
          { id: "d", text: "The roots of a quadratic equation" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-21",
        question: "A number is said to be \"perfect\" if:",
        options: [
          { id: "a", text: "It is divisible by 2." },
          { id: "b", text: "The sum of its factors (including 1) equals the number." },
          { id: "c", text: "It is a prime number." },
          { id: "d", text: "It is an odd number." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-22",
        question: "In the Fibonacci series algorithm provided, what is the recurrence relation for $F_n$?",
        options: [
          { id: "a", text: "$F_n = F_{n-1} * F_{n-2}$" },
          { id: "b", text: "$F_n = F_{n-1} + F_{n-2}$" },
          { id: "c", text: "$F_n = 2F_{n-1}$" },
          { id: "d", text: "$F_n = F_{n-1} - F_{n-2}$" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-23",
        question: "To obtain the transpose of a matrix, what operation is performed?",
        options: [
          { id: "a", text: "Inverting the sign of all elements." },
          { id: "b", text: "Multiplying the diagonal elements by -1." },
          { id: "c", text: "Interchanging the rows and columns." },
          { id: "d", text: "Sorting the elements in ascending order." },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-24",
        question: "In the \"Bubble Sort\" technique, how many passes are required to sort $n$ items?",
        options: [
          { id: "a", text: "$n$" },
          { id: "b", text: "$n + 1$" },
          { id: "c", text: "$n - 1$" },
          { id: "d", text: "$n / 2$" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-25",
        question: "What is the formula for the number of comparisons (probes) in a Bubble Sort for $n$ items?",
        options: [
          { id: "a", text: "$n^2$" },
          { id: "b", text: "$n(n+1)/2$" },
          { id: "c", text: "$n(n-1)/2$" },
          { id: "d", text: "$2n$" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-26",
        question: "Numerical methods are often employed when:",
        options: [
          { id: "a", text: "The exact analytic solution is unknown or does not exist." },
          { id: "b", text: "The computer is too slow for exact methods." },
          { id: "c", text: "The problem involves simple integer arithmetic." },
          { id: "d", text: "An exact solution is required immediately." },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-27",
        question: "Which rule for numerical integration states that the integral is approximately $\\frac{h}{2} [F(x_0) + F(x_n) + 2 \\times (\\text{sum of all other terms})]$?",
        options: [
          { id: "a", text: "Simpson’s Rule" },
          { id: "b", text: "Trapezoidal Rule" },
          { id: "c", text: "Newton's Rule" },
          { id: "d", text: "Gaussian Rule" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-28",
        question: "What is a specific requirement for the number of strips/intervals ($n$) when using Simpson’s Method (Rule)?",
        options: [
          { id: "a", text: "$n$ must be an odd number." },
          { id: "b", text: "$n$ must be an even number." },
          { id: "c", text: "$n$ must be a prime number." },
          { id: "d", text: "$n$ must be a multiple of 3." },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-29",
        question: "The Simpson's method formula involves multiplying the sum of odd ordinates by which factor?",
        options: [
          { id: "a", text: "2" },
          { id: "b", text: "3" },
          { id: "c", text: "4" },
          { id: "d", text: "6" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-30",
        question: "In Numerical Differentiation, utilizing the Taylor series expansion, the first derivative $y^1(x_0)$ is approximated by:",
        options: [
          { id: "a", text: "$(y(x_0+h) + y(x_0)) / h$" },
          { id: "b", text: "$(y(x_0+h) - y(x_0)) / h$" },
          { id: "c", text: "$h(y(x_0+h) - y(x_0))$" },
          { id: "d", text: "$(y(x_0) - y(x_0-h)) / 2$" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-31",
        question: "When truncating an infinite series (like Taylor series for sin(x)), one common technique to stop the iteration is when:",
        options: [
          { id: "a", text: "The value of the nth term is less than the required accuracy." },
          { id: "b", text: "The value of the nth term is zero." },
          { id: "c", text: "The number of terms reaches 100." },
          { id: "d", text: "The computer runs out of memory." },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-32",
        question: "The Newton-Raphson method is used to find:",
        options: [
          { id: "a", text: "The integral of a function." },
          { id: "b", text: "The derivative of a function." },
          { id: "c", text: "The root of the equation $F(x) = 0$." },
          { id: "d", text: "The transpose of a matrix." },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-33",
        question: "What is the iterative formula for the Newton-Raphson method?",
        options: [
          { id: "a", text: "$X_{n+1} = X_n - F(X_n) / F^1(X_n)$" },
          { id: "b", text: "$X_{n+1} = X_n + F(X_n) / F^1(X_n)$" },
          { id: "c", text: "$X_{n+1} = F(X_n) - X_n$" },
          { id: "d", text: "$X_{n+1} = X_n * F^1(X_n)$" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-34",
        question: "Which method is suggested for solving simultaneous linear equations with three or more unknowns?",
        options: [
          { id: "a", text: "Substitution method" },
          { id: "b", text: "Graphical method" },
          { id: "c", text: "Gaussian elimination method" },
          { id: "d", text: "Bubble sort method" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-35",
        question: "Where did the first primitive form of software engineering take place in 1944?",
        options: [
          { id: "a", text: "MIT, USA" },
          { id: "b", text: "Bletchley Park, England" },
          { id: "c", text: "Silicon Valley, USA" },
          { id: "d", text: "Berlin, Germany" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-36",
        question: "What was the name of the first programmable computer developed to decrypt Axis power ciphers?",
        options: [
          { id: "a", text: "ENIAC" },
          { id: "b", text: "The Analytical Engine" },
          { id: "c", text: "The Colossus" },
          { id: "d", text: "UNIVAC" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-37",
        question: "Which early programming language was used primarily by the scientific and engineering communities?",
        options: [
          { id: "a", text: "COBOL" },
          { id: "b", text: "BASIC" },
          { id: "c", text: "FORTRAN" },
          { id: "d", text: "PASCAL" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-38",
        question: "What does COBOL stand for?",
        options: [
          { id: "a", text: "Computer Oriented Business Operating Language" },
          { id: "b", text: "Common Business Oriented Language" },
          { id: "c", text: "Commercial Binary Operation Language" },
          { id: "d", text: "Code Of Business Organization Logic" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-39",
        question: "In the early days of programming, efficiency was prioritized due to limitations in:",
        options: [
          { id: "a", text: "Electricity availability" },
          { id: "b", text: "Central processor speed and core memory" },
          { id: "c", text: "Monitor resolution" },
          { id: "d", text: "Keyboard responsiveness" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-40",
        question: "Which language became central to the development of programming for microprocessors?",
        options: [
          { id: "a", text: "ALGOL" },
          { id: "b", text: "FORTRAN" },
          { id: "c", text: "BASIC" },
          { id: "d", text: "Java" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-41",
        question: "A bitwise operator that shifts bits to the left is represented by:",
        options: [
          { id: "a", text: ">>" },
          { id: "b", text: "<<" },
          { id: "c", text: "~~" },
          { id: "d", text: "||" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-42",
        question: "What is the result of a modulo operation A % B?",
        options: [
          { id: "a", text: "The quotient of A divided by B" },
          { id: "b", text: "The product of A and B" },
          { id: "c", text: "The remainder of A divided by B" },
          { id: "d", text: "The sum of A and B" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-43",
        question: "In the context of operator precedence, which direction is the assignment operator (=) evaluated?",
        options: [
          { id: "a", text: "Left to right" },
          { id: "b", text: "Right to left" },
          { id: "c", text: "Randomly" },
          { id: "d", text: "Center outwards" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-44",
        question: "Which of the following is considered a Low Level programming language?",
        options: [
          { id: "a", text: "Assembly Language" },
          { id: "b", text: "C++" },
          { id: "c", text: "BASIC" },
          { id: "d", text: "PASCAL" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-45",
        question: "What is the correct pseudo-code syntax used in the text to increment a variable K?",
        options: [
          { id: "a", text: "K++" },
          { id: "b", text: "K = K + 1" },
          { id: "c", text: "Inc(K)" },
          { id: "d", text: "K += 1" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-46",
        question: "For the quadratic equation $ax^2 + bx + c = 0$, what condition indicates that the roots are imaginary?",
        options: [
          { id: "a", text: "$D = 0$" },
          { id: "b", text: "$D > 0$" },
          { id: "c", text: "$D < 0$ (where $D = b^2 - 4ac$)" },
          { id: "d", text: "$a = 0$" },
        ],
        correctAnswer: "c",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-47",
        question: "Which symbol represents a \"Connector\" in a flowchart?",
        options: [
          { id: "a", text: "Small Circle" },
          { id: "b", text: "Triangle" },
          { id: "c", text: "Cylinder" },
          { id: "d", text: "Diamond" },
        ],
        correctAnswer: "a",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-48",
        question: "In the context of floating-point operations, what does \"1 flops\" (singular) correspond to?",
        options: [
          { id: "a", text: "One error per second" },
          { id: "b", text: "$1 \\text{ second}^{-1}$" },
          { id: "c", text: "One gigabyte of data" },
          { id: "d", text: "One logic gate" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-49",
        question: "What is the typical value range used for epsilon (accuracy) when terminating sine series iterations?",
        options: [
          { id: "a", text: "$10^{-1}$ to $10^{-2}$" },
          { id: "b", text: "$10^{-6}$ to $10^{-9}$" },
          { id: "c", text: "$10^3$ to $10^6$" },
          { id: "d", text: "$0.1$ to $0.5$" },
        ],
        correctAnswer: "b",
        explanation: "No explanation provided."
      },
      {
        id: "ch4-50",
        question: "The variable name Si,j in the student score example represents:",
        options: [
          { id: "a", text: "A single dimensional array" },
          { id: "b", text: "A two dimensional variable (Student i, Score j)" },
          { id: "c", text: "A function call" },
          { id: "d", text: "A constant value" },
        ],
        correctAnswer: "b",
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
