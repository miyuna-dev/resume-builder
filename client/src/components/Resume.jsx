import React, { useState, useEffect, useRef, forwardRef } from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const info = {
    basicInfo: information[sections.basicInfo],
    workExp: information[sections.workExp],
    project: information[sections.project],
    education: information[sections.education],
    extraDetails: information[sections.extraDetails],
  };

  /** FORMAT DATE TO DAY/MONTH/YEAR */
  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => setTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`section ${
          info.workExp?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">Work Experience</div>
        <div className="content">
          {info.workExp?.details?.map((item) => (
            <div className="item" key={item.title}>
              {item.title ? (
                <p className="title">{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className="subTitle">{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className="link" href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className="date">
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className="date">
                  <MapPin />{item.location}
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className="points">
                  {item.points?.map((elem, index) => (
                    <li className="point" key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => setTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`section ${
          info.project?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">{info.project.sectionTitle}</div>
        <div className="content">
          {info.project?.details?.map((item) => (
            <div className="item">
              {item.title ? (
                <p className="title">{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className="link" href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className="link" href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className="overview">{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className="points">
                  {item.points?.map((elem, index) => (
                    <li className="point" key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => setTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`section ${
          info.education?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">
          {info.education?.sectionTitle}
        </div>
        <div className="content">
          {info.education?.details?.map((item) => (
            <div className="item">
              {item.title ? (
                <p className="title">{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className="subTitle">{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className="date">
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.extraDetails]: (
      <div
        key={"extraDetails"}
        draggable
        onDragOver={() => setTarget(info.extraDetails?.id)}
        onDragEnd={() => setSource(info.extraDetails?.id)}
        className={`section ${
          info.extraDetails?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">{info.extraDetails?.sectionTitle}</div>
        <div className="content">
            <div className="the-title">
               <p className="title">Skills / Languages</p>
            </div>
            <div className="item skills">
               {info.extraDetails?.detail.skillOne ? (
                  <p className="overview">{info.extraDetails?.detail.skillOne},</p>
                  ) : (
                  <span />
               )}
               {info.extraDetails?.detail.skillTwo ? (
                  <p className="overview">{info.extraDetails?.detail.skillTwo},</p>
               ) : (
                  <span />
               )}
               {info.extraDetails?.detail.skillThree ? (
                  <p className="overview">{info.extraDetails?.detail.skillThree},</p>
               ) : (
                  <span />
               )}
               {info.extraDetails?.detail.skillFour ? (
                  <p className="overview">{info.extraDetails?.detail.skillFour},</p>
                  ) : (
                  <span />
               )}
               {info.extraDetails?.detail.skillFive ? (
                  <p className="overview">{info.extraDetails?.detail.skillFive},</p>
               ) : (
                  <span />
               )}
               {info.extraDetails?.detail.skillSix ? (
                  <p className="overview">{info.extraDetails?.detail.skillSix}</p>
               ) : (
                  <span />
               )}
            </div>
            <div className="the-title">
               <p className="title">Interests / Hobbies</p>
            </div>
            <div className="item interests">
               {info.extraDetails?.detail.interestOne ? (
                  <p className="overview">{info.extraDetails?.detail.interestOne},</p>
               ) : (
                  <span />
               )}
               {info.extraDetails?.detail.interestTwo ? (
                  <p className="overview">{info.extraDetails?.detail.interestTwo},</p>
               ) : (
                  <span />
               )}
               {info.extraDetails?.detail.interestThree ? (
                  <p className="overview">{info.extraDetails?.detail.interestThree},</p>
               ) : (
                  <span />
               )}
               {info.extraDetails?.detail.interestFour ? (
                  <p className="overview">{info.extraDetails?.detail.interestFour},</p>
               ) : (
                  <span />
               )}
               {info.extraDetails?.detail.interestFive ? (
                  <p className="overview">{info.extraDetails?.detail.interestFive},</p>
               ) : (
                  <span />
               )}
               {info.extraDetails?.detail.interestSix ? (
                  <p className="overview">{info.extraDetails?.detail.interestSix}</p>
               ) : (
                  <span />
               )}
            </div>
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [sections.workExp, sections.education],
      [sections.project,  sections.extraDetails],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  return (
    <div ref={ref} id="resume">
      <div ref={containerRef} className="container">
        <div className="header">
          <p className="heading">{info.basicInfo?.detail?.name}</p>
          <p className="subHeading">{info.basicInfo?.detail?.title}</p>

          <div className="links">
            {info.basicInfo?.detail?.email ? (
              <a className="link" type="email">
                <AtSign /> {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.phone ? (
              <a className="link">
                <Phone /> {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedin ? (
              <a className="link">
                <Linkedin /> {info.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.github ? (
              <a className="link">
                <GitHub /> {info.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>

        <div className="main">
          <div className="col-1">
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          <div className="col-2">
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
