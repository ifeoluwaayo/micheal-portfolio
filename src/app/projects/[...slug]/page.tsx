import React from "react";
import ProjectPage from "./components/ProjectPage";
import { Metadata, ResolvingMetadata } from "next";
import { projects } from "../../../../data";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | ResolvingMetadata> {
  const { slug } = params;
  const id = slug[0];

  const project: any = projects.find(
    (project: any) => project.name.toLowerCase().replaceAll(" ", "-") === id
  );

  return {
    title: `${project.name} | Micheal Ighietsemhe`,
    description: `${project.description} By Micheal Ighietsemhe`,
  };
}

const page = ({ params }: any) => {
  const { slug } = params;
  const id = slug[0];

  const project: any = projects.find(
    (project: any) => project.name.toLowerCase().replaceAll(" ", "-") === id
  );

  return <ProjectPage project={project} />;
};

export default page;
