import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg",
    address: "Ayodhya, Uttar Pradesh",
    description: "This is first meetup!",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2020/11/11/686262-prem-1.jpg?im=FitAndFill=(1200,900)",
    address: "Vrindavan, Uttar Pradesh",
    description: "This is second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
