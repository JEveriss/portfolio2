import React, { useState } from "react";
import { Websites } from "./websitesCard";
import { websites } from "../data/data";
import Button from "./button";

const allCategories = [
  "All",
  ...new Set(websites.map((website) => website.category)),
];

console.log(allCategories);

export default function WebsiteContainer() {
  const [websiteCard, setWebsiteCard] = useState(websites);
  const [button, setButton] = useState(allCategories);
  console.log(setButton);

  const filter = (button) => {
    if (button === "All") {
      return setWebsiteCard(websites);
    }

    let filteredWebsites = websites.filter(
      (website) => website.category === button
    );
    setWebsiteCard(filteredWebsites);
  };

  return (
    <div>
      <div>
        <h1>Design Stuff</h1>
      </div>
      <Button button={button} filter={filter} />
      <Websites websiteCard={websiteCard} />
    </div>
  );
}
