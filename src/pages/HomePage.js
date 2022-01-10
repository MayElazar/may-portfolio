import { React } from "react";
import Header from "../components/Header";
import Projects from "../components/projects";

import { ProjectData } from "../Data";
export default function HomePage() {
  const data = ProjectData();
  return (
    <div>
      <Header />
      <Projects data={data} />
    </div>
  );
}
