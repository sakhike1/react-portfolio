import PropTypes from "prop-types";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
    const { date, iconBg, icon, title, company_name, points } = experience;

    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={date}
            iconStyle={{ background: iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={icon}
                        alt={company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{title}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                    {company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

ExperienceCard.propTypes = {
    experience: PropTypes.shape({
        date: PropTypes.string.isRequired,
        iconBg: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        company_name: PropTypes.string.isRequired,
        points: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ExperienceCard;
