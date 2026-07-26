import PageHeader from '../components/PageHeader';
import ServicesComponent from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="World-Class Training & Development"
        image="/3.png"
      />
      <ServicesComponent hideHeader={true} />
      <Testimonials />
    </>
  );
}
