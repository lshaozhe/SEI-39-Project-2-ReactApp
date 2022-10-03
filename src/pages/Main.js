import React, { useState, useEffect } from "react";

import Form from "../Components/Form";
import LoadingSpinner from "../Components/LoadingSpinner";
import Results from "../Components/Results";

const Main = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      setPost(data.result);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url = "https://ftx.com/api/markets";
    fetchPost(url);
  }, []);

  return (
    <div className="main">
      <div className="form-container">
        <Form />
      </div>
      <div className="loading-spinner">
        <section>
          {isLoading && (
            <div className="centered">
              <LoadingSpinner />
            </div>
          )}

          {!isLoading && error && <p>{error}</p>}
        </section>
      </div>
      <div className="results-container">
        <Results post={post} />
        {JSON.stringify(post)}
      </div>
    </div>
  );
};

export default Main;
