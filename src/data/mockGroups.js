export const mockGroups = {
  security: {
    title: "Global System Integrity",
    description: "Real-time monitoring and threat assessments for all sanctuary nodes.",
    threats: 4,
    members: 128,
  },
  projects: [
    {
      id: 1,
      title: "Alpha Architecture",
      badge: "Active Sprint",
      desc: "Redesigning the core protocol for decentralized messaging and storage layers.",
      members: 24,
      online: 8,
      size: "large"
    },
    {
      id: 2,
      title: "UI/UX Guild",
      desc: "Refining the sanctuary aesthetic across all platforms for maximum clarity.",
      members: 12,
      online: 3,
      size: "small"
    },
    {
      id: 3,
      title: "Bot Integration",
      desc: "Developing automated moderation and utility bots for communal areas.",
      members: 42,
      online: 15,
      size: "small"
    }
  ],
  social: [
    { id: 1, title: "General Lounge", members: "2.4k", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500" },
    { id: 2, title: "Weekly Meetups", members: "538", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=500" },
    { id: 3, title: "The Library", members: "1.2k", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=500" }
  ],
  discover: [
    { id: 1, name: "Sustainable Living", desc: "Eco-friendly tips and green tech discussions.", followers: "3.4k", color: "bg-teal-100", iconColor: "text-teal-600" },
    { id: 2, name: "Crypto Analysis", desc: "Real-time market insights and blockchain news.", followers: "12.1k", color: "bg-blue-100", iconColor: "text-blue-600" },
    { id: 3, name: "AI Research Lab", desc: "Discussing the ethics and future of machine learning.", followers: "5.8k", color: "bg-orange-100", iconColor: "text-orange-600" }
  ]
};