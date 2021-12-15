// import { FC } from "react";
import { FC, useEffect } from "react"; // for test errorBoundary

const About: FC = () => {
  useEffect(() => {
    throw new Error();
  }, []);
  return <div>About page</div>;
}; // for test errorBoundary

// const About: FC = () => <div>About page</div>;

export default About;
