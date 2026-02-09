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
  {
    id: "innovation-and-employability-chapter-3",
    title: "Innovation and Employability",
    description:
      "Test your knowledge on the nexus between innovation, economic diversification, and graduate employability in the Nigerian context.",
    icon: "TrendingUp",
    color: "#9c27b0",
    questions: [
      {
        id: "ie-1",
        question:
          "Which sector has historically been the main driver of Nigeria's economy and government revenue?",
        options: [
          { id: "a", text: "Agriculture" },
          { id: "b", text: "Manufacturing" },
          { id: "c", text: "Oil and gas" },
          { id: "d", text: "Information technology" },
        ],
        correctAnswer: "c",
        explanation:
          "Nigeria's economy is heavily reliant on the oil and gas sector[cite: 497].",
      },
      {
        id: "ie-2",
        question:
          "What primary reason is given for the need for economic diversification in Nigeria?",
        options: [
          { id: "a", text: "The lack of human capital" },
          { id: "b", text: "Volatility of global oil prices" },
          { id: "c", text: "A decline in the services sector" },
          { id: "d", text: "Excessive agricultural output" },
        ],
        correctAnswer: "b",
        explanation:
          "The volatility of global oil prices and external shocks underscore the need for economic diversification[cite: 498].",
      },
      {
        id: "ie-3",
        question: "How does Joseph Schumpeter describe innovation?",
        options: [
          { id: "a", text: "Only the creation of new technology" },
          { id: "b", text: "A process without any newness" },
          {
            id: "c",
            text: "The introduction of a good or significant improvement of an existing one",
          },
          { id: "d", text: "Purely academic research" },
        ],
        correctAnswer: "c",
        explanation:
          "Schumpeter's description includes the introduction of a good, significant improvement, new production methods, or new organization types[cite: 502].",
      },
      {
        id: "ie-4",
        question:
          "Innovation is considered the successful implementation of creative ideas that provide:",
        options: [
          { id: "a", text: "No change to the organization" },
          { id: "b", text: "Added value and novelty" },
          { id: "c", text: "Lower production costs only" },
          { id: "d", text: "Immediate government funding" },
        ],
        correctAnswer: "b",
        explanation:
          "Innovation is defined as a process providing added value and a degree of novelty[cite: 507].",
      },
      {
        id: "ie-5",
        question:
          "According to the text, what is the typical starting point for an innovation?",
        options: [
          { id: "a", text: "Commercialization" },
          { id: "b", text: "Distribution" },
          { id: "c", text: "Invention" },
          { id: "d", text: "Marketing" },
        ],
        correctAnswer: "c",
        explanation:
          "The text states it is safe to say that an innovation's starting point normally is an invention followed by exploitation[cite: 508].",
      },
      {
        id: "ie-6",
        question:
          "Without successful ____, an invention cannot become an innovation.",
        options: [
          { id: "a", text: "Categorization" },
          { id: "b", text: "Commercialization" },
          { id: "c", text: "Documentation" },
          { id: "d", text: "Regulation" },
        ],
        correctAnswer: "b",
        explanation:
          "Without successful commercialization, an invention cannot become an innovation[cite: 509].",
      },
      {
        id: "ie-7",
        question:
          "It is estimated that more than ____ of economic growth derives from technological progress.",
        options: [
          { id: "a", text: "40%" },
          { id: "b", text: "50%" },
          { id: "c", text: "60%" },
          { id: "d", text: "80%" },
        ],
        correctAnswer: "c",
        explanation:
          "It is estimated that more than 60% of economic growth derives from technological progress[cite: 510].",
      },
      {
        id: "ie-8",
        question: "The ILO defines employability as being related to:",
        options: [
          { id: "a", text: "Staying in one job for life" },
          { id: "b", text: "Portable competencies and qualifications" },
          { id: "c", text: "The number of degrees held" },
          { id: "d", text: "Government job placement only" },
        ],
        correctAnswer: "b",
        explanation:
          "The ILO relates employability to portable competencies and qualifications that enhance an individual's capacity to secure and retain work[cite: 512].",
      },
      {
        id: "ie-9",
        question: "What exacerbates the youth unemployment crisis in Nigeria?",
        options: [
          { id: "a", text: "Too much oil revenue" },
          { id: "b", text: "A lack of higher education qualifications" },
          {
            id: "c",
            text: "A skills mismatch between graduates and the labor market",
          },
          { id: "d", text: "The absence of a young population" },
        ],
        correctAnswer: "c",
        explanation:
          "The mismatch between skills possessed by graduates and labor market demands exacerbates the issue[cite: 516].",
      },
      {
        id: "ie-10",
        question: "The 'Fourth Industrial Revolution' demands proficiency in:",
        options: [
          { id: "a", text: "Traditional farming tools" },
          { id: "b", text: "Handwritten accounting" },
          { id: "c", text: "Digital technologies and data analysis" },
          { id: "d", text: "Manual labor only" },
        ],
        correctAnswer: "c",
        explanation:
          "The evolving job market increasingly demands proficiency in digital technologies, data analysis, and automation[cite: 519].",
      },
      {
        id: "ie-11",
        question:
          "To succeed in entrepreneurship, graduates require innovative ideas and:",
        options: [
          { id: "a", text: "The largest possible office space" },
          { id: "b", text: "Necessary skills and support systems" },
          { id: "c", text: "Guaranteed lifetime profit" },
          { id: "d", text: "A lack of competition" },
        ],
        correctAnswer: "b",
        explanation:
          "Graduates require both innovative ideas and the necessary skills and support systems to succeed[cite: 522].",
      },
      {
        id: "ie-12",
        question:
          "Why is there a need to reform Nigeria's education curriculum?",
        options: [
          { id: "a", text: "To remove all theoretical knowledge" },
          { id: "b", text: "To focus purely on ancient history" },
          {
            id: "c",
            text: "To equip students with practical, industry-relevant skills",
          },
          { id: "d", text: "To shorten the duration of all courses" },
        ],
        correctAnswer: "c",
        explanation:
          "Reform is needed to ensure the curriculum equips students with practical, industry-relevant skills alongside theoretical knowledge[cite: 525].",
      },
      {
        id: "ie-13",
        question: "Collaboration between industry and academia is vital for:",
        options: [
          { id: "a", text: "Reducing the number of teachers" },
          {
            id: "b",
            text: "Aligning educational offerings with industry needs",
          },
          { id: "c", text: "Replacing universities with factories" },
          { id: "d", text: "Lowering the cost of textbooks only" },
        ],
        correctAnswer: "b",
        explanation:
          "Collaboration is vital for aligning educational offerings with industry needs[cite: 534].",
      },
      {
        id: "ie-14",
        question: "Graduates need skills that are competitive in which arena?",
        options: [
          { id: "a", text: "Local arena only" },
          { id: "b", text: "The global arena" },
          { id: "c", text: "Historical arena only" },
          { id: "d", text: "The sports arena only" },
        ],
        correctAnswer: "b",
        explanation:
          "Graduates need skills that are not only relevant locally but also competitive in the global arena[cite: 538].",
      },
      {
        id: "ie-15",
        question:
          "Which specific technical skill can enhance a graduate's employability according to the text?",
        options: [
          { id: "a", text: "Typing on a typewriter" },
          { id: "b", text: "Proficiency in coding" },
          { id: "c", text: "Manual file filing" },
          { id: "d", text: "Basic handwriting" },
        ],
        correctAnswer: "b",
        explanation:
          "Proficiency in coding, digital marketing, and cybersecurity can significantly enhance graduates' employability[cite: 543].",
      },
      {
        id: "ie-16",
        question:
          "What are accelerators and venture capital funding designed to nurture?",
        options: [
          { id: "a", text: "Institutional inertia" },
          { id: "b", text: "A culture of innovation and problem-solving" },
          { id: "c", text: "The oil and gas industry only" },
          { id: "d", text: "Traditional government bureaucracy" },
        ],
        correctAnswer: "b",
        explanation:
          "These initiatives nurture a culture of innovation and problem-solving[cite: 546].",
      },
      {
        id: "ie-17",
        question:
          "Besides technical skills, which of these 'soft skills' do employers value?",
        options: [
          { id: "a", text: "Ignoring deadlines" },
          { id: "b", text: "Adaptability and teamwork" },
          { id: "c", text: "Working alone only" },
          { id: "d", text: "Resisting all change" },
        ],
        correctAnswer: "b",
        explanation:
          "Employers increasingly value soft skills such as communication, problem-solving, teamwork, and adaptability[cite: 556].",
      },
      {
        id: "ie-18",
        question: "Technological innovation specifically involves:",
        options: [
          { id: "a", text: "Removing all computers from offices" },
          { id: "b", text: "Development and adoption of new technologies" },
          { id: "c", text: "Using only traditional farming methods" },
          { id: "d", text: "Strictly following old procedures" },
        ],
        correctAnswer: "b",
        explanation:
          "This type involves the development and adoption of new technologies to enhance graduates' skills[cite: 571].",
      },
      {
        id: "ie-19",
        question:
          "A 'flipped classroom' is an example of which type of innovation?",
        options: [
          { id: "a", text: "Technological" },
          { id: "b", text: "Educational" },
          { id: "c", text: "Social" },
          { id: "d", text: "Policy" },
        ],
        correctAnswer: "b",
        explanation:
          "Innovative teaching methodologies like flipped classrooms are part of educational innovation[cite: 576].",
      },
      {
        id: "ie-20",
        question:
          "What is the primary focus of social innovation in this context?",
        options: [
          { id: "a", text: "Increasing taxes" },
          {
            id: "b",
            text: "Addressing challenges like affordable housing and childcare",
          },
          { id: "c", text: "Improving oil extraction" },
          { id: "d", text: "Developing new software only" },
        ],
        correctAnswer: "b",
        explanation:
          "Social innovation focuses on addressing social challenges and inequalities that hinder employability[cite: 581, 582].",
      },
      {
        id: "ie-21",
        question:
          "Policy innovation might include giving employers ____ for hiring graduates.",
        options: [
          { id: "a", text: "Extra work" },
          { id: "b", text: "Tax incentives" },
          { id: "c", text: "More regulations" },
          { id: "d", text: "Unpaid interns only" },
        ],
        correctAnswer: "b",
        explanation:
          "Policy innovation may include initiatives such as tax incentives for employers who hire graduates[cite: 585].",
      },
      {
        id: "ie-22",
        question: "Collaborative innovation involves partnerships between:",
        options: [
          { id: "a", text: "Teachers only" },
          { id: "b", text: "Government, academia, and industry" },
          { id: "c", text: "Rival countries only" },
          { id: "d", text: "Individual graduates only" },
        ],
        correctAnswer: "b",
        explanation:
          "Collaborative innovation involves partnerships between educational institutions, government agencies, industry, and employers[cite: 591].",
      },
      {
        id: "ie-23",
        question:
          "Which of these is a 'key problem' hindering innovation in Nigeria?",
        options: [
          { id: "a", text: "Too much reliable electricity" },
          { id: "b", text: "Limited access to resources" },
          { id: "c", text: "An excess of funding" },
          { id: "d", text: "A perfect skill-to-job match" },
        ],
        correctAnswer: "b",
        explanation:
          "Limited access to resources is a key problem hindering the scalability of innovative initiatives[cite: 598, 600].",
      },
      {
        id: "ie-24",
        question:
          "Infrastructure deficiency in Nigeria includes challenges with:",
        options: [
          { id: "a", text: "Excessive high-speed internet" },
          { id: "b", text: "Unreliable electricity" },
          { id: "c", text: "Too many physical facilities" },
          { id: "d", text: "Over-connectivity in remote areas" },
        ],
        correctAnswer: "b",
        explanation:
          "Deficiencies include unreliable electricity, limited internet, and insufficient facilities[cite: 602].",
      },
      {
        id: "ie-25",
        question: "Resistance to change often stems from:",
        options: [
          { id: "a", text: "Institutional inertia and fear of the unknown" },
          { id: "b", text: "Rapid success of all new ideas" },
          { id: "c", text: "Complete lack of skepticism" },
          { id: "d", text: "Strong leadership commitment" },
        ],
        correctAnswer: "a",
        explanation:
          "Resistance may stem from institutional inertia, fear of the unknown, or skepticism[cite: 608].",
      },
      {
        id: "ie-26",
        question: "Fragmentation and lack of coordination can result in:",
        options: [
          { id: "a", text: "Simplified processes" },
          { id: "b", text: "Duplicative efforts" },
          { id: "c", text: "Coherent initiatives" },
          { id: "d", text: "Maximum synergy" },
        ],
        correctAnswer: "b",
        explanation:
          "Lack of coordination can impede progress and result in duplicative efforts[cite: 611, 616].",
      },
      {
        id: "ie-27",
        question:
          "Nigeria faces challenges in quality assurance due to a lack of:",
        options: [
          { id: "a", text: "Students" },
          { id: "b", text: "Standardized metrics and reliable data" },
          { id: "c", text: "Graduation ceremonies" },
          { id: "d", text: "Paper for certificates" },
        ],
        correctAnswer: "b",
        explanation:
          "Challenges include a lack of standardized metrics, reliable data, and institutional capacity for monitoring[cite: 620].",
      },
      {
        id: "ie-28",
        question: "Bureaucratic 'red tape' is categorized as a:",
        options: [
          { id: "a", text: "Technical benefit" },
          { id: "b", text: "Policy and regulatory barrier" },
          { id: "c", text: "Social advantage" },
          { id: "d", text: "Method of innovation" },
        ],
        correctAnswer: "b",
        explanation:
          "Bureaucratic red tape and restrictive licensing are policy and regulatory barriers[cite: 623].",
      },
      {
        id: "ie-29",
        question:
          "How does innovation bridge the gap between education and employment?",
        options: [
          { id: "a", text: "By eliminating all exams" },
          { id: "b", text: "By aligning curriculum with industry needs" },
          { id: "c", text: "By providing free degrees to everyone" },
          { id: "d", text: "By closing all schools" },
        ],
        correctAnswer: "b",
        explanation:
          "Innovation bridges the gap by aligning curriculum with industry needs and emphasizing hands-on learning[cite: 632].",
      },
      {
        id: "ie-30",
        question:
          "Lifelong learning models allow graduates to ____ throughout their careers.",
        options: [
          { id: "a", text: "Retire early" },
          { id: "b", text: "Upskill and reskill" },
          { id: "c", text: "Stay stagnant" },
          { id: "d", text: "Avoid all technology" },
        ],
        correctAnswer: "b",
        explanation:
          "These models enable graduates to upskill and reskill to enhance marketability[cite: 642].",
      },
      {
        id: "ie-31",
        question:
          "Innovation in technology specifically equipping graduates with coding and data analysis skills enhances their:",
        options: [
          { id: "a", text: "Physical strength" },
          { id: "b", text: "Digital literacy" },
          { id: "c", text: "Handwriting speed" },
          { id: "d", text: "Memory for historical dates" },
        ],
        correctAnswer: "b",
        explanation:
          "Proficiency in coding, data analysis, etc., improves digital literacy and employability prospects[cite: 645].",
      },
      {
        id: "ie-32",
        question:
          "Investing in innovation can stimulate economic growth in sectors like technology, finance, and:",
        options: [
          { id: "a", text: "Traditional story-telling" },
          { id: "b", text: "Healthcare and manufacturing" },
          { id: "c", text: "Antiquities only" },
          { id: "d", text: "Manual file storage" },
        ],
        correctAnswer: "b",
        explanation:
          "It stimulates growth in key sectors such as technology, finance, healthcare, and manufacturing[cite: 648].",
      },
      {
        id: "ie-33",
        question:
          "Socio-economic innovation encompasses broader approaches to address systemic issues like:",
        options: [
          { id: "a", text: "Software bugs only" },
          { id: "b", text: "Unemployment, inequality, and poverty" },
          { id: "c", text: "Hardware failure" },
          { id: "d", text: "Lack of internet speed" },
        ],
        correctAnswer: "b",
        explanation:
          "Socio-economic innovation aims at addressing systemic issues related to unemployment, inequality, and poverty[cite: 662].",
      },
      {
        id: "ie-34",
        question: "Innovation in formal education involves reform in:",
        options: [
          { id: "a", text: "Apprenticeships only" },
          { id: "b", text: "Traditional education systems and curriculum" },
          { id: "c", text: "Vocational training only" },
          { id: "d", text: "Mentorship schemes only" },
        ],
        correctAnswer: "b",
        explanation:
          "Formal education innovation involves reforms in the traditional education system[cite: 669].",
      },
      {
        id: "ie-35",
        question:
          "Informal learning innovation provides pathways to skills development via:",
        options: [
          { id: "a", text: "PhD programs only" },
          { id: "b", text: "Vocational training and mentorship" },
          { id: "c", text: "Formal university lectures" },
          { id: "d", text: "Standardized classroom testing" },
        ],
        correctAnswer: "b",
        explanation:
          "Informal learning includes vocational training, apprenticeships, and mentorship schemes[cite: 672].",
      },
      {
        id: "ie-36",
        question: "Innovation for rural graduates may focus on promoting:",
        options: [
          { id: "a", text: "High-rise skyscrapers" },
          { id: "b", text: "Agribusiness and rural entrepreneurship" },
          { id: "c", text: "Metropolitan stock exchanges" },
          { id: "d", text: "City finance sectors" },
        ],
        correctAnswer: "b",
        explanation:
          "Rural innovation focuses on agribusiness, agro-processing, and rural industries[cite: 680].",
      },
      {
        id: "ie-37",
        question: "Public sector innovation is primarily led by:",
        options: [
          { id: "a", text: "Private businesses" },
          { id: "b", text: "Government initiatives and policies" },
          { id: "c", text: "Non-profit organizations" },
          { id: "d", text: "Industry associations" },
        ],
        correctAnswer: "b",
        explanation:
          "Public sector innovation involves government-led initiatives and policies[cite: 682].",
      },
      {
        id: "ie-38",
        question: "Which of these is an 'advantage' of innovation?",
        options: [
          { id: "a", text: "Resource constraints" },
          { id: "b", text: "Enhanced skill development" },
          { id: "c", text: "Resistance to change" },
          { id: "d", text: "Regulatory barriers" },
        ],
        correctAnswer: "b",
        explanation:
          "Innovation enables graduates to acquire a diverse set of skills relevant to the job market[cite: 691].",
      },
      {
        id: "ie-39",
        question:
          "How does innovation improve global competitiveness for Nigeria?",
        options: [
          { id: "a", text: "By closing all borders" },
          {
            id: "b",
            text: "By keeping abreast of global trends and acquiring in-demand skills",
          },
          { id: "c", text: "By banning foreign technology" },
          { id: "d", text: "By focusing only on local history" },
        ],
        correctAnswer: "b",
        explanation:
          "Embracing innovation allows graduates to stay competitive by keeping abreast of global trends[cite: 697].",
      },
      {
        id: "ie-40",
        question: "What is the 'poverty trap' in microenterprise projects?",
        options: [
          { id: "a", text: "High-tech projects" },
          { id: "b", text: "Trade-based, no-capital, no-tech projects" },
          { id: "c", text: "Large industrial factories" },
          { id: "d", text: "Multi-national corporations" },
        ],
        correctAnswer: "b",
        explanation:
          "Trade-based, no-capital, no-tech microenterprise projects are also called the 'poverty trap'[cite: 715].",
      },
      {
        id: "ie-41",
        question: "Poverty trap projects are often incapable of:",
        options: [
          { id: "a", text: "Any starting activity" },
          { id: "b", text: "Sustainable, productive growth" },
          { id: "c", text: "Hiring any people" },
          { id: "d", text: "Creating small sales" },
        ],
        correctAnswer: "b",
        explanation:
          "The former (trade-based projects) are often incapable of sustainable, productive growth[cite: 716].",
      },
      {
        id: "ie-42",
        question:
          "Technology and innovation-based projects offer more to the economy in the:",
        options: [
          { id: "a", text: "Immediate second" },
          { id: "b", text: "Medium to long term" },
          { id: "c", text: "Past century" },
          { id: "d", text: "Short term only" },
        ],
        correctAnswer: "b",
        explanation:
          "Sophisticated technology/innovation-based projects offer far more in the medium to long term[cite: 716].",
      },
      {
        id: "ie-43",
        question: "The 'nexus' refers to the link between innovation and:",
        options: [
          { id: "a", text: "Stagnation" },
          { id: "b", text: "Employability" },
          { id: "c", text: "Unemployment only" },
          { id: "d", text: "Traditional labor" },
        ],
        correctAnswer: "b",
        explanation:
          "The chapter discusses the nexus between innovation and employability for Nigerian graduates[cite: 486].",
      },
      {
        id: "ie-44",
        question: "The text states that employability is a function of:",
        options: [
          { id: "a", text: "Age" },
          { id: "b", text: "Innovative abilities" },
          { id: "c", text: "Family background" },
          { id: "d", text: "Physical height" },
        ],
        correctAnswer: "b",
        explanation:
          "Take home points state that employability of graduates is a function of the innovative abilities[cite: 718].",
      },
      {
        id: "ie-45",
        question:
          "Technological advancement is described as a ____ for innovation.",
        options: [
          { id: "a", text: "Negative burden" },
          { id: "b", text: "Positive integer" },
          { id: "c", text: "Useless addition" },
          { id: "d", text: "Neutral factor" },
        ],
        correctAnswer: "b",
        explanation:
          "Technological advancement is a positive integer for innovation[cite: 720].",
      },
      {
        id: "ie-46",
        question: "Advantages of innovation are said to ____ its shortcomings.",
        options: [
          { id: "a", text: "Be equal to" },
          { id: "b", text: "Override" },
          { id: "c", text: "Be less than" },
          { id: "d", text: "Cancel out" },
        ],
        correctAnswer: "b",
        explanation:
          "The take home points state that advantages of innovation override its shortcomings[cite: 720].",
      },
      {
        id: "ie-47",
        question:
          "The relationship between innovation and employability is described as:",
        options: [
          { id: "a", text: "Direct and positive" },
          { id: "b", text: "Inverse and negative" },
          { id: "c", text: "Random and weak" },
          { id: "d", text: "None existent" },
        ],
        correctAnswer: "a",
        explanation:
          "There is a direct and positive relationship between innovation and employability among graduates[cite: 722].",
      },
      {
        id: "ie-48",
        question:
          "Industry partnerships facilitate the co-creation of solutions to:",
        options: [
          { id: "a", text: "Imaginary problems" },
          { id: "b", text: "Real-world problems" },
          { id: "c", text: "Old textbook problems only" },
          { id: "d", text: "Academic puzzles only" },
        ],
        correctAnswer: "b",
        explanation:
          "Partnerships facilitate the co-creation of innovative solutions to real-world problems[cite: 535].",
      },
      {
        id: "ie-49",
        question:
          "The mismatch issue refers to a gap between graduate skills and:",
        options: [
          { id: "a", text: "Their parents' expectations" },
          { id: "b", text: "Labor market demands" },
          { id: "c", text: "Their high school hobbies" },
          { id: "d", text: "Graduation ceremony requirements" },
        ],
        correctAnswer: "b",
        explanation:
          "The mismatch is between skills possessed by graduates and demands of the labor market[cite: 516].",
      },
      {
        id: "ie-50",
        question:
          "Innovation is instrumental in addressing challenges faced by:",
        options: [
          { id: "a", text: "Retired citizens only" },
          { id: "b", text: "The Nigerian workforce" },
          { id: "c", text: "Primary school children only" },
          { id: "d", text: "Tourists only" },
        ],
        correctAnswer: "b",
        explanation:
          "Innovation is situated within the context of addressing challenges faced by the Nigerian workforce[cite: 500].",
      },
    ],
  },
  {
    id: "feasibility-study-chapter-4",
    title: "Feasibility Study and Report Writing",
    description:
      "Test your knowledge on the validation of business ideas, strategic analysis areas, and the difference between feasibility studies and business plans.",
    icon: "Search",
    color: "#ff9800",
    questions: [
      {
        id: "fs-1",
        question:
          "What are described as the 'building blocks' of entrepreneurship?",
        options: [
          { id: "a", text: "Financial loans" },
          { id: "b", text: "Ideas" },
          { id: "c", text: "Business plans" },
          { id: "d", text: "Consultants" },
        ],
        correctAnswer: "b",
        explanation:
          "Ideas are the building blocks of entrepreneurship[cite: 737].",
      },
      {
        id: "fs-2",
        question: "Which process determines if a business idea is viable?",
        options: [
          { id: "a", text: "Marketing research" },
          { id: "b", text: "Feasibility analysis" },
          { id: "c", text: "Product launching" },
          { id: "d", text: "Accounting audit" },
        ],
        correctAnswer: "b",
        explanation:
          "Feasibility analysis is the process of determining if a business idea is viable[cite: 741].",
      },
      {
        id: "fs-3",
        question:
          "The most effective businesses emerge from a process that includes four steps. Which is the SECOND step?",
        options: [
          { id: "a", text: "Writing a business plan" },
          { id: "b", text: "Recognizing a business idea" },
          { id: "c", text: "Testing feasibility" },
          { id: "d", text: "Launching the business" },
        ],
        correctAnswer: "c",
        explanation:
          "The process includes: (1) recognizing a business idea, (2) testing feasibility, (3) writing a business plan, and (4) launching the business[cite: 742].",
      },
      {
        id: "fs-4",
        question:
          "What mistake do many entrepreneurs make after identifying a business idea?",
        options: [
          { id: "a", text: "They drop the idea too early" },
          { id: "b", text: "They skip to writing a business plan directly" },
          { id: "c", text: "They hire too many employees" },
          { id: "d", text: "They conduct too much research" },
        ],
        correctAnswer: "b",
        explanation:
          "Many make the mistake of identifying an idea and jumping directly to writing a business plan, skipping feasibility testing[cite: 744, 745].",
      },
      {
        id: "fs-5",
        question:
          "Feasibility analysis is an assessment of a potential ____ rather than strictly a product idea.",
        options: [
          { id: "a", text: "Loan" },
          { id: "b", text: "Business" },
          { id: "c", text: "Marketing campaign" },
          { id: "d", text: "Logo design" },
        ],
        correctAnswer: "b",
        explanation:
          "It is an assessment of a potential business rather than strictly a product or service idea[cite: 747].",
      },
      {
        id: "fs-6",
        question:
          "What happens if an idea fails to pass the feasibility analysis?",
        options: [
          { id: "a", text: "The entrepreneur writes the business plan anyway" },
          {
            id: "b",
            text: "The entrepreneur drops it and moves to the next opportunity",
          },
          {
            id: "c",
            text: "The entrepreneur must launch the business to see if it works",
          },
          { id: "d", text: "The entrepreneur hires a new management team" },
        ],
        correctAnswer: "b",
        explanation:
          "If the idea fails to pass, the entrepreneur drops it and moves on to the next opportunity[cite: 758].",
      },
      {
        id: "fs-7",
        question: "A feasibility study primarily answers which question?",
        options: [
          { id: "a", text: "How do we sell the product?" },
          { id: "b", text: "Should we proceed with this business idea?" },
          { id: "c", text: "Who will be our manager?" },
          { id: "d", text: "When will we go public?" },
        ],
        correctAnswer: "b",
        explanation:
          "A feasibility study answers the question: 'Should we proceed with this business idea?'[cite: 763].",
      },
      {
        id: "fs-8",
        question:
          "Why is it beneficial for an entrepreneur to conduct their own feasibility study instead of hiring a consultant?",
        options: [
          { id: "a", text: "It guarantees success" },
          {
            id: "b",
            text: "It saves money and allows for better understanding of the business",
          },
          { id: "c", text: "It is required by law in Nigeria" },
          { id: "d", text: "Consultants are always biased" },
        ],
        correctAnswer: "b",
        explanation:
          "It saves money and enables the entrepreneur to understand the proposed business better by collecting their own data[cite: 761].",
      },
      {
        id: "fs-9",
        question:
          "The role of a feasibility study is to serve as a ____ for business ideas.",
        options: [
          { id: "a", text: "Promotional tool" },
          { id: "b", text: "Filter" },
          { id: "c", text: "Guarantee" },
          { id: "d", text: "Catalog" },
        ],
        correctAnswer: "b",
        explanation:
          "Its role is to serve as a filter, screening out ideas that lack potential[cite: 764].",
      },
      {
        id: "fs-10",
        question:
          "Which skill is NOT mentioned as necessary for an entrepreneur to conduct a reliable feasibility study?",
        options: [
          { id: "a", text: "Technical skill" },
          { id: "b", text: "Financial skill" },
          { id: "c", text: "Cooking skill" },
          { id: "d", text: "Market skill" },
        ],
        correctAnswer: "c",
        explanation:
          "Skills required include economic, market, technical, financial, and managerial skills[cite: 770, 771].",
      },
      {
        id: "fs-11",
        question:
          "Feasibility studies are particularly useful when entrepreneurs have generated:",
        options: [
          { id: "a", text: "No ideas" },
          { id: "b", text: "Multiple business concepts to winnow down" },
          { id: "c", text: "A finalized business plan" },
          { id: "d", text: "A full staff of employees" },
        ],
        correctAnswer: "b",
        explanation:
          "They are useful when entrepreneurs have generated multiple ideas and must winnow options down to the best choice[cite: 766].",
      },
      {
        id: "fs-12",
        question:
          "Which of the following is a benefit of conducting a feasibility analysis?",
        options: [
          { id: "a", text: "It eliminates all business risks" },
          { id: "b", text: "It helps in avoiding investment overrun" },
          { id: "c", text: "It replaces the need for marketing" },
          { id: "d", text: "It provides free capital from the bank" },
        ],
        correctAnswer: "b",
        explanation:
          "One of the benefits is that it helps in avoiding investment overrun[cite: 796].",
      },
      {
        id: "fs-13",
        question:
          "A feasibility report can be used to invite ____ to participate in the project.",
        options: [
          { id: "a", text: "Competitors" },
          { id: "b", text: "Co-sponsors" },
          { id: "c", text: "Random strangers" },
          { id: "d", text: "Tax auditors" },
        ],
        correctAnswer: "b",
        explanation:
          "A feasibility report is used to invite co-sponsors to participate in the project[cite: 804].",
      },
      {
        id: "fs-14",
        question:
          "How many key areas for feasibility analysis are identified in the chapter methodology?",
        options: [
          { id: "a", text: "Three" },
          { id: "b", text: "Six" },
          { id: "c", text: "Ten" },
          { id: "d", text: "Two" },
        ],
        correctAnswer: "b",
        explanation:
          "The methodology describes six key areas: business concept, industry/market, product/service, organizational, manufacturing/operations, and financial[cite: 806].",
      },
      {
        id: "fs-15",
        question:
          "Which type of research is conducted by talking to industry experts and prospective customers?",
        options: [
          { id: "a", text: "Secondary research" },
          { id: "b", text: "Primary research" },
          { id: "c", text: "Historical research" },
          { id: "d", text: "Passive research" },
        ],
        correctAnswer: "b",
        explanation:
          "Primary research includes talking to industry experts, obtaining feedback from customers, and focus groups[cite: 833, 834].",
      },
      {
        id: "fs-16",
        question: "Secondary research uses data that is:",
        options: [
          { id: "a", text: "Collected for the first time by the entrepreneur" },
          { id: "b", text: "Already collected (like Census data)" },
          { id: "c", text: "Only available in textbooks" },
          { id: "d", text: "Fake or projected data" },
        ],
        correctAnswer: "b",
        explanation:
          "Secondary research uses data that is already collected, such as industry studies or Census Bureau data[cite: 835].",
      },
      {
        id: "fs-17",
        question: "What is the key objective behind feasibility analysis?",
        options: [
          { id: "a", text: "To sell the product immediately" },
          { id: "b", text: "To put an idea to the test and scrutinize it" },
          { id: "c", text: "To get a loan as fast as possible" },
          { id: "d", text: "To hide risks from investors" },
        ],
        correctAnswer: "b",
        explanation:
          "The key objective is to put an idea to the test by talking to experts and scrutinizing the financials[cite: 836].",
      },
      {
        id: "fs-18",
        question:
          "Articulating a compelling 'story' for an idea is part of which analysis area?",
        options: [
          { id: "a", text: "Financial feasibility" },
          { id: "b", text: "Business concept" },
          { id: "c", text: "Industry attractiveness" },
          { id: "d", text: "Technical data" },
        ],
        correctAnswer: "b",
        explanation:
          "An entrepreneur should articulate a compelling story for why her/his idea is an excellent concept[cite: 841].",
      },
      {
        id: "fs-19",
        question: "An 'industry' is defined as a group of firms producing:",
        options: [
          { id: "a", text: "Different unrelated goods" },
          { id: "b", text: "Similar products or services" },
          { id: "c", text: "Only agricultural items" },
          { id: "d", text: "Products for the government only" },
        ],
        correctAnswer: "b",
        explanation:
          "An industry is a group of firms producing a similar product or service[cite: 850].",
      },
      {
        id: "fs-20",
        question: "What is a 'target market'?",
        options: [
          { id: "a", text: "The entire global population" },
          {
            id: "b",
            text: "A limited portion of the industry the firm wants to appeal to",
          },
          { id: "c", text: "The firm's suppliers" },
          { id: "d", text: "The group of people who hate the product" },
        ],
        correctAnswer: "b",
        explanation:
          "A firm's target market is the limited portion of the industry that it goes after or wants to appeal to[cite: 850].",
      },
      {
        id: "fs-21",
        question:
          "A useful tool for analyzing an industry's macro-level attractiveness is:",
        options: [
          { id: "a", text: "The balance sheet" },
          { id: "b", text: "Porter's five forces model" },
          { id: "c", text: "A focus group of 5 people" },
          { id: "d", text: "The net present value" },
        ],
        correctAnswer: "b",
        explanation:
          "A useful tool for analyzing an industry's attractiveness is the five forces model developed by Porter[cite: 873].",
      },
      {
        id: "fs-22",
        question: "Which of the following is one of Porter's 'five forces'?",
        options: [
          { id: "a", text: "Management passion" },
          { id: "b", text: "Bargaining power of buyers" },
          { id: "c", text: "Amount of startup capital" },
          { id: "d", text: "Number of days to register property" },
        ],
        correctAnswer: "b",
        explanation:
          "One of the five forces is the bargaining power of buyers[cite: 876].",
      },
      {
        id: "fs-23",
        question:
          "Market segmentation variables for consumer markets include demographic, geographic, behavioristic, and:",
        options: [
          { id: "a", text: "Technological" },
          { id: "b", text: "Psychographic" },
          { id: "c", text: "Political" },
          { id: "d", text: "Legal" },
        ],
        correctAnswer: "b",
        explanation:
          "Segmentation variables include demographic, geographic, psychographic, and behavioristic variables[cite: 880].",
      },
      {
        id: "fs-24",
        question:
          "By focusing on a smaller target market, a startup can usually avoid:",
        options: [
          { id: "a", text: "All taxes" },
          { id: "b", text: "Head-to-head competition with industry leaders" },
          { id: "c", text: "Paying employees" },
          { id: "d", text: "Collecting data" },
        ],
        correctAnswer: "b",
        explanation:
          "Focusing on a smaller target market helps avoid head-to-head competition with industry leaders[cite: 883].",
      },
      {
        id: "fs-25",
        question:
          "Product/service feasibility analysis addresses desirability and:",
        options: [
          { id: "a", text: "Packaging" },
          { id: "b", text: "Demand" },
          { id: "c", text: "Shipping speed" },
          { id: "d", text: "Colors" },
        ],
        correctAnswer: "b",
        explanation:
          "Product/service feasibility analysis addresses product desirability and demand[cite: 893].",
      },
      {
        id: "fs-26",
        question: "What is a 'concept test'?",
        options: [
          { id: "a", text: "Launching the final product in a mall" },
          {
            id: "b",
            text: "Showing a preliminary description to experts and customers",
          },
          { id: "c", text: "Calculating the total tax rate" },
          { id: "d", text: "Writing a 100-page business plan" },
        ],
        correctAnswer: "b",
        explanation:
          "A concept test involves showing a preliminary description (concept statement) to experts and customers for feedback[cite: 899].",
      },
      {
        id: "fs-27",
        question: "An original, functional model of a new product is called a:",
        options: [
          { id: "a", text: "Blueprint" },
          { id: "b", text: "Prototype" },
          { id: "c", text: "Case study" },
          { id: "d", text: "Inventory list" },
        ],
        correctAnswer: "b",
        explanation:
          "A prototype is an original, functional model of a new product[cite: 900].",
      },
      {
        id: "fs-28",
        question: "Simple 'gumshoe research' involves being a/an:",
        options: [
          { id: "a", text: "Accountant" },
          { id: "b", text: "Detective or investigator" },
          { id: "c", text: "Professor" },
          { id: "d", text: "Lawyer" },
        ],
        correctAnswer: "b",
        explanation:
          "Gumshoe research is a detective or investigator scrounging for info wherever it can be found[cite: 910].",
      },
      {
        id: "fs-29",
        question:
          "A focus group usually involves a small number of potential customers, usually between:",
        options: [
          { id: "a", text: "2 to 4" },
          { id: "b", text: "8 to 12" },
          { id: "c", text: "50 to 100" },
          { id: "d", text: "One person only" },
        ],
        correctAnswer: "b",
        explanation:
          "A focus group involves a small number of potential customers, usually between 8 to 12[cite: 912].",
      },
      {
        id: "fs-30",
        question:
          "Organizational feasibility determines management expertise and:",
        options: [
          { id: "a", text: "Resource sufficiency" },
          { id: "b", text: "Political affiliation" },
          { id: "c", text: "Social media following" },
          { id: "d", text: "Building height" },
        ],
        correctAnswer: "a",
        explanation:
          "The two primary issues are management prowess and resource sufficiency[cite: 919].",
      },
      {
        id: "fs-31",
        question: "Venture capitalists often prefer which combination?",
        options: [
          { id: "a", text: "An 'A' idea with a 'B' team" },
          { id: "b", text: "A 'B' idea with an 'A' team" },
          { id: "c", text: "A 'C' idea with no team" },
          { id: "d", text: "A 'B' idea with a 'B' team" },
        ],
        correctAnswer: "b",
        explanation:
          "Venture capitalists prefer a 'B' idea with an 'A' team over an 'A' idea with a 'B' team[cite: 924].",
      },
      {
        id: "fs-32",
        question: "A 'new-venture team' includes founders, key employees, and:",
        options: [
          { id: "a", text: "Competitors" },
          { id: "b", text: "Advisers" },
          { id: "c", text: "Customers" },
          { id: "d", text: "Landlords" },
        ],
        correctAnswer: "b",
        explanation:
          "A new-venture team is the group of founders, key employees, and advisers[cite: 928].",
      },
      {
        id: "fs-33",
        question:
          "Organizational feasibility focuses primarily on ____ resources.",
        options: [
          { id: "a", text: "Financial" },
          { id: "b", text: "Non-financial" },
          { id: "c", text: "Illegal" },
          { id: "d", text: "Foreign" },
        ],
        correctAnswer: "b",
        explanation:
          "The focus in this aspect of organizational feasibility analysis is on non-financial resources[cite: 931].",
      },
      {
        id: "fs-34",
        question:
          "Which of the following is a critical non-financial resource?",
        options: [
          { id: "a", text: "The price of oil" },
          { id: "b", text: "Affordable office space" },
          { id: "c", text: "Personal savings" },
          { id: "d", text: "Interest rates" },
        ],
        correctAnswer: "b",
        explanation:
          "Critical non-financial resources include affordable office space, laboratory space, or manufacturing space[cite: 934, 935].",
      },
      {
        id: "fs-35",
        question:
          "Manufacturing/operations feasibility might NOT be required for which type of business?",
        options: [
          { id: "a", text: "A car factory" },
          { id: "b", text: "A personal service business" },
          { id: "c", text: "A toy manufacturer" },
          { id: "d", text: "A computer design firm" },
        ],
        correctAnswer: "b",
        explanation:
          "Many small businesses that offer personal services will have little to say about operations and nothing about manufacturing[cite: 942].",
      },
      {
        id: "fs-36",
        question:
          "Facilities for a business include fixtures, furniture, equipment, and:",
        options: [
          { id: "a", text: "Patents" },
          { id: "b", text: "Parking space" },
          { id: "c", text: "Company logos" },
          { id: "d", text: "Product names" },
        ],
        correctAnswer: "b",
        explanation:
          "Facilities include fixtures, furniture, equipment, parking space, and renovations[cite: 948].",
      },
      {
        id: "fs-37",
        question:
          "Why should founders purchase life and disability insurance on key people?",
        options: [
          { id: "a", text: "Because it's free" },
          {
            id: "b",
            text: "When the business relies on a few talented individuals",
          },
          { id: "c", text: "To increase taxes" },
          { id: "d", text: "To satisfy the bank only" },
        ],
        correctAnswer: "b",
        explanation:
          "When a business relies on a few talented people, founders may purchase personal life/disability insurance on key people[cite: 959].",
      },
      {
        id: "fs-38",
        question:
          "At the feasibility stage, a ____ financial analysis is usually sufficient.",
        options: [
          { id: "a", text: "10-year detailed" },
          { id: "b", text: "Broad/preliminary" },
          { id: "c", text: "Mathematically perfect" },
          { id: "d", text: "Zero" },
        ],
        correctAnswer: "b",
        explanation:
          "At this stage, a broad or preliminary financial analysis is sufficient[cite: 962, 963].",
      },
      {
        id: "fs-39",
        question:
          "Which document shows where the venture moves from survival to growth?",
        options: [
          { id: "a", text: "The inventory list" },
          { id: "b", text: "Break-even analysis" },
          { id: "c", text: "Logo design" },
          { id: "d", text: "Supplier list" },
        ],
        correctAnswer: "b",
        explanation:
          "Provide a break-even analysis to demonstrate where the venture moves from survival to growth[cite: 968].",
      },
      {
        id: "fs-40",
        question:
          "The two most critical financial documents to include are the pro forma income statement and the:",
        options: [
          { id: "a", text: "Voucher" },
          { id: "b", text: "Statement of cash flows" },
          { id: "c", text: "Payroll" },
          { id: "d", text: "Receipt book" },
        ],
        correctAnswer: "b",
        explanation:
          "A pro forma income statement and a statement of cash flows are the two most critical documents[cite: 967].",
      },
      {
        id: "fs-41",
        question:
          "Which type of business typically requires LESS capital to launch?",
        options: [
          { id: "a", text: "Manufacturing" },
          { id: "b", text: "Service business" },
          { id: "c", text: "Retail business" },
          { id: "d", text: "Automobile production" },
        ],
        correctAnswer: "b",
        explanation:
          "Typically, service businesses require less capital to launch than manufacturing or retail businesses[cite: 978].",
      },
      {
        id: "fs-42",
        question:
          "Estimated earnings and capital requirements are combined to determine the:",
        options: [
          { id: "a", text: "Staff size" },
          { id: "b", text: "Rate of return (ROI)" },
          { id: "c", text: "Office location" },
          { id: "d", text: "Tax bracket" },
        ],
        correctAnswer: "b",
        explanation:
          "This aspect combines estimated earnings and capital requirements to determine the expected rate of return[cite: 986].",
      },
      {
        id: "fs-43",
        question:
          "The risk-return tradeoff means that higher risk requires ____ potential return.",
        options: [
          { id: "a", text: "Lower" },
          { id: "b", text: "Higher" },
          { id: "c", text: "Zero" },
          { id: "d", text: "Stable" },
        ],
        correctAnswer: "b",
        explanation:
          "The higher the level of risk, the higher the rate of return it must provide[cite: 990].",
      },
      {
        id: "fs-44",
        question:
          "One factor for assessing financial feasibility is the existing alternatives for the entrepreneur's:",
        options: [
          { id: "a", text: "Hobbies" },
          { id: "b", text: "Time and efforts" },
          { id: "c", text: "Family size" },
          { id: "d", text: "Political vote" },
        ],
        correctAnswer: "b",
        explanation:
          "Factors include existing alternatives for the money invested and the entrepreneur's time and efforts[cite: 999, 1000].",
      },
      {
        id: "fs-45",
        question: "What does NPV stand for in value added analysis?",
        options: [
          { id: "a", text: "New Product Value" },
          { id: "b", text: "Net Present Value" },
          { id: "c", text: "Nigerian Profit Verification" },
          { id: "d", text: "Non-Profit Venture" },
        ],
        correctAnswer: "b",
        explanation:
          "One method to ascertain profitability is Net present value (NPV)[cite: 1005].",
      },
      {
        id: "fs-46",
        question: "The 'Pay back method' is described as a/an:",
        options: [
          { id: "a", text: "Theoretical approach" },
          { id: "b", text: "Practical approach" },
          { id: "c", text: "Obsolete approach" },
          { id: "d", text: "Marketing approach" },
        ],
        correctAnswer: "b",
        explanation:
          "The text lists 'Pay back method (Practical approach)'[cite: 1009].",
      },
      {
        id: "fs-47",
        question: "A feasibility study serves as an ____ for the venture.",
        options: [
          { id: "a", text: "Obstacle" },
          { id: "b", text: "Implementation guide" },
          { id: "c", text: "Unnecessary delay" },
          { id: "d", text: "Public advertisement" },
        ],
        correctAnswer: "b",
        explanation:
          "It serves as an implementation guide to the venture to which it relates[cite: 790, 1026].",
      },
      {
        id: "fs-48",
        question:
          "The feasibility analysis process involves spending ____ to determine viability.",
        options: [
          { id: "a", text: "Zero effort" },
          { id: "b", text: "Time and resources" },
          { id: "c", text: "Only money" },
          { id: "d", text: "Only words" },
        ],
        correctAnswer: "b",
        explanation:
          "The process involves spending the time and resources necessary to analyze key areas[cite: 816].",
      },
      {
        id: "fs-49",
        question:
          "Writing a feasibility report helps prevent falling into the 'everything is ____' mode.",
        options: [
          { id: "a", text: "Terrible" },
          { id: "b", text: "Wonderful" },
          { id: "c", text: "Expensive" },
          { id: "d", text: "Broken" },
        ],
        correctAnswer: "b",
        explanation:
          "It avoids falling into the 'everything about my opportunity is wonderful' mode[cite: 749].",
      },
      {
        id: "fs-50",
        question:
          "Which area covers whether a venture is start-up, expanding, or in initial operations?",
        options: [
          { id: "a", text: "Resource sufficiency" },
          { id: "b", text: "Business concept" },
          { id: "c", text: "Financial projections" },
          { id: "d", text: "Rule of law" },
        ],
        correctAnswer: "b",
        explanation:
          "Business concept identifies the current stage of development (concept, start-up, initial operations, or expansion)[cite: 845].",
      },
    ],
  },
  {
    id: "entrepreneurship-marketing-validation-chapter-5",
    title: "Marketing and Idea Validation",
    description:
      "Test your knowledge on marketing functions, customer markets, product classification, and the strategic process of idea validation.",
    icon: "Megaphone",
    color: "#e91e63",
    questions: [
      {
        id: "mv-1",
        question:
          "Concerted effort is required on investigating the likely market for an intended product to ensure its:",
        options: [
          { id: "a", text: "Design aesthetic" },
          { id: "b", text: "Commercial success tendencies" },
          { id: "c", text: "Legal registration only" },
          { id: "d", text: "Storage capacity" },
        ],
        correctAnswer: "b",
        explanation:
          "Investigation is required to ensure the product has commercial success tendencies[cite: 1069, 1070].",
      },
      {
        id: "mv-2",
        question:
          "According to the text, a business-oriented person must prepare for failure not just in terms of finance but also as regards:",
        options: [
          { id: "a", text: "Infrastructure" },
          { id: "b", text: "Social media" },
          { id: "c", text: "Emotion" },
          { id: "d", text: "Politics" },
        ],
        correctAnswer: "c",
        explanation:
          "A business-oriented person must prepare for failure emotionally as well as financially[cite: 1075].",
      },
      {
        id: "mv-3",
        question:
          "Which of these is a distinguishing feature of services compared to products?",
        options: [
          { id: "a", text: "Visibility" },
          { id: "b", text: "Intangibility" },
          { id: "c", text: "Durability" },
          { id: "d", text: "Separability" },
        ],
        correctAnswer: "b",
        explanation:
          "Distinguishing features of services include intangibility, variability, inseparability, and simultaneity[cite: 1089, 1090].",
      },
      {
        id: "mv-4",
        question: "In the context of services, 'intangibility' means they:",
        options: [
          { id: "a", text: "Can be stored for years" },
          { id: "b", text: "Can be seen but not touched" },
          { id: "c", text: "Can neither be held physically nor seen" },
          { id: "d", text: "Are only performed by machines" },
        ],
        correctAnswer: "c",
        explanation:
          "Intangibility characterizes services as they can neither be held physically nor seen[cite: 1090].",
      },
      {
        id: "mv-5",
        question:
          "Simultaneity in services means that demand and supply happen:",
        options: [
          { id: "a", text: "At different locations" },
          { id: "b", text: "In two different years" },
          { id: "c", text: "At the same time" },
          { id: "d", text: "Only when the customer sleeps" },
        ],
        correctAnswer: "c",
        explanation:
          "Demand and supply of services happen simultaneously[cite: 1091].",
      },
      {
        id: "mv-6",
        question:
          "Who defined the entrepreneur as an innovator who brings new products or services into the economy?",
        options: [
          { id: "a", text: "McClelland" },
          { id: "b", text: "Schumpeter" },
          { id: "c", text: "Young" },
          { id: "d", text: "Hoselitz" },
        ],
        correctAnswer: "b",
        explanation:
          "Schumpeter (1934) sees the entrepreneur as an innovator bringing new products or services into the economy[cite: 1100].",
      },
      {
        id: "mv-7",
        question:
          "Which theory emphasizes that religion has a large impact on entrepreneurial development?",
        options: [
          { id: "a", text: "Theory viii" },
          { id: "b", text: "Theory ix" },
          { id: "c", text: "Theory iv" },
          { id: "d", text: "Theory i" },
        ],
        correctAnswer: "b",
        explanation:
          "Theory ix states that religion has a large impact on entrepreneurial development[cite: 1115].",
      },
      {
        id: "mv-8",
        question:
          "Drucker (1973) argues that the aim of marketing is to know the customer so well that the product:",
        options: [
          { id: "a", text: "Becomes more expensive" },
          { id: "b", text: "Fits him and sells itself" },
          { id: "c", text: "Needs aggressive advertising" },
          { id: "d", text: "Is always available in blue" },
        ],
        correctAnswer: "b",
        explanation:
          "The aim is to know the customer so well that the product fits him and sells itself[cite: 1120].",
      },
      {
        id: "mv-9",
        question:
          "In marketing terms, 'wants' are basic human requirements directed to:",
        options: [
          { id: "a", text: "Specific objects that satisfy a need" },
          { id: "b", text: "General survival only" },
          { id: "c", text: "Invisible entities" },
          { id: "d", text: "The government for help" },
        ],
        correctAnswer: "a",
        explanation:
          "A need becomes a want when it is directed to specific objects that might satisfy the need[cite: 1125].",
      },
      {
        id: "mv-10",
        question: "Demands are wants for specific products backed by:",
        options: [
          { id: "a", text: "Government approval" },
          { id: "b", text: "Ability to pay" },
          { id: "c", text: "High education" },
          { id: "d", text: "A physical market location" },
        ],
        correctAnswer: "b",
        explanation:
          "Demands are wants for specific product backed by an ability to pay[cite: 1128].",
      },
      {
        id: "mv-11",
        question:
          "In the shoe industry, 'youth market' is an example of which type of market?",
        options: [
          { id: "a", text: "Geographic" },
          { id: "b", text: "Need market" },
          { id: "c", text: "Demographic market" },
          { id: "d", text: "Labour market" },
        ],
        correctAnswer: "c",
        explanation:
          "The youth market is given as an example of a demographic market[cite: 1135].",
      },
      {
        id: "mv-12",
        question:
          "Which market consists of professional buyers skilled in evaluating competitive offerings to resell them at a profit?",
        options: [
          { id: "a", text: "Consumer Markets" },
          { id: "b", text: "Business Markets" },
          { id: "c", text: "Voter Markets" },
          { id: "d", text: "Global Markets" },
        ],
        correctAnswer: "b",
        explanation:
          "Business markets consist of well trained professional buyers who buy goods to make or resell to others at a profit[cite: 1144, 1145].",
      },
      {
        id: "mv-13",
        question:
          "When selling to 'Global Markets,' entrepreneurs must decide on entries such as joint ventures, contract manufacturing, or:",
        options: [
          { id: "a", text: "Giving products away for free" },
          { id: "b", text: "Solo manufacturer" },
          { id: "c", text: "Buying a whole country" },
          { id: "d", text: "Ignoring local culture" },
        ],
        correctAnswer: "b",
        explanation:
          "Ways to enter include being an exporter, licenser, joint venture partner, contract manufacturer, or solo manufacturer[cite: 1147].",
      },
      {
        id: "mv-14",
        question:
          "Government purchasing normally calls for ____, with the lowest one being favoured.",
        options: [
          { id: "a", text: "Advertisements" },
          { id: "b", text: "Bids" },
          { id: "c", text: "Phone calls" },
          { id: "d", text: "Lotteries" },
        ],
        correctAnswer: "b",
        explanation:
          "Government purchasing normally calls for bids, with the lowest bid being favoured[cite: 1152].",
      },
      {
        id: "mv-15",
        question:
          "Which marketing entity involves professionals like accountants, bankers, and software programmers?",
        options: [
          { id: "a", text: "Goods" },
          { id: "b", text: "Services" },
          { id: "c", text: "Events" },
          { id: "d", text: "Properties" },
        ],
        correctAnswer: "b",
        explanation:
          "Services include the work of professionals such as accountants, bankers, lawyers, and software programmers[cite: 1155].",
      },
      {
        id: "mv-16",
        question: "The Olympics and World Cup are prime examples of:",
        options: [
          { id: "a", text: "Property marketing" },
          { id: "b", text: "Experience marketing" },
          { id: "c", text: "Event marketing" },
          { id: "d", text: "Celebrity marketing" },
        ],
        correctAnswer: "c",
        explanation:
          "Global sporting events such as Olympic and World cup are good examples of event marketing[cite: 1158].",
      },
      {
        id: "mv-17",
        question:
          "Climbing Mount Everest or attending a live band concert are examples of:",
        options: [
          { id: "a", text: "Information marketing" },
          { id: "b", text: "Experiential marketing" },
          { id: "c", text: "Business marketing" },
          { id: "d", text: "Commodity marketing" },
        ],
        correctAnswer: "b",
        explanation:
          "By orchestrating several services and goods, firms create and market experiences, also known as experiential marketing[cite: 1160, 1161].",
      },
      {
        id: "mv-18",
        question:
          "In celebrity marketing, each person is advised to become a/an:",
        options: [
          { id: "a", text: "Employee" },
          { id: "b", text: "Brand" },
          { id: "c", text: "Agent" },
          { id: "d", text: "Mystery" },
        ],
        correctAnswer: "b",
        explanation:
          "In marketing, each person is advised to become a 'brand'[cite: 1168].",
      },
      {
        id: "mv-19",
        question:
          "Economic development specialists and real estate agents are primarily involved in ____ marketing.",
        options: [
          { id: "a", text: "Idea" },
          { id: "b", text: "Place" },
          { id: "c", text: "Person" },
          { id: "d", text: "Organization" },
        ],
        correctAnswer: "b",
        explanation:
          "Place marketers include economic development specialists and real estate agents wooing people to such places[cite: 1171].",
      },
      {
        id: "mv-20",
        question:
          "Which of these is a Nigerian example of 'Place' marketing cited in the text?",
        options: [
          { id: "a", text: "University of Ilorin" },
          { id: "b", text: "Obudu Ranch" },
          { id: "c", text: "Jide Taiwo and Associates" },
          { id: "d", text: "Dangote Group" },
        ],
        correctAnswer: "b",
        explanation:
          "Obudu Ranch, Ikogosi Warm Spring, and Owu Fall are examples of such places in Nigeria[cite: 1172].",
      },
      {
        id: "mv-21",
        question:
          "Financial property marketing involves the sale of stocks and:",
        options: [
          { id: "a", text: "Houses" },
          { id: "b", text: "Bonds" },
          { id: "c", text: "Cars" },
          { id: "d", text: "Furniture" },
        ],
        correctAnswer: "b",
        explanation:
          "Financial property includes stocks and bonds[cite: 1174].",
      },
      {
        id: "mv-22",
        question:
          "The University of Ilorin has built a unique image (Organization marketing) partly due to its:",
        options: [
          { id: "a", text: "Location in Lagos" },
          { id: "b", text: "Uninterrupted academic calendar" },
          { id: "c", text: "High student fees" },
          { id: "d", text: "Low staff number" },
        ],
        correctAnswer: "b",
        explanation:
          "The university built a good image because of its uninterrupted academic calendar for the past twenty years[cite: 1179].",
      },
      {
        id: "mv-23",
        question:
          "Management consulting firms primarily sell their ____ to companies.",
        options: [
          { id: "a", text: "Physical machines" },
          { id: "b", text: "Ideas" },
          { id: "c", text: "Real estate" },
          { id: "d", text: "Livestock" },
        ],
        correctAnswer: "b",
        explanation:
          "Management consulting firms sell their ideas to companies and are paid for these services[cite: 1186].",
      },
      {
        id: "mv-24",
        question:
          "Which marketing function category includes buying, assembling, and selling?",
        options: [
          { id: "a", text: "Physical function" },
          { id: "b", text: "Exchange function" },
          { id: "c", text: "Facilitating function" },
          { id: "d", text: "Climatic function" },
        ],
        correctAnswer: "b",
        explanation:
          "The exchange function brings about changes in ownership and includes buying, assembling, and selling[cite: 1193].",
      },
      {
        id: "mv-25",
        question:
          "Storage and transportation are part of which marketing function?",
        options: [
          { id: "a", text: "Exchange" },
          { id: "b", text: "Physical function" },
          { id: "c", text: "Facilitating" },
          { id: "d", text: "Social" },
        ],
        correctAnswer: "b",
        explanation:
          "The physical function is the physical transfer of products via storage and transportation[cite: 1194].",
      },
      {
        id: "mv-26",
        question:
          "Facilitating functions like financing and risk-bearing help perform:",
        options: [
          { id: "a", text: "Only storage" },
          { id: "b", text: "Other marketing functions" },
          { id: "c", text: "Only transportation" },
          { id: "d", text: "Global manufacturing" },
        ],
        correctAnswer: "b",
        explanation:
          "Facilitating functions are supporting activities that contribute to the performance of other marketing functions[cite: 1197].",
      },
      {
        id: "mv-27",
        question:
          "Beer, bread, and toothpaste are examples of which product category?",
        options: [
          { id: "a", text: "Durable goods" },
          { id: "b", text: "Nondurable goods" },
          { id: "c", text: "Unsought goods" },
          { id: "d", text: "Capital items" },
        ],
        correctAnswer: "b",
        explanation:
          "Nondurable goods are tangible goods consumed quickly and frequently, such as beer, bread, and toothpaste[cite: 1204].",
      },
      {
        id: "mv-28",
        question:
          "Consumer convenience goods are further divided into staples, impulse goods, and:",
        options: [
          { id: "a", text: "Specialty goods" },
          { id: "b", text: "Emergency goods" },
          { id: "c", text: "Industrial goods" },
          { id: "d", text: "Capital items" },
        ],
        correctAnswer: "b",
        explanation:
          "Convenience goods are further divided into staples, impulse, and emergency goods[cite: 1207].",
      },
      {
        id: "mv-29",
        question:
          "Magazines and yoghurt are examples of ____ goods because they are bought without planning.",
        options: [
          { id: "a", text: "Staple" },
          { id: "b", text: "Impulse" },
          { id: "c", text: "Emergency" },
          { id: "d", text: "Specialty" },
        ],
        correctAnswer: "b",
        explanation:
          "Impulse goods are purchased without planning or search effort, such as magazines and yoghurt[cite: 1209].",
      },
      {
        id: "mv-30",
        question: "Umbrellas during a rainy season are considered ____ goods.",
        options: [
          { id: "a", text: "Impulse" },
          { id: "b", text: "Emergency" },
          { id: "c", text: "Unsought" },
          { id: "d", text: "Durable" },
        ],
        correctAnswer: "b",
        explanation:
          "Emergency goods are purchased when there is an urgent need, like buying an umbrella during rainy seasons[cite: 1210].",
      },
      {
        id: "mv-31",
        question:
          "Furniture and used cars are ____ goods because consumers compare them on price and suitability.",
        options: [
          { id: "a", text: "Convenience" },
          { id: "b", text: "Shopping" },
          { id: "c", text: "Unsought" },
          { id: "d", text: "Industrial" },
        ],
        correctAnswer: "b",
        explanation:
          "Shopping goods are compared by consumers in terms of suitability, quality, price, and style[cite: 1212].",
      },
      {
        id: "mv-32",
        question:
          "Life insurance and cemetery plots are categorized as ____ goods.",
        options: [
          { id: "a", text: "Specialty" },
          { id: "b", text: "Unsought" },
          { id: "c", text: "Staple" },
          { id: "d", text: "Capital" },
        ],
        correctAnswer: "b",
        explanation:
          "Unsought goods are those consumers do not normally think of buying, like life insurance and cemetery plots[cite: 1220, 1221].",
      },
      {
        id: "mv-33",
        question:
          "Crude petroleum and lumber are examples of which type of industrial material?",
        options: [
          { id: "a", text: "Capital items" },
          { id: "b", text: "Raw materials (natural products)" },
          { id: "c", text: "Business services" },
          { id: "d", text: "Component parts" },
        ],
        correctAnswer: "b",
        explanation:
          "Raw materials can be natural products such as lumber and crude petroleum[cite: 1225].",
      },
      {
        id: "mv-34",
        question:
          "Capital items include long-lasting goods like heavy equipment and:",
        options: [
          { id: "a", text: "Writing paper" },
          { id: "b", text: "Installations (buildings)" },
          { id: "c", text: "Lubricants" },
          { id: "d", text: "Soap" },
        ],
        correctAnswer: "b",
        explanation:
          "Capital items include installations (buildings) and heavy equipment[cite: 1228, 1229].",
      },
      {
        id: "mv-35",
        question: "Window cleaning and copier repair fall under industrial:",
        options: [
          { id: "a", text: "Materials" },
          { id: "b", text: "Business services" },
          { id: "c", text: "Installations" },
          { id: "d", text: "Convenience goods" },
        ],
        correctAnswer: "b",
        explanation:
          "Business services include maintenance and repair services such as window cleaning and copier repair[cite: 1232].",
      },
      {
        id: "mv-36",
        question:
          "The 4Ps of the marketing mix are Product, Price, Place, and:",
        options: [
          { id: "a", text: "Profit" },
          { id: "b", text: "Promotion" },
          { id: "c", text: "People" },
          { id: "d", text: "Packaging" },
        ],
        correctAnswer: "b",
        explanation:
          "The 4Ps are product, price, place, and promotion[cite: 1246].",
      },
      {
        id: "mv-37",
        question:
          "According to the 4Cs model, 'Place' in the marketing mix represents the customer's:",
        options: [
          { id: "a", text: "Solution" },
          { id: "b", text: "Convenience (accessibility)" },
          { id: "c", text: "Cost" },
          { id: "d", text: "Communication" },
        ],
        correctAnswer: "b",
        explanation:
          "Place offers convenience or accessibility of the product to consumers[cite: 1249].",
      },
      {
        id: "mv-38",
        question:
          "Small businesses are called different names; MSMEs stands for:",
        options: [
          { id: "a", text: "Main System of Marketing Entities" },
          { id: "b", text: "Micro, Small and Medium Enterprises" },
          { id: "c", text: "Managerial Skills for Modern Engineers" },
          { id: "d", text: "Multiple Small and Major Exports" },
        ],
        correctAnswer: "b",
        explanation:
          "The text lists MSMEs as Micro, Small and Medium Enterprises[cite: 1252].",
      },
      {
        id: "mv-39",
        question:
          "The Central Bank of Nigeria (2013) defines SMEs as establishments with base capital (excluding land) between:",
        options: [
          { id: "a", text: "N1 million and N10 million" },
          { id: "b", text: "N5 million and N500 million" },
          { id: "c", text: "N100 million and N1 billion" },
          { id: "d", text: "N50,000 and N500,000" },
        ],
        correctAnswer: "b",
        explanation:
          "SMEs are defined as establishment with base capital between N5 million and N500 million[cite: 1256].",
      },
      {
        id: "mv-40",
        question:
          "Under the same definition, an SME in Nigeria employs between:",
        options: [
          { id: "a", text: "1 and 5 staff" },
          { id: "b", text: "11 and 200 staff" },
          { id: "c", text: "500 and 1000 staff" },
          { id: "d", text: "Any number of staff" },
        ],
        correctAnswer: "b",
        explanation:
          "SMEs in Nigeria are those employing between 11 and 200 staff[cite: 1256].",
      },
      {
        id: "mv-41",
        question:
          "Cybercafés and pure water production are identified as ____ businesses to be avoided.",
        options: [
          { id: "a", text: "Growth" },
          { id: "b", text: "Dying" },
          { id: "c", text: "Illegal" },
          { id: "d", text: "Specialty" },
        ],
        correctAnswer: "b",
        explanation:
          "The entrepreneur should be careful not to go into 'dying' businesses like cybercafé and pure water production[cite: 1283].",
      },
      {
        id: "mv-42",
        question:
          "Idea validation is the process of checking the validity of an idea ____ converting it to a sellable product.",
        options: [
          { id: "a", text: "After" },
          { id: "b", text: "Before" },
          { id: "c", text: "Instead of" },
          { id: "d", text: "By never" },
        ],
        correctAnswer: "b",
        explanation:
          "Idea validation involves checking the validity of an idea before converting it to a product[cite: 1285].",
      },
      {
        id: "mv-43",
        question:
          "The essence of validation is to ensure that a ____ is available for the planned product.",
        options: [
          { id: "a", text: "Bank loan" },
          { id: "b", text: "Ready market" },
          { id: "c", text: "Supplier" },
          { id: "d", text: "Tax refund" },
        ],
        correctAnswer: "b",
        explanation:
          "The validation effort ensures that a ready market is available[cite: 1290].",
      },
      {
        id: "mv-44",
        question:
          "Opportunity recognition achieves profit potential through commencing a fresh enterprise or ____ an existing one.",
        options: [
          { id: "a", text: "Selling" },
          { id: "b", text: "Restructuring and rejuvenating" },
          { id: "c", text: "Closing" },
          { id: "d", text: "Ignoring" },
        ],
        correctAnswer: "b",
        explanation:
          "Profit potential is achieved through fresh business or restructuring/rejuvenating existing ventures[cite: 1298, 1299].",
      },
      {
        id: "mv-45",
        question:
          "One's previous occupations or environment can be a source of ideas; this is called:",
        options: [
          { id: "a", text: "Hobby" },
          { id: "b", text: "Prior Experience" },
          { id: "c", text: "Market Research" },
          { id: "d", text: "Social Network" },
        ],
        correctAnswer: "b",
        explanation:
          "Prior experience in previous occupations or environments is a source of entrepreneurial ideas[cite: 1317].",
      },
      {
        id: "mv-46",
        question:
          "When scanning for opportunities, government minimum wage and taxes are part of:",
        options: [
          { id: "a", text: "Climatic conditions" },
          { id: "b", text: "Government regulations" },
          { id: "c", text: "Hobby interest" },
          { id: "d", text: "Social networks" },
        ],
        correctAnswer: "b",
        explanation:
          "Regulations include political and economic factors like minimum wage and taxes[cite: 1342, 1345].",
      },
      {
        id: "mv-47",
        question:
          "The mass advocacy for solar-powered cars due to global warming is an example of a/an ____ influence.",
        options: [
          { id: "a", text: "Legal" },
          { id: "b", text: "Climatic condition" },
          { id: "c", text: "Individual" },
          { id: "d", text: "Religious" },
        ],
        correctAnswer: "b",
        explanation:
          "The influence of global warming on the automobile industry demonstrates climatic change affecting survival[cite: 1364, 1366].",
      },
      {
        id: "mv-48",
        question:
          "During brainstorming, an innovator should provide ____ innovative ideas to solving a problem.",
        options: [
          { id: "a", text: "One hundred" },
          { id: "b", text: "At most five" },
          { id: "c", text: "No" },
          { id: "d", text: "Only expensive" },
        ],
        correctAnswer: "b",
        explanation:
          "At most, five innovative ideas to solving a problem should be enough to avoid confusing clients[cite: 1374].",
      },
      {
        id: "mv-49",
        question:
          "In the step of Objectivity, entrepreneurs are advised NOT to seek assistance from ____ in validating their idea.",
        options: [
          { id: "a", text: "Industry experts" },
          { id: "b", text: "Relatives" },
          { id: "c", text: "Bank managers" },
          { id: "d", text: "Consultants" },
        ],
        correctAnswer: "b",
        explanation:
          "The entrepreneur is not expected to seek the assistance of relatives because of possible pity or love[cite: 1376, 1381].",
      },
      {
        id: "mv-50",
        question:
          "A marketing survey for idea validation should select about how many objective individuals?",
        options: [
          { id: "a", text: "Five hundred" },
          { id: "b", text: "Not more than fifteen" },
          { id: "c", text: "Two only" },
          { id: "d", text: "The entire city" },
        ],
        correctAnswer: "b",
        explanation:
          "The entrepreneur is expected to select not more than fifteen objective and unbiased individuals[cite: 1385, 1386].",
      },
    ],
  },
  {
    id: "business-planning-chapter-6",
    title: "Business Planning",
    description:
      "Test your knowledge on planning principles, strategic vs. operational frameworks, and financial projections like Break-Even and Cash Flow.",
    icon: "ClipboardList",
    color: "#607d8b",
    questions: [
      {
        id: "bp-1",
        question:
          "Planning is defined as the process of deciding what to do and:",
        options: [
          { id: "a", text: "When to quit" },
          { id: "b", text: "How to do it" },
          { id: "c", text: "Who to blame" },
          { id: "d", text: "How to hide costs" },
        ],
        correctAnswer: "b",
        explanation:
          "Planning refers to the process of deciding what to do and how to do it[cite: 1433].",
      },
      {
        id: "bp-2",
        question: "What is identified as a leading cause of business failure?",
        options: [
          { id: "a", text: "High taxes" },
          { id: "b", text: "Poor planning" },
          { id: "c", text: "Location" },
          { id: "d", text: "Competition" },
        ],
        correctAnswer: "b",
        explanation:
          "Poor planning is a leading cause of business failure[cite: 1438].",
      },
      {
        id: "bp-3",
        question:
          "The planning principle that ensures all significant options and impacts are considered is:",
        options: [
          { id: "a", text: "Efficient" },
          { id: "b", text: "Comprehensive" },
          { id: "c", text: "Logical" },
          { id: "d", text: "Transparent" },
        ],
        correctAnswer: "b",
        explanation:
          "Comprehensive planning means all significant options and impacts are considered[cite: 1444].",
      },
      {
        id: "bp-4",
        question: "A 'transparent' planning process is one where:",
        options: [
          { id: "a", text: "No one knows the budget" },
          { id: "b", text: "Everybody understands how the processes operate" },
          { id: "c", text: "Only managers see the plan" },
          { id: "d", text: "The plan is written in code" },
        ],
        correctAnswer: "b",
        explanation:
          "Planning should be transparent so everybody involved understands how the processes operate[cite: 1453].",
      },
      {
        id: "bp-5",
        question:
          "Which of these is a benefit of planning according to Shapiro (2001)?",
        options: [
          { id: "a", text: "It guarantees immediate profit" },
          { id: "b", text: "It guides prioritizing and decision making" },
          { id: "c", text: "It eliminates the need for staff" },
          { id: "d", text: "It allows ignoring the local context" },
        ],
        correctAnswer: "b",
        explanation:
          "Planning guides you in prioritising and making decisions[cite: 1458].",
      },
      {
        id: "bp-6",
        question: "Strategic planning is primarily about:",
        options: [
          { id: "a", text: "Day-to-day tasks" },
          { id: "b", text: "The bigger picture and future vision" },
          { id: "c", text: "Writing weekly reports" },
          { id: "d", text: "Fixing machinery" },
        ],
        correctAnswer: "b",
        explanation:
          "Strategic planning is about the bigger picture and determining priorities to achieve a future vision[cite: 1468, 1470].",
      },
      {
        id: "bp-7",
        question:
          "What type of analysis helps identify internal strengths/weaknesses and external opportunities/threats?",
        options: [
          { id: "a", text: "Break-even analysis" },
          { id: "b", text: "SWOT analysis" },
          { id: "c", text: "Cash flow forecast" },
          { id: "d", text: "Step-by-step logic" },
        ],
        correctAnswer: "b",
        explanation:
          "A SWOT analysis helps identify strengths, weaknesses, opportunities, and threats[cite: 1478].",
      },
      {
        id: "bp-8",
        question:
          "Operational or action planning answers which of these questions?",
        options: [
          { id: "a", text: "Why do we exist?" },
          { id: "b", text: "Who will do it?" },
          { id: "c", text: "Is the world round?" },
          { id: "d", text: "Who is the president?" },
        ],
        correctAnswer: "b",
        explanation:
          "Operational planning answers questions like 'Who will do it?' and 'How will it be done?'[cite: 1490, 1491].",
      },
      {
        id: "bp-9",
        question:
          "When setting up a new organization, you should pay particular attention to:",
        options: [
          { id: "a", text: "The color of the office" },
          { id: "b", text: "The strategic planning phase" },
          { id: "c", text: "Buying the most expensive cars" },
          { id: "d", text: "Ignoring the management team" },
        ],
        correctAnswer: "b",
        explanation:
          "Particular attention should be paid to the strategic planning phase when setting up a new organization[cite: 1496].",
      },
      {
        id: "bp-10",
        question:
          "How often should regular strategic reviews typically be done?",
        options: [
          { id: "a", text: "Every 10 years" },
          { id: "b", text: "Every two years" },
          { id: "c", text: "Only when the business fails" },
          { id: "d", text: "Daily" },
        ],
        correctAnswer: "b",
        explanation:
          "Regular strategic reviews should be done every two years[cite: 1498].",
      },
      {
        id: "bp-11",
        question: "Action planning should be left to:",
        options: [
          { id: "a", text: "External consultants only" },
          { id: "b", text: "Responsible projects and units" },
          { id: "c", text: "The CEO alone" },
          { id: "d", text: "The government" },
        ],
        correctAnswer: "b",
        explanation:
          "Action planning should be left to the responsible projects or units[cite: 1500].",
      },
      {
        id: "bp-12",
        question:
          "A project usually differs from an organization's ongoing work because it has a:",
        options: [
          { id: "a", text: "Larger budget" },
          { id: "b", text: "Limited time-span" },
          { id: "c", text: "Secret mission" },
          { id: "d", text: "Different name" },
        ],
        correctAnswer: "b",
        explanation:
          "A project usually has a limited time-span and specific specified outputs[cite: 1515].",
      },
      {
        id: "bp-13",
        question:
          "A business plan is a document that details the business objectives and:",
        options: [
          { id: "a", text: "List of all employees' families" },
          { id: "b", text: "Means of achieving those objectives" },
          { id: "c", text: "Secrets of the competitors" },
          { id: "d", text: "A history of world trade" },
        ],
        correctAnswer: "b",
        explanation:
          "A business plan details objectives and the means of achieving them[cite: 1523].",
      },
      {
        id: "bp-14",
        question:
          "What is an 'externally focused' business plan typically used for?",
        options: [
          { id: "a", text: "Daily staff meetings" },
          { id: "b", text: "Obtaining funding" },
          { id: "c", text: "Designing a new logo" },
          { id: "d", text: "Cleaning the factory" },
        ],
        correctAnswer: "b",
        explanation:
          "Externally focused plans are usually to obtain funding essential for growth[cite: 1530].",
      },
      {
        id: "bp-15",
        question: "An 'internally focused' plan might cover:",
        options: [
          { id: "a", text: "Bank loan proposals" },
          { id: "b", text: "Restructuring the organization" },
          { id: "c", text: "Selling to new countries" },
          { id: "d", text: "Celebrity marketing" },
        ],
        correctAnswer: "b",
        explanation:
          "Internally focused plans may cover restructuring, new systems, or product development[cite: 1535].",
      },
      {
        id: "bp-16",
        question: "Who should ideally prepare the business plan?",
        options: [
          { id: "a", text: "Professional advisors alone" },
          { id: "b", text: "The promoter/owners" },
          { id: "c", text: "A hired university student" },
          { id: "d", text: "The bank manager" },
        ],
        correctAnswer: "b",
        explanation:
          "The plan should as far as possible be prepared by the promoter(s)[cite: 1550].",
      },
      {
        id: "bp-17",
        question:
          "Delegating the business plan to someone who is NOT a key member results in:",
        options: [
          { id: "a", text: "A perfect plan" },
          { id: "b", text: "An inferior plan" },
          { id: "c", text: "Lower taxes" },
          { id: "d", text: "Better funding" },
        ],
        correctAnswer: "b",
        explanation:
          "Delegating it to someone not a key member will result in an inferior plan[cite: 1552].",
      },
      {
        id: "bp-18",
        question:
          "The 'Background of Business' section should include the business name and:",
        options: [
          { id: "a", text: "Owner's favorite food" },
          { id: "b", text: "Business address" },
          { id: "c", text: "Competitor's home addresses" },
          { id: "d", text: "The current weather" },
        ],
        correctAnswer: "b",
        explanation:
          "Background info includes name, address, email, and type of business[cite: 1560, 1561].",
      },
      {
        id: "bp-19",
        question:
          "In the 'Personnel' section, what should be provided for key staff?",
        options: [
          { id: "a", text: "Their birth certificates" },
          { id: "b", text: "Names, positions, and salaries" },
          { id: "c", text: "A list of their previous pets" },
          { id: "d", text: "Their bank account pins" },
        ],
        correctAnswer: "b",
        explanation:
          "Personnel information should state names, positions, and salaries[cite: 1599].",
      },
      {
        id: "bp-20",
        question: "A 'contingency plan' for personnel covers what happens if:",
        options: [
          { id: "a", text: "They get a promotion" },
          { id: "b", text: "They are unable to work due to illness" },
          { id: "c", text: "They go on vacation" },
          { id: "d", text: "They win the lottery" },
        ],
        correctAnswer: "b",
        explanation:
          "A contingency plan is needed for if key personnel are unable to work due to illness or injury[cite: 1602].",
      },
      {
        id: "bp-21",
        question:
          "Describing the target market and listing major competitors is part of which section?",
        options: [
          { id: "a", text: "Financial considerations" },
          { id: "b", text: "Business Market" },
          { id: "c", text: "Background of Business" },
          { id: "d", text: "Product offering" },
        ],
        correctAnswer: "b",
        explanation:
          "Target market description and competitor lists fall under Business Market[cite: 1604, 1606].",
      },
      {
        id: "bp-22",
        question:
          "What is a primary purpose of financial projections in a business plan?",
        options: [
          { id: "a", text: "To hide the debt" },
          { id: "b", text: "To establish the profit potential" },
          { id: "c", text: "To prove you have the best logo" },
          { id: "d", text: "To list all current employees" },
        ],
        correctAnswer: "b",
        explanation:
          "Financial projections establish profit potential and determine capital needs[cite: 1617, 1618].",
      },
      {
        id: "bp-23",
        question:
          "Which of these is a common source of capital mentioned in the checklist?",
        options: [
          { id: "a", text: "Credit cards only" },
          { id: "b", text: "Own resources and government grants" },
          { id: "c", text: "Illegal loans" },
          { id: "d", text: "Competitor's profits" },
        ],
        correctAnswer: "b",
        explanation:
          "Sources include own resources, government grants, and external sources like banks[cite: 1624, 1625, 1626].",
      },
      {
        id: "bp-24",
        question:
          "The level of business activity where there is neither profit nor loss is called:",
        options: [
          { id: "a", text: "Maximum profit" },
          { id: "b", text: "Break-even point" },
          { id: "c", text: "Bankruptcy" },
          { id: "d", text: "Standard turnover" },
        ],
        correctAnswer: "b",
        explanation:
          "Break-even is the level of activity at which a company makes neither a profit nor a loss[cite: 1640].",
      },
      {
        id: "bp-25",
        question:
          "To calculate 'contribution' (Step 1), you subtract ____ from project sales.",
        options: [
          { id: "a", text: "Fixed costs" },
          { id: "b", text: "Direct costs (materials and labor)" },
          { id: "c", text: "Taxes only" },
          { id: "d", text: "Owner's salary only" },
        ],
        correctAnswer: "b",
        explanation:
          "Contribution is calculated as Sales less Direct costs (Materials and Labour)[cite: 1652].",
      },
      {
        id: "bp-26",
        question:
          "Overheads or indirect costs are considered ____ because they exist regardless of sales.",
        options: [
          { id: "a", text: "Variable costs" },
          { id: "b", text: "Fixed costs" },
          { id: "c", text: "Hidden costs" },
          { id: "d", text: "Optional costs" },
        ],
        correctAnswer: "b",
        explanation:
          "Overheads exist whether sales are achieved or not and are regarded as fixed costs[cite: 1665].",
      },
      {
        id: "bp-27",
        question:
          "To find actual turnover to break even (D), you divide ____ by the contribution margin.",
        options: [
          { id: "a", text: "Net profit" },
          { id: "b", text: "Overheads (C)" },
          { id: "c", text: "Sales price" },
          { id: "d", text: "Total units" },
        ],
        correctAnswer: "b",
        explanation:
          "Break-even turnover equals overhead divided by contribution margin[cite: 1672, 1673].",
      },
      {
        id: "bp-28",
        question: "When does profit begin to accumulate for the business?",
        options: [
          { id: "a", text: "On the first day of business" },
          { id: "b", text: "After the break-even point is reached" },
          { id: "c", text: "When the bank loan is paid" },
          { id: "d", text: "Only in the fifth year" },
        ],
        correctAnswer: "b",
        explanation:
          "Profits accumulate in favour of the business after the break-even point has been reached[cite: 1706].",
      },
      {
        id: "bp-29",
        question:
          "A cash flow forecast helps identify if any ____ will be required.",
        options: [
          { id: "a", text: "New employees" },
          { id: "b", text: "Additional finance" },
          { id: "c", text: "Competitor research" },
          { id: "d", text: "Legal action" },
        ],
        correctAnswer: "b",
        explanation:
          "A cash flow forecast will help identify if any additional finance shall be required[cite: 1717].",
      },
      {
        id: "bp-30",
        question:
          "What is the absolute minimum period for a new business cash flow forecast?",
        options: [
          { id: "a", text: "One week" },
          { id: "b", text: "Six months" },
          { id: "c", text: "One year" },
          { id: "d", text: "Five years" },
        ],
        correctAnswer: "b",
        explanation:
          "A 6-month period should be regarded as an absolute minimum for a cash flow forecast[cite: 1719].",
      },
      {
        id: "bp-31",
        question:
          "Receipts from credit sales appear in the forecast in the month of:",
        options: [
          { id: "a", text: "The sale" },
          { id: "b", text: "Actual receipt from debtors" },
          { id: "c", text: "Inventory purchase" },
          { id: "d", text: "Tax filing" },
        ],
        correctAnswer: "b",
        explanation:
          "Receipt from debtors is shown in the actual month of receipt[cite: 1730].",
      },
      {
        id: "bp-32",
        question: "Payment for purchases on credit is shown in the month of:",
        options: [
          { id: "a", text: "The purchase" },
          { id: "b", text: "The actual payment" },
          { id: "c", text: "The production" },
          { id: "d", text: "The inventory count" },
        ],
        correctAnswer: "b",
        explanation:
          "Payment should be shown in the month you make the payment[cite: 1732].",
      },
      {
        id: "bp-33",
        question:
          "A 'rough copy' with coffee stains and typos tells the reader that:",
        options: [
          { id: "a", text: "The entrepreneur works hard" },
          { id: "b", text: "Management doesn't take planning seriously" },
          { id: "c", text: "The business is creative" },
          { id: "d", text: "The printer is broken" },
        ],
        correctAnswer: "b",
        explanation:
          "A rough copy tells the reader that management does not take the process seriously[cite: 1789].",
      },
      {
        id: "bp-34",
        question: "Unsubstantiated assumptions in a business plan can:",
        options: [
          { id: "a", text: "Make it look impressive" },
          { id: "b", text: "Hurt the plan" },
          { id: "c", text: "Attract more investors" },
          { id: "d", text: "Replace the need for data" },
        ],
        correctAnswer: "b",
        explanation:
          "Unsubstantiated assumptions can hurt a business plan[cite: 1791].",
      },
      {
        id: "bp-35",
        question: "The term 'blue sky' refers to:",
        options: [
          { id: "a", text: "Weather forecasts" },
          { id: "b", text: "Failure to consider prospective pitfalls" },
          { id: "c", text: "High profits" },
          { id: "d", text: "Clear communication" },
        ],
        correctAnswer: "b",
        explanation:
          "Too much 'blue sky' is a failure to consider prospective pitfalls[cite: 1792].",
      },
      {
        id: "bp-36",
        question:
          "Lenders expect the entrepreneur to have some ____ capital invested.",
        options: [
          { id: "a", text: "Debt" },
          { id: "b", text: "Equity" },
          { id: "c", text: "Borrowed" },
          { id: "d", text: "Foreign" },
        ],
        correctAnswer: "b",
        explanation:
          "The lender expects the entrepreneur to have some equity capital invested[cite: 1795].",
      },
      {
        id: "bp-37",
        question:
          "Bankers look primarily toward ____ for the repayment of loans.",
        options: [
          { id: "a", text: "Collateral" },
          { id: "b", text: "Projected profits and cash flow" },
          { id: "c", text: "Government grants" },
          { id: "d", text: "The owner's family" },
        ],
        correctAnswer: "b",
        explanation:
          "Bankers look toward projected profits and cash flow for repayment[cite: 1798, 1799].",
      },
      {
        id: "bp-38",
        question: "Standardization and market information are categorized as:",
        options: [
          { id: "a", text: "Physical functions" },
          { id: "b", text: "Facilitating functions" },
          { id: "c", text: "Exchange functions" },
          { id: "d", text: "Administrative functions" },
        ],
        correctAnswer: "b",
        explanation:
          "Facilitating functions include financing, standardization, and market information[cite: 1827].",
      },
      {
        id: "bp-39",
        question:
          "Planning involves establishing objectives and formulating policies, strategies, and:",
        options: [
          { id: "a", text: "Prices" },
          { id: "b", text: "Tactics" },
          { id: "c", text: "Advertisements" },
          { id: "d", text: "Rumors" },
        ],
        correctAnswer: "b",
        explanation:
          "Planning involves establishment of objectives and formulation of policies, strategies, and tactics[cite: 1439].",
      },
      {
        id: "bp-40",
        question: "Logical planning ensures that:",
        options: [
          { id: "a", text: "Money is saved" },
          { id: "b", text: "Each step leads to the next" },
          { id: "c", text: "Everyone is included" },
          { id: "d", text: "Results are kept secret" },
        ],
        correctAnswer: "b",
        explanation:
          "Planning should be logical, meaning each step leads to the next[cite: 1452].",
      },
      {
        id: "bp-41",
        question: "Strategic planning helps an organization determine its:",
        options: [
          { id: "a", text: "Daily schedule" },
          { id: "b", text: "Priorities and achieve vision" },
          { id: "c", text: "Lunch breaks" },
          { id: "d", text: "Cleaning checklist" },
        ],
        correctAnswer: "b",
        explanation:
          "This framework helps determine priorities and achieve future vision[cite: 1470].",
      },
      {
        id: "bp-42",
        question:
          "Problem analysis and needs assessment are vitally important in which stage?",
        options: [
          { id: "a", text: "The end of business" },
          { id: "b", text: "Initial strategic planning phase" },
          { id: "c", text: "Hiring a security guard" },
          { id: "d", text: "Daily operations only" },
        ],
        correctAnswer: "b",
        explanation:
          "Work on needs assessment and problem analysis is vitally important in the strategic planning phase[cite: 1497].",
      },
      {
        id: "bp-43",
        question:
          "The management team's job is to integrate plans into a/an ____ organisational plan.",
        options: [
          { id: "a", text: "Secret" },
          { id: "b", text: "Coherent" },
          { id: "c", text: "Random" },
          { id: "d", text: "Unnecessary" },
        ],
        correctAnswer: "b",
        explanation:
          "The management team must integrate plans so the organisational plan is coherent[cite: 1503].",
      },
      {
        id: "bp-44",
        question:
          "There must be a/an ____ relationship between a project and its organization.",
        options: [
          { id: "a", text: "Distant" },
          { id: "b", text: "Organic" },
          { id: "c", text: "Legal only" },
          { id: "d", text: "Financial only" },
        ],
        correctAnswer: "b",
        explanation:
          "There must be an organic relationship between the project and the organization[cite: 1509].",
      },
      {
        id: "bp-45",
        question:
          "Projects should not be allowed to become separate '____' unrelated to the organization.",
        options: [
          { id: "a", text: "Houses" },
          { id: "b", text: "Empires" },
          { id: "c", text: "Businesses" },
          { id: "d", text: "Offices" },
        ],
        correctAnswer: "b",
        explanation:
          "It is important not to let projects become separate 'empires'[cite: 1520].",
      },
      {
        id: "bp-46",
        question:
          "Preparing a business plan draws on knowledge from finance, human resources, and:",
        options: [
          { id: "a", text: "Supply chain management" },
          { id: "b", text: "Geography only" },
          { id: "c", text: "History only" },
          { id: "d", text: "Art" },
        ],
        correctAnswer: "a",
        explanation:
          "Preparation draws on knowledge from finance, HR, intellectual property, and supply chain management[cite: 1536].",
      },
      {
        id: "bp-47",
        question: "A business plan is primarily a/an ____ tool.",
        options: [
          { id: "a", text: "Artistic" },
          { id: "b", text: "Decision-making" },
          { id: "c", text: "Storage" },
          { id: "d", text: "Decorative" },
        ],
        correctAnswer: "b",
        explanation: "Business plans are decision-making tools[cite: 1541].",
      },
      {
        id: "bp-48",
        question: "The format and content of the plan are determined by the:",
        options: [
          { id: "a", text: "Price of paper" },
          { id: "b", text: "Goals and audience" },
          { id: "c", text: "Number of pages" },
          { id: "d", text: "Available clip art" },
        ],
        correctAnswer: "b",
        explanation:
          "Content and format are determined by the goals and audience[cite: 1542].",
      },
      {
        id: "bp-49",
        question:
          "In the checklist, 'present rent payment' is part of which information group?",
        options: [
          { id: "a", text: "Product offering" },
          { id: "b", text: "Background of the Business" },
          { id: "c", text: "Financial considerations" },
          { id: "d", text: "Personnel" },
        ],
        correctAnswer: "b",
        explanation:
          "Rent payments are listed under Background of the Business[cite: 1569].",
      },
      {
        id: "bp-50",
        question: "Owners should be ____ involved in the planning process.",
        options: [
          { id: "a", text: "Never" },
          { id: "b", text: "Very" },
          { id: "c", text: "Slightly" },
          { id: "d", text: "Not" },
        ],
        correctAnswer: "b",
        explanation:
          "Owners should be very involved in the planning process[cite: 1551].",
      },
    ],
  },
  {
    id: "finance-and-accounting-chapter-7",
    title: "Finance and Basic Accounting Records",
    description:
      "Test your knowledge on internal and external sources of finance, accounting concepts, and financial statements for entrepreneurs.",
    icon: "Calculator",
    color: "#ff5722",
    questions: [
      {
        id: "sf-1",
        question:
          "Which source of finance refers to funds raised from within the business organization?",
        options: [
          { id: "a", text: "External Sources" },
          { id: "b", text: "Internal Sources" },
          { id: "c", text: "Merchant Banks" },
          { id: "d", text: "Debentures" },
        ],
        correctAnswer: "b",
        explanation:
          "Internal sources of finance are situations where funds are raised from within the organization[cite: 1861, 1862].",
      },
      {
        id: "sf-2",
        question:
          "Owner's investment (start-up or additional capital) is categorized as which type of finance?",
        options: [
          { id: "a", text: "Short-term" },
          { id: "b", text: "Medium-term" },
          { id: "c", text: "Long-term" },
          { id: "d", text: "Temporary" },
        ],
        correctAnswer: "c",
        explanation:
          "Owner's investment, whether for start-up or expansion, is a long-term source of finance[cite: 1866].",
      },
      {
        id: "sf-3",
        question:
          "Undistributed profit arising from the activities of the organization is known as:",
        options: [
          { id: "a", text: "Provision for tax" },
          { id: "b", text: "Retained Profit" },
          { id: "c", text: "Trade Credit" },
          { id: "d", text: "Factoring" },
        ],
        correctAnswer: "b",
        explanation:
          "Retained profit is undistributed profit arising from the activities of the organization[cite: 1867].",
      },
      {
        id: "sf-4",
        question:
          "A business can use 'Provision for Taxation' as a source of funds provided it is returned:",
        options: [
          { id: "a", text: "Within 10 years" },
          { id: "b", text: "Before the end of the financial year" },
          { id: "c", text: "After the business closes" },
          { id: "d", text: "To the shareholders as dividends" },
        ],
        correctAnswer: "b",
        explanation:
          "Money used from the tax provision should be returned before the financial year ends[cite: 1879].",
      },
      {
        id: "sf-5",
        question:
          "What is 'Debt Collection' in the context of internal finance?",
        options: [
          { id: "a", text: "Paying off bank loans" },
          { id: "b", text: "Collecting money owed by debtors" },
          { id: "c", text: "Borrowing from relatives" },
          { id: "d", text: "Selling company shares" },
        ],
        correctAnswer: "b",
        explanation:
          "A business can raise funds by collecting money owed to them from their debtors[cite: 1883].",
      },
      {
        id: "sf-6",
        question:
          "The sale of a piece of machinery that is no longer needed is a ____ internal source of finance.",
        options: [
          { id: "a", text: "Short term" },
          { id: "b", text: "Medium term" },
          { id: "c", text: "Long term" },
          { id: "d", text: "Perpetual" },
        ],
        correctAnswer: "b",
        explanation:
          "The sale of fixed assets is a medium term internal source of finance[cite: 1890].",
      },
      {
        id: "sf-7",
        question:
          "What is a major characteristic of introducing external sources of finance?",
        options: [
          { id: "a", text: "It eliminates all risk" },
          { id: "b", text: "It exposes the firm to financial risk" },
          { id: "c", text: "It is always interest-free" },
          { id: "d", text: "It comes from within the firm" },
        ],
        correctAnswer: "b",
        explanation:
          "External sources directly or indirectly expose the organization to financial risk[cite: 1897].",
      },
      {
        id: "sf-8",
        question:
          "Short-term financial obligations are defined as having a period of:",
        options: [
          { id: "a", text: "Less than or equal to one year" },
          { id: "b", text: "Exactly five years" },
          { id: "c", text: "More than seven years" },
          { id: "d", text: "Up to thirty years" },
        ],
        correctAnswer: "a",
        explanation:
          "Short term refers to financial obligations that have a period less than or equal to one year[cite: 1899].",
      },
      {
        id: "sf-9",
        question:
          "According to the text, medium-term obligations have periods ranging from:",
        options: [
          { id: "a", text: "1 month to 6 months" },
          { id: "b", text: "Beyond 1 year up to 7 years" },
          { id: "c", text: "7 years to 30 years" },
          { id: "d", text: "10 years to 50 years" },
        ],
        correctAnswer: "b",
        explanation:
          "Medium term refers to obligations with periods beyond one year up to 7 years[cite: 1901].",
      },
      {
        id: "sf-10",
        question:
          "Which of these is a risk associated with borrowing from friends and relatives?",
        options: [
          { id: "a", text: "High interest rates" },
          { id: "b", text: "Difficulty in enforcing repayment" },
          { id: "c", text: "Strict legal contracts" },
          { id: "d", text: "Bank monitoring" },
        ],
        correctAnswer: "b",
        explanation:
          "This source is risky because it might be difficult to enforce repayment against a default relative[cite: 1906].",
      },
      {
        id: "sf-11",
        question: "Borrowing from cooperatives is restricted to:",
        options: [
          { id: "a", text: "Government employees" },
          { id: "b", text: "Members of the cooperative" },
          { id: "c", text: "The general public" },
          { id: "d", text: "Large corporations" },
        ],
        correctAnswer: "b",
        explanation:
          "This source is restricted to only members of the cooperative[cite: 1908].",
      },
      {
        id: "sf-12",
        question:
          "Purchases on 'open account' without a formal collateral agreement are known as:",
        options: [
          { id: "a", text: "Bank loans" },
          { id: "b", text: "Trade Credit" },
          { id: "c", text: "Factoring" },
          { id: "d", text: "Leasing" },
        ],
        correctAnswer: "b",
        explanation:
          "Trade credits are called purchase on 'open account' and no specific assets are pledged as collateral[cite: 1919, 1920].",
      },
      {
        id: "sf-13",
        question: "In a bank overdraft arrangement, interest is charged on:",
        options: [
          { id: "a", text: "The entire overdraft limit" },
          { id: "b", text: "The amount overdrawn outstanding" },
          { id: "c", text: "The total bank deposit" },
          { id: "d", text: "The monthly revenue" },
        ],
        correctAnswer: "b",
        explanation:
          "The bank charges interest on the amount overdrawn outstanding at any given time[cite: 1928].",
      },
      {
        id: "sf-14",
        question: "Which bank typically provides medium-term borrowings?",
        options: [
          { id: "a", text: "Commercial banks" },
          { id: "b", text: "Merchant banks" },
          { id: "c", text: "Developmental banks" },
          { id: "d", text: "Microfinance banks" },
        ],
        correctAnswer: "b",
        explanation:
          "Merchant banks provide medium term borrowings[cite: 1944].",
      },
      {
        id: "sf-15",
        question: "What is 'Factoring of Debt'?",
        options: [
          { id: "a", text: "Paying suppliers early" },
          { id: "b", text: "Turning over debt collection to a specialist" },
          { id: "c", text: "Selling machinery for cash" },
          { id: "d", text: "Borrowing from the central bank" },
        ],
        correctAnswer: "b",
        explanation:
          "Factoring involves turning over the responsibility for collecting a firm debt to a specialist institution[cite: 1946].",
      },
      {
        id: "sf-16",
        question:
          "A factor will normally advance what percentage of the book value of debts?",
        options: [
          { id: "a", text: "10% - 20%" },
          { id: "b", text: "75% - 90%" },
          { id: "c", text: "100%" },
          { id: "d", text: "5% - 10%" },
        ],
        correctAnswer: "b",
        explanation:
          "The factor will normally advance about 75% - 90% of the book value of the debts[cite: 1958].",
      },
      {
        id: "sf-17",
        question:
          "A bill of exchange drawn on a bank which accepts (guarantees) it is called:",
        options: [
          { id: "a", text: "Trade bill" },
          { id: "b", text: "Bank bill" },
          { id: "c", text: "Promissory note" },
          { id: "d", text: "Debit note" },
        ],
        correctAnswer: "b",
        explanation:
          "A bank bill is a bill of exchange drawn on a bank which accept (or guarantee) them[cite: 1966].",
      },
      {
        id: "sf-18",
        question: "What are 'Accruals' in financial terms?",
        options: [
          { id: "a", text: "Prepaid rent" },
          { id: "b", text: "Amounts owing on services rendered" },
          { id: "c", text: "Cash in the bank" },
          { id: "d", text: "Profit from sales" },
        ],
        correctAnswer: "b",
        explanation:
          "Accruals are amount owing on services rendered to the firm for which payment has not been made[cite: 1973].",
      },
      {
        id: "sf-19",
        question:
          "A negotiated loan between a bank and a company for 4-10 years is called a:",
        options: [
          { id: "a", text: "Overdraft" },
          { id: "b", text: "Term Loan" },
          { id: "c", text: "Trade credit" },
          { id: "d", text: "Cash credit" },
        ],
        correctAnswer: "b",
        explanation:
          "A term loan is a negotiated loan between a bank and a company for period between 4-10 years or more[cite: 1980].",
      },
      {
        id: "sf-20",
        question:
          "In Hire Purchase, when does the purchaser possess full legal title to the asset?",
        options: [
          { id: "a", text: "At the start of the agreement" },
          { id: "b", text: "At the end of the hiring period" },
          { id: "c", text: "When the first deposit is made" },
          { id: "d", text: "After one year of use" },
        ],
        correctAnswer: "b",
        explanation:
          "Full legal title to asset will eventually passes to the company at the end of the hiring period[cite: 1992].",
      },
      {
        id: "sf-21",
        question:
          "The contract between an asset owner (lessor) and the user (lessee) is a:",
        options: [
          { id: "a", text: "Mortgage" },
          { id: "b", text: "Lease" },
          { id: "c", text: "Sale" },
          { id: "d", text: "Partnership" },
        ],
        correctAnswer: "b",
        explanation:
          "A lease is a contract between owner of an asset (lessor) and the user of the asset (lessee)[cite: 1999].",
      },
      {
        id: "sf-22",
        question: "Which type of lease is short-term and cancelable?",
        options: [
          { id: "a", text: "Finance lease" },
          { id: "b", text: "Operating lease" },
          { id: "c", text: "Sale and lease back" },
          { id: "d", text: "Long-term lease" },
        ],
        correctAnswer: "b",
        explanation:
          "In the case of operating lease, it is a short-term cancelable lease[cite: 2008].",
      },
      {
        id: "sf-23",
        question: "Long-term finance is primarily used for:",
        options: [
          { id: "a", text: "Paying daily wages" },
          { id: "b", text: "Capital investment (fixed assets)" },
          { id: "c", text: "Buying office stationery" },
          { id: "d", text: "Paying electricity bills" },
        ],
        correctAnswer: "b",
        explanation:
          "Long-term finance is used in financing capital investment i.e fixed assets[cite: 2022].",
      },
      {
        id: "sf-24",
        question: "A 'Bond' represents a method of long-term borrowing by:",
        options: [
          { id: "a", text: "Corporations or government agencies" },
          { id: "b", text: "Small street vendors" },
          { id: "c", text: "Individual households only" },
          { id: "d", text: "Charity shops" },
        ],
        correctAnswer: "a",
        explanation:
          "A bond represents a method of long-term borrowing by corporation or government agencies[cite: 2035].",
      },
      {
        id: "sf-25",
        question: "Bond holders are ____ of the corporation.",
        options: [
          { id: "a", text: "Owners" },
          { id: "b", text: "Creditors" },
          { id: "c", text: "Directors" },
          { id: "d", text: "Employees" },
        ],
        correctAnswer: "b",
        explanation:
          "Bonds holders are Creditors not owners of the Corporation[cite: 2038].",
      },
      {
        id: "sf-26",
        question: "Common share holders are sometimes referred to as:",
        options: [
          { id: "a", text: "Senior creditors" },
          { id: "b", text: "Residual owners" },
          { id: "c", text: "Bond holders" },
          { id: "d", text: "Temporary partners" },
        ],
        correctAnswer: "b",
        explanation:
          "A common stockholder sometimes referred to as a residual owner[cite: 2046].",
      },
      {
        id: "sf-27",
        question: "Which type of stock carries no voting rights?",
        options: [
          { id: "a", text: "Common stock" },
          { id: "b", text: "Preference stock" },
          { id: "c", text: "Founders stock" },
          { id: "d", text: "Ordinary stock" },
        ],
        correctAnswer: "b",
        explanation:
          "Preferred stockholders carry no voting rights as such they are not owners of a company[cite: 2056].",
      },
      {
        id: "sf-28",
        question: "In the event of liquidation, who is settled first?",
        options: [
          { id: "a", text: "Common shareholders" },
          { id: "b", text: "Bondholders" },
          { id: "c", text: "Preference shareholders" },
          { id: "d", text: "The CEO" },
        ],
        correctAnswer: "b",
        explanation:
          "In the event of liquidation, bondholders are being settled before preference shareholders[cite: 2058].",
      },
      {
        id: "sf-29",
        question: "What are basic books of accounts prepared to establish?",
        options: [
          { id: "a", text: "Legal crimes" },
          { id: "b", text: "Performance/profitability" },
          { id: "c", text: "Staff attendance" },
          { id: "d", text: "Social status" },
        ],
        correctAnswer: "b",
        explanation:
          "These are basic books of accounts that are prepared to establish performance/profitability of such businesses[cite: 2083].",
      },
      {
        id: "sf-30",
        question: "IFRS stands for:",
        options: [
          { id: "a", text: "International Finance and Revenue System" },
          { id: "b", text: "International Financial Reporting Standards" },
          { id: "c", text: "Internal Fund and Rate Standards" },
          { id: "d", text: "Independent Financial Report Statistics" },
        ],
        correctAnswer: "b",
        explanation:
          "Determination of performance is guided by International Financial Reporting Standards (IFRS)[cite: 2087].",
      },
      {
        id: "sf-31",
        question:
          "Which statement is prepared for businesses that produce the goods they sell?",
        options: [
          { id: "a", text: "Cash book" },
          { id: "b", text: "Statement of manufacturing" },
          { id: "c", text: "Sales day book" },
          { id: "d", text: "Return inward book" },
        ],
        correctAnswer: "b",
        explanation:
          "Statement of manufacturing... for businesses that engage in manufacturing activities[cite: 2089].",
      },
      {
        id: "sf-32",
        question:
          "The 'Cost Concept' holds that assets are initially recognized at:",
        options: [
          { id: "a", text: "Market value" },
          { id: "b", text: "Cost of purchase" },
          { id: "c", text: "Expected profit" },
          { id: "d", text: "Zero value" },
        ],
        correctAnswer: "b",
        explanation:
          "The cost concept holds that the basis for initial recognition of assets... is the cost of purchase[cite: 2094].",
      },
      {
        id: "sf-33",
        question:
          "Fair value is the price received to sell an asset in a/an ____ transaction.",
        options: [
          { id: "a", text: "Secret" },
          { id: "b", text: "Orderly" },
          { id: "c", text: "Forced" },
          { id: "d", text: "Illegal" },
        ],
        correctAnswer: "b",
        explanation:
          "Fair value is the price that would be received... in an orderly transaction[cite: 2097].",
      },
      {
        id: "sf-34",
        question:
          "Which concept states that revenue and expenses are recognized when they occur, not when cash moves?",
        options: [
          { id: "a", text: "Cost concept" },
          { id: "b", text: "Accrual concept" },
          { id: "c", text: "Entity concept" },
          { id: "d", text: "Going concern" },
        ],
        correctAnswer: "b",
        explanation:
          "Accrual concept: states that revenue and expenses are taking into account when they occur and not when cash is received or paid out[cite: 2098].",
      },
      {
        id: "sf-35",
        question: "The 'Going Concern' concept assumes the business will:",
        options: [
          { id: "a", text: "Close next week" },
          { id: "b", text: "Continue for the foreseeable future" },
          { id: "c", text: "Sell all its assets tomorrow" },
          { id: "d", text: "Never pay taxes" },
        ],
        correctAnswer: "b",
        explanation:
          "Going concern concept: assumed that the business... will continue to be in business for the foreseeable future[cite: 2099].",
      },
      {
        id: "sf-36",
        question: "The 'Prudence Concept' is also known as the:",
        options: [
          { id: "a", text: "Matching concept" },
          { id: "b", text: "Realization concept" },
          { id: "c", text: "Entity concept" },
          { id: "d", text: "Cost concept" },
        ],
        correctAnswer: "b",
        explanation:
          "Prudence concept... is otherwise called realization concept[cite: 2100, 2101].",
      },
      {
        id: "sf-37",
        question:
          "Which concept holds that the business is a separate legal entity from its owners?",
        options: [
          { id: "a", text: "Matching concept" },
          { id: "b", text: "Entity concept" },
          { id: "c", text: "Accrual concept" },
          { id: "d", text: "Consistence convention" },
        ],
        correctAnswer: "b",
        explanation:
          "Entity concept: holds that a business entity is considered a separate legal economic entity[cite: 2102].",
      },
      {
        id: "sf-38",
        question:
          "The 'Matching Concept' helps determine performance by recognizing revenue and expenses in the:",
        options: [
          { id: "a", text: "Different years" },
          { id: "b", text: "Same accounting period" },
          { id: "c", text: "Owner's personal account" },
          { id: "d", text: "Bank statement only" },
        ],
        correctAnswer: "b",
        explanation:
          "Matching concept: transactions... should be recognized in the same accounting period[cite: 2108].",
      },
      {
        id: "sf-39",
        question:
          "Consistency convention states that an entity should continue to use the same method except for a:",
        options: [
          { id: "a", text: "Holiday" },
          { id: "b", text: "Sound reason to do otherwise" },
          { id: "c", text: "Decrease in sales" },
          { id: "d", text: "New manager's whim" },
        ],
        correctAnswer: "b",
        explanation:
          "consistency convention... it should continue to use the same method except for a sound reason to do otherwise[cite: 2114].",
      },
      {
        id: "sf-40",
        question:
          "According to the Double Entry Principle, for every credit entry, there is a:",
        options: [
          { id: "a", text: "Profit entry" },
          { id: "b", text: "Corresponding debit entry" },
          { id: "c", text: "Tax entry" },
          { id: "d", text: "Owner drawing" },
        ],
        correctAnswer: "b",
        explanation:
          "Double Entry Principle states that in accounting, for every credit entry there is always a corresponding debit entry[cite: 2118].",
      },
      {
        id: "sf-41",
        question: "In accounting terms, Debit is denoted as:",
        options: [
          { id: "a", text: "Cr" },
          { id: "b", text: "Dr" },
          { id: "c", text: "Dt" },
          { id: "d", text: "Db" },
        ],
        correctAnswer: "b",
        explanation:
          "Debit is denoted as (Dr) while credit is denoted as (Cr)[cite: 2121].",
      },
      {
        id: "sf-42",
        question: "A debit entry accounts for an:",
        options: [
          { id: "a", text: "Increase in income" },
          { id: "b", text: "Increase in assets" },
          { id: "c", text: "Increase in liability" },
          { id: "d", text: "Increase in equity" },
        ],
        correctAnswer: "b",
        explanation:
          "Debit entries are those that account for... Increase in assets[cite: 2122, 2123].",
      },
      {
        id: "sf-43",
        question:
          "The basic accounting equation for a business that owes outsiders is:",
        options: [
          { id: "a", text: "Assets = Capital" },
          { id: "b", text: "Assets = Capital + Liabilities" },
          { id: "c", text: "Assets = Profit - Loss" },
          { id: "d", text: "Capital = Assets + Liabilities" },
        ],
        correctAnswer: "b",
        explanation:
          "Accounting equation is given as... Assets = capital + Liabilities (For businesses that owes outsiders)[cite: 2141, 2143].",
      },
      {
        id: "sf-44",
        question: "A 3-column cash book has columns for cash, bank, and:",
        options: [
          { id: "a", text: "Tax" },
          { id: "b", text: "Discount" },
          { id: "c", text: "Inventory" },
          { id: "d", text: "Debtors" },
        ],
        correctAnswer: "b",
        explanation:
          "3-column cash book-has three columns (cash, bank and discount columns)[cite: 2149].",
      },
      {
        id: "sf-45",
        question: "Which side of an account is the 'Debit Side'?",
        options: [
          { id: "a", text: "Right hand side" },
          { id: "b", text: "Left hand side" },
          { id: "c", text: "Bottom" },
          { id: "d", text: "Top" },
        ],
        correctAnswer: "b",
        explanation:
          "To debit an account means to enter the transaction figure on the left hand side[cite: 2155].",
      },
      {
        id: "sf-46",
        question: "The 'Sales Day Book' records which type of transactions?",
        options: [
          { id: "a", text: "Cash sales" },
          { id: "b", text: "Credit sales" },
          { id: "c", text: "Total expenses" },
          { id: "d", text: "Tax payments" },
        ],
        correctAnswer: "b",
        explanation:
          "Sales day book and purchase day book that respectively records credit sales and credit purchases[cite: 2164].",
      },
      {
        id: "sf-47",
        question: "What is the formula for 'Cost of raw materials consumed'?",
        options: [
          { id: "a", text: "Purchase + Sales" },
          {
            id: "b",
            text: "Purchase + Carriage inward + Closing stock - Opening stock",
          },
          {
            id: "c",
            text: "Purchase + Carriage inward + Opening stock - Closing stock",
          },
          { id: "d", text: "Direct labor + Factory rent" },
        ],
        correctAnswer: "c",
        explanation:
          "Cost of raw materials consumed = Cost of Raw material purchased + Carriage inwards + Opening inventory - Closing inventory[cite: 2194].",
      },
      {
        id: "sf-48",
        question: "Work in Progress refers to goods that are:",
        options: [
          { id: "a", text: "Fully finished" },
          { id: "b", text: "Partly manufactured" },
          { id: "c", text: "Returned by customers" },
          { id: "d", text: "Sold on credit" },
        ],
        correctAnswer: "b",
        explanation:
          "Work in Progress- are partly manufactured items or goods in various stages of production[cite: 2199].",
      },
      {
        id: "sf-49",
        question:
          "A 'Statement of Financial Position' was formerly known as the:",
        options: [
          { id: "a", text: "Profit and Loss account" },
          { id: "b", text: "Balance Sheet" },
          { id: "c", text: "Cash Flow statement" },
          { id: "d", text: "Journal" },
        ],
        correctAnswer: "b",
        explanation:
          "Statement of financial position (formerly balance sheet)[cite: 2100].",
      },
      {
        id: "sf-50",
        question: "Assets with useful economic lives that exceed one year are:",
        options: [
          { id: "a", text: "Current assets" },
          { id: "b", text: "Non-current assets" },
          { id: "c", text: "Current liabilities" },
          { id: "d", text: "Long term liabilities" },
        ],
        correctAnswer: "b",
        explanation:
          "Non-current assets: These are assets with useful economic lives that exceed one year[cite: 2264, 2265].",
      },
    ],
  },
  {
    id: "human-resource-management-chapter-8",
    title: "Human Resources Management Practices for Entrepreneurship",
    description:
      "Evaluate your understanding of human resource planning, recruitment, selection, compensation, and succession planning within an entrepreneurial framework.",
    icon: "Users",
    color: "#ff9800",
    questions: [
      {
        id: "hr-1",
        question:
          "Entrepreneurship in the 21st century requires an adequate understanding of which concept to avoid venture failure?",
        options: [
          { id: "a", text: "Financial auditing" },
          { id: "b", text: "Human Resource Planning" },
          { id: "c", text: "Machine maintenance" },
          { id: "d", text: "Inventory logistics" },
        ],
        correctAnswer: "b",
        explanation:
          "The text states that entrepreneurship in this century requires an adequate understanding of Human Resource Planning[cite: 4886].",
      },
      {
        id: "hr-2",
        question:
          "An entrepreneur is described as a passionate and powerful resource that:",
        options: [
          { id: "a", text: "Follows existing orders" },
          { id: "b", text: "Initiates ideas" },
          { id: "c", text: "Avoids all risks" },
          { id: "d", text: "Focuses only on charity" },
        ],
        correctAnswer: "b",
        explanation:
          "An entrepreneur is a passionate and powerful resource in a business setting that initiates ideas[cite: 4889].",
      },
      {
        id: "hr-3",
        question:
          "What is the primary motive behind the commitment of providing products or services in a business sense?",
        options: [
          { id: "a", text: "Social status only" },
          { id: "b", text: "Gaining profit" },
          { id: "c", text: "Family tradition" },
          { id: "d", text: "Legal requirement" },
        ],
        correctAnswer: "b",
        explanation:
          "It is a commitment for providing products or services to people that has behind it the motive of gaining profit[cite: 4891].",
      },
      {
        id: "hr-4",
        question:
          "According to Flippo (1984), what is the basic goal of Human Resource Planning?",
        options: [
          { id: "a", text: "To record past failures" },
          {
            id: "b",
            text: "To predict the future and avoid anticipated problems",
          },
          { id: "c", text: "To increase machine speed" },
          { id: "d", text: "To reduce employee salaries" },
        ],
        correctAnswer: "b",
        explanation:
          "The basic goal of human resource planning is to predict the future and implement programmes to avoid anticipated problems[cite: 4899].",
      },
      {
        id: "hr-5",
        question:
          "Recruitment is defined in the text as a process that starts with ____ and ends with placement.",
        options: [
          { id: "a", text: "Training" },
          { id: "b", text: "Selection" },
          { id: "c", text: "Resignation" },
          { id: "d", text: "Advertisement" },
        ],
        correctAnswer: "b",
        explanation:
          "Recruitment forms a step in the process which starts with selection and ends with the placement of the candidate[cite: 4903].",
      },
      {
        id: "hr-6",
        question: "How do Mamoria and Gankar (2002) view recruitment?",
        options: [
          { id: "a", text: "As a legal burden" },
          { id: "b", text: "As a form of competition" },
          { id: "c", text: "As a purely social activity" },
          { id: "d", text: "As a random selection" },
        ],
        correctAnswer: "b",
        explanation:
          "Mamoria and Gankar (2002) opine that recruitment is a form of competition to identify and hire the most qualified people[cite: 4905].",
      },
      {
        id: "hr-7",
        question:
          "Which of these is an INTERNAL factor that affects organizational recruitment?",
        options: [
          { id: "a", text: "Labour market supply" },
          { id: "b", text: "Age composition of existing force" },
          { id: "c", text: "External cultural factors" },
          { id: "d", text: "Political legislation" },
        ],
        correctAnswer: "b",
        explanation:
          "Internal factors include the age composition of the existing working force[cite: 4919].",
      },
      {
        id: "hr-8",
        question:
          "Cultural checks, such as limitations on recruiting women for certain jobs, are considered ____ factors.",
        options: [
          { id: "a", text: "Internal" },
          { id: "b", text: "External" },
          { id: "c", text: "Financial" },
          { id: "d", text: "Technical" },
        ],
        correctAnswer: "b",
        explanation:
          "External cultural factors may exert considerable checks on recruitment, such as gender-based roles in industry [cite: 4927-4928].",
      },
      {
        id: "hr-9",
        question:
          "Selection is the process of choosing people by assessing information to match them with:",
        options: [
          { id: "a", text: "Their family background" },
          { id: "b", text: "Job requirements" },
          { id: "c", text: "The company's logo" },
          { id: "d", text: "Competitor salaries" },
        ],
        correctAnswer: "b",
        explanation:
          "Selection is the process of choosing people by obtaining and assessing information with a view to matching these with job requirements[cite: 4937].",
      },
      {
        id: "hr-10",
        question:
          "What is the purpose of preliminary screening in the selection process?",
        options: [
          { id: "a", text: "To increase the application pool" },
          {
            id: "b",
            text: "To eliminate applicants who do not meet basic qualifications",
          },
          { id: "c", text: "To offer final job contracts" },
          { id: "d", text: "To conduct physical exams" },
        ],
        correctAnswer: "b",
        explanation:
          "Scrutiny is done by the personnel department to eliminate those applicants who do not meet required qualifications or technical skills[cite: 4941].",
      },
      {
        id: "hr-11",
        question:
          "Which device is used for getting preliminary information and aids in indicating areas for interview discussion?",
        options: [
          { id: "a", text: "Selection test" },
          { id: "b", text: "Application Blank (Form)" },
          { id: "c", text: "Physical exam" },
          { id: "d", text: "Exit interview" },
        ],
        correctAnswer: "b",
        explanation:
          "An application blank is a traditional device for getting information and aids the interview by indicating areas of interest [cite: 4942-4943].",
      },
      {
        id: "hr-12",
        question:
          "What information can Selection Tests provide that cannot be known by application forms alone?",
        options: [
          { id: "a", text: "Home address" },
          { id: "b", text: "Aptitude and personality" },
          { id: "c", text: "Educational history" },
          { id: "d", text: "Previous job titles" },
        ],
        correctAnswer: "b",
        explanation:
          "Selection tests may give information about aptitude, interest, and personality, which cannot be known by application forms[cite: 4947].",
      },
      {
        id: "hr-13",
        question:
          "In selection, the formal in-depth conversation to evaluate suitability is called the:",
        options: [
          { id: "a", text: "Selection Test" },
          { id: "b", text: "Interview" },
          { id: "c", text: "Preliminary Screening" },
          { id: "d", text: "Audit" },
        ],
        correctAnswer: "b",
        explanation:
          "The interviewer does a formal in-depth conversation with the applicant to evaluate his suitability[cite: 4950].",
      },
      {
        id: "hr-14",
        question: "Why is Background Investigation performed?",
        options: [
          { id: "a", text: "To increase costs" },
          { id: "b", text: "To confirm the claims of potential employees" },
          { id: "c", text: "To hire relatives" },
          { id: "d", text: "To check market trends" },
        ],
        correctAnswer: "b",
        explanation:
          "Background investigation is needed to confirm the claims of potential employees, including contacting former employers [cite: 4953-4954].",
      },
      {
        id: "hr-15",
        question: "When should the candidate undergo a physical examination?",
        options: [
          { id: "a", text: "Before the application is submitted" },
          {
            id: "b",
            text: "After the selection decision but before the job offer",
          },
          { id: "c", text: "Only after five years of service" },
          { id: "d", text: "During the first recruitment stage" },
        ],
        correctAnswer: "b",
        explanation:
          "After the selection decision and before the job offer is made, the candidate is required to undergo physical fitness test[cite: 4960].",
      },
      {
        id: "hr-16",
        question: "The final employment decision is usually formalized in an:",
        options: [
          { id: "a", text: "Application form" },
          { id: "b", text: "Appointment letter" },
          { id: "c", text: "Audit report" },
          { id: "d", text: "Reference check" },
        ],
        correctAnswer: "b",
        explanation:
          "The management offers employment in the form of an appointment letter mentioning the post and rank[cite: 4971].",
      },
      {
        id: "hr-17",
        question:
          "Who should conduct a periodic audit to evaluate the effectiveness of the selection process?",
        options: [
          { id: "a", text: "The HR Director" },
          { id: "b", text: "Independent people outside the HR department" },
          { id: "c", text: "The new employees" },
          { id: "d", text: "Government officials only" },
        ],
        correctAnswer: "b",
        explanation:
          "A periodic audit, conducted by people who work independently of the human resource department, will evaluate effectiveness[cite: 4973].",
      },
      {
        id: "hr-18",
        question:
          "Placement consists of matching the new employee's ability with job demands, offering, and:",
        options: [
          { id: "a", text: "Family heritage" },
          { id: "b", text: "Imposed strain/working conditions" },
          { id: "c", text: "Competitor secrets" },
          { id: "d", text: "Legal litigation" },
        ],
        correctAnswer: "b",
        explanation:
          "Placement matches what the employee can do with job demands and what it imposes in strain and working conditions[cite: 4980].",
      },
      {
        id: "hr-19",
        question: "Employee training is a process of learning a sequence of:",
        options: [
          { id: "a", text: "Random actions" },
          { id: "b", text: "Programmed behaviour" },
          { id: "c", text: "Leisure activities" },
          { id: "d", text: "Investment tactics" },
        ],
        correctAnswer: "b",
        explanation:
          "Training is a process of learning a sequence of programmed behaviour[cite: 4983].",
      },
      {
        id: "hr-20",
        question: "What is a key benefit of training regarding management?",
        options: [
          { id: "a", text: "It requires more managers" },
          { id: "b", text: "Less supervision is needed" },
          { id: "c", text: "It eliminates the CEO" },
          { id: "d", text: "It stops all communication" },
        ],
        correctAnswer: "b",
        explanation:
          "A well-trained employee will be well acquainted with the job and will need less supervision[cite: 4995].",
      },
      {
        id: "hr-21",
        question:
          "Training reduces the chances of errors and proficiency prevents ____ on the job.",
        options: [
          { id: "a", text: "Salaries" },
          { id: "b", text: "Accidents" },
          { id: "c", text: "Promotions" },
          { id: "d", text: "Holidays" },
        ],
        correctAnswer: "b",
        explanation:
          "The more trained an employee is, the less are the chances of committing accidents in job[cite: 4998].",
      },
      {
        id: "hr-22",
        question:
          "Which type of training is considered most effective for vocational work?",
        options: [
          { id: "a", text: "Off-the-job training" },
          { id: "b", text: "On-the-job training" },
          { id: "c", text: "Self-study only" },
          { id: "d", text: "External workshops" },
        ],
        correctAnswer: "b",
        explanation:
          "On-the-job training has a general reputation as most effective for vocational work[cite: 5006].",
      },
      {
        id: "hr-23",
        question: "Off-the-job training is more effective for inculcating:",
        options: [
          { id: "a", text: "Manual speed" },
          { id: "b", text: "Concepts and ideas" },
          { id: "c", text: "Physical strength" },
          { id: "d", text: "Machine repairs" },
        ],
        correctAnswer: "b",
        explanation:
          "This type of training has proven more effective in inculcating concepts and ideas[cite: 5009].",
      },
      {
        id: "hr-24",
        question:
          "The objective of a sound compensation system is to establish and maintain a/an:",
        options: [
          { id: "a", text: "Unequal system" },
          { id: "b", text: "Equitable rewards system" },
          { id: "c", text: "Secret pay structure" },
          { id: "d", text: "Minimal debt system" },
        ],
        correctAnswer: "b",
        explanation:
          "The basic purpose or objective of sound compensation is to establish and maintain an equitable rewards system[cite: 5016].",
      },
      {
        id: "hr-25",
        question: "Paying employees according to job requirements eliminates:",
        options: [
          { id: "a", text: "Skilled labor" },
          { id: "b", text: "Inequalities" },
          { id: "c", text: "Promotions" },
          { id: "d", text: "Profit" },
        ],
        correctAnswer: "b",
        explanation:
          "Employees are paid according to requirements of their jobs... this eliminates inequalities [cite: 5032-5033].",
      },
      {
        id: "hr-26",
        question:
          "Compensation planning is influenced by the firm's prosperity, also known as:",
        options: [
          { id: "a", text: "Legislation" },
          { id: "b", text: "Ability to Pay" },
          { id: "c", text: "Supply of labour" },
          { id: "d", text: "Worker philosophy" },
        ],
        correctAnswer: "b",
        explanation:
          "Ability to pay is based on the firm's prosperity[cite: 5048].",
      },
      {
        id: "hr-27",
        question:
          "Which term refers to the monthly rate of pay irrespective of hours worked?",
        options: [
          { id: "a", text: "Wages" },
          { id: "b", text: "Salary" },
          { id: "c", text: "Incentive" },
          { id: "d", text: "Bonus" },
        ],
        correctAnswer: "b",
        explanation:
          "Salary refers to monthly rate of pay irrespective of the number of hours worked[cite: 5052].",
      },
      {
        id: "hr-28",
        question:
          "Payments by results, such as those based on sales or profit, are called:",
        options: [
          { id: "a", text: "Wages" },
          { id: "b", text: "Incentives" },
          { id: "c", text: "Fringe benefits" },
          { id: "d", text: "Salaries" },
        ],
        correctAnswer: "b",
        explanation:
          "Incentives are also known as payment by results and depend upon productivity, sales, or profit [cite: 5058-5059].",
      },
      {
        id: "hr-29",
        question: "Provident fund, medical care, and uniforms are examples of:",
        options: [
          { id: "a", text: "Wages" },
          { id: "b", text: "Fringe Benefits" },
          { id: "c", text: "Non-monetary benefits" },
          { id: "d", text: "Core salary" },
        ],
        correctAnswer: "b",
        explanation:
          "Fringe Benefits are given in forms such as provident fund, medical care, canteen, uniform etc[cite: 5060].",
      },
      {
        id: "hr-30",
        question:
          "Performance appraisal is the systematic assessment of an individual's job performance and:",
        options: [
          { id: "a", text: "Personal wealth" },
          { id: "b", text: "Potential for development" },
          { id: "c", text: "Family background" },
          { id: "d", text: "Political views" },
        ],
        correctAnswer: "b",
        explanation:
          "Performance appraisal is the assessment of performance on the job and potential for development in that job[cite: 5063].",
      },
      {
        id: "hr-31",
        question: "The appraisal is systematic when it remove human:",
        options: [
          { id: "a", text: "Skills" },
          { id: "b", text: "Biases and prejudices" },
          { id: "c", text: "Communication" },
          { id: "d", text: "Potential" },
        ],
        correctAnswer: "b",
        explanation:
          "Its important aspect is that it attempts at precise measurement by trying to remove human biases and prejudices[cite: 5068].",
      },
      {
        id: "hr-32",
        question:
          "Which method ranks employees from worst to best based on personality traits?",
        options: [
          { id: "a", text: "Grading Method" },
          { id: "b", text: "Ranking Method" },
          { id: "c", text: "Check-list Method" },
          { id: "d", text: "Paired Comparison" },
        ],
        correctAnswer: "b",
        explanation:
          "By the ranking method, the employee is ranked from highest to lowest or from worst to best [cite: 5085-5086].",
      },
      {
        id: "hr-33",
        question:
          "In the Paired Comparison method, the rater ticks names on slips to determine:",
        options: [
          { id: "a", text: "Salaries" },
          { id: "b", text: "Who is better between two" },
          { id: "c", text: "Who should be fired" },
          { id: "d", text: "Office location" },
        ],
        correctAnswer: "b",
        explanation:
          "The rater puts a tick mark next to those employees whom he considers to be the better of the two[cite: 5088].",
      },
      {
        id: "hr-34",
        question:
          "A major limitation of the Grading Method is that raters may rate many employees on the:",
        options: [
          { id: "a", text: "Worst side" },
          { id: "b", text: "Better side" },
          { id: "c", text: "Random side" },
          { id: "d", text: "Alphabetical side" },
        ],
        correctAnswer: "b",
        explanation:
          "One limitation of this method is that the rater may rate many employees on the better side of their performance[cite: 5093].",
      },
      {
        id: "hr-35",
        question:
          "The Check-list Method consists of a series of questions related to the:",
        options: [
          { id: "a", text: "Competitor" },
          { id: "b", text: "Appraisee" },
          { id: "c", text: "Customer" },
          { id: "d", text: "Supplier" },
        ],
        correctAnswer: "b",
        explanation:
          "The evaluator is provided with a report which consists of series of questions related to the appraisee[cite: 5094].",
      },
      {
        id: "hr-36",
        question: "The first step in the Performance Appraisal process is:",
        options: [
          { id: "a", text: "Measurement of performance" },
          { id: "b", text: "Establishment of Performance Standards" },
          { id: "c", text: "Discussion with employee" },
          { id: "d", text: "Corrective action" },
        ],
        correctAnswer: "b",
        explanation:
          "The process begins by establishing performance standards, i.e., what is expected in terms of output[cite: 5098].",
      },
      {
        id: "hr-37",
        question: "Communication in performance appraisal is described as a:",
        options: [
          { id: "a", text: "One-way street" },
          { id: "b", text: "Two-way street" },
          { id: "c", text: "Secret path" },
          { id: "d", text: "Waste of time" },
        ],
        correctAnswer: "b",
        explanation:
          "Communication is said to be a two-way street; passing information to a subordinate doesn't mean work is done[cite: 5102].",
      },
      {
        id: "hr-38",
        question:
          "Personal observation, statistical reports, and oral reports are used to:",
        options: [
          { id: "a", text: "Set standards" },
          { id: "b", text: "Measure actual performance" },
          { id: "c", text: "Fire staff" },
          { id: "d", text: "Calculate taxes" },
        ],
        correctAnswer: "b",
        explanation:
          "Measurement is done from personal observation, statistical reports, oral reports, and written reports[cite: 5103].",
      },
      {
        id: "hr-39",
        question:
          "Which corrective action gets to the source of deviation to adjust differences permanently?",
        options: [
          { id: "a", text: "Instant action" },
          { id: "b", text: "Basic action" },
          { id: "c", text: "Random action" },
          { id: "d", text: "Temporary action" },
        ],
        correctAnswer: "b",
        explanation:
          "Basic corrective action gets to the source from where deviation has taken place to adjust differences permanently[cite: 5119].",
      },
      {
        id: "hr-40",
        question:
          "Discipline is used in organizations to handle human weaknesses and control:",
        options: [
          { id: "a", text: "Financial profit" },
          { id: "b", text: "Unethical behaviours" },
          { id: "c", text: "Legal patents" },
          { id: "d", text: "Market trends" },
        ],
        correctAnswer: "b",
        explanation:
          "Discipline is a good way of checking and controlling unethical behaviours among personnel[cite: 5124].",
      },
      {
        id: "hr-41",
        question:
          "Uniform discipline application across all staff categories requires ____ from the entrepreneur.",
        options: [
          { id: "a", text: "Money" },
          { id: "b", text: "Courage" },
          { id: "c", text: "Silence" },
          { id: "d", text: "Anger" },
        ],
        correctAnswer: "b",
        explanation:
          "Same discipline should apply to all categories once a borderline is crossed, which calls for courage[cite: 5128].",
      },
      {
        id: "hr-42",
        question:
          "Which of these is NOT listed as a way of discipline in the text?",
        options: [
          { id: "a", text: "Suspension" },
          { id: "b", text: "Cash reward" },
          { id: "c", text: "Total dismissal" },
          { id: "d", text: "Loss of promotion" },
        ],
        correctAnswer: "b",
        explanation:
          "Ways of discipline include suspension, dismissal, and loss of promotion, not cash rewards [cite: 5130-5141].",
      },
      {
        id: "hr-43",
        question:
          "Succession planning addresses the ability of the venture to continue if the ____ is not around.",
        options: [
          { id: "a", text: "Banker" },
          { id: "b", text: "Brain behind the venture" },
          { id: "c", text: "Competitor" },
          { id: "d", text: "Youngest employee" },
        ],
        correctAnswer: "b",
        explanation:
          "Succession planning is necessary if the 'brain behind the venture' is no longer around[cite: 5147].",
      },
      {
        id: "hr-44",
        question:
          "A succession plan should be communicated to everyone and probably documented with:",
        options: [
          { id: "a", text: "The neighbors" },
          { id: "b", text: "Company lawyers" },
          { id: "c", text: "The police" },
          { id: "d", text: "The tax office" },
        ],
        correctAnswer: "b",
        explanation:
          "The plan is documented and probably kept with the company lawyers[cite: 4149].",
      },
      {
        id: "hr-45",
        question: "In succession planning, the first step is to:",
        options: [
          { id: "a", text: "Identify competencies" },
          { id: "b", text: "Identify critical positions" },
          { id: "c", text: "Document the plan" },
          { id: "d", text: "Evaluate effectiveness" },
        ],
        correctAnswer: "b",
        explanation:
          "Step 1 of the succession planning process is to identify critical positions[cite: 5155].",
      },
      {
        id: "hr-46",
        question:
          "Position profiling helps employees understand key responsibilities and required:",
        options: [
          { id: "a", text: "Hobbies" },
          { id: "b", text: "Competencies" },
          { id: "c", text: "Wealth status" },
          { id: "d", text: "Home locations" },
        ],
        correctAnswer: "b",
        explanation:
          "Position profiling helps employees understand technical and behavioural competencies required[cite: 5160].",
      },
      {
        id: "hr-47",
        question: "Developing internal talent pools is a part of:",
        options: [
          { id: "a", text: "Discipline" },
          { id: "b", text: "Succession management strategies" },
          { id: "c", text: "Orientation" },
          { id: "d", text: "Background investigation" },
        ],
        correctAnswer: "b",
        explanation:
          "Strategies include developing internal talent pools, on boarding, and recruitment[cite: 5162].",
      },
      {
        id: "hr-48",
        question:
          "A mechanism for clearly defining timelines, roles, and responsibilities in succession is the:",
        options: [
          { id: "a", text: "Interview slip" },
          { id: "b", text: "Action plan" },
          { id: "c", text: "Reference check" },
          { id: "d", text: "Medical report" },
        ],
        correctAnswer: "b",
        explanation:
          "The succession planning action plan provides a mechanism for defining timelines and roles[cite: 5166].",
      },
      {
        id: "hr-49",
        question: "The final stage of the succession planning process is to:",
        options: [
          { id: "a", text: "Identify positions" },
          { id: "b", text: "Evaluate Effectiveness" },
          { id: "c", text: "Profile competencies" },
          { id: "d", text: "Hire externally" },
        ],
        correctAnswer: "b",
        explanation:
          "The final stage is to evaluate effectiveness by monitoring workforce data and making adjustments[cite: 5169].",
      },
      {
        id: "hr-50",
        question:
          "What determines success in entrepreneurship regarding long-term survival?",
        options: [
          { id: "a", text: "Having the most machines" },
          {
            id: "b",
            text: "Ability of the venture to continue without the founder",
          },
          { id: "c", text: "Ignoring all uncertainties" },
          { id: "d", text: "Eliminating HR planning" },
        ],
        correctAnswer: "b",
        explanation:
          "A major factor that determines success is the ability of the venture to continue irrespective of whether the brain behind it is around[cite: 5147].",
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
