const categories = [
  {
    "nameUa": "ІТ та програмування",
    "nameEn": "IT & Programming",
    "descriptionUa": "Професії, орієнтовані на розробку програмного забезпечення, веб-сайтів, мобільних додатків, підтримку інформаційних систем і забезпечення безпеки.",
    "descriptionEn": "Professions focused on software development, websites, mobile applications, information systems support, and security."
  },
  {
    "nameUa": "Медицина та охорона здоров'я",
    "nameEn": "Healthcare & Medicine",
    "descriptionUa": "Професії, пов'язані з наданням медичних послуг, лікуванням пацієнтів і доглядом за їх здоров'ям.",
    "descriptionEn": "Professions related to providing medical services, treating patients, and caring for their health."
  },
  {
    "nameUa": "Освіта та наука",
    "nameEn": "Education & Science",
    "descriptionUa": "Професії, пов'язані з навчанням, викладанням, проведенням наукових досліджень.",
    "descriptionEn": "Professions related to teaching, lecturing, and conducting scientific research."
  },
  {
    "nameUa": "Бізнес та фінанси",
    "nameEn": "Business & Finance",
    "descriptionUa": "Професії, пов'язані з управлінням, фінансами, маркетингом, продажами та підприємництвом.",
    "descriptionEn": "Professions related to management, finance, marketing, sales, and entrepreneurship."
  },
  {
    "nameUa": "Інженерія та виробництво",
    "nameEn": "Engineering & Manufacturing",
    "descriptionUa": "Професії, пов'язані з проєктуванням, розробкою, виробництвом та експлуатацією технічних систем і обладнання.",
    "descriptionEn": "Professions related to the design, development, manufacturing, and operation of technical systems and equipment."
  },
  {
    "nameUa": "Мистецтво та культура",
    "nameEn": "Arts & Culture",
    "descriptionUa": "Професії, пов'язані з творчістю, виконавським мистецтвом, дизайном, літературою та культурною спадщиною.",
    "descriptionEn": "Professions related to creativity, performing arts, design, literature, and cultural heritage."
  },
  {
    "nameUa": "Сфера послуг",
    "nameEn": "Service Industry",
    "descriptionUa": "Професії, пов'язані з наданням різноманітних послуг населенню та бізнесу.",
    "descriptionEn": "Professions related to providing various services to the public and businesses."
  },
  {
    "nameUa": "Транспорт та логістика",
    "nameEn": "Transportation & Logistics",
    "descriptionUa": "Професії, пов'язані з перевезенням вантажів і пасажирів, а також управлінням ланцюгами поставок.",
    "descriptionEn": "Professions related to the transportation of goods and passengers, as well as supply chain management."
  },
  {
    "nameUa": "Сільське господарство та агробізнес",
    "nameEn": "Agriculture & Agribusiness",
    "descriptionUa": "Професії, пов'язані з вирощуванням сільськогосподарських культур, тваринництвом та переробкою сільськогосподарської продукції.",
    "descriptionEn": "Professions related to crop cultivation, animal husbandry, and the processing of agricultural products."
  },
  {
    "nameUa": "Будівництво та нерухомість",
    "nameEn": "Construction & Real Estate",
    "descriptionUa": "Професії, пов'язані з проєктуванням, будівництвом, ремонтом будівель та споруд, а також операціями з нерухомістю.",
    "descriptionEn": "Professions related to the design, construction, and repair of buildings and structures, as well as real estate operations."
  },
  {
    "nameUa": "Державне управління та право",
    "nameEn": "Government & Law",
    "descriptionUa": "Професії, пов'язані з державним управлінням, правоохоронною діяльністю, юриспруденцією та законодавством.",
    "descriptionEn": "Professions related to public administration, law enforcement, jurisprudence, and legislation."
  },
  {
    "nameUa": "Маркетинг та реклама",
    "nameEn": "Marketing & Advertising",
    "descriptionUa": "Професії, пов'язані з просуванням товарів і послуг, розробкою рекламних кампаній та дослідженням ринку.",
    "descriptionEn": "Professions related to promoting goods and services, developing advertising campaigns, and market research."
  },
  {
    "nameUa": "Продажі та обслуговування клієнтів",
    "nameEn": "Sales & Customer Service",
    "descriptionUa": "Професії, пов'язані з продажем товарів і послуг, а також наданням підтримки та обслуговування клієнтів.",
    "descriptionEn": "Professions related to selling goods and services, as well as providing customer support and service."
  },
  {
    "nameUa": "Екологія та охорона навколишнього середовища",
    "nameEn": "Ecology & Environmental Protection",
    "descriptionUa": "Професії, пов'язані з дослідженням, збереженням та відновленням навколишнього середовища.",
    "descriptionEn": "Professions related to the study, conservation, and restoration of the environment."
  },
  {
    "nameUa": "Туризм та гостинність",
    "nameEn": "Tourism & Hospitality",
    "descriptionUa": "Професії, пов'язані з організацією подорожей, розміщенням та обслуговуванням туристів.",
    "descriptionEn": "Professions related to organizing travel, accommodation, and services for tourists."
  },
  {
    "nameUa": "Дизайн та архітектура",
    "nameEn": "Design & Architecture",
    "descriptionUa": "Професії, пов'язані з проєктуванням та створенням естетично привабливих та функціональних об'єктів.",
    "descriptionEn": "Professions related to designing and creating aesthetically pleasing and functional objects."
  },
  {
    "nameUa": "Фітнес та спорт",
    "nameEn": "Fitness & Sports",
    "descriptionUa": "Професії, пов'язані зі спортом, фізичною культурою та здоровим способом життя.",
    "descriptionEn": "Professions related to sports, physical culture, and a healthy lifestyle."
  },
  {
    "nameUa": "ЗМІ та комунікації",
    "nameEn": "Media & Communications",
    "descriptionUa": "Професії, пов'язані зі створенням та розповсюдженням інформації через різні медіаканали.",
    "descriptionEn": "Professions related to creating and distributing information through various media channels."
  },
  {
    "nameUa": "Соціальна робота та психологія",
    "nameEn": "Social Work & Psychology",
    "descriptionUa": "Професії, пов'язані з наданням соціальної та психологічної підтримки різним групам населення.",
    "descriptionEn": "Professions related to providing social and psychological support to various population groups."
  },
  {
    "nameUa": "Адміністративна робота та офісний менеджмент",
    "nameEn": "Administrative Work & Office Management",
    "descriptionUa": "Професії, пов'язані з організацією офісної роботи, веденням документації та адміністративною підтримкою.",
    "descriptionEn": "Professions related to organizing office work, maintaining documentation, and providing administrative support."
  },
  {
    "nameUa": "Юриспруденція та право",
    "nameEn": "Jurisprudence & Law",
    "descriptionUa": "Професії, пов'язані з правовою діяльністю, представництвом інтересів, консультуванням та правозастосуванням.",
    "descriptionEn": "Professions related to legal practice, representing interests, providing consultation, and law enforcement."
  },
  {
    "nameUa": "Фінанси та інвестиції",
    "nameEn": "Finance & Investments",
    "descriptionUa": "Професії, пов'язані з управлінням фінансовими ресурсами, інвестуванням та аналізом фінансових ринків.",
    "descriptionEn": "Professions related to managing financial resources, investing, and analyzing financial markets."
  },
  {
    "nameUa": "Управління персоналом (HR)",
    "nameEn": "Human Resources (HR)",
    "descriptionUa": "Професії, пов'язані з підбором, навчанням, розвитком та управлінням персоналом в організації.",
    "descriptionEn": "Professions related to recruitment, training, development, and management of personnel within an organization."
  },
  {
    "nameUa": "Маркетингові комунікації",
    "nameEn": "Marketing Communications",
    "descriptionUa": "Професії, пов'язані з розробкою та реалізацією комунікаційних стратегій для просування брендів та продуктів.",
    "descriptionEn": "Professions related to developing and implementing communication strategies to promote brands and products."
  },
  {
    "nameUa": "Аналітика даних та статистика",
    "nameEn": "Data Analytics & Statistics",
    "descriptionUa": "Професії, пов'язані зі збором, обробкою, аналізом та інтерпретацією даних для прийняття рішень.",
    "descriptionEn": "Professions related to collecting, processing, analyzing, and interpreting data for decision-making."
  },
  {
    "nameUa": "Дизайн інтер'єру та ландшафтний дизайн",
    "nameEn": "Interior Design & Landscape Design",
    "descriptionUa": "Професії, пов'язані з проєктуванням та оформленням внутрішніх та зовнішніх просторів.",
    "descriptionEn": "Professions related to designing and decorating interior and exterior spaces."
  },
  {
    "nameUa": "Харчова промисловість та кулінарія",
    "nameEn": "Food Industry & Culinary Arts",
    "descriptionUa": "Професії, пов'язані з виробництвом харчових продуктів, приготуванням їжі та ресторанним бізнесом.",
    "descriptionEn": "Professions related to food production, cooking, and the restaurant business."
  },
  {
    "nameUa": "Фармацевтика та біотехнології",
    "nameEn": "Pharmaceuticals & Biotechnology",
    "descriptionUa": "Професії, пов'язані з розробкою, виробництвом та дослідженням лікарських засобів та біотехнологій.",
    "descriptionEn": "Professions related to the development, production, and research of pharmaceuticals and biotechnologies."
  },
  {
    "nameUa": "Енергетика та видобувна промисловість",
    "nameEn": "Energy & Extractive Industries",
    "descriptionUa": "Професії, пов'язані з виробництвом, розподілом енергії та видобутком корисних копалин.",
    "descriptionEn": "Professions related to the production and distribution of energy, and the extraction of minerals."
  },
  {
    "nameUa": "Телекомунікації та зв'язок",
    "nameEn": "Telecommunications & Communications",
    "descriptionUa": "Професії, пов'язані з наданням послуг зв'язку, розвитком телекомунікаційних мереж та технологій.",
    "descriptionEn": "Professions related to providing communication services and developing telecommunication networks and technologies."
  },
  {
    "nameUa": "Охорона та безпека",
    "nameEn": "Security & Safety",
    "descriptionUa": "Професії, пов'язані із забезпеченням безпеки людей, майна та інформації.",
    "descriptionEn": "Professions related to ensuring the safety of people, property, and information."
  },
  {
    "nameUa": "Соціальне забезпечення та громадська діяльність",
    "nameEn": "Social Welfare & Public Service",
    "descriptionUa": "Професії, пов'язані з наданням соціальної допомоги, підтримкою вразливих груп населення та громадською діяльністю.",
    "descriptionEn": "Professions related to providing social assistance, supporting vulnerable populations, and public service."
  },
  {
    "nameUa": "Економіка та макроекономіка",
    "nameEn": "Economics & Macroeconomics",
    "descriptionUa": "Професії, пов'язані з аналізом економічних систем, прогнозуванням та розробкою економічної політики.",
    "descriptionEn": "Professions related to the analysis of economic systems, forecasting, and the development of economic policy."
  },
  {
    "nameUa": "Міжнародні відносини та дипломатія",
    "nameEn": "International Relations & Diplomacy",
    "descriptionUa": "Професії, пов'язані з налагодженням та підтримкою міжнародних зв'язків, дипломатичною службою.",
    "descriptionEn": "Professions related to establishing and maintaining international relations and diplomatic service."
  },
  {
    "nameUa": "Логістика та управління ланцюгами поставок",
    "nameEn": "Logistics & Supply Chain Management",
    "descriptionUa": "Професії, пов'язані з плануванням, організацією та контролем руху товарів та інформації.",
    "descriptionEn": "Professions related to planning, organizing, and controlling the movement of goods and information."
  },
  {
    "nameUa": "Менеджмент проєктів",
    "nameEn": "Project Management",
    "descriptionUa": "Професії, пов'язані з плануванням, виконанням та контролем проєктів у різних галузях.",
    "descriptionEn": "Professions related to planning, executing, and controlling projects in various industries."
  },
  {
    "nameUa": "Бізнес-аналіз та консалтинг",
    "nameEn": "Business Analysis & Consulting",
    "descriptionUa": "Професії, пов'язані з аналізом бізнес-процесів, виявленням проблем та наданням рекомендацій щодо їх оптимізації.",
    "descriptionEn": "Professions related to analyzing business processes, identifying problems, and providing recommendations for their optimization."
  },
  {
    "nameUa": "Аудит та контроль",
    "nameEn": "Audit & Control",
    "descriptionUa": "Професії, пов'язані з перевіркою фінансової звітності, оцінкою ризиків та внутрішнім контролем в організаціях.",
    "descriptionEn": "Professions related to auditing financial statements, assessing risks, and internal control within organizations."
  },
  {
    "nameUa": "Нерухомість та управління майном",
    "nameEn": "Real Estate & Property Management",
    "descriptionUa": "Професії, пов'язані з операціями з нерухомістю, управлінням та обслуговуванням об'єктів.",
    "descriptionEn": "Professions related to real estate transactions, property management, and maintenance of facilities."
  },
  {
    "nameUa": "Страхування",
    "nameEn": "Insurance",
    "descriptionUa": "Професії, пов'язані з наданням страхових послуг, оцінкою ризиків та врегулюванням страхових випадків.",
    "descriptionEn": "Professions related to providing insurance services, risk assessment, and claims settlement."
  },
  {
    "nameUa": "Охорона здоров'я та соціальна допомога",
    "nameEn": "Healthcare & Social Assistance",
    "descriptionUa": "Широка категорія, що включає медичні та соціальні послуги, догляд за літніми людьми та іншу соціальну підтримку.",
    "descriptionEn": "A broad category encompassing medical and social services, elderly care, and other social support."
  },
  {
    "nameUa": "Наукові дослідження та розробки",
    "nameEn": "Scientific Research & Development",
    "descriptionUa": "Професії, пов'язані з проведенням фундаментальних та прикладних наукових досліджень у різних галузях.",
    "descriptionEn": "Professions related to conducting fundamental and applied scientific research in various fields."
  },
  {
    "nameUa": "Виробництво промислового обладнання",
    "nameEn": "Industrial Equipment Manufacturing",
    "descriptionUa": "Професії, пов'язані з виробництвом машин, устаткування та комплектуючих для промислових підприємств.",
    "descriptionEn": "Professions related to the manufacturing of machinery, equipment, and components for industrial enterprises."
  },
  {
    "nameUa": "Роздрібна торгівля",
    "nameEn": "Retail Trade",
    "descriptionUa": "Професії, пов'язані з продажем товарів безпосередньо споживачам через магазини та інші торгові точки.",
    "descriptionEn": "Professions related to selling goods directly to consumers through stores and other retail outlets."
  },
  {
    "nameUa": "Оптова торгівля",
    "nameEn": "Wholesale Trade",
    "descriptionUa": "Професії, пов'язані з продажем товарів іншим підприємствам для подальшого перепродажу або використання.",
    "descriptionEn": "Professions related to selling goods to other businesses for resale or use."
  },
  {
    "nameUa": "Інформаційні технології та послуги",
    "nameEn": "Information Technology & Services",
    "descriptionUa": "Широка категорія, що включає розробку програмного забезпечення, ІТ-підтримку, кібербезпеку та інші ІТ-послуги.",
    "descriptionEn": "A broad category including software development, IT support, cybersecurity, and other IT services."
  },
  {
    "nameUa": "Фінансові послуги, крім страхування",
    "nameEn": "Financial Services, Except Insurance",
    "descriptionUa": "Професії, пов'язані з наданням фінансових послуг, таких як банківська справа, інвестиції та управління активами.",
    "descriptionEn": "Professions related to providing financial services such as banking, investments, and asset management."
  },
  {
    "nameUa": "Освіта та навчальні послуги",
    "nameEn": "Educational Services",
    "descriptionUa": "Професії, пов'язані з наданням освітніх послуг на різних рівнях, від дошкільної до вищої освіти.",
    "descriptionEn": "Professions related to providing educational services at various levels, from preschool to higher education."
  },
  {
    "nameUa": "Транспортні послуги",
    "nameEn": "Transportation Services",
    "descriptionUa": "Професії, пов'язані з перевезенням пасажирів та вантажів різними видами транспорту.",
    "descriptionEn": "Professions related to the transportation of passengers and goods by various modes of transport."
  },
  {
    "nameUa": "Послуги розміщення та харчування",
    "nameEn": "Accommodation & Food Services",
    "descriptionUa": "Професії, пов'язані з наданням послуг готелів, ресторанів, кафе та інших закладів розміщення та харчування.",
    "descriptionEn": "Professions related to providing services in hotels, restaurants, cafes, and other accommodation and food service establishments."
  },
  {
    "nameUa": "Інформаційно-комунікаційні технології (ІКТ)",
    "nameEn": "Information and Communication Technologies (ICT)",
    "descriptionUa": "Широка сфера, що охоплює телекомунікації, інформаційні технології, медіа та інші комунікаційні сервіси.",
    "descriptionEn": "A broad field encompassing telecommunications, information technology, media, and other communication services."
  },
  {
    "nameUa": "Виробництво харчових продуктів, напоїв та тютюнових виробів",
    "nameEn": "Manufacture of Food Products, Beverages and Tobacco Products",
    "descriptionUa": "Професії, пов'язані з виробництвом різноманітних харчових продуктів, напоїв та тютюнових виробів.",
    "descriptionEn": "Professions related to the production of various food products, beverages, and tobacco products."
  },
  {
    "nameUa": "Виробництво текстилю, одягу, шкіри та інших матеріалів",
    "nameEn": "Manufacture of Textiles, Wearing Apparel, Leather and Related Products",
    "descriptionUa": "Професії, пов'язані з виробництвом тканин, одягу, взуття, шкіряних виробів та інших текстильних матеріалів.",
    "descriptionEn": "Professions related to the production of fabrics, clothing, footwear, leather goods, and other textile materials."
  },
  {
    "nameUa": "Виробництво паперу та паперових виробів; поліграфічна діяльність",
    "nameEn": "Manufacture of Paper and Paper Products; Printing and Reproduction of Recorded Media",
    "descriptionUa": "Професії, пов'язані з виробництвом паперу, паперових виробів, друкарською діяльністю та копіюванням інформаційних носіїв.",
    "descriptionEn": "Professions related to the production of paper, paper products, printing activities, and the reproduction of recorded media."
  },
  {
    "nameUa": "Виробництво коксу та продуктів нафтоперероблення",
    "nameEn": "Manufacture of Coke and Refined Petroleum Products",
    "descriptionUa": "Професії, пов'язані з переробкою нафти та виробництвом коксу, палива та інших нафтопродуктів.",
    "descriptionEn": "Professions related to oil refining and the production of coke, fuel, and other petroleum products."
  },
  {
    "nameUa": "Виробництво хімічних речовин і хімічної продукції",
    "nameEn": "Manufacture of Chemicals and Chemical Products",
    "descriptionUa": "Професії, пов'язані з виробництвом основних хімічних речовин, добрив, полімерів, фарб та іншої хімічної продукції.",
    "descriptionEn": "Professions related to the production of basic chemicals, fertilizers, polymers, paints, and other chemical products."
  },
  {
    "nameUa": "Виробництво основних фармацевтичних продуктів і фармацевтичних препаратів",
    "nameEn": "Manufacture of Basic Pharmaceutical Products and Pharmaceutical Preparations",
    "descriptionUa": "Професії, пов'язані з виробництвом лікарських засобів, медичних препаратів та фармацевтичних інгредієнтів.",
    "descriptionEn": "Professions related to the production of medicines, medical preparations, and pharmaceutical ingredients."
  },
  {
    "nameUa": "Виробництво гумових і пластмасових виробів",
    "nameEn": "Manufacture of Rubber and Plastics Products",
    "descriptionUa": "Професії, пов'язані з виробництвом виробів з гуми та пластмаси, включаючи шини, труби, упаковку тощо.",
    "descriptionEn": "Professions related to the production of rubber and plastic products, including tires, pipes, packaging, etc."
  },
  {
    "nameUa": "Виробництво іншої неметалевої мінеральної продукції",
    "nameEn": "Manufacture of Other Non-Metallic Mineral Products",
    "descriptionUa": "Професії, пов'язані з виробництвом скла, кераміки, цементу, будівельних матеріалів та іншої неметалевої мінеральної продукції.",
    "descriptionEn": "Professions related to the production of glass, ceramics, cement, building materials, and other non-metallic mineral products."
  },
  {
    "nameUa": "Металургійне виробництво",
    "nameEn": "Manufacture of Basic Metals",
    "descriptionUa": "Професії, пов'язані з виробництвом чавуну, сталі, кольорових металів та інших основних металів.",
    "descriptionEn": "Professions related to the production of iron, steel, non-ferrous metals, and other basic metals."
  },
  {
    "nameUa": "Виробництво готових металевих виробів, крім машин і устаткування",
    "nameEn": "Manufacture of Fabricated Metal Products, Except Machinery and Equipment",
    "descriptionUa": "Професії, пов'язані з виробництвом металевих конструкцій, резервуарів, інструментів, кріпильних виробів та інших готових металевих виробів.",
    "descriptionEn": "Professions related to the manufacture of metal structures, tanks, tools, fasteners, and other fabricated metal products."
  },
  {
    "nameUa": "Виробництво комп'ютерів, електронної та оптичної продукції",
    "nameEn": "Manufacture of Computer, Electronic and Optical Products",
    "descriptionUa": "Професії, пов'язані з виробництвом комп'ютерів, комплектуючих, електронних компонентів, телекомунікаційного обладнання та оптичних приладів.",
    "descriptionEn": "Professions related to the manufacture of computers, components, electronic components, telecommunications equipment, and optical instruments."
  },
  {
    "nameUa": "Виробництво електричного устаткування",
    "nameEn": "Manufacture of Electrical Equipment",
    "descriptionUa": "Професії, пов'язані з виробництвом електродвигунів, генераторів, трансформаторів, розподільчої та контрольної апаратури.",
    "descriptionEn": "Professions related to the manufacture of electric motors, generators, transformers, distribution, and control apparatus."
  },
  {
    "nameUa": "Виробництво машин і устаткування, не віднесених до інших угруповань",
    "nameEn": "Manufacture of Machinery and Equipment N.E.C.",
    "descriptionUa": "Професії, пов'язані з виробництвом верстатів, сільськогосподарської техніки, будівельної техніки та іншого спеціалізованого обладнання.",
    "descriptionEn": "Professions related to the manufacture of machine tools, agricultural machinery, construction machinery, and other specialized equipment."
  },
  {
    "nameUa": "Виробництво автотранспортних засобів, причепів і напівпричепів",
    "nameEn": "Manufacture of Motor Vehicles, Trailers and Semi-Trailers",
    "descriptionUa": "Професії, пов'язані з виробництвом легкових та вантажних автомобілів, автобусів, причепів та напівпричепів.",
    "descriptionEn": "Professions related to the manufacture of passenger cars, trucks, buses, trailers, and semi-trailers."
  },
  {
    "nameUa": "Виробництво інших транспортних засобів",
    "nameEn": "Manufacture of Other Transport Equipment",
    "descriptionUa": "Професії, пов'язані з виробництвом залізничного транспорту, літаків, кораблів та іншого транспортного обладнання.",
    "descriptionEn": "Professions related to the manufacture of railway transport, aircraft, ships, and other transport equipment."
  },
  {
    "nameUa": "Виробництво меблів",
    "nameEn": "Manufacture of Furniture",
    "descriptionUa": "Професії, пов'язані з виробництвом меблів для дому, офісу та інших приміщень.",
    "descriptionEn": "Professions related to the manufacture of furniture for home, office, and other premises."
  },
  {
    "nameUa": "Інші види переробної промисловості",
    "nameEn": "Other Manufacturing",
    "descriptionUa": "Професії, пов'язані з різними видами промислового виробництва, не включеними до інших категорій.",
    "descriptionEn": "Professions related to various types of industrial production not included in other categories."
  },
  {
    "nameUa": "Постачання електроенергії, газу, пари та кондиційованого повітря",
    "nameEn": "Electricity, Gas, Steam and Air Conditioning Supply",
    "descriptionUa": "Професії, пов'язані з виробництвом, передачею та розподілом електроенергії, газу, пари та кондиційованого повітря.",
    "descriptionEn": "Professions related to the generation, transmission, and distribution of electricity, gas, steam, and conditioned air."
  },
  {
    "nameUa": "Водопостачання; каналізація, поводження з відходами",
    "nameEn": "Water Supply; Sewerage, Waste Management and Remediation Activities",
    "descriptionUa": "Професії, пов'язані з водопостачанням, очищенням стічних вод, збором та утилізацією відходів.",
    "descriptionEn": "Professions related to water supply, sewage treatment, waste collection, and disposal."
  },
  {
    "nameUa": "Будівництво",
    "nameEn": "Construction",
    "descriptionUa": "Професії, пов'язані з будівництвом житлових і нежитлових будівель, інженерних споруд та інфраструктури.",
    "descriptionEn": "Professions related to the construction of residential and non-residential buildings, civil engineering structures, and infrastructure."
  },
  {
    "nameUa": "Оптова та роздрібна торгівля автотранспортними засобами та їх ремонтом",
    "nameEn": "Wholesale and Retail Trade and Repair of Motor Vehicles and Motorcycles",
    "descriptionUa": "Професії, пов'язані з продажем, обслуговуванням та ремонтом автомобілів та мотоциклів.",
    "descriptionEn": "Professions related to the sale, service, and repair of automobiles and motorcycles."
  },
  {
    "nameUa": "Транспорт",
    "nameEn": "Transportation",
    "descriptionUa": "Професії, пов'язані з перевезенням пасажирів та вантажів різними видами транспорту.",
    "descriptionEn": "Professions related to the transportation of passengers and goods by various modes of transport."
  },
  {
    "nameUa": "Складське господарство та допоміжна діяльність у сфері транспорту",
    "nameEn": "Warehousing and Support Activities for Transportation",
    "descriptionUa": "Професії, пов'язані зі складським зберіганням, вантажно-розвантажувальними роботами та іншою допоміжною діяльністю у сфері транспорту.",
    "descriptionEn": "Professions related to warehousing, cargo handling, and other support activities in the field of transportation."
  },
  {
    "nameUa": "Поштова та кур'єрська діяльність",
    "nameEn": "Postal and Courier Activities",
    "descriptionUa": "Професії, пов'язані з наданням послуг поштового зв'язку та кур'єрської доставки.",
    "descriptionEn": "Professions related to providing postal and courier delivery services."
  },
  {
    "nameUa": "Тимчасове розміщування",
    "nameEn": "Accommodation",
    "descriptionUa": "Професії, пов'язані з наданням послуг готелів, хостелів та інших закладів тимчасового проживання.",
    "descriptionEn": "Professions related to providing services in hotels, hostels, and other temporary accommodation establishments."
  },
  {
    "nameUa": "Діяльність із забезпечення стравами та напоями",
    "nameEn": "Food and Beverage Service Activities",
    "descriptionUa": "Професії, пов'язані з роботою ресторанів, кафе, барів та інших закладів громадського харчування.",
    "descriptionEn": "Professions related to the operation of restaurants, cafes, bars, and other food and beverage service establishments."
  },
  {
    "nameUa": "Видавнича діяльність",
    "nameEn": "Publishing Activities",
    "descriptionUa": "Професії, пов'язані з виданням книг, газет, журналів та іншої друкованої продукції, а також програмного забезпечення.",
    "descriptionEn": "Professions related to the publishing of books, newspapers, magazines, and other printed materials, as well as software."
  },
  {
    "nameUa": "Кіно- та відеовиробництво, телевізійні програми, звукозапис",
    "nameEn": "Motion Picture, Video and Television Programme Production, Sound Recording and Music Publishing Activities",
    "descriptionUa": "Професії, пов'язані з виробництвом фільмів, відео, телевізійних програм, звукозаписом та виданням музики.",
    "descriptionEn": "Professions related to the production of movies, videos, television programs, sound recording, and music publishing."
  },
  {
    "nameUa": "Телекомунікації",
    "nameEn": "Telecommunications",
    "descriptionUa": "Професії, пов'язані з експлуатацією телекомунікаційних мереж та наданням послуг зв'язку.",
    "descriptionEn": "Professions related to the operation of telecommunication networks and the provision of communication services."
  },
  {
    "nameUa": "Комп'ютерне програмування, консультування та пов'язані послуги",
    "nameEn": "Computer Programming, Consultancy and Related Activities",
    "descriptionUa": "Професії, пов'язані з розробкою програмного забезпечення, консультуванням у сфері інформаційних технологій та наданням пов'язаних послуг.",
    "descriptionEn": "Professions related to software development, IT consulting, and the provision of related services."
  },
  {
    "nameUa": "Оброблення даних, розміщення інформації на веб-вузлах і пов'язана діяльність",
    "nameEn": "Data Processing, Hosting and Related Activities; Web Portals",
    "descriptionUa": "Професії, пов'язані з обробкою даних, розміщенням інформації на серверах та веб-сайтах, а також управлінням веб-порталами.",
    "descriptionEn": "Professions related to data processing, hosting information on servers and websites, and managing web portals."
  },
  {
    "nameUa": "Інша діяльність у сфері інформаційних технологій і комп'ютерних послуг",
    "nameEn": "Other Information Technology and Computer Service Activities",
    "descriptionUa": "Професії, пов'язані з іншими видами діяльності у сфері інформаційних технологій та комп'ютерних послуг, не включеними до інших категорій.",
    "descriptionEn": "Professions related to other types of activities in the field of information technology and computer services not included in other categories."
  },
  {
    "nameUa": "Інформаційні послуги",
    "nameEn": "Information Service Activities",
    "descriptionUa": "Професії, пов'язані з наданням інформаційних послуг, таких як бібліотечна справа, архівна справа та діяльність інформаційних агентств.",
    "descriptionEn": "Professions related to providing information services such as library science, archival science, and the activities of news agencies."
  },
  {
    "nameUa": "Фінансова діяльність, крім страхування та пенсійного забезпечення",
    "nameEn": "Financial Service Activities, Except Insurance and Pension Funding",
    "descriptionUa": "Професії, пов'язані з наданням фінансових послуг, крім страхування та пенсійного забезпечення, таких як банківська справа, кредитування та інвестиції.",
    "descriptionEn": "Professions related to providing financial services other than insurance and pension funding, such as banking, lending, and investments."
  },
  {
    "nameUa": "Страхування, перестрахування та недержавне пенсійне забезпечення",
    "nameEn": "Insurance, Reinsurance and Pension Funding, Except Compulsory Social Security",
    "descriptionUa": "Професії, пов'язані зі страхуванням, перестрахуванням та недержавним пенсійним забезпеченням.",
    "descriptionEn": "Professions related to insurance, reinsurance, and non-state pension funding."
  },
  {
    "nameUa": "Допоміжні послуги у сфері фінансової діяльності та страхування",
    "nameEn": "Activities Auxiliary to Financial Service and Insurance Activities",
    "descriptionUa": "Професії, що надають допоміжні послуги у сфері фінансової діяльності та страхування, такі як оцінка ризиків та врегулювання збитків.",
    "descriptionEn": "Professions providing auxiliary services in the field of financial activities and insurance, such as risk assessment and claims settlement."
  },
  {
    "nameUa": "Операції з нерухомим майном",
    "nameEn": "Real Estate Activities",
    "descriptionUa": "Професії, пов'язані з купівлею, продажем, орендою та управлінням нерухомим майном.",
    "descriptionEn": "Professions related to the buying, selling, renting, and management of real estate."
  },
  {
    "nameUa": "Юридична та бухгалтерська діяльність",
    "nameEn": "Legal and Accounting Activities",
    "descriptionUa": "Професії, пов'язані з наданням юридичних та бухгалтерських послуг.",
    "descriptionEn": "Professions related to providing legal and accounting services."
  },
  {
    "nameUa": "Діяльність головних управлінь (хед-офісів); консультування з питань управління",
    "nameEn": "Activities of Head Offices; Management Consultancy Activities",
    "descriptionUa": "Професії, пов'язані з управлінням головними офісами компаній та наданням консультацій з питань управління.",
    "descriptionEn": "Professions related to the management of company head offices and the provision of management consulting."
  },
  {
    "nameUa": "Архітектурна та інженерна діяльність; технічне консультування",
    "nameEn": "Architectural and Engineering Activities; Technical Testing and Analysis",
    "descriptionUa": "Професії, пов'язані з архітектурним та інженерним проєктуванням, а також проведенням технічних випробувань та аналізу.",
    "descriptionEn": "Professions related to architectural and engineering design, as well as conducting technical tests and analysis."
  },
  {
    "nameUa": "Наукові дослідження та розробки",
    "nameEn": "Scientific Research and Development",
    "descriptionUa": "Професії, пов'язані з проведенням фундаментальних та прикладних наукових досліджень у різних галузях.",
    "descriptionEn": "Professions related to conducting fundamental and applied scientific research in various fields."
  },
  {
    "nameUa": "Рекламна діяльність та дослідження кон'юнктури ринку",
    "nameEn": "Advertising and Market Research",
    "descriptionUa": "Професії, пов'язані з розробкою та проведенням рекламних кампаній, а також дослідженням ринкової кон'юнктури та споживчого попиту.",
    "descriptionEn": "Professions related to developing and conducting advertising campaigns, as well as researching market conditions and consumer demand."
  },
  {
    "nameUa": "Інші професійні, наукові та технічні види діяльності",
    "nameEn": "Other Professional, Scientific and Technical Activities",
    "descriptionUa": "Професії, пов'язані з різними видами професійної, наукової та технічної діяльності, не включеними до інших категорій.",
    "descriptionEn": "Professions related to various types of professional, scientific, and technical activities not included in other categories."
  },
  {
    "nameUa": "Ветеринарна діяльність",
    "nameEn": "Veterinary Activities",
    "descriptionUa": "Професії, пов'язані з наданням медичної допомоги тваринам.",
    "descriptionEn": "Professions related to providing medical care to animals."
  },
  {
    "nameUa": "Адміністративна та допоміжна діяльність",
    "nameEn": "Administrative and Support Service Activities",
    "descriptionUa": "Професії, пов'язані з наданням адміністративних та допоміжних послуг для підприємств та організацій.",
    "descriptionEn": "Professions related to providing administrative and support services for businesses and organizations."
  },
  {
    "nameUa": "Освіта",
    "nameEn": "Education",
    "descriptionUa": "Професії, пов'язані з навчанням та вихованням на різних рівнях освітньої системи.",
    "descriptionEn": "Professions related to teaching and upbringing at various levels of the education system."
  },
  {
    "nameUa": "Охорона здоров'я",
    "nameEn": "Human Health Activities",
    "descriptionUa": "Професії, пов'язані з наданням медичної допомоги та послуг у сфері охорони здоров'я.",
    "descriptionEn": "Professions related to providing medical care and services in the field of healthcare."
  },
  {
    "nameUa": "Діяльність із догляду за особами похилого віку та інвалідами",
    "nameEn": "Residential Care Activities for Elderly and Disabled",
    "descriptionUa": "Професії, пов'язані з наданням послуг з догляду за літніми людьми та особами з інвалідністю в спеціалізованих закладах.",
    "descriptionEn": "Professions related to providing care services for the elderly and disabled in specialized institutions."
  },
  {
    "nameUa": "Інша діяльність у сфері охорони здоров'я",
    "nameEn": "Other Human Health Activities",
    "descriptionUa": "Професії, пов'язані з іншими видами діяльності у сфері охорони здоров'я, не включеними до інших категорій.",
    "descriptionEn": "Professions related to other types of activities in the field of healthcare not included in other categories."
  },
  {
    "nameUa": "Соціальна робота без забезпечення проживання",
    "nameEn": "Social Work Activities without Accommodation",
    "descriptionUa": "Професії, пов'язані з наданням соціальної допомоги та підтримки окремим особам та сім'ям без забезпечення проживання.",
    "descriptionEn": "Professions related to providing social assistance and support to individuals and families without providing accommodation."
  },
  {
    "nameUa": "Творча діяльність, мистецтво та розваги",
    "nameEn": "Creative, Arts and Entertainment Activities",
    "descriptionUa": "Професії, пов'язані з різними видами творчої діяльності, мистецтва та розваг.",
    "descriptionEn": "Professions related to various types of creative activities, arts, and entertainment."
  },
  {
    "nameUa": "Бібліотечна, архівна, музейна справа та інша діяльність у сфері культури",
    "nameEn": "Library, Archives, Museums and Other Cultural Activities",
    "descriptionUa": "Професії, пов'язані з бібліотечною, архівною та музейною справою, а також іншою діяльністю у сфері культури.",
    "descriptionEn": "Professions related to library science, archival science, museums, and other cultural activities."
  },
  {
    "nameUa": "Організація азартних ігор та парі",
    "nameEn": "Gambling and Betting Activities",
    "descriptionUa": "Професії, пов'язані з організацією та проведенням азартних ігор та парі.",
    "descriptionEn": "Professions related to organizing and conducting gambling and betting activities."
  },
  {
    "nameUa": "Діяльність у сфері спорту, організування відпочинку та розваг",
    "nameEn": "Sports Activities and Amusement and Recreation Activities",
    "descriptionUa": "Професії, пов'язані зі спортом, організацією відпочинку та різноманітних розваг.",
    "descriptionEn": "Professions related to sports, organizing recreation, and various entertainment activities."
  },
  {
    "nameUa": "Діяльність громадських організацій",
    "nameEn": "Activities of Membership Organisations",
    "descriptionUa": "Професії, пов'язані з діяльністю професійних, комерційних та інших громадських організацій.",
    "descriptionEn": "Professions related to the activities of professional, commercial, and other membership organizations."
  },
  {
    "nameUa": "Ремонт і технічне обслуговування машин і устаткування",
    "nameEn": "Repair and Maintenance of Machinery and Equipment",
    "descriptionUa": "Професії, пов'язані з ремонтом та технічним обслуговуванням промислового та іншого обладнання.",
    "descriptionEn": "Professions related to the repair and maintenance of industrial and other equipment."
  },
  {
    "nameUa": "Установлення та монтаж машин і устаткування",
    "nameEn": "Installation of Industrial Machinery and Equipment",
    "descriptionUa": "Професії, пов'язані з установленням та монтажем промислового обладнання.",
    "descriptionEn": "Professions related to the installation and assembly of industrial equipment."
  },
  {
    "nameUa": "Постачання електроенергії",
    "nameEn": "Electricity Supply",
    "descriptionUa": "Професії, безпосередньо пов'язані з виробництвом, передачею та розподілом електроенергії.",
    "descriptionEn": "Professions directly related to the generation, transmission, and distribution of electricity."
  },
  {
    "nameUa": "Постачання газу",
    "nameEn": "Gas Supply",
    "descriptionUa": "Професії, безпосередньо пов'язані з транспортуванням та розподілом природного та інших газів.",
    "descriptionEn": "Professions directly related to the transportation and distribution of natural and other gases."
  },
  {
    "nameUa": "Постачання пари та кондиційованого повітря",
    "nameEn": "Steam and Air Conditioning Supply",
    "descriptionUa": "Професії, пов'язані з виробництвом та постачанням пари та кондиційованого повітря для опалення, вентиляції та технологічних потреб.",
    "descriptionEn": "Professions related to the production and supply of steam and conditioned air for heating, ventilation, and technological needs."
  },
  {
    "nameUa": "Збирання, оброблення та видалення відходів; відновлення матеріалів",
    "nameEn": "Collection, Treatment and Disposal of Waste; Materials Recovery",
    "descriptionUa": "Професії, пов'язані зі збиранням, обробленням, утилізацією відходів та відновленням вторинної сировини.",
    "descriptionEn": "Professions related to the collection, treatment, and disposal of waste, as well as the recovery of recyclable materials."
  },
  {
    "nameUa": "Лісове господарство та лісозаготівлі",
    "nameEn": "Forestry and Logging",
    "descriptionUa": "Професії, пов'язані з вирощуванням лісу, заготівлею деревини та іншими видами лісового господарства.",
    "descriptionEn": "Professions related to forestry, logging, and other types of forest management."
  },
  {
    "nameUa": "Рибне господарство",
    "nameEn": "Fishing and Aquaculture",
    "descriptionUa": "Професії, пов'язані з виловом риби та інших водних біоресурсів, а також їх розведенням у штучних умовах.",
    "descriptionEn": "Professions related to fishing and other aquatic bioresources, as well as their cultivation in artificial conditions."
  },
  {
    "nameUa": "Видобування кам'яного та бурого вугілля",
    "nameEn": "Mining of Coal and Lignite",
    "descriptionUa": "Професії, пов'язані з видобуванням кам'яного та бурого вугілля підземним та відкритим способами.",
    "descriptionEn": "Professions related to the underground and open-pit mining of hard coal and lignite."
  },
  {
    "nameUa": "Видобування сирої нафти та природного газу",
    "nameEn": "Extraction of Crude Petroleum and Natural Gas",
    "descriptionUa": "Професії, пов'язані з видобуванням сирої нафти та природного газу з надр землі.",
    "descriptionEn": "Professions related to the extraction of crude oil and natural gas from the earth's subsurface."
  },
  {
    "nameUa": "Видобування металевих руд",
    "nameEn": "Mining of Metal Ores",
    "descriptionUa": "Професії, пов'язані з видобуванням руд чорних та кольорових металів.",
    "descriptionEn": "Professions related to the mining of ferrous and non-ferrous metal ores."
  },
  {
    "nameUa": "Видобування інших корисних копалин і розроблення кар'єрів",
    "nameEn": "Other Mining and Quarrying",
    "descriptionUa": "Професії, пов'язані з видобуванням неметалевих корисних копалин, таких як пісок, гравій, глина та інші.",
    "descriptionEn": "Professions related to the mining of non-metallic minerals such as sand, gravel, clay, and others."
  },
  {
    "nameUa": "Ремонт і технічне обслуговування автотранспортних засобів",
    "nameEn": "Repair and Maintenance of Motor Vehicles",
    "descriptionUa": "Професії, пов'язані з ремонтом та технічним обслуговуванням легкових та вантажних автомобілів.",
    "descriptionEn": "Professions related to the repair and maintenance of passenger cars and trucks."
  },
  {
    "nameUa": "Роздрібна торгівля, крім торгівлі автотранспортними засобами та мотоциклами",
    "nameEn": "Retail Trade, Except of Motor Vehicles and Motorcycles",
    "descriptionUa": "Професії, пов'язані з продажем товарів безпосередньо споживачам через магазини, кіоски, ринки та інші торгові точки (крім автомобілів та мотоциклів).",
    "descriptionEn": "Professions related to selling goods directly to consumers through stores, kiosks, markets, and other retail outlets (excluding cars and motorcycles)."
  },
  {
    "nameUa": "Оптова торгівля, крім торгівлі автотранспортними засобами та мотоциклами",
    "nameEn": "Wholesale Trade, Except of Motor Vehicles and Motorcycles",
    "descriptionUa": "Професії, пов'язані з продажем товарів іншим підприємствам для подальшого перепродажу або використання (крім автомобілів та мотоциклів).",
    "descriptionEn": "Professions related to selling goods to other businesses for resale or use (excluding cars and motorcycles)."
  },
  {
    "nameUa": "Наземний і трубопровідний транспорт",
    "nameEn": "Land Transport and Transport via Pipelines",
    "descriptionUa": "Професії, пов'язані з перевезенням пасажирів та вантажів залізничним, автомобільним та трубопровідним транспортом.",
    "descriptionEn": "Professions related to the transportation of passengers and goods by rail, road, and pipeline transport."
  },
  {
    "nameUa": "Водний транспорт",
    "nameEn": "Water Transport",
    "descriptionUa": "Професії, пов'язані з перевезенням пасажирів та вантажів морським та річковим транспортом.",
    "descriptionEn": "Professions related to the transportation of passengers and goods by sea and river transport."
  },
  {
    "nameUa": "Повітряний транспорт",
    "nameEn": "Air Transport",
    "descriptionUa": "Професії, пов'язані з перевезенням пасажирів та вантажів повітряним транспортом.",
    "descriptionEn": "Professions related to the transportation of passengers and goods by air transport."
  },
  {
    "nameUa": "Складське господарство",
    "nameEn": "Warehousing",
    "descriptionUa": "Професії, пов'язані зі зберіганням та обробкою товарів на складах.",
    "descriptionEn": "Professions related to the storage and handling of goods in warehouses."
  },
  {
    "nameUa": "Допоміжна діяльність у сфері транспорту",
    "nameEn": "Support Activities for Transportation",
    "descriptionUa": "Професії, що забезпечують допоміжні послуги для різних видів транспорту, такі як вантажно-розвантажувальні роботи, навігація та інше.",
    "descriptionEn": "Professions providing support services for various modes of transport, such as cargo handling, navigation, and others."
  },
  {
    "nameUa": "Поштова та кур'єрська діяльність",
    "nameEn": "Postal and Courier Activities",
    "descriptionUa": "Професії, пов'язані з наданням послуг поштового зв'язку та кур'єрської доставки.",
    "descriptionEn": "Professions related to providing postal and courier delivery services."
  },
  {
    "nameUa": "Діяльність готелів та подібних засобів тимчасового розміщування",
    "nameEn": "Hotels and Similar Accommodation",
    "descriptionUa": "Професії, пов'язані з роботою готелів, мотелів, хостелів та інших закладів тимчасового проживання.",
    "descriptionEn": "Professions related to the operation of hotels, motels, hostels, and other temporary accommodation establishments."
  },
  {
    "nameUa": "Діяльність ресторанів, надання послуг мобільного харчування",
    "nameEn": "Restaurants and Mobile Food Service Activities",
    "descriptionUa": "Професії, пов'язані з роботою ресторанів, кафе, барів, а також наданням послуг виїзного харчування.",
    "descriptionEn": "Professions related to the operation of restaurants, cafes, bars, as well as providing catering services."
  },
  {
    "nameUa": "Видання книг, періодичних видань та інша видавнича діяльність",
    "nameEn": "Publishing of Books, Periodicals and Other Publishing Activities",
    "descriptionUa": "Професії, пов'язані з виданням книг, газет, журналів та іншої друкованої продукції.",
    "descriptionEn": "Professions related to the publishing of books, newspapers, magazines, and other printed materials."
  },
  {
    "nameUa": "Видання комп'ютерних ігор",
    "nameEn": "Publishing of Computer Games",
    "descriptionUa": "Професії, пов'язані з виданням та розповсюдженням комп'ютерних ігор.",
    "descriptionEn": "Professions related to the publishing and distribution of computer games."
  },
  {
    "nameUa": "Видання іншого програмного забезпечення",
    "nameEn": "Publishing of Other Software",
    "descriptionUa": "Професії, пов'язані з виданням та розповсюдженням іншого програмного забезпечення, крім ігор.",
    "descriptionEn": "Professions related to the publishing and distribution of software other than games."
  },
  {
    "nameUa": "Кіновиробництво, виробництво відеофільмів і телевізійних програм",
    "nameEn": "Motion Picture, Video and Television Programme Production",
    "descriptionUa": "Професії, пов'язані з виробництвом кінофільмів, відеороликів та телевізійних програм.",
    "descriptionEn": "Professions related to the production of motion pictures, video films, and television programs."
  },
  {
    "nameUa": "Розповсюдження кіно- та відеофільмів, телевізійних програм",
    "nameEn": "Motion Picture, Video and Television Programme Distribution Activities",
    "descriptionUa": "Професії, пов'язані з розповсюдженням кінофільмів, відеороликів та телевізійних програм різними каналами.",
    "descriptionEn": "Professions related to the distribution of motion pictures, video films, and television programs through various channels."
  },
  {
    "nameUa": "Демонстрація кінофільмів",
    "nameEn": "Motion Picture Projection Activities",
    "descriptionUa": "Професії, пов'язані з показом кінофільмів у кінотеатрах та інших закладах.",
    "descriptionEn": "Professions related to the screening of motion pictures in cinemas and other venues."
  },
  {
    "nameUa": "Виробництво музичних записів",
    "nameEn": "Sound Recording and Music Publishing Activities",
    "descriptionUa": "Професії, пов'язані із записом музики, виданням музичних творів та управлінням авторськими правами.",
    "descriptionEn": "Professions related to recording music, publishing musical works, and managing copyrights."
  },
  {
    "nameUa": "Діяльність у сфері радіомовлення",
    "nameEn": "Radio Broadcasting",
    "descriptionUa": "Професії, пов'язані з створенням та трансляцією радіопрограм.",
    "descriptionEn": "Professions related to the creation and broadcasting of radio programs."
  },
  {
    "nameUa": "Діяльність у сфері телевізійного мовлення",
    "nameEn": "Television Broadcasting",
    "descriptionUa": "Професії, пов'язані зі створенням та трансляцією телевізійних програм.",
    "descriptionEn": "Professions related to the creation and broadcasting of television programs."
  },
  {
    "nameUa": "Телекомунікації",
    "nameEn": "Telecommunications",
    "descriptionUa": "Професії, пов'язані з експлуатацією телекомунікаційних мереж та наданням послуг зв'язку.",
    "descriptionEn": "Professions related to the operation of telecommunication networks and the provision of communication services."
  },
  {
    "nameUa": "Комп'ютерне програмування",
    "nameEn": "Computer Programming Activities",
    "descriptionUa": "Професії, безпосередньо пов'язані з написанням комп'ютерного коду та розробкою програмного забезпечення.",
    "descriptionEn": "Professions directly related to writing computer code and developing software."
  },
  {
    "nameUa": "Оренда та лізинг інших машин, устаткування та матеріальних цінностей, н.в.і.у.",
    "nameEn": "Renting and Leasing of Other Machinery, Equipment and Tangible Goods N.E.C.",
    "descriptionUa": "Професії, пов'язані з наданням в оренду та лізинг інших видів машин, устаткування та матеріальних цінностей, не включених до інших категорій.",
    "descriptionEn": "Professions related to renting and leasing other types of machinery, equipment, and tangible goods not included in other categories."
  },
  {
    "nameUa": "Оренда та лізинг особистих і побутових товарів",
    "nameEn": "Renting and Leasing of Personal and Household Goods",
    "descriptionUa": "Професії, пов'язані з наданням в оренду особистих і побутових товарів, таких як спортивне обладнання, інструменти тощо.",
    "descriptionEn": "Professions related to renting personal and household goods, such as sports equipment, tools, etc."
  },
  {
    "nameUa": "Найм робочої сили та підбір персоналу",
    "nameEn": "Employment Activities",
    "descriptionUa": "Професії, пов'язані з наймом робочої сили для тимчасової або постійної роботи, а також підбором персоналу для роботодавців.",
    "descriptionEn": "Professions related to hiring labor for temporary or permanent work, as well as recruiting personnel for employers."
  },
  {
    "nameUa": "Діяльність агентств тимчасового працевлаштування",
    "nameEn": "Temporary Employment Agency Activities",
    "descriptionUa": "Професії, пов'язані з діяльністю агентств, що надають тимчасову робочу силу для різних підприємств та організацій.",
    "descriptionEn": "Professions related to the activities of agencies providing temporary labor to various businesses and organizations."
  },
  {
    "nameUa": "Інша діяльність із забезпечення трудовими ресурсами",
    "nameEn": "Other Human Resources Provision",
    "descriptionUa": "Професії, пов'язані з іншими видами забезпечення трудовими ресурсами, такими як аутсорсинг персоналу.",
    "descriptionEn": "Professions related to other types of human resources provision, such as personnel outsourcing."
  },
  {
    "nameUa": "Комплексне адміністративне обслуговування офісів",
    "nameEn": "Combined Office Administrative Service Activities",
    "descriptionUa": "Професії, пов'язані з наданням комплексних адміністративних послуг для офісів, таких як діловодство, обробка даних тощо.",
    "descriptionEn": "Professions related to providing comprehensive administrative services for offices, such as clerical work, data processing, etc."
  },
  {
    "nameUa": "Фотокопіювання, підготування документів та інша спеціалізована допоміжна офісна діяльність",
    "nameEn": "Photocopying, Document Preparation and Other Specialised Office Support Activities",
    "descriptionUa": "Професії, пов'язані з фотокопіюванням, підготовкою документів та іншими спеціалізованими офісними послугами.",
    "descriptionEn": "Professions related to photocopying, document preparation, and other specialized office services."
  },
  {
    "nameUa": "Організування конференцій та торговельних виставок",
    "nameEn": "Organisation of Conventions and Trade Shows",
    "descriptionUa": "Професії, пов'язані з організацією та проведенням конференцій, торговельних виставок та інших подібних заходів.",
    "descriptionEn": "Professions related to organizing and conducting conferences, trade shows, and other similar events."
  },
  {
    "nameUa": "Допоміжна діяльність у сфері освіти",
    "nameEn": "Educational Support Activities",
    "descriptionUa": "Професії, що надають допоміжні послуги для освітніх закладів, такі як психологічна підтримка, консультування тощо.",
    "descriptionEn": "Professions providing support services for educational institutions, such as psychological support, counseling, etc."
  },
  {
    "nameUa": "Діяльність лікарень",
    "nameEn": "Hospital Activities",
    "descriptionUa": "Професії, пов'язані з роботою лікарень та наданням стаціонарної медичної допомоги.",
    "descriptionEn": "Professions related to the operation of hospitals and the provision of inpatient medical care."
  },
  {
    "nameUa": "Медична практика",
    "nameEn": "Medical Practice Activities",
    "descriptionUa": "Професії лікарів різних спеціалізацій, які займаються діагностикою та лікуванням захворювань.",
    "descriptionEn": "Professions of doctors of various specializations who diagnose and treat diseases."
  },
  {
    "nameUa": "Стоматологічна практика",
    "nameEn": "Dental Practice Activities",
    "descriptionUa": "Професії стоматологів та інших фахівців у галузі стоматології.",
    "descriptionEn": "Professions of dentists and other specialists in the field of dentistry."
  },
  {
    "nameUa": "Інша діяльність у сфері охорони здоров'я людини, крім діяльності лікарень",
    "nameEn": "Other Human Health Activities Other Than Hospital Activities",
    "descriptionUa": "Професії, пов'язані з іншими видами медичної допомоги, такими як амбулаторне лікування, фізіотерапія тощо.",
    "descriptionEn": "Professions related to other types of medical care, such as outpatient treatment, physiotherapy, etc."
  },
  {
    "nameUa": "Діяльність із догляду за дітьми та денного догляду",
    "nameEn": "Child Day-Care Activities",
    "descriptionUa": "Професії, пов'язані з наданням послуг з догляду за дітьми у дитячих садках та інших закладах.",
    "descriptionEn": "Professions related to providing childcare services in kindergartens and other institutions."
  },
  {
    "nameUa": "Надання соціальної допомоги без забезпечення проживання для осіб похилого віку та інвалідів",
    "nameEn": "Social Work Activities without Accommodation for the Elderly and Disabled",
    "descriptionUa": "Професії, пов'язані з наданням соціальної допомоги літнім людям та особам з інвалідністю без забезпечення проживання.",
    "descriptionEn": "Professions related to providing social assistance to the elderly and disabled without providing accommodation."
  },
  {
    "nameUa": "Інші види соціальної допомоги без забезпечення проживання",
    "nameEn": "Other Social Work Activities without Accommodation",
    "descriptionUa": "Професії, пов'язані з наданням інших видів соціальної допомоги без забезпечення проживання.",
    "descriptionEn": "Professions related to providing other types of social assistance without providing accommodation."
  },
  {
    "nameUa": "Діяльність театрів",
    "nameEn": "Performing Arts",
    "descriptionUa": "Професії акторів, режисерів, технічного персоналу театрів та інших працівників театральної сфери.",
    "descriptionEn": "Professions of actors, directors, technical staff of theaters, and other workers in the theatrical field."
  },
  {
    "nameUa": "Діяльність концертних та театральних залів",
    "nameEn": "Operation of Arts Facilities",
    "descriptionUa": "Професії, пов'язані з управлінням та обслуговуванням концертних та театральних залів.",
    "descriptionEn": "Professions related to the management and maintenance of concert and theater halls."
  },
  {
    "nameUa": "Інша діяльність у сфері мистецтва",
    "nameEn": "Other Performing Arts",
    "descriptionUa": "Професії, пов'язані з іншими видами виконавського мистецтва, такими як танці, цирк тощо.",
    "descriptionEn": "Professions related to other types of performing arts, such as dance, circus, etc."
  },
  {
    "nameUa": "Діяльність музеїв",
    "nameEn": "Museum Activities",
    "descriptionUa": "Професії, пов'язані з роботою музеїв, збереженням та експонуванням музейних колекцій.",
    "descriptionEn": "Professions related to the operation of museums, the preservation and exhibition of museum collections."
  },
  {
    "nameUa": "Діяльність із охорони історичних місць і будівель",
    "nameEn": "Operation of Historical Sites and Buildings and Similar Visitor Attractions",
    "descriptionUa": "Професії, пов'язані з охороною та експлуатацією історичних місць, будівель та інших туристичних атракцій.",
    "descriptionEn": "Professions related to the preservation and operation of historical sites, buildings, and other tourist attractions."
  },
  {
    "nameUa": "Діяльність ботанічних садів, зоопарків і природних заповідників",
    "nameEn": "Botanical and Zoological Gardens and Nature Reserve Activities",
    "descriptionUa": "Професії, пов'язані з роботою ботанічних садів, зоопарків та природних заповідників, доглядом за рослинами та тваринами.",
    "descriptionEn": "Professions related to the operation of botanical gardens, zoos, and nature reserves, as well as the care of plants and animals."
  },
  {
    "nameUa": "Організування азартних ігор",
    "nameEn": "Gambling Activities",
    "descriptionUa": "Професії, безпосередньо пов'язані з організацією та проведенням азартних ігор у казино, гральних залах тощо.",
    "descriptionEn": "Professions directly related to the organization and conduct of gambling in casinos, gaming halls, etc."
  },
  {
    "nameUa": "Організування парі (тоталізатори)",
    "nameEn": "Betting Activities",
    "descriptionUa": "Професії, безпосередньо пов'язані з організацією та прийманням ставок на спортивні та інші події.",
    "descriptionEn": "Professions directly related to organizing and accepting bets on sports and other events."
  },
  {
    "nameUa": "Діяльність спортивних клубів",
    "nameEn": "Activities of Sports Clubs",
    "descriptionUa": "Професії, пов'язані з управлінням та діяльністю спортивних клубів, підготовкою спортсменів.",
    "descriptionEn": "Professions related to the management and operation of sports clubs, and the training of athletes."
  },
  {
    "nameUa": "Діяльність фітнес-центрів",
    "nameEn": "Fitness Facilities",
    "descriptionUa": "Професії інструкторів, тренерів та адміністративного персоналу фітнес-центрів.",
    "descriptionEn": "Professions of instructors, trainers, and administrative staff of fitness centers."
  },
  {
    "nameUa": "Інша діяльність у сфері спорту",
    "nameEn": "Other Sports Activities",
    "descriptionUa": "Професії, пов'язані з іншими видами спортивної діяльності, організацією спортивних змагань тощо.",
    "descriptionEn": "Professions related to other types of sports activities, the organization of sports competitions, etc."
  },
  {
    "nameUa": "Діяльність парків розваг і тематичних парків",
    "nameEn": "Amusement and Theme Park Activities",
    "descriptionUa": "Професії, пов'язані з роботою парків розваг та тематичних парків, обслуговуванням атракціонів.",
    "descriptionEn": "Professions related to the operation of amusement parks and theme parks, and the maintenance of attractions."
  },
  {
    "nameUa": "Інша діяльність у сфері розваг та відпочинку",
    "nameEn": "Other Amusement and Recreation Activities",
    "descriptionUa": "Професії, пов'язані з іншими видами розважальної та рекреаційної діяльності, такими як організація ігор, дозвілля тощо.",
    "descriptionEn": "Professions related to other types of entertainment and recreational activities, such as organizing games, leisure activities, etc."
  },
  {
    "nameUa": "Діяльність професійних організацій",
    "nameEn": "Activities of Professional Membership Organisations",
    "descriptionUa": "Професії, пов'язані з управлінням та діяльністю професійних спілок та асоціацій.",
    "descriptionEn": "Professions related to the management and operation of professional unions and associations."
  },
  {
    "nameUa": "Діяльність підприємницьких організацій",
    "nameEn": "Activities of Business and Employers Membership Organisations",
    "descriptionUa": "Професії, пов'язані з управлінням та діяльністю організацій роботодавців та підприємців.",
    "descriptionEn": "Professions related to the management and operation of employers' and entrepreneurs' organizations."
  },
  {
    "nameUa": "Діяльність інших громадських організацій, н.в.і.у.",
    "nameEn": "Activities of Other Membership Organisations N.E.C.",
    "descriptionUa": "Професії, пов'язані з діяльністю інших громадських організацій, не включених до попередніх категорій.",
    "descriptionEn": "Professions related to the activities of other membership organizations not included in the previous categories."
  },
  {
    "nameUa": "Ремонт і технічне обслуговування комп'ютерів і периферійного обладнання",
    "nameEn": "Repair of Computers and Peripheral Equipment",
    "descriptionUa": "Професії, пов'язані з ремонтом та технічним обслуговуванням комп'ютерів та периферійного обладнання.",
    "descriptionEn": "Professions related to the repair and maintenance of computers and peripheral equipment."
  },
  {
    "nameUa": "Ремонт і технічне обслуговування обладнання зв'язку",
    "nameEn": "Repair and Maintenance of Communication Equipment",
    "descriptionUa": "Професії, пов'язані з ремонтом та технічним обслуговуванням телекомунікаційного обладнання.",
    "descriptionEn": "Professions related to the repair and maintenance of telecommunications equipment."
  },
  {
    "nameUa": "Ремонт і технічне обслуговування електронної апаратури побутового призначення",
    "nameEn": "Repair of Consumer Electronics",
    "descriptionUa": "Професії, пов'язані з ремонтом та технічним обслуговуванням побутової електронної апаратури.",
    "descriptionEn": "Professions related to the repair and maintenance of household electronic appliances."
  },
  {
    "nameUa": "Ремонт і технічне обслуговування побутових приладів",
    "nameEn": "Repair of Household Appliances and Home and Garden Equipment",
    "descriptionUa": "Професії, пов'язані з ремонтом та технічним обслуговуванням побутових приладів та обладнання для дому та саду.",
    "descriptionEn": "Professions related to the repair and maintenance of household appliances and home and garden equipment."
  },
  {
    "nameUa": "Ремонт взуття та шкіряних виробів",
    "nameEn": "Repair of Footwear and Leather Goods",
    "descriptionUa": "Професії, пов'язані з ремонтом взуття та інших виробів зі шкіри.",
    "descriptionEn": "Professions related to the repair of footwear and other leather goods."
  },
  {
    "nameUa": "Ремонт меблів і домашнього начиння",
    "nameEn": "Repair of Furniture and Home Furnishings",
    "descriptionUa": "Професії, пов'язані з ремонтом меблів та предметів домашнього вжитку.",
    "descriptionEn": "Professions related to the repair of furniture and household items."
  },
  {
    "nameUa": "Ремонт одягу та текстильних виробів",
    "nameEn": "Repair of Wearing Apparel and Textiles",
    "descriptionUa": "Професії, пов'язані з ремонтом одягу та інших текстильних виробів.",
    "descriptionEn": "Professions related to the repair of clothing and other textile products."
  },
  {
    "nameUa": "Ремонт ювелірних виробів",
    "nameEn": "Repair of Jewellery",
    "descriptionUa": "Професії, пов'язані з ремонтом ювелірних виробів.",
    "descriptionEn": "Professions related to the repair of jewelry."
  },
  {
    "nameUa": "Ремонт іншого особистого та побутового приладдя",
    "nameEn": "Repair of Other Personal and Household Goods",
    "descriptionUa": "Професії, пов'язані з ремонтом інших особистих та побутових речей, не включених до попередніх категорій.",
    "descriptionEn": "Professions related to the repair of other personal and household items not included in previous categories."
  },
  {
    "nameUa": "Установлення та монтаж машин і устаткування",
    "nameEn": "Installation of Industrial Machinery and Equipment",
    "descriptionUa": "Професії, пов'язані з установленням та монтажем промислового обладнання на підприємствах.",
    "descriptionEn": "Professions related to the installation and assembly of industrial machinery at enterprises."
  },
  {
    "nameUa": "Демонтаж (розбирання) машин і устаткування",
    "nameEn": "Dismantling of Wrecked Machinery and Equipment",
    "descriptionUa": "Професії, пов'язані з демонтажем та розбиранням застарілого або пошкодженого промислового обладнання.",
    "descriptionEn": "Professions related to the dismantling of obsolete or damaged industrial equipment."
  },
  {
    "nameUa": "Організація поховань та суміжні послуги",
    "nameEn": "Funeral and Related Activities",
    "descriptionUa": "Професії, пов'язані з організацією поховань, наданням ритуальних послуг та доглядом за могилами.",
    "descriptionEn": "Professions related to organizing funerals, providing ritual services, and maintaining graves."
  },
  {
    "nameUa": "Послуги перукарень та салонів краси",
    "nameEn": "Hairdressing and Other Beauty Treatment",
    "descriptionUa": "Професії перукарів, косметологів та інших фахівців у сфері краси.",
    "descriptionEn": "Professions of hairdressers, cosmetologists, and other specialists in the beauty industry."
  },
  {
    "nameUa": "Діяльність із забезпечення фізичного комфорту",
    "nameEn": "Physical Well-being Activities",
    "descriptionUa": "Професії, пов'язані з наданням послуг для покращення фізичного стану, таких як масаж, сауни тощо.",
    "descriptionEn": "Professions related to providing services to improve physical well-being, such as massage, saunas, etc."
  },
  {
    "nameUa": "Надання інших індивідуальних послуг, н.в.і.у.",
    "nameEn": "Other Personal Service Activities N.E.C.",
    "descriptionUa": "Професії, пов'язані з наданням інших індивідуальних послуг, не включених до попередніх категорій, таких як чистка взуття, послуги швей тощо.",
    "descriptionEn": "Professions related to providing other personal services not included in previous categories, such as shoe cleaning, tailoring services, etc."
  },
  {
    "nameUa": "Діяльність домашніх господарств як роботодавців для домашньої прислуги",
    "nameEn": "Activities of Households as Employers of Domestic Personnel",
    "descriptionUa": "Професії домашньої прислуги, найнятої приватними особами.",
    "descriptionEn": "Professions of domestic staff employed by private individuals."
  },
  {
    "nameUa": "Діяльність екстериторіальних організацій і органів",
    "nameEn": "Activities of Extraterritorial Organisations and Bodies",
    "descriptionUa": "Професії, пов'язані з роботою міжнародних організацій та дипломатичних представництв.",
    "descriptionEn": "Professions related to the work of international organizations and diplomatic missions."
  },
  {
    "nameUa": "Виробництво неочищеної рослинної олії та тваринних жирів",
    "nameEn": "Manufacture of Crude Vegetable Oils and Animal Fats",
    "descriptionUa": "Професії, пов'язані з виробництвом неочищених рослинних олій та тваринних жирів.",
    "descriptionEn": "Professions related to the manufacture of crude vegetable oils and animal fats."
  },
  {
    "nameUa": "Виробництво молочних продуктів",
    "nameEn": "Manufacture of Dairy Products",
    "descriptionUa": "Професії, пов'язані з переробкою молока та виробництвом молочних продуктів.",
    "descriptionEn": "Professions related to the processing of milk and the manufacture of dairy products."
  },
  {
    "nameUa": "Виробництво продуктів борошномельно-круп'яної промисловості, крохмалів та крохмальних продуктів",
    "nameEn": "Manufacture of Grain Mill Products, Starches and Starch Products",
    "descriptionUa": "Професії, пов'язані з виробництвом борошна, круп, крохмалю та крохмальних продуктів.",
    "descriptionEn": "Professions related to the manufacture of flour, cereals, starches, and starch products."
  },
  {
    "nameUa": "Виробництво хліба та хлібобулочних виробів; виробництво борошняних кондитерських виробів, тортів і тістечок нетривалого зберігання",
    "nameEn": "Manufacture of Bread and Fresh Pastry Goods; Cakes and Pies",
    "descriptionUa": "Професії, пов'язані з випіканням хліба, булочок, тортів та тістечок.",
    "descriptionEn": "Professions related to baking bread, pastries, cakes, and pies."
  },
  {
    "nameUa": "Виробництво сухарів і сухого печива; виробництво борошняних кондитерських виробів тривалого зберігання",
    "nameEn": "Manufacture of Rusks and Biscuits; Manufacture of Preserved Pastry Goods and Cakes",
    "descriptionUa": "Професії, пов'язані з виробництвом сухарів, печива та борошняних кондитерських виробів тривалого зберігання.",
    "descriptionEn": "Professions related to the manufacture of rusks, biscuits, and preserved pastry goods and cakes."
  },
  {
    "nameUa": "Виробництво макаронних виробів і подібних борошняних виробів",
    "nameEn": "Manufacture of Pasta and Similar Farinaceous Products",
    "descriptionUa": "Професії, пов'язані з виробництвом макаронних виробів.",
    "descriptionEn": "Professions related to the manufacture of pasta products."
  },
  {
    "nameUa": "Виробництво цукру",
    "nameEn": "Manufacture of Sugar",
    "descriptionUa": "Професії, пов'язані з виробництвом цукру з цукрових буряків або цукрової тростини.",
    "descriptionEn": "Professions related to the manufacture of sugar from sugar beets or sugar cane."
  },
  {
    "nameUa": "Виробництво какао, шоколаду та цукрових кондитерських виробів",
    "nameEn": "Manufacture of Cocoa, Chocolate and Sugar Confectionery",
    "descriptionUa": "Професії, пов'язані з виробництвом шоколаду, цукерок та інших кондитерських виробів.",
    "descriptionEn": "Professions related to the manufacture of chocolate, candies, and other confectionery."
  },
  {
    "nameUa": "Виробництво чаю та кави",
    "nameEn": "Manufacture of Tea and Coffee",
    "descriptionUa": "Професії, пов'язані з обробкою та пакуванням чаю та кави.",
    "descriptionEn": "Professions related to the processing and packaging of tea and coffee."
  },
  {
    "nameUa": "Виробництво прянощів і приправ",
    "nameEn": "Manufacture of Condiments and Seasonings",
    "descriptionUa": "Професії, пов'язані з виробництвом прянощів, приправ та соусів.",
    "descriptionEn": "Professions related to the manufacture of spices, seasonings, and sauces."
  },
  {
    "nameUa": "Виробництво готових страв",
    "nameEn": "Manufacture of Prepared Meals and Dishes",
    "descriptionUa": "Професії, пов'язані з виробництвом готових до вживання страв.",
    "descriptionEn": "Professions related to the manufacture of ready-to-eat meals and dishes."
  },
  {
    "nameUa": "Виробництво дитячого харчування та дієтичних харчових продуктів",
    "nameEn": "Manufacture of Homogenised Food Preparations and Dietetic Food",
    "descriptionUa": "Професії, пов'язані з виробництвом дитячого харчування та спеціальних дієтичних продуктів.",
    "descriptionEn": "Professions related to the manufacture of baby food and special dietary foods."
  },
  {
    "nameUa": "Інші види виробництва харчових продуктів, н.в.і.у.",
    "nameEn": "Other Food Products N.E.C.",
    "descriptionUa": "Професії, пов'язані з іншими видами виробництва харчових продуктів, не включеними до попередніх категорій.",
    "descriptionEn": "Professions related to other types of food production not included in previous categories."
  },
  {
    "nameUa": "Виробництво безалкогольних напоїв; виробництво мінеральних вод та інших розлитих у пляшки вод",
    "nameEn": "Manufacture of Soft Drinks; Production of Mineral Waters and Other Bottled Waters",
    "descriptionUa": "Професії, пов'язані з виробництвом безалкогольних напоїв, мінеральної та питної води у пляшках.",
    "descriptionEn": "Professions related to the manufacture of soft drinks, mineral water, and other bottled waters."
  },
  {
    "nameUa": "Виробництво алкогольних напоїв",
    "nameEn": "Manufacture of Alcoholic Beverages",
    "descriptionUa": "Професії, пов'язані з виробництвом алкогольних напоїв, таких як пиво, вино, міцні спиртні напої.",
    "descriptionEn": "Professions related to the manufacture of alcoholic beverages such as beer, wine, and spirits."
  },
  {
    "nameUa": "Виробництво тютюнових виробів",
    "nameEn": "Manufacture of Tobacco Products",
    "descriptionUa": "Професії, пов'язані з виробництвом сигарет, сигар та інших тютюнових виробів.",
    "descriptionEn": "Professions related to the manufacture of cigarettes, cigars, and other tobacco products."
  },
  {
    "nameUa": "Підготування та прядіння текстильних волокон",
    "nameEn": "Preparation and Spinning of Textile Fibres",
    "descriptionUa": "Професії, пов'язані з підготовкою натуральних та штучних волокон для прядіння.",
    "descriptionEn": "Professions related to the preparation of natural and synthetic fibers for spinning."
  },
  {
    "nameUa": "Ткацьке виробництво",
    "nameEn": "Weaving of Textiles",
    "descriptionUa": "Професії, пов'язані з виробництвом тканин на ткацьких верстатах.",
    "descriptionEn": "Professions related to the weaving of fabrics on looms."
  },
  {
    "nameUa": "Оздоблення текстильних виробів",
    "nameEn": "Finishing of Textiles",
    "descriptionUa": "Професії, пов'язані з фарбуванням, друкуванням та іншою обробкою текстильних виробів.",
    "descriptionEn": "Professions related to dyeing, printing, and other finishing processes for textile products."
  },
  {
    "nameUa": "Виробництво нетканих текстильних матеріалів та виробів з них, крім одягу",
    "nameEn": "Manufacture of Other Textiles N.E.C.",
    "descriptionUa": "Професії, пов'язані з виробництвом нетканих матеріалів та виробів з них, крім одягу.",
    "descriptionEn": "Professions related to the manufacture of non-woven textiles and products thereof, excluding clothing."
  },
  {
    "nameUa": "Виробництво канатів, мотузок, шпагату та сіток",
    "nameEn": "Manufacture of Cordage, Rope, Twine and Netting",
    "descriptionUa": "Професії, пов'язані з виробництвом канатів, мотузок, шпагату та сіток з різних матеріалів.",
    "descriptionEn": "Professions related to the manufacture of ropes, cordage, twine, and netting from various materials."
  },
  {
    "nameUa": "Виробництво килимів і килимових виробів",
    "nameEn": "Manufacture of Carpets and Rugs",
    "descriptionUa": "Професії, пов'язані з виробництвом килимів та килимових покриттів.",
    "descriptionEn": "Professions related to the manufacture of carpets and rugs."
  },
  {
    "nameUa": "Виробництво трикотажного полотна та трикотажних виробів",
    "nameEn": "Manufacture of Knitted and Crocheted Fabrics",
    "descriptionUa": "Професії, пов'язані з виробництвом трикотажного полотна та трикотажних виробів.",
    "descriptionEn": "Professions related to the manufacture of knitted and crocheted fabrics."
  },
  {
    "nameUa": "Виробництво готових текстильних виробів, крім одягу",
    "nameEn": "Manufacture of Other Made-Up Textile Articles, Except Apparel",
    "descriptionUa": "Професії, пов'язані з виробництвом готових текстильних виробів, таких як постільна білизна, штори тощо, крім одягу.",
    "descriptionEn": "Professions related to the manufacture of finished textile products, such as bedding, curtains, etc., excluding clothing."
  },
  {
    "nameUa": "Виробництво робочого одягу",
    "nameEn": "Manufacture of Workwear",
    "descriptionUa": "Професії, пов'язані з виробництвом спеціального робочого одягу.",
    "descriptionEn": "Professions related to the manufacture of specialized workwear."
  },
  {
    "nameUa": "Виробництво іншого верхнього одягу",
    "nameEn": "Manufacture of Other Outerwear",
    "descriptionUa": "Професії, пов'язані з виробництвом іншого верхнього одягу, крім робочого.",
    "descriptionEn": "Professions related to the manufacture of other outerwear besides workwear."
  },
  {
    "nameUa": "Виробництво спіднього одягу",
    "nameEn": "Manufacture of Underwear",
    "descriptionUa": "Професії, пов'язані з виробництвом спідньої білизни.",
    "descriptionEn": "Professions related to the manufacture of underwear."
  },
  {
    "nameUa": "Виробництво іншого одягу та аксесуарів",
    "nameEn": "Manufacture of Other Wearing Apparel and Accessories",
    "descriptionUa": "Професії, пов'язані з виробництвом іншого одягу та аксесуарів, не включених до попередніх категорій.",
    "descriptionEn": "Professions related to the manufacture of other clothing and accessories not included in previous categories."
  },
  {
    "nameUa": "Виробництво панчішно-шкарпеткових виробів",
    "nameEn": "Manufacture of Knitted and Crocheted Hosiery",
    "descriptionUa": "Професії, пов'язані з виробництвом панчішно-шкарпеткових виробів.",
    "descriptionEn": "Professions related to the manufacture of hosiery."
  },
  {
    "nameUa": "Виробництво іншого трикотажного та в'язаного одягу",
    "nameEn": "Manufacture of Other Knitted and Crocheted Apparel",
    "descriptionUa": "Професії, пов'язані з виробництвом іншого трикотажного та в'язаного одягу.",
    "descriptionEn": "Professions related to the manufacture of other knitted and crocheted apparel."
  },
  {
    "nameUa": "Вичинка та фарбування хутра; виробництво виробів з хутра",
    "nameEn": "Dressing and Dyeing of Fur; Manufacture of Articles of Fur",
    "descriptionUa": "Професії, пов'язані з обробкою хутра та виробництвом виробів з хутра.",
    "descriptionEn": "Professions related to the dressing and dyeing of fur, and the manufacture of fur articles."
  },
  {
    "nameUa": "Вичинка шкіри та дублення; виробництво валіз, сумок, лимарно-сідельних виробів",
    "nameEn": "Tanning and Dressing of Leather; Manufacture of Luggage, Handbags and the Like, Saddlery and Harness",
    "descriptionUa": "Професії, пов'язані з вичинкою та дубленням шкіри, а також виробництвом валіз, сумок та лимарно-сідельних виробів.",
    "descriptionEn": "Professions related to tanning and dressing leather, as well as the manufacture of luggage, handbags, and saddlery."
  },
  {
    "nameUa": "Виробництво взуття",
    "nameEn": "Manufacture of Footwear",
    "descriptionUa": "Професії, пов'язані з виробництвом різних видів взуття.",
    "descriptionEn": "Professions related to the manufacture of various types of footwear."
  },
  {
    "nameUa": "Виробництво дерев'яної тари",
    "nameEn": "Manufacture of Wooden Containers",
    "descriptionUa": "Професії, пов'язані з виробництвом дерев'яних ящиків, бочок та іншої дерев'яної тари.",
    "descriptionEn": "Professions related to the manufacture of wooden boxes, barrels, and other wooden containers."
  },
  {
    "nameUa": "Виробництво інших виробів з деревини; виробництво коркових виробів, плетених виробів і виробів з рослинних матеріалів",
    "nameEn": "Manufacture of Other Products of Wood; Manufacture of Articles of Cork, Straw and Plaiting Materials",
    "descriptionUa": "Професії, пов'язані з виробництвом інших виробів з деревини, коркових виробів та плетених виробів.",
    "descriptionEn": "Professions related to the manufacture of other wood products, cork products, and wickerwork."
  },
  {
    "nameUa": "Виробництво паперової маси",
    "nameEn": "Manufacture of Pulp",
    "descriptionUa": "Професії, пов'язані з виробництвом паперової маси з деревини або макулатури.",
    "descriptionEn": "Professions related to the manufacture of pulp from wood or waste paper."
  },
  {
    "nameUa": "Виробництво паперу та картону",
    "nameEn": "Manufacture of Paper and Paperboard",
    "descriptionUa": "Професії, пов'язані з виробництвом паперу та картону різних видів.",
    "descriptionEn": "Professions related to the manufacture of various types of paper and cardboard."
  },
  {
    "nameUa": "Виробництво гофрованого паперу та картону, паперової та картонної тари",
    "nameEn": "Manufacture of Corrugated Paper and Paperboard and of Containers of Paper and Paperboard",
    "descriptionUa": "Професії, пов'язані з виробництвом гофрованого паперу, картону та тари з них.",
    "descriptionEn": "Professions related to the manufacture of corrugated paper and cardboard, and containers made thereof."
  },
  {
    "nameUa": "Виробництво паперових канцелярських виробів",
    "nameEn": "Manufacture of Paper Stationery",
    "descriptionUa": "Професії, пов'язані з виробництвом паперових канцелярських товарів, таких як зошити, блокноти тощо.",
    "descriptionEn": "Professions related to the manufacture of paper stationery, such as notebooks, pads, etc."
  },
  {
    "nameUa": "Виробництво паперових виробів господарсько-побутового та санітарно-гігієнічного призначення",
    "nameEn": "Manufacture of Household and Sanitary Goods and of Toilet Requisites",
    "descriptionUa": "Професії, пов'язані з виробництвом туалетного паперу, серветок, рушників та інших паперових виробів.",
    "descriptionEn": "Professions related to the manufacture of toilet paper, napkins, towels, and other paper products."
  },
  {
    "nameUa": "Виробництво паперової та картонної упаковки",
    "nameEn": "Manufacture of Paper and Paperboard Labels",
    "descriptionUa": "Професії, пов'язані з виробництвом паперової та картонної упаковки та етикеток.",
    "descriptionEn": "Professions related to the manufacture of paper and cardboard packaging and labels."
  },
  {
    "nameUa": "Інші види діяльності з оброблення паперу та картону",
    "nameEn": "Other Processing of Paper and Paperboard",
    "descriptionUa": "Професії, пов'язані з іншими видами обробки паперу та картону, такими як ламінування, різання тощо.",
    "descriptionEn": "Professions related to other types of paper and cardboard processing, such as laminating, cutting, etc."
  },
  {
    "nameUa": "Друкування газет",
    "nameEn": "Printing of Newspapers",
    "descriptionUa": "Професії, пов'язані з друкуванням газет.",
    "descriptionEn": "Professions related to the printing of newspapers."
  },
  {
    "nameUa": "Друкування іншої продукції",
    "nameEn": "Other Printing",
    "descriptionUa": "Професії, пов'язані з друкуванням журналів, книг, рекламної продукції тощо.",
    "descriptionEn": "Professions related to the printing of magazines, books, advertising materials, etc."
  },
  {
    "nameUa": "Брошурувально-палітурна діяльність і пов'язані з нею послуги",
    "nameEn": "Bookbinding and Related Services",
    "descriptionUa": "Професії, пов'язані з брошуруванням, палітурними роботами та іншими післядрукарськими послугами.",
    "descriptionEn": "Professions related to bookbinding and other post-printing services."
  },
  {
    "nameUa": "Виготовлення друкарських форм і кліше",
    "nameEn": "Pre-press and Pre-media Services",
    "descriptionUa": "Професії, пов'язані з підготовкою макетів та форм для друку.",
    "descriptionEn": "Professions related to the preparation of layouts and printing plates."
  },
  {
    "nameUa": "Копіювання звуко-, відеозаписів і програмного забезпечення",
    "nameEn": "Reproduction of Recorded Media",
    "descriptionUa": "Професії, пов'язані з копіюванням аудіо- та відеозаписів, а також програмного забезпечення.",
    "descriptionEn": "Professions related to the copying of audio and video recordings, as well as software."
  },
  {
    "nameUa": "Виробництво коксу",
    "nameEn": "Manufacture of Coke Oven Products",
    "descriptionUa": "Професії, пов'язані з виробництвом коксу з кам'яного вугілля.",
    "descriptionEn": "Professions related to the manufacture of coke from hard coal."
  },
  {
    "nameUa": "Виробництво продуктів нафтоперероблення",
    "nameEn": "Manufacture of Refined Petroleum Products",
    "descriptionUa": "Професії, пов'язані з переробкою сирої нафти на бензин, дизельне паливо та інші нафтопродукти.",
    "descriptionEn": "Professions related to the refining of crude oil into gasoline, diesel fuel, and other petroleum products."
  },
  {
    "nameUa": "Виробництво основних хімічних речовин, крім добрив і азотних сполук",
    "nameEn": "Manufacture of Basic Chemicals, Except Fertilisers and Nitrogen Compounds",
    "descriptionUa": "Професії, пов'язані з виробництвом основних хімічних речовин, таких як органічні та неорганічні сполуки.",
    "descriptionEn": "Professions related to the manufacture of basic chemicals, such as organic and inorganic compounds."
  },
  {
    "nameUa": "Виробництво добрив і азотних сполук",
    "nameEn": "Manufacture of Fertilisers and Nitrogen Compounds",
    "descriptionUa": "Професії, пов'язані з виробництвом мінеральних та азотних добрив.",
    "descriptionEn": "Professions related to the manufacture of mineral and nitrogen fertilizers."
  },
  {
    "nameUa": "Виробництво пластмас у первинних формах і синтетичного каучуку",
    "nameEn": "Manufacture of Plastics in Primary Forms and of Synthetic Rubber",
    "descriptionUa": "Професії, пов'язані з виробництвом первинних форм пластмас та синтетичного каучуку.",
    "descriptionEn": "Professions related to the manufacture of plastics in primary forms and synthetic rubber."
  },
  {
    "nameUa": "Виробництво пестицидів та іншої агрохімічної продукції",
    "nameEn": "Manufacture of Pesticides and Other Agro-chemical Products",
    "descriptionUa": "Професії, пов'язані з виробництвом засобів захисту рослин та іншої агрохімічної продукції.",
    "descriptionEn": "Professions related to the manufacture of plant protection products and other agro-chemicals."
  },
  {
    "nameUa": "Виробництво фарб, лаків і подібних покривних матеріалів, друкарської фарби та мастик",
    "nameEn": "Manufacture of Paints, Varnishes and Similar Coatings, Printing Ink and Mastics",
    "descriptionUa": "Професії, пов'язані з виробництвом фарб, лаків, друкарської фарби та мастик.",
    "descriptionEn": "Professions related to the manufacture of paints, varnishes, printing ink, and mastics."
  },
  {
    "nameUa": "Виробництво мила та мийних засобів, засобів для чищення та полірування, парфумів та косметичних засобів",
    "nameEn": "Manufacture of Soap and Detergents, Cleaning and Polishing Preparations, Perfumes and Toilet Preparations",
    "descriptionUa": "Професії, пов'язані з виробництвом мила, мийних засобів, парфумерії та косметики.",
    "descriptionEn": "Professions related to the manufacture of soap, detergents, perfumes, and cosmetics."
  },
  {
    "nameUa": "Виробництво іншої хімічної продукції, н.в.і.у.",
    "nameEn": "Manufacture of Other Chemical Products N.E.C.",
    "descriptionUa": "Професії, пов'язані з виробництвом іншої хімічної продукції, не включеної до попередніх категорій.",
    "descriptionEn": "Professions related to the manufacture of other chemical products not included in previous categories."
  },
  {
    "nameUa": "Виробництво основних фармацевтичних продуктів",
    "nameEn": "Manufacture of Basic Pharmaceutical Products",
    "descriptionUa": "Професії, пов'язані з виробництвом фармацевтичних субстанцій та активних фармацевтичних інгредієнтів.",
    "descriptionEn": "Professions related to the manufacture of pharmaceutical substances and active pharmaceutical ingredients."
  },
  {
    "nameUa": "Виробництво фармацевтичних препаратів",
    "nameEn": "Manufacture of Pharmaceutical Preparations",
    "descriptionUa": "Професії, пов'язані з виробництвом готових лікарських засобів.",
    "descriptionEn": "Professions related to the manufacture of finished medicinal products."
  },
  {
    "nameUa": "Виробництво гумових шин і камер",
    "nameEn": "Manufacture of Rubber Tyres and Tubes; Retreading and Rebuilding of Rubber Tyres",
    "descriptionUa": "Професії, пов'язані з виробництвом гумових шин та камер, а також відновленням шин.",
    "descriptionEn": "Professions related to the manufacture of rubber tires and tubes, as well as tire retreading."
  },
  {
    "nameUa": "Виробництво інших гумових виробів",
    "nameEn": "Manufacture of Other Rubber Products",
    "descriptionUa": "Професії, пов'язані з виробництвом інших виробів з гуми, крім шин.",
    "descriptionEn": "Professions related to the manufacture of other rubber products besides tires."
  },
  {
    "nameUa": "Виробництво пластмасових плит, листів, труб і профілів",
    "nameEn": "Manufacture of Plastics Plates, Sheets, Tubes and Profiles",
    "descriptionUa": "Професії, пов'язані з виробництвом пластмасових плит, листів, труб та профілів.",
    "descriptionEn": "Professions related to the manufacture of plastic plates, sheets, tubes, and profiles."
  },
  {
    "nameUa": "Виробництво пластмасової тари",
    "nameEn": "Manufacture of Plastics Packaging Goods",
    "descriptionUa": "Професії, пов'язані з виробництвом пластмасової тари, такої як пляшки, контейнери тощо.",
    "descriptionEn": "Professions related to the manufacture of plastic packaging goods, such as bottles, containers, etc."
  },
  {
    "nameUa": "Виробництво будівельних виробів з пластмас",
    "nameEn": "Manufacture of Builders' Ware of Plastics",
    "descriptionUa": "Професії, пов'язані з виробництвом будівельних виробів з пластмас, таких як вікна, двері, труби тощо.",
    "descriptionEn": "Professions related to the manufacture of plastic building materials, such as windows, doors, pipes, etc."
  },
  {
    "nameUa": "Виробництво інших пластмасових виробів",
    "nameEn": "Manufacture of Other Plastics Products",
    "descriptionUa": "Професії, пов'язані з виробництвом інших виробів з пластмас, не включених до попередніх категорій.",
    "descriptionEn": "Professions related to the manufacture of other plastic products not included in previous categories."
  },
  {
    "nameUa": "Виробництво скла та скляних виробів",
    "nameEn": "Manufacture of Glass and Glass Products",
    "descriptionUa": "Професії, пов'язані з виробництвом скла та різних виробів зі скла.",
    "descriptionEn": "Professions related to the manufacture of glass and various glass products."
  },
  {
    "nameUa": "Виробництво вогнетривких виробів",
    "nameEn": "Manufacture of Refractory Products",
    "descriptionUa": "Професії, пов'язані з виробництвом вогнетривких матеріалів та виробів.",
    "descriptionEn": "Professions related to the manufacture of refractory materials and products."
  },
  {
    "nameUa": "Виробництво будівельних керамічних виробів",
    "nameEn": "Manufacture of Ceramic Tiles and Flags",
    "descriptionUa": "Професії, пов'язані з виробництвом керамічної плитки та інших будівельних керамічних виробів.",
    "descriptionEn": "Professions related to the manufacture of ceramic tiles and other ceramic building materials."
  },
  {
    "nameUa": "Виробництво цегли, черепиці та інших будівельних виробів з випаленої глини",
    "nameEn": "Manufacture of Bricks, Tiles and Baked Clay Construction Products",
    "descriptionUa": "Професії, пов'язані з виробництвом цегли, черепиці та інших будівельних виробів з випаленої глини.",
    "descriptionEn": "Professions related to the manufacture of bricks, tiles, and other baked clay construction products."
  },
  {
    "nameUa": "Виробництво інших керамічних виробів технічного призначення",
    "nameEn": "Manufacture of Other Technical Ceramic Products",
    "descriptionUa": "Професії, пов'язані з виробництвом технічної кераміки.",
    "descriptionEn": "Professions related to the manufacture of technical ceramics."
  },
  {
    "nameUa": "Виробництво інших керамічних виробів",
    "nameEn": "Manufacture of Other Ceramic Products",
    "descriptionUa": "Професії, пов'язані з виробництвом іншої керамічної продукції, такої як посуд, декоративні вироби тощо.",
    "descriptionEn": "Professions related to the manufacture of other ceramic products, such as tableware, decorative items, etc."
  },
  {
    "nameUa": "Виробництво цементу",
    "nameEn": "Manufacture of Cement",
    "descriptionUa": "Професії, пов'язані з виробництвом цементу.",
    "descriptionEn": "Professions related to the manufacture of cement."
  },
  {
    "nameUa": "Виробництво вапна та гіпсу",
    "nameEn": "Manufacture of Lime and Plaster",
    "descriptionUa": "Професії, пов'язані з виробництвом вапна та гіпсу.",
    "descriptionEn": "Professions related to the manufacture of lime and plaster."
  },
  {
    "nameUa": "Виробництво будівельних розчинів",
    "nameEn": "Manufacture of Mortars",
    "descriptionUa": "Професії, пов'язані з виробництвом будівельних розчинів.",
    "descriptionEn": "Professions related to the manufacture of mortars."
  },
  {
    "nameUa": "Виробництво бетонних розчинів, готових для використання",
    "nameEn": "Manufacture of Ready-Mixed Concrete",
    "descriptionUa": "Професії, пов'язані з виробництвом готових до використання бетонних розчинів.",
    "descriptionEn": "Professions related to the manufacture of ready-mixed concrete."
  },
  {
    "nameUa": "Виробництво будівельних виробів з бетону, гіпсу та цементу",
    "nameEn": "Manufacture of Articles of Concrete, Plaster and Cement",
    "descriptionUa": "Професії, пов'язані з виробництвом будівельних виробів з бетону, гіпсу та цементу, таких як блоки, плити тощо.",
    "descriptionEn": "Professions related to the manufacture of concrete, plaster, and cement building products, such as blocks, slabs, etc."
  },
  {
    "nameUa": "Виробництво сухих будівельних сумішей",
    "nameEn": "Manufacture of Dry Mortars",
    "descriptionUa": "Професії, пов'язані з виробництвом сухих будівельних сумішей.",
    "descriptionEn": "Professions related to the manufacture of dry mortars."
  },
  {
    "nameUa": "Виробництво бітумних сумішей на основі природного або штучного каменю",
    "nameEn": "Manufacture of Bituminous Mixtures Based on Natural Asphalt or Bitumen",
    "descriptionUa": "Професії, пов'язані з виробництвом асфальтобетонних сумішей.",
    "descriptionEn": "Professions related to the manufacture of asphalt concrete mixtures."
  },
  {
    "nameUa": "Виробництво інших неметалевих мінеральних виробів, н.в.і.у.",
    "nameEn": "Manufacture of Other Non-Metallic Mineral Products N.E.C.",
    "descriptionUa": "Професії, пов'язані з виробництвом інших неметалевих мінеральних виробів, не включених до попередніх категорій.",
    "descriptionEn": "Professions related to the manufacture of other non-metallic mineral products not included in previous categories."
  },
  {
    "nameUa": "Виробництво чавуну",
    "nameEn": "Manufacture of Basic Iron and Steel",
    "descriptionUa": "Професії, пов'язані з виробництвом чавуну.",
    "descriptionEn": "Professions related to the manufacture of basic iron."
  },
  {
    "nameUa": "Виробництво сталі",
    "nameEn": "Manufacture of Basic Iron and Steel",
    "descriptionUa": "Професії, пов'язані з виробництвом сталі.",
    "descriptionEn": "Professions related to the manufacture of basic steel."
  },
  {
    "nameUa": "Виробництво феросплавів",
    "nameEn": "Manufacture of Ferro-alloys",
    "descriptionUa": "Професії, пов'язані з виробництвом феросплавів.",
    "descriptionEn": "Professions related to the manufacture of ferro-alloys."
  },
  {
    "nameUa": "Виробництво труб, порожнистих профілів і фітингів зі сталі",
    "nameEn": "Manufacture of Tubes, Pipes, Hollow Profiles and Related Fittings, of Steel",
    "descriptionUa": "Професії, пов'язані з виробництвом сталевих труб, профілів та фітингів.",
    "descriptionEn": "Professions related to the manufacture of steel tubes, pipes, hollow profiles, and fittings."
  },
  {
    "nameUa": "Виробництво інших виробів первинної обробки сталі",
    "nameEn": "Manufacture of Other Products of First Processing of Iron and Steel",
    "descriptionUa": "Професії, пов'язані з іншими видами первинної обробки сталі, такими як прокат, волочіння тощо.",
    "descriptionEn": "Professions related to other types of primary steel processing, such as rolling, drawing, etc."
  },
  {
    "nameUa": "Виробництво кольорових металів",
    "nameEn": "Manufacture of Basic Precious and Other Non-Ferrous Metals",
    "descriptionUa": "Професії, пов'язані з виробництвом первинних кольорових металів.",
    "descriptionEn": "Professions related to the manufacture of basic non-ferrous metals."
  },
  {
    "nameUa": "Виробництво труб, порожнистих профілів і фітингів з кольорових металів",
    "nameEn": "Manufacture of Tubes, Pipes, Hollow Profiles and Related Fittings, of Non-Ferrous Metals",
    "descriptionUa": "Професії, пов'язані з виробництвом труб, профілів та фітингів з кольорових металів.",
    "descriptionEn": "Professions related to the manufacture of non-ferrous metal tubes, pipes, hollow profiles, and fittings."
  },
  {
    "nameUa": "Виробництво інших виробів первинної обробки кольорових металів",
    "nameEn": "Manufacture of Other Products of First Processing of Non-Ferrous Metals",
    "descriptionUa": "Професії, пов'язані з іншими видами первинної обробки кольорових металів, такими як прокат, волочіння тощо.",
    "descriptionEn": "Professions related to other types of primary non-ferrous metal processing, such as rolling, drawing, etc."
  },
  {
    "nameUa": "Виробництво металевих конструкцій і частин конструкцій",
    "nameEn": "Manufacture of Metal Structures and Parts of Structures",
    "descriptionUa": "Професії, пов'язані з виробництвом металевих каркасів будівель, мостів тощо.",
    "descriptionEn": "Professions related to the manufacture of metal frameworks for buildings, bridges, etc."
  },
  {
    "nameUa": "Виробництво металевих дверей і вікон",
    "nameEn": "Manufacture of Metal Doors and Windows",
    "descriptionUa": "Професії, пов'язані з виробництвом металевих дверей та вікон.",
    "descriptionEn": "Professions related to the manufacture of metal doors and windows."
  },
  {
    "nameUa": "Виробництво радіаторів і котлів центрального опалення",
    "nameEn": "Manufacture of Central Heating Radiators and Boilers",
    "descriptionUa": "Професії, пов'язані з виробництвом радіаторів та котлів центрального опалення.",
    "descriptionEn": "Professions related to the manufacture of central heating radiators and boilers."
  },
  {
    "nameUa": "Виробництво парових котлів",
    "nameEn": "Manufacture of Steam Generators",
    "descriptionUa": "Професії, пов'язані з виробництвом парових котлів.",
    "descriptionEn": "Professions related to the manufacture of steam generators."
  },
  {
    "nameUa": "Виробництво кованих виробів, пресованих виробів, штампованих виробів; порошкова металургія",
    "nameEn": "Forging, Pressing, Stamping and Roll-Forming of Metal; Powder Metallurgy",
    "descriptionUa": "Професії, пов'язані з куванням, пресуванням, штампуванням металу та порошковою металургією.",
    "descriptionEn": "Professions related to forging, pressing, stamping, and roll-forming of metal, as well as powder metallurgy."
  },
  {
    "nameUa": "Оброблення металів; нанесення покриттів на метали; механічне оброблення металів",
    "nameEn": "Treatment and Coating of Metals; Machining",
    "descriptionUa": "Професії, пов'язані з обробкою металів, нанесенням покриттів та механічною обробкою.",
    "descriptionEn": "Professions related to the treatment and coating of metals, as well as machining."
  },
  {
    "nameUa": "Виробництво столових приборів, інструментів, замків і скобяних виробів",
    "nameEn": "Manufacture of Cutlery, Hand Tools and General Hardware",
    "descriptionUa": "Професії, пов'язані з виробництвом столових приборів, ручних інструментів, замків та скобяних виробів.",
    "descriptionEn": "Professions related to the manufacture of cutlery, hand tools, locks, and hardware."
  },
  {
    "nameUa": "Виробництво інших готових металевих виробів",
    "nameEn": "Manufacture of Other Fabricated Metal Products N.E.C.",
    "descriptionUa": "Професії, пов'язані з виробництвом інших готових металевих виробів, не включених до попередніх категорій.",
    "descriptionEn": "Professions related to the manufacture of other fabricated metal products not included in previous categories."
  },
  {
    "nameUa": "Виробництво електронних компонентів",
    "nameEn": "Manufacture of Electronic Components",
    "descriptionUa": "Професії, пов'язані з виробництвом електронних компонентів, таких як напівпровідники, діоди, транзистори тощо.",
    "descriptionEn": "Professions related to the manufacture of electronic components such as semiconductors, diodes, transistors, etc."
  },
  {
    "nameUa": "Виробництво друкованих плат",
    "nameEn": "Manufacture of Loaded Electronic Boards",
    "descriptionUa": "Професії, пов'язані з виробництвом друкованих плат зі встановленими електронними компонентами.",
    "descriptionEn": "Professions related to the manufacture of printed circuit boards with mounted electronic components."
  },
  {
    "nameUa": "Виробництво комп'ютерів і периферійного обладнання",
    "nameEn": "Manufacture of Computers and Peripheral Equipment",
    "descriptionUa": "Професії, пов'язані з виробництвом комп'ютерів, моніторів, принтерів та іншого периферійного обладнання.",
    "descriptionEn": "Professions related to the manufacture of computers, monitors, printers, and other peripheral equipment."
  },
  {
    "nameUa": "Виробництво обладнання зв'язку",
    "nameEn": "Manufacture of Communication Equipment",
    "descriptionUa": "Професії, пов'язані з виробництвом телекомунікаційного обладнання, такого як телефони, маршрутизатори тощо.",
    "descriptionEn": "Professions related to the manufacture of telecommunications equipment such as telephones, routers, etc."
  },
  {
    "nameUa": "Виробництво електронної апаратури побутового призначення",
    "nameEn": "Manufacture of Consumer Electronics",
    "descriptionUa": "Професії, пов'язані з виробництвом телевізорів, радіоприймачів, аудіо- та відеоплеєрів тощо.",
    "descriptionEn": "Professions related to the manufacture of televisions, radios, audio and video players, etc."
  },
  {
    "nameUa": "Виробництво інструментів і обладнання для вимірювання, випробування та навігації",
    "nameEn": "Manufacture of Instruments and Appliances for Measuring, Testing and Navigation; Watches and Clocks",
    "descriptionUa": "Професії, пов'язані з виробництвом вимірювальних приладів, годинників тощо.",
    "descriptionEn": "Professions related to the manufacture of measuring instruments, watches, etc."
  },
  {
    "nameUa": "Виробництво оптичних приладів і фотографічного обладнання",
    "nameEn": "Manufacture of Optical Instruments and Photographic Equipment",
    "descriptionUa": "Професії, пов'язані з виробництвом лінз, окулярів, фотоапаратів тощо.",
    "descriptionEn": "Professions related to the manufacture of lenses, glasses, cameras, etc."
  },
  {
    "nameUa": "Виробництво магнітних і оптичних носіїв даних",
    "nameEn": "Manufacture of Magnetic and Optical Media",
    "descriptionUa": "Професії, пов'язані з виробництвом компакт-дисків, DVD-дисків, магнітних стрічок тощо.",
    "descriptionEn": "Professions related to the manufacture of CDs, DVDs, magnetic tapes, etc."
  },
  {
    "nameUa": "Виробництво електродвигунів, генераторів і трансформаторів",
    "nameEn": "Manufacture of Electric Motors, Generators and Transformers",
    "descriptionUa": "Професії, пов'язані з виробництвом електродвигунів, генераторів та трансформаторів.",
    "descriptionEn": "Professions related to the manufacture of electric motors, generators, and transformers."
  },
  {
    "nameUa": "Виробництво електророзподільної та контрольної апаратури",
    "nameEn": "Manufacture of Electricity Distribution and Control Apparatus",
    "descriptionUa": "Професії, пов'язані з виробництвом вимикачів, запобіжників, щитів керування тощо.",
    "descriptionEn": "Professions related to the manufacture of switches, fuses, control panels, etc."
  },
  {
    "nameUa": "Виробництво акумуляторів та електричних батарей",
    "nameEn": "Manufacture of Batteries and Accumulators",
    "descriptionUa": "Професії, пов'язані з виробництвом акумуляторів та електричних батарей.",
    "descriptionEn": "Professions related to the manufacture of batteries and accumulators."
  },
  {
    "nameUa": "Виробництво електричних ламп та освітлювального обладнання",
    "nameEn": "Manufacture of Electric Lamps and Lighting Equipment",
    "descriptionUa": "Професії, пов'язані з виробництвом електричних ламп та освітлювальних приладів.",
    "descriptionEn": "Professions related to the manufacture of electric lamps and lighting fixtures."
  },
  {
    "nameUa": "Виробництво іншого електричного устаткування",
    "nameEn": "Manufacture of Other Electrical Equipment",
    "descriptionUa": "Професії, пов'язані з виробництвом іншого електричного устаткування, не включеного до попередніх категорій.",
    "descriptionEn": "Professions related to the manufacture of other electrical equipment not included in previous categories."
  },
  {
    "nameUa": "Виробництво двигунів і турбін, крім авіаційних, автомобільних і мотоциклетних двигунів",
    "nameEn": "Manufacture of Engines and Turbines, Except Aircraft, Vehicle and Cycle Engines",
    "descriptionUa": "Професії, пов'язані з виробництвом промислових двигунів та турбін.",
    "descriptionEn": "Professions related to the manufacture of industrial engines and turbines."
  },
  {
    "nameUa": "Виробництво гідравлічного та пневматичного устаткування",
    "nameEn": "Manufacture of Fluid Power Equipment",
    "descriptionUa": "Професії, пов'язані з виробництвом гідравлічного та пневматичного обладнання.",
    "descriptionEn": "Professions related to the manufacture of hydraulic and pneumatic equipment."
  },
  {
    "nameUa": "Виробництво інших насосів і компресорів",
    "nameEn": "Manufacture of Other Pumps and Compressors",
    "descriptionUa": "Професії, пов'язані з виробництвом інших насосів та компресорів.",
    "descriptionEn": "Professions related to the manufacture of other pumps and compressors."
  },
  {
    "nameUa": "Виробництво кранів і клапанів",
    "nameEn": "Manufacture of Taps and Valves",
    "descriptionUa": "Професії, пов'язані з виробництвом кранів та клапанів для різних галузей.",
    "descriptionEn": "Professions related to the manufacture of taps and valves for various industries."
  },
  {
    "nameUa": "Виробництво підшипників, зубчастих передач, елементів механічних передач і приводів",
    "nameEn": "Manufacture of Bearings, Gears, Gearing and Driving Elements",
    "descriptionUa": "Професії, пов'язані з виробництвом підшипників, зубчастих передач та інших елементів механічних передач.",
    "descriptionEn": "Professions related to the manufacture of bearings, gears, gearing, and other mechanical transmission elements."
  },
  {
    "nameUa": "Виробництво промислових печей і горнів",
    "nameEn": "Manufacture of Industrial Process Furnaces and Ovens",
    "descriptionUa": "Професії, пов'язані з виробництвом промислових печей та горнів для різних технологічних процесів.",
    "descriptionEn": "Professions related to the manufacture of industrial furnaces and ovens for various technological processes."
  },
  {
    "nameUa": "Виробництво підіймально-транспортного устаткування",
    "nameEn": "Manufacture of Lifting and Handling Equipment",
    "descriptionUa": "Професії, пов'язані з виробництвом кранів, навантажувачів та іншого підіймально-транспортного обладнання.",
    "descriptionEn": "Professions related to the manufacture of cranes, forklifts, and other lifting and handling equipment."
  },
  {
    "nameUa": "Виробництво іншого устаткування загального призначення, н.в.і.у.",
    "nameEn": "Manufacture of Other General-Purpose Machinery N.E.C.",
    "descriptionUa": "Професії, пов'язані з виробництвом іншого обладнання загального призначення, не включеного до попередніх категорій.",
    "descriptionEn": "Professions related to the manufacture of other general-purpose machinery not included in previous categories."
  },
  {
    "nameUa": "Виробництво сільськогосподарської та лісогосподарської техніки",
    "nameEn": "Manufacture of Agricultural and Forestry Machinery",
    "descriptionUa": "Професії, пов'язані з виробництвом тракторів, комбайнів та іншої сільськогосподарської та лісогосподарської техніки.",
    "descriptionEn": "Professions related to the manufacture of tractors, combine harvesters, and other agricultural and forestry machinery."
  },
  {
    "nameUa": "Виробництво металообробних верстатів",
    "nameEn": "Manufacture of Metal-Forming Machinery",
    "descriptionUa": "Професії, пов'язані з виробництвом верстатів для обробки металу.",
    "descriptionEn": "Professions related to the manufacture of metal-forming machine tools."
  },
  {
    "nameUa": "Виробництво інших верстатів",
    "nameEn": "Manufacture of Other Machine Tools",
    "descriptionUa": "Професії, пов'язані з виробництвом верстатів для обробки інших матеріалів, таких як дерево, пластмаса тощо.",
    "descriptionEn": "Professions related to the manufacture of machine tools for processing other materials, such as wood, plastics, etc."
  },
  {
    "nameUa": "Виробництво машин і устаткування для металургії",
    "nameEn": "Manufacture of Machinery for Metallurgy",
    "descriptionUa": "Професії, пов'язані з виробництвом обладнання для металургійної промисловості.",
    "descriptionEn": "Professions related to the manufacture of machinery for the metallurgical industry."
  },
  {
    "nameUa": "Виробництво машин і устаткування для гірничодобувної промисловості та будівництва",
    "nameEn": "Manufacture of Machinery for Mining, Quarrying and Construction",
    "descriptionUa": "Професії, пов'язані з виробництвом обладнання для гірничодобувної промисловості та будівництва.",
    "descriptionEn": "Professions related to the manufacture of machinery for the mining and construction industries."
  },
  {
    "nameUa": "Виробництво машин і устаткування для харчової, текстильної та швейної промисловості",
    "nameEn": "Manufacture of Machinery for Food, Beverage and Tobacco Processing",
    "descriptionUa": "Професії, пов'язані з виробництвом обладнання для харчової, текстильної та швейної промисловості.",
    "descriptionEn": "Professions related to the manufacture of machinery for the food, textile, and clothing industries."
  },
  {
    "nameUa": "Виробництво машин і устаткування для виробництва паперу та картону",
    "nameEn": "Manufacture of Machinery for Paper and Paperboard Production",
    "descriptionUa": "Професії, пов'язані з виробництвом обладнання для целюлозно-паперової промисловості.",
    "descriptionEn": "Professions related to the manufacture of machinery for the pulp and paper industry."
  },
  {
    "nameUa": "Виробництво машин і устаткування для виробництва пластмас і гуми",
    "nameEn": "Manufacture of Machinery for Plastics and Rubber",
    "descriptionUa": "Професії, пов'язані з виробництвом обладнання для переробки пластмас та гуми.",
    "descriptionEn": "Professions related to the manufacture of machinery for processing plastics and rubber."
  },
  {
    "nameUa": "Виробництво іншого спеціального призначення",
    "nameEn": "Manufacture of Other Special-Purpose Machinery",
    "descriptionUa": "Професії, пов'язані з виробництвом іншого спеціалізованого обладнання, не включеного до попередніх категорій.",
    "descriptionEn": "Professions related to the manufacture of other specialized machinery not included in previous categories."
  },
  {
    "nameUa": "Виробництво кузовів для автотранспортних засобів; виробництво причепів і напівпричепів",
    "nameEn": "Manufacture of Bodies (Coachwork) for Motor Vehicles; Manufacture of Trailers and Semi-Trailers",
    "descriptionUa": "Професії, пов'язані з виробництвом кузовів, причепів та напівпричепів для автотранспортних засобів.",
    "descriptionEn": "Professions related to the manufacture of bodies, trailers, and semi-trailers for motor vehicles."
  },
  {
    "nameUa": "Виробництво електричного та електронного устаткування для автотранспортних засобів",
    "nameEn": "Manufacture of Electrical and Electronic Equipment for Motor Vehicles",
    "descriptionUa": "Професії, пов'язані з виробництвом електрообладнання та електроніки для автомобілів.",
    "descriptionEn": "Professions related to the manufacture of electrical equipment and electronics for automobiles."
  },
  {
    "nameUa": "Виробництво інших частин і приладдя для автотранспортних засобів",
    "nameEn": "Manufacture of Other Parts and Accessories for Motor Vehicles",
    "descriptionUa": "Професії, пов'язані з виробництвом інших комплектуючих для автомобілів.",
    "descriptionEn": "Professions related to the manufacture of other components for automobiles."
  },
  {
    "nameUa": "Будування суден і човнів",
    "nameEn": "Building of Ships and Boats",
    "descriptionUa": "Професії, пов'язані з будівництвом кораблів, човнів та інших плавучих засобів.",
    "descriptionEn": "Professions related to the building of ships, boats, and other watercraft."
  },
  {
    "nameUa": "Виробництво залізничних локомотивів і рухомого складу",
    "nameEn": "Manufacture of Railway Locomotives and Rolling Stock",
    "descriptionUa": "Професії, пов'язані з виробництвом локомотивів, вагонів та іншого залізничного рухомого складу.",
    "descriptionEn": "Professions related to the manufacture of locomotives, railway cars, and other rolling stock."
  },
  {
    "nameUa": "Виробництво повітряних і космічних літальних апаратів, їх частин",
    "nameEn": "Manufacture of Aircraft and Spacecraft and Related Machinery",
    "descriptionUa": "Професії, пов'язані з виробництвом літаків, космічних апаратів та їх комплектуючих.",
    "descriptionEn": "Professions related to the manufacture of aircraft, spacecraft, and their components."
  },
  {
    "nameUa": "Виробництво військових транспортних засобів",
    "nameEn": "Manufacture of Military Fighting Vehicles",
    "descriptionUa": "Професії, пов'язані з виробництвом військових транспортних засобів.",
    "descriptionEn": "Professions related to the manufacture of military fighting vehicles."
  },
  {
    "nameUa": "Виробництво мотоциклів",
    "nameEn": "Manufacture of Motorcycles",
    "descriptionUa": "Професії, пов'язані з виробництвом мотоциклів.",
    "descriptionEn": "Professions related to the manufacture of motorcycles."
  },
  {
    "nameUa": "Виробництво велосипедів та інших транспортних засобів, не віднесених до інших угруповань",
    "nameEn": "Manufacture of Bicycles and Invalid Carriages",
    "descriptionUa": "Професії, пов'язані з виробництвом велосипедів та інших немоторизованих транспортних засобів.",
    "descriptionEn": "Professions related to the manufacture of bicycles and other non-motorized vehicles."
  },
  {
    "nameUa": "Виробництво меблів",
    "nameEn": "Manufacture of Furniture",
    "descriptionUa": "Професії, пов'язані з виробництвом меблів для дому, офісу та інших приміщень.",
    "descriptionEn": "Professions related to the manufacture of furniture for home, office, and other premises."
  },
  {
    "nameUa": "Виробництво ювелірних та подібних виробів",
    "nameEn": "Manufacture of Jewellery and Related Articles",
    "descriptionUa": "Професії, пов'язані з виробництвом ювелірних виробів та виробів з дорогоцінних металів і каміння.",
    "descriptionEn": "Professions related to the manufacture of jewelry and articles made of precious metals and stones."
  },
  {
    "nameUa": "Виробництво музичних інструментів",
    "nameEn": "Manufacture of Musical Instruments",
    "descriptionUa": "Професії, пов'язані з виробництвом музичних інструментів.",
    "descriptionEn": "Professions related to the manufacture of musical instruments."
  },
  {
    "nameUa": "Виробництво спортивних товарів",
    "nameEn": "Manufacture of Sports Goods",
    "descriptionUa": "Професії, пов'язані з виробництвом спортивного інвентарю та обладнання.",
    "descriptionEn": "Professions related to the manufacture of sports equipment and goods."
  },
  {
    "nameUa": "Виробництво ігор та іграшок",
    "nameEn": "Manufacture of Games and Toys",
    "descriptionUa": "Професії, пов'язані з виробництвом ігор та іграшок для дітей та дорослих.",
    "descriptionEn": "Professions related to the manufacture of games and toys for children and adults."
  },
  {
    "nameUa": "Виробництво медичних і стоматологічних інструментів та матеріалів",
    "nameEn": "Manufacture of Medical and Dental Instruments and Supplies",
    "descriptionUa": "Професії, пов'язані з виробництвом медичних та стоматологічних інструментів і матеріалів.",
    "descriptionEn": "Professions related to the manufacture of medical and dental instruments and supplies."
  },
  {
    "nameUa": "Виробництво мітел і щіток",
    "nameEn": "Manufacture of Brooms and Brushes",
    "descriptionUa": "Професії, пов'язані з виробництвом мітел та щіток різного призначення.",
    "descriptionEn": "Professions related to the manufacture of brooms and brushes for various purposes."
  },
  {
    "nameUa": "Інші види промислового виробництва, н.в.і.у.",
    "nameEn": "Other Manufacturing N.E.C.",
    "descriptionUa": "Професії, пов'язані з іншими видами промислового виробництва, не включеними до попередніх категорій.",
    "descriptionEn": "Professions related to other types of industrial manufacturing not included in previous categories."
  },
  {
    "nameUa": "Виробництво електроенергії",
    "nameEn": "Electric Power Generation, Transmission and Distribution",
    "descriptionUa": "Професії, безпосередньо пов'язані з виробництвом, передачею та розподілом електроенергії.",
    "descriptionEn": "Professions directly related to the generation, transmission, and distribution of electric power."
  },
  {
    "nameUa": "Передача електроенергії",
    "nameEn": "Electric Power Transmission",
    "descriptionUa": "Професії, безпосередньо пов'язані з передачею електроенергії високовольтними лініями.",
    "descriptionEn": "Professions directly related to the transmission of electric power via high-voltage lines."
  },
  {
    "nameUa": "Розподілення електроенергії",
    "nameEn": "Electric Power Distribution",
    "descriptionUa": "Професії, безпосередньо пов'язані з розподілом електроенергії споживачам.",
    "descriptionEn": "Professions directly related to the distribution of electric power to consumers."
  },
  {
    "nameUa": "Виробництво газу",
    "nameEn": "Manufacture of Gas; Distribution of Gaseous Fuels Through Mains",
    "descriptionUa": "Професії, безпосередньо пов'язані з виробництвом природного та інших газів.",
    "descriptionEn": "Professions directly related to the manufacture of natural and other gases."
  },
  {
    "nameUa": "Розподілення газоподібного палива через місцеві (локальні) трубопроводи",
    "nameEn": "Distribution of Gaseous Fuels Through Mains",
    "descriptionUa": "Професії, безпосередньо пов'язані з розподілом газоподібного палива споживачам через трубопроводи.",
    "descriptionEn": "Professions directly related to the distribution of gaseous fuels to consumers through pipelines."
  },
  {
    "nameUa": "Виробництво пари та гарячої води",
    "nameEn": "Steam and Hot Water Supply",
    "descriptionUa": "Професії, пов'язані з виробництвом пари та гарячої води для опалення та промислових потреб.",
    "descriptionEn": "Professions related to the generation of steam and hot water for heating and industrial purposes."
  },
  {
    "nameUa": "Постачання пари та гарячої води",
    "nameEn": "Steam and Hot Water Supply",
    "descriptionUa": "Професії, пов'язані з транспортуванням та постачанням пари та гарячої води споживачам.",
    "descriptionEn": "Professions related to the transportation and supply of steam and hot water to consumers."
  },
  {
    "nameUa": "Кондиціювання повітря",
    "nameEn": "Air Conditioning Supply",
    "descriptionUa": "Професії, пов'язані з виробництвом та постачанням охолодженого повітря для кондиціювання приміщень.",
    "descriptionEn": "Professions related to the generation and supply of chilled air for air conditioning."
  },
  {
    "nameUa": "Забір, очищення та постачання води",
    "nameEn": "Water Collection, Treatment and Supply",
    "descriptionUa": "Професії, пов'язані із забором, очищенням та постачанням питної та технічної води споживачам.",
    "descriptionEn": "Professions related to the collection, treatment, and supply of drinking and industrial water to consumers."
  },
  {
    "nameUa": "Каналізація, відведення й очищення стічних вод",
    "nameEn": "Sewerage",
    "descriptionUa": "Професії, пов'язані з відведенням та очищенням стічних вод.",
    "descriptionEn": "Professions related to the drainage and treatment of wastewater."
  },
  {
    "nameUa": "Збирання безпечних відходів",
    "nameEn": "Collection of Non-Hazardous Waste",
    "descriptionUa": "Професії, пов'язані зі збиранням твердих побутових та інших безпечних відходів.",
    "descriptionEn": "Professions related to the collection of solid household and other non-hazardous waste."
  },
  {
    "nameUa": "Збирання небезпечних відходів",
    "nameEn": "Collection of Hazardous Waste",
    "descriptionUa": "Професії, пов'язані зі збиранням небезпечних промислових та побутових відходів.",
    "descriptionEn": "Professions related to the collection of hazardous industrial and household waste."
  },
  {
    "nameUa": "Оброблення та видалення безпечних відходів",
    "nameEn": "Treatment and Disposal of Non-Hazardous Waste",
    "descriptionUa": "Професії, пов'язані з обробленням, утилізацією та захороненням безпечних відходів.",
    "descriptionEn": "Professions related to the treatment, disposal, and landfilling of non-hazardous waste."
  },
  {
    "nameUa": "Оброблення та видалення небезпечних відходів",
    "nameEn": "Treatment and Disposal of Hazardous Waste",
    "descriptionUa": "Професії, пов'язані з обробленням та знешкодженням небезпечних відходів.",
    "descriptionEn": "Professions related to the treatment and disposal of hazardous waste."
  },
  {
    "nameUa": "Відновлення відсортованих відходів",
    "nameEn": "Recovery of Sorted Materials",
    "descriptionUa": "Професії, пов'язані з сортуванням та переробкою вторинної сировини.",
    "descriptionEn": "Professions related to the sorting and recycling of secondary raw materials."
  },
  {
    "nameUa": "Інша діяльність щодо поводження з відходами",
    "nameEn": "Other Waste Management Activities",
    "descriptionUa": "Професії, пов'язані з іншими видами діяльності у сфері поводження з відходами, не включеними до попередніх категорій.",
    "descriptionEn": "Professions related to other waste management activities not included in previous categories."
  },
  {
    "nameUa": "Лісівництво та інша діяльність у лісовому господарстві",
    "nameEn": "Silviculture and Other Forestry Activities",
    "descriptionUa": "Професії, пов'язані з вирощуванням лісу, доглядом за лісовими насадженнями та іншими видами лісового господарства.",
    "descriptionEn": "Professions related to silviculture, tending of forest stands, and other forestry activities."
  },
  {
    "nameUa": "Заготівля деревини",
    "nameEn": "Logging",
    "descriptionUa": "Професії, пов'язані з вирубкою та транспортуванням деревини.",
    "descriptionEn": "Professions related to logging and the transportation of timber."
  },
  {
    "nameUa": "Збирання дикорослих недеревних продуктів лісу",
    "nameEn": "Gathering of Wild Growing Non-Wood Products",
    "descriptionUa": "Професії, пов'язані зі збиранням грибів, ягід, лікарських рослин та інших недеревних лісових ресурсів.",
    "descriptionEn": "Professions related to the gathering of mushrooms, berries, medicinal plants, and other non-wood forest resources."
  },
  {
    "nameUa": "Допоміжна діяльність у лісовому господарстві",
    "nameEn": "Support Services to Forestry",
    "descriptionUa": "Професії, що надають допоміжні послуги у сфері лісового господарства, такі як лісозахист, таксація лісу тощо.",
    "descriptionEn": "Professions providing support services in the field of forestry, such as forest protection, forest inventory, etc."
  },
  {
    "nameUa": "Морське рибальство",
    "nameEn": "Marine Fishing",
    "descriptionUa": "Професії, пов'язані з виловом риби та інших водних біоресурсів у морях та океанах.",
    "descriptionEn": "Professions related to fishing and other aquatic bioresources in seas and oceans."
  },
  {
    "nameUa": "Прісноводне рибальство",
    "nameEn": "Freshwater Fishing",
    "descriptionUa": "Професії, пов'язані з виловом риби та інших водних біоресурсів у річках, озерах та інших прісних водоймах.",
    "descriptionEn": "Professions related to fishing and other aquatic bioresources in rivers, lakes, and other freshwater bodies."
  },
  {
    "nameUa": "Морське рибництво (аквакультура)",
    "nameEn": "Marine Aquaculture",
    "descriptionUa": "Професії, пов'язані з розведенням риби та інших водних організмів у морських умовах.",
    "descriptionEn": "Professions related to the cultivation of fish and other aquatic organisms in marine environments."
  },
  {
    "nameUa": "Прісноводне рибництво (аквакультура)",
    "nameEn": "Freshwater Aquaculture",
    "descriptionUa": "Професії, пов'язані з розведенням риби та інших водних організмів у прісних водоймах.",
    "descriptionEn": "Professions related to the cultivation of fish and other aquatic organisms in freshwater bodies."
  },
  {
    "nameUa": "Видобування кам'яного вугілля",
    "nameEn": "Mining of Hard Coal",
    "descriptionUa": "Професії, пов'язані з підземним та відкритим видобуванням кам'яного вугілля.",
    "descriptionEn": "Professions related to the underground and open-pit mining of hard coal."
  },
  {
    "nameUa": "Видобування бурого вугілля",
    "nameEn": "Mining of Lignite",
    "descriptionUa": "Професії, пов'язані з видобуванням бурого вугілля.",
    "descriptionEn": "Professions related to the mining of lignite."
  },
  {
    "nameUa": "Видобування сирої нафти",
    "nameEn": "Extraction of Crude Petroleum",
    "descriptionUa": "Професії, пов'язані з видобуванням сирої нафти з надр землі.",
    "descriptionEn": "Professions related to the extraction of crude oil from the earth's subsurface."
  },
  {
    "nameUa": "Видобування природного газу",
    "nameEn": "Extraction of Natural Gas",
    "descriptionUa": "Професії, пов'язані з видобуванням природного газу з надр землі.",
    "descriptionEn": "Professions related to the extraction of natural gas from the earth's subsurface."
  },
  {
    "nameUa": "Видобування залізних руд",
    "nameEn": "Mining of Iron Ores",
    "descriptionUa": "Професії, пов'язані з видобуванням залізних руд.",
    "descriptionEn": "Professions related to the mining of iron ores."
  },
  {
    "nameUa": "Видобування руд кольорових металів",
    "nameEn": "Mining of Non-Ferrous Metal Ores",
    "descriptionUa": "Професії, пов'язані з видобуванням руд кольорових металів, таких як мідь, нікель, цинк тощо.",
    "descriptionEn": "Professions related to the mining of non-ferrous metal ores such as copper, nickel, zinc, etc."
  },
  {
    "nameUa": "Видобування уранових і торієвих руд",
    "nameEn": "Mining of Uranium and Thorium Ores",
    "descriptionUa": "Професії, пов'язані з видобуванням уранових і торієвих руд.",
    "descriptionEn": "Professions related to the mining of uranium and thorium ores."
  },
  {
    "nameUa": "Видобування інших металевих руд, н.в.і.у.",
    "nameEn": "Mining of Other Metal Ores N.E.C.",
    "descriptionUa": "Професії, пов'язані з видобуванням інших металевих руд, не включених до попередніх категорій.",
    "descriptionEn": "Professions related to the mining of other metal ores not included in previous categories."
  },
  {
    "nameUa": "Розроблення кам'яних кар'єрів",
    "nameEn": "Quarrying of Stone",
    "descriptionUa": "Професії, пов'язані з розробленням кар'єрів для видобування будівельного та декоративного каменю.",
    "descriptionEn": "Professions related to the quarrying of building and ornamental stone."
  },
  {
    "nameUa": "Розроблення піщаних та гравійних кар'єрів; добування глини та каоліну",
    "nameEn": "Quarrying of Sand and Gravel; Mining of Clays and Kaolin",
    "descriptionUa": "Професії, пов'язані з видобуванням піску, гравію, глини та каоліну.",
    "descriptionEn": "Professions related to the quarrying of sand and gravel, and the mining of clays and kaolin."
  },
  {
    "nameUa": "Видобування мінеральної сировини для хімічної промисловості та виробництва добрив",
    "nameEn": "Mining of Chemical and Fertilizer Minerals",
    "descriptionUa": "Професії, пов'язані з видобуванням мінеральної сировини для хімічної промисловості та виробництва добрив.",
    "descriptionEn": "Professions related to the mining of minerals for the chemical and fertilizer industries."
  },
  {
    "nameUa": "Видобування солі",
    "nameEn": "Mining of Salt",
    "descriptionUa": "Професії, пов'язані з видобуванням кам'яної та кухонної солі.",
    "descriptionEn": "Professions related to the mining of rock salt and table salt."
  },
  {
    "nameUa": "Видобування інших корисних копалин і розроблення кар'єрів, н.в.і.у.",
    "nameEn": "Other Mining and Quarrying N.E.C.",
    "descriptionUa": "Професії, пов'язані з видобуванням інших корисних копалин та розробленням кар'єрів, не включених до попередніх категорій.",
    "descriptionEn": "Professions related to other mining and quarrying activities not included in previous categories."
  },
  {
    "nameUa": "Будівництво будівель",
    "nameEn": "Construction of Buildings",
    "descriptionUa": "Професії, пов'язані з будівництвом житлових та нежитлових будівель.",
    "descriptionEn": "Professions related to the construction of residential and non-residential buildings."
  },
  {
    "nameUa": "Будівництво споруд",
    "nameEn": "Civil Engineering",
    "descriptionUa": "Професії, пов'язані з будівництвом інженерних споруд, таких як дороги, мости, тунелі тощо.",
    "descriptionEn": "Professions related to the construction of civil engineering structures such as roads, bridges, tunnels, etc."
  },
  {
    "nameUa": "Спеціалізовані будівельні роботи",
    "nameEn": "Specialised Construction Activities",
    "descriptionUa": "Професії, пов'язані з окремими видами будівельних робіт, такими як електромонтажні, сантехнічні, малярні тощо.",
    "descriptionEn": "Professions related to specialized construction activities such as electrical installation, plumbing, painting, etc."
  },
  {
    "nameUa": "Торгівля автомобілями та легковими автотранспортними засобами",
    "nameEn": "Sale of Motor Vehicles",
    "descriptionUa": "Професії, пов'язані з продажем нових та вживаних легкових автомобілів.",
    "descriptionEn": "Professions related to the sale of new and used passenger cars."
  },
  {
    "nameUa": "Торгівля іншими автотранспортними засобами",
    "nameEn": "Sale of Other Motor Vehicles",
    "descriptionUa": "Професії, пов'язані з продажем вантажних автомобілів, автобусів та інших комерційних транспортних засобів.",
    "descriptionEn": "Professions related to the sale of trucks, buses, and other commercial vehicles."
  },
  {
    "nameUa": "Торгівля деталями та приладдям для автотранспортних засобів",
    "nameEn": "Sale of Motor Vehicle Parts and Accessories",
    "descriptionUa": "Професії, пов'язані з продажем запасних частин та аксесуарів для автомобілів.",
    "descriptionEn": "Professions related to the sale of spare parts and accessories for automobiles."
  },
  {
    "nameUa": "Торгівля мотоциклами, деталями та приладдям до них, їх технічне обслуговування та ремонт",
    "nameEn": "Sale, Maintenance and Repair of Motorcycles and Related Parts and Accessories",
    "descriptionUa": "Професії, пов'язані з продажем, обслуговуванням та ремонтом мотоциклів.",
    "descriptionEn": "Professions related to the sale, maintenance, and repair of motorcycles."
  },
  {
    "nameUa": "Оптова торгівля сільськогосподарською сировиною та живими тваринами",
    "nameEn": "Wholesale of Agricultural Raw Materials and Live Animals",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею сільськогосподарською сировиною та живими тваринами.",
    "descriptionEn": "Professions related to the wholesale of agricultural raw materials and live animals."
  },
  {
    "nameUa": "Оптова торгівля продуктами харчування, напоями та тютюновими виробами",
    "nameEn": "Wholesale of Food, Beverages and Tobacco",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею продуктами харчування, напоями та тютюновими виробами.",
    "descriptionEn": "Professions related to the wholesale of food, beverages, and tobacco products."
  },
  {
    "nameUa": "Оптова торгівля текстильними товарами, одягом та взуттям",
    "nameEn": "Wholesale of Textiles, Clothing and Footwear",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею текстильними товарами, одягом та взуттям.",
    "descriptionEn": "Professions related to the wholesale of textiles, clothing, and footwear."
  },
  {
    "nameUa": "Оптова торгівля фармацевтичними товарами",
    "nameEn": "Wholesale of Pharmaceutical Goods",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею фармацевтичними препаратами та медичними товарами.",
    "descriptionEn": "Professions related to the wholesale of pharmaceutical preparations and medical goods."
  },
  {
    "nameUa": "Оптова торгівля парфумними та косметичними товарами",
    "nameEn": "Wholesale of Perfumes and Cosmetics",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею парфумерією та косметикою.",
    "descriptionEn": "Professions related to the wholesale of perfumes and cosmetics."
  },
  {
    "nameUa": "Оптова торгівля іншими товарами господарського призначення",
    "nameEn": "Wholesale of Other Household Goods",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею іншими товарами господарського призначення.",
    "descriptionEn": "Professions related to the wholesale of other household goods."
  },
  {
    "nameUa": "Оптова торгівля комп'ютерним обладнанням, периферійним обладнанням і програмним забезпеченням",
    "nameEn": "Wholesale of Computers, Computer Peripheral Equipment and Software",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею комп'ютерами, периферійним обладнанням та програмним забезпеченням.",
    "descriptionEn": "Professions related to the wholesale of computers, computer peripheral equipment, and software."
  },
  {
    "nameUa": "Оптова торгівля електронним і телекомунікаційним устаткуванням, деталями до нього",
    "nameEn": "Wholesale of Electronic and Telecommunications Parts and Equipment",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею електронним та телекомунікаційним обладнанням і комплектуючими.",
    "descriptionEn": "Professions related to the wholesale of electronic and telecommunications equipment and components."
  },
  {
    "nameUa": "Оптова торгівля сільськогосподарськими машинами й устаткованням",
    "nameEn": "Wholesale of Agricultural Machinery, Equipment and Supplies",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею сільськогосподарською технікою, обладнанням та матеріалами.",
    "descriptionEn": "Professions related to the wholesale of agricultural machinery, equipment, and supplies."
  },
  {
    "nameUa": "Оптова торгівля верстатами",
    "nameEn": "Wholesale of Machine-Tools",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею метало- та деревообробними верстатами.",
    "descriptionEn": "Professions related to the wholesale of metalworking and woodworking machine tools."
  },
  {
    "nameUa": "Оптова торгівля машинами й устаткованням для добувної промисловості та будівництва",
    "nameEn": "Wholesale of Mining, Construction and Civil Engineering Machinery",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею обладнанням для гірничодобувної промисловості та будівництва.",
    "descriptionEn": "Professions related to the wholesale of machinery for the mining and construction industries."
  },
  {
    "nameUa": "Оптова торгівля іншими машинами й устаткованням",
    "nameEn": "Wholesale of Other Machinery and Equipment",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею іншими видами промислового обладнання.",
    "descriptionEn": "Professions related to the wholesale of other types of industrial equipment."
  },
  {
    "nameUa": "Оптова торгівля твердим, рідким, газоподібним паливом і подібними продуктами",
    "nameEn": "Wholesale of Solid, Liquid and Gaseous Fuels and Related Products",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею вугіллям, нафтопродуктами, газом та іншими видами палива.",
    "descriptionEn": "Professions related to the wholesale of coal, petroleum products, gas, and other fuels."
  },
  {
    "nameUa": "Оптова торгівля металами та металевими рудами",
    "nameEn": "Wholesale of Metals and Metal Ores",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею чорними та кольоровими металами та рудами.",
    "descriptionEn": "Professions related to the wholesale of ferrous and non-ferrous metals and ores."
  },
  {
    "nameUa": "Оптова торгівля будівельними матеріалами, металевими виробами, сантехнічним обладнанням і приладдям",
    "nameEn": "Wholesale of Construction Materials, Hardware, Plumbing and Heating Equipment and Supplies",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею будівельними матеріалами, металовиробами та сантехнікою.",
    "descriptionEn": "Professions related to the wholesale of construction materials, hardware, and plumbing supplies."
  },
  {
    "nameUa": "Оптова торгівля хімічними продуктами",
    "nameEn": "Wholesale of Chemical Products",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею промисловими хімікатами та іншою хімічною продукцією.",
    "descriptionEn": "Professions related to the wholesale of industrial chemicals and other chemical products."
  },
  {
    "nameUa": "Оптова торгівля іншими проміжними продуктами",
    "nameEn": "Wholesale of Other Intermediate Products",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею іншими проміжними продуктами, не включеними до попередніх категорій.",
    "descriptionEn": "Professions related to the wholesale of other intermediate products not included in previous categories."
  },
  {
    "nameUa": "Оптова торгівля відходами та брухтом",
    "nameEn": "Wholesale of Waste and Scrap",
    "descriptionUa": "Професії, пов'язані з оптовою торгівлею відходами та брухтом чорних і кольорових металів, а також іншою вторинною сировиною.",
    "descriptionEn": "Professions related to the wholesale of ferrous and non-ferrous metal waste and scrap, as well as other recyclable materials."
  },
  {
    "nameUa": "Інші види оптової торгівлі",
    "nameEn": "Other Wholesale Trade",
    "descriptionUa": "Професії, пов'язані з іншими видами оптової торгівлі, не включеними до попередніх категорій.",
    "descriptionEn": "Professions related to other types of wholesale trade not included in previous categories."
  },
  {
    "nameUa": "Роздрібна торгівля в неспеціалізованих магазинах переважно продуктами харчування, напоями та тютюновими виробами",
    "nameEn": "Retail Sale in Non-Specialised Stores with Food, Beverages or Tobacco Predominating",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею переважно продуктами харчування, напоями та тютюновими виробами в неспеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of mainly food, beverages, and tobacco products in non-specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля в неспеціалізованих магазинах без переваги продуктів харчування, напоїв та тютюнових виробів",
    "nameEn": "Retail Sale in Non-Specialised Stores without Food, Beverages or Tobacco Predominating",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею різноманітними товарами в неспеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of a variety of goods in non-specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля фруктами й овочами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Fruit and Vegetables in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею фруктами та овочами в спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of fruits and vegetables in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля м'ясом і м'ясними продуктами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Meat and Meat Products in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею м'ясом та м'ясними продуктами в спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of meat and meat products in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля рибою та іншими морепродуктами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Fish and Seafood in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею рибою та морепродуктами в спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of fish and seafood in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля хлібобулочними виробами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Bread, Cakes, Flour Confectionery and Sugar Confectionery in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею хлібобулочними та кондитерськими виробами в спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of bread, cakes, and confectionery in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля напоями в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Beverages in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею напоями, включаючи алкогольні та безалкогольні, в спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of beverages, including alcoholic and non-alcoholic, in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля тютюновими виробами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Tobacco Products in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею сигаретами, сигарами та іншими тютюновими виробами в спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of cigarettes, cigars, and other tobacco products in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля одягом у спеціалізованих магазинах",
    "nameEn": "Retail Sale of Clothing in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею різним одягом у спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of various clothing items in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля взуттям і шкіряними виробами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Footwear and Leather Goods in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею взуттям та шкіряними виробами в спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of footwear and leather goods in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля фармацевтичними товарами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Pharmaceutical Goods in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею лікарськими засобами та медичними товарами в аптеках.",
    "descriptionEn": "Professions related to the retail sale of medicines and medical goods in pharmacies."
  },
  {
    "nameUa": "Роздрібна торгівля медичними й ортопедичними товарами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Medical and Orthopaedic Goods in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею медичними та ортопедичними товарами в спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of medical and orthopedic goods in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля парфумними та косметичними товарами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Perfumes and Cosmetics in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею парфумерією та косметикою в спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of perfumes and cosmetics in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля квітами, рослинами, насінням, добривами, домашніми тваринами та кормами для них у спеціалізованих магазинах",
    "nameEn": "Retail Sale of Flowers, Plants, Seeds, Fertilisers, Pet Animals and Pet Food in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею квітами, рослинами, насінням, добривами, домашніми тваринами та кормами для них у спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of flowers, plants, seeds, fertilizers, pet animals, and pet food in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля годинниками та ювелірними виробами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Watches and Jewellery in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею годинниками та ювелірними виробами в спеціалізованих магазинах.",
    "descriptionEn": "Professions related to the retail sale of watches and jewelry in specialized stores."
  },
  {
    "nameUa": "Роздрібна торгівля іншими новими товарами в спеціалізованих магазинах",
    "nameEn": "Retail Sale of Other New Goods in Specialised Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею іншими новими товарами в спеціалізованих магазинах, такими як книги, іграшки, спортивні товари тощо.",
    "descriptionEn": "Professions related to the retail sale of other new goods in specialized stores, such as books, toys, sports goods, etc."
  },
  {
    "nameUa": "Роздрібна торгівля уживаними товарами в магазинах",
    "nameEn": "Retail Sale of Second-Hand Goods in Stores",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею уживаними товарами в магазинах.",
    "descriptionEn": "Professions related to the retail sale of second-hand goods in stores."
  },
  {
    "nameUa": "Роздрібна торгівля через посилки поштою або через мережу Інтернет",
    "nameEn": "Retail Sale via Mail Order Houses or via Internet",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею товарами через поштові замовлення або інтернет-магазини.",
    "descriptionEn": "Professions related to the retail sale of goods via mail order or online stores."
  },
  {
    "nameUa": "Роздрібна торгівля з лотків і на ринках іншими товарами",
    "nameEn": "Retail Sale via Stalls and Markets of Other Goods",
    "descriptionUa": "Професії, пов'язані з роздрібною торгівлею різними товарами з лотків та на ринках.",
    "descriptionEn": "Professions related to the retail sale of various goods from stalls and in markets."
  },
  {
    "nameUa": "Інші види роздрібної торгівлі поза магазинами",
    "nameEn": "Other Retail Sale Not in Stores, Stalls or Markets",
    "descriptionUa": "Професії, пов'язані з іншими видами роздрібної торгівлі поза магазинами, лотками та ринками, такими як комівояжери, торгові автомати тощо.",
    "descriptionEn": "Professions related to other types of retail sale not in stores, stalls, or markets, such as door-to-door sales, vending machines, etc."
  },
  {
    "nameUa": "Пасажирський наземний транспорт міського та приміського сполучення",
    "nameEn": "Urban and Suburban Passenger Land Transport",
    "descriptionUa": "Професії, пов'язані з пасажирськими перевезеннями наземним транспортом у межах міста та приміській зоні.",
    "descriptionEn": "Professions related to passenger transportation by land within urban and suburban areas."
  },
  {
    "nameUa": "Інші види пасажирського наземного транспорту",
    "nameEn": "Other Passenger Land Transport",
    "descriptionUa": "Професії, пов'язані з іншими видами пасажирських перевезень наземним транспортом, такими як міжміські автобусні перевезення, таксі тощо.",
    "descriptionEn": "Professions related to other types of passenger transportation by land, such as intercity bus services, taxis, etc."
  },
  {
    "nameUa": "Пасажирський водний транспорт",
    "nameEn": "Passenger Water Transport",
    "descriptionUa": "Професії, пов'язані з пасажирськими перевезеннями водним транспортом.",
    "descriptionEn": "Professions related to passenger transportation by water."
  },
  {
    "nameUa": "Пасажирський повітряний транспорт",
    "nameEn": "Passenger Air Transport",
    "descriptionUa": "Професії, пов'язані з пасажирськими перевезеннями повітряним транспортом.",
    "descriptionEn": "Professions related to passenger transportation by air."
  },
  {
    "nameUa": "Вантажний автомобільний транспорт",
    "nameEn": "Freight Road Transport",
    "descriptionUa": "Професії, пов'язані з вантажними перевезеннями автомобільним транспортом.",
    "descriptionEn": "Professions related to freight transportation by road."
  },
  {
    "nameUa": "Вантажний залізничний транспорт",
    "nameEn": "Freight Rail Transport",
    "descriptionUa": "Професії, пов'язані з вантажними перевезеннями залізничним транспортом.",
    "descriptionEn": "Professions related to freight transportation by rail."
  },
  {
    "nameUa": "Вантажний водний транспорт",
    "nameEn": "Freight Water Transport",
    "descriptionUa": "Професії, пов'язані з вантажними перевезеннями водним транспортом.",
    "descriptionEn": "Professions related to freight transportation by water."
  },
  {
    "nameUa": "Вантажний повітряний транспорт",
    "nameEn": "Freight Air Transport",
    "descriptionUa": "Професії, пов'язані з вантажними перевезеннями повітряним транспортом.",
    "descriptionEn": "Professions related to freight transportation by air."
  },
  {
    "nameUa": "Трубопровідний транспорт",
    "nameEn": "Transport via Pipelines",
    "descriptionUa": "Професії, пов'язані з транспортуванням рідин та газів трубопроводами.",
    "descriptionEn": "Professions related to the transportation of liquids and gases via pipelines."
  },
  {
    "nameUa": "Складське господарство",
    "nameEn": "Warehousing and Storage",
    "descriptionUa": "Професії, пов'язані зі складським зберіганням товарів.",
    "descriptionEn": "Professions related to the warehousing and storage of goods."
  },
  {
    "nameUa": "Допоміжне обслуговування наземного транспорту",
    "nameEn": "Service Activities Incidental to Land Transportation",
    "descriptionUa": "Професії, що надають допоміжні послуги для наземного транспорту, такі як організація перевезень, термінали тощо.",
    "descriptionEn": "Professions providing support services for land transportation, such as transport organization, terminals, etc."
  },
  {
    "nameUa": "Допоміжне обслуговування водного транспорту",
    "nameEn": "Service Activities Incidental to Water Transportation",
    "descriptionUa": "Професії, що надають допоміжні послуги для водного транспорту, такі як портові операції, навігаційне забезпечення тощо.",
    "descriptionEn": "Professions providing support services for water transportation, such as port operations, navigational support, etc."
  },
  {
    "nameUa": "Допоміжне обслуговування повітряного транспорту",
    "nameEn": "Service Activities Incidental to Air Transportation",
    "descriptionUa": "Професії, що надають допоміжні послуги для повітряного транспорту, такі як аеродромне обслуговування, управління повітряним рухом тощо.",
    "descriptionEn": "Professions providing support services for air transportation, such as airport operations, air traffic control, etc."
  },
  {
    "nameUa": "Оброблення вантажів",
    "nameEn": "Cargo Handling",
    "descriptionUa": "Професії, пов'язані з навантаженням, розвантаженням та переміщенням вантажів.",
    "descriptionEn": "Professions related to the loading, unloading, and handling of cargo."
  },
  {
    "nameUa": "Інша допоміжна діяльність у сфері транспорту",
    "nameEn": "Other Supporting Transport Activities",
    "descriptionUa": "Професії, пов'язані з іншою допоміжною діяльністю у сфері транспорту, не включеною до попередніх категорій.",
    "descriptionEn": "Professions related to other supporting transport activities not included in previous categories."
  },
  {
    "nameUa": "Поштова та кур'єрська діяльність",
    "nameEn": "Postal and Courier Activities",
    "descriptionUa": "Професії, пов'язані з наданням послуг поштового зв'язку та кур'єрською доставкою.",
    "descriptionEn": "Professions related to providing postal services and courier delivery."
  },
  {
    "nameUa": "Діяльність готелів і подібних засобів тимчасового розміщування",
    "nameEn": "Hotels and Similar Accommodation",
    "descriptionUa": "Професії, пов'язані з роботою готелів, мотелів та інших закладів тимчасового проживання.",
    "descriptionEn": "Professions related to the operation of hotels, motels, and other temporary accommodation facilities."
  },
  {
    "nameUa": "Діяльність засобів розміщування на період відпустки та іншого тимчасового проживання",
    "nameEn": "Holiday and Other Short-Stay Accommodation",
    "descriptionUa": "Професії, пов'язані з роботою хостелів, апартаментів для короткострокової оренди та інших подібних закладів.",
    "descriptionEn": "Professions related to the operation of hostels, short-term rental apartments, and other similar establishments."
  },
  {
    "nameUa": "Діяльність кемпінгів і стоянок для житлових автофургонів і причепів",
    "nameEn": "Camping Sites, Recreational Vehicle Parks and Trailer Parks",
    "descriptionUa": "Професії, пов'язані з роботою кемпінгів та стоянок для автофургонів.",
    "descriptionEn": "Professions related to the operation of campsites and recreational vehicle parks."
  },
  {
    "nameUa": "Інші види тимчасового розміщування",
    "nameEn": "Other Accommodation",
    "descriptionUa": "Професії, пов'язані з іншими видами тимчасового розміщування, такими як гуртожитки, пансіонати тощо.",
    "descriptionEn": "Professions related to other types of temporary accommodation, such as dormitories, boarding houses, etc."
  },
  {
    "nameUa": "Діяльність ресторанів, надання послуг мобільного харчування",
    "nameEn": "Restaurants and Mobile Food Service Activities",
    "descriptionUa": "Професії, пов'язані з роботою ресторанів, кафе та наданням послуг виїзного харчування.",
    "descriptionEn": "Professions related to the operation of restaurants, cafes, and mobile food services."
  },
  {
    "nameUa": "Діяльність із постачання готової їжі",
    "nameEn": "Food and Beverage Service Activities",
    "descriptionUa": "Професії, пов'язані з доставкою готової їжі додому або в офіс.",
    "descriptionEn": "Professions related to the delivery of prepared food to homes or offices."
  },
  {
    "nameUa": "Діяльність барів",
    "nameEn": "Bars",
    "descriptionUa": "Професії, пов'язані з роботою барів та інших закладів, що спеціалізуються на продажу напоїв.",
    "descriptionEn": "Professions related to the operation of bars and other establishments specializing in the sale of beverages."
  },
  {
    "nameUa": "Діяльність їдалень",
    "nameEn": "Canteens and Caterers",
    "descriptionUa": "Професії, пов'язані з роботою їдалень та організацією харчування на підприємствах та в установах.",
    "descriptionEn": "Professions related to the operation of canteens and the provision of catering services at businesses and institutions."
  },
  {
    "nameUa": "Інша діяльність із забезпечення стравами та напоями",
    "nameEn": "Other Food Service Activities",
    "descriptionUa": "Професії, пов'язані з іншими видами діяльності з забезпечення стравами та напоями, не включеними до попередніх категорій.",
    "descriptionEn": "Professions related to other food and beverage service activities not included in previous categories."
  },
  {
    "nameUa": "Видання книг",
    "nameEn": "Publishing of Books",
    "descriptionUa": "Професії, пов'язані з підготовкою до видання та випуском книг.",
    "descriptionEn": "Professions related to the preparation for publication and release of books."
  },
  {
    "nameUa": "Видання газет",
    "nameEn": "Publishing of Newspapers",
    "descriptionUa": "Професії, пов'язані з підготовкою до видання та випуском газет.",
    "descriptionEn": "Professions related to the preparation for publication and release of newspapers."
  },
  {
    "nameUa": "Видання журналів і періодичних видань",
    "nameEn": "Publishing of Journals and Periodicals",
    "descriptionUa": "Професії, пов'язані з підготовкою до видання та випуском журналів та інших періодичних видань.",
    "descriptionEn": "Professions related to the preparation for publication and release of journals and other periodicals."
  },
  {
    "nameUa": "Видання довідників і каталогів",
    "nameEn": "Publishing of Directories and Mailing Lists",
    "descriptionUa": "Професії, пов'язані з виданням довідників, каталогів та списків розсилки.",
    "descriptionEn": "Professions related to the publication of directories, catalogs, and mailing lists."
  },
  {
    "nameUa": "Видання іншої друкованої продукції",
    "nameEn": "Publishing of Other Printed Matter",
    "descriptionUa": "Професії, пов'язані з виданням іншої друкованої продукції, такої як ноти, карти тощо.",
    "descriptionEn": "Professions related to the publication of other printed matter, such as music scores, maps, etc."
  },
  {
    "nameUa": "Видання програмного забезпечення",
    "nameEn": "Publishing of Software",
    "descriptionUa": "Професії, пов'язані з розробкою та виданням програмного забезпечення.",
    "descriptionEn": "Professions related to the development and publishing of software."
  },
  {
    "nameUa": "Видання відеоігор",
    "nameEn": "Publishing of Video Games",
    "descriptionUa": "Професії, пов'язані з розробкою та виданням відеоігор.",
    "descriptionEn": "Professions related to the development and publishing of video games."
  },
  {
    "nameUa": "Видання музичних записів",
    "nameEn": "Publishing of Music",
    "descriptionUa": "Професії, пов'язані з продюсуванням, розповсюдженням та іншим виданням музичних записів.",
    "descriptionEn": "Professions related to the production, distribution, and other publishing of music recordings."
  },
  {
    "nameUa": "Радіомовлення",
    "nameEn": "Radio Broadcasting",
    "descriptionUa": "Професії, пов'язані з підготовкою та трансляцією радіопрограм.",
    "descriptionEn": "Professions related to the preparation and broadcasting of radio programs."
  },
  {
    "nameUa": "Телевізійне мовлення",
    "nameEn": "Television Broadcasting",
    "descriptionUa": "Професії, пов'язані з підготовкою та трансляцією телевізійних програм.",
    "descriptionEn": "Professions related to the preparation and broadcasting of television programs."
  },
  {
    "nameUa": "Діяльність інформаційних агентств",
    "nameEn": "News Agency Activities",
    "descriptionUa": "Професії, пов'язані зі збором та розповсюдженням новин та інформації для засобів масової інформації.",
    "descriptionEn": "Professions related to the gathering and distribution of news and information to the media."
  },
  {
    "nameUa": "Інша інформаційна діяльність",
    "nameEn": "Other Information Service Activities N.E.C.",
    "descriptionUa": "Професії, пов'язані з іншою інформаційною діяльністю, не включеною до попередніх категорій.",
    "descriptionEn": "Professions related to other information service activities not included in previous categories."
  },
  {
    "nameUa": "Кіно- та відеовиробництво, телевізійні програми",
    "nameEn": "Motion Picture, Video and Television Programme Production Activities",
    "descriptionUa": "Професії, пов'язані з виробництвом кінофільмів, відеороликів та телевізійних програм.",
    "descriptionEn": "Professions related to the production of motion pictures, video recordings, and television programs."
  },
  {
    "nameUa": "Розповсюдження кіно- та відеофільмів, телевізійних програм",
    "nameEn": "Motion Picture, Video and Television Programme Distribution Activities",
    "descriptionUa": "Професії, пов'язані з розповсюдженням кінофільмів, відеороликів та телевізійних програм.",
    "descriptionEn": "Professions related to the distribution of motion pictures, video recordings, and television programs."
  },
  {
    "nameUa": "Демонстрація кінофільмів",
    "nameEn": "Motion Picture Projection Activities",
    "descriptionUa": "Професії, пов'язані з показом кінофільмів у кінотеатрах.",
    "descriptionEn": "Professions related to the screening of motion pictures in cinemas."
  },
  {
    "nameUa": "Діяльність у сфері радіомовлення та телевізійного мовлення",
    "nameEn": "Sound Recording and Music Publishing Activities",
    "descriptionUa": "Професії, пов'язані із записом звуку та виданням музичних творів.",
    "descriptionEn": "Professions related to sound recording and the publishing of musical works."
  },
  {
    "nameUa": "Телекомунікації",
    "nameEn": "Telecommunications",
    "descriptionUa": "Професії, пов'язані з наданням послуг зв'язку, включаючи телефонний, мобільний та інтернет-зв'язок.",
    "descriptionEn": "Professions related to providing communication services, including telephone, mobile, and internet services."
  },
  {
    "nameUa": "Комп'ютерне програмування",
    "nameEn": "Computer Programming Activities",
    "descriptionUa": "Професії, пов'язані з написанням та розробкою комп'ютерних програм.",
    "descriptionEn": "Professions related to writing and developing computer programs."
  },
  {
    "nameUa": "Консультування з питань інформатизації",
    "nameEn": "Computer Consultancy Activities",
    "descriptionUa": "Професії, пов'язані з наданням консультацій з питань інформаційних технологій та комп'ютерних систем.",
    "descriptionEn": "Professions related to providing advice on information technology and computer systems."
  },
  {
    "nameUa": "Керування комп'ютерним устаткуванням",
    "nameEn": "Computer Facilities Management Activities",
    "descriptionUa": "Професії, пов'язані з управлінням та обслуговуванням комп'ютерних систем та мереж.",
    "descriptionEn": "Professions related to the management and maintenance of computer systems and networks."
  },
  {
    "nameUa": "Оброблення даних, розміщення інформації на веб-вузлах (хостинг) і пов'язана з цим діяльність",
    "nameEn": "Data Processing, Hosting and Related Activities",
    "descriptionUa": "Професії, пов'язані з обробкою даних, хостингом веб-сайтів та іншими пов'язаними послугами.",
    "descriptionEn": "Professions related to data processing, website hosting, and other related services."
  },
  {
    "nameUa": "Інша діяльність у сфері інформаційних технологій і комп'ютерних послуг",
    "nameEn": "Other Information Technology and Computer Service Activities",
    "descriptionUa": "Професії, пов'язані з іншими послугами у сфері інформаційних технологій та комп'ютерів, не включеними до попередніх категорій.",
    "descriptionEn": "Professions related to other information technology and computer services not included in previous categories."
  },
  {
    "nameUa": "Дослідження й розробки у сфері природничих і технічних наук",
    "nameEn": "Research and Experimental Development on Natural Sciences and Engineering",
    "descriptionUa": "Професії, пов'язані з фундаментальними та прикладними дослідженнями в галузі природничих і технічних наук.",
    "descriptionEn": "Professions related to fundamental and applied research in the field of natural sciences and engineering."
  },
  {
    "nameUa": "Дослідження й розробки у сфері гуманітарних і суспільних наук",
    "nameEn": "Research and Experimental Development on Social Sciences and Humanities",
    "descriptionUa": "Професії, пов'язані з фундаментальними та прикладними дослідженнями в галузі гуманітарних і суспільних наук.",
    "descriptionEn": "Professions related to fundamental and applied research in the field of social sciences and humanities."
  },
  {
    "nameUa": "Діяльність головних управлінь (хед-офісів)",
    "nameEn": "Activities of Head Offices",
    "descriptionUa": "Професії, пов'язані з управлінням та стратегічним плануванням компаній на рівні головних офісів.",
    "descriptionEn": "Professions related to the management and strategic planning of companies at the level of head offices."
  },
  {
    "nameUa": "Консультування з питань управління",
    "nameEn": "Management Consultancy Activities",
    "descriptionUa": "Професії, пов'язані з наданням консультацій підприємствам з питань управління, стратегії та організаційної структури.",
    "descriptionEn": "Professions related to providing advice to businesses on management, strategy, and organizational structure."
  },
  {
    "nameUa": "Діяльність у сфері зв'язків із громадськістю",
    "nameEn": "Public Relations and Communication Activities",
    "descriptionUa": "Професії, пов'язані з управлінням комунікаціями та зв'язками з громадськістю для організацій та окремих осіб.",
    "descriptionEn": "Professions related to managing communications and public relations for organizations and individuals."
  },
  {
    "nameUa": "Консультування з питань комерційної діяльності й управління",
    "nameEn": "Business and Management Consultancy Activities",
    "descriptionUa": "Професії, пов'язані з наданням консультацій з питань ведення бізнесу та управління.",
    "descriptionEn": "Professions related to providing advice on business operations and management."
  },
  {
    "nameUa": "Архітектурна та інженерна діяльність і пов'язані з нею послуги технічного консультування",
    "nameEn": "Architectural and Engineering Activities and Related Technical Consultancy",
    "descriptionUa": "Професії архітекторів, інженерів та інших фахівців, що надають консультації в галузі будівництва та проектування.",
    "descriptionEn": "Professions of architects, engineers, and other specialists providing consultancy in the field of construction and design."
  },
  {
    "nameUa": "Технічні випробування та аналізування",
    "nameEn": "Technical Testing and Analysis",
    "descriptionUa": "Професії, пов'язані з проведенням технічних випробувань та аналізів різних матеріалів, виробів та процесів.",
    "descriptionEn": "Professions related to conducting technical tests and analyses of various materials, products, and processes."
  },
  {
    "nameUa": "Рекламна діяльність",
    "nameEn": "Advertising",
    "descriptionUa": "Професії, пов'язані зі створенням та розміщенням реклами.",
    "descriptionEn": "Professions related to the creation and placement of advertisements."
  },
  {
    "nameUa": "Дослідження кон'юнктури ринку та вивчення громадської думки",
    "nameEn": "Market Research and Public Opinion Polling",
    "descriptionUa": "Професії, пов'язані з дослідженням ринку, аналізом споживчої поведінки та вивченням громадської думки.",
    "descriptionEn": "Professions related to market research, analysis of consumer behavior, and public opinion polling."
  },
  {
    "nameUa": "Інша професійна, наукова та технічна діяльність, н.в.і.у.",
    "nameEn": "Other Professional, Scientific and Technical Activities N.E.C.",
    "descriptionUa": "Професії, пов'язані з іншою професійною, науковою та технічною діяльністю, не включеною до попередніх категорій.",
    "descriptionEn": "Professions related to other professional, scientific, and technical activities not included in previous categories."
  },
  {
    "nameUa": "Ветеринарна діяльність",
    "nameEn": "Veterinary Activities",
    "descriptionUa": "Професії ветеринарних лікарів та іншого персоналу, пов'язаного з охороною здоров'я тварин.",
    "descriptionEn": "Professions of veterinary doctors and other personnel related to animal health care."
  },
  {
    "nameUa": "Оренда та лізинг сільськогосподарських машин і устатковання",
    "nameEn": "Renting and Leasing of Agricultural Machinery and Equipment",
    "descriptionUa": "Професії, пов'язані з наданням в оренду сільськогосподарської техніки та обладнання.",
    "descriptionEn": "Professions related to the rental of agricultural machinery and equipment."
  },
  {
    "nameUa": "Оренда та лізинг будівельних машин і устатковання",
    "nameEn": "Renting and Leasing of Construction and Civil Engineering Machinery and Equipment",
    "descriptionUa": "Професії, пов'язані з наданням в оренду будівельної техніки та обладнання.",
    "descriptionEn": "Professions related to the rental of construction and civil engineering machinery and equipment."
  },
  {
    "nameUa": "Оренда та лізинг інших машин, устатковання та матеріальних засобів, н.в.і.у.",
    "nameEn": "Renting and Leasing of Other Machinery, Equipment and Tangible Goods N.E.C.",
    "descriptionUa": "Професії, пов'язані з наданням в оренду інших машин, обладнання та матеріальних засобів, не включених до попередніх категорій.",
    "descriptionEn": "Professions related to the rental of other machinery, equipment, and tangible goods not included in previous categories."
  },
  {
    "nameUa": "Лізинг інтелектуальної власності та подібних продуктів, крім захищених авторським правом",
    "nameEn": "Leasing of Intellectual Property and Similar Products, Except Copyrighted Works",
    "descriptionUa": "Професії, пов'язані з наданням в лізинг патентів, торгових марок та інших об'єктів інтелектуальної власності, крім авторських прав.",
    "descriptionEn": "Professions related to the leasing of patents, trademarks, and other intellectual property objects, excluding copyrights."
  },
  {
    "nameUa": "Діяльність агентств працевлаштування",
    "nameEn": "Employment Placement Activities",
    "descriptionUa": "Професії, пов'язані з наданням послуг з працевлаштування та підбору персоналу.",
    "descriptionEn": "Professions related to providing employment placement and personnel recruitment services."
  },
  {
    "nameUa": "Діяльність агентств тимчасового працевлаштування",
    "nameEn": "Temporary Employment Agency Activities",
    "descriptionUa": "Професії, пов'язані з наданням послуг з тимчасового працевлаштування.",
    "descriptionEn": "Professions related to providing temporary employment services."
  },
  {
    "nameUa": "Інша діяльність із забезпечення трудовими ресурсами",
    "nameEn": "Other Human Resources Provision",
    "descriptionUa": "Професії, пов'язані з іншими послугами у сфері забезпечення трудовими ресурсами, такими як аутсорсинг персоналу.",
    "descriptionEn": "Professions related to other human resources provision services, such as personnel outsourcing."
  },
  {
    "nameUa": "Діяльність туристичних агентств",
    "nameEn": "Travel Agency Activities",
    "descriptionUa": "Професії, пов'язані з наданням послуг туристичними агентствами з організації подорожей та турів.",
    "descriptionEn": "Professions related to providing services by travel agencies in organizing trips and tours."
  },
  {
    "nameUa": "Діяльність туристичних операторів",
    "nameEn": "Tour Operator Activities",
    "descriptionUa": "Професії, пов'язані з діяльністю туристичних операторів зі створення та просування туристичних пакетів і турів.",
    "descriptionEn": "Professions related to the activities of tour operators in creating and promoting tourist packages and tours."
  },
  {
    "nameUa": "Інша діяльність у сфері туризму",
    "nameEn": "Other Reservation Service Activities and Related Activities",
    "descriptionUa": "Професії, пов'язані з іншою діяльністю у сфері туризму, такою як бронювання квитків, розміщення тощо.",
    "descriptionEn": "Professions related to other tourism activities, such as ticket booking, accommodation reservations, etc."
  },
  {
    "nameUa": "Надання інших індивідуальних послуг, н.в.і.у.",
    "nameEn": "Other Personal Service Activities N.E.C.",
    "descriptionUa": "Професії, пов'язані з наданням інших індивідуальних послуг, не включених до попередніх категорій.",
    "descriptionEn": "Professions related to other personal service activities not included in previous categories."
  },
  {
    "nameUa": "Діяльність домашніх господарств як роботодавців для домашньої прислуги",
    "nameEn": "Activities of Households as Employers of Domestic Personnel",
    "descriptionUa": "Професії, пов'язані з наймом та управлінням домашньою прислугою.",
    "descriptionEn": "Professions related to the employment and management of domestic staff."
  },
  {
    "nameUa": "Діяльність екстериторіальних організацій і органів",
    "nameEn": "Activities of Extraterritorial Organizations and Bodies",
    "descriptionUa": "Професії, пов'язані з роботою міжнародних організацій та органів.",
    "descriptionEn": "Professions related to the work of international organizations and bodies."
  },
  {
    "nameUa": "Державне управління загального характеру",
    "nameEn": "General Public Administration Activities",
    "descriptionUa": "Професії, пов'язані з загальним управлінням на державному рівні.",
    "descriptionEn": "Professions related to general public administration at the state level."
  },
  {
    "nameUa": "Управління у сферах економічної та соціальної політики держави",
    "nameEn": "Administration of Economic and Social Policy",
    "descriptionUa": "Професії, пов'язані з розробкою та реалізацією державної економічної та соціальної політики.",
    "descriptionEn": "Professions related to the development and implementation of state economic and social policy."
  },
  {
    "nameUa": "Обов'язкове соціальне страхування",
    "nameEn": "Compulsory Social Security Activities",
    "descriptionUa": "Професії, пов'язані з діяльністю фондів обов'язкового соціального страхування.",
    "descriptionEn": "Professions related to the activities of compulsory social security funds."
  },
  {
    "nameUa": "Діяльність у сфері оборони",
    "nameEn": "Defence Activities",
    "descriptionUa": "Професії, пов'язані з військовою службою та діяльністю у сфері оборони.",
    "descriptionEn": "Professions related to military service and activities in the field of defense."
  },
  {
    "nameUa": "Діяльність у сфері охорони громадського порядку та безпеки",
    "nameEn": "Public Order and Safety Activities",
    "descriptionUa": "Професії, пов'язані з діяльністю поліції, пожежної охорони та інших служб, що забезпечують громадський порядок та безпеку.",
    "descriptionEn": "Professions related to the activities of the police, fire department, and other services ensuring public order and safety."
  },
  {
    "nameUa": "Діяльність у сфері правосуддя",
    "nameEn": "Judicial Activities",
    "descriptionUa": "Професії суддів, прокурорів та іншого персоналу, пов'язаного зі здійсненням правосуддя.",
    "descriptionEn": "Professions of judges, prosecutors, and other personnel related to the administration of justice."
  },
  {
    "nameUa": "Діяльність центральних органів державного управління",
    "nameEn": "Activities of Central Government Bodies",
    "descriptionUa": "Професії, пов'язані з роботою міністерств, відомств та інших центральних органів виконавчої влади.",
    "descriptionEn": "Professions related to the work of ministries, departments, and other central executive bodies."
  },
  {
    "nameUa": "Діяльність місцевих органів державного управління",
    "nameEn": "Activities of Regional and Local Government Bodies",
    "descriptionUa": "Професії, пов'язані з роботою обласних, районних та місцевих органів влади.",
    "descriptionEn": "Professions related to the work of regional, district, and local government bodies."
  },
  {
    "nameUa": "Освіта",
    "nameEn": "Education",
    "descriptionUa": "Професії в галузі дошкільної, шкільної, професійно-технічної та вищої освіти.",
    "descriptionEn": "Professions in the field of preschool, school, vocational, and higher education."
  },
  {
    "nameUa": "Охорона здоров'я",
    "nameEn": "Human Health Activities",
    "descriptionUa": "Професії лікарів, медсестер та іншого медичного персоналу, пов'язаного з наданням медичної допомоги.",
    "descriptionEn": "Professions of doctors, nurses, and other medical personnel related to the provision of medical care."
  },
  {
    "nameUa": "Діяльність із догляду за хворими із забезпеченням проживання",
    "nameEn": "Residential Care Activities",
    "descriptionUa": "Професії, пов'язані з наданням послуг догляду за особами похилого віку та інвалідами в спеціалізованих закладах.",
    "descriptionEn": "Professions related to providing care services for the elderly and disabled in specialized institutions."
  },
  {
    "nameUa": "Надання соціальної допомоги без забезпечення проживання",
    "nameEn": "Social Work Activities without Accommodation",
    "descriptionUa": "Професії, пов'язані з наданням соціальної допомоги населенню без забезпечення проживання.",
    "descriptionEn": "Professions related to providing social assistance to the population without accommodation."
  },
  {
    "nameUa": "Творча діяльність, діяльність у сфері мистецтва та розваг",
    "nameEn": "Creative, Arts and Entertainment Activities",
    "descriptionUa": "Професії, пов'язані з мистецтвом, виконавською діяльністю, літературою та іншими видами творчості та розваг.",
    "descriptionEn": "Professions related to art, performing arts, literature, and other forms of creativity and entertainment."
  },
  {
    "nameUa": "Діяльність бібліотек, архівів, музеїв та інша діяльність у сфері культури",
    "nameEn": "Libraries, Archives, Museums and Other Cultural Activities",
    "descriptionUa": "Професії, пов'язані з роботою бібліотек, архівів, музеїв та інших культурних закладів.",
    "descriptionEn": "Professions related to the work of libraries, archives, museums, and other cultural institutions."
  },
  {
    "nameUa": "Діяльність спортивних об'єктів",
    "nameEn": "Operation of Sports Facilities",
    "descriptionUa": "Професії, пов'язані з управлінням та експлуатацією спортивних споруд, таких як стадіони, басейни, спортивні зали.",
    "descriptionEn": "Professions related to the management and operation of sports facilities such as stadiums, swimming pools, sports halls."
  }
];

export default categories;