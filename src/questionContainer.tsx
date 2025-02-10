import React, { useState, useRef } from 'react';
import { getQuestionsForSubject } from './data/questions';

interface Question {
  id: string;
  text: string;
  options: string[];
}

interface Props {
  subject: any;
  onClose: () => void;
  onSubmit: (feedback: any) => void;
}

const FeedbackModal: React.FC<Props> = ({ subject, onClose, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [otherFeedback, setOtherFeedback] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Check if subject and its properties are defined before accessing them
  const questions = subject && subject.professor && subject.code ? getQuestionsForSubject(subject.professor.id, subject.code) : [];

  const handleOptionChange = (questionId: string, option: string) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: option });
  };

  const handleSubmitFeedback = () => {
    const feedback = {
      studentId: subject.studentId,
      subjectCode: subject.code,
      questions: questions.map((q) => ({ id: q.id, selectedOption: selectedOptions[q.id] || '' })),
      otherFeedback,
    };
    onSubmit(feedback);
    setShowSuccessMessage(true);
    setTimeout(onClose, 3000);
  };

  return (
    <div className="feedback-modal bg-white p-6 rounded-lg shadow-md">
      {showSuccessMessage ? (
        <p>Thanks for your response! Your feedback has been recorded.</p>
      ) : (
        <>
          <button onClick={onClose} className="absolute top-2 right-2 text-red-500">&times;</button>
          <h3 className="text-xl font-bold mb-4">{subject?.professor?.name || ''}</h3> {/* Safe navigation */}
          <p className="mb-4">Teaching: {subject?.name || ''}</p> {/* Safe navigation */}
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
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit Feedback
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default FeedbackModal;
