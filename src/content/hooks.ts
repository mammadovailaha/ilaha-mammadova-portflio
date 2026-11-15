import { useEffect, useState } from "react";
import { getCertificates, getContactDetails, getEducation, getExperience, getProfile, getProjects, getSkills, getSocialLinks, type ContentResult } from "./api";
import type { Project } from "../data/projects";
import type { Skill } from "../data/skills";
import type { ExperienceItem } from "../data/experience";
import type { Profile } from "../data/profile";
import type { SocialLink } from "../data/socialLinks";
import type { Certificate } from "../data/certificates";

function useContent<T>(load: () => Promise<T>): ContentResult<T> {
  const [state, setState] = useState<ContentResult<T>>({ data: null, loading: true, error: null });
  useEffect(() => {
    let current = true;
    load().then((data) => { if (current) setState({ data, loading: false, error: null }); })
      .catch((error: unknown) => { if (current) setState({ data: null, loading: false, error: error instanceof Error ? error : new Error("Content could not be loaded") }); });
    return () => { current = false; };
  }, [load]);
  return state;
}

export const useProjects = () => useContent<Project[]>(getProjects);
export const useSkills = () => useContent<Skill[]>(getSkills);
export const useExperience = () => useContent<ExperienceItem[]>(getExperience);
export const useEducation = () => useContent<ExperienceItem[]>(getEducation);
export const useCertificates = () => useContent<Certificate[]>(getCertificates);
export const useProfile = () => useContent<Profile>(getProfile);
export const useSocialLinks = () => useContent<SocialLink[]>(getSocialLinks);
export const useContactDetails = () => useContent<Awaited<ReturnType<typeof getContactDetails>>>(getContactDetails);
