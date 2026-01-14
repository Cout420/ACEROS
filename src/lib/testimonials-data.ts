
export type Testimonial = {
  name: string;
  company: string;
  country: string;
  flag: string;
  avatarUrl: string;
  rating: number;
  lang_code: 'pt' | 'en' | 'de' | 'es';
  testimonial: string; // Original language testimonial
  testimonial_pt: string;
  testimonial_en: string;
  testimonial_de: string;
  testimonial_es: string;
  testimonial_it: string;
};

export const testimonialsData: Testimonial[] = [
  // --- Brasil (7) ---
  {
    name: 'João Silva',
    company: 'Petrobras',
    country: 'Brasil',
    flag: '🇧🇷',
    avatarUrl: 'https://picsum.photos/seed/j.silva/100/100',
    rating: 5,
    lang_code: 'pt',
    testimonial: 'A qualidade dos tubos centrifugados da Aceros superou nossas expectativas. A resistência e a durabilidade em ambientes de alta pressão são impressionantes.',
    testimonial_pt: 'A qualidade dos tubos centrifugados da Aceros superou nossas expectativas. A resistência e a durabilidade em ambientes de alta pressão são impressionantes.',
    testimonial_en: 'The quality of Aceros\' centrifugally cast tubes exceeded our expectations. The strength and durability in high-pressure environments are impressive.',
    testimonial_de: 'Die Qualität der von Aceros zentrifugal gegossenen Rohre hat unsere Erwartungen übertroffen. Die Festigkeit und Haltbarkeit in Hochdruckumgebungen sind beeindruckend.',
    testimonial_es: 'La calidad de los tubos centrifugados de Aceros superó nuestras expectativas. La resistencia y durabilidad en ambientes de alta presión son impresionantes.',
    testimonial_it: 'La qualità dei tubi centrifugati di Aceros ha superato le nostre aspettative. La resistenza e la durata in ambienti ad alta pressione sono impressionanti.'
  },
  {
    name: 'Mariana Costa',
    company: 'Vale',
    country: 'Brasil',
    flag: '🇧🇷',
    avatarUrl: 'https://picsum.photos/seed/m.costa/100/100',
    rating: 5,
    lang_code: 'pt',
    testimonial: 'Os componentes para britadores que adquirimos da Aceros aumentaram significativamente a vida útil de nossos equipamentos. Excelente serviço e suporte técnico.',
    testimonial_pt: 'Os componentes para britadores que adquirimos da Aceros aumentaram significativamente a vida útil de nossos equipamentos. Excelente serviço e suporte técnico.',
    testimonial_en: 'The crusher components we purchased from Aceros significantly increased the lifespan of our equipment. Excellent service and technical support.',
    testimonial_de: 'Die von uns bei Aceros gekauften Brecherkomponenten haben die Lebensdauer unserer Anlagen erheblich verlängert. Ausgezeichneter Service und technischer Support.',
    testimonial_es: 'Los componentes para trituradoras que compramos de Aceros aumentaron significativamente la vida útil de nuestros equipos. Excelente servicio y soporte técnico.',
    testimonial_it: 'I componenti per frantoi che abbiamo acquistato da Aceros hanno aumentato significativamente la durata delle nostre attrezzature. Servizio e supporto tecnico eccellenti.'
  },
  {
    name: 'Ricardo Oliveira',
    company: 'Gerdau',
    country: 'Brasil',
    flag: '🇧🇷',
    avatarUrl: 'https://picsum.photos/seed/r.oliveira/100/100',
    rating: 5,
    lang_code: 'pt',
    testimonial: 'Os rolos para fornos da Aceros são de altíssima qualidade. A performance em altas temperaturas é fantástica e a entrega foi pontual.',
    testimonial_pt: 'Os rolos para fornos da Aceros são de altíssima qualidade. A performance em altas temperaturas é fantástica e a entrega foi pontual.',
    testimonial_en: 'The furnace rollers from Aceros are of the highest quality. The performance at high temperatures is fantastic and the delivery was on time.',
    testimonial_de: 'Die Ofenrollen von Aceros sind von höchster Qualität. Die Leistung bei hohen Temperaturen ist fantastisch und die Lieferung war pünktlich.',
    testimonial_es: 'Los rodillos para hornos de Aceros son de la más alta calidad. El rendimiento a altas temperaturas es fantástico y la entrega fue puntual.',
    testimonial_it: 'I rulli per forni di Aceros sono di altissima qualità. Le prestazioni ad alte temperature sono fantastiche e la consegna è stata puntuale.'
  },
  {
    name: 'Sofia Pereira',
    company: 'Embraer',
    country: 'Brasil',
    flag: '🇧🇷',
    avatarUrl: 'https://picsum.photos/seed/s.pereira/100/100',
    rating: 5,
    lang_code: 'pt',
    testimonial: 'Precisávamos de peças usinadas com altíssima precisão e a Aceros entregou um trabalho impecável. A parceria foi um sucesso.',
    testimonial_pt: 'Precisávamos de peças usinadas com altíssima precisão e a Aceros entregou um trabalho impecável. A parceria foi um sucesso.',
    testimonial_en: 'We needed machined parts with very high precision and Aceros delivered impeccable work. The partnership was a success.',
    testimonial_de: 'Wir benötigten maschinell bearbeitete Teile mit sehr hoher Präzision und Aceros lieferte eine einwandfreie Arbeit. Die Partnerschaft war ein Erfolg.',
    testimonial_es: 'Necesitábamos piezas mecanizadas con muy alta precisión y Aceros entregó un trabajo impecable. La asociación fue un éxito.',
    testimonial_it: 'Avevamo bisogno di pezzi lavorati con altissima precisione e Aceros ha consegnato un lavoro impeccabile. La partnership è stata un successo.'
  },
  {
    name: 'Lucas Martins',
    company: 'Braskem',
    country: 'Brasil',
    flag: '🇧🇷',
    avatarUrl: 'https://picsum.photos/seed/l.martins/100/100',
    rating: 4,
    lang_code: 'pt',
    testimonial: 'As ligas especiais desenvolvidas pela Aceros foram essenciais para otimizar nosso processo petroquímico. Ótima resistência à corrosão.',
    testimonial_pt: 'As ligas especiais desenvolvidas pela Aceros foram essenciais para otimizar nosso processo petroquímico. Ótima resistência à corrosão.',
    testimonial_en: 'The special alloys developed by Aceros were essential to optimize our petrochemical process. Great corrosion resistance.',
    testimonial_de: 'Die von Aceros entwickelten Speziallegierungen waren entscheidend für die Optimierung unseres petrochemischen Prozesses. Große Korrosionsbeständigkeit.',
    testimonial_es: 'Las aleaciones especiales desarrolladas por Aceros fueron esenciales para optimizar nuestro proceso petroquímico. Gran resistencia a la corrosión.',
    testimonial_it: 'Le leghe speciali sviluppate da Aceros sono state essenziali per ottimizzare il nostro processo petrolchimico. Ottima resistenza alla corrosione.'
  },
  {
    name: 'Fernanda Lima',
    company: 'CSN',
    country: 'Brasil',
    flag: '🇧🇷',
    avatarUrl: 'https://picsum.photos/seed/f.lima/100/100',
    rating: 5,
    lang_code: 'pt',
    testimonial: 'A consultoria técnica e a qualidade dos fundidos customizados fizeram toda a diferença em nosso projeto. Recomendo fortemente a Aceros.',
    testimonial_pt: 'A consultoria técnica e a qualidade dos fundidos customizados fizeram toda a diferença em nosso projeto. Recomendo fortemente a Aceros.',
    testimonial_en: 'The technical consulting and the quality of the custom castings made all the difference in our project. I strongly recommend Aceros.',
    testimonial_de: 'Die technische Beratung und die Qualität der kundenspezifischen Gussteile haben in unserem Projekt den Unterschied gemacht. Ich empfehle Aceros nachdrücklich.',
    testimonial_es: 'La consultoría técnica y la calidad de las piezas fundidas a medida marcaron la diferencia en nuestro proyecto. Recomiendo encarecidamente a Aceros.',
    testimonial_it: 'La consulenza tecnica e la qualità delle fusioni personalizzate hanno fatto la differenza nel nostro progetto. Consiglio vivamente Aceros.'
  },
  {
    name: 'André Santos',
    company: 'Estaleiro Atlântico Sul',
    country: 'Brasil',
    flag: '🇧🇷',
    avatarUrl: 'https://picsum.photos/seed/a.santos/100/100',
    rating: 5,
    lang_code: 'pt',
    testimonial: 'As buchas e anéis para o setor naval atendem a todas as normas internacionais. Confiabilidade e segurança que podemos contar.',
    testimonial_pt: 'As buchas e anéis para o setor naval atendem a todas as normas internacionais. Confiabilidade e segurança que podemos contar.',
    testimonial_en: 'The bushings and rings for the naval sector meet all international standards. Reliability and safety we can count on.',
    testimonial_de: 'Die Buchsen und Ringe für den Marinesektor erfüllen alle internationalen Standards. Zuverlässigkeit und Sicherheit, auf die wir uns verlassen können.',
    testimonial_es: 'Los casquillos y anillos para el sector naval cumplen con todas las normas internacionales. Fiabilidad y seguridad en las que podemos confiar.',
    testimonial_it: 'Le boccole e gli anelli per il settore navale soddisfano tutti gli standard internazionali. Affidabilità e sicurezza su cui possiamo contare.'
  },

  // --- Alemanha (2) ---
  {
    name: 'Hans Müller',
    company: 'Thyssenkrupp',
    country: 'Alemanha',
    flag: '🇩🇪',
    avatarUrl: 'https://picsum.photos/seed/h.muller/100/100',
    rating: 5,
    lang_code: 'de',
    testimonial: 'Die Qualität und Präzision der zentrifugal gegossenen Rohre ist ausgezeichnet. Aceros ist ein zuverlässiger Partner für anspruchsvolle Projekte.',
    testimonial_pt: 'A qualidade e precisão dos tubos centrifugados são excelentes. A Aceros é um parceiro confiável para projetos exigentes.',
    testimonial_en: 'The quality and precision of the centrifugally cast tubes are excellent. Aceros is a reliable partner for demanding projects.',
    testimonial_de: 'Die Qualität und Präzision der zentrifugal gegossenen Rohre ist ausgezeichnet. Aceros ist ein zuverlässiger Partner für anspruchsvolle Projekte.',
    testimonial_es: 'La calidad y precisión de los tubos centrifugados son excelentes. Aceros es un socio confiable para proyectos exigentes.',
    testimonial_it: 'La qualità e la precisione dei tubi centrifugati sono eccellenti. Aceros è un partner affidabile per progetti impegnativi.'
  },
  {
    name: 'Klaus Schmidt',
    company: 'Siemens Energy',
    country: 'Alemanha',
    flag: '🇩🇪',
    avatarUrl: 'https://picsum.photos/seed/k.schmidt/100/100',
    rating: 5,
    lang_code: 'de',
    testimonial: 'Wir sind sehr zufrieden mit den Speziallegierungen. Sie halten extremen Temperaturen stand und haben unsere Erwartungen übertroffen.',
    testimonial_pt: 'Estamos muito satisfeitos com as ligas especiais. Elas resistem a temperaturas extremas e superaram nossas expectativas.',
    testimonial_en: 'We are very satisfied with the special alloys. They withstand extreme temperatures and have exceeded our expectations.',
    testimonial_de: 'Wir sind sehr zufrieden mit den Speziallegierungen. Sie halten extremen Temperaturen stand und haben unsere Erwartungen übertroffen.',
    testimonial_es: 'Estamos muy satisfechos con las aleaciones especiales. Soportan temperaturas extremas y han superado nuestras expectativas.',
    testimonial_it: 'Siamo molto soddisfatti delle leghe speciali. Resistono a temperature estreme e hanno superato le nostre aspettative.'
  },
  // --- Canadá (2) ---
  {
    name: 'John Smith',
    company: 'Suncor Energy',
    country: 'Canadá',
    flag: '🇨🇦',
    avatarUrl: 'https://picsum.photos/seed/j.smith/100/100',
    rating: 5,
    lang_code: 'en',
    testimonial: "Aceros' components for our oil and gas operations have proven to be incredibly reliable under extreme conditions. Top-tier engineering and service.",
    testimonial_pt: 'Os componentes da Aceros para nossas operações de óleo e gás provaram ser incrivelmente confiáveis sob condições extremas. Engenharia e serviço de primeira linha.',
    testimonial_en: "Aceros' components for our oil and gas operations have proven to be incredibly reliable under extreme conditions. Top-tier engineering and service.",
    testimonial_de: 'Die Komponenten von Aceros für unsere Öl- und Gasbetriebe haben sich unter extremen Bedingungen als unglaublich zuverlässig erwiesen. Erstklassige Technik und Service.',
    testimonial_es: 'Los componentes de Aceros para nuestras operaciones de petróleo y gas han demostrado ser increíblemente confiables en condiciones extremas. Ingeniería y servicio de primer nivel.',
    testimonial_it: 'I componenti di Aceros per le nostre operazioni nel settore petrolifero e del gas si sono dimostrati incredibilmente affidabili in condizioni estreme. Ingegneria e servizio di altissimo livello.'
  },
  {
    name: 'Chloé Dubois',
    company: 'Bombardier',
    country: 'Canadá',
    flag: '🇨🇦',
    avatarUrl: 'https://picsum.photos/seed/c.dubois/100/100',
    rating: 5,
    lang_code: 'en',
    testimonial: 'Les pièces usinées sur mesure étaient parfaites. La précision et la qualité des matériaux fournis par Aceros sont de classe mondiale.',
    testimonial_pt: 'As peças usinadas sob medida estavam perfeitas. A precisão e a qualidade dos materiais fornecidos pela Aceros são de classe mundial.',
    testimonial_en: 'The custom machined parts were perfect. The precision and quality of the materials provided by Aceros are world-class.',
    testimonial_de: 'Die maßgefertigten Teile waren perfekt. Die Präzision und Qualität der von Aceros gelieferten Materialien sind von Weltklasse.',
    testimonial_es: 'Las piezas mecanizadas a medida eran perfectas. La precisión y calidad de los materiales proporcionados por Aceros son de clase mundial.',
    testimonial_it: 'I pezzi lavorati su misura erano perfetti. La precisione e la qualità dei materiali forniti da Aceros sono di classe mondiale.'
  },

  // --- Egito (1) ---
  {
    name: 'Ahmed Hassan',
    company: 'Suez Steel',
    country: 'Egito',
    flag: '🇪🇬',
    avatarUrl: 'https://picsum.photos/seed/a.hassan/100/100',
    rating: 5,
    lang_code: 'en',
    testimonial: 'The quality of castings provided by Aceros is excellent. Their products have helped us significantly improve the efficiency of our operations. A reliable partner.',
    testimonial_pt: 'A qualidade das peças fundidas fornecidas pela Aceros é excelente. Seus produtos nos ajudaram a melhorar significativamente a eficiência de nossas operações. Um parceiro de confiança.',
    testimonial_en: 'The quality of castings provided by Aceros is excellent. Their products have helped us significantly improve the efficiency of our operations. A reliable partner.',
    testimonial_de: 'Die Qualität der von Aceros gelieferten Gussteile ist ausgezeichnet. Ihre Produkte haben uns geholfen, die Effizienz unserer Abläufe erheblich zu verbessern. Ein zuverlässiger Partner.',
    testimonial_es: 'La calidad de las piezas fundidas proporcionadas por Aceros es excelente. Sus productos nos han ayudado a mejorar significativamente la eficiencia de nuestras operaciones. Un socio confiable.',
    testimonial_it: 'La qualità delle fusioni fornite da Aceros è eccellente. I loro prodotti ci hanno aiutato a migliorare significativamente l\'efficienza delle nostre operazioni. Un partner affidabile.'
  },

  // --- EUA (1) ---
  {
    name: 'Michael Johnson',
    company: 'Caterpillar Inc.',
    country: 'EUA',
    flag: '🇺🇸',
    avatarUrl: 'https://picsum.photos/seed/m.johnson/100/100',
    rating: 5,
    lang_code: 'en',
    testimonial: 'The custom cast components for our mining equipment are top-notch. Aceros delivers on their promise of quality and durability. Highly recommended.',
    testimonial_pt: 'Os componentes fundidos personalizados para nossos equipamentos de mineração são de primeira linha. A Aceros cumpre sua promessa de qualidade e durabilidade. Altamente recomendado.',
    testimonial_en: 'The custom cast components for our mining equipment are top-notch. Aceros delivers on their promise of quality and durability. Highly recommended.',
    testimonial_de: 'Die maßgefertigten Gusskomponenten für unsere Bergbauausrüstung sind erstklassig. Aceros hält sein Qualitäts- und Haltbarkeitsversprechen. Sehr empfehlenswert.',
    testimonial_es: 'Los componentes de fundición personalizados para nuestro equipo de minería son de primera categoría. Aceros cumple su promesa de calidad y durabilidad. Muy recomendable.',
    testimonial_it: 'I componenti fusi personalizzati per le nostre attrezzature minerarie sono di prima qualità. Aceros mantiene la sua promessa di qualità e durata. Altamente raccomandato.'
  },

  // --- México (2) ---
  {
    name: 'Carlos Hernandez',
    company: 'PEMEX',
    country: 'México',
    flag: '🇲🇽',
    avatarUrl: 'https://picsum.photos/seed/c.hernandez/100/100',
    rating: 5,
    lang_code: 'es',
    testimonial: 'Los componentes para válvulas de Aceros han demostrado una resistencia excepcional a la corrosión en nuestras refinerías. Un producto de gran calidad.',
    testimonial_pt: 'Os componentes para válvulas da Aceros demonstraram uma resistência excepcional à corrosão em nossas refinarias. Um produto de grande qualidade.',
    testimonial_en: 'Aceros\' valve components have shown exceptional corrosion resistance in our refineries. A high-quality product.',
    testimonial_de: 'Die Ventilkomponenten von Aceros haben in unseren Raffinerien eine außergewöhnliche Korrosionsbeständigkeit gezeigt. Ein hochwertiges Produkt.',
    testimonial_es: 'Los componentes para válvulas de Aceros han demostrado una resistencia excepcional a la corrosión en nuestras refinerías. Un producto de gran calidad.',
    testimonial_it: 'I componenti per valvole di Aceros hanno dimostrato un\'eccezionale resistenza alla corrosione nelle nostre raffinerie. Un prodotto di alta qualità.'
  },
  {
    name: 'Sofia Garcia',
    company: 'Ternium',
    country: 'México',
    flag: '🇲🇽',
    avatarUrl: 'https://picsum.photos/seed/s.garcia/100/100',
    rating: 5,
    lang_code: 'es',
    testimonial: 'Estamos muy impresionados con los rodillos para hornos. La vida útil del producto ha superado nuestras proyecciones. Excelente inversión.',
    testimonial_pt: 'Estamos muito impressionados com os rolos para fornos. A vida útil do produto superou nossas projeções. Excelente investimento.',
    testimonial_en: 'We are very impressed with the furnace rollers. The product\'s lifespan has exceeded our projections. Excellent investment.',
    testimonial_de: 'Wir sind sehr beeindruckt von den Ofenrollen. Die Lebensdauer des Produkts hat unsere Prognosen übertroffen. Ausgezeichnete Investition.',
    testimonial_es: 'Estamos muy impresionados con los rodillos para hornos. La vida útil del producto ha superado nuestras proyecciones. Excelente inversión.',
    testimonial_it: 'Siamo molto colpiti dai rulli per forni. La durata del prodotto ha superato le nostre proiezioni. Ottimo investimento.'
  },
  // --- Suécia (1) ---
  {
    name: 'Lars Johansson',
    company: 'Sandvik',
    country: 'Suécia',
    flag: '🇸🇪',
    avatarUrl: 'https://picsum.photos/seed/l.johansson/100/100',
    rating: 5,
    lang_code: 'en',
    testimonial: 'Aceros special alloys for mining equipment are top class. Their technical expertise and product quality are unmatched.',
    testimonial_pt: 'As ligas especiais da Aceros para equipamentos de mineração são de primeira classe. Sua expertise técnica e a qualidade do produto são inigualáveis.',
    testimonial_en: 'Aceros special alloys for mining equipment are top class. Their technical expertise and product quality are unmatched.',
    testimonial_de: 'Die Speziallegierungen von Aceros für Bergbauausrüstung sind erstklassig. Ihre technische Kompetenz und Produktqualität sind unübertroffen.',
    testimonial_es: 'Las aleaciones especiales de Aceros para equipos de minería son de primera clase. Su experiencia técnica y la calidad del producto son inigualables.',
    testimonial_it: 'Le leghe speciali di Aceros per le attrezzature minerarie sono di prima classe. La loro competenza tecnica e la qualità del prodotto non hanno eguali.'
  },
];
