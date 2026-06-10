import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function Leetcode() {
  const profiles = [
    {
      platform: "LeetCode",
      achievement: "Contest Rating: 1815",
      subText: "Competitive Programming & DSA",
      link: "https://leetcode.com/u/Madhuuu14/",
    },
    {
      platform: "HackerRank",
      achievement: "⭐⭐⭐⭐⭐ Problem Solving",
      subText: "5 Star Problem Solving Badge",
      link: "https://www.hackerrank.com/profile/Madhuuu_27",
    },
    {
      platform: "Smart Interviews",
      achievement: "250+ Problems Solved",
      subText: "1450+ Coins Earned",
      link: "https://hive.smartinterviews.in/profile/madhuuu_14",
    },
    {
      platform: "InterviewBit",
      achievement: "160+ Problems Solved",
      subText: "Koduru Madhu Latha",
      link: "https://www.interviewbit.com/profile/madhu_latha_koduru/",
    },
    
  ];

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "60px",
      }}
    >
      

      {profiles.map((profile, index) => (
        <Col
          md={5}
          className="project-card"
          key={index}
          style={{
            marginBottom: "-60px",
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        >
          <Card
            className="project-card-view"
            style={{
              height: "100%",
              border: "1px solid rgba(200,137,230,0.3)",
              boxShadow: "0 4px 15px rgba(200,137,230,0.15)",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center",
                padding: "1.2rem",
              }}
            >
              <div>
                <Card.Title
                  style={{
                    fontSize: "1.5rem",
                    color: "#c770f0",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  {profile.platform}
                </Card.Title>

                <Card.Text
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {profile.achievement}
                </Card.Text>

                <Card.Text
                  style={{
                    color: "#bdbdbd",
                    minHeight: "35px",
                    marginBottom: "10px",
                  }}
                >
                  {profile.subText}
                </Card.Text>
              </div>

              <Button
                variant="primary"
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#623686",
                  borderColor: "#623686",
                  borderRadius: "10px",
                  fontWeight: "500",
                }}
              >
                View Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Leetcode;