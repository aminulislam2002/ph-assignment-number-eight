import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div>
      <h3>01. What is the deference between props and state?</h3>
      <p>
        Answer: Props can be changed by parent component, but state can not be changed by parent component. Props can set
        default values inside component, but state can not set default values inside component. State can change inside
        component, but props can not change inside component. Props can change in child components, but state can not change
        in child components.
      </p>
      <h3>02. How does useState work?</h3>
      <p>
        Answer: useState is a react hook thats are added a state variable to component. It is the local state of the
        component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a
        function. useState to store the data my current page needs in my controller-view. It is mutable.
      </p>
      <h3>03. Purpose of useEffect other than fetching data.</h3>
      <p>
        Answer: The useEffect hook allows me to perform side effects in my components. useEffects are use fetching data,
        reading from local storage and registering and registering event listeners.
      </p>
      <h3>04. How Does React work?</h3>
      <p>
        Answer: ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created
        by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface building called
        components. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does
        all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be
        changed! React finds out what changes have been made, and changes only what needs to be changed.
      </p>
    </div>
  );
};

export default Question;
