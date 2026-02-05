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
  }
];

export const getTopicById = (id: string): Topic | undefined => {
  return quizTopics.find((topic) => topic.id === id);
};

export const getAllTopics = (): Topic[] => {
  return quizTopics;
};
