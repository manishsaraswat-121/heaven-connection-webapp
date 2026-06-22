export type CurriculumDay = {
  day: string;
  title: string;
  topics: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type AudienceDescription = {
  title: string;
  description: string;
};

export type Course = {
  slug: string;
  title: string;
  overview: string;
  valueProposition: string;
  recipeCount: string;
  certificate: string;
  description: string;
  durationOffline: string;
  feeOffline: string;
  durationOnline: string;
  feeOnline: string;
  highlights: string[];
  whatYoullLearn: string[];
  whoShouldJoin: string[];
  audienceDescriptions: AudienceDescription[];
  curriculum: CurriculumDay[];
  faqs: FAQ[];
  onlineBenefits: string[];
};

const courses: Record<string, Course> = {
  'cookies-masterclass': {
    slug: 'cookies-masterclass',
    title: 'Cookies Masterclass',
    overview: 'Master 30 types of cookies with professional techniques and presentation.',
    valueProposition: 'From classic to gourmet — master 30 cookie varieties that sell.',
    recipeCount: '30 Cookie Types',
    certificate: 'Included',
    description: 'This comprehensive masterclass takes you through the art and science of cookie making. From soft and chewy classics to delicate biscotti and decorative sandwich cookies, you will learn professional techniques for texture, flavour balancing, and presentation that turns everyday cookies into premium products ready for sale.',
    durationOffline: '7 Days',
    feeOffline: '₹5,000',
    durationOnline: '4 Days',
    feeOnline: '₹3,500',
    highlights: ['30 types of cookies', '1:1 class recording', 'Business packaging tips'],
    whatYoullLearn: [
      'Drop cookies — chocolate chip, oatmeal, peanut butter',
      'Biscotti — almond, pistachio, double chocolate',
      'Sandwich cookies — cream fillings & ganache centres',
      'Decorative finishes — glazes, drizzles, sprinkles',
      'Texture control — chewy, crispy, soft-batch',
      'Storage & shelf-life optimisation',
      'Packaging for gifting & selling'
    ],
    whoShouldJoin: ['Home bakers', 'Cafe owners', 'Enthusiasts'],
    audienceDescriptions: [
      { title: 'Home Bakers', description: 'Perfect for passionate home bakers wanting to elevate their cookie game and start a side business from their kitchen.' },
      { title: 'Cafe Owners', description: 'Ideal for cafe owners looking to expand their pastry counter with premium, high-margin cookie offerings.' },
      { title: 'Baking Enthusiasts', description: 'Great for foodies who love baking and want to master a wide repertoire of cookie styles and techniques.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Foundations & Drop Cookies', topics: ['Introduction to ingredients & equipment', 'Sugar & fat science', 'Classic chocolate chip', 'Oatmeal & peanut butter variations'] },
      { day: 'Day 2', title: 'Biscotti & Rolled Cookies', topics: ['Biscotti dough preparation', 'Almond, pistachio & double chocolate biscotti', 'Cut-out cookies & royal icing', 'Spiced shortbreads'] },
      { day: 'Day 3', title: 'Sandwich & Filled Cookies', topics: ['Sandwich cookie assembly & fillings', 'Ganache centres & caramel fillings', 'Linzer cookies & jam hearts', 'Italian cuccidati'] },
      { day: 'Day 4', title: 'Decorative Finishes & Business', topics: ['Glazes, drizzles & decorative techniques', 'Chocolate dipping & tempering', 'Packaging for retail & gifting', 'Pricing, shelf-life & business tips'] }
    ],
    faqs: [
      { question: 'What is the duration of the Cookies Masterclass?', answer: 'The offline class runs for 7 days and the online class runs for 4 days, with flexible scheduling options available.' },
      { question: 'Do I need prior baking experience?', answer: 'No prior experience is necessary. The course starts with fundamentals and progresses to advanced techniques.' },
      { question: 'Do online classes include recordings?', answer: 'Yes, online participants receive recordings of all live sessions for future reference.' },
      { question: 'How many cookie varieties will I learn?', answer: 'You will master 30 distinct cookie types, including drop cookies, biscotti, sandwich cookies, and decorative varieties.' },
      { question: 'Is there post-course support?', answer: 'Yes, all participants receive WhatsApp support for 30 days after course completion.' },
      { question: 'What is the batch size?', answer: 'We maintain small batch sizes (6-8 students) to ensure individual attention and hands-on learning.' },
      { question: 'How do I enrol?', answer: 'You can enrol by clicking the WhatsApp button on this page. Our team will guide you through the process.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings', 'PDF recipe booklet', 'WhatsApp support', 'Certificate of participation']
  },

  'professional-cake-masterclass': {
    slug: 'professional-cake-masterclass',
    title: 'Professional Cake Masterclass',
    overview: 'Learn tiered cakes, sponges, fillings, and professional finishes.',
    valueProposition: 'Create show-stopping tiered cakes with flawless professional finishes.',
    recipeCount: '10+ Cake Styles',
    certificate: 'Included',
    description: 'A comprehensive program designed for aspiring professionals who want to master the art of tiered cake construction. You will learn everything from sponge perfection and ganache work to structural support systems and decorative finishes that impress clients and command premium prices.',
    durationOffline: '1 Month',
    feeOffline: '₹18,000',
    durationOnline: '15 Days',
    feeOnline: '₹9,000',
    highlights: ['Professional cake techniques', 'Fondant & buttercream mastery', 'Structural support systems', 'Certificate of excellence', 'Business insights'],
    whatYoullLearn: [
      'Sponge baking — vanilla, chocolate, red velvet, fruit',
      'Ganache — dark, milk, white & flavoured variations',
      'Tiered cake assembly & structural support',
      'Buttercream — Swiss meringue, Italian, American',
      'Fondant application & sculpting',
      'Finishing techniques — drip cakes, naked cakes, ruffles',
      'Piping — borders, rosettes, lace, macaron towers',
      'Transportation & delivery best practices'
    ],
    whoShouldJoin: ['Bakers', 'Caterers', 'Aspiring professionals'],
    audienceDescriptions: [
      { title: 'Professional Bakers', description: 'Ideal for bakers wanting to level up from home-baking to professional tiered cake production.' },
      { title: 'Caterers & Event Planners', description: 'Perfect for professionals who need to offer stunning celebration cakes as part of their service.' },
      { title: 'Aspiring Cake Artists', description: 'Great for passionate individuals looking to turn cake decorating into a full-time career.' }
    ],
    curriculum: [
      { day: 'Week 1', title: 'Sponge & Filling Foundations', topics: ['Types of sponges & mixing methods', 'Baking at scale — consistency tips', 'Fillings — curds, mousses, ganaches', 'Simple syrup & moisture management'] },
      { day: 'Week 2', title: 'Buttercream & Ganache', topics: ['Swiss meringue, Italian & American buttercream', 'Flavour infusions & colouring', 'Ganache — perfect ratios & applications', 'Crumb coating & smooth finishing'] },
      { day: 'Week 3', title: 'Tiered Cakes & Structural Support', topics: ['Dowel systems & stacking techniques', 'Fondant covering & sharp edges', ' Ruffles, pleats & textured finishes', 'Drip cakes & naked cake styles'] },
      { day: 'Week 4', title: 'Advanced Finishes & Business', topics: ['Piping techniques — borders, rosettes, lace', 'Sugar flowers & decorative elements', 'Macaron towers & cake table styling', 'Pricing, client consultations & delivery'] }
    ],
    faqs: [
      { question: 'How long is the Professional Cake Masterclass?', answer: 'The offline program runs for 1 month, and the online version is 15 days with flexible batch timings.' },
      { question: 'Is this course suitable for beginners?', answer: 'Some basic baking knowledge is helpful but not mandatory. We start with fundamentals and build up to advanced techniques.' },
      { question: 'What equipment do I need?', answer: 'Basic baking tools are sufficient. A full equipment list is provided upon enrolment, and we guide you on affordable professional-grade options.' },
      { question: 'Do I get a certificate?', answer: 'Yes, a Certificate of Excellence is awarded upon successful completion of all modules and practical assessments.' },
      { question: 'Are online classes recorded?', answer: 'Yes, all live online sessions are recorded and made available to participants for 90 days.' },
      { question: 'Can I get post-course support?', answer: 'Absolutely. All participants receive 45 days of WhatsApp support for any follow-up questions.' },
      { question: 'What batch size do you maintain?', answer: 'We keep batches to a maximum of 6 students to ensure personalised attention.' },
      { question: 'How do I enrol?', answer: 'Click the WhatsApp button on this page and our team will assist you with enrolment and batch scheduling.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings (90-day access)', 'Detailed PDF recipe manual', 'WhatsApp mentor support', 'Certificate of excellence']
  },

  'dessert-masterclass': {
    slug: 'dessert-masterclass',
    title: 'Dessert Masterclass',
    overview: 'Master 15 premium desserts with professional techniques and modern presentation.',
    valueProposition: '15 stunning desserts — from plated elegance to gourmet classics.',
    recipeCount: '15 Dessert Types',
    certificate: 'Included',
    description: 'A curated journey through 15 premium desserts that every serious baker should master. From silky mousses and layered entremets to classic puddings and modern plated presentations, this course covers the techniques that define pastry excellence.',
    durationOffline: '5 Days',
    feeOffline: '₹4,000',
    durationOnline: '4 Days',
    feeOnline: '₹2,500',
    highlights: ['15 premium dessert varieties', 'Professional techniques', 'Modern presentation', 'Hands-on learning', 'Business insights'],
    whatYoullLearn: [
      'Mousse desserts — dark chocolate, mango, passion fruit',
      'Layered desserts — tiramisu, trifle, verrines',
      'Puddings — crème brûlée, panna cotta, bread & butter',
      'Custards — pastry cream, crème anglaise, diplomat cream',
      'No-bake desserts — cheesecake, mousse cakes, fridge cakes',
      'Plating techniques — swoops, quenelles, dots',
      'Garnishing — tuiles, caramel cages, chocolate shards',
      'Texture balancing — crisp, creamy, crunchy, smooth'
    ],
    whoShouldJoin: ['Home bakers', 'Pastry chefs', 'Culinary students'],
    audienceDescriptions: [
      { title: 'Home Bakers', description: 'Perfect for home bakers wanting to expand their dessert repertoire with professional techniques and presentation.' },
      { title: 'Aspiring Pastry Chefs', description: 'Ideal for those pursuing pastry chef roles who need a solid foundation in classic and modern desserts.' },
      { title: 'Culinary Students', description: 'Great for culinary students looking to supplement their training with hands-on dessert mastery.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Custards, Puddings & Foundations', topics: ['Pastry cream & crème anglaise', 'Crème brûlée & panna cotta', 'Bread & butter pudding', 'Sabayon & zabaglione'] },
      { day: 'Day 2', title: 'Mousse & Entremets', topics: ['Chocolate mousse — pâte à bombe method', 'Fruit mousses — puree reduction technique', 'Layered entremets assembly', 'Mirror glaze basics'] },
      { day: 'Day 3', title: 'No-Bake & Quick Desserts', topics: ['No-bake cheesecake variations', 'Fridge cakes & terrines', 'Tiramisu & trifle assembly', 'Verrines & parfaits'] },
      { day: 'Day 4', title: 'Plating & Presentation', topics: ['Sauce techniques — coulis, caramel, anglaise', 'Plating elements — swoops, quenelles, dots', 'Tuiles, caramel cages & chocolate decorations', 'Menu composition & dessert pairings'] },
      { day: 'Day 5', title: 'Business & Commercial Tips', topics: ['Costing & portion control', 'Batch production planning', 'Menu pricing strategies', 'Final assessment & feedback'] }
    ],
    faqs: [
      { question: 'How many desserts will I learn?', answer: 'You will master 15 premium dessert varieties, including mousses, custards, puddings, and plated desserts.' },
      { question: 'What is the course duration?', answer: 'The offline class runs for 5 days while the online version is 4 days.' },
      { question: 'Are the online classes recorded?', answer: 'Yes, recordings of all live sessions are provided to participants.' },
      { question: 'Is prior baking experience required?', answer: 'Basic baking knowledge is helpful but not mandatory. The course covers fundamentals before advancing.' },
      { question: 'What kind of support is available after the course?', answer: 'Participants receive 30 days of WhatsApp support for follow-up questions.' },
      { question: 'Can I start a business after this course?', answer: 'Yes, the course includes business insights on costing, pricing, and batch production for commercial success.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Full session recordings', 'PDF recipe collection', 'WhatsApp mentor support', 'Certificate of participation']
  },

  'cheesecake-masterclass': {
    slug: 'cheesecake-masterclass',
    title: 'Cheesecake Masterclass',
    overview: '10 styles of cheesecakes, baked and no-bake methods, and decorative finishes.',
    valueProposition: 'Baked, no-bake, savoury — master 10 show-stopping cheesecake styles.',
    recipeCount: '10 Cheesecake Styles',
    certificate: 'Included',
    description: 'Everything you need to know about cheesecakes — from the classic New York baked cheesecake to no-bake refrigerator cakes, exotic flavour combinations, and decorative finishes that make every cheesecake a centrepiece.',
    durationOffline: '4 Days',
    feeOffline: '₹4,000',
    durationOnline: '3 Days',
    feeOnline: '₹2,200',
    highlights: ['10 cheesecake varieties', 'Baked & no-bake methods', 'Special crusts & fillings', 'Flavour innovation techniques'],
    whatYoullLearn: [
      'Baked cheesecakes — New York style, Japanese cotton',
      'No-bake cheesecakes — set with gelatin, cream',
      'Flavour variations — chocolate, mango, blueberry, matcha',
      'Crust techniques — biscuit, graham, nut-based, gluten-free',
      'Textural contrasts — creamy, crunchy, silky',
      'Decorative finishes — glazes, fruit toppings, chocolate work',
      'Savoury cheesecake — appetiser cheesecakes for events'
    ],
    whoShouldJoin: ['Dessert enthusiasts', 'Bakers'],
    audienceDescriptions: [
      { title: 'Dessert Enthusiasts', description: 'Perfect for anyone passionate about desserts and wanting to master the art of cheesecake making.' },
      { title: 'Home Bakers', description: 'Ideal for home bakers looking to add a signature cheesecake range to their offerings.' },
      { title: 'Cafe Owners', description: 'Great for cafes wanting to offer premium cheesecakes that stand out from competitors.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Baked Cheesecake Foundations', topics: ['New York classic — ingredients & method', 'Water bath technique — crack prevention', 'Japanese cotton cheesecake', 'Crust preparation & variations'] },
      { day: 'Day 2', title: 'No-Bake Cheesecakes', topics: ['Gelatin setting — ratios & techniques', 'Mango & passion fruit no-bake', 'Chocolate & hazelnut no-bake', 'Vegan no-bake options'] },
      { day: 'Day 3', title: 'Flavours, Textures & Decorating', topics: ['Matcha, blueberry, caramel & biscoff variations', 'Glazes — fruit, chocolate, mirror', 'Piping, swirls & topping arrangements', 'Savoury cheesecakes for events'] },
      { day: 'Day 4', title: 'Production & Business', topics: ['Batch production & shelf-life', 'Costing & pricing strategies', 'Gifting & packaging ideas', 'Final assessment & feedback'] }
    ],
    faqs: [
      { question: 'How many cheesecake varieties will I learn?', answer: 'You will master 10 distinct cheesecake styles covering both baked and no-bake methods.' },
      { question: 'What is the course duration?', answer: 'The offline course is 4 days and the online course is 3 days, with flexible scheduling.' },
      { question: 'Do I need any special equipment?', answer: 'Basic baking tools are sufficient. A springform pan is recommended but alternatives are discussed.' },
      { question: 'Are online sessions recorded?', answer: 'Yes, all online sessions are recorded and shared with participants.' },
      { question: 'Can I make cheesecakes for sale after this?', answer: 'Absolutely. The course includes production tips, costing, and packaging advice for commercial selling.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings', 'PDF recipe collection', 'WhatsApp support', 'Certificate of participation']
  },

  'artisan-bread-masterclass': {
    slug: 'artisan-bread-masterclass',
    title: 'Artisan Bread Masterclass',
    overview: 'Handcrafted breads: sourdough, enriched breads, and shaping techniques.',
    valueProposition: 'From levain to loaf — craft bakery-quality artisan bread at home.',
    recipeCount: '12+ Bread Varieties',
    certificate: 'Included',
    description: 'Discover the craft of artisan bread making from scratch. Learn to maintain a sourdough starter, master hydration levels, develop gluten structure, and bake crusty loaves with tender crumbs that rival the best bakeries.',
    durationOffline: '4 Days',
    feeOffline: '₹7,000',
    durationOnline: '4 Days',
    feeOnline: '₹3,500',
    highlights: ['Sourdough from scratch', 'Crust & crumb control', 'Enriched breads', 'Professional shaping'],
    whatYoullLearn: [
      'Sourdough starter — creation & maintenance',
      'Levain building & feeding schedules',
      'Hydration control — 65% to 85% hydration',
      'Gluten development — stretch & fold techniques',
      'Scoring patterns & ear development',
      'Enriched doughs — brioche, challah, milk bread',
      'Whole grain & seeded breads',
      'Baking schedules & production planning'
    ],
    whoShouldJoin: ['Bread bakers', 'Cafe owners'],
    audienceDescriptions: [
      { title: 'Aspiring Bread Bakers', description: 'Perfect for home bakers wanting to master the science and art of artisan bread making.' },
      { title: 'Cafe Owners', description: 'Ideal for cafe owners who want to offer fresh, in-house baked bread as a signature offering.' },
      { title: 'Health-Conscious Bakers', description: 'Great for those wanting to bake wholesome, preservative-free breads for their families.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Sourdough Starter & Basics', topics: ['Creating a sourdough starter from scratch', 'Feeding schedules & maintenance', 'Understanding flour types & protein content', 'Basic dough mixing & autolyse'] },
      { day: 'Day 2', title: 'Fermentation & Shaping', topics: ['Bulk fermentation — timing & temperature', 'Stretch & fold techniques', 'Pre-shaping & bench rest', 'Final shaping — boule, batard, baguette'] },
      { day: 'Day 3', title: 'Baking & Scoring', topics: ['Scoring patterns & ear development', 'Steam injection techniques', 'Enriched doughs — brioche & challah', 'Whole grain & seeded variations'] },
      { day: 'Day 4', title: 'Production & Troubleshooting', topics: ['Baking schedules for home & cafe', 'Troubleshooting — dense crumb, flat loaves', 'Sourdough discard recipes', 'Storage, staling prevention & costing'] }
    ],
    faqs: [
      { question: 'Do I need a sourdough starter to join?', answer: 'No, we will guide you through creating and maintaining your own starter from day one.' },
      { question: 'How long is the course?', answer: 'Both offline and online versions run for 4 days with comprehensive daily sessions.' },
      { question: 'What equipment do I need?', answer: 'A basic oven, mixing bowl, and kitchen scale are essential. A Dutch oven is recommended but alternatives are provided.' },
      { question: 'Are the online sessions recorded?', answer: 'Yes, all sessions are recorded and provided to participants for 90 days.' },
      { question: 'Can I sell the bread I learn to make?', answer: 'Absolutely. Day 4 covers production planning, costing, and selling strategies for home bakeries.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings (90 days)', 'PDF recipe manual', 'WhatsApp mentor support', 'Certificate of participation']
  },

  'continental-cooking-masterclass': {
    slug: 'continental-cooking-masterclass',
    title: 'Continental Cooking Masterclass',
    overview: 'Essential continental recipes for restaurants and home chefs.',
    valueProposition: 'Master restaurant-quality continental cuisine from sauces to plating.',
    recipeCount: '20+ Continental Recipes',
    certificate: 'Included',
    description: 'A comprehensive program covering the essential techniques of continental cuisine. From classic sauces and pasta perfection to protein handling and elegant plating, this course equips you with the skills to cook confidently in any kitchen.',
    durationOffline: '1 Week',
    feeOffline: '₹7,000',
    durationOnline: '5 Days',
    feeOnline: '₹3,500',
    highlights: ['Pizzas, pastas & sauces', 'Protein cooking techniques', 'Plating & presentation', 'Restaurant-style recipes'],
    whatYoullLearn: [
      'Mother sauces — béchamel, velouté, espagnole, tomato, hollandaise',
      'Pasta — fresh pasta making, sauces, filled pasta',
      'Pizza — dough, toppings, wood-fired style at home',
      'Protein handling — chicken, fish, steak doneness',
      'Plating techniques — composition, colour, height',
      'Soups — cream soups, consommés, bisques',
      'Salads — dressings, composition, vinaigrettes',
      'Desserts — crème brûlée, panna cotta, chocolate fondant'
    ],
    whoShouldJoin: ['Home cooks', 'Restaurant staff'],
    audienceDescriptions: [
      { title: 'Home Cooks', description: 'Perfect for home cooks wanting to elevate their everyday cooking with professional continental techniques.' },
      { title: 'Restaurant Staff', description: 'Ideal for kitchen staff looking to expand their continental cuisine repertoire and plating skills.' },
      { title: 'Aspiring Chefs', description: 'Great for culinary students and aspiring chefs building a strong foundation in continental cooking.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Sauces & Soups', topics: ['The five mother sauces', 'Derivative sauces & variations', 'Cream soups & veloutés', 'Consommé clarification'] },
      { day: 'Day 2', title: 'Pasta & Pizza', topics: ['Fresh pasta dough — egg & semolina', 'Filled pasta — ravioli, tortellini', 'Pizza dough & fermentation', 'Sauce & topping combinations'] },
      { day: 'Day 3', title: 'Proteins & Mains', topics: ['Chicken — sauté, roast, pan-seared', 'Fish & seafood doneness', 'Steak — grilling & pan-searing techniques', 'Vegetarian mains — risotto, gnocchi'] },
      { day: 'Day 4', title: 'Salads, Appetisers & Plating', topics: ['Vinaigrettes & emulsion dressings', 'Composed salads & appetisers', 'Plating principles & presentation', 'Menu composition'] },
      { day: 'Day 5', title: 'Desserts & Business', topics: ['Crème brûlée, panna cotta & chocolate fondant', 'Batch production tips', 'Costing & menu pricing', 'Final assessment'] }
    ],
    faqs: [
      { question: 'How many recipes will I learn?', answer: 'You will master 20+ continental recipes across sauces, pastas, mains, salads, and desserts.' },
      { question: 'Is this course suitable for beginners?', answer: 'Yes, the course starts with fundamentals and progresses to advanced techniques suitable for all skill levels.' },
      { question: 'What is the course duration?', answer: 'The offline program runs for 1 week, and the online version is 5 days.' },
      { question: 'Are online sessions recorded?', answer: 'Yes, all online sessions are recorded and made available to participants.' },
      { question: 'Will this help me work in a restaurant?', answer: 'Absolutely. The course covers professional kitchen techniques, plating, and volume production methods.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings', 'PDF recipe collection', 'WhatsApp support', 'Certificate of participation']
  },

  'waffle-masterclass': {
    slug: 'waffle-masterclass',
    title: 'Waffle Masterclass',
    overview: 'Techniques for crisp yet tender waffles and creative toppings.',
    valueProposition: 'Crispy outside, fluffy inside — 15 waffle varieties for any occasion.',
    recipeCount: '15 Waffle Varieties',
    certificate: 'Included',
    description: 'Master the art of waffle making from classic Belgian to savoury and healthy alternatives. Learn the science behind crisp exteriors and fluffy interiors, along with creative topping compositions that elevate waffles into memorable meals.',
    durationOffline: '3 Days',
    feeOffline: '₹3,500',
    durationOnline: '2 Days',
    feeOnline: '₹2,500',
    highlights: ['15 waffle varieties', 'Healthy & savoury options', 'Topping compositions', 'Batter science'],
    whatYoullLearn: [
      'Belgian waffles — classic & liege',
      'American-style waffles — buttermilk, blueberry',
      'Savoury waffles — cheese, herb, potato',
      'Healthy options — whole wheat, oat, protein',
      'Batter science — mixing, resting, texture control',
      'Topping compositions — fruits, creams, syrups',
      'Savoury waffle meals — chicken & waffle, brunch boards'
    ],
    whoShouldJoin: ['Cafe owners', 'Home bakers'],
    audienceDescriptions: [
      { title: 'Cafe Owners', description: 'Perfect for cafes wanting to add a signature waffle menu that attracts breakfast and brunch crowds.' },
      { title: 'Home Bakers', description: 'Ideal for home bakers wanting to expand into breakfast and brunch offerings.' },
      { title: 'Brunch Enthusiasts', description: 'Great for food lovers who want to create impressive waffle spreads for family and friends.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Classic Waffles & Batter Science', topics: ['Belgian vs American waffle', 'Yeast vs baking powder leavening', 'Liege waffle — pearl sugar technique', 'Buttermilk & blueberry variations'] },
      { day: 'Day 2', title: 'Savoury, Healthy & Toppings', topics: ['Savoury waffles — cheese, herb, potato', 'Healthy options — whole wheat, oat, protein', 'Fruit compotes, creams & syrups', 'Plating & presentation for brunch'] },
      { day: 'Day 3', title: 'Commercial Production & Menu', topics: ['Batch production for cafes', 'Costing & pricing strategy', 'Waffle menu design & combos', 'Final assessment & feedback'] }
    ],
    faqs: [
      { question: 'Do I need a waffle iron?', answer: 'Yes, a waffle iron is required. Recommendations for affordable options are provided during the course.' },
      { question: 'How many waffle recipes will I learn?', answer: 'You will master 15 waffle varieties including classic, savoury, and healthy options.' },
      { question: 'What is the course duration?', answer: 'The offline course is 3 days and the online course is 2 days.' },
      { question: 'Are recordings available for online students?', answer: 'Yes, all online sessions are recorded and shared.' },
      { question: 'Can I add waffles to my cafe menu after this?', answer: 'Absolutely — Day 3 covers commercial production and menu integration for cafes.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings', 'PDF recipe book', 'WhatsApp support', 'Certificate of participation']
  },

  'ice-cream-masterclass': {
    slug: 'ice-cream-masterclass',
    title: 'Ice Cream Masterclass',
    overview: 'Learn custard bases, gelato, sorbets and stabilizers for professional texture.',
    valueProposition: '20 flavours of silky gelato, sorbet & ice cream — stabilised for perfection.',
    recipeCount: '20 Flavour Profiles',
    certificate: 'Included',
    description: 'Dive into the science and art of frozen desserts. From classic custard-based ice creams to Italian gelato, refreshing sorbets, and stabiliser systems that ensure perfect texture every time. Ideal for aspiring artisanal ice cream makers.',
    durationOffline: '4 Days',
    feeOffline: '₹4,000',
    durationOnline: '2 Days',
    feeOnline: '₹2,800',
    highlights: ['20 flavour profiles', 'Gelato & sorbet techniques', 'Stabilizers & churning', 'Shelf-life optimisation'],
    whatYoullLearn: [
      'Custard base — egg yolks, sugar, cream ratios',
      'Gelato — low-fat, dense, intensely flavoured',
      'Sorbet & sherbet — fruit purees, sugar balance',
      'Stabilisers — guar gum, locust bean, commercial blends',
      'No-churn ice cream — accessible techniques',
      'Vegan & dairy-free options — coconut, almond, oat',
      'Flavour development — vanilla, chocolate, fruit, nut, spice',
      'Storage, packaging & shelf-life tips'
    ],
    whoShouldJoin: ['Dessert businesses', 'Enthusiasts'],
    audienceDescriptions: [
      { title: 'Dessert Business Owners', description: 'Perfect for ice cream shops, dessert cafes, and cloud kitchens wanting artisan-quality frozen desserts.' },
      { title: 'Home Enthusiasts', description: 'Ideal for home cooks who want to make professional-quality ice cream, gelato, and sorbet.' },
      { title: 'Culinary Students', description: 'Great for students specialising in pastry and wanting to master frozen dessert science.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Custard Bases & Classic Ice Cream', topics: ['Egg yolk custard — ratios & techniques', 'Vanilla bean & chocolate ice cream', 'Stabiliser systems & overrun control', 'Batch freezing & storage'] },
      { day: 'Day 2', title: 'Gelato & Italian Techniques', topics: ['Gelato base — low-fat formulation', 'Intense flavour infusion methods', 'Fruit gelato — pistachio, hazelnut, stracciatella', 'Gelato display & serving'] },
      { day: 'Day 3', title: 'Sorbets, Vegan & No-Churn', topics: ['Sorbet — sugar balance & fruit purees', 'Dairy-free — coconut, almond, oat bases', 'No-churn techniques for home kitchens', 'Troubleshooting — iciness, texture issues'] },
      { day: 'Day 4', title: 'Flavour Innovation & Business', topics: ['20 flavour profiles — development guide', 'Seasonal flavour rotation', 'Costing, packaging & branding', 'Final tasting & assessment'] }
    ],
    faqs: [
      { question: 'Do I need an ice cream machine?', answer: 'An ice cream maker is recommended but Day 3 covers no-churn techniques that require no special equipment.' },
      { question: 'How many flavours will I learn?', answer: 'You will learn 20 distinct flavour profiles covering classic, fruit, nut, and innovative combinations.' },
      { question: 'What is the course duration?', answer: 'Offline: 4 days. Online: 2 days with the same comprehensive curriculum.' },
      { question: 'Are online classes recorded?', answer: 'Yes, recordings are provided to all online participants.' },
      { question: 'Can I start an ice cream business after this?', answer: 'Yes — Day 4 covers costing, packaging, branding, and production planning for commercial success.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings', 'PDF recipe booklet', 'WhatsApp support', 'Certificate of participation']
  },

  'tart-pie-masterclass': {
    slug: 'tart-pie-masterclass',
    title: 'Tart & Pie Masterclass',
    overview: 'Tarts, pies and pastry techniques for perfect crusts and fillings.',
    valueProposition: 'Perfect pâte sablée, silky fillings, stunning tarts every time.',
    recipeCount: '12+ Tart & Pie Styles',
    certificate: 'Included',
    description: 'Everything you need to create stunning tarts and pies with confident pastry work. From shortcrust and pâte sucrée to blind baking, fillings, and decorative finishes — this course transforms your pastry skills.',
    durationOffline: '4 Days',
    feeOffline: '₹4,000',
    durationOnline: '2 Days',
    feeOnline: '₹2,500',
    highlights: ['Perfect tart shells', 'Sweet & savoury fillings', 'Blind baking mastery', 'Decorative finishes'],
    whatYoullLearn: [
      'Shortcrust pastry — pâte brisée, pâte sucrée, pâte sablée',
      'Blind baking — weights, timing, shrinkage prevention',
      'Fruit tarts — fresh, glazed, poached fruit',
      'Custard tarts — crème pâtissière, frangipane',
      'Savoury tarts — quiche, vegetable, meat pies',
      'Pie making — lattice tops, double crust, hand pies',
      'Decorative finishes — glazes, piping, chocolate'
    ],
    whoShouldJoin: ['Bakers', 'Home cooks'],
    audienceDescriptions: [
      { title: 'Serious Bakers', description: 'Perfect for bakers wanting to perfect their pastry technique and create stunning tarts and pies.' },
      { title: 'Home Cooks', description: 'Ideal for home cooks who want to impress with beautiful, professional-quality tarts.' },
      { title: 'Cafe Bakers', description: 'Great for cafe bakers looking to add visually stunning tarts to their display counters.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Pastry Foundations', topics: ['Pâte brisée, sucrée & sablée', 'Butter temperature & handling', 'Resting & rolling techniques', 'Blind baking — weights, timing, shrinkage'] },
      { day: 'Day 2', title: 'Sweet Tarts & Fillings', topics: ['Frangipane & almond cream', 'Crème pâtissière & diplomat cream', 'Fruit tarts — fresh berry, glazed, poached', 'Lemon tart — the perfect curd'] },
      { day: 'Day 3', title: 'Savoury Tarts & Pies', topics: ['Quiche Lorraine & vegetable tarts', 'Double-crust pies — apple, berry', 'Lattice tops & decorative edges', 'Hand pies & mini tarts'] },
      { day: 'Day 4', title: 'Finishing & Presentation', topics: ['Glazes — apricot, neutral, chocolate', 'Piping & decorative finishes', 'Plating tarts for service', 'Costing & batch production tips'] }
    ],
    faqs: [
      { question: 'Do I need a tart pan?', answer: 'Yes, a fluted tart pan with removable bottom is recommended. Alternatives are discussed in class.' },
      { question: 'How many tart varieties will I learn?', answer: 'You will master 12+ styles covering sweet, savoury, and decorative tarts and pies.' },
      { question: 'What is the course duration?', answer: 'Offline: 4 days. Online: 2 days.' },
      { question: 'Are online classes recorded?', answer: 'Yes, recordings are provided to online participants.' },
      { question: 'What if my pastry keeps shrinking?', answer: 'Troubleshooting is integrated throughout the course. Day 1 specifically covers shrinkage prevention.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings', 'PDF recipe collection', 'WhatsApp support', 'Certificate of participation']
  },

  'bonbon-masterclass': {
    slug: 'bonbon-masterclass',
    title: 'Bonbon Masterclass',
    overview: 'Chocolate bonbons, fillings, tempering, and decorative techniques.',
    valueProposition: 'Professional chocolate bonbons with flawless temper and stunning finishes.',
    recipeCount: '15+ Bonbon Varieties',
    certificate: 'Included',
    description: 'Enter the world of fine chocolate confectionery. Learn precise tempering techniques, create silky ganache fillings, master moulding and unmoulding, and decorate bonbons that look like they came from a luxury chocolatier.',
    durationOffline: '1 Week',
    feeOffline: '₹7,000',
    durationOnline: '3 Days',
    feeOnline: '₹4,000',
    highlights: ['Bonbon making mastery', 'Chocolate tempering', 'Ganache fillings', 'Decorative techniques'],
    whatYoullLearn: [
      'Chocolate tempering — seeding, tabling, microwave methods',
      'Moulding & unmoulding — polycarbonate moulds',
      'Ganache fillings — dark, milk, white, fruit, nut',
      'Praline fillings — caramelised nut pastes',
      'Shell & fill technique — perfect bonbon structure',
      'Decorative finishes — painting, splatter, transfer sheets',
      'Storage & shelf-life of chocolate confections'
    ],
    whoShouldJoin: ['Chocolatiers', 'Hobbyists'],
    audienceDescriptions: [
      { title: 'Aspiring Chocolatiers', description: 'Perfect for those wanting to specialise in fine chocolate confectionery and bonbon making.' },
      { title: 'Hobbyist Bakers', description: 'Ideal for passionate home bakers ready to level up to professional chocolate work.' },
      { title: 'Gift Business Owners', description: 'Great for entrepreneurs wanting to create premium chocolate gift boxes for gifting occasions.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Chocolate Foundations & Tempering', topics: ['Bean-to-bar overview', 'Tempering — seeding method', 'Testing temper — streak test, snap test', 'Common tempering mistakes'] },
      { day: 'Day 2', title: 'Moulding & Shell Technique', topics: ['Polycarbonate mould preparation', 'Shell casting & vibration', 'Ganache preparation — dark, milk, white', 'Filling & cap sealing'] },
      { day: 'Day 3', title: 'Praline & Fruit Fillings', topics: ['Caramelised nut praline paste', 'Fruit ganaches — passion fruit, raspberry', 'Liquid centres — caramel, fruit', 'Textured fillings — crunchy, chewy'] },
      { day: 'Day 4', title: 'Decorating & Finishing', topics: ['Cocoa butter painting', 'Splatter & marble effects', 'Transfer sheets & metallic finishes', 'Storage, packaging & shelf-life'] }
    ],
    faqs: [
      { question: 'Do I need chocolate tempering experience?', answer: 'No, we start from the basics of tempering and build up to advanced techniques.' },
      { question: 'What equipment do I need?', answer: 'Polycarbonate moulds and a good thermometer are essential. A full equipment list is provided upon enrolment.' },
      { question: 'How many bonbon varieties will I learn?', answer: 'You will master 15+ bonbon varieties with different fillings, textures, and decorative finishes.' },
      { question: 'What is the course duration?', answer: 'Offline: 1 week. Online: 3 days.' },
      { question: 'Can I sell the bonbons I make?', answer: 'Yes, the course includes guidance on packaging, pricing, and selling chocolate bonbons commercially.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings (90 days)', 'PDF recipe manual', 'WhatsApp mentor support', 'Certificate of participation']
  },

  'chocolate-masterclass': {
    slug: 'chocolate-masterclass',
    title: 'Chocolate Masterclass',
    overview: 'Learn bean-to-bar concepts, tempering, ganaches and chocolate desserts.',
    valueProposition: '25 chocolate creations — from ganache to plated desserts.',
    recipeCount: '25 Chocolate Creations',
    certificate: 'Included',
    description: 'An intensive chocolate program covering the full spectrum — from working with couverture chocolate and tempering to creating exquisite ganaches, mousses, chocolate desserts, and decorative chocolate art.',
    durationOffline: '5 Days',
    feeOffline: '₹6,000',
    durationOnline: '3 Days',
    feeOnline: '₹3,000',
    highlights: ['25 flavour chocolate creations', 'Ganache mastery', 'Tempering techniques', 'Chocolate desserts'],
    whatYoullLearn: [
      'Ganache — dark, milk, white, infused, flavoured',
      'Tempering — seeding, tabling, microwave methods',
      'Chocolate mousse & mousseline',
      'Chocolate tart — perfect crust & fillings',
      'Chocolate fondant — molten centre mastery',
      'Chocolate décor — curls, shards, cages, piping',
      'Hot & cold chocolate drinks — drinking chocolate, mocha',
      'Chocolate types — couverture, compound, single origin'
    ],
    whoShouldJoin: ['Pastry chefs', 'Chocoholics'],
    audienceDescriptions: [
      { title: 'Pastry Chefs', description: 'Perfect for pastry professionals wanting to deepen their chocolate skills and expand their repertoire.' },
      { title: 'Chocolate Enthusiasts', description: 'Ideal for passionate chocolate lovers ready to transform their hobby into art.' },
      { title: 'Dessert Business Owners', description: 'Great for dessert brand owners wanting to develop a signature chocolate product line.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Chocolate Theory & Tempering', topics: ['Couverture vs compound chocolate', 'Tempering — three methods practised', 'Streak, snap & gloss tests', 'Chocolate types & single origin tasting'] },
      { day: 'Day 2', title: 'Ganaches & Fillings', topics: ['Ganache ratios — 3:1, 2:1, 1:1', 'Infused ganaches — Earl Grey, chili, orange', 'Whipped ganache for fillings', 'Praline & nut pastes'] },
      { day: 'Day 3', title: 'Chocolate Desserts', topics: ['Chocolate mousse & mousseline', 'Molten chocolate fondant', 'Chocolate tart with caramelised nuts', 'Chocolate panna cotta & crémeux'] },
      { day: 'Day 4', title: 'Chocolate Decorations', topics: ['Chocolate curls & shards', 'Cocoa butter spray & stencilling', 'Chocolate cages & piping', 'Plating chocolate desserts'] },
      { day: 'Day 5', title: 'Business & Presentation', topics: ['25 chocolate creations — complete range', 'Packaging & gifting ideas', 'Costing & menu pricing', 'Final assessment & feedback'] }
    ],
    faqs: [
      { question: 'Do I need experience with chocolate?', answer: 'Basic baking experience is helpful but not required. We start with fundamentals.' },
      { question: 'How many chocolate items will I learn?', answer: 'You will master 25 chocolate creations including desserts, confections, drinks, and decorations.' },
      { question: 'What is the course duration?', answer: 'Offline: 5 days. Online: 3 days.' },
      { question: 'Are online sessions recorded?', answer: 'Yes, recordings are provided to all participants.' },
      { question: 'What kind of chocolate should I buy?', answer: 'We provide guidance on couverture brands, pricing, and where to source quality chocolate in India.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings', 'PDF recipe collection', 'WhatsApp support', 'Certificate of participation']
  },

  'dry-cake-masterclass': {
    slug: 'dry-cake-masterclass',
    title: 'Dry Cake Masterclass',
    overview: 'Techniques for dry cakes, flavors, and textures for long-shelf products.',
    valueProposition: '20 flavour profiles — shelf-stable, delicious, and ready for business.',
    recipeCount: '20 Flavour Profiles',
    certificate: 'Included',
    description: 'Specialised training in dry cake production — cakes designed for longer shelf life without compromising on taste, texture, or appearance. Ideal for home bakers and small businesses looking to scale their operations with packaged products.',
    durationOffline: '4 Days',
    feeOffline: '₹6,000',
    durationOnline: '4 Days',
    feeOnline: '₹3,000',
    highlights: ['20 dry cake flavour profiles', 'Moisture management', 'Shelf-life extension', 'Packaging for retail'],
    whatYoullLearn: [
      'Spice blends — cinnamon, cardamom, nutmeg, ginger',
      'Fruit cakes — tutti frutti, dry fruit, orange',
      'Tea cakes — lemon, marble, pound cake',
      'Moisture management — ingredient ratios & baking time',
      'Shelf-life testing & optimisation',
      'Packaging for retail — wrapping, sealing, labelling',
      'Flavour variations — vanilla, chocolate, mango, pineapple'
    ],
    whoShouldJoin: ['Home bakers', 'Small business owners'],
    audienceDescriptions: [
      { title: 'Home Bakers', description: 'Perfect for home bakers wanting to create shelf-stable products for sale at local markets and online.' },
      { title: 'Small Business Owners', description: 'Ideal for entrepreneurs building a packaged baked goods brand with longer shelf-life products.' },
      { title: 'Gifting Businesses', description: 'Great for gifting businesses needing high-quality, long-lasting baked goods for gift boxes.' }
    ],
    curriculum: [
      { day: 'Day 1', title: 'Foundations of Dry Cakes', topics: ['Understanding dry cake science', 'Ingredient selection for shelf stability', 'Spice blends & flavouring', 'Perfect pound cake — vanilla, lemon'] },
      { day: 'Day 2', title: 'Fruit & Tea Cakes', topics: ['Tutti frutti & dry fruit cakes', 'Tea cakes — marble, orange, poppy seed', 'Moisture management techniques', 'Baking for optimal crust & crumb'] },
      { day: 'Day 3', title: 'Flavour Expansion & Variations', topics: ['Chocolate, mango & pineapple variations', 'Swirl techniques — marble, zebra', 'Glazes & simple icings for dry cakes', 'Portion control & uniform slicing'] },
      { day: 'Day 4', title: 'Packaging, Labelling & Business', topics: ['Packaging materials & methods', 'Shelf-life testing & labelling regulations', 'Costing, pricing & profit margins', 'Marketing & selling strategies'] }
    ],
    faqs: [
      { question: 'What is a dry cake?', answer: 'Dry cakes are cakes with lower moisture content, designed for longer shelf life — perfect for packaging and selling.' },
      { question: 'How many flavours will I learn?', answer: 'You will master 20 flavour profiles suitable for commercial dry cake production.' },
      { question: 'What is the course duration?', answer: 'Both offline and online versions run for 4 days.' },
      { question: 'Are online sessions recorded?', answer: 'Yes, all sessions are recorded and provided to participants.' },
      { question: 'Can I start a business after this course?', answer: 'Absolutely — Day 4 is dedicated to packaging, pricing, and selling strategies for home bakeries.' },
      { question: 'What equipment do I need?', answer: 'Basic baking equipment — oven, mixing bowls, loaf pans. No specialised machinery required.' }
    ],
    onlineBenefits: ['Live interactive classes', 'Session recordings', 'PDF recipe collection', 'WhatsApp support', 'Certificate of participation']
  }
};

export function getCourse(slug: string) {
  return courses[slug];
}

export function allCourseSlugs() {
  return Object.keys(courses);
}

export function getRelatedCourses(currentSlug: string, count = 3): Course[] {
  const slugs = Object.keys(courses).filter(s => s !== currentSlug);
  const shuffled = slugs.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(s => courses[s]);
}

export default courses;
