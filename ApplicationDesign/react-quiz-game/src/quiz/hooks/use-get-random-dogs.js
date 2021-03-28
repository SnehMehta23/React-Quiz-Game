import { useState, useEffect } from "react";

function useGetRandomDogs() {
  const [dogFetch, setDogFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: "",
  });
  //   const { data } = dogFetch;

  useEffect(() => {
    async function getDogs() {
      try {
        console.log("Fetching!");
        const url = "https://dog.ceo/api/breeds/image/random/5";
        const response = await fetch(url);

        const json = await response.json();
        console.log(json);
        const { message } = json;
        // Successfully passed all the error checks!
        setDogFetch({
          isLoading: false,
          errorMessage: "",
          data: message,
        });
      } catch (err) {
        // Display a generic error message.
        setDogFetch({
          isLoading: false,
          errorMessage:
            "Something went wrong loading the dogs. Please try again later.",
          data: null,
        });
        // Display specific error for debugging in the console.
        console.log(err);
      }
    }
    getDogs();
    //TODO: we should clean up if the user leaves the page before fetch finishes running.
  }, []);

  const { isLoading, errorMessage, data } = dogFetch;
  return [isLoading, errorMessage, data];
}

export default useGetRandomDogs;
