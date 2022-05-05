import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_JOB} from "../graphql/queries";

const JobDetail = () => {
  const {jobId} = useParams();
  const {loading, error, data} = useQuery(GET_JOB, {
    variables: {
      jobId,
    },
  });

  console.log(data);
  console.log(error);

  return <div>JobDetail</div>;
};

export default JobDetail;
