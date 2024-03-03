interface DividerProps {
  text?: string;
}

function Divider({ text }: DividerProps) {
  return (
    <div className="flex items-center">
      <div className="flex-grow h-0.5 bg-gray-200"></div>
      <div className="mx-4 text-gray-500">{text}</div>
      <div className="flex-grow h-0.5 bg-gray-200"></div>
    </div>
  );
}

export default Divider;
