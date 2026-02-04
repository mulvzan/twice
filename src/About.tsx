import { Card } from "antd";

const About: React.FC = () => {
  return (
    <div className=" mt-10 flex text-center flex-col items-center  h-screen">
      <Card className="">
        <div className="mb-4    ">
          <img
            src="https://pbs.twimg.com/media/G_6d6ePawAADBy2?format=jpg&name=large"
            className="rounded-lg  object-cover shadow-2xl mx-auto  "
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
