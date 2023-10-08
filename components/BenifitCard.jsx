import Icon from "./Icon";

const BenifitCard = ({ text, heading }) => {
  return (
    <div className=" text-sm border-b py-4 ">
      <button className="flex items-center gap-2 bg-customGray px-4 py-[4px] ">
        <Icon name="check" size={16} className="text-customGreen" />
        <h6> {heading}</h6>
      </button>
      <p className="text-start">{text}</p>
    </div>
  );
};

export default BenifitCard;
