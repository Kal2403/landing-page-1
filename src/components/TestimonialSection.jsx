import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const testimonials = [
    {
        id: 1,
        name: "Robin Ayala Doe",
        image: "https://randomuser.me/api/portraits/men/77.jpg",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
        id: 2,
        name: "John De marli",
        image: "https://randomuser.me/api/portraits/women/90.jpg",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
        id: 3,
        name: "Rowhan Smith",
        image: "https://randomuser.me/api/portraits/men/90.jpg",
        text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
        id: 4,
        name: "Sarah Johnson",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
        id: 5,
        name: "Michael Chen",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
        id: 6,
        name: "Emma Wilson",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },

];

const TestimonialSection = () => {
    return (
        <section className='py-16 px-4 max-w-7xl mx-auto'>

            <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold md:text-4xl mb-4'>What our happy client say</h2>
                <p className='text-gray-500'>Things that make it the best place to start trading</p>
            </div>

        </section>
    )
}

export default TestimonialSection;
