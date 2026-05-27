import "./Education.css";

import {
  GraduationCap,
  BookOpen,
  Award,
  MapPin,
  ExternalLink
} from "lucide-react";

const educationData = [
  {
    logo: "/images/tamu.png",

    university: "Texas A&M University–Corpus Christi",

    degree: "Master of Science in Computer Science",

    date: "Aug 2024 – May 2026",

    location: "Corpus Christi, TX",

    courses: [
      "Human-Computer Interaction",
      "Computer Vision",
      "Deep Learning",
      "Network Security",
      "Advanced Software Engineering",
      
    ]
  },

  {
    logo: "/images/gitam.jpg",

    university: "GITAM Deemed to be University",

    degree: "Bachelor of Technology in Computer Science",

    date: "Aug 2020 – May 2024",

    location: "Bengaluru, India",

    courses: [
      "AI Tools",
      "Machine Learning",
      "Big Data",
      "Web Application Development",
      "Artificial Intelligence",
      "Design and Analysis of Algorithms",
      "DBMS",
      
      
    ]
  }
];


const certifications = [

{
img:"/certificates/cert1.png",

pdf:"/pdfs/cert1.pdf",

title:"Introduction to AI",

issuer:"IBM",
},

{
img:"/certificates/cert2.png",

pdf:"/pdfs/cert2.pdf",

title:"AWS Cloud Practitioner",

issuer:"Eduskills",
},

{
img:"/certificates/cert3.png",

pdf:"/pdfs/cert3.pdf",

title:"Python and Django Full-Stack Web Development",

issuer:"Udemy",
},

{
img:"/certificates/cert4.png",

pdf:"/pdfs/cert4.pdf",

title:"The Structured Query Language (SQL)",

issuer:"University of Colorado Boulder",

},

{
img:"/certificates/cert5.png",

pdf:"/pdfs/cert5.pdf",

title:"Getting Started with R",

issuer:"Coursera",
},

{
img:"/certificates/cert6.png",

pdf:"/pdfs/cert6.pdf",

title:"Software Development Processes and Methodologies",

issuer:"University of Minnesota",

},

{
img:"/certificates/cert7.png",

pdf:"/pdfs/cert7.pdf",

title:"Effective Problem-Solving and Decision-Making",

issuer:"Coursera",

}

];



function Education() {

  return (

<section className="education-section" id="education">

<div className="education-container">

<div className="section-heading">

<div className="heading-icon">

<GraduationCap size={34}/>

</div>

<div>

<h2>

Education <span>& Certifications</span>

</h2>

<p>

My academic background and professional certifications.

</p>

</div>

</div>



<div className="sub-title">

<BookOpen size={20}/>

<h3>Education</h3>

</div>



<div className="education-grid">

{educationData.map((edu,index)=>(

<div className="education-card" key={index}>

<div className="edu-top">

<img src={edu.logo} alt={edu.university}/>

<div className="edu-info">

<h4>{edu.university}</h4>

<p>{edu.degree}</p>

              <div className="edu-meta">
                <span>
                  <MapPin size={15} />
                  {edu.location}
                </span>
              </div>

</div>

</div>



<div className="divider"></div>



<div className="course-area">

<h5>Relevant Coursework:</h5>

<div className="course-tags">

{edu.courses.map((course,i)=>(

<span key={i}>{course}</span>

))}

</div>

</div>

</div>

))}

</div>



<div className="sub-title cert-title">

<Award size={20}/>

<h3>Certifications</h3>

</div>



<div className="cert-grid">

{certifications.map((cert,index)=>(

<a
href={cert.pdf}
target="_blank"
rel="noreferrer"
className="cert-card"
key={index}
>

<img src={cert.img} alt={cert.title}/>

<div className="cert-content">

<h4>{cert.title}</h4>

<p>{cert.issuer}</p>

<span>{cert.year}</span>

<div className="cert-link-icon">

<ExternalLink size={16}/>

</div>

</div>

</a>

))}

</div>

</div>

</section>

  );

}

export default Education;