import Feedback from "./Feedback/Feedback";

import buttons from 'data/buttons.json';
// import statistics from 'data/statistics.json'
export const App = () => {
  return (
   <Feedback buttons ={buttons} />
  );
};
