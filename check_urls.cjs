const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
];

async function checkUrls() {
  for (const url of new Set(urls)) {
    await new Promise((resolve) => {
      https.get(url, (res) => {
        console.log(`[${res.statusCode}] ${url}`);
        resolve();
      }).on('error', (e) => {
        console.log(`[ERROR] ${url}: ${e.message}`);
        resolve();
      });
    });
  }
}
checkUrls();
