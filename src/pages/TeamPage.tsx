import PageHeader from '../components/PageHeader';
import TeamComponent from '../components/Team';

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Championship Riders & Expert Trainers"
        image="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
      />
      <TeamComponent />
    </>
  );
}
