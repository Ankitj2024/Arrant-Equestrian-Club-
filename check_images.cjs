const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1596701258287-2efc2e0b5efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1599385960416-2c9b4e34f89d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1522064104273-500b1d033a00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
  'https://images.unsplash.com/photo-1518174415518-e3da3422079f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1549447291-5374465b6f3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80',
  'https://images.unsplash.com/photo-1504961812423-fb94e1d1f0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1579541592065-da8a15e49bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80'
];

async function checkUrls() {
  for (const urlStr of urls) {
    await new Promise((resolve) => {
      https.get(urlStr, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          console.log(`OK: ${urlStr}`);
        } else {
          console.error(`ERROR ${res.statusCode}: ${urlStr}`);
        }
        res.resume(); // consume response data to free up memory
        resolve();
      }).on('error', (e) => {
        console.error(`ERROR: ${e.message} on ${urlStr}`);
        resolve();
      });
    });
  }
}

checkUrls();
