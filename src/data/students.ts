// data/students.ts
export interface Student {
    usn: string;
    name: string;
    branch: string;
    currentSemester: number;
    profilePicture: string;
}

export const students: Student[] = [
    { usn: 'A869145023001', name: 'Abhijith Kumar', branch: 'MCA', currentSemester: 1, profilePicture: '/images/abhijith.jpg' }, // Semester 1, 2023-2024
    { usn: 'A869145023002', name: 'Priya Singh', branch: 'MCA', currentSemester: 2, profilePicture: '/images/priya.jpg' },     // Semester 2, 2023-2024
    { usn: 'A869145023003', name: 'Ravi Patel', branch: 'MCA', currentSemester: 3, profilePicture: '/images/ravi.jpg' },       // Semester 3, 2024-2025
    { usn: 'A869145023004', name: 'Sneha Rao', branch: 'MCA', currentSemester: 4, profilePicture: '/images/sneha.jpg' },      // Semester 4, 2024-2025
    { usn: 'A869145023005', name: 'Arjun Mehta', branch: 'MCA', currentSemester: 1, profilePicture: '/images/arjun.jpg' },     // Semester 1, 2023-2024
    { usn: 'A869145023006', name: 'Divya Sharma', branch: 'MCA', currentSemester: 2, profilePicture: '/images/divya.jpg' },    // Semester 2, 2023-2024
    { usn: 'A869145023007', name: 'Kiran Kumar', branch: 'MCA', currentSemester: 3, profilePicture: '/images/kiran.jpg' },    // Semester 3, 2024-2025
    { usn: 'A869145023008', name: 'Megha Verma', branch: 'MCA', currentSemester: 4, profilePicture: '/images/megha.jpg' },    // Semester 4, 2024-2025
    { usn: 'A869145023009', name: 'Amit Choudhary', branch: 'MCA', currentSemester: 1, profilePicture: '/images/amit.jpg' },   // Semester 1, 2023-2024
    { usn: 'A869145023010', name: 'Nisha Reddy', branch: 'MCA', currentSemester: 2, profilePicture: '/images/nisha.jpg' },   // Semester 2, 2023-2024
    { usn: 'A869145023011', name: 'Vikram Singh', branch: 'MCA', currentSemester: 3, profilePicture: '/images/vikram.jpg' },  // Semester 3, 2024-2025
    { usn: 'A869145023012', name: 'Anjali Kumari', branch: 'MCA', currentSemester: 4, profilePicture: '/images/anjali.jpg' }, // Semester 4, 2024-2025
    { usn: 'A869145023013', name: 'Manish Gupta', branch: 'MCA', currentSemester: 1, profilePicture: '/images/manish.jpg' },  // Semester 1, 2023-2024
    { usn: 'A869145023014', name: 'Rashmi Kaur', branch: 'MCA', currentSemester: 2, profilePicture: '/images/rashmi.jpg' },  // Semester 2, 2023-2024
    { usn: 'A869145023015', name: 'Rahul Desai', branch: 'MCA', currentSemester: 3, profilePicture: '/images/rahul.jpg' },   // Semester 3, 2024-2025
    { usn: 'A869145023016', name: 'Pooja Patel', branch: 'MCA', currentSemester: 4, profilePicture: '/images/pooja.jpg' },   // Semester 4, 2024-2025
    { usn: 'A869145023017', name: 'Suresh Rao', branch: 'MCA', currentSemester: 1, profilePicture: '/images/suresh.jpg' },   // Semester 1, 2023-2024
    { usn: 'A869145023018', name: 'Komal Gupta', branch: 'MCA', currentSemester: 2, profilePicture: '/images/komal.jpg' },   // Semester 2, 2023-2024
    { usn: 'A869145023019', name: 'Rohan Sharma', branch: 'MCA', currentSemester: 3, profilePicture: '/images/rohan.jpg' },  // Semester 3, 2024-2025
    { usn: 'A869145023020', name: 'Sakshi Verma', branch: 'MCA', currentSemester: 4, profilePicture: '/images/sakshi.jpg' }, // Semester 4, 2024-2025
    { usn: 'A869145023021', name: 'Aravind Kumar', branch: 'MCA', currentSemester: 1, profilePicture: '/images/aravind.jpg' },// Semester 1, 2023-2024
    { usn: 'A869145023022', name: 'Nandini Reddy', branch: 'MCA', currentSemester: 2, profilePicture: '/images/nandini.jpg' },// Semester 2, 2023-2024
    { usn: 'A869145023023', name: 'Deepak Mehta', branch: 'MCA', currentSemester: 3, profilePicture: '/images/deepak.jpg' }, // Semester 3, 2024-2025
    { usn: 'A869145023024', name: 'Swati Singh', branch: 'MCA', currentSemester: 4, profilePicture: '/images/swati.jpg' },  // Semester 4, 2024-2025
    { usn: 'A869145023025', name: 'Akash Patel', branch: 'MCA', currentSemester: 1, profilePicture: '/images/akash.jpg' },   // Semester 1, 2023-2024
    { usn: 'A869145023026', name: 'Kavya Sharma', branch: 'MCA', currentSemester: 2, profilePicture: '/images/kavya.jpg' },   // Semester 2, 2023-2024
    { usn: 'A869145023027', name: 'Ravi Kumar', branch: 'MCA', currentSemester: 3, profilePicture: '/images/ravi_k.jpg' },   // Semester 3, 2024-2025
    { usn: 'A869145023028', name: 'Sneha Verma', branch: 'MCA', currentSemester: 4, profilePicture: '/images/sneha_v.jpg' },  // Semester 4, 2024-2025
    { usn: 'A869145023029', name: 'Riya Shah', branch: 'MCA', currentSemester: 1, profilePicture: '/images/riya.jpg' },     // Semester 1, 2023-2024
    { usn: 'A869145023030', name: 'Ajay Menon', branch: 'MCA', currentSemester: 2, profilePicture: '/images/ajay.jpg' },     // Semester 2, 2023-2024
    { usn: 'A869145023031', name: 'Sana Khan', branch: 'MCA', currentSemester: 3, profilePicture: '/images/sana.jpg' },      // Semester 3, 2024-2025
    { usn: 'A869145023032', name: 'Gautam Joshi', branch: 'MCA', currentSemester: 4, profilePicture: '/images/gautam.jpg' },   // Semester 4, 2024-2025
    { usn: 'A869145023033', name: 'Tina Verma', branch: 'MCA', currentSemester: 1, profilePicture: '/images/tina.jpg' },     // Semester 1, 2023-2024
    { usn: 'A869145023034', name: 'Yash Agrawal', branch: 'MCA', currentSemester: 2, profilePicture: '/images/yash.jpg' }      // Semester 2, 2023-2024
];