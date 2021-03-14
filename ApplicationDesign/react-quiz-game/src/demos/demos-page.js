import { useState, useEffect } from "react";
import ChatMessage from "./props/chat-message";
import SpeakButton from "./props/speak-button";
import WelcomeMessage from "./props/welcome-message";
import AlertButton from "./props/alert-button";
import SocialPost from "./props/social-post";
import ClickButton from "./state/click-button";
import SpeakForm from "./state/speak-form";
import CustomIncrement from "./state/custom-increment";
import MusicalButton from "./dependencies/musical-button";
import ConfettiDemo from "./dependencies/confetti-demo";
import Todos from "./arrays/todos";
import FramerMotionDemos from "./animation/framer-motion-demos";
import RandomDogs from "./props/random-dogs";

function DemosPage() {
  const [dogFetch, setDogFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: "",
  });
  const {data } = dogFetch;

  useEffect(() => {
    async function getDogs() {
      try {
        console.log("Fetching!");
        const url = "https://dog.ceo/api/breeds/image/random/5";
        const response = await fetch(url);

        // if (!response.ok) {
        //   throw new Error(
        //     `Something went wrong, server responded with ${response.status}.`
        //   );
        // }

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

  // let contents = "";
  // if (isLoading) contents = <LoadingSpinner />;
  // else if (errorMessage !== "")
  //   contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  // else contents = <RandomDogs />;

  return (
    // Components should be PascalCase
    // A functional component is just a JS function that returns JSX.
    <main>
      <h1>My First React App</h1>

      <h2>Random Dogs Demo</h2>
      <RandomDogs data={data} />

      <h2>Animation Demo</h2>
      <FramerMotionDemos />

      <h2>Rendering Arrays</h2>
      <Todos />

      <h2>Confetti Demo</h2>
      <ConfettiDemo />

      <h2>Tone.js Music</h2>
      <MusicalButton>Click for a surprise! 🎂</MusicalButton>

      <h2>Custom Incrementing!</h2>
      <CustomIncrement />

      <h2>Speak Form</h2>
      <SpeakForm />

      <h2>Stateful Buttons</h2>
      <ClickButton />

      <h2>Welcome</h2>
      {/* name and greeting become properties on an object passed in to WelcomeMessage */}
      <WelcomeMessage name="Mike" greeting="Hello" />
      <WelcomeMessage name="Callie" greeting="Howdy" />
      <WelcomeMessage name="Class" greeting="Welcome" />

      <h2>Buttons</h2>
      {/* Values for properties can be any JS expression */}
      <SpeakButton message="Hello there!" />
      <SpeakButton message="Speedy speed speed!" rate={3} pitch={2} />
      <AlertButton alertMessage="This is most definitely an alert!" />
      <AlertButton
        alertMessage="Does this one work as well!?"
        buttonText="DO NOT PRESS"
      />

      <h2>Social Media</h2>
      <SocialPost
        content="Hi, this is my first tweet!"
        userName="FrontendSneh"
      />
      <SocialPost
        content="Wait... I thought this was Facebook"
        userName="BackendAndy"
      />

      <h2>Chat</h2>
      <ChatMessage
        message="Yo, how's React?"
        userName="PokeSneh"
        date="02/14/21"
      />
      <ChatMessage
        message="I think it's going well..."
        userName="CalliCats2000"
        date="02/15/21"
      />
      <ChatMessage
        message="Props to you."
        userName="PokeSneh"
        date="02/16/21"
      />
      <ChatMessage
        message="Ha. Ha. You are not funny."
        userName="CallieCats2000"
        date="02/17/21"
      />
    </main>
  );
}

export default DemosPage;
