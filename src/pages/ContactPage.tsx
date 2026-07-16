import PageHeader from '../components/PageHeader';
import ContactComponent from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd Love to Hear From You"
        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80"
      />
      <ContactComponent />
    </>
  );
}
