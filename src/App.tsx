import React, { useState, useRef } from 'react';
import { students } from './data/students';
import { subjects } from './data/subjects';
import { professors } from './data/professors';
import { getQuestionsForSubject } from './data/questions';
import { addResponse } from './data/response';
import './styles/App.css';
import { ArrowLeft } from 'lucide-react';
import QuestionContainer from './questionContainer';

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
          <span className="text-blue-600">AMI</span>ZONE
        </h1>
        <h2 className="login-subtitle">
          LOGIN <span className="text-gray-700">{userType}</span>
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


const Dashboard: React.FC<{ student: any }> = ({ student }) => {
  const [selectedYear, setSelectedYear] = useState('2023-2024');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [feedbackSubject, setFeedbackSubject] = useState<any | null>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const years = ['2023-2024', '2024-2025', '2025-2026', '2026-2027'];
  const filteredSubjects = subjects.filter((s) => s.year === selectedYear && s.semester === selectedSemester);

  const handleCloseFeedbackModal = () => {
    setShowFeedbackModal(false);
  };

  return (
    <div className="dashboard">
      <div className="profile-section flex items-center space-x-4 mb-4">
        <img src={student.profilePicture} alt={student.name} className="w-20 h-20 rounded-full" />
        <div className="profile-info">
          <h2 className="text-green-600 text-xl font-bold">{student.name}</h2>
          <p className="text-gray-600">USN: {student.usn}</p>
          <p className="text-gray-600">Branch: {student.branch}</p>
          <p className="text-gray-600">Semester: {student.currentSemester}</p>
        </div>
      </div>
      <div className="year-selector mb-2">
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="w-full p-2 border border-gray-300 rounded">
          {years.map((year) => <option key={year}>{year}</option>)}
        </select>
      </div>
      <div className="semester-buttons flex justify-center space-x-4 mb-4">
        {[1, 2].map((sem) => (
          <button key={sem} onClick={() => setSelectedSemester(sem)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Semester {sem}
          </button>
        ))}
      </div>
      {selectedSemester && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {filteredSubjects.map((subject) => (
            <div key={subject.code} className="bg-blue-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <img src={professors.find((p) => p.id === subject.professorId)?.profilePicture || ''} alt={subject.name} className="w-12 h-12 rounded-full mr-2" />
                <div>
                  <h3 className="text-xl font-bold text-blue-600">{subject.name}</h3>
                  <p className="text-gray-600">Course Code: {subject.code}</p>
                </div>
              </div>
              <button onClick={() => { setShowFeedbackModal(true); setFeedbackSubject(subject); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Give Feedback
              </button>
            </div>
          ))}
        </div>
      )}
      {!selectedSemester && (
        <p>Please select a semester to view subjects.</p>
      )}
      {showFeedbackModal && feedbackSubject && (
        <QuestionContainer
          subject={{ ...feedbackSubject, studentId: student.usn }}
          onClose={handleCloseFeedbackModal}
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
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

  const handleLogin = (usn: string, password: string) => {
    const student = students.find((s) => s.usn === usn);
    if (student && password === usn) {
      setCurrentStudent(student);
      setSelectedSemester(null);
      setError('');
    } else {
      setError('Invalid USN or password');
      setTimeout(() => setError(''), 5000);
    }
  };

  if (page === 'home') {
    return (
      <div className="home-container flex justify-center items-center h-screen">
        <div className="button-group space-x-4">
          <button onClick={() => setPage('student')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            STUDENT
          </button>
          <button onClick={() => setPage('admin')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            ADMIN
          </button>
        </div>
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
