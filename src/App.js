import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 35,
    fontSize: 11,
    lineHeight: 1.5,
    backgroundColor: "#f9fafb",
    color: "#1f2937",
  },
  section: { marginBottom: 14 },
  heading: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#2563eb",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    paddingBottom: 4,
  },
  subheading: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 2,
  },
  listItem: { marginLeft: 10, marginBottom: 2, fontSize: 10.5 },
  header: { marginBottom: 10, textAlign: "center" },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 5,
  },
  contactLink: {
    fontSize: 11,
    color: "#2563eb",
    textDecoration: "underline",
    marginLeft: 6,
    marginRight: 6,
  },
  projectRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginBottom: 4,
  },
  link: {
    color: "#2563eb",
    textDecoration: "underline",
  },
});


const resumeData = {
  name: "Akshay Kumar Sharma",
  title: "Software Developer",
  phone: "+91-979231XXXX",
  email: "XYZ@gmail.com",
  github: "https://github.com/XYZ",
  linkedin: "https://linkedin.com/in/XYZ",
  education: [
    {
      degree: "MCA - Master of Computer Applications",
      institution: "Central University of Haryana , Mahendargarh",
      period: "2019 – 2022",
    },
    {
      degree: "BCA - Bachelor of Computer Applications",
      institution: "Dr. Virendra Swarup Institute of Computer Studies, Kanpur",
      period: "2015 – 2018",
    },
  ],
  skills: {
    "Programming Languages":
      "JavaScript, TypeScript, C/C++, HTML, CSS, Core-Java, Bash",
    "Frameworks & Tools":
      "React.js, Redux (Thunk, Saga, Toolkit), PWA, Vanilla JS",
    "UI Frameworks":
      "Tailwind CSS, Material-UI, Bootstrap, Shadcn-UI, Semantic-UI",
    "Other Skills":
      "GitHub, Supabase, VS Code, MongoDB, MySQL, REST APIs, docker, firebase",
  },
  experience: [
    {
      company: "Appventurez Mobitech Pvt. Ltd",
      location: "Noida",
      title: "Software Developer",
      period: "Jan 2022 – Present",
      achievements: [
        "Developed scalable, modular frontend apps using React.js & Redux",
        "Integrated REST APIs with performance-oriented architecture",
        "Delivered full client-facing solutions independently",
        "Independently developed frontend of two projects from scratch with fully reliable and optimized code",
      ],
    },
      {
      company: "Appventurez Mobitech Pvt. Ltd",
      location: "Noida",
      title: "Software Developer",
      period: "Jan 2022 – Present",
      achievements: [
        "Developed scalable, modular frontend apps using React.js & Redux",
        "Integrated REST APIs with performance-oriented architecture",
        "Delivered full client-facing solutions independently",
        "Independently developed frontend of two projects from scratch with fully reliable and optimized code",
      ],
    },
  ],
  projects: [
    {
      name: "Crocs",
      url: "https://www.crocs.in/",
      period: "Feb 2022 – Sep 2022",
      description:
        "Online store for Crocs footwear offering comfortable, stylish, and lightweight clogs",
      achievements: [
        "Implemented data integration, responsive UI, and Google Data Layer",
        "Integrated chatbot seamlessly with HRMS system for secure and accurate responses",
        "Worked on the Product Listing and Checkout module, ensuring performance optimization and cross-device compatibility"
      ],
      exposures: "React.js, Redux-Thunk, Material-UI",
    },
    {
      name: "Soch",
      url: "https://www.soch.com/in/",
      period: "Oct 2022 – Mar 2023",
      description:
        "Platform for Indian ethnic wear brand offering wide range of stylish wears",
      achievements: [
        "Checkout, order tracking, and PayPal integration",
        "Google Maps API for address selection",
        "Optimized frontend performance for faster page load and improved mobile responsiveness"
      ],
      exposures: "PWA, Tailwind CSS",
    },
    {
      name: "SF-Cable",
      url: "https://www.sfcable.com/",
      period: "Apr 2023 – Jan 2024",
      description:
        "Online retailer specializing in electronic accessories at competitive prices",
      achievements: [
        "Developed company B2B module, dynamic packages, user authentication (OAuth 2.0)",
        "Implemented push notifications",
        "Worked on the Order Management and Pricing module, enhancing real-time updates and bulk pricing logic"
      ],
      exposures: "PWA, Tailwind CSS",
    },
    {
      name: "Akouo Acoustics",
      url: "https://designtool.akouo-acoustics.com/",
      period: "Aug 2024 – Oct 2024",
      description:
        "Interactive acoustic design tool for real-time canvas editing and layout visualization",
      achievements: [
        "Canvas editor using Konva.js for dynamic rendering",
        "Integrated group-drag-drop and dynamic visualization",
        "Contributed to professional-grade tool for acoustics design professionals",
        "Enable user to create, modify, and visualise custom acoustic panel layouts",
      ],
      exposures: "React.js, Redux Toolkit, Kanva.js, Material-UI",
    },
    {
      name: "Orbit Welding Admin",
      url: "https://orbitadmin.ovaloqualitygroup.com/",
      period: "Oct 2024 – Jan 2025",
      description: "Welding application with custom web admin panel",
      achievements: [
        "Built dashboard with RBAC and real-time graphs",
        "Independently developed dynamic admin panel from scratch",
        "Designed and implemented dashboard functionalities for managing welding operations",
        "Integrated user authentication, role-based access, and real-time data visualization",
      ],
      exposures: "React.js, Material-UI, Redux Toolkit",
    },
    {
      name: "Eduasis Learning Platform",
      url: "",
      period: "Jan 2025 – May 2025",
      description: "AI-powered Learning app with GPT and Supabase",
      achievements: [
        "Implemented ChatGPT function calling on server side using Supabase Edge Functions",
        "Built secure and responsive login system with real-time data handling",
        "Implemented secure user authentication and session management with Supabase Auth",
        "Leveraged Supabase for real-time database operations and serverless backend functions",
      ],
      exposures: "React.js, Tailwind CSS, Supabase",
    },
  ],
};


