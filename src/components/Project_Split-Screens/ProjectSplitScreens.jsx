import React from 'react';
import { useParams } from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const projectCode = {
    1: `function HelloWorld() { return <h1> Hello, World!</h1>; }`,
    2: `function Greeting(props) { return <h1>Hello, {props.name} </h1>; }`,
};

const ProjectDetail = () => {
    const { id } = useParams();

    return (
        <div style={{ display: "flex", height: "100vh" }}>
        {/* Left Side - Code Display */}
        <div style={{ flex: 1, backgroundColor: "#282c34", color: "#fff", overflowY: "scroll" }}>
          <h2 style={{ padding: "10px" }}>Project Code</h2>
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {projectCode[id] || "// No code available for this project"}
          </SyntaxHighlighter>
        </div>
  
        {/* Right Side - Project Preview */}
        <div style={{ flex: 1, borderLeft: "2px solid #ccc" }}>
          <h2 style={{ padding: "10px" }}>Live Preview</h2>
          <iframe
            src={`/projects/${id}/index.html`} // Replace with your project paths
            title="Project Preview"
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
        </div>
      </div>
    );
};

export default ProjectDetail;