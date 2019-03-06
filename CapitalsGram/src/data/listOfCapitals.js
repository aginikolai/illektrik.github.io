const list = [
    {
        name: 'Moscow',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%B2_%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83_%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B9_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8.jpg/1280px-%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%B2_%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83_%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B9_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8.jpg',
        about: 'Moscow is a major political, economic, cultural, and scientific center of Russia and Eastern Europe, as well as the largest city (both by population and by area) entirely on the European continent. By broader definitions Moscow is among the worlds largest cities, being the 14th largest metro area, the 18th largest agglomeration, the 14th largest urban area, and the 11th largest by population within city limits worldwide. According to Forbes 2013, Moscow has been ranked as the ninth most expensive city in the world by Mercer and has one of the worlds largest urban economies, being ranked as an alpha global city according to the Globalization and World Cities Research Network, and is also one of the fastest growing tourist destinations in the world according to the MasterCard Global Destination Cities Index.',
        likes: 208
    },
    {
        name: 'London',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1500px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg',
        about: 'London  is the capital and largest city of both England and the United Kingdom. Standing on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea, London has been a major settlement for two millennia. Londinium was founded by the Romans. The City of London, London ancient core − an area of just 1.12 square miles (2.9 km2) and colloquially known as the Square Mile − retains boundaries that follow closely its medieval limits. The City of Westminster is also an Inner London borough holding city status. Greater London is governed by the Mayor of London and the London Assembly',
        likes: 166
    },
    {
        name: 'Jakarta',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/SCBD_Jakarta.jpg/1280px-SCBD_Jakarta.jpg',
        about: 'Jakarta (/dʒəˈkɑːrtə/; Indonesian pronunciation: [dʒaˈkarta]), officially the Special Capital Region of Jakarta (Indonesian: Daerah Khusus Ibu Kota Jakarta), is the capital and largest city of Indonesia. Located on the northwest coast of the worlds most populous island Java, it is the centre of economics, culture and politics of Indonesia, with a population of 10,075,310 as of 2014. Jakarta metropolitan area has an area of 6,392 square kilometers, which is known as Jabodetabek (an acronym of Jakarta, Bogor, Depok, Tangerang and Bekasi). It is the worlds second largest urban agglomeration (after Tokyo) with a population of 30,214,303 as of 2010. Jakarta is predicted to reach 35.6 million people by 2030 to become the worlds biggest megacity. Jakartas business opportunities, as well as its potential to offer a higher standard of living, attract migrants from across the Indonesian archipelago, combining many communities and cultures',
        likes: 63
    },
    {
        name: 'Paris',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG/1280px-Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG',
        about: 'Paris (French pronunciation: ​[paʁi] ) is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and an official estimated population of 2,140,526 residents as of 1 January 2019. Since the 17th century, Paris has been one of Europes major centres of finance, commerce, fashion, science, and the arts.',
        likes: 118
    },
    {
        name: 'Buenos Aires',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/High-rises_of_Puerto_Madero_%2840022145164%29.jpg/1024px-High-rises_of_Puerto_Madero_%2840022145164%29.jpg',
        about: `Buenos Aires (/ˌbweɪnəs ˈɛəriːz/ or /-ˈaɪrɪs/; Spanish pronunciation: [ˈbwenos ˈaiɾes]) is the capital and largest city of Argentina. The city is located on the western shore of the estuary of the Río de la Plata, on the South American continent's southeastern coast. "Buenos Aires" can be translated as "fair winds" or "good airs", but the former was the meaning intended by the founders in the 16th century, by the use of the original name "Real de Nuestra Señora Santa María del Buen Ayre". The Greater Buenos Aires conurbation, which also includes several Buenos Aires Province districts, constitutes the fourth-most populous metropolitan area in the Americas, with a population of around 14 million`,
        likes: 91
    },
    {
        name: 'Tokyo',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Shibuya_crossing.jpg/1280px-Shibuya_crossing.jpg',
        about: `Tokyo (東京 Tōkyō, /ˈtoʊkioʊ/; Japanese: [toːkʲoː] ), officially Tokyo Metropolis (東京都 Tōkyō-to), one of the 47 prefectures of Japan, has served as the Japanese capital since 1869. As of 2014, the Greater Tokyo Area ranked as the most populous metropolitan area in the world. The urban area houses the seat of the Emperor of Japan, of the Japanese government and of the National Diet. Tokyo forms part of the Kantō region on the southeastern side of Japan's main island, Honshu, and includes the Izu Islands and Ogasawara Islands. Tokyo was formerly named Edo when Shōgun Tokugawa Ieyasu made the city his headquarters in 1603. It became the capital after Emperor Meiji moved his seat to the city from Kyoto in 1868; at that time Edo was renamed Tokyo. Tokyo Metropolis formed in 1943 from the merger of the former Tokyo Prefecture (東京府 Tōkyō-fu) and the city of Tokyo (東京市 Tōkyō-shi). Tokyo is often referred to as a city but is officially known and governed as a "metropolitan prefecture", which differs from and combines elements of a city and a prefecture, a characteristic unique to Tokyo.`,
        likes: 224
    },
    {
        name: 'Ankara',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/ANKARA_KOCATEPE_CAM%C4%B0%C4%B0.jpg/1920px-ANKARA_KOCATEPE_CAM%C4%B0%C4%B0.jpg',
        about: `Ankara (/ˈæŋkərə/; Turkish pronunciation: [ˈaŋkaɾa] ), historically known as Ancyra and Angora, is the capital of Turkey. With a population of 4,587,558 in the urban center (2014) and 5,150,072 in its province (2015), it is Turkey's second largest city after Istanbul (the former imperial capital), having outranked İzmir in the 20th century.`,
        likes: 31
    },
    {
        name: 'Mexico City',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Lago_de_Chapultepec_desde_el_castillo_-_panoramio.jpg/1280px-Lago_de_Chapultepec_desde_el_castillo_-_panoramio.jpg',
        about: `Mexico City, or the City of Mexico (Spanish: Ciudad de México, American Spanish: [sjuˈða(ð) ðe ˈmexiko] ; abbreviated as CDMX, Nahuatl languages: Āltepētl Mēxihco), is the capital of Mexico and the most populous city in North America. Mexico City is one of the most important cultural and financial centres in the Americas. It is located in the Valley of Mexico (Valle de México), a large valley in the high plateaus in the center of Mexico, at an altitude of 2,240 meters (7,350 ft). The city has 16 boroughs.`,
        likes: 125
    },
    {
        name: 'Pretoria',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/CentralPretoria.jpg',
        about: `Pretoria (/prɪˈtɔːriə/; Xhosa: E-Pitoli) is a city in the northern part of Gauteng province in South Africa. It straddles the Apies River and has spread eastwards into the foothills of the Magaliesberg mountains. It is one of the country's three capital cities, serving as the seat of the administrative branch of government (Cape Town is the legislative capital and Bloemfontein the judicial capital), and of foreign embassies to South Africa. Pretoria has a reputation for being an academic city with three universities, the Council for Scientific and Industrial Research (CSIR) and the Human Sciences Research Council. The city also hosts the National Research Foundation and the South African Bureau of Standards making the city a hub for research. Pretoria is the central part of the Tshwane Metropolitan Municipality which was formed by the amalgamation of several former local authorities including Centurion and Soshanguve. There have been proposals to change the name of Pretoria itself to Tshwane, and the proposed name change has caused some public controversy.`,
        likes: 13
    },
    {
        name: 'Amsterdam',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Amsterdam_Canal_Tour.jpg/1280px-Amsterdam_Canal_Tour.jpg',
        about: `Amsterdam (/ˈæmstərdæm/, UK also /ˌæmstərˈdæm/; Dutch: [ɑmstərˈdɑm]  is the capital city and most populous municipality of the Netherlands. Its status as the capital is mandated by the Constitution of the Netherlands, although it is not the seat of the government, which is The Hague. Amsterdam has a population of 846,948 within the city proper, 1,347,224 in the urban area and 2,410,960 in the metropolitan area. The city is located in the province of North Holland in the west of the country but is not its capital, which is Haarlem. The Amsterdam metropolitan area comprises much of the northern part of the Randstad, one of the larger conurbations in Europe, which has a population of approximately 8.1 million.`,
        likes: 310
    },
    {
        name: 'Singapore',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Aerial_view_of_Marina_Bay_Financial_Centre%2C_Singapore%2C_at_night_-_20121010.jpg/1280px-Aerial_view_of_Marina_Bay_Financial_Centre%2C_Singapore%2C_at_night_-_20121010.jpg',
        about: `Singapore (/ˈsɪŋ(ɡ)əpɔːr/ (About this soundlisten)), officially the Republic of Singapore (Malay: Republik Singapura; Chinese: 新加坡共和国; Tamil: சிங்கப்பூர் குடியரசு), is an island city-state in Southeast Asia. It lies one degree (137 kilometres or 85 miles) north of the equator, at the southern tip of the Malay Peninsula, with Indonesia's Riau Islands to the south and Peninsular Malaysia to the north. Singapore's territory consists of one main island along with 62 other islets. Since independence, extensive land reclamation has increased its total size by 23% (130 square kilometres or 50 square miles). The country is known for its transition from a developing to a developed one in a single generation under the leadership of its founder Lee Kuan Yew.`,
        likes: 142
    }
]

export default list;