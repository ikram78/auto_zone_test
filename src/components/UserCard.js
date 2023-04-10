import { Card, Col, Row } from "antd";
import { Skeleton } from 'antd';
import React from "react";
const style1 = {
  marginTop: "30px",
};
const UserCard = ({ listOfPeople,loadingListPeople }) => (
<React.Fragment>
    {loadingListPeople?<Skeleton paragraph={{ rows: 10 }}></Skeleton>:

  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      
      {listOfPeople.map((obj) => (
         <Col className="gutter-row" span={4} style={style1}>
        <Card title={obj.name}>
          <p> Height: {obj.height}</p>
          <p> Gender: {obj.gender}</p>
          <p> DOB {obj.birth_year}</p>
        </Card>
        </Col>
      ))}
    
  </Row>
  }
  </React.Fragment>
);
export default UserCard;
