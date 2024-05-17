import MeetupDetail from "@/components/meetups/MeetupDetail";
import Layout from "@/components/layout/Layout";

function MeetupDetails() {
  return (
    <Layout>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg"
        title="A First Meetup"
        address="Ayodhya, Uttar Pradesh"
        description="This is first meetup!"
      />
    </Layout>
  );
}

export default MeetupDetails;
