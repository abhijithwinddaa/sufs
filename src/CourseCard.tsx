// CourseCard.tsx
import React, { useState, useMemo, useCallback } from 'react';
import './styles/CourseCard.css';
import { professors } from './data/professors';
import { subjects } from './data/subjects';
import { getQuestionsForSubject } from './data/questions'; // Import

interface Props {
    courseCode: string;
}

const CourseCard: React.FC<Props> = ({ courseCode }) => {
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [otherFeedback, setOtherFeedback] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Find the subject
    const subject = useMemo(() => {
        return subjects.find(s => s.code === courseCode);
    }, [courseCode]);

    // Find the professor
    const professor = useMemo(() => {
        return professors.find(p => p.id === subject?.professorId);
    }, [subject]);

    // Get questions
    const questions = useMemo(() => {
        if (subject && professor) {
            return getQuestionsForSubject(professor.id, subject.code);
        }
        return [];
    }, [subject, professor]);

    const handleOptionChange = useCallback((questionId: string, option: string) => {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: option }));
    }, []);

    const handleFeedbackClick = () => {
        setShowFeedbackModal(true);
        setErrorMessage('');
        setOtherFeedback('');
    };

    const handleCloseModal = () => {
        setShowFeedbackModal(false);
        setAnswers({});
        setErrorMessage('');
        setOtherFeedback('');
    };

    const handleSubmitFeedback = () => {
        if (!subject) {
            setErrorMessage('Course data not found.');
            return;
        }

        if (questions.length !== Object.keys(answers).length) {
            setErrorMessage('Please answer all questions.');
            return;
        }

        // Replace with actual submission
        console.log('Feedback submitted:', { courseCode, answers, otherFeedback });
        handleCloseModal();
    };

    if (!subject) {
        return (
            <div className="course-card">
                <p>Course not found: {courseCode}</p>
            </div>
        );
    }

    return (
        <div className="course-card">
            <div className="flex items-center mb-2">
                {professor && (
                    <img
                        src={professor.profilePicture}
                        alt={professor.name}
                        className="w-12 h-12 rounded-full mr-2"
                    />
                )}
                <div>
                    <h3 className="text-xl font-bold text-white">{subject.name}</h3>
                    <p className="text-white">Course Code: {courseCode}</p>
                    <p className="text-white">Professor: {professor ? professor.name : 'Unknown'}</p>
                </div>
            </div>
            <button onClick={handleFeedbackClick} className="give-feedback-button">Give Feedback</button>

            {showFeedbackModal && (
                <div className="feedback-modal">
                    <div className="feedback-content">
                        <div className="feedback-header">
                            <h2 className="feedback-title">Feedback for {courseCode}</h2>
                            <button className="close-button" onClick={handleCloseModal}>
                                X
                            </button>
                        </div>

                        <div className="feedback-questions">
                            {questions.map((question) => (
                                <div key={question.id} className="question">
                                    <p className="question-text">{question.text}</p>
                                    <div className="options">
                                        {question.options.map((option) => (
                                            <label key={option} className="option-label">
                                                <input
                                                    type="radio"
                                                    name={question.id}
                                                    value={option}
                                                    onChange={() => handleOptionChange(question.id, option)}
                                                    checked={answers[question.id] === option}
                                                    className="option-radio"
                                                />
                                                <span className="option-text">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <textarea
                            placeholder="Other feedback (optional)"
                            value={otherFeedback}
                            onChange={(e) => setOtherFeedback(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button className="submit-feedback" onClick={handleSubmitFeedback}>
                            Submit Feedback
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseCard;