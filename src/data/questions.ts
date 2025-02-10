import { professors, Professor } from './professors';
import { subjects, Subject } from './subjects';

interface Question {
  id: string;
  text: string;
  options: string[];
}

interface QuestionSet {
  professorId: string;
  subjectCode: string;
  questions: Question[];
}

const questionSets: QuestionSet[] = [
  {
    professorId: 'prof1',
    subjectCode: 'MAT5001',
    questions: [
      {
        id: 'q1-mat5001-prof1',
        text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-mat5001-prof1',
        text: 'Was the course material for Applied Statistics well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-mat5001-prof1',
        text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-mat5001-prof1',
        text: 'How engaging were Dr. Rajesh Kumar\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-mat5001-prof1',
        text: 'Would you recommend the Applied Statistics course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof1',
    subjectCode: 'ENG5001',
    questions: [
      {
        id: 'q1-eng5001-prof1',
        text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-eng5001-prof1',
        text: 'Was the course material for Basics of Communication well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-eng5001-prof1',
        text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-eng5001-prof1',
        text: 'How engaging were Dr. Rajesh Kumar\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-eng5001-prof1',
        text: 'Would you recommend the Basics of Communication course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof1',
    subjectCode: 'CSE5042',
    questions: [
      {
        id: 'q1-cse5042-prof1',
        text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5042-prof1',
        text: 'Was the course material for Blockchain Technology and Applications well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5042-prof1',
        text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5042-prof1',
        text: 'How engaging were Dr. Rajesh Kumar\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5042-prof1',
        text: 'Would you recommend the Blockchain Technology and Applications course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof2',
    subjectCode: 'CSE5007',
    questions: [
      {
        id: 'q1-cse5007-prof2',
        text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?',
        options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'],
      },
      {
        id: 'q2-cse5007-prof2',
        text: 'Did Dr. Priya Sharma provide timely feedback on assignments?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5007-prof2',
        text: 'How approachable was Dr. Priya Sharma for questions and clarifications?',
        options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'],
      },
      {
        id: 'q4-cse5007-prof2',
        text: 'How well did Dr. Priya Sharma explain complex concepts?',
        options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'],
      },
      {
        id: 'q5-cse5007-prof2',
        text: 'Would you recommend the Software Development Framework course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof2',
    subjectCode: 'PSY5101',
    questions: [
      {
        id: 'q1-psy5101-prof2',
        text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?',
        options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'],
      },
      {
        id: 'q2-psy5101-prof2',
        text: 'Did Dr. Priya Sharma provide timely feedback on assignments?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-psy5101-prof2',
        text: 'How approachable was Dr. Priya Sharma for questions and clarifications?',
        options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'],
      },
      {
        id: 'q4-psy5101-prof2',
        text: 'How well did Dr. Priya Sharma explain complex concepts?',
        options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'],
      },
      {
        id: 'q5-psy5101-prof2',
        text: 'Would you recommend the Self Development and Interpersonal Skills course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof2',
    subjectCode: 'CSE5013',
    questions: [
      {
        id: 'q1-cse5013-prof2',
        text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?',
        options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'],
      },
      {
        id: 'q2-cse5013-prof2',
        text: 'Did Dr. Priya Sharma provide timely feedback on assignments?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5013-prof2',
        text: 'How approachable was Dr. Priya Sharma for questions and clarifications?',
        options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'],
      },
      {
        id: 'q4-cse5013-prof2',
        text: 'How well did Dr. Priya Sharma explain complex concepts?',
        options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'],
      },
      {
        id: 'q5-cse5013-prof2',
        text: 'Would you recommend the C# and .NET Framework course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof3',
    subjectCode: 'CSE5070',
    questions: [
      {
        id: 'q1-cse5070-prof3',
        text: 'How would you rate Dr. Amit Patel\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5070-prof3',
        text: 'Was the course material for Programming Language - Python well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5070-prof3',
        text: 'Did Dr. Amit Patel provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5070-prof3',
        text: 'How engaging were Dr. Amit Patel\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5070-prof3',
        text: 'Would you recommend the Programming Language - Python course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof3',
    subjectCode: 'CSE5003',
    questions: [
      {
        id: 'q1-cse5003-prof3',
        text: 'How would you rate Dr. Amit Patel\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5003-prof3',
        text: 'Was the course material for Advanced Computer Architecture and Organization well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5003-prof3',
        text: 'Did Dr. Amit Patel provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5003-prof3',
        text: 'How engaging were Dr. Amit Patel\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5003-prof3',
        text: 'Would you recommend the Advanced Computer Architecture and Organization course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof3',
    subjectCode: 'CSE5034',
    questions: [
      {
        id: 'q1-cse5034-prof3',
        text: 'How would you rate Dr. Amit Patel\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5034-prof3',
        text: 'Was the course material for DevOps Orchestration well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5034-prof3',
        text: 'Did Dr. Amit Patel provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5034-prof3',
        text: 'How engaging were Dr. Amit Patel\'s lectures?',
        options: [' Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5034-prof3',
        text: 'Would you recommend the DevOps Orchestration course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof4',
    subjectCode: 'CSE5122',
    questions: [
      {
        id: 'q1-cse5122-prof4',
        text: 'How would you rate Dr. Sneha Gupta\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5122-prof4',
        text: 'Was the course material for Database Management System well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5122-prof4',
        text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5122-prof4',
        text: 'How engaging were Dr. Sneha Gupta\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5122-prof4',
        text: 'Would you recommend the Database Management System course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof4',
    subjectCode: 'CSE5004',
    questions: [
      {
        id: 'q1-cse5004-prof4',
        text: 'How would you rate Dr. Sneha Gupta\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5004-prof4',
        text: 'Was the course material for Distributed Operating System well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5004-prof4',
        text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5004-prof4',
        text: 'How engaging were Dr. Sneha Gupta\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5004-prof4',
        text: 'Would you recommend the Distributed Operating System course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof5',
    subjectCode: 'CSE5124',
    questions: [
      {
        id: 'q1-cse5124-prof5',
        text: 'How would you rate Dr. Arun Singh\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5124-prof5',
        text: 'Was the course material for Data Communication and Computer Networks well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5124-prof5',
        text: 'Did Dr. Arun Singh provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5124-prof5',
        text: 'How engaging were Dr. Arun Singh\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5124-prof5',
        text: 'Would you recommend the Data Communication and Computer Networks course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof5',
    subjectCode: 'MGT5101',
    questions: [
      {
        id: 'q1-mgt5101-prof5',
        text: 'How would you rate Dr. Arun Singh\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-mgt5101-prof 5',
        text: 'Was the course material for Digital Entrepreneurship Skills well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-mgt5101-prof5',
        text: 'Did Dr. Arun Singh provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-mgt5101-prof5',
        text: 'How engaging were Dr. Arun Singh\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-mgt5101-prof5',
        text: 'Would you recommend the Digital Entrepreneurship Skills course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof6',
    subjectCode: 'CSE5126',
    questions: [
      {
        id: 'q1-cse5126-prof6',
        text: 'How would you rate Dr. Maya Verma\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5126-prof6',
        text: 'Was the course material for Introduction to Data Science well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5126-prof6',
        text: 'Did Dr. Maya Verma provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5126-prof6',
        text: 'How engaging were Dr. Maya Verma\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5126-prof6',
        text: 'Would you recommend the Introduction to Data Science course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof6',
    subjectCode: 'CSE5049',
    questions: [
      {
        id: 'q1-cse5049-prof6',
        text: 'How would you rate Dr. Maya Verma\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5049-prof6',
        text: 'Was the course material for Business Analytics well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5049-prof6',
        text: 'Did Dr. Maya Verma provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5049-prof6',
        text: 'How engaging were Dr. Maya Verma\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5049-prof6',
        text: 'Would you recommend the Business Analytics course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof7',
    subjectCode: 'CSE6003',
    questions: [
      {
        id: 'q1-cse6003-prof7',
        text: 'How would you rate Dr. Rahul Mehta\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse6003-prof7',
        text: 'Was the course material for Seminar well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse6003-prof7',
        text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse6003-prof7',
        text: 'How engaging were Dr. Rahul Mehta\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse6003-prof7',
        text: 'Would you recommend the Seminar course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof7',
    subjectCode: 'CSE5001',
    questions: [
      {
        id: 'q1-cse5001-prof7',
        text: 'How would you rate Dr. Rahul Mehta\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5001-prof7',
        text: 'Was the course material for Data Structures Using Python well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5001-prof7',
        text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5001-prof7',
        text: 'How engaging were Dr. Rahul Mehta\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5001-prof7',
        text: 'Would you recommend the Data Structures Using Python course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof8',
    subjectCode: 'FRE1001',
    questions: [
      {
        id: 'q1-fre1001-prof8',
        text: 'How would you rate Dr. Anita Desai\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-fre1001-prof8',
        text: 'Was the course material for Basic French well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-fre1001-prof8',
        text: 'Did Dr. Anita Desai provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-fre1001-prof8',
        text: 'How engaging were Dr. Anita Desai\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-fre1001-prof8',
        text: 'Would you recommend the Basic French course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof8',
    subjectCode: 'CSE5018',
    questions: [
      {
        id: 'q1-cse5018-prof8',
        text: 'How would you rate Dr. Anita Desai\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5018-prof8',
        text: 'Was the course material for Big Data Framework well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q3-cse5018-prof8',
        text: 'Did Dr. Anita Desai provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5018-prof8',
        text: 'How engaging were Dr. Anita Desai\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5018-prof8',
        text: 'Would you recommend the Big Data Framework course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
  {
    professorId: 'prof8',
    subjectCode: 'CSE5002',
    questions: [
      {
        id: 'q1-cse5002-prof8',
        text: 'How would you rate Dr. Anita Desai\'s teaching style?',
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'q2-cse5002-prof8',
        text: 'Was the course material for Algorithm Design for Computer Application well-organized and easy to understand?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
 id: 'q3-cse5002-prof8',
        text: 'Did Dr. Anita Desai provide sufficient support and feedback?',
        options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'],
      },
      {
        id: 'q4-cse5002-prof8',
        text: 'How engaging were Dr. Anita Desai\'s lectures?',
        options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'],
      },
      {
        id: 'q5-cse5002-prof8',
        text: 'Would you recommend the Algorithm Design for Computer Application course to other students?',
        options: ['Yes', 'Maybe', 'No', 'Definitely Not'],
      },
    ],
  },
];

export const getQuestionsForSubject = (professorId: string, subjectCode: string): Question[] => {
  const questionSet = questionSets.find(
    (set) => set.professorId === professorId && set.subjectCode === subjectCode
  );
  return questionSet ? questionSet.questions : [];
};
