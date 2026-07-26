import PageHeader from '../components/PageHeader';
import ContactComponent from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd Love to Hear From You"
        image="/5.png"
      />
      <ContactComponent />
    </>
  );
}
