import React, { useState, useEffect } from "react";
import { data } from "../data/data";
import Button from "./button";
import WebsiteCard from "./websiteCard";

function WebsiteContainer() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = data.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <div>
      <Button frilter={filter} setFilter={setFilter} />

      <WebsiteCard projects={projects} />
    </div>
  );
}

export default WebsiteContainer;
