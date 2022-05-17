import React, { useState, useEffect } from "react";
import { data } from "../data/data";
import Button from "./button";
import styles from "./components-style/websitesCard.module.css";
import WebsiteCard from "./websitesCard";

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
    <div className={styles.websitePreviewContainer}>
      <div className={styles.labels}>
        <Button frilter={filter} setFilter={setFilter} />
      </div>

        <WebsiteCard projects={projects} />

    </div>
  );
}

export default WebsiteContainer;
