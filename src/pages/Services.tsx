import PageHeader from '../components/PageHeader';
import ServicesComponent from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="World-Class Training & Development"
        image="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
      />
      <ServicesComponent hideHeader={true} />
      <Testimonials />
    </>
  );
}
