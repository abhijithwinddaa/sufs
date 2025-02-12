import { professors, Professor } from './professors';
import { subjects, Subject } from './subjects';

interface Question {
  id: string;
  text: string;
  options: string[];
}

// Use a Map for efficient lookup by professorId and subjectCode
const questionSets = new Map<string, Map<string, Question[]>>();

questionSets.set('prof1', new Map([
  ['MAT5001', [
    { id: 'q1-mat5001-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-mat5001-prof1', text: 'Was the course material for Applied Statistics well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-mat5001-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-mat5001-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-mat5001-prof1', text: 'Would you recommend the Applied Statistics course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['ENG5001', [
    { id: 'q1-eng5001-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-eng5001-prof1', text: 'Was the course material for Basics of Communication well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-eng5001-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-eng5001-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-eng5001-prof1', text: 'Would you recommend the Basics of Communication course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5042', [
    { id: 'q1-cse5042-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5042-prof1', text: 'Was the course material for Blockchain Technology and Applications well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5042-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5042-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5042-prof1', text: 'Would you recommend the Blockchain Technology and Applications course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5011', [
    { id: 'q1-cse5011-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5011-prof1', text: 'Was the course material for Advanced Java Programming well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5011-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5011-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5011-prof1', text: 'Would you recommend the Advanced Java Programming course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
]));

questionSets.set('prof2', new Map([
  ['CSE5007', [
    { id: 'q1-cse5007-prof2', text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'] },
    { id: 'q2-cse5007-prof2', text: 'Did Dr. Priya Sharma provide timely feedback on assignments?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5007-prof2', text: 'How approachable was Dr. Priya Sharma for questions and clarifications?', options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'] },
    { id: 'q4-cse5007-prof2', text: 'How well did Dr. Priya Sharma explain complex concepts?', options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'] },
    { id: 'q5-cse5007-prof2', text: 'Would you recommend the Software Development Framework course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['PSY5101', [
    { id: 'q1-psy5101-prof2', text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'] },
    { id: 'q2-psy5101-prof2', text: 'Did Dr. Priya Sharma provide timely feedback on assignments?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-psy5101-prof2', text: 'How approachable was Dr. Priya Sharma for questions and clarifications?', options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'] },
    { id: 'q4-psy5101-prof2', text: 'How well did Dr. Priya Sharma explain complex concepts?', options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'] },
    { id: 'q5-psy5101-prof2', text: 'Would you recommend the Self Development and Interpersonal Skills course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5013', [
    { id: 'q1-cse5013-prof2', text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'] },
    { id: 'q2-cse5013-prof2', text: 'Did Dr. Priya Sharma provide timely feedback on assignments?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5013-prof2', text: 'How approachable was Dr. Priya Sharma for questions and clarifications?', options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'] },
    { id: 'q4-cse5013-prof2', text: 'How well did Dr. Priya Sharma explain complex concepts?', options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'] },
    { id: 'q5-cse5013-prof2', text: 'Would you recommend the C# and .NET Framework course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
]));

questionSets.set('prof3', new Map([
  ['CSE5070', [
    { id: 'q1-cse5070-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5070-prof3', text: 'Was the course material for Programming Language - Python well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5070-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5070-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5070-prof3', text: 'Would you recommend the Programming Language - Python course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5003', [
    { id: 'q1-cse5003-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5003-prof3', text: 'Was the course material for Advanced Computer Architecture and Organization well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5003-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5003-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5003-prof3', text: 'Would you recommend the Advanced Computer Architecture and Organization course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5034', [
    { id: 'q1-cse5034-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5034-prof3', text: 'Was the course material for DevOps Orchestration well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5034-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5034-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5034-prof3', text: 'Would you recommend the DevOps Orchestration course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5029', [
    { id: 'q1-cse5029-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5029-prof3', text: 'Was the course material for Advanced Machine Learning well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5029-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5029-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5029-prof3', text: 'Would you recommend the Advanced Machine Learning course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
]));

questionSets.set('prof4', new Map([
  ['CSE5122', [
    { id: 'q1-cse5122-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5122-prof4', text: 'Was the course material for Database Management System well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5122-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5122-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5122-prof4', text: 'Would you recommend the Database Management System course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5004', [
    { id: 'q1-cse5004-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5004-prof4', text: 'Was the course material for Distributed Operating System well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5004-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5004-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5004-prof4', text: 'Would you recommend the Distributed Operating System course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5016', [
    { id: 'q1-cse5016-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5016-prof4', text: 'Was the course material for Data Mining and Predictive well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5016-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5016-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5016-prof4', text: 'Would you recommend the Data Mining and Predictive course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5024', [
    { id: 'q1-cse5024-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5024-prof4', text: 'Was the course material for Advanced Software Testing well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5024-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5024-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5024-prof4', text: 'Would you recommend the Advanced Software Testing course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
]));

questionSets.set('prof5', new Map([
  ['CSE5124', [
    { id: 'q1-cse5124-prof5', text: 'How would you rate Dr. Arun Singh\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5124-prof5', text: 'Was the course material for Data Communication and Computer Networks well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5124-prof5', text: 'Did Dr. Arun Singh provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5124-prof5', text: 'How engaging were Dr. Arun Singh\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5124-prof5', text: 'Would you recommend the Data Communication and Computer Networks course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['MGT5101', [
    { id: 'q1-mgt5101-prof5', text: 'How would you rate Dr. Arun Singh\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-mgt5101-prof5', text: 'Was the course material for Digital Entrepreneurship Skills well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-mgt5101-prof5', text: 'Did Dr. Arun Singh provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-mgt5101-prof5', text: 'How engaging were Dr. Arun Singh\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-mgt5101-prof5', text: 'Would you recommend the Digital Entrepreneurship Skills course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE6016', [
    { id: 'q1-cse6016-prof5', text: 'How would you rate Dr. Arun Singh\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse6016-prof5', text: 'Was the course material for Data Center Operation and Management MCA well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse6016-prof5', text: 'Did Dr. Arun Singh provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse6016-prof5', text: 'How engaging were Dr. Arun Singh\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse6016-prof5', text: 'Would you recommend the Data Center Operation and Management MCA course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
]));

questionSets.set('prof6', new Map([
  ['CSE5126', [
    { id: 'q1-cse5126-prof6', text: 'How would you rate Dr. Maya Verma\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5126-prof6', text: 'Was the course material for Introduction to Data Science well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5126-prof6', text: 'Did Dr. Maya Verma provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5126-prof6', text: 'How engaging were Dr. Maya Verma\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5126-prof6', text: 'Would you recommend the Introduction to Data Science course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5049', [
    { id: 'q1-cse5049-prof6', text: 'How would you rate Dr. Maya Verma\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5049-prof6', text: 'Was the course material for Business Analytics well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5049-prof6', text: 'Did Dr. Maya Verma provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5049-prof6', text: 'How engaging were Dr. Maya Verma\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5049-prof6', text: 'Would you recommend the Business Analytics course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE3009', [
    { id: 'q1-cse3009-prof6', text: 'How would you rate Dr. Maya Verma\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse3009-prof6', text: 'Was the course material for Digital Image Processing well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse3009-prof6', text: 'Did Dr. Maya Verma provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse3009-prof6', text: 'How engaging were Dr. Maya Verma\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse3009-prof6', text: 'Would you recommend the Digital Image Processing course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
]));

questionSets.set('prof7', new Map([
  ['CSE6003', [
    { id: 'q1-cse6003-prof7', text: 'How would you rate Dr. Rahul Mehta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse6003-prof7', text: 'Was the course material for Seminar well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse6003-prof7', text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse6003-prof7', text: 'How engaging were Dr. Rahul Mehta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse6003-prof7', text: 'Would you recommend the Seminar course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5001', [
    { id: 'q1-cse5001-prof7', text: 'How would you rate Dr. Rahul Mehta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5001-prof7', text: 'Was the course material for Data Structures Using Python well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5001-prof7', text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5001-prof7', text: 'How engaging were Dr. Rahul Mehta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5001-prof7', text: 'Would you recommend the Data Structures Using Python course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['SSK2002', [
    { id: 'q1-ssk2002-prof7', text: 'How would you rate Dr. Rahul Mehta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-ssk2002-prof7', text: 'Was the course material for Being Corporate Ready well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-ssk2002-prof7', text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-ssk2002-prof7', text: 'How engaging were Dr. Rahul Mehta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-ssk2002-prof7', text: 'Would you recommend the Being Corporate Ready course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
]));

questionSets.set('prof8', new Map([
  ['FRE1001', [
    { id: 'q1-fre1001-prof8', text: 'How would you rate Dr. Anita Desai\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-fre1001-prof8', text: 'Was the course material for Basic French well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-fre1001-prof8', text: 'Did Dr. Anita Desai provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-fre1001-prof8', text: 'How engaging were Dr. Anita Desai\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-fre1001-prof8', text: 'Would you recommend the Basic French course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5018', [
    { id: 'q1-cse5018-prof8', text: 'How would you rate Dr. Anita Desai\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5018-prof8', text: 'Was the course material for Big Data Framework well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5018-prof8', text: 'Did Dr. Anita Desai provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5018-prof8', text: 'How engaging were Dr. Anita Desai\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5018-prof8', text: 'Would you recommend the Big Data Framework course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
  ['CSE5002', [
    { id: 'q1-cse5002-prof8', text: 'How would you rate Dr. Anita Desai\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'q2-cse5002-prof8', text: 'Was the course material for Algorithm Design for Computer Application well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q3-cse5002-prof8', text: 'Did Dr. Anita Desai provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
    { id: 'q4-cse5002-prof8', text: 'How engaging were Dr. Anita Desai\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
    { id: 'q5-cse5002-prof8', text: 'Would you recommend the Algorithm Design for Computer Application course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
  ]],
]));

export const getQuestionsForSubject = (professorId: string, subjectCode: string): Question[] => {
  const professorQuestions = questionSets.get(professorId);
  if (!professorQuestions) {
    console.error(`No questions found for professor ID: ${professorId}`);
    return [];
  }
  const subjectQuestions = professorQuestions.get(subjectCode);
  if (!subjectQuestions) {
    console.error(`No questions found for subject code: ${subjectCode} and professor ID: ${professorId}`);
    return [];
  }
  return subjectQuestions;
};


// data/questions.ts
import { professors, Professor } from './professors';
import { subjects, Subject } from './subjects';

interface Question {
    id: string;
    text: string;
    options: string[];
}

// Use a Map for efficient lookup by professorId and subjectCode
const questionSets = new Map<string, Map<string, Question[]>>();

questionSets.set('prof1', new Map([
    ['MAT5001', [
        { id: 'q1-mat5001-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-mat5001-prof1', text: 'Was the course material for Applied Statistics well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-mat5001-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-mat5001-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-mat5001-prof1', text: 'Would you recommend the Applied Statistics course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['ENG5001', [
        { id: 'q1-eng5001-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-eng5001-prof1', text: 'Was the course material for Basics of Communication well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-eng5001-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-eng5001-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-eng5001-prof1', text: 'Would you recommend the Basics of Communication course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5042', [
        { id: 'q1-cse5042-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5042-prof1', text: 'Was the course material for Blockchain Technology and Applications well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5042-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5042-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5042-prof1', text: 'Would you recommend the Blockchain Technology and Applications course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5011', [
        { id: 'q1-cse5011-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5011-prof1', text: 'Was the course material for Advanced Java Programming well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5011-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5011-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5011-prof1', text: 'Would you recommend the Advanced Java Programming course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
]));

questionSets.set('prof2', new Map([
    ['CSE5007', [
        { id: 'q1-cse5007-prof2', text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'] },
        { id: 'q2-cse5007-prof2', text: 'Did Dr. Priya Sharma provide timely feedback on assignments?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5007-prof2', text: 'How approachable was Dr. Priya Sharma for questions and clarifications?', options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'] },
        { id: 'q4-cse5007-prof2', text: 'How well did Dr. Priya Sharma explain complex concepts?', options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'] },
        { id: 'q5-cse5007-prof2', text: 'Would you recommend the Software Development Framework course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['PSY5101', [
        { id: 'q1-psy5101-prof2', text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'] },
        { id: 'q2-psy5101-prof2', text: 'Did Dr. Priya Sharma provide timely feedback on assignments?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-psy5101-prof2', text: 'How approachable was Dr. Priya Sharma for questions and clarifications?', options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'] },
        { id: 'q4-psy5101-prof2', text: 'How well did Dr. Priya Sharma explain complex concepts?', options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'] },
        { id: 'q5-psy5101-prof2', text: 'Would you recommend the Self Development and Interpersonal Skills course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5013', [
        { id: 'q1-cse5013-prof2', text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'] },
        { id: 'q2-cse5013-prof2', text: 'Did Dr. Priya Sharma provide timely feedback on assignments?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5013-prof2', text: 'How approachable was Dr. Priya Sharma for questions and clarifications?', options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'] },
        { id: 'q4-cse5013-prof2', text: 'How well did Dr. Priya Sharma explain complex concepts?', options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'] },
        { id: 'q5-cse5013-prof2', text: 'Would you recommend the C# and .NET Framework course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['ENG5002', [
        { id: 'q1-eng5002-prof2', text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'] },
        { id: 'q2-eng5002-prof2', text: 'Did Dr. Priya Sharma provide timely feedback on assignments?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-eng5002-prof2', text: 'How approachable was Dr. Priya Sharma for questions and clarifications?', options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'] },
        { id: 'q4-eng5002-prof2', text: 'How well did Dr. Priya Sharma explain complex concepts?', options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'] },
        { id: 'q5-eng5002-prof2', text: 'Would you recommend the Advanced Technical Report Writing course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] }
    ]]
]));

questionSets.set('prof3', new Map([
    ['CSE5070', [
        { id: 'q1-cse5070-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5070-prof3', text: 'Was the course material for Programming Language - Python well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5070-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5070-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5070-prof3', text: 'Would you recommend the Programming Language - Python course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5003', [
        { id: 'q1-cse5003-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5003-prof3', text: 'Was the course material for Advanced Computer Architecture and Organization well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5003-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5003-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5003-prof3', text: 'Would you recommend the Advanced Computer Architecture and Organization course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5034', [
        { id: 'q1-cse5034-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5034-prof3', text: 'Was the course material for DevOps Orchestration well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5034-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5034-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5034-prof3', text: 'Would you recommend the DevOps Orchestration course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5029', [
        { id: 'q1-cse5029-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5029-prof3', text: 'Was the course material for Advanced Machine Learning well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5029-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5029-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5029-prof3', text: 'Would you recommend the Advanced Machine Learning course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
]));

questionSets.set('prof4', new Map([
    ['CSE5122', [
        { id: 'q1-cse5122-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5122-prof4', text: 'Was the course material for Database Management System well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5122-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5122-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5122-prof4', text: 'Would you recommend the Database Management System course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5004', [
        { id: 'q1-cse5004-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5004-prof4', text: 'Was the course material for Distributed Operating System well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5004-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5004-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5004-prof4', text: 'Would you recommend the Distributed Operating System course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5016', [
        { id: 'q1-cse5016-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5016-prof4', text: 'Was the course material for Data Mining and Predictive well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5016-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5016-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5016-prof4', text: 'Would you recommend the Data Mining and Predictive course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5024', [
        { id: 'q1-cse5024-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5024-prof4', text: 'Was the course material for Advanced Software Testing well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5024-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5024-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5024-prof4', text: 'Would you recommend the Advanced Software Testing course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
]));

questionSets.set('prof5', new Map([
    ['CSE5124', [
        { id: 'q1-cse5124-prof5', text: 'How would you rate Dr. Arun Singh\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5124-prof5', text: 'Was the course material for Data Communication and Computer Networks well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5124-prof5', text: 'Did Dr. Arun Singh provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5124-prof5', text: 'How engaging were Dr. Arun Singh\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5124-prof5', text: 'Would you recommend the Data Communication and Computer Networks course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['MGT5101', [
        { id: 'q1-mgt5101-prof5', text: 'How would you rate Dr. Arun Singh\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-mgt5101-prof5', text: 'Was the course material for Digital Entrepreneurship Skills well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-mgt5101-prof5', text: 'Did Dr. Arun Singh provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-mgt5101-prof5', text: 'How engaging were Dr. Arun Singh\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-mgt5101-prof5', text: 'Would you recommend the Digital Entrepreneurship Skills course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE6016', [
        { id: 'q1-cse6016-prof5', text: 'How would you rate Dr. Arun Singh\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse6016-prof5', text: 'Was the course material for Data Center Operation and Management MCA well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse6016-prof5', text: 'Did Dr. Arun Singh provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse6016-prof5', text: 'How engaging were Dr. Arun Singh\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse6016-prof5', text: 'Would you recommend the Data Center Operation and Management MCA course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5078', [
        { id: 'q1-cse5078-prof5', text: 'How would you rate Dr. Arun Singh\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5078-prof5', text: 'Was the course material for Generative AI well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5078-prof5', text: 'Did Dr. Arun Singh provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5078-prof5', text: 'How engaging were Dr. Arun Singh\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5078-prof5', text: 'Would you recommend the Generative AI course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] }
    ]]
]));

questionSets.set('prof6', new Map([
    ['CSE5126', [
        { id: 'q1-cse5126-prof6', text: 'How would you rate Dr. Maya Verma\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5126-prof6', text: 'Was the course material for Introduction to Data Science well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5126-prof6', text: 'Did Dr. Maya Verma provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5126-prof6', text: 'How engaging were Dr. Maya Verma\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5126-prof6', text: 'Would you recommend the Introduction to Data Science course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5049', [
        { id: 'q1-cse5049-prof6', text: 'How would you rate Dr. Maya Verma\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5049-prof6', text: 'Was the course material for Business Analytics well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5049-prof6', text: 'Did Dr. Maya Verma provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5049-prof6', text: 'How engaging were Dr. Maya Verma\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5049-prof6', text: 'Would you recommend the Business Analytics course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE3009', [
        { id: 'q1-cse3009-prof6', text: 'How would you rate Dr. Maya Verma\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse3009-prof6', text: 'Was the course material for Digital Image Processing well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse3009-prof6', text: 'Did Dr. Maya Verma provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse3009-prof6', text: 'How engaging were Dr. Maya Verma\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse3009-prof6', text: 'Would you recommend the Digital Image Processing course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
]));

questionSets.set('prof7', new Map([
    ['CSE6003', [
        { id: 'q1-cse6003-prof7', text: 'How would you rate Dr. Rahul Mehta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse6003-prof7', text: 'Was the course material for Seminar well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse6003-prof7', text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse6003-prof7', text: 'How engaging were Dr. Rahul Mehta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse6003-prof7', text: 'Would you recommend the Seminar course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5001', [
        { id: 'q1-cse5001-prof7', text: 'How would you rate Dr. Rahul Mehta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5001-prof7', text: 'Was the course material for Data Structures Using Python well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5001-prof7', text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5001-prof7', text: 'How engaging were Dr. Rahul Mehta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5001-prof7', text: 'Would you recommend the Data Structures Using Python course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['SSK2002', [
        { id: 'q1-ssk2002-prof7', text: 'How would you rate Dr. Rahul Mehta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-ssk2002-prof7', text: 'Was the course material for Being Corporate Ready well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-ssk2002-prof7', text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-ssk2002-prof7', text: 'How engaging were Dr. Rahul Mehta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-ssk2002-prof7', text: 'Would you recommend the Being Corporate Ready course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
]));

questionSets.set('prof8', new Map([
    ['FRE1001', [
        { id: 'q1-fre1001-prof8', text: 'How would you rate Dr. Anita Desai\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-fre1001-prof8', text: 'Was the course material for Basic French well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-fre1001-prof8', text: 'Did Dr. Anita Desai provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-fre1001-prof8', text: 'How engaging were Dr. Anita Desai\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-fre1001-prof8', text: 'Would you recommend the Basic French course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5018', [
        { id: 'q1-cse5018-prof8', text: 'How would you rate Dr. Anita Desai\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5018-prof8', text: 'Was the course material for Big Data Framework well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5018-prof8', text: 'Did Dr. Anita Desai provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5018-prof8', text: 'How engaging were Dr. Anita Desai\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5018-prof8', text: 'Would you recommend the Big Data Framework course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
    ['CSE5002', [
        { id: 'q1-cse5002-prof8', text: 'How would you rate Dr. Anita Desai\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
        { id: 'q2-cse5002-prof8', text: 'Was the course material for Algorithm Design for Computer Application well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q3-cse5002-prof8', text: 'Did Dr. Anita Desai provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'] },
        { id: 'q4-cse5002-prof8', text: 'How engaging were Dr. Anita Desai\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'] },
        { id: 'q5-cse5002-prof8', text: 'Would you recommend the Algorithm Design for Computer Application course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'] },
    ]],
]));
export const getQuestionsForSubject = (professorId: string, subjectCode: string): Question[] => {
    const professorQuestions = questionSets.get(professorId);
    if (!professorQuestions) {
        console.error(`No questions found for professor ID: ${professorId}`);
        return [];
    }
    const subjectQuestions = professorQuestions.get(subjectCode);
    if (!subjectQuestions) {
        console.error(`No questions found for subject code: ${subjectCode} and professor ID: ${professorId}`);
        return [];
    }
    return subjectQuestions;
};