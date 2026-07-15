import PageHeader from '../components/PageHeader';
import ServicesComponent from '../components/Services';

export default function Services() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        image="https://images.unsplash.com/photo-1599385960416-2c9b4e34f89d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
      />
      <ServicesComponent />
    </>
  );
}
