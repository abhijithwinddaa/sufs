import React, { useState, useRef } from 'react';
import { getQuestionsForSubject } from './data/questions';
import './styles/CourseCard.css';

interface Question {
  id: string;
  text: string;
  options: string[];
}

interface SubjectProps {
  subject: any;
  courseCode: string;
  studentId: string;
  onClose: () => void;
  onSubmit: (feedback: any) => void;
}

const QuestionContainer: React.FC<SubjectProps> = ({ subject, courseCode, studentId, onClose, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [otherFeedback, setOtherFeedback] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const questions: Question[] = getQuestionsForSubject(subject.professor.id, courseCode);

  const handleOptionChange = (questionId: string, option: string) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: option });
  };

  const handleSubmitFeedback = () => {
    const feedback = {
      studentId: studentId,
      subjectCode: courseCode,
      questions: questions.map((q) => ({ id: q.id, selectedOption: selectedOptions[q.id] || '' })),
      otherFeedback,
    };
    onSubmit(feedback);
    setShowSuccessMessage(true);
    setTimeout(onClose, 3000);
  };

  const allQuestionsAnswered = questions.every((q) => selectedOptions[q.id] !== undefined);

  return (
    <div className="feedback-modal fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="modal-content bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-red-500">&times;</button>
        <h3 className="text-xl font-bold mb-4">{subject.professor.name}</h3>
        <p className="mb-4">Teaching: {subject.name}</p>
        {questions.length > 0 && !showSuccessMessage ? (
          <>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmitFeedback(); }}>
              {questions.map((q) => (
                <div key={q.id} className="mb-4">
                  <p className="font-medium">{q.text}</p>
                  <div className="flex flex-col">
                    {q.options.map((opt) => (
                      <label key={opt} className="flex items-center">
                        <input
                          type="radio"
                          value={opt}
                          checked={selectedOptions[q.id] === opt}
                          onChange={() => handleOptionChange(q.id, opt)}
                          required
                          className="mr-2"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <textarea
                placeholder="Other feedback (optional)"
                value={otherFeedback}
                onChange={(e) => setOtherFeedback(e.target.value)}
                maxLength={1000}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              {allQuestionsAnswered && (
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Submit Feedback
                </button>
              )}
            </form>
          </>
        ) : (
          <p>No questions found for this subject.</p>
        )}
        {showSuccessMessage && (
          <p className="text-green-600">Thanks for your response! Your feedback has been recorded.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionContainer;
