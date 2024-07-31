// benefits.jsx
import React from 'react';
import { FaDumbbell, FaCogs, FaCalendarAlt, FaUsers } from 'react-icons/fa';

export const benefitsData = [
    {
        title: "Expert Trainers",
        description: "Our certified trainers focus on your goals with personalized workout plans and one-on-one coaching. Expect faster, more effective results tailored specifically to your fitness needs.",
        icon: <FaDumbbell />
    },
    {
        title: "Modern Equipment",
        description: "Utilize the latest, advanced equipment at our gym. We offer a diverse range of machines and tools suited for all fitness levels and workout preferences.",
        icon: <FaCogs />
    },
    {
        title: "Flexible Membership",
        description: "Choose from various membership plans that match your lifestyle. From short-term passes to long-term commitments, we offer affordable options to support your fitness journey.",
        icon: <FaCalendarAlt className='text-[50px]' />
    },
    {
        title: "Supportive Community",
        description: "Join a community that encourages and motivates each other. Participate in group classes, events, and challenges to keep your fitness routine engaging and inspiring.",
        icon: <FaUsers />
    }
];
