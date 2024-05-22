import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg",
//     address: "Ayodhya, Uttar Pradesh",
//     description: "This is first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A second Meetup",
//     image:
//       "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2020/11/11/686262-prem-1.jpg?im=FitAndFill=(1200,900)",
//     address: "Vrindavan, Uttar Pradesh",
//     description: "This is second meetup!",
//   },
// ];


function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}


export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://sumitbhardwaj2019:Sumit741@cluster0.lw305mv.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');


  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1,
  };
}

export default HomePage;
