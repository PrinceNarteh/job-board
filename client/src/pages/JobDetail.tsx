import React from "react";
import {useParams} from "react-router-dom";

const JobDetail = () => {
  const params = useParams();
  console.log(params);
  return <div>JobDetail</div>;
};

export default JobDetail;
