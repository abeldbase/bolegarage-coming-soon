(function () {
  'use strict';
  var messages = {
    en: {
      brand_home: 'BoleGarage home', nav_label: 'Main navigation', language_label: 'Choose language', art_description: 'Illustrative concept of a vehicle service workspace', features_label: 'Planned features',
      skip: 'Skip to content', nav_vision: 'Our vision', nav_contact: 'Contact', eyebrow: 'BUILT FOR THE ROAD AHEAD', location: 'ETHIOPIA',
      hero_line1: 'A better day', hero_line2: 'starts in the', hero_line3: 'garage.',
      hero_description: 'A smarter way to bring your workshop, your customers, and your work together. BoleGarage is a garage management platform in development for Ethiopia.',
      discover: 'Discover the vision', get_in_touch: 'Get in touch', coming_soon: 'COMING SOON', in_development: 'In development by Bole Technologies',
      art_label: 'THE WORKSHOP, CONNECTED', art_caption: 'MADE FOR THE PEOPLE WHO KEEP US MOVING.', tab_small: 'ONE CLEAR PICTURE', tab_large: 'From inspection to the road.',
      vision_kicker: 'THE VISION', vision_title: 'Good work deserves a better system.', vision_description: 'A busy garage has a lot in motion. We are developing tools to help service teams spend less time chasing details and more time taking care of vehicles and customers.',
      bilingual_note: 'Being designed with English and Amharic in mind.', feature1_title: 'See the whole job', feature1_text: 'Organize inspection notes, repair estimates, and service details in one place.',
      feature2_title: 'Keep customers informed', feature2_text: 'Plan clear estimate updates and customer approvals, with SMS and WhatsApp communication.', feature3_title: 'Connect the right people', feature3_text: 'Build toward easier connections between garages and automotive parts vendors.',
      feature_disclaimer: 'These are planned capabilities, subject to development and change.', contact_kicker: 'STAY IN THE LOOP', contact_title: "Let's build the road ahead, together.",
      contact_text: "Interested in BoleGarage? We'd love to hear from garage owners, service professionals, and parts vendors.", email_label: 'SAY HELLO', footer_owner: 'A Bole Technologies LLC project.', footer_status: 'A BETTER WAY TO WORK IS ON THE WAY.'
    },
    am: {
      brand_home: 'የBoleGarage መነሻ ገጽ', nav_label: 'ዋና ማውጫ', language_label: 'ቋንቋ ይምረጡ', art_description: 'የተሽከርካሪ አገልግሎት የሥራ ቦታ ምሳሌያዊ ምስል', features_label: 'የታቀዱ አገልግሎቶች',
      skip: 'ወደ ዋናው ይዘት ይሂዱ', nav_vision: 'የእኛ ራዕይ', nav_contact: 'ያግኙን', eyebrow: 'ለወደፊቱ ጉዞ የተዘጋጀ', location: 'ኢትዮጵያ',
      hero_line1: 'የተሻለ ቀን', hero_line2: 'የሚጀምረው', hero_line3: 'ከጋራጅ ነው።',
      hero_description: 'ጋራጅዎን፣ ደንበኞችዎን እና ሥራዎን አንድ ላይ ለማገናኘት የተሻለ መንገድ። BoleGarage ለኢትዮጵያ እየተዘጋጀ ያለ የጋራጅ አስተዳደር መድረክ ነው።',
      discover: 'ራዕያችንን ይወቁ', get_in_touch: 'ያግኙን', coming_soon: 'በቅርቡ', in_development: 'በBole Technologies እየተዘጋጀ ነው',
      art_label: 'የተገናኘ የሥራ ቦታ', art_caption: 'ለእንቅስቃሴያችን መሠረት ለሆኑ ሰዎች።', tab_small: 'ሁሉም በአንድ ቦታ', tab_large: 'ከምርመራ እስከ ጉዞ።',
      vision_kicker: 'የእኛ ራዕይ', vision_title: 'ጥሩ ሥራ የተሻለ ሥርዓት ይገባዋል።', vision_description: 'በጋራጅ ውስጥ ብዙ ሥራዎች በአንድ ጊዜ ይከናወናሉ። የአገልግሎት ቡድኖች ዝርዝሮችን ለመከታተል የሚያወጡትን ጊዜ ቀንሰው በተሽከርካሪና በደንበኛ አገልግሎት ላይ እንዲያተኩሩ የሚረዱ መሣሪያዎችን እያዘጋጀን ነው።',
      bilingual_note: 'በእንግሊዝኛና በአማርኛ አገልግሎት እንዲሰጥ እየተዘጋጀ ነው።', feature1_title: 'የሥራውን ሙሉ ሂደት ይከታተሉ', feature1_text: 'የምርመራ ማስታወሻዎችን፣ የጥገና የዋጋ ግምቶችን እና የአገልግሎት ዝርዝሮችን በአንድ ቦታ ያደራጁ።',
      feature2_title: 'ደንበኞችን በመረጃ ያቆዩ', feature2_text: 'በኤስኤምኤስና በዋትስአፕ የዋጋ ግምት መረጃዎችን እና የደንበኛ ማረጋገጫዎችን ለመላክ እያቀድን ነው።', feature3_title: 'ተገቢዎቹን ሰዎች ያገናኙ', feature3_text: 'በጋራጆችና በተሽከርካሪ መለዋወጫ አቅራቢዎች መካከል ቀላል ግንኙነት ለመፍጠር እየሠራን ነው።',
      feature_disclaimer: 'እነዚህ በዕቅድ ላይ ያሉ አገልግሎቶች ሲሆኑ በዝግጅት ሂደት ሊለወጡ ይችላሉ።', contact_kicker: 'ከእኛ ጋር ይቆዩ', contact_title: 'የወደፊቱን መንገድ አብረን እንገንባ።',
      contact_text: 'ስለ BoleGarage የበለጠ ማወቅ ይፈልጋሉ? የጋራጅ ባለቤቶች፣ ባለሙያዎች እና የመለዋወጫ አቅራቢዎች እንዲያገኙን እንጋብዛለን።', email_label: 'መልእክት ይላኩልን', footer_owner: 'የBole Technologies LLC ፕሮጀክት።', footer_status: 'የተሻለ የሥራ መንገድ በቅርቡ ይመጣል።'
    }
  };
  function setLanguage(language) {
    var chosen = messages[language] ? language : 'en';
    document.documentElement.lang = chosen;
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var text = messages[chosen][node.getAttribute('data-i18n')];
      if (typeof text === 'string') node.textContent = text;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (node) {
      var text = messages[chosen][node.getAttribute('data-i18n-aria')];
      if (typeof text === 'string') node.setAttribute('aria-label', text);
    });
    document.querySelectorAll('[data-set-language]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-set-language') === chosen));
    });
    document.title = chosen === 'am' ? 'BoleGarage | የተሻለ ቀን ከጋራጅ ይጀምራል' : 'BoleGarage | Better days start in the garage';
  }
  document.querySelectorAll('[data-set-language]').forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(button.getAttribute('data-set-language')); });
  });
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}());
