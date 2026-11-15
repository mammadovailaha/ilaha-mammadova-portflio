import { education, experience } from "../data/experience";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { contactDetails, socialLinks } from "../data/socialLinks";
import { certificates } from "../data/certificates";

export const getProjects = async () => projects;
export const getSkills = async () => skills;
export const getExperience = async () => experience;
export const getEducation = async () => education;
export const getCertificates = async () => certificates;
export const getProfile = async () => profile;
export const getSocialLinks = async () => socialLinks;
export const getContactDetails = async () => contactDetails;

export type ContentResult<T> = { data: T | null; loading: boolean; error: Error | null };
