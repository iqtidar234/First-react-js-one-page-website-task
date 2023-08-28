import { FaCode, FaCircleArrowLeft, FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaLocationDot, FaLinkedinIn, FaUser } from "react-icons/fa6";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { BsCalendarDate, BsPhone } from "react-icons/bs";
import { BsYoutube, BsFillTelephoneFill, BsEnvelopeOpen, BsArrowRight } from "react-icons/bs";
// import { BsArrowRight } from "react-icons/bs";

const ServicesItems = [{
    icon: <FaCode className='text-white services__item--icon ' />,
    serviceName: 'Web Development',
    serviceDesc: 'Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed'
},
{

    icon: <FaCode className='text-white services__item--icon ' />,
    serviceName: 'Web Development',
    serviceDesc: 'Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed'
},
{
    icon: <FaCode className='text-white services__item--icon ' />,
    serviceName: 'Web Development',
    serviceDesc: 'Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed'
},
{
    icon: <FaCode className='text-white services__item--icon ' />,
    serviceName: 'Web Development',
    serviceDesc: 'Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed'
},
{
    icon: <FaCode className='text-white services__item--icon ' />,
    serviceName: 'Web Development',
    serviceDesc: 'Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed'
}
]

const quoteItems = [{
    icon: <FaCircleArrowLeft className='about__option--icon text-primary' />,
    text: 'Reply within 24 hours'
},
{
    icon: <FaPhone className='about__option--icon text-primary' />,
    text: '24 hrs telephone support'
}];

const carousalItems = [{
    id: 1,
    image: 'https://themewagon.github.io/startup2/img/testimonial-2.jpg',
    name: 'Client Name',
    profession: 'Profession',
    discription: ' Dolor et eos labore stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
},
{
    id: 2,
    image: 'https://themewagon.github.io/startup2/img/testimonial-4.jpg',
    name: 'Client Name',
    profession: 'Profession',
    discription: ' Dolor et eos labore stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
},
{
    id: 3,
    image: 'https://themewagon.github.io/startup2/img/testimonial-1.jpg',
    name: 'Client Name',
    profession: 'Profession',
    discription: ' Dolor et eos labore stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
},
{
    id: 4,
    image: 'https://themewagon.github.io/startup2/img/testimonial-3.jpg',
    name: 'Client Name',
    profession: 'Profession',
    discription: ' Dolor et eos labore stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
}

]

const teamItems = [{
    image: 'https://themewagon.github.io/startup2/img/team-1.jpg',
    name: 'Full Name',
    job: 'DESiGNATION'
},
{
    image: 'https://themewagon.github.io/startup2/img/team-2.jpg',
    name: 'Full Name',
    job: 'DESiGNATION'
},
{
    image: 'https://themewagon.github.io/startup2/img/team-3.jpg',
    name: 'Full Name',
    job: 'DESiGNATION'
}]

const socialIcons = [<FaFacebookF />, <FaLinkedinIn />, <TfiTwitterAlt />, <FiInstagram />]


const blogPosts = [{
    image: 'https://themewagon.github.io/startup2/img/blog-1.jpg',
    author: <FaUser className='blog-post__text--icon text-primary' />,
    date: <BsCalendarDate className='blog-post__text--icon text-primary' />,
    heading: 'How to build a website',
    discription: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    niche: 'Web Design'
},
{
    image: 'https://themewagon.github.io/startup2/img/blog-2.jpg',
    author: <FaUser className='blog-post__text--icon text-primary' />,
    date: <BsCalendarDate className='blog-post__text--icon text-primary' />,
    heading: 'How to build a website',
    discription: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    niche: 'Web Design'
},
{
    image: 'https://themewagon.github.io/startup2/img/blog-3.jpg',
    author: <FaUser className='blog-post__text--icon text-primary' />,
    date: <BsCalendarDate className='blog-post__text--icon text-primary' />,
    heading: 'How to build a website',
    discription: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    niche: 'Web Design'
},]

const brandsItems = [
    'https://themewagon.github.io/startup2/img/vendor-3.jpg',
    'https://themewagon.github.io/startup2/img/vendor-4.jpg',
    'https://themewagon.github.io/startup2/img/vendor-5.jpg',
    'https://themewagon.github.io/startup2/img/vendor-6.jpg',
    'https://themewagon.github.io/startup2/img/vendor-7.jpg',
    'https://themewagon.github.io/startup2/img/vendor-8.jpg',
    'https://themewagon.github.io/startup2/img/vendor-9.jpg',
    'https://themewagon.github.io/startup2/img/vendor-1.jpg',
]

const footerLocation = {
    heading: 'Get In Touch',
    location: [{
        icon: <FaLocationDot className="information__item--icon" />,
        text: '123 Street, New York, USA',
    },
    {
        icon: <BsEnvelopeOpen className="information__item--icon" />,
        text: 'info@example.com',
    },
    {
        icon: <FaPhone className="information__item--icon" />,
        text: '+012 345 67890',
    },]
}

const footerLinks = {
    heading: 'Quick Links',
    location: [{
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'Home',
    },
    {
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'About us',
    },
    {
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'Our Services',
    },
    {
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'Meet the Team',
    },
    {
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'Latest Blog',
    },
    {
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'Contact Us',
    },]
}

const footerLinks2 = {
    heading: 'Popular Links',
    location: [{
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'Home',
    },
    {
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'About us',
    },
    {
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'Our Services',
    },
    {
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'Meet the Team',
    },
    {
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'Latest Blog',
    },
    {
        icon: <BsArrowRight className="information__item--icon" />,
        text: 'Contact Us',
    },]
}

const menuItems = ['Home', 'About', 'Services', 'Blog', 'Contact']
export { ServicesItems, quoteItems, carousalItems, teamItems, socialIcons, blogPosts, brandsItems, footerLocation, footerLinks, footerLinks2, menuItems };