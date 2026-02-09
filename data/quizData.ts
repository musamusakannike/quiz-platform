import { Topic } from "@/types/quiz";

export const quizTopics: Topic[] = [
  {
    id: "concept-of-entrepreneurship-chapter-1",
    title: "Concept of Entrepreneurship",
    description:
      "Test your knowledge on the definitions, characteristics, and roles of entrepreneurs based on Chapter 1.",
    icon: "Lightbulb",
    color: "#4caf50",
    questions: [
      {
        id: "ent-1",
        question:
          "According to the text, what has transformed the world into a 'global village'?",
        options: [
          { id: "a", text: "Traditional indigenous industries" },
          {
            id: "b",
            text: "Swift developments in technology and globalization",
          },
          {
            id: "c",
            text: "The relocation of resources away from existing users",
          },
          { id: "d", text: "The stabilization of national economies" },
        ],
        correctAnswer: "b",
        explanation:
          "The text states that with swift developments in technology and the forces of globalization, the world has become a global village[cite: 14].",
      },
      {
        id: "ent-2",
        question: "How does Hart (2018) primarily define entrepreneurship?",
        options: [
          { id: "a", text: "As a way of thinking and reasoning" },
          {
            id: "b",
            text: "As self-employment and the creation of new organizations",
          },
          {
            id: "c",
            text: "As the utilization of one productive factor by another",
          },
          { id: "d", text: "As the revitalization of mature organizations" },
        ],
        correctAnswer: "b",
        explanation:
          "Hart (2018) defines entrepreneurship as self-employment and the creation of new organizations[cite: 26].",
      },
      {
        id: "ent-3",
        question:
          "Which author defines entrepreneurship as being 'opportunity obsessed' and 'leadership balanced'?",
        options: [
          { id: "a", text: "Hart (2018)" },
          { id: "b", text: "Onuoha (2017)" },
          { id: "c", text: "Jeffry (2016)" },
          { id: "d", text: "Cole (2016)" },
        ],
        correctAnswer: "c",
        explanation:
          "Jeffry (2016) defines entrepreneurship as a way of thinking, reasoning, and acting that is opportunity obsessed and leadership balanced[cite: 33].",
      },
      {
        id: "ent-4",
        question:
          "According to Jeffry (2016), entrepreneurship creates value for whom?",
        options: [
          { id: "a", text: "Only the business owners" },
          { id: "b", text: "Only the financial investors" },
          { id: "c", text: "All participants and stakeholders" },
          { id: "d", text: "Government agencies only" },
        ],
        correctAnswer: "c",
        explanation:
          "Jeffry explains that entrepreneurship results in the creation and renewal of value for all participants and stakeholders[cite: 34].",
      },
      {
        id: "ent-5",
        question:
          "What is described as being 'at the heart' of the entrepreneurial process?",
        options: [
          { id: "a", text: "Managing human resources" },
          { id: "b", text: "Creating and recognizing opportunities" },
          { id: "c", text: "Avoiding all financial risks" },
          { id: "d", text: "Following traditional employment models" },
        ],
        correctAnswer: "b",
        explanation:
          "The text identifies the creation and recognition of opportunities as being at the heart of the process[cite: 35].",
      },
      {
        id: "ent-6",
        question:
          "How does Cole (2016) define entrepreneurship in its simplest terms?",
        options: [
          { id: "a", text: "The training and acquisition of skills" },
          { id: "b", text: "The pursuit of fame and growth" },
          {
            id: "c",
            text: "The utilization of productive factors to create economic goods",
          },
          { id: "d", text: "The elimination of market competition" },
        ],
        correctAnswer: "c",
        explanation:
          "Cole (2016) defines entrepreneurship as the utilization by one productive factor of other factors for creating economic goods[cite: 37].",
      },
      {
        id: "ent-7",
        question:
          "Entrepreneurship is described as a 'dynamic process' because it involves:",
        options: [
          { id: "a", text: "Maintaining the status quo" },
          { id: "b", text: "Bringing about new combinations and products" },
          { id: "c", text: "Reducing the living standards of people" },
          { id: "d", text: "Avoiding the use of national resources" },
        ],
        correctAnswer: "b",
        explanation:
          "It is a dynamic process manifested through endeavors to bring about new combinations and products[cite: 41].",
      },
      {
        id: "ent-8",
        question:
          "According to the text, what is the 'essence' of entrepreneurship?",
        options: [
          { id: "a", text: "Following established market rules" },
          {
            id: "b",
            text: "The perception and exploitation of new opportunities",
          },
          { id: "c", text: "Working alone without a team" },
          { id: "d", text: "Minimizing the use of technology" },
        ],
        correctAnswer: "b",
        explanation:
          "The essence of entrepreneurship lies in the perception and exploitation of new opportunities[cite: 48].",
      },
      {
        id: "ent-9",
        question:
          "Which scholar equated entrepreneurship specifically with the concept of 'innovation'?",
        options: [
          { id: "a", text: "Cantillon" },
          { id: "b", text: "Joseph Schumpeter" },
          { id: "c", text: "Gartner" },
          { id: "d", text: "Penrose" },
        ],
        correctAnswer: "b",
        explanation:
          "Joseph Schumpeter equated entrepreneurship with the concept of innovation in a business context[cite: 55].",
      },
      {
        id: "ent-10",
        question: "Gartner (2012) conceives entrepreneurship specifically as:",
        options: [
          { id: "a", text: "The evaluation of business opportunities" },
          { id: "b", text: "The creation of new organizations" },
          { id: "c", text: "The pursuit of profit-making only" },
          { id: "d", text: "The redistribution of wealth" },
        ],
        correctAnswer: "b",
        explanation:
          "Gartner (2012) conceives entrepreneurship as the creation of new organizations[cite: 58].",
      },
      {
        id: "ent-11",
        question:
          "An entrepreneur is commonly seen as a source of all the following EXCEPT:",
        options: [
          { id: "a", text: "New ideas" },
          { id: "b", text: "Goods and services" },
          { id: "c", text: "Business procedures" },
          { id: "d", text: "Guaranteed market stability" },
        ],
        correctAnswer: "d",
        explanation:
          "Entrepreneurs are innovators and sources of new ideas, but the text notes they bear risks in dynamic and uncertain environments[cite: 69, 141].",
      },
      {
        id: "ent-12",
        question:
          "What are the consequences of entrepreneurial failure on the economy?",
        options: [
          { id: "a", text: "Increased global competitiveness" },
          { id: "b", text: "Job loss and resource wastage" },
          { id: "c", text: "Improved living standards" },
          { id: "d", text: "Rapid creation of wealth" },
        ],
        correctAnswer: "b",
        explanation:
          "Failing entrepreneurs have serious consequences in terms of job loss for employees and resource wastage[cite: 72].",
      },
      {
        id: "ent-13",
        question:
          "According to Oni (2019), an entrepreneur is an innovator who:",
        options: [
          { id: "a", text: "Reorganizes an industry" },
          { id: "b", text: "Only follows existing techniques" },
          { id: "c", text: "Avoids all workplace technology" },
          { id: "d", text: "Focuses solely on personal rent" },
        ],
        correctAnswer: "a",
        explanation:
          "Oni (2019) defines the entrepreneur as an innovator who implements change through combinations such as reorganization of an industry[cite: 73].",
      },
      {
        id: "ent-14",
        question: "How does Cantillon (2018) conceptualize the entrepreneur?",
        options: [
          {
            id: "a",
            text: "As an agent who buys means of production to combine them into a product",
          },
          { id: "b", text: "As a master of his or her own soul" },
          { id: "c", text: "As a person who avoids the cost of input factors" },
          { id: "d", text: "As a government representative" },
        ],
        correctAnswer: "a",
        explanation:
          "Cantillon conceptualizes the entrepreneur as the agent who buys means of production to combine them into a new product[cite: 75].",
      },
      {
        id: "ent-15",
        question:
          "Mazi (2019) states that an entrepreneur must have the ability to mobilize:",
        options: [
          { id: "a", text: "Traditional employ" },
          { id: "b", text: "Resources to meet market opportunities" },
          { id: "c", text: "Only internal locus of control" },
          { id: "d", text: "Established production functions" },
        ],
        correctAnswer: "b",
        explanation:
          "Mazi (2019) defines the entrepreneur as one who has the ability to mobilize resources to meet market opportunities[cite: 83].",
      },
      {
        id: "ent-16",
        question: "Pinson (2010) visualizes the entrepreneur as an 'educated':",
        options: [
          { id: "a", text: "Risk taker" },
          { id: "b", text: "Resource allocator" },
          { id: "c", text: "Figure head" },
          { id: "d", text: "Arbitrator" },
        ],
        correctAnswer: "a",
        explanation:
          "Pinson visualizes the entrepreneur as an 'educated' risk taker[cite: 88].",
      },
      {
        id: "ent-17",
        question:
          "Which of the following is true regarding the size of entrepreneurial businesses?",
        options: [
          { id: "a", text: "They must always remain small" },
          { id: "b", text: "They can be both small and big business owners" },
          { id: "c", text: "They only start as large empires" },
          { id: "d", text: "They never involve high risks" },
        ],
        correctAnswer: "b",
        explanation:
          "The text notes that while most start small, entrepreneurs can be big business owners as well[cite: 93].",
      },
      {
        id: "ent-18",
        question:
          "What is considered the 'strategic tool' of the entrepreneur to gain an advantage?",
        options: [
          { id: "a", text: "Prudence" },
          { id: "b", text: "Innovation" },
          { id: "c", text: "Liaison roles" },
          { id: "d", text: "Traditional technology" },
        ],
        correctAnswer: "b",
        explanation:
          "Innovation is considered to be the strategic tool of the entrepreneur to gain advantage over competitors[cite: 95, 96].",
      },
      {
        id: "ent-19",
        question:
          "Rockstar (2019) recognizes entrepreneurship as which type of activity?",
        options: [
          { id: "a", text: "Stagnant activity" },
          { id: "b", text: "Creative activity" },
          { id: "c", text: "Passive activity" },
          { id: "d", text: "Random activity" },
        ],
        correctAnswer: "b",
        explanation:
          "Rockstar recognizes a characteristic of entrepreneurship as Creative Activity[cite: 101].",
      },
      {
        id: "ent-20",
        question: "Why is entrepreneurship considered a 'Purposeful Activity'?",
        options: [
          { id: "a", text: "It is done by accident" },
          {
            id: "b",
            text: "It is embarked upon for a specific purpose (profit, humanitarian, etc.)",
          },
          { id: "c", text: "It avoids making critical decisions" },
          { id: "d", text: "It relies solely on luck" },
        ],
        correctAnswer: "b",
        explanation:
          "It is a purposeful activity because it is embarked upon for a specific purpose like profit or humanitarian goals[cite: 106, 107].",
      },
      {
        id: "ent-21",
        question:
          "Di-Masi (2017) regards which of these as a major characteristic of entrepreneurs?",
        options: [
          { id: "a", text: "Internal locus of control" },
          { id: "b", text: "Self-confidence and being multi-skilled" },
          { id: "c", text: "Team work and planning" },
          { id: "d", text: "Prudence and endurance" },
        ],
        correctAnswer: "b",
        explanation:
          "Di-Masi (2017) regards major characteristics as self-confidence and being multi-skilled[cite: 111].",
      },
      {
        id: "ent-22",
        question:
          "Which author identifies 'need for achievement' and 'internal locus of control' as main characteristics?",
        options: [
          { id: "a", text: "Rockstar" },
          { id: "b", text: "Di-Masi" },
          { id: "c", text: "Driessen (2018)" },
          { id: "d", text: "Hadzima" },
        ],
        correctAnswer: "c",
        explanation:
          "Driessen (2018) identifies the main characteristics as need for achievement and internal locus of control[cite: 114, 115].",
      },
      {
        id: "ent-23",
        question:
          "According to Driessen (2018), which is a 'secondary' characteristic of entrepreneurs?",
        options: [
          { id: "a", text: "Risk-taking propensity" },
          { id: "b", text: "Tolerance of ambiguity" },
          { id: "c", text: "Need for achievement" },
          { id: "d", text: "Internal locus of control" },
        ],
        correctAnswer: "b",
        explanation:
          "Driessen states secondary characteristics include tolerance of ambiguity, need for power, and autonomy[cite: 115].",
      },
      {
        id: "ent-24",
        question: "Why must an entrepreneur have 'Risk Bearing Ability'?",
        options: [
          { id: "a", text: "To ensure they never fail" },
          {
            id: "b",
            text: "Because new ventures are created in uncertain environments",
          },
          { id: "c", text: "To avoid paying wages" },
          { id: "d", text: "To prevent the relocation of resources" },
        ],
        correctAnswer: "b",
        explanation:
          "Risk bearing ability is needed because new ventures are created in an uncertain and risky environment[cite: 118, 119].",
      },
      {
        id: "ent-25",
        question:
          "The term 'jack of all trade and master of all' refers to which characteristic?",
        options: [
          { id: "a", text: "Versatility" },
          { id: "b", text: "Multi-skilled" },
          { id: "c", text: "Prudence" },
          { id: "d", text: "Calmness" },
        ],
        correctAnswer: "b",
        explanation:
          "The text states an entrepreneur has to be a jack of all trade and master of all, possessing multi-skilled traits[cite: 131, 111].",
      },
      {
        id: "ent-26",
        question: "Being 'Results-Oriented' means the entrepreneur:",
        options: [
          { id: "a", text: "Only cares about the process" },
          { id: "b", text: "Knows how to get results under any circumstances" },
          { id: "c", text: "Avoids setting goals" },
          { id: "d", text: "Works only in isolation" },
        ],
        correctAnswer: "b",
        explanation:
          "The results-oriented entrepreneur is one who knows how to get results under any circumstances[cite: 139].",
      },
      {
        id: "ent-27",
        question: "Starting a new business is compared to what in the text?",
        options: [
          { id: "a", text: "Building a house" },
          { id: "b", text: "Bringing a child into the world and nurturing it" },
          { id: "c", text: "Planting a tree" },
          { id: "d", text: "Driving a car" },
        ],
        correctAnswer: "b",
        explanation:
          "The text compares creating a business to bringing a child into the world and nurturing it to adulthood[cite: 145].",
      },
      {
        id: "ent-28",
        question: "Why is 'Calmness' important for an entrepreneur?",
        options: [
          { id: "a", text: "To ignore the competition" },
          {
            id: "b",
            text: "To remain collected during stress, emergencies, or crises",
          },
          { id: "c", text: "To avoid making any decisions" },
          { id: "d", text: "To ensure the business stays small" },
        ],
        correctAnswer: "b",
        explanation:
          "Entrepreneurs need to remain calm even when exposed to stress, emergency, or crisis situations[cite: 147].",
      },
      {
        id: "ent-29",
        question:
          "What is the consequence of failing to plan, according to the text?",
        options: [
          { id: "a", text: "Planning to succeed" },
          { id: "b", text: "Planning to fail" },
          { id: "c", text: "Achieving profit objectives" },
          { id: "d", text: "Reallocating resources" },
        ],
        correctAnswer: "b",
        explanation:
          "The text states that 'he/she who fails to plan, plans to fail!'[cite: 161].",
      },
      {
        id: "ent-30",
        question: " 'Prudence' in entrepreneurship specifically relates to:",
        options: [
          { id: "a", text: "Managing human resources" },
          { id: "b", text: "Financial management" },
          { id: "c", text: "Marketing skills" },
          { id: "d", text: "Technical expertise" },
        ],
        correctAnswer: "b",
        explanation:
          "The entrepreneur must be versatile in financial management (prudence) because finance is the life-wire of the business[cite: 162].",
      },
      {
        id: "ent-31",
        question:
          "Who are considered the entrepreneur's 'most important team members'?",
        options: [
          { id: "a", text: "Employees" },
          { id: "b", text: "Investors" },
          { id: "c", text: "Customers" },
          { id: "d", text: "Competitors" },
        ],
        correctAnswer: "c",
        explanation:
          "The text explicitly states that 'the entrepreneur's most important team members are the customers'[cite: 169].",
      },
      {
        id: "ent-32",
        question:
          "The roles of entrepreneurs are compared to the basic managerial roles identified by:",
        options: [
          { id: "a", text: "Henry Mintzberg" },
          { id: "b", text: "Joseph Schumpeter" },
          { id: "c", text: "Peter Drucker" },
          { id: "d", text: "John Hart" },
        ],
        correctAnswer: "a",
        explanation:
          "These roles are identified as the same basic managerial roles by Henry Mintzberg (1973)[cite: 172].",
      },
      {
        id: "ent-33",
        question: "In the 'Figure Head Role,' the entrepreneur performs:",
        options: [
          { id: "a", text: "Technical repairs" },
          { id: "b", text: "Ceremonial duties" },
          { id: "c", text: "Financial audits" },
          { id: "d", text: "Employee hiring" },
        ],
        correctAnswer: "b",
        explanation:
          "As a figure head, the entrepreneur has to perform ceremonial duties[cite: 174, 175].",
      },
      {
        id: "ent-34",
        question:
          "Which role involves hiring, firing, training, and motivating people?",
        options: [
          { id: "a", text: "Liaison Role" },
          { id: "b", text: "Leader Role" },
          { id: "c", text: "Monitoring Role" },
          { id: "d", text: "Spokesman Role" },
        ],
        correctAnswer: "b",
        explanation:
          "In the leader role, the entrepreneur leads people by hiring, firing, training, and motivating them[cite: 176, 177].",
      },
      {
        id: "ent-35",
        question:
          "The 'Liaison Role' involves acting as a link between the business and:",
        options: [
          { id: "a", text: "The internal staff only" },
          { id: "b", text: "Parties outside the business" },
          { id: "c", text: "The entrepreneur's family" },
          { id: "d", text: "The equipment" },
        ],
        correctAnswer: "b",
        explanation:
          "The Liaison Role involves acting as the link between the business and parties outside the business[cite: 178].",
      },
      {
        id: "ent-36",
        question:
          "Which role requires the entrepreneur to transmit information inside and outside the business?",
        options: [
          { id: "a", text: "Information Disseminator Role" },
          { id: "b", text: "Resource Allocator Role" },
          { id: "c", text: "Figure Head Role" },
          { id: "d", text: "Disturbance Handler" },
        ],
        correctAnswer: "a",
        explanation:
          "The information disseminator transmits information both within and outside the business[cite: 180].",
      },
      {
        id: "ent-37",
        question:
          "What is the primary function of the 'Disturbance Handler' role?",
        options: [
          { id: "a", text: "To create new products" },
          {
            id: "b",
            text: "To act as an arbitrator in conflict to maintain harmony",
          },
          { id: "c", text: "To allocate scarce resources" },
          { id: "d", text: "To monitor the external environment" },
        ],
        correctAnswer: "b",
        explanation:
          "The disturbance handler acts as an arbitrator in situations of conflict to maintain organizational harmony[cite: 185].",
      },
      {
        id: "ent-38",
        question: "The 'Resource Allocator' role involves deciding how to:",
        options: [
          { id: "a", text: "Hire new managers" },
          { id: "b", text: "Distribute scarce resources among competing ends" },
          { id: "c", text: "Update the technology" },
          { id: "d", text: "Market new products" },
        ],
        correctAnswer: "b",
        explanation:
          "The resource allocator decides how scarce resources are allocated among competing ends[cite: 186].",
      },
      {
        id: "ent-39",
        question:
          "The 'Negotiator Role' involves negotiating on behalf of the business with:",
        options: [
          { id: "a", text: "Only internal labor" },
          { id: "b", text: "Labor and other outside sources" },
          { id: "c", text: "Competitors only" },
          { id: "d", text: "Government regulators only" },
        ],
        correctAnswer: "b",
        explanation:
          "The negotiator role involves negotiating with other categories of labor and outside sources[cite: 190].",
      },
      {
        id: "ent-40",
        question:
          "What is a 'Social Role' of the entrepreneur mentioned in the text?",
        options: [
          { id: "a", text: "Mobilizing savings" },
          { id: "b", text: "Job or employment creation in the community" },
          { id: "c", text: "Utilizing local raw materials" },
          { id: "d", text: "Adapting imported technology" },
        ],
        correctAnswer: "b",
        explanation:
          "A social role identified is job or employment creation in the community[cite: 196].",
      },
      {
        id: "ent-41",
        question:
          "Engaging youths in active employment to checkmate social vices is a:",
        options: [
          { id: "a", text: "Technological role" },
          { id: "b", text: "Economic role" },
          { id: "c", text: "Social role" },
          { id: "d", text: "Managerial role" },
        ],
        correctAnswer: "c",
        explanation:
          "The social role is the engagement of youths in active employment to checkmate social vices[cite: 192].",
      },
      {
        id: "ent-42",
        question:
          "Developing a 'shock absorber' in the face of economic uncertainty is a/an:",
        options: [
          { id: "a", text: "Economic role" },
          { id: "b", text: "Social role" },
          { id: "c", text: "Technological role" },
          { id: "d", text: "Information role" },
        ],
        correctAnswer: "a",
        explanation:
          "The economic role is to develop a shock absorber in the face of uncertainty of the economy[cite: 193].",
      },
      {
        id: "ent-43",
        question:
          "Which of the following is an 'Economic Role' of the entrepreneur?",
        options: [
          { id: "a", text: "Adapting traditional technology" },
          { id: "b", text: "Stimulating indigenous entrepreneurship" },
          { id: "c", text: "Mobilizing savings necessary for the enterprise" },
          { id: "d", text: "Provision of social welfare" },
        ],
        correctAnswer: "c",
        explanation:
          "An economic role is mobilizing savings necessary for the enterprise[cite: 200].",
      },
      {
        id: "ent-44",
        question:
          "Which role involves adapting imported technology to the local environment?",
        options: [
          { id: "a", text: "Social Role" },
          { id: "b", text: "Technological Role" },
          { id: "c", text: "Economic Role" },
          { id: "d", text: "Negotiator Role" },
        ],
        correctAnswer: "b",
        explanation:
          "The technological role includes adapting imported technology to the local environment[cite: 206].",
      },
      {
        id: "ent-45",
        question: "What does 'Customer-Centrism' mean for an entrepreneur?",
        options: [
          { id: "a", text: "Focusing only on profit" },
          { id: "b", text: "Anticipating and satisfying unmet customer needs" },
          { id: "c", text: "Ignoring customer feedback" },
          { id: "d", text: "Selling products at the highest possible price" },
        ],
        correctAnswer: "b",
        explanation:
          "A successful entrepreneur must be able to anticipate customers' needs and satisfy them[cite: 164].",
      },
      {
        id: "ent-46",
        question: " 'Tolerance' is necessary for an entrepreneur because:",
        options: [
          { id: "a", text: "Everyone has the same personality" },
          {
            id: "b",
            text: "People vary in perceptions, motivations, and attitudes",
          },
          { id: "c", text: "It makes the entrepreneur look weak" },
          { id: "d", text: "It is required by law" },
        ],
        correctAnswer: "b",
        explanation:
          "The entrepreneur needs to be tolerant because people vary in terms of perceptions, personality, and attitudes[cite: 150, 151].",
      },
      {
        id: "ent-47",
        question: "Successful entrepreneurs take what kind of risks?",
        options: [
          { id: "a", text: "Unnecessary risks" },
          { id: "b", text: "Blind risks" },
          { id: "c", text: "Calculated risks" },
          { id: "d", text: "No risks at all" },
        ],
        correctAnswer: "c",
        explanation:
          "Successful entrepreneurs take risks in a very calculated fashion to shift the odds of success[cite: 36, 143].",
      },
      {
        id: "ent-48",
        question:
          "The 'take home points' state that entrepreneurs anticipate needs and:",
        options: [
          { id: "a", text: "Follow existing market trends" },
          { id: "b", text: "Bring new ideas to the market" },
          { id: "c", text: "Reduce the number of products" },
          { id: "d", text: "Rely on imported materials only" },
        ],
        correctAnswer: "b",
        explanation:
          "Take home points emphasize that entrepreneurs anticipate needs and bring new ideas to the market[cite: 214].",
      },
      {
        id: "ent-49",
        question: "Entrepreneurship is a vital source of change in:",
        options: [
          { id: "a", text: "Technology only" },
          { id: "b", text: "All facets of society" },
          { id: "c", text: "The Department of Marketing only" },
          { id: "d", text: "Global villages only" },
        ],
        correctAnswer: "b",
        explanation:
          "Entrepreneurship is described as a vital source of change in all facets of society[cite: 19].",
      },
      {
        id: "ent-50",
        question: "Historically, entrepreneurs have altered the direction of:",
        options: [
          { id: "a", text: "Only their own families" },
          { id: "b", text: "National economies, industries, and markets" },
          { id: "c", text: "Only small businesses" },
          { id: "d", text: "Local communities only" },
        ],
        correctAnswer: "b",
        explanation:
          "Entrepreneurs have historically altered the direction of national economies, industries, and markets[cite: 21].",
      },
    ],
  },
  {
    id: "nigerian-business-environment-chapter-2",
    title: "Nigerian Business Environment & SME Opportunities",
    description:
      "Test your understanding of internal and external business factors, the Nigerian market landscape, and African regional comparisons.",
    icon: "Briefcase",
    color: "#2196f3",
    questions: [
      {
        id: "be-1",
        question:
          "Factors within the control of a business enterprise are collectively referred to as the:",
        options: [
          { id: "a", text: "External environment" },
          { id: "b", text: "Macro environment" },
          { id: "c", text: "Internal business environment" },
          { id: "d", text: "International environment" },
        ],
        correctAnswer: "c",
        explanation:
          "Factors within the control of the enterprise are collectively called the internal business environment[cite: 237].",
      },
      {
        id: "be-2",
        question:
          "Which of these is considered a factor of the internal business environment?",
        options: [
          { id: "a", text: "Inflation rate" },
          { id: "b", text: "Management structure and style" },
          { id: "c", text: "Exchange rates" },
          { id: "d", text: "Political stability" },
        ],
        correctAnswer: "b",
        explanation:
          "Internal environment includes mission, value system, human resources, and management structure[cite: 258].",
      },
      {
        id: "be-3",
        question:
          "The external business environment is generally classified into which two categories?",
        options: [
          { id: "a", text: "Local and Global" },
          { id: "b", text: "Micro and Macro" },
          { id: "c", text: "Financial and Physical" },
          { id: "d", text: "Primary and Secondary" },
        ],
        correctAnswer: "b",
        explanation:
          "The external environment is generally classified into the micro environment and the macro environment[cite: 260].",
      },
      {
        id: "be-4",
        question: "Which agent is part of the 'micro' business environment?",
        options: [
          { id: "a", text: "The World Bank" },
          { id: "b", text: "Marketing intermediaries" },
          { id: "c", text: "The Legal system" },
          { id: "d", text: "Climatic conditions" },
        ],
        correctAnswer: "b",
        explanation:
          "Micro environment agents include suppliers, customers, competing firms, and marketing intermediaries[cite: 262].",
      },
      {
        id: "be-5",
        question:
          "Macro environment factors differ from micro factors because they:",
        options: [
          { id: "a", text: "Can be controlled by the firm" },
          { id: "b", text: "Affect only the production line" },
          { id: "c", text: "Affect the entire economy" },
          { id: "d", text: "Only involve internal staff" },
        ],
        correctAnswer: "c",
        explanation:
          "Macro environment consists of aggregate variables that affect the entire economy[cite: 263].",
      },
      {
        id: "be-6",
        question:
          "Per capita income is used as an indicator for which environment?",
        options: [
          { id: "a", text: "Natural" },
          { id: "b", text: "Technological" },
          { id: "c", text: "Economic" },
          { id: "d", text: "Political" },
        ],
        correctAnswer: "c",
        explanation:
          "Indicators such as per capita income and interest rates are used for the economic environment[cite: 267].",
      },
      {
        id: "be-7",
        question:
          "What does 'per capita income' measure in a business context?",
        options: [
          { id: "a", text: "Cost of borrowing" },
          { id: "b", text: "Market size or demand capacity" },
          { id: "c", text: "Quality of life" },
          { id: "d", text: "Technological progress" },
        ],
        correctAnswer: "b",
        explanation:
          "Per capita income is a measure for a country's market size or demand capacity[cite: 267].",
      },
      {
        id: "be-8",
        question: "Which factor belongs to the 'Legal' environment?",
        options: [
          { id: "a", text: "Inflation rate" },
          { id: "b", text: "Research and Development" },
          { id: "c", text: "Protection of property rights" },
          { id: "d", text: "Life expectancy" },
        ],
        correctAnswer: "c",
        explanation:
          "The legal environment includes protection of property rights, rule of law, and independence of judiciary[cite: 278].",
      },
      {
        id: "be-9",
        question: "Life expectancy and literacy rates are indicators of the:",
        options: [
          { id: "a", text: "International environment" },
          { id: "b", text: "Natural environment" },
          { id: "c", text: "Social environment" },
          { id: "d", text: "Technological environment" },
        ],
        correctAnswer: "c",
        explanation:
          "Social environment indicators include life expectancy, education, and literacy rates[cite: 279].",
      },
      {
        id: "be-10",
        question:
          "Which of these is a measure for the 'Technological' environment?",
        options: [
          { id: "a", text: "Exchange rates" },
          { id: "b", text: "Scientific progress and innovations" },
          { id: "c", text: "Foreign direct investment" },
          { id: "d", text: "Political stability" },
        ],
        correctAnswer: "b",
        explanation:
          "Technological environment indicators include innovations, inventions, and scientific progress[cite: 280].",
      },
      {
        id: "be-11",
        question: "The 'International' environment includes factors such as:",
        options: [
          { id: "a", text: "Weather and climatic conditions" },
          { id: "b", text: "Belief systems" },
          { id: "c", text: "Trade openness and exchange rates" },
          { id: "d", text: "Internal management style" },
        ],
        correctAnswer: "c",
        explanation:
          "The international environment consists of exchange rates, trade openness, and foreign reserves[cite: 281].",
      },
      {
        id: "be-12",
        question:
          "Which category includes ecological factors like weather and mineral resources?",
        options: [
          { id: "a", text: "Social" },
          { id: "b", text: "Technological" },
          { id: "c", text: "Natural" },
          { id: "d", text: "Micro" },
        ],
        correctAnswer: "c",
        explanation:
          "Natural environment includes geographical and ecological factors such as weather, minerals, and oil[cite: 282].",
      },
      {
        id: "be-13",
        question:
          "What is described as the 'life-wire' of a business in terms of infrastructure?",
        options: [
          { id: "a", text: "Marketing" },
          { id: "b", text: "Power supply" },
          { id: "c", text: "Social media" },
          { id: "d", text: "Trade unions" },
        ],
        correctAnswer: "b",
        explanation:
          "The text lists power supply as a significant infrastructural factor affecting business activities[cite: 283].",
      },
      {
        id: "be-14",
        question:
          "The Nigeria business environment represents the largest market in Africa in terms of:",
        options: [
          { id: "a", text: "Technological advancement" },
          { id: "b", text: "Population" },
          { id: "c", text: "Political stability" },
          { id: "d", text: "Infrastructure" },
        ],
        correctAnswer: "b",
        explanation:
          "Nigeria represents the largest market in Africa in terms of population[cite: 286].",
      },
      {
        id: "be-15",
        question:
          "Which demographic group makes up the majority of the Nigerian population?",
        options: [
          { id: "a", text: "The Elderly" },
          { id: "b", text: "Youths and the young" },
          { id: "c", text: "Foreign expatriates" },
          { id: "d", text: "Retired professionals" },
        ],
        correctAnswer: "b",
        explanation:
          "The demographic distribution shows that majority of people in Nigeria are youths and young[cite: 287].",
      },
      {
        id: "be-16",
        question:
          "What is identified as the 'major challenge' for businesses in Nigeria?",
        options: [
          { id: "a", text: "Lack of raw materials" },
          { id: "b", text: "Infrastructural inadequacy" },
          { id: "c", text: "Low population" },
          { id: "d", text: "Excessive rainfall" },
        ],
        correctAnswer: "b",
        explanation:
          "The first and major challenge business firms must deal with in Nigeria is infrastructural challenge[cite: 295].",
      },
      {
        id: "be-17",
        question:
          "Because of poor infrastructure, Nigerian firms often spend extra resources on:",
        options: [
          { id: "a", text: "Advertising" },
          { id: "b", text: "Providing their own power and water" },
          { id: "c", text: "Hiring foreign managers" },
          { id: "d", text: "Importing luxury goods" },
        ],
        correctAnswer: "b",
        explanation:
          "Firms require extra financial resources to provide their own infrastructure like power and water[cite: 297].",
      },
      {
        id: "be-18",
        question: "Insecurity in Nigeria poses a threat to:",
        options: [
          { id: "a", text: "Only physical buildings" },
          { id: "b", text: "Life and properties" },
          { id: "c", text: "Government officials only" },
          { id: "d", text: "International travelers only" },
        ],
        correctAnswer: "b",
        explanation:
          "Nigeria business environment offers security threats to both the life of workers/businessmen and properties[cite: 306].",
      },
      {
        id: "be-19",
        question:
          "How should entrepreneurs handle frequent changes in government policies?",
        options: [
          { id: "a", text: "By ignoring the policies" },
          { id: "b", text: "By closing the business" },
          { id: "c", text: "By swiftly adjusting strategies to align" },
          { id: "d", text: "By protesting against the government" },
        ],
        correctAnswer: "c",
        explanation:
          "The best strategy is to keep a keen eye on policies and swiftly adjust business strategies to align[cite: 312].",
      },
      {
        id: "be-20",
        question:
          "What are the two folds of challenges regarding investment funds in Nigeria?",
        options: [
          { id: "a", text: "No banks and no currency" },
          {
            id: "b",
            text: "Unwillingness to give credit and high borrowing costs",
          },
          { id: "c", text: "Excessive cash and low interest rates" },
          { id: "d", text: "High demand and low supply of coins" },
        ],
        correctAnswer: "b",
        explanation:
          "Challenges include unwillingness of banks to provide credit and the high cost of borrowing[cite: 315, 316].",
      },
      {
        id: "be-21",
        question: "Creative entrepreneurs surmount funding difficulties by:",
        options: [
          { id: "a", text: "Waiting for a government grant" },
          { id: "b", text: "Lamenting about bank Predicaments" },
          { id: "c", text: "Looking for creative ways to finance plans" },
          { id: "d", text: "Stopping all business activities" },
        ],
        correctAnswer: "c",
        explanation:
          "Hardcore entrepreneurs look for creative ways to finance their business plans and ideas[cite: 318].",
      },
      {
        id: "be-22",
        question:
          "The term 'Double Taxation' is associated with which challenge in Nigeria?",
        options: [
          { id: "a", text: "Insecurity" },
          { id: "b", text: "Lack of government support" },
          { id: "c", text: "Infrastructural inadequacy" },
          { id: "d", text: "Technological gap" },
        ],
        correctAnswer: "b",
        explanation:
          "Lack of government support surfaces as double taxation, corruption, and unnecessary levies[cite: 321].",
      },
      {
        id: "be-23",
        question:
          "Which country is described as having the most conducive economic environment among those compared?",
        options: [
          { id: "a", text: "Ghana" },
          { id: "b", text: "Nigeria" },
          { id: "c", text: "South Africa" },
          { id: "d", text: "Egypt" },
        ],
        correctAnswer: "c",
        explanation:
          "South Africa has the most conducive economic environment with the highest demand capacity[cite: 327].",
      },
      {
        id: "be-24",
        question:
          "Nigeria is ranked 1st among the selected African countries only in:",
        options: [
          { id: "a", text: "Interest rate" },
          { id: "b", text: "Literacy rate" },
          { id: "c", text: "Total population" },
          { id: "d", text: "Rule of law" },
        ],
        correctAnswer: "c",
        explanation:
          "In the entire 25 indicators, Nigeria is ranked first only in total population[cite: 414].",
      },
      {
        id: "be-25",
        question:
          "The 'polity2' value (ranging from -10 to 10) measures a country's:",
        options: [
          { id: "a", text: "Economic inflation" },
          { id: "b", text: "Openness of the political system" },
          { id: "c", text: "Population growth" },
          { id: "d", text: "Technological readiness" },
        ],
        correctAnswer: "b",
        explanation:
          "The polity2 value is a measure of the openness of the political system of a country[cite: 337].",
      },
      {
        id: "be-26",
        question:
          "Nigeria falls into which 'Polity' category according to the text?",
        options: [
          { id: "a", text: "Full Democracy" },
          { id: "b", text: "Autocracy" },
          { id: "c", text: "Open Anocracy" },
          { id: "d", text: "Closed Anocracy" },
        ],
        correctAnswer: "c",
        explanation:
          "Nigeria falls in the category of open anocracy in spite of the return to democratic governance[cite: 338].",
      },
      {
        id: "be-27",
        question:
          "Which country ranked 1st in 'Control of Corruption' and 'Political Stability'?",
        options: [
          { id: "a", text: "Nigeria" },
          { id: "b", text: "Ghana" },
          { id: "c", text: "Egypt" },
          { id: "d", text: "Kenya" },
        ],
        correctAnswer: "b",
        explanation:
          "Table 2 shows Ghana occupies the first position in control of corruption and political stability[cite: 424].",
      },
      {
        id: "be-28",
        question:
          "How did the 'Cost of starting a business' change in Nigeria between 2013 and 2020?",
        options: [
          { id: "a", text: "It increased by 10%" },
          { id: "b", text: "It remained the same" },
          { id: "c", text: "It reduced by about 5.5%" },
          { id: "d", text: "It was eliminated entirely" },
        ],
        correctAnswer: "c",
        explanation:
          "Cost of starting a business as percentage of income per capita reduced by about 5.5% point[cite: 431].",
      },
      {
        id: "be-29",
        question:
          "What happened to Nigeria's GDP per capita (demand capacity) between 2013 and 2020?",
        options: [
          { id: "a", text: "It doubled" },
          { id: "b", text: "It declined by about $908.41" },
          { id: "c", text: "It grew steadily" },
          { id: "d", text: "It reached the highest in Africa" },
        ],
        correctAnswer: "b",
        explanation:
          "The demand capacity measured by per capita income declined by about $908.41[cite: 434].",
      },
      {
        id: "be-30",
        question:
          "Inflation in Nigeria jumped from one digit in 2013 to ____ in 2020.",
        options: [
          { id: "a", text: "Deflation" },
          { id: "b", text: "Two digits (13.25)" },
          { id: "c", text: "Zero" },
          { id: "d", text: "Three digits" },
        ],
        correctAnswer: "b",
        explanation:
          "Inflation rate jumps from one digit (8.5) in 2013 to two digit (13.25) in 2020[cite: 437].",
      },
      {
        id: "be-31",
        question:
          "The time required to register property in Nigeria ___ between 2013 and 2020.",
        options: [
          { id: "a", text: "Decreased" },
          { id: "b", text: "Increased by over 22 days" },
          { id: "c", text: "Was reduced to one day" },
          { id: "d", text: "Stayed exactly the same" },
        ],
        correctAnswer: "b",
        explanation:
          "An entrepreneur needs over 22 addition days to register a property in 2020 compared to 2013[cite: 439].",
      },
      {
        id: "be-32",
        question:
          "The rise in 'Children population' presents an opportunity for products such as:",
        options: [
          { id: "a", text: "Automobiles" },
          { id: "b", text: "Toys, wears, and education materials" },
          { id: "c", text: "Retirement homes" },
          { id: "d", text: "Heavy machinery" },
        ],
        correctAnswer: "b",
        explanation:
          "Child boom demography presents opportunity for toys, wears, and education materials[cite: 451].",
      },
      {
        id: "be-33",
        question:
          "Which of these countries has the highest literacy rate among the five compared?",
        options: [
          { id: "a", text: "Nigeria" },
          { id: "b", text: "South Africa" },
          { id: "c", text: "Kenya" },
          { id: "d", text: "Ghana" },
        ],
        correctAnswer: "b",
        explanation:
          "According to Table 1, South Africa has a literacy rate of 93, the highest among the five[cite: 384].",
      },
      {
        id: "be-34",
        question:
          "Rule of Law, Government Effectiveness, and Control of Corruption are indicators from:",
        options: [
          { id: "a", text: "The IMF" },
          { id: "b", text: "World Bank Governance Indicators" },
          { id: "c", text: "The United Nations" },
          { id: "d", text: "Local Nigerian Banks" },
        ],
        correctAnswer: "b",
        explanation:
          "These indicators are the World Bank Governance Indicators[cite: 353].",
      },
      {
        id: "be-35",
        question:
          "What is the standard normal distribution range for World Bank Governance scores?",
        options: [
          { id: "a", text: "0 to 100" },
          { id: "b", text: "-2.5 to 2.5" },
          { id: "c", text: "1 to 10" },
          { id: "d", text: "-10 to 10" },
        ],
        correctAnswer: "b",
        explanation:
          "Scores range from a minimum of -2.5 to maximum 2.5[cite: 353].",
      },
      {
        id: "be-36",
        question:
          "Nigeria's negative scores in all six governance indicators imply:",
        options: [
          { id: "a", text: "Excellent governance" },
          { id: "b", text: "Poor quality of governance" },
          { id: "c", text: "Economic boom" },
          { id: "d", text: "High transparency" },
        ],
        correctAnswer: "b",
        explanation:
          "Nigeria's scores in all six are negative, implying that the quality of governance is poor[cite: 354, 355].",
      },
      {
        id: "be-37",
        question:
          "Constraint on Executive power measures checks and balances between:",
        options: [
          { id: "a", text: "Customers and suppliers" },
          { id: "b", text: "Various parts of the decision-making process" },
          { id: "c", text: "Import and export rates" },
          { id: "d", text: "Banks and borrowers" },
        ],
        correctAnswer: "b",
        explanation:
          "This is concerned with the checks and balances between various parts of the decision-making process[cite: 341].",
      },
      {
        id: "be-38",
        question:
          "Which country had the highest exchange rate to 1 US Dollar in 2013?",
        options: [
          { id: "a", text: "South Africa" },
          { id: "b", text: "Nigeria" },
          { id: "c", text: "Egypt" },
          { id: "d", text: "Ghana" },
        ],
        correctAnswer: "b",
        explanation:
          "The amount of local currency to 1 USD is highest in Nigeria (157.3), followed by Kenya (86.1)[cite: 374, 384].",
      },
      {
        id: "be-39",
        question:
          "Regulatory quality measures the government's ability to promote:",
        options: [
          { id: "a", text: "Agricultural exports" },
          { id: "b", text: "Private sector development" },
          { id: "c", text: "Public sector dominance" },
          { id: "d", text: "Religious association" },
        ],
        correctAnswer: "b",
        explanation:
          "Regulatory quality is the ability of government to promote private sector development[cite: 346].",
      },
      {
        id: "be-40",
        question:
          "Voice and Accountability measures the extent to which citizens can:",
        options: [
          { id: "a", text: "Borrow money easily" },
          { id: "b", text: "Participate in selecting their government" },
          { id: "c", text: "Avoid paying taxes" },
          { id: "d", text: "Start a business for free" },
        ],
        correctAnswer: "b",
        explanation:
          "This measures the extent to which citizens participate in selecting government and enjoy freedoms[cite: 352].",
      },
      {
        id: "be-41",
        question:
          "The 'Judicial Independence' indicator in Nigeria showed ____ between 2013 and 2020.",
        options: [
          { id: "a", text: "A massive decline" },
          { id: "b", text: "A marginal improvement" },
          { id: "c", text: "Absolute stagnation" },
          { id: "d", text: "Complete disappearance" },
        ],
        correctAnswer: "b",
        explanation:
          "Improvements were recorded in areas including judicial independence (1.2 difference)[cite: 430, 432].",
      },
      {
        id: "be-42",
        question:
          "According to the ranking (Table 2), Nigeria's business environment is:",
        options: [
          { id: "a", text: "The absolute worst in Africa" },
          {
            id: "b",
            text: "Relatively less conducive compared to the other four",
          },
          { id: "c", text: "The most conducive in the world" },
          { id: "d", text: "Identical to South Africa's" },
        ],
        correctAnswer: "b",
        explanation:
          "Nigeria business environment is relatively less conducive relative to Egypt, Ghana, Kenya and South Africa[cite: 469, 480].",
      },
      {
        id: "be-43",
        question:
          "Which indicator is NOT used to measure the economic environment in this chapter?",
        options: [
          { id: "a", text: "Interest rate" },
          { id: "b", text: "Total tax rate" },
          { id: "c", text: "Independent judiciary" },
          { id: "d", text: "Inflation rate" },
        ],
        correctAnswer: "c",
        explanation:
          "Independent judiciary is a measure of the legal environment, not economic[cite: 278, 327].",
      },
      {
        id: "be-44",
        question:
          "Developing a 'shock absorber' for economic uncertainty is considered an:",
        options: [
          { id: "a", text: "Internal Role" },
          { id: "b", text: "Economic Role" },
          { id: "c", text: "Social Role" },
          { id: "d", text: "Technological Role" },
        ],
        correctAnswer: "b",
        explanation:
          "The economic role is to develop a shock absorber in the face of uncertainty of the economy [cite: 193] (referenced in previous context summary).",
      },
      {
        id: "be-45",
        question:
          "Bureaucratic bottlenecks are found at agencies like CAC and ____.",
        options: [
          { id: "a", text: "NASA" },
          { id: "b", text: "NAFDAC" },
          { id: "c", text: "FIFA" },
          { id: "d", text: "W.H.O" },
        ],
        correctAnswer: "b",
        explanation:
          "Bureaucratic bottlenecks are found at government agencies like CAC, NAFDAC, etc[cite: 321].",
      },
      {
        id: "be-46",
        question:
          "What is the rank of Nigeria in 'Market Capitalization' among the five countries?",
        options: [
          { id: "a", text: "1st" },
          { id: "b", text: "2nd" },
          { id: "c", text: "4th" },
          { id: "d", text: "5th" },
        ],
        correctAnswer: "c",
        explanation:
          "Nigeria is ranked fourth in terms of market capitalization[cite: 335, 419].",
      },
      {
        id: "be-47",
        question: "High lending rates in Nigeria are currently over:",
        options: [
          { id: "a", text: "50%" },
          { id: "b", text: "20%" },
          { id: "c", text: "2%" },
          { id: "d", text: "100%" },
        ],
        correctAnswer: "b",
        explanation:
          "The high cost of borrowing (high lending rate) is currently over 20%[cite: 316].",
      },
      {
        id: "be-48",
        question:
          "Which factor could make Nigeria's large population a 'threat' instead of an 'opportunity'?",
        options: [
          { id: "a", text: "If majority are wealthy" },
          { id: "b", text: "If majority are poor or lack skills" },
          { id: "c", text: "If everyone speaks English" },
          { id: "d", text: "If the weather is sunny" },
        ],
        correctAnswer: "b",
        explanation:
          "Large population is an opportunity, however if majority are poor it may not represent real opportunity[cite: 371, 415].",
      },
      {
        id: "be-49",
        question:
          "The 'Polity IV' dataset is used to measure which type of factors?",
        options: [
          { id: "a", text: "Natural" },
          { id: "b", text: "Political" },
          { id: "c", text: "Economic" },
          { id: "d", text: "Social" },
        ],
        correctAnswer: "b",
        explanation:
          "The Polity IV dataset is used for measuring political factors like polity2 and executive constraint[cite: 337, 339].",
      },
      {
        id: "be-50",
        question:
          "Understanding the business environment allows an enterprise to:",
        options: [
          { id: "a", text: "Ignore competitors" },
          { id: "b", text: "Plan appropriately and form strategies" },
          { id: "c", text: "Stop paying all taxes" },
          { id: "d", text: "Increase prices randomly" },
        ],
        correctAnswer: "b",
        explanation:
          "Understanding the environment is imperative to allow enterprises to plan appropriately and form strategies[cite: 243].",
      },
    ],
  },
];

export const getTopicById = (id: string): Topic | undefined => {
  return quizTopics.find((topic) => topic.id === id);
};

export const getAllTopics = (): Topic[] => {
  return quizTopics;
};
