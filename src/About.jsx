import { Card } from "antd";

const About = () => {
  return (
    <div className="flex text-center flex-col items-center justify-center h-screen">
      <Card>
        <div className="mb-4    ">
          <img
            src="https://pbs.twimg.com/profile_images/1640574015516594177/JHuG9Yl6_400x400.jpg"
            className="rounded-lg w-64 h-64 object-cover shadow-2xl mx-auto"
          />
        </div>

        <p className="text-xl font-bold">
          I only look at people when I am drunk
        </p>
      </Card>
    </div>
  );
};
export default About;
