// src/data.ts
import type { NavLink, SocialLink, AboutMeData, Service } from './types';

export const navLinks: NavLink[] = [
  { id: 'home', title: 'Home', url: '#home' },
  { id: 'featured', title: 'Featured Works', url: '#featured-works' },
  { id: 'photography', title: 'Photography', url: '#photography' },
  { id: 'about', title: 'About Me', url: '#about' },
  { id: 'contact', title: 'Contact', url: '#contact' },
];

export const socialLinks: SocialLink[] = [
  // Add actual social media links here
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/naveen.yohannan/', icon: 'src/assets/icons/instagram.svg' }, // Example, replace with actual icon path or class
  { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/naveenyo/', icon: 'src/assets/icons/linkedin.svg' },
  // { id: 'facebook', name: 'Facebook', url: '#', icon: 'facebook-icon.svg' },
];

export const aboutMeData: AboutMeData = {
  greeting: "Hi! I am",
  name: "Naveen Yohannan",
  introduction: [
    "I'm from Kerala, a southern state of India, currently living in Toronto, Canada.",
    "I create visuals that tell stories, evoke emotions, and bring unique perspectives to life.",
    "With a background in BSc. Media Technology, I've worked as a graphic designer and a freelance wedding photographer, honing my skills in visual storytelling and creative expression.",
    "Explore my portfolio and discover the art of impactful storytelling through light and imagery."
  ],
  profileImageUrl: 'src/assets/profile_pic.jpg',
  // cvUrl: '/assets/cv/NaveenYohannan_CV.pdf', // Add CV Path, Download CV Option will be visible in About Me Section
};

export const servicesData: Service[] = [
  {
    id: 'visual-storytelling',
    title: 'Visual Storytelling',
    description: 'Crafting narratives through compelling visuals that captivate and engage your audience.',
    icon: 'story-icon.svg' // Placeholder icon
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Creating impactful designs for branding, marketing, and digital media that communicate your message effectively.',
    icon: 'design-icon.svg' // Placeholder icon
  },
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    description: 'Capturing the magic and emotion of your special day with artistic and timeless photographs.',
    icon: 'wedding-icon.svg' // Placeholder icon
  },
  {
    id: 'portrait-photography',
    title: 'Portrait Photography',
    description: 'Creating stunning portraits that reflect personality and style, for individuals, families, and professionals.',
    icon: 'portrait-icon.svg' // Placeholder icon
  }
];

// Placeholder for image paths - these will be dynamically loaded later
// The actual image files should be placed in the specified asset folders.

export const featuredWorksBasePath = '/src/assets/featured-works/';
export const photographyBasePath = '/src/assets/photography/';

// Example of how you might list image filenames if not dynamically reading from folders
// export const featuredWorkImages: string[] = ['image1.jpg', 'image2.png'];
// export const photographyImages: string[] = ['photo_A.jpg', 'photo_B.webp'];

console.log('Data loaded. Profile image path:', aboutMeData.profileImageUrl);