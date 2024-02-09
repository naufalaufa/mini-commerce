import { useAuthStore } from "src/store/useAuthStore";

const About = () => {
  const user = useAuthStore((state) => state.user);

  return <div>{user.name}</div>;
};

export default About;
