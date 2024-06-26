import { useState } from 'react';
import articles from '../../topics.json';
import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import ArticleView from '../ArticleView/ArticleView';
import ClickTracker from '../ClickTracker/ClickTracker';
import Timer from '../Timer/Timer';

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };
  const visibleArticle = articles[selectedIdx];
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === articles.length - 1;
  const current = selectedIdx + 1;
  const total = articles.length;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Controls
        isFirst={isFirst}
        isLast={isLast}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <Progress current={current} total={total} />
      <ArticleView article={visibleArticle} />
      <hr />

      <ClickTracker />
      <hr />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <Timer />}
    </div>
  );
}
