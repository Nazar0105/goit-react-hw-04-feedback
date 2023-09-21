import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const options = ['good', 'neutral', 'bad'];

  const handleLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = Object.values(feedback).reduce((acc, value) => acc + value, 0);
  const positivePercentage = totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <div className="App">
      <h1>Feedback App</h1>
      <Section title="Leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />
      </Section>
      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Section title="Notification">
          <Notification message="There is no feedback" />
        </Section>
      )}
    </div>
  );
};

export default App;
