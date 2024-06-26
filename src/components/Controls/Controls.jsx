export default function Controls({ isFirst, isLast, onPrev, onNext }) {
  return (
    <div>
      <button disabled={isFirst} onClick={onPrev}>
        Prev
      </button>
      <button disabled={isLast} onClick={onNext}>
        Next
      </button>
    </div>
  );
}
