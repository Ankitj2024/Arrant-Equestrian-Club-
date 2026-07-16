import PageHeader from '../components/PageHeader';
import NewsComponent from '../components/News';

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & Updates"
        subtitle="Latest from Arrant Equestrian Club"
        image="https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
      />
      <NewsComponent />
    </>
  );
}
