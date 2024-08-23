var config = {
    style: 'mapbox://styles/krejzifrik/clztrov3300gi01qo5jfz74r6',
    accessToken: 'pk.eyJ1Ijoia3JlanppZnJpayIsImEiOiJjam5lbDltZDAwZzJ5M2tsZm11OHMwN3RwIn0.lauCZyv4NJYpuC1kdqLDSw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Shot That Sparked a World War: The Assassination of Archduke Franz Ferdinand',
    subtitle: 'What happened on that Sunday morning?',
    byline: 'By Sead Borovina | 2024',
    footer: 'Sources: <a href="https://www.arhivsa.ba/" target="_blank">Historijski Arhiv Sarajevo</a>, <a href="https://twitter.com/TheRestHistory" target="_blank">The Rest is History Podcast</a>, <a href="https://twitter.com/infinite_milos" target="_blank">Milos Vojinovic</a>, Wikipedia. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.<br> <a href="https://twitter.com/CapitaineFuture/" target="_blank">Sead Borovina</a>',
    chapters: [
        {
            id: '1-intro',
            alignment: 'center',
            hidden: false,
            title: 'Archduke Franz Ferdinand of Austria, heir presumptive to the Austro-Hungarian throne, and his wife, Sophie, Duchess of Hohenberg, were assassinated on 28 June 1914 by Bosnian Serb student Gavrilo Princip. They were shot at close range while being driven through Sarajevo, the provincial capital of Bosnia and Herzegovina, formally annexed by Austria-Hungary in 1908.',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/1_naslovna.png',
            description: 'The archduke Franz Ferdinand, as Inspector General of the Austro-Hungarian armed forces, arrived in Bosnia on June 25, 1914 to oversee military maneuvers and he was accompanied by his wife Sophie, Duchess of Hohenburg. <br> On 28th of June couple is supposed to officialy visit Sarajevo. <BR> Coincidentally, they also celebrated their 14th wedding anniversary on this day.',
            location: {
                center: [18.23791, 43.64652],
                zoom: 7.87,
                pitch: 45.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                // layer: 'barracks-hospital-station',
                // opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2-arrival',
            alignment: 'left',
            hidden: false,
            title: '9:50 AM - The Arrival',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/2_sarajevo.png',
            description: 'On the morning of Sunday 28 June 1914, Franz Ferdinand and his party proceeded by train from Ilidža Spa, where they stayed, to Sarajevo. Governor Oskar Potiorek met the party at KuK Military Barracks as the train passed the train station and stopped there <BR> <I>There used to be a rail track from Train Station to Military Camp, areas on the map show where original locations were; Today this is area around Kolodvorska street where the train station was and University of Sarajevo Campus & US Embassy where the military camp was.',
            location: {
                center: [18.39384, 43.85578],
                zoom: 16.20,
                pitch: 64.50,
                bearing:   -178.00,
                                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'barracks-hospital-station',
                    opacity: 1,
                },
                {
                    layer: 'barracks-hospital-station label',
                    opacity: 1,
                    duration: 1000,
                },
            ],
            onChapterExit: [
                {
                    layer: 'barracks-hospital-station',
                    opacity: 0,
                },
                {
                    layer: 'barracks-hospital-station label',
                    opacity: 0,
                
                },
            ]
        },
        {
            id: '3-plan',
            alignment: 'left',
            hidden: false,
            title: 'The Plan',
            description: 'Based on the official schedule, the plan started with the visit to the Town Hall 10:10 - 10:30 AM...',
            location: {
                center: [18.43350, 43.85917],
                zoom: 17.42,
                pitch: 54.09,
                bearing: -74.67
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2-city-hall',
                    opacity: 0.5,
                },
            ],
            onChapterExit: [
                {
                    layer: '2-city-hall',
                    opacity: 0,
                },
            ]
        },
        {
            id: '4-plan',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '...continued with opening and tour the new State Museum 10:40 - 11:40 AM...',
            location: {
                center: [18.42555, 43.85917],
                zoom: 18.47,
                pitch: 67.01,
                bearing: 121.61
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2-city-hall',
                    opacity: 0.5,
                },
                {
                    layer: '2-museum',
                    opacity: 0.5,
                },
            ],
            onChapterExit: [
                {
                    layer: '2-city-hall',
                    opacity: 0,
                },
                {
                    layer: '2-museum',
                    opacity: 0,
                },
            ]
        },
        {
            id: '5-plan',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '...and enden with lunch planned from noon to 2 PM. After the lunch they are supposed to ga back to train station, and leave for Ilidza Spa. <BR> <BR> The program and the route have been set.',
            location: {
                center: [18.41680, 43.85901],
                zoom: 14.96,
                pitch: 22.70,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '2-city-hall',
                opacity: 0.5,
            },
            {
                layer: '2-museum',
                opacity: 0.5,
            },
            {
                layer: '1-planned-route',
                opacity: 1,
                duration: 2000,
            },
        ],
            onChapterExit: [
                {
                    layer: '2-city-hall',
                    opacity: 0,
                },
                {
                    layer: '2-museum',
                    opacity: 0,
                },
                {
                    layer: '1-planned-route',
                    opacity: 0,
                },
            ]
        },
        {
            id: '6-start',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/2_startna.png',
            description: 'The motorcade`s first stop on the preannounced program was for a brief inspection of a military barracks. According to the program, at 10:00 AM,the motorcade was to leave the barracks for the town hall by way of the Appel Quay. Six automobiles were waiting. By mistake, three local police officers got into the first car with the chief officer of special security; the special security officers who were supposed to accompany their chief got left behind. The second car carried the Mayor and the Chief of Police of Sarajevo. The third car in the motorcade was a Gräf & Stift 28/32 PS open sports car with its top folded down. Franz Ferdinand, Sophie, Governor Potiorek, and Lieutenant Colonel Count Franz von Harrach rode in this third car.',
            location: {
                center: [18.40162, 43.85537],
                zoom: 16.21,
                pitch: 69.50,
                bearing: 80.76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '2-city-hall',
                opacity: 0.5,
            },
            {
                layer: '2-museum',
                opacity: 0.5,
            },
            {
                layer: '1-planned-route',
                opacity: 1,
            },
            {
                layer: 'barracks-hospital-station',
                opacity: 1,
            },
            {
                layer: 'assasins',
                opacity: 0,
            },
            {
                layer: 'assasins labels',
                opacity: 0,
            },
        ],
            onChapterExit: [
                {
                    layer: '2-city-hall',
                    opacity: 0,
                },
                {
                    layer: '2-museum',
                    opacity: 0,
                },
                {
                    layer: '1-planned-route',
                    opacity: 0,
                },
                {
                    layer: 'barracks-hospital-station',
                    opacity: 0,
                },
            ]
        },
        {
            id: '7-positions',
            alignment: 'left',
            hidden: false,
            title: 'The Assassins',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/3_atentatori.png',
            description: 'The chief operative for the conspiracy in Sarajevo was Danilo Ilić. He made all the plans - and that was made easier by the fact that the route of the Archduke`s motorcade was published in the press. On the morning of Sunday 28 June 1914, Danilo Ilić positioned the six assassins along the motorcade route. Ilić walked the street, exhorting the assassins to bravery.',
            location: {
                center: [18.42683, 43.85735],
                zoom: 16.30,
                pitch: 63.50,
                bearing: 80.76,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: '2-city-hall',
                opacity: 0.5,
            },
            {
                layer: '2-museum',
                opacity: 0.5,
            },
            {
                layer: '1-planned-route',
                opacity: 1,
                            },
            {
                layer: 'assasins',
                opacity: 1,
            },
            {
                layer: 'assasins labels',
                opacity: 1,
            },
        ],
            onChapterExit: [
                {
                    layer: '2-museum',
                    opacity: 0,
                },
                
            ]
        },
        {
            id: '8-positions',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/4_oruzije.png',
            description: 'The motorcade passed the first assassin, Mehmedbašić. Danilo Ilić had placed him in front of the garden of the Mostar Café and armed him with a bomb. Mehmedbašić failed to act. Ilić had placed Vaso Čubrilović furhter down the street from Mehmedbašić, arming him with a pistol and a bomb. He too failed to act. Further along the route, Ilić had placed Nedeljko Čabrinović on the opposite side of the street near the Miljacka river, arming him with a bomb.',
            location: {
                center: [18.42572, 43.85693],
                zoom: 18.64,
                pitch: 63.50,
                bearing: 73.45,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: '2-city-hall',
                opacity: 0.5,
            },
                        {
                layer: '1-planned-route',
                opacity: 1,
                duration: 2000,
            },
            {
                layer: 'assasins',
                opacity: 1,
            },
            {
                layer: 'assasins labels',
                opacity: 1,
            },
        ],
            onChapterExit: [
           
            ]
        },
        {
            id: '9-cubrilovic',
            alignment: 'right',
            hidden: false,
            title: 'The Bomb',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/4_kod_skole.png',
            description: 'At 10:10 AM, Franz Ferdinand`s car <I>(3rd car in the motorcade)</I> approached and Nedeljko Čabrinović made the first attempt. He throw a bomb on the motorcade. The bomb bounced off the folded back convertible cover into the street. The bomb`s timed detonator caused it to explode under the next car, putting that car out of action, leaving a 1-foot-diameter (0.30 m), 6.5-inch-deep (170 mm) crater, and wounding 16–20 people, including Franz Ferdinand`s aide-de-camp. Čabrinović swallowed his cyanide pill and jumped into the Miljacka river. Čabrinović`s suicide attempt failed, as the old cyanide only induced vomiting, and the Miljacka was only 13 cm deep due to the hot, dry summer. Police dragged Čabrinović out of the river, and he was severely beaten by the crowd before being taken into custody.',
            location: {
                center: [18.42655, 43.85719],
                zoom: 20.01,
                pitch: 50.73,
                bearing: -57.07,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '2-city-hall',
                opacity: 0.5,
            },
                        {
                layer: '1-planned-route',
                opacity: 1,
                         },
            {
                layer: 'assasins',
                opacity: 1,
            },
            {
                layer: 'assasins labels',
                opacity: 1,
            },
            {
                layer: 'cars',
                opacity: 0.8,
            },
        ],
            onChapterExit: [
                
                {
                    layer: 'cars',
                    opacity: 0,
                },
            ]
        },
        {
            id: '10-princip',
            alignment: 'right',
            hidden: false,
            title: '',
            description: 'The procession sped away towards the Town Hall leaving the disabled car behind. Cvjetko Popović, Gavrilo Princip, and Trifun Grabež failed to act as the motorcade passed them at high speed.',
            location: {
                center: [18.43112, 43.85884],
                zoom: 17.66,
                pitch: 64.69,
                bearing: -63.20,
            
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '2-city-hall',
                opacity: 0.5,
            },
            {
                layer: '1-planned-route',
                opacity: 1,
            },
            {
                layer: 'assasins',
                opacity: 1,
            },
            {
                layer: 'assasins labels',
                opacity: 1,
            },
            
        ],
            onChapterExit: [
                
                                {
                    layer: '1-planned-route',
                    opacity: 0,
                },
                {
                    layer: 'assasins',
                    opacity: 0,
                },
                {
                    layer: 'assasins labels',
                    opacity: 0,
                },
                
            ]
        },
        {
            id: '11-townhall',
            alignment: 'left',
            hidden: false,
            title: 'The Town Hall',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/6_vijecnica.png',
            description: 'Arriving at the Town Hall for a scheduled reception, Franz Ferdinand showed signs of stress, interrupting a prepared speech of welcome by Mayor Fehim Čurčić to protest: "Mr. Mayor, I came here on a visit and I am greeted with bombs. It is outrageous." Duchess Sophie then calmed Franz Ferdinand, and after a pause the mayor gave his speech. Franz Ferdinand had to wait as his own speech, still wet with blood from being in the damaged car, was brought to him. To the prepared text he added a few remarks about the day`s events thanking the people of Sarajevo for their ovations "as I see in them an expression of their joy at the failure of the attempt at assassination. Officials and members of the Archduke`s party discussed what to do next. The archduke`s chamberlain, Baron Rumerskirch, proposed that the couple remain at the Town Hall until troops could be brought into the city to line the streets. Governor-General Oskar Potiorek vetoed this suggestion on the grounds that soldiers coming straight from maneuvers would not have the dress uniforms appropriate for such duties. "Do you think that Sarajevo is full of assassins?" he concluded.',
            location: {
                center: [18.43350, 43.85917],
                zoom: 17.42,
                pitch: 54.09,
                bearing: -74.67,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2-city-hall',
                    opacity: 0.5,
                },
            ],
            onChapterExit: [
                {
                    layer: '2-city-hall',
                    opacity: 0,
                },
            ]
        },
        
                {
            id: '12-moritz-schiller',
            alignment: 'left',
            hidden: false,
            title: 'Moritz Schiller Delicatessen',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/7_ms.png',
            description: 'After learning that the first assassination attempt had been unsuccessful, Princip thought about a position to assassinate the Archduke on his return journey, and decided to move to a position in front of a nearby food shop (Schiller`s delicatessen), near the Latin Bridge. <BR> <I>Today, this is the spot where Sarajevo Museum 1878-1918 is.',
            location: {
                center: [18.42883, 43.85785],
                zoom: 19.69,
                pitch: 67.19,
                bearing: 0.0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '2-city-hall',
                opacity: 0.5,
            },
            {
                layer: 'moritz-schiller',
                opacity: 0.5,
            },
            {
                layer: '1-planned-route',
                opacity: 1,
                duration: 2000,
            },
            {
                layer: 'assasins',
                opacity: 1,
            },
            {
                layer: 'assasins labels',
                opacity: 1,
            },
            
        ],
            onChapterExit: [
                {
                    layer: '2-city-hall',
                    opacity: 0,
                },
                {
                    layer: 'moritz-schiller',
                    opacity: 0,
                },
                                {
                    layer: '1-planned-route',
                    opacity: 0,
                },
                {
                    layer: 'assasins',
                    opacity: 0,
                },
                {
                    layer: 'assasins labels',
                    opacity: 0,
                },
                {
                    layer: '1-planned-route',
                    opacity: 0,
                },
                
            ]
        },
                {
            id: '13-new-plan',
            alignment: 'right',
            hidden: false,
            title: 'The New Plan',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/7_odlazak.png',
            description: 'Franz Ferdinand and Sophie gave up their planned program in favor of visiting the wounded from the bombing, at the hospital. Count Harrach took up a position on the left-hand running board of Franz Ferdinand`s car to protect the Archduke from any assault from the river side of the street. At 10:45 a.m, Franz Ferdinand and Sophie got back into the motorcade, once again in the third car.In order to ensure the safety of the couple, General Oskar Potiorek decided that the imperial motorcade should travel straight along the Appel Quay to the Sarajevo Hospital so that they could avoid the crowded city center. However, Potiorek failed to communicate his decision to the drivers.',
            location: {
                center: [18.42517, 43.85767],
                zoom: 15.43,
                pitch: 55.07,
                bearing: -22.40,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '2-city-hall',
                opacity: 0.5,
            },
           
            {
                layer: 'moritz-schiller',
                opacity: 0.5,
            },
            {
                layer: '3-changed-route',
                opacity: 1,
            },
            {
                layer: 'barracks-hospital-station',
                opacity: 1,
            },
            {
                layer: 'barracks-hospital-station label',
                opacity: 1,
            },
            
        ],
            onChapterExit: [
                                {
                    layer: 'barracks-hospital-station',
                    opacity: 0,
                },
                                {
                    layer: 'barracks-hospital-station label',
                    opacity: 0,
                },
                
            ]
        },
        {
            id: '14-wrong-turn',
            alignment: 'left',
            hidden: false,
            title: 'The Wrong Turn',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/3_last_photo.png',
            description: 'As a result, the Archduke`s driver, Leopold Lojka, took a right turn at the Latin Bridge just as the two drivers ahead of him had done, following the original route. According to the historian Joachim Remak, the reason for this is that Potiorek`s aide Erik von Merizzi was in the hospital, and was therefore unable to give Lojka the information about the change in plans and the driving route. The Sarajevo Chief of Police Edmund Gerde, who had earlier repeatedly warned Potiorek of insufficient security precautions for the imperial visit, was asked by one of the Archduke`s aides to tell the drivers of the new route, but in the confusion and tensions of the moment, he neglected to do so. <BR> At this point, after the first and second cars of the Archduke`s motorcade suddenly turned right into a side street, leaving the Appel Quay and when the Archduke`s driver followed their route, Governor Potiorek, who was sharing the third vehicle with the Imperial couple, called out to the driver to stop as he was going the wrong way. The driver applied the brakes, and when he attempted to put the car into reverse gear he accidentally stalled the engine close to where Princip was standing, in front of the shop. <I>(some say, after he ate pastry at the Moritz Shiller Delikatessen. <BR> <I> Show is the last photo of Franz Ferdinand. The photographer was standing around 10 meters away from Schiller`s shop and Princip just before the wrong turn was made.',
            location: {
                center: [18.42885, 43.85784],
                zoom: 19.45,
                pitch: 59.07,
                bearing: -12.0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'cars-2',
                opacity: 0.8,
            },
            {
                layer: '1-planned-route',
                opacity: 1,
            },
            {
                layer: 'moritz-schiller',
                opacity: 0.5,
            },
            {
                layer: '3-changed-route',
                opacity: 1,
            },
            {
                layer: 'gavrilo-princip',
                opacity: 1,
            },
            {
                layer: 'gavrilo-princip copy',
                opacity: 1,
            },
            
        ],
            onChapterExit: [
                {
                    layer: 'cars-2',
                    opacity: 0,
                },
                                {
                    layer: '1-planned-route',
                    opacity: 0,
                },
                {
                    layer: '3-changed-route',
                    opacity: 0,
                },
                {
                    layer: 'gavrilo-princip',
                    opacity: 0,
                },
                {
                    layer: 'moritz-schiller',
                    opacity: 0,
                },
                {
                    layer: 'gavrilo-princip copy',
                    opacity: 0,
                },
                
            ]
        },
        {
            id: '15-assassination',
            alignment: 'left',
            hidden: false,
            title: 'The Assassinations',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/4_car.png',
            description: 'The assassin stepped up to the footboard of the car, and shot Franz Ferdinand and Sophie at point‐blank range using a Belgian-made Fabrique Nationale model 1910 .380 caliber pistol. Pistol serial numbers 19074, 19075, 19120 and 19126 were supplied to the assassins; Princip used #19074. According to Albertini, "the first bullet wounded the Archduke in the jugular vein, the second inflicted an abdominal wound on the Duchess." Princip tried to shoot himself, but was immediately seized and arrested. At his sentencing, Princip stated that his intention had been to kill Governor Potiorek, rather than Sophie. <BR> <I> + on the car shows where the bullet penetrated the car door, before hitting Sofia.',
            location: {
                center: [18.42885, 43.85784],
                zoom: 19.45,
                pitch: 59.07,
                bearing: -11.0,
                            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'cars-2',
                opacity: 0.8,
            },
            {
                layer: '1-planned-route',
                opacity: 1,
            },
            {
                layer: 'moritz-schiller',
                opacity: 0.5,
            },
            {
                layer: '3-changed-route',
                opacity: 1,
            },
            {
                layer: 'gavrilo-princip',
                opacity: 1,
            },
            {
                layer: 'gavrilo-princip copy',
                opacity: 1,
            },
            
        ],
            onChapterExit: [
                {
                    layer: 'cars-2',
                    opacity: 0,
                },
                                {
                    layer: '1-planned-route',
                    opacity: 0,
                },
                {
                    layer: '3-changed-route',
                    opacity: 0,
                },
                
                {
                    layer: 'moritz-schiller',
                    opacity: 0,
                },
              
                {
                    layer: '2-city-hall',
                    opacity: 0,
                },
            ]
        },
        {
            id: '16-finale',
            alignment: 'right',
            hidden: false,
            title: 'The End',
            image: 'https://chancecontra.github.io/Sarajevo_1914/images/10_theend.png',
            description: 'After being shot, Sophie immediately fell unconscious and collapsed onto Franz Ferdinands legs. The Archduke, too, lost consciousness while being driven to the Governor`s residence for medical treatment. As reported by Count Harrach, Franz Ferdinand`s last words were "Sophie, Sophie! Don`t die! Live for our children!" followed by six or seven utterances of "It is nothing," in response to Harrach`s inquiry as to Franz Ferdinand`s injury. These utterances were followed by a violent choking sound caused by hemorrhage. The imperial couple were dead by 11:30 a.m on 28 June 1914; Sophie was dead on arrival at the Governor`s residence, and Franz Ferdinand died 10 minutes later.',
            location: {
                center: [18.42932, 43.85750],
                zoom: 17.35,
                pitch: 54.44,
                bearing: 114.98,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                            {
                layer: '2-konak',
                opacity: 0.5,
            },
            {
                layer: '4-route-back',
                opacity: 1,
            },
            {
                layer: 'gavrilo-princip',
                opacity: 1,
            },
            {
                layer: 'gavrilo-princip copy',
                opacity: 1,
            },
            
        ],
            onChapterExit: [
                {
                    layer: '2-konak',
                    opacity: 0,
                },
                {
                    layer: '4-route-back',
                    opacity: 0,
                },
                {
                    layer: 'gavrilo-princip',
                    opacity: 0,
                },
                {
                    layer: 'gavrilo-princip copy',
                    opacity: 0,
                },
                                
            ]
        },
        {
            id: '17-finale',
            alignment: 'center',
            hidden: false,
            title: 'The Aftermath',
            description: 'The assassinations, along with the arms race, nationalism, imperialism, militarism and the alliance system all contributed to the origins of World War I, which began a month after Franz Ferdinand`s death, with Austria-Hungary`s declaration of war against Serbia.The assassination of Franz Ferdinand is considered the most immediate cause of World War I. After his death, Archduke Karl became the heir presumptive of Austria-Hungary. Franz Ferdinand was buried with his wife Sophie in Artstetten Castle, Austria',
            location: {
                center: [18.41685, 43.85800],
                zoom: 14.46,
                pitch: 51.44,
                bearing: 9.38,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                            
            
        ],
            onChapterExit: [
                
                                
            ]
        },
    ]
};
