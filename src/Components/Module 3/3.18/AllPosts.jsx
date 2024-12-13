import Heading from "../3.18/Heading";
import "../3.18/ProfilePage.css";
import RecentPosts from "../3.18/RecentPosts";
import Section from "../3.18/Section";

export default function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}
