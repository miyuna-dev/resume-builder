import React, { useState, useEffect } from "react";
import InputControl from "./InputControl";
import { X } from "react-feather";

const Editor = (props) => {
   const sections = props.sections;
   const information = props.information;
 
   const [activeSectionKey, setActiveSectionKey] = useState(
     Object.keys(sections)[0]
   );
   const [activeInformation, setActiveInformation] = useState(
     information[sections[Object.keys(sections)[0]]]
   );
   const [activeDetailIndex, setActiveDetailIndex] = useState(0);
   const [sectionTitle, setSectionTitle] = useState(
     sections[Object.keys(sections)[0]]
   );
   const [values, setValues] = useState({
     name: activeInformation?.detail?.name || "",
     title: activeInformation?.detail?.title || "",
     linkedin: activeInformation?.detail?.linkedin || "",
     github: activeInformation?.detail?.github || "",
     phone: activeInformation?.detail?.phone || "",
     email: activeInformation?.detail?.email || "",
     skillOne: activeInformation?.detail?.skillOne || "",
     skillTwo: activeInformation?.detail?.skillTwo || "",
     skillThree: activeInformation?.detail?.skillThree || "",
     skillFour: activeInformation?.detail?.skillFour || "",
     skillFive: activeInformation?.detail?.skillFive || "",
     skillSix: activeInformation?.detail?.skillSix || "",
     interestOne: activeInformation?.detail?.interestOne || "",
     interestTwo: activeInformation?.detail?.interestTwo || "",
     interestThree: activeInformation?.detail?.interestThree || "",
     interestFour: activeInformation?.detail?.interestFour || "",
     interestFive: activeInformation?.detail?.interestFive || "",
     interestSix: activeInformation?.detail?.interestSix || "",
   });
 
   const handlePointUpdate = (value, index) => {
     const tempValues = { ...values };
     if (!Array.isArray(tempValues.points)) tempValues.points = [];
     tempValues.points[index] = value;
     setValues(tempValues);
   };

   /** PERSONAL INFO EDITOR */
   const infoBody = (
      <div className="detail">
        <div className="row">
          <InputControl
            label="Name"
            placeholder="Enter your full name eg. Aashu"
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter your title eg. Frontend developer"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
        <div className="row">
          <InputControl
            label="Linkedin Link"
            value={values.linkedin}
            placeholder="Enter your linkedin profile link"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, linkedin: event.target.value }))
            }
          />
          <InputControl
            label="Github Link"
            value={values.github}
            placeholder="Enter your github profile link"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, github: event.target.value }))
            }
          />
        </div>
        <div className="row">
          <InputControl
            label="Email"
            value={values.email}
            placeholder="Enter your email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label="Enter phone"
            value={values.phone}
            placeholder="Enter your phone number"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, phone: event.target.value }))
            }
          />
        </div>
      </div>
    );

   /** WORK EXPERIENCE EDITOR */
   const workExpBody = (
      <div className="detail">
        <div className="row">
          <InputControl
            label="Title"
            placeholder="Enter title eg. Frontend developer"
            value={values.title}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
          <InputControl
            label="Company Name"
            placeholder="Enter company name eg. amazon"
            value={values.companyName}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, companyName: event.target.value }))
            }
          />
        </div>
        <div className="row">
          <InputControl
            label="Certificate Link"
            placeholder="Enter certificate link"
            value={values.certificationLink}
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                certificationLink: event.target.value,
              }))
            }
          />
          <InputControl
            label="Location"
            placeholder="Enter location eg. Remote"
            value={values.location}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, location: event.target.value }))
            }
          />
        </div>
        <div className="row">
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of work"
            value={values.startDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, startDate: event.target.value }))
            }
          />
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of work"
            value={values.endDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, endDate: event.target.value }))
            }
          />
        </div>
  
        <div className="column">
          <label>Enter work description</label>
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 0)}
          />
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 1)}
          />
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 2)}
          />
        </div>
      </div>
    );

   /** PROJECTS EDITOR */
    const projectBody = (
      <div className="detail">
        <div className="row">
          <InputControl
            label="Title"
            placeholder="Enter title eg. Chat app"
            value={values.title}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
        <InputControl
          label="Overview"
          placeholder="Enter basic overview of project"
          value={values.overview}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, overview: event.target.value }))
          }
        />
        <div className="row">
          <InputControl
            label="Deployed Link"
            placeholder="Enter deployed link of project"
            value={values.link}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, link: event.target.value }))
            }
          />
          <InputControl
            label="Github Link"
            placeholder="Enter github link of project"
            value={values.github}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, github: event.target.value }))
            }
          />
        </div>
        <div className="column">
          <label>Enter project description</label>
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 0)}
          />
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 1)}
          />
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 2)}
          />
          <InputControl
            placeholder="Line 4"
            value={values.points ? values.points[3] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 3)}
          />
        </div>
      </div>
    );

   /** EDUCATION EDITOR */
    const educationBody = (
      <div className="detail">
        <div className="row">
          <InputControl
            label="Title"
            placeholder="Enter title eg. B-tech"
            value={values.title}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
        <InputControl
          label="College/School Name"
          placeholder="Enter name of your college/school"
          value={values.college}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, college: event.target.value }))
          }
        />
        <div className="row">
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of this education"
            value={values.startDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, startDate: event.target.value }))
            }
          />
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of this education"
            value={values.endDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, endDate: event.target.value }))
            }
          />
        </div>
      </div>
    );

   /** EXTRA DETAILS EDITOR */
   const extraDetailsBody = (
      <div className="detail">
         <h4>Skills / Languages</h4>
         <div className="row">
            <InputControl 
               label="Skill 1"
               placeholder="Enter your skill"
               value={values.skillOne}
               onChange={(event) =>
                 setValues((prev) => ({ ...prev, skillOne: event.target.value }))
               }
            />
            <InputControl 
               label="Skill 2"
               placeholder="Enter your skill"
               value={values.skillTwo}
               onChange={(event) =>
                  setValues((prev) => ({ ...prev, skillTwo: event.target.value }))
                }
            />
            <InputControl 
               label="Skill 3"
               placeholder="Enter your skill"
               value={values.skillThree}
               onChange={(event) =>
                  setValues((prev) => ({ ...prev, skillThree: event.target.value }))
                }
            />
         </div>
         <div className="row">
            <InputControl 
               label="Skill 4"
               placeholder="Enter your skill"
               value={values.skillFour}
               onChange={(event) =>
                 setValues((prev) => ({ ...prev, skillFour: event.target.value }))
               }
            />
            <InputControl 
               label="Skill 3"
               placeholder="Enter your skill"
               value={values.skillFive}
               onChange={(event) =>
                  setValues((prev) => ({ ...prev, skillFive: event.target.value }))
                }
            />
            <InputControl 
               label="Skill 6"
               placeholder="Enter your skill"
               value={values.skillSix}
               onChange={(event) =>
                  setValues((prev) => ({ ...prev, skillSix: event.target.value }))
                }
            />
         </div>
         <h4>Interests / Hobbies </h4>
         <div className="row">
            <InputControl 
               label="Interest 1"
               placeholder="Enter your interest"
               value={values.interestOne}
               onChange={(event) =>
                  setValues((prev) => ({ ...prev, interestOne: event.target.value }))
                }
            />
            <InputControl 
               label="Interest 2"
               placeholder="Enter your interest"
               value={values.interestTwo}
               onChange={(event) =>
                  setValues((prev) => ({ ...prev, interestTwo: event.target.value }))
                }
            />
            <InputControl 
               label="Interest 3"
               placeholder="Enter your interest"
               value={values.interestThree}
               onChange={(event) =>
                  setValues((prev) => ({ ...prev, interestThree: event.target.value }))
                }
            />
         </div>
         <div className="row">
            <InputControl 
               label="Interest 4"
               placeholder="Enter your interest"
               value={values.interestFour}
               onChange={(event) =>
                  setValues((prev) => ({ ...prev, interestFour: event.target.value }))
                }
            />
            <InputControl 
               label="Interest 5"
               placeholder="Enter your interest"
               value={values.interestFive}
               onChange={(event) =>
                  setValues((prev) => ({ ...prev, interestFive: event.target.value }))
                }
            />
            <InputControl 
               label="Interest 6"
               placeholder="Enter your interest"
               value={values.interestSix}
               onChange={(event) =>
                  setValues((prev) => ({ ...prev, interestSix: event.target.value }))
                }
            />
         </div>
      </div>
   )

    const generateBody = () => {
      switch (sections[activeSectionKey]) {
        case sections.basicInfo:
          return infoBody;
        case sections.workExp:
          return workExpBody;
        case sections.project:
          return projectBody;
        case sections.education:
          return educationBody;
        case sections.extraDetails:
          return extraDetailsBody;
        default:
          return null;
      }
    };
  
    const handleSubmission = () => {
      switch (sections[activeSectionKey]) {
        case sections.basicInfo: {
          const tempDetail = {
            name: values.name,
            title: values.title,
            linkedin: values.linkedin,
            github: values.github,
            email: values.email,
            phone: values.phone,
          };
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.basicInfo]: {
              ...prev[sections.basicInfo],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.workExp: {
          const tempDetail = {
            certificationLink: values.certificationLink,
            title: values.title,
            startDate: values.startDate,
            endDate: values.endDate,
            companyName: values.companyName,
            location: values.location,
            points: values.points,
          };

          const tempDetails = [...information[sections.workExp]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.workExp]: {
              ...prev[sections.workExp],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.project: {
          const tempDetail = {
            link: values.link,
            title: values.title,
            overview: values.overview,
            github: values.github,
            points: values.points,
          };

          const tempDetails = [...information[sections.project]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.project]: {
              ...prev[sections.project],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.education: {
          const tempDetail = {
            title: values.title,
            college: values.college,
            startDate: values.startDate,
            endDate: values.endDate,
          };

          const tempDetails = [...information[sections.education]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.education]: {
              ...prev[sections.education],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }

        case sections.extraDetails: {
         const tempDetail = {
            skillOne: values.skillOne,
            skillTwo: values.skillTwo,
            skillThree: values.skillThree,
            skillFour: values.skillFour,
            skillFive: values.skillFive,
            skillSix: values.skillSix,
            interestOne: values.interestOne,
            interestTwo: values.interestTwo,
            interestThree: values.interestThree,
            interestFour: values.interestFour,
            interestFive: values.interestFive,
            interestSix: values.interestSix,
         };
 
         props.setInformation((prev) => ({
           ...prev,
           [sections.extraDetails]: {
             ...prev[sections.extraDetails],
             detail: tempDetail,
             sectionTitle,
           },
         }));
         break;
       }
      }
    };
  
    const handleAddNew = () => {
      const details = activeInformation?.details;
      if (!details) return;
      const lastDetail = details.slice(-1)[0];
      if (!Object.keys(lastDetail).length) return;
      details?.push({});
  
      props.setInformation((prev) => ({
        ...prev,
        [sections[activeSectionKey]]: {
          ...information[sections[activeSectionKey]],
          details: details,
        },
      }));
      setActiveDetailIndex(details?.length - 1);
    };
  
    const handleDeleteDetail = (index) => {
      const details = activeInformation?.details
        ? [...activeInformation?.details]
        : "";
      if (!details) return;
      details.splice(index, 1);
      props.setInformation((prev) => ({
        ...prev,
        [sections[activeSectionKey]]: {
          ...information[sections[activeSectionKey]],
          details: details,
        },
      }));
  
      setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
    };
  
    useEffect(() => {
      const activeInfo = information[sections[activeSectionKey]];
      setActiveInformation(activeInfo);
      setSectionTitle(sections[activeSectionKey]);
      setActiveDetailIndex(0);
      setValues({
        name: activeInfo?.detail?.name || "",
        overview: activeInfo?.details
          ? activeInfo.details[0]?.overview || ""
          : "",
        link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
        certificationLink: activeInfo?.details
          ? activeInfo.details[0]?.certificationLink || ""
          : "",
        companyName: activeInfo?.details
          ? activeInfo.details[0]?.companyName || ""
          : "",
        college: activeInfo?.details
          ? activeInfo.details[0]?.college || ""
          : "",
        location: activeInfo?.details
          ? activeInfo.details[0]?.location || ""
          : "",
        startDate: activeInfo?.details
          ? activeInfo.details[0]?.startDate || ""
          : "",
        endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
        points: activeInfo?.details
          ? activeInfo.details[0]?.points
            ? [...activeInfo.details[0]?.points]
            : ""
          : activeInfo?.points
          ? [...activeInfo.points]
          : "",
        title: activeInfo?.details
          ? activeInfo.details[0]?.title || ""
          : activeInfo?.detail?.title || "",
        linkedin: activeInfo?.detail?.linkedin || "",
        github: activeInfo?.details
          ? activeInfo.details[0]?.github || ""
          : activeInfo?.detail?.github || "",
        phone: activeInfo?.detail?.phone || "",
        email: activeInfo?.detail?.email || "",
        skillOne: activeInfo?.detail?.skillOne || "",
        skillTwo: activeInfo?.detail?.skillTwo || "",
        skillThree: activeInfo?.detail?.skillThree || "",
        skillFour: activeInfo?.detail?.skillFour || "",
        skillFive: activeInfo?.detail?.skillFive || "",
        skillSix: activeInfo?.detail?.skillSix || "",
        interestOne: activeInfo?.detail?.interestOne || "",
        interestTwo: activeInfo?.detail?.interestTwo || "",
        interestThree: activeInfo?.detail?.interestThree || "",
        interestFour: activeInfo?.detail?.interestFour || "",
        interestFive: activeInfo?.detail?.interestFive || "",
        interestSix: activeInfo?.detail?.interestSix || "",
      });
    }, [activeSectionKey]);
  
    useEffect(() => {
      setActiveInformation(information[sections[activeSectionKey]]);
    }, [information]);
  
    useEffect(() => {
      const details = activeInformation?.details;
      if (!details) return;
  
      const activeInfo = information[sections[activeSectionKey]];
      setValues({
        overview: activeInfo.details[activeDetailIndex]?.overview || "",
        link: activeInfo.details[activeDetailIndex]?.link || "",
        certificationLink:
          activeInfo.details[activeDetailIndex]?.certificationLink || "",
        companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
        location: activeInfo.details[activeDetailIndex]?.location || "",
        startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
        endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
        points: activeInfo.details[activeDetailIndex]?.points || "",
        title: activeInfo.details[activeDetailIndex]?.title || "",
        linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
        github: activeInfo.details[activeDetailIndex]?.github || "",
        college: activeInfo.details[activeDetailIndex]?.college || "",
      });
    }, [activeDetailIndex]);  

  return (
    <div className="editor">
      <div className="header">
         {Object.keys(sections)?.map((key) => (
            <div 
               className={`section ${activeSectionKey === key ? "active" : " "}`} 
               key={key}
               onClick={() => setActiveSectionKey(key)}
            >
               {sections[key]}
            </div>
         ))}
      </div>

      <div className="body">
         <InputControl 
            label="Section Title" 
            placeholder="Enter the section title" 
            value={sectionTitle}
            onChange={(event) => setSectionTitle(event.target.value)}
         />

         <div className="chips">
            {activeInformation?.details
               ? activeInformation?.details?.map((item, index) => (
                  <div
                     className={`chip ${
                     activeDetailIndex === index ? "active" : ""
                     }`}
                     key={item.title + index}
                     onClick={() => setActiveDetailIndex(index)}
                  >
                     <p>
                     {sections[activeSectionKey]} {index + 1}
                     </p>
                     <X
                     onClick={(event) => {
                        event.stopPropagation();
                        handleDeleteDetail(index);
                     }}
                     />
                  </div>
               ))
               : ""}
            {activeInformation?.details &&
            activeInformation?.details?.length > 0 ? (
               <div className="new" onClick={handleAddNew}>
               +New
               </div>
            ) : (
               ""
            )}
        </div>

        {generateBody()}

        <button onClick={handleSubmission}>Save</button>
      
      </div>
    </div>
  )
}

export default Editor