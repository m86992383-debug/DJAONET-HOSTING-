import React from "react";

export default function Dashboard() {
  return (
    <div style={{padding:"40px"}}>
      <h1>DJAONET HOSTING</h1>

      <div style={{
        background:"#18181B",
        padding:"20px",
        borderRadius:"12px",
        marginTop:"20px"
      }}>
        <h2>Dashboard</h2>

        <p>Deployments : 12</p>
        <p>Credits : 500</p>
        <p>Domains : 3</p>

        <button style={{
          padding:"10px 20px",
          background:"#3B82F6",
          border:"none",
          borderRadius:"10px",
          color:"white"
        }}>
          Upload ZIP
        </button>
      </div>
    </div>
  );
}
