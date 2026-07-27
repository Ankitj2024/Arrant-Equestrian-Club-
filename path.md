# Arrant Equestrian Club - Website Structure

Below is a detailed tree structure of the website representing its routing, component architecture, and the specific contents of each page.

```text
Arrant Equestrian Club
│
├── / (Home)
│   ├── Hero Section: The main hero banner with a welcoming background image.
│   ├── About Section: A brief introduction to the club's heritage and philosophy.
│   ├── Services Section: Highlights of the core equestrian services offered.
│   ├── Team Section: Introduction to the top instructors and riders.
│   ├── Testimonials Section: Reviews and experiences from clients/members.
│   ├── Gallery Section: A visual masonry grid of photos highlighting the club's activities.
│   └── Contact CTA Section: A call-to-action button that redirects users to the dedicated Contact page.
├── /services (Our Services)
│   ├── Page Header: "World-Class Training & Development" banner.
│   ├── Services Component: Detailed list of services including boarding, training, and sales.
│   └── Testimonials Section: Reviews from clients who use the services.
│
├── /team (Our Team)
│   ├── Page Header: "Championship Riders & Expert Trainers" banner.
│   └── Team Component: Comprehensive profiles for all instructors, riders, and staff members.
│
└── /contact (Contact Us)
    ├── Page Header: "We'd Love to Hear From You" banner.
    └── Contact Component: Detailed contact page including a location map, address, opening hours, and an inquiry form.

Shared UI Components
├── Navbar: Main navigation header visible across all pages, with links to all routes.
├── Footer: Page footer containing quick links, social media icons, and copyright information.
├── Preloader: Initial loading animation sequence shown before the app renders.
└── ScrollToTop: Utility component to reset the scroll position to the top on route changes.
```
