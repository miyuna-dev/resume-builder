import axios from "axios";
import { API_CREATE_URL } from "../../config";

axios.defaults.withCredentials = true

const create = (name, title, email, phone, linkedin, github, job, company, certificate, location, startDate, endDate, projectTitle, overview, githubLink, eduTitle, facility, eduStart, eduEnd, skill1, skill2, skill3, skill4, skill5, skill6, hobbies1, hobbies2, hobbies3, hobbies4, hobbies5, hobbies6) => {
  return axios.post(API_CREATE_URL + "create", {
    name,
    title,
    email,
    phone,
    linkedin, 
    github, 
    job,
    company,
    certificate, 
    location, 
    startDate, 
    endDate, 
    projectTitle,
    overview, 
    githubLink,
    eduTitle,
    facility,
    eduStart,
    eduEnd, 
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6, 
    hobbies1,
    hobbies2,
    hobbies3,
    hobbies4,
    hobbies5,
    hobbies6
  });
};

const ResumeService = {
   create,
}

export default ResumeService;