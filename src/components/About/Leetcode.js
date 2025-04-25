import React from "react";
import { Row } from "react-bootstrap";
import LeetCodeCalendar from "leetcode-calendar"; // Import the component

function Leetcode() {
  // Replace 'your-leetcode-username' with the actual LeetCode username
  const leetcodeUsername = "madhuuu14";

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Solved on LeetCode</strong>
      </h1>

      {/* Add a check to ensure username is provided */}
      {leetcodeUsername && (
        <LeetCodeCalendar
          username={leetcodeUsername}
          blockSize={15}
          blockMargin={5}
          color="blue" // LeetCode's typical orange color
          fontSize={16}
          // You might need to adjust the style or container
          // depending on the component's specific requirements
          // as it might not have the exact same props as react-github-calendar
        />
      )}
      {!leetcodeUsername && (
        <p>Please provide a LeetCode username to display the calendar.</p>
      )}
    </Row>
  );
}

export default Leetcode;