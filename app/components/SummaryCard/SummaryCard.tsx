"use client";
import "../../routes/home/home.css"

const SummaryCard = () => {
  const data = [
    { label: 'Monthly Income', value: '$5000' },
    { label: 'Expenses', value: '$1200' },
    { label: 'Remaining', value: '$3800' },
  ];

  return (
    <div className="w-full px-4">
      <div className="w-[90%]  max-w-6xl mx-auto ">
        <ul className="flex justify-between gap-4 h-[100px] labelb">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-evenly items-center flex-1  border-r"
            >
              <span className="labelname ">{item.label}</span>
              <span className="labelname x" >{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummaryCard;
