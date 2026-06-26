import monitoringCover from "../assets/projects/monitoring/cover.png";
import infrastructureCover from "../assets/projects/infrastructure/cover.jpeg";
import dcwnCover from "../assets/projects/dcwn/cover.jpg";
import aimlCover from "../assets/projects/aiml/cover.png";
import iotCover from "../assets/projects/iot/cover.jpg";
import pharmacyCover from "../assets/projects/pharmacy/cover.png";

const projects = [
  {
    id: 1,
    featured: true,

    title: "Enterprise Network Monitoring Platform",

    image: monitoringCover,

    description:
      "Designed, deployed, and validated an enterprise-grade monitoring platform using Prometheus, Grafana, Alertmanager, Node Exporter, Blackbox Exporter, SNMP Exporter, and Telegram notifications for real-time infrastructure monitoring.",

    technologies: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Node Exporter",
      "Blackbox Exporter",
      "SNMP",
      "Linux",
      "Telegram",
    ],

    github:
      "https://github.com/VimukthiSiriwardana/Enterprise-Network-Monitoring-Platform",

    documentation:
      "https://github.com/VimukthiSiriwardana/enterprise-network-monitoring-platform/blob/main/docs/Enterprise_Network_Monitoring_Platform_Vimukthi_Siriwardana.pdf.pdf",

    demo: "",
  },

  {
    id: 2,
    featured: true,

    title: "Enterprise Network Services Infrastructure",

    image: infrastructureCover,

    description:
      "Designed and deployed an enterprise network infrastructure including Samba Active Directory Domain Services, Kerberos authentication, ISC DHCP Server, Zimbra Mail Server, Apache Web Server, and centralized Linux-based network services.",

    technologies: [
      "Ubuntu",
      "CentOS",
      "Samba AD",
      "Kerberos",
      "DHCP",
      "DNS",
      "Zimbra",
      "Apache",
      "Linux",
    ],

    github:
      "https://github.com/VimukthiSiriwardana/Enterprise-Network-Services-Infrastructure",

    documentation:
      "https://github.com/VimukthiSiriwardana/Enterprise-Network-Services-Infrastructure/blob/main/docs/NMA_Project_Report_Vimukthi_Siriwardana.pdf",

    demo: "",
  },

  {
    id: 3,
    featured: false,

    title: "Enterprise Network Design",

    image: dcwnCover,

    description:
      "Designed and simulated a scalable enterprise network using Cisco Packet Tracer with VLAN segmentation, routing, switching, DHCP, DNS, IP addressing, and secure communication between multiple organizational departments.",

    technologies: [
      "Cisco Packet Tracer",
      "Routing",
      "Switching",
      "VLAN",
      "DHCP",
      "DNS",
      "IPv4",
    ],

    github: "https://github.com/VimukthiSiriwardana/behpaya-it-enterprise-network-design",

    documentation: "https://github.com/VimukthiSiriwardana/behpaya-it-enterprise-network-design/blob/main/Report/IE2100_DCWN_Behpaya_IT_Proposal.pdf",

    demo: "",
  },

  {
    id: 4,
    featured: false,

    title: "Student Performance Prediction using Machine Learning",

    image: aimlCover,

    description:
      "Developed a machine learning solution to predict student academic performance using regression algorithms. Evaluated multiple models and compared prediction accuracy through data analysis and visualization.",

    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Machine Learning",
    ],

    github: "https://github.com/VimukthiSiriwardana/Student-Performance-Prediction-ML",

    documentation: "https://github.com/VimukthiSiriwardana/Student-Performance-Prediction-ML/blob/main/2025-Y2-S1-MLB-B12G2-10_Final_Report.pdf",

    demo: "",
  },

  {
    id: 5,
    featured: false,

    title: "IoT Water Tank Monitoring System",

    image: iotCover,

    description:
      "Built an IoT-based smart water tank monitoring and automation system using ESP8266, ultrasonic sensors, relay control, LCD display, and the Blynk IoT platform for real-time monitoring and pump automation.",

    technologies: [
      "ESP8266",
      "Arduino",
      "Blynk",
      "IoT",
      "Ultrasonic Sensor",
      "Relay Module",
    ],

    github: "https://github.com/VimukthiSiriwardana/Water-Tank-Monitoring-System",

    documentation: "https://github.com/VimukthiSiriwardana/Water-Tank-Monitoring-System/blob/main/Water%20Tank%20Monitoring%20System%20Project.pdf",

    demo: "",
  },

  {
    id: 6,
    featured: false,

    title: "Web-based Pharmacy Management System",

    image: pharmacyCover,

    description:
      "Developed a web-based Pharmacy Management System following Agile and Scrum methodologies. The system supports medicine inventory management, prescription handling, customer management, sales processing, and order tracking.",

    technologies: [
      "Spring Boot",
      "Java",
      "HTML",
      "Thymeleaf",
      "Agile",
      "Scrum",
      "Software Engineering",
    ],

    github: "https://github.com/VimukthiSiriwardana/pharmacy-management-system",

    documentation: "https://github.com/VimukthiSiriwardana/pharmacy-management-system/blob/IT24103506-Medicine-Management/README.md",

    demo: "",
  },
];

export default projects;