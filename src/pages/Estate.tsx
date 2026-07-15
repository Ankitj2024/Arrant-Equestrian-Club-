import PageHeader from '../components/PageHeader';
import About from '../components/About';
import Facilities from '../components/Facilities';

export default function Estate() {
  return (
    <>
      <PageHeader 
        title="The Estate" 
        image="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
      />
      <About />
      <Facilities />
    </>
  );
}