const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{resumeData.name}</Text>
        <Text>{resumeData.title}</Text>
        <View style={styles.contactRow}>
          <Text>{resumeData.phone} | </Text>
          <Link style={styles.contactLink} src={`mailto:${resumeData.email}`}>
            Gmail
          </Link>
          <Text>|</Text>
          <Link style={styles.contactLink} src={resumeData.github}>
            GitHub
          </Link>
          <Text>|</Text>
          <Link style={styles.contactLink} src={resumeData.linkedin}>
            LinkedIn
          </Link>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        {Object.entries(resumeData.skills).map(([key, value]) => (
          <Text key={key} style={{ marginBottom: 5 }}>
            <Text style={{ fontWeight: "bold" }}>{key}:</Text> {value}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Professional Experience</Text>
        {resumeData.experience.map((job, idx) => (
          <View key={idx} style={{ marginBottom: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <View style={{ maxWidth: "75%" }}>
                <Text style={{ fontSize: 12, color: "#1f2937" }}>
                  <Text style={{ fontWeight: "bold", color: "#111827" }}>
                    {job.company}
                  </Text>
                  , {job.location}
                </Text>
                <Text style={{ fontSize: 11 }}>{job.title}</Text>
              </View>
              <Text style={{ fontWeight: "bold", alignSelf: "flex-start" }}>
                {job.period}
              </Text>
            </View>
            {job.achievements.map((a, i) => (
              <Text key={i} style={styles.listItem}>
                • {a}
              </Text>
            ))}
          </View>
        ))}
      </View>

      
      <View style={styles.section}>
        <Text style={styles.heading}>Key Projects</Text>
        {resumeData.projects.map((proj, i) => (
          <View key={i} style={{ marginBottom: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <View style={{ flexDirection: "column", maxWidth: "75%" }}>
                <Text style={styles.subheading}>{proj.name}</Text>
                {proj.url && (
                  <Link style={styles.link} src={proj.url}>
                    {proj.url}
                  </Link>
                )}
              </View>
              <Text
                style={[
                  styles.text,
                  { fontWeight: "bold", alignSelf: "flex-start" },
                ]}
              >
                {proj.period}
              </Text>
            </View>

            <Text style={{ fontStyle: "italic", marginVertical: 3 }}>
              {proj.description}
            </Text>

            {proj.achievements.map((a, j) => (
              <Text key={j} style={styles.listItem}>
                • {a}
              </Text>
            ))}

            <Text style={{ marginTop: 3 }}>
              <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Exposures:
              </Text>{" "}
              {proj.exposures}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        {resumeData.education.map((edu, i) => (
          <View key={i} style={{ marginBottom: 4 }}>
            <Text style={styles.subheading}>{edu.degree}</Text>
            <Text>{edu.institution}</Text>
            <Text>{edu.period}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

function App() {
  return (
    <div className="flex justify-center mt-10">
      <PDFDownloadLink
        document={<ResumePDF />}
        fileName="Akshay_Kumar_Sharma_Resume.pdf"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download Resume PDF")}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
