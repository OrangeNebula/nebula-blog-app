function DateText({ date }: { date: Date }) {
  return (
    <span>
      {date.toLocaleDateString()}
    </span>
  );
}

export default DateText;
