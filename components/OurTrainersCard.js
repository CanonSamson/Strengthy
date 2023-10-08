import Image from "next/image";
import Icon from "./Icon";

const OurTrainersCard = ({ image, name, star, specialisations, instagram, facebook, twitter }) => {
    return (
        <div className=" bg-customGray text-customWhite text-sm ">
            <Image
                src={image}
                alt="name"
                width={400}
                height={400}
                className=" h-[300px] bg-[#C4C4C4] object-cover w-full object-top"
            />
            <div className=" p-4">
                <div className=" pb-4 mb-4 border-b border-[#858585] flex items-center justify-between ">
                    <h5>{name}</h5>
                    <span className=" flex items-center ">
                        <Image
                            src="/images/homepage/one-star.svg"
                            width={16}
                            height={16}
                        />
                        {`/`}{star}</span>
                </div>
                <div className="grid text-start items-start  ">
                    <span>Specialisations :</span>
                    <span className=" text-[#858585]">{specialisations}</span>
                </div>
            </div>
            <ul className=" flex items-center gap-4 px-4 pb-4">
                {instagram &&
                    <li>
                        <Icon name="instagram" size={16} />
                    </li>
                }
                {facebook &&
                    <li>
                        <Icon name="facebook" size={16} />
                    </li>
                }
                {twitter &&
                    <li>
                        <Icon name="twitter" size={16} />
                    </li>
                }

            </ul>
        </div>
    );
}

export default OurTrainersCard;