import React from "react";
/*import "../styles/styles.css";
import "../styles/Admin.css";*/
import styles from './Admin.module.css';
import { useState } from "react";

function Admin() {
  const [summary, setSummary] = useState("");
  const [entries, setEntries] = useState([
    {
      id: "00000001",
      summary:
        "This person may be struggling with current financial situation(s) and may be in danger of neglecting their child. Offer familial and welfare resources, and potential social service help. Reassure them that they are not alone and offer counselling and child care.",
    },
    {
      id: "00000002",
      summary:
        "This person may be struggling with a distressing mental health issue. Reassure this person that they are not alone, and offer professional mental health resources (therapy, healthcare provider(s)). Encourage this person to reach out to trusted individuals.",
    },
    {
      id: "00000003",
      summary:
        "This person is in a high risk situation. Acknowledge their feelings of fear or anxiety. Try to calm them from their emotional distress. Offer to help with this person’s feelings in the moment. Be a calming listener and connect them.",
    },
  ]);

  const data = [
    {
      id: "00000001",
      summary:
        "This person may be struggling with current financial situation(s) and may be in danger of neglecting their child. Offer familial and welfare resources, and potential social service help. Reassure them that they are not alone and offer counselling and child care.",
    },
    {
      id: "00000002",
      summary:
        "This person may be struggling with a distressing mental health issue. Reassure this person that they are not alone, and offer professional mental health resources (therapy, healthcare provider(s)). Encourage this person to reach out to trusted individuals.",
    },
    {
      id: "00000003",
      summary:
        "This person is in a high risk situation. Acknowledge their feelings of fear or anxiety. Try to calm them from their emotional distress. Offer to help with this person’s feelings in the moment. Be a calming listener and connect them.",
    },
  ];

  const handleClick = (summ) => {
    setSummary(summ);
  };

  const handleDel = (item) => {
    setEntries(entries.filter((curr)=>{
        return curr !== item;
    }));
    console.log(entries, " is new entries");
  };

  return (
    <div className={styles.admin}>
      <div className={styles.table2}>
        <table>
          <thead>
            <tr>
              <th>ID Number</th>
              <th>Summary</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <button onClick={() => handleClick(item.summary)}>
                      View
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDel(item)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.summary}>{summary}</div>
    </div>
  );
}
export default Admin;
