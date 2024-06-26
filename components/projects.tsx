"use client";

import React from "react";
import { Project } from "./project";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { SectionHeading } from "./section-heading";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My project</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
