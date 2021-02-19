import ChatMessage from "./demos/props/chat-message";
import SpeakButton from "./demos/props/speak-button";
import WelcomeMessage from "./demos/props/welcome-message";
import AlertButton from "./demos/props/alert-button";
import SocialPost from "./demos/props/social-post";
import ClickButton from "./demos/state/click-button";
import SpeakForm from "./demos/state/speak-form";

// Components should be PascalCase
// A functional component is just a JS function that returns JSX.
function App() {
  return (
    <main>
      <h1>My First React App</h1>

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

export default App;
