import PageHeader from '../components/PageHeader';
import ContactComponent from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        image="https://images.unsplash.com/photo-1549447291-5374465b6f3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80" 
      />
      <ContactComponent />
    </>
  );
}
