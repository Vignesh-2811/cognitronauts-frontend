import React, { createContext, useContext, useState } from 'react';

// Create a context for assignments
const AssignmentContext = createContext();

// Context Provider component
export function AssignmentProvider({ children }) {
  // State to store assignments
  const [assignments, setAssignments] = useState([]);

  // Function to add an assignment
  const addAssignment = (assignment) => {
    setAssignments([...assignments, assignment]);
  };

  return (
    <AssignmentContext.Provider value={{ assignments, addAssignment }}>
      {children}
    </AssignmentContext.Provider>
  );
}

// Custom hook to access assignments from the context
export function useAssignments() {
  // Use useContext to access the AssignmentContext
  const context = useContext(AssignmentContext);

  if (!context) {
    throw new Error('useAssignments must be used within an AssignmentProvider');
  }

  return context;
}
