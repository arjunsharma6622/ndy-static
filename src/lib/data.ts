export const features = [
    {
        title: "Networking",
        description: "Connect with athletes and coaches to grow your career.",
        icon: "Network",
        color: "to-green-200",
    },
    {
        title: "Health & Recovery",
        description: "Get guidance from sports doctors and physiotherapists.",
        icon: "Activity",
        color: "to-red-200",
    },
    {
        title: "Product Listings",
        description: "Brands can list their products and open stores.",
        icon: "Shirt",
        color: "to-blue-200",
    },
    {
        title: "Venue Bookings",
        description: "Book venues for championships and tournaments.",
        icon: "ReceiptText",
        color: "to-yellow-200",
    },
    // {
    //   title: "Associations",
    //   description: "Book venues for championships and tournaments.",
    //   icon: <UsersRound className="w-6 h-6" />,
    //   color: "to-orange-200",
    // },
];

export const team = [
    {
        name: "Siddharth Srinivasan",
        linkedin: "https://www.linkedin.com/in/siddharthsrinivasan8/",
        whatsapp: "+919866558963",
        image: "sid.jpeg",
    },
];

export const tabs = [
    { key: 'athlete', label: 'Athlete' },
    { key: 'coach', label: 'Coach' },
    { key: 'physio', label: 'Physio/Sports Surgeon' },
    { key: 'venue', label: 'Venue Owner' },
    { key: 'brand', label: 'Brand/Sponsor' }
];

export const tabContent: any = {
    athlete: {
        headline: 'Empower Your Athletic Journey',
        challenges: ['Struggling to showcase your skills?', 'Finding it hard to connect with the right coaches?', 'Facing financial hurdles?'],
        solutions: ['Create a stunning profile to highlight your achievements.', 'Connect with top coaches to elevate your performance.', 'Explore sponsorships, scholarships, and financial support.'],
        image: 'athlete.png'
    },
    coach: {
        headline: 'Expand Your Coaching Reach',
        challenges: ['Looking for talented athletes?', 'Want to share your expertise with a broader audience?', 'Need to expand your professional network?'],
        solutions: ['Discover and mentor promising athletes.', 'Host webinars and share training programs.', 'Build your professional network and grow your influence.'],
        image: 'coach.png'
    },
    physio: {
        headline: 'Advance Your Sports Medicine Practice',
        challenges: ['Finding athletes in need of your services?', 'Staying updated on the latest sports medicine trends?', 'Expanding your professional reach?'],
        solutions: ['Connect with athletes seeking recovery guidance.', 'Access the latest research and developments in sports medicine.', 'Network with other professionals and potential clients.'],
        image: 'doctor.png'
    },
    venue: {
        headline: 'Maximize Your Venue’s Potential',
        challenges: ['Struggling to attract events and tournaments?', 'Want to increase your facility’s visibility?', 'Need to generate more revenue?'],
        solutions: ['Make your venues available for championships and events.', 'Reach a wider audience and attract more bookings.', 'Maximize your facility’s usage and profitability.'],
        image: 'venue.png'
    },
    brand: {
        headline: 'Boost Your Brand’s Presence',
        challenges: ['Looking to connect with potential customers in the sports industry?', 'Want to increase your product’s visibility?', 'Need to find athletes to sponsor?'],
        solutions: ['Showcase and sell your products within the app.', 'Reach athletes, coaches, and sports enthusiasts.', 'Find and sponsor talented athletes to promote your brand.'],
        image: 'sponsor.png'
    }
};