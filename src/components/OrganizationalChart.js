import React from "react";
import "./OrganizationalChart.css"; // Import CSS file for organization chart styles

// Sample JSON data for organization structure
const orgData = {
  name: "CEO",
  shape: "circle", // Adding a shape property to specify the shape of the node
  children: [
    {
      name: "CTO",
      shape: "rectangle",
      children: [
        { name: "Engineering Manager", shape: "rectangle" },
        { name: "Lead Developer", shape: "rectangle" },
        { name: "Developer", shape: "rectangle" },
      ],
    },
    {
      name: "CFO",
      shape: "rectangle",
      children: [
        { name: "Finance Manager", shape: "rectangle" },
        { name: "Accountant", shape: "rectangle" },
      ],
    },
  ],
};

// Recursive function to render organization chart nodes
const renderOrganizationalChart = (node) => {
  return (
    <div key={node.name} className={`node ${node.shape}`}>
      <div>{node.name}</div>
      {node.children &&
        node.children.map((child) => renderOrganizationalChart(child))}
    </div>
  );
};

const OrgChart = () => {
  return (
    <div>
      <h1>Organization Chart</h1>
      {renderOrganizationalChart(orgData)}
    </div>
  );
};

export default OrgChart;
