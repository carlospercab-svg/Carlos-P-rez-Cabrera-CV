export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  context: string;
  problem: string;
  solution: string;
  impact: string[];
  tools: string[];
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "email-tracking",
    title: "Revenue & Reservation Logic",
    subtitle: "Automating the classification of incoming reservation data.",
    category: "Automation / Revenue",
    context: "The Reservations department handles high volumes of email traffic daily. Manual tracking was time-consuming and prone to human error.",
    problem: "Tracking incoming and outgoing reservation emails required manual entry into spreadsheets, taking approximately 24 hours per week of dedicated staff time.",
    solution: "Designed a Power Automate flow that automatically scans, classifies, and logs reservation-related emails into a structured Excel database.",
    impact: [
      "~24 hours/week saved",
      "Real-time volume visibility",
      "Zero data entry errors"
    ],
    tools: ["Power Automate", "Excel Logic", "Dashboarding"],
    image: "/images/project-revenue.png"
  },
  {
    id: "fire-safety",
    title: "Engineering & Safety Digitization",
    subtitle: "Mobilizing the quarterly inspection of 600+ safety assets.",
    category: "App Development / Operations",
    context: "Fire safety inspections are critical for compliance but operationally heavy.",
    problem: "Previous workflow relied on paper checklists, manual verification of ~600 items, and subsequent manual transcription into digital formats.",
    solution: "Built a custom Power Apps mobile application that allows technicians to scan and verify equipment status in real-time, syncing directly to a master database.",
    impact: [
      "45+ hours/month saved",
      "Instant digital records",
      "Paperless workflow"
    ],
    tools: ["Power Apps", "Database Design", "UX/UI"],
    image: "/images/project-safety.png"
  }
];
