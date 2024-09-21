import { useEffect, useState } from "react";
import { lo } from "../assets";

const Footer = () => {
    const [bgColor, setBgColor] = useState("bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r");

    const colors = [
        "bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800",
        "bg-gradient-to-b from-gray-900 to-gray-600",
        "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900",
    ];

    useEffect(() => {
        const changeColor = () => {
            setBgColor(colors[Math.floor(Math.random() * colors.length)]);
        };

        const intervalId = setInterval(changeColor, 10000); // Change color every 20 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div>
            <footer className={`${bgColor} p-10 font-[sans-serif] tracking-wide`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:flex lg:items-center">
                        <a href="#">
                            <img src={lo} alt='logo' className='w-[110px] h-[110px] rounded-full object-cover' />
                        </a>
                    </div>

                    <div className="lg:flex lg:items-center">
                        <ul className="flex space-x-6">
                            <li>
                                <a href="https://www.linkedin.com/in/saks4/" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M6.94 6.94a1.69 1.69 0 1 0 0-3.37 1.69 1.69 0 0 0 0 3.37zM5.5 10.13h2.77v8.37H5.5v-8.37zm10.13-2.77c-1.26 0-2.37.5-3.21 1.32v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4.77 0 1.4.63 1.4 1.4v4.93h2.79v-5.3c0-1.8-1.47-3.26-3.26-3.26z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/sakhike1" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 .3a12 12 0 0 0-3.79 23.38c.6.11.83-.26.83-.58v-2.16c-3.36.73-4.07-1.61-4.07-1.61-.55-1.4-1.33-1.77-1.33-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.68-.31-5.49-1.34-5.49-5.98 0-1.32.47-2.4 1.24-3.25-.13-.31-.54-1.56.12-3.25 0 0 1-.32 3.3 1.23a11.53 11.53 0 0 1 6.01 0c2.31-1.55 3.3-1.23 3.3-1.23.66 1.69.26 2.94.12 3.25.77.85 1.24 1.93 1.24 3.25 0 4.66-2.81 5.66-5.49 5.97.43.37.82 1.1.82 2.23v3.3c0 .32.23.7.84.58A12 12 0 0 0 12 .3z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.com/channels/335455578921107456/529039611972812810" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M20.317 4.369A19.94 19.94 0 0 0 16.765 3a16.337 16.337 0 0 0-.414.86A16.32 16.32 0 0 0 8.056 3c-.15 0-.282.008-.41.02-.157.215-.305.44-.44.67a19.947 19.947 0 0 0-3.559 1.37C1.062 10.266.604 15.01 1.336 19.528c.015.073.03.147.048.221.065.293.132.586.208.878.033.12.072.236.113.35a13.67 13.67 0 0 0 1.725 2.963c.062.076.127.147.19.22a16.37 16.37 0 0 0 1.907 1.725c.14.1.284.197.432.287.25.148.504.288.758.42.155.083.312.165.472.243.026.013.057.026.084.04.253.136.51.268.77.394a10.377 10.377 0 0 0 1.524.556c.162.036.327.073.492.104 1.684.31 3.403.476 5.123.514h.001c.075.001.151.004.227.004 1.776-.003 3.553-.18 5.32-.514a14.223 14.223 0 0 0 3.38-.78l.373-.17.173-.084.086-.042.042-.021a12.418 12.418 0 0 0 2.12-1.4c.222-.15.437-.312.645-.479a16.344 16.344 0 0 0 1.906-1.724c.065-.072.13-.143.193-.218.696-.876 1.3-1.84 1.727-2.963.041-.113.08-.23.113-.35a22.26 22.26 0 0 0 1.19-6.64c-.734-4.522-2.178-9.267-4.573-13.137.005-.003-4.126-1.1-7.747-1.7zM8.048 15.547c.737 0 1.338-.592 1.338-1.32s-.6-1.32-1.338-1.32c-.74 0-1.339.592-1.339 1.32s.6 1.32 1.34 1.32zm7.904 0c.737 0 1.338-.592 1.338-1.32s-.6-1.32-1.338-1.32c-.74 0-1.34.592-1.34 1.32s.6 1.32 1.34 1.32z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact me</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white text-base">
                                    Linezito@icloud.com
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white text-base">
                                    0744702010
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white text-base">
                                    Eco-Park Estate, Centurion, 0144

                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Skills</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white text-base">
                                    Front-End Developer
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white text-base">
                                    UX/UI Design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white text-base">
                                    3D Animation
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
