import React, { useState, useRef } from "react";
import { ArrowDown } from "react-feather";
import ReactToPrint from "react-to-print";
import Editor from "../components/Editor";
import Resume from "../components/Resume";

const Create = () => {
   const colors = ["#60b1e0", "#d179da", "#f775ab", "#d84040", "#ed8936"];

   const sections = {
      basicInfo: "Infos",
      workExp: "Work",
      project: "Projects",
      education: "Education",
      extraDetails: "Extra details",
   };

   const resumeRef = useRef();

   const [activeColor, setActiveColor] = useState(colors[0]);
   const [resumeInformation, setResumeInformation] = useState({
      [sections.basicInfo]: {
        id: sections.basicInfo,
        sectionTitle: sections.basicInfo,
        detail: {},
      },
      [sections.workExp]: {
        id: sections.workExp,
        sectionTitle: sections.workExp,
        details: [],
      },
      [sections.project]: {
        id: sections.project,
        sectionTitle: sections.project,
        details: [],
      },
      [sections.education]: {
        id: sections.education,
        sectionTitle: sections.education,
        details: [],
      },
      [sections.extraDetails]: {
        id: sections.extraDetails,
        sectionTitle: sections.extraDetails,
        detail: {},
      },
   });

   
  return (
      <div className="create container">
         <div className="toolbar">
            <div className="hide heading">
               <h1>Create your resume</h1>
            </div>
            <div className="colors">
               {colors.map((item) => ( 
                     <span
                        key={item}
                        style={{ backgroundColor: item }}
                        className={`color ${activeColor === item ? "active" : ""}`}
                        onClick={() => setActiveColor(item)}
                     />
                  ))}
            </div>
            <div className="show heading">
               <h1>Create your resume</h1>
            </div>
            <ReactToPrint
               trigger={() => {
                  return (
                  <button>
                     Download <ArrowDown />
                  </button>
                  );
               }}
               content={() => resumeRef.current}
            />
         </div>
         <div className="main">
            <Editor 
               sections={sections} 
               information={resumeInformation} 
               setInformation={setResumeInformation} 
               />
            <Resume
               ref={resumeRef}
               sections={sections}
               information={resumeInformation}
               activeColor={activeColor}
            />
         </div>
      </div>
  )
}

export default Create