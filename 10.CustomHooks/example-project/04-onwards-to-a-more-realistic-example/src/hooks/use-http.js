import { useState, useCallback } from "react";
const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequests = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            requestConfig.url, {
                method : requestConfig.method ? requestConfig.method : "GET",
                body   : requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                header : requestConfig.header ? requestConfig.header : {},
            }
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
    
          applyData(data);
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      }, []);
    return {
        error,
        isLoading,
        sendRequests,
    };
}
export default useHttp;