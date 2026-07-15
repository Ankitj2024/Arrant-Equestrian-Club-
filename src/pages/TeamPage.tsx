import PageHeader from '../components/PageHeader';
import TeamComponent from '../components/Team';

export default function TeamPage() {
  return (
    <>
      <PageHeader 
        title="Our Team" 
        image="https://images.unsplash.com/photo-1596701258287-2efc2e0b5efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
      />
      <TeamComponent />
    </>
  );
}
