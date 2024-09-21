import PropTypes from "prop-types";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
    const { date, iconBg, title, company_name, points } = experience;

    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "linear-gradient(to right, rgb(243, 244, 246), rgb(209, 213, 219))",
                color: "blue",

            }}
            contentArrowStyle={{ borderRight: "2px solid  #000" }}
            date={date}
            iconStyle={{ background: iconBg }}

        >
            <div>
                <h3 className='text-black text-[24px] font-bold'>{title}</h3>
                <p className='text-black text-[16px] font-semibold' style={{ margin: 0 }}>
                    {company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2 '>
                {points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-black text-[13px] pl-1 tracking-wider  '
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
