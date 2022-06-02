import WithCounter from "../hoc/withCount";

const HoverCounter = ({ count, incrementCount, family }) => {
  console.log(family);
  return (
    <div>
      <button
        onMouseOver={incrementCount}
        className="rounded border border-pink-200 bg-pink-100 px-4 py-2 text-3xl"
      >
        hoverd {count} times
      </button>
    </div>
  );
};

export default WithCounter(HoverCounter, 10); // incrementValue
