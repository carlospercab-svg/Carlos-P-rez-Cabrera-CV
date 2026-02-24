export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
}

export const EXPERIENCE = {
  en: [
    {
      company: "Rosewood Villa Magna",
      role: "Engineering & Maintenance Trainee",
      period: "2023 – Present",
      location: "Madrid, Spain",
      description: [
        "Managed supplier coordination and procurement workflows using BirchStreet.",
        "Supported budget tracking and invoice validation, ensuring financial accuracy across departments.",
        "Acted as a bridge between operational needs and administrative requirements.",
        "Identified process bottlenecks and proposed digital solutions using the Power Platform ecosystem."
      ]
    }
  ],
  es: [
    {
      company: "Rosewood Villa Magna",
      role: "Trainee de Ingeniería y Mantenimiento",
      period: "2023 – Presente",
      location: "Madrid, España",
      description: [
        "Gestión de coordinación de proveedores y flujos de compras utilizando BirchStreet.",
        "Apoyo en el seguimiento presupuestario y validación de facturas, asegurando la precisión financiera entre departamentos.",
        "Actué como puente entre las necesidades operativas y los requisitos administrativos.",
        "Identificación de cuellos de botella en procesos y propuesta de soluciones digitales utilizando el ecosistema Power Platform."
      ]
    }
  ]
};

export const EDUCATION = {
  en: [
    {
      institution: "ULPGC",
      degree: "Double Degree in Business Administration (ADE) & Tourism",
      period: "Expected 2026",
      location: "Gran Canaria, Spain"
    },
    {
      institution: "Universidad Complutense de Madrid (UCM)",
      degree: "SICUE Mobility",
      period: "2024 – 2025",
      location: "Madrid, Spain"
    },
    {
      institution: "Università degli Studi di Parma",
      degree: "Erasmus+",
      period: "2023",
      location: "Parma, Italy"
    },
    {
      institution: "Hochschule München",
      degree: "Erasmus+",
      period: "2022 – 2023",
      location: "Munich, Germany"
    }
  ],
  es: [
    {
      institution: "ULPGC",
      degree: "Doble Grado en Administración y Dirección de Empresas (ADE) y Turismo",
      period: "Previsto 2026",
      location: "Gran Canaria, España"
    },
    {
      institution: "Universidad Complutense de Madrid (UCM)",
      degree: "Movilidad SICUE",
      period: "2024 – 2025",
      location: "Madrid, España"
    },
    {
      institution: "Università degli Studi di Parma",
      degree: "Erasmus+",
      period: "2023",
      location: "Parma, Italia"
    },
    {
      institution: "Hochschule München",
      degree: "Erasmus+",
      period: "2022 – 2023",
      location: "Múnich, Alemania"
    }
  ]
};
