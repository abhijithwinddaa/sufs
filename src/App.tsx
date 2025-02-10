import React, { useState, useRef } from 'react';
import { students } from './data/students';
import { subjects } from './data/subjects';
import { professors } from './data/professors';
import { getQuestionsForSubject } from './data/questions';
import { addResponse } from './data/responses';
import './styles/App.css';
import { ArrowLeft } from 'lucide-react';

const LoginForm: React.FC<{ onLogin: (usn: string, password: string) => void; error: string; userType: string; onBack: () => void; }> = ({ onLogin, error, userType, onBack }) => {
  const [usn, setUsn] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(usn, password);
  };

  return (
    <div className="container">
      <button onClick={onBack} className="back-button">
        <ArrowLeft />
      </button>
      <div className="login-container">
        <h1 className="login-title">
          <span style={{ color: '#1d4ed8' }}>AMI</span>ZONE
        </h1>
        <h2 className="login-subtitle">
          LOGIN <span style={{ color: '#1f2937' }}>{userType}</span>
        </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="usn">{userType === 'STUDENT' ? 'USN ID' : 'LOGIN ID'}</label>
            <input id="usn" type="text" value={usn} onChange={(e) => setUsn(e.target.value)} placeholder={`Enter your ${userType === 'STUDENT' ? 'USN ID' : 'Login ID'}`} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

const FeedbackModal: React.FC<{ subject: any; onClose: () => void; onSubmit: (feedback: any) => void; }> = ({ subject, onClose, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [otherFeedback, setOtherFeedback] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const questions = getQuestionsForSubject(subject.professor.id, subject.code);

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
    <div className="feedback-modal">
      {showSuccessMessage ? (
        <p>Thanks for your response! Your feedback has been recorded.</p>
      ) : (
        <div className="feedback-content">
          <button onClick={onClose} className="close-button">&times;</button>
          <h3>{subject.professor.name}</h3>
          <p>Teaching: {subject.name}</p>
          {questions.map((q) => (
            <div key={q.id}>
              <p>{q.text}</p>
              {q.options.map((opt) => (
                <label key={opt}>
                  <input type="radio" value={opt} checked={selectedOptions[q.id] === opt} onChange={() => handleOptionChange(q.id, opt)} /> {opt}
                </label>
              ))}
            </div>
          ))}
          <textarea placeholder="Other feedback (optional)" value={otherFeedback} onChange={(e) => setOtherFeedback(e.target.value)} maxLength={1000} ref={textareaRef} />
          <button onClick={handleSubmitFeedback}>Submit Feedback</button>
        </div>
      )}
    </div>
  );
};

const Dashboard: React.FC<{ student: any }> = ({ student }) => {
  const [selectedYear, setSelectedYear] = useState('2023-2024');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [feedbackSubject, setFeedbackSubject] = useState<any | null>(null);

  const years = ['2023-2024', '2024-2025', '2025-2026', '2026-2027'];
  const filteredSubjects = subjects.filter((s) => s.year === selectedYear && s.semester === selectedSemester);

  return (
    <div className="dashboard">
      <div className="profile-section">
        <img src={student.profilePicture} alt={student.name} className="profile-image" />
        <div className="profile-info">
          <h2>{student.name}</h2>
          <p>USN: {student.usn}</p>
        </div>
      </div>
      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        {years.map((year) => <option key={year}>{year}</option>)}
      </select>
      {[1, 2].map((sem) => (
        <button key={sem} onClick={() => setSelectedSemester(sem)}>Semester {sem}</button>
      ))}
      {selectedSemester && filteredSubjects.map((subject) => (
        <div key={subject.code}>
          <h3>{subject.name}</h3>
          <button onClick={() => setFeedbackSubject(subject)}>Give Feedback</button>
        </div>
      ))}
      {feedbackSubject && (
        <FeedbackModal
          subject={{ ...feedbackSubject, studentId: student.usn }}
          onClose={() => setFeedbackSubject(null)}
          onSubmit={addResponse}
        />
      )}
    </div>
  );
};

function App() {
  const [page, setPage] = useState<'home' | 'student' | 'admin'>('home');
  const [currentStudent, setCurrentStudent] = useState<any | null>(null);
  const [error, setError] = useState('');

  const handleLogin = (usn: string, password: string) => {
    const student = students.find((s) => s.usn === usn);
    if (student && password === usn) {
      setCurrentStudent(student);
      setError('');
    } else {
      setError('Invalid USN or password');
      setTimeout(() => setError(''), 5000);
    }
  };

  if (page === 'home') {
    return (
      <div className="home-container">
        <button onClick={() => setPage('student')}>STUDENT</button>
        <button onClick={() => setPage('admin')}>ADMIN</button>
      </div>
    );
  }

  if (currentStudent) {
    return <Dashboard student={currentStudent} />;
  }

  return (
    <LoginForm
      onLogin={handleLogin}
      error={error}
      userType={page.toUpperCase()}
      onBack={() => setPage('home')}
    />
  );
}

export default App;

