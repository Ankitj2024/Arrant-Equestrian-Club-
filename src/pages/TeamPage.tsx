import PageHeader from '../components/PageHeader';
import TeamComponent from '../components/Team';

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Championship Riders & Expert Trainers"
        image="/4.png"
      />
      <TeamComponent hideHeader={true} />
    </>
  );
}
