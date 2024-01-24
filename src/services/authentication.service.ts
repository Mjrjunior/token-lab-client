import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState(null);

  const checkAuth = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  return { isAuthenticated };
};