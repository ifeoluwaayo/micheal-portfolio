import React from "react";
import ProjectPage from "./components/ProjectPage";
import { Metadata, ResolvingMetadata } from "next";
import { projects } from "../../../../data";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | ResolvingMetadata> {
  const { slug } = params;

  return {
    title: `${slug[0]} | Micheal Ighietsemhe`,
    description: `Project ${slug[0]} by Micheal Ighietsemhe`,
  };
}

const page = ({ params }: any) => {
  const { slug } = params;

  const project = projects.find((project: any) => project.id === slug[0]);

  return <ProjectPage project={project} />;
};

export default page;
