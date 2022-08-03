let projects = [
    {
        "id": 2,
        "name": "Vacationlands 1946",
        "textCl": "text-white",
        "bgCl": 'bg-project2',
        "btnCl": 'text-project2 border-project2',
        "description": "A prototype for a museum kiosk using the 1946 Union Pacific Western Vacationlands brochure to explore how rail travel interacted with historical narratives surrounding the American West.",
        "img": {
            "src": "/portfolio/vacationlands/vacationlands-thumb.png", 
            "alt": "Vacationlands thumbnail",
            "width": 250,
            "height": 350,
            "type": "tablet"
        },
        "extDest": "https://vacationlands.vercel.app/",
        "linkDest": "/projects/2",
        "overviewText": "The goal of this project was to make an interactive prototype for a museum kiosk that worked in tandem with an exhibit. The illustrations were all taken from the brochure, and were most likely done by Willmarth's Studio in Omaha. The digital versions on the kiosk were scanned from a personal copy of this brochure. This project also explored the concept of scale, and gave me an opportunity to think about interaction outside of the typical mobile or desktop context.",
        "overviewImg": {
            "type": "img",
            "src": "/portfolio/vacationlands/vacationlands-scale.png",
            "alt": "vacationlands kiosk scale", 
            "width": 350,
            "height": 450,
        },
        "detailCols": "3",
        "details": [
            {
                "id": 1,
                "img": {
                    "src": "/portfolio/vacationlands/vacationlands-1.png",
                    "alt": "vacationlands homescreen",
                    "width": 250,
                    "height": 450
                },
                "text": "Users select one of the six destinations in the brochure: California, Colorado, Idaho, Oregon, Utah, or Wyoming."
            }, 
            {
                "id": 2, 
                "img": {
                    "src": "/portfolio/vacationlands/vacationlands-4.png", 
                    "alt": "vacationlands destination screen",
                    "width": 250,
                    "height": 450
                },
                "text": "Each destination has a featured quote from the brochure with three buttons for further details."
            },
            {
                "id": 3, 
                "img": {
                    "src": "/portfolio/vacationlands/vacationlands-3.png",
                    "alt": "vacationlands detail screen",
                    "width": 250,
                    "height": 450
                },
                "text": "Each highlighted section of text corresponds to a different 'travel theme.' These were inspired by modern destination websites."
            }
        ],
        "sections": [
            {
                "id": 1, 
                "title": "Challenges", 
                "desc": "One of the main challenges I encountered had to do with the large scale of the kiosk. I wanted to ensure that I could fit all of the information I needed under each section, but the height of the screen meant that most of the navigation had to be in the middle.",
                "layout": "text",
                "items": ""
            }, 
            {
                "id": 2, 
                "title": "Next Steps", 
                "desc": "Currently, I'm working on creating an interactive prototype using React.js. As part of this, I'd like to create an interactive version of the map on the brochure, likely using Leaflet.js. The repository and its progress can be viewed here: ",
                "layout": "end-link",
                "items": [
                    {
                        "dest": "https://github.com/boringem/vacationlands2.0",
                        "text": "Vacationlands Repository",
                        "colorCl": "text-project2"
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "Online Lectures",
        "textCl": "text-white",
        "bgCl": 'bg-project3',
        "btnCl": 'text-project3 border-project3',
        "description": "An LMS case study done for a class project, attempting to make online learning easier for students and teachers.",
        "img": {
            "src": "/portfolio/lms/lms-thumb.png", 
            "alt": "Online lectures thumbnail",
            "width": 245,
            "height": 350,
            "type": "mobile"
        },
        "extDest": "/projects/3",
        "linkDest": "/projects/3",
        "overviewText": "When classes moved online spring semester, my professors, my classmates, and I all expressed frustration with the feeling of disconnect that comes with online learning. Things that were easy to do in the classroom (using a presentation, answering questions, and even meeting synchronously) were difficult to accomplish online. These challenges were made worse because many of my classes used multiple platforms, making it difficult to keep track of what was happening when, or where. I wanted to design a platform that included all the major facets of in person learning, without the need to learn multiple different softwares.",
        "overviewImg": {
            "type": "video",
            "src": "https://res.cloudinary.com/dq1ki8nxq/video/upload/v1659504469/portfolio/lms/lms.mp4",
            "alt": "online classroom video", 
            "width": 350,
            "height": 450,
        },
        "detailCols": "4",
        "details": [
            {
                "id": 1,
                "img": {
                    "src": "/portfolio/lms/lms-1.png",
                    "alt": "lecture beginning wireframe",
                    "width": 250,
                    "height": 450
                }, 
                "text": "Lecture beginning wireframe"
            },
            {
                "id": 2,
                "img": {
                    "src": "/portfolio/lms/lms-2.png",
                    "alt": "Lecture beginning final page",
                    "width": 250,
                    "height": 450
                }, 
                "text": "Lecture beginning final page"
            },
            {
                "id": 3,
                "img": {
                    "src": "/portfolio/lms/lms-3.png",
                    "alt": "Homepage wireframe",
                    "width": 250,
                    "height": 450
                }, 
                "text": "Homepage wireframe"
            },
            {
                "id": 4,
                "img": {
                    "src": "/portfolio/lms/lms-4.png",
                    "alt": "Homepage final page",
                    "width": 250,
                    "height": 450
                }, 
                "text": "Homepage final page"
            }
        ],
        "sections": [
            {
                "id": 1, 
                "title": "The Questions", 
                "desc": "",
                "layout": "list", 
                "items": ['How can the time spent on setup in online classes be minimized, and actual teaching time increased?', 'How can professors keep track of attendance and ensure students know when lectures are happening in a non-invasive way?', 'What makes students feel disconnected from the online learning process? What makes professors feel overwhelmed when transitioning to online teaching?']
            }, 
            {
                "id": 2, 
                "title": "The Research", 
                "desc": "After surveying both students and professors, I had a better idea of what each group's ideal online learning environment would look like.", 
                "layout": "grid-cols-2",
                "items": [
                    {
                        "id": 1,
                        "img": {
                            "src": "/portfolio/lms/lms-5.png",
                            "alt": "Send reminder screen",
                            "width": 250,
                            "height": 450
                        }, 
                        "title": "Students wanted...",
                        "text": "An easy way to get reminders of when classes were taking place and one place to view all communication from professors."
                    },
                    {
                        "id": 2,
                        "img": {
                            "src": "/portfolio/lms/lms-6.png",
                            "alt": "Hand raised screen",
                            "width": 250,
                            "height": 450
                        }, 
                        "title": "Teachers wanted...",
                        "text": "An intuitive way to share presentations, a way to see if students were actively present in the classroom, and more control over answering student questions."
                    }   
                ]
            },
            {
                "id": 3,
                "title": "User Testing",
                "desc": "Conducting user tests with eight users allowed me to identify pain points and places where my design fell short. After hearing feedback, I refined my design to fix two main difficulties that were present.",
                "layout": "list",
                "items": ['Confirmation of when reminders were sent', 'Adding an easy way to end the lecture']
            }
        ]
    },
    {
        "id": 4,
        "name": "Smart Shower",
        "textCl": "text-black",
        "bgCl": 'bg-project4',
        "btnCl": 'text-project4 border-project4',
        "description": "A shower experience designed to save water.",
        "img": {
            "src": "/portfolio/shower/shower-thumb.png", 
            "alt": "Smart shower thumbnail",
            "width": 245,
            "height": 350,
            "type": "mobile"
        },
        "extDest": "/projects/4",
        "linkDest": "/projects/4",
        "overviewText": "The average shower uses 2.1 gallons of water per minute. Showering for twenty minutes, four times a week uses 8,736 gallons of water a year. Cutting down by five minutes a shower saves 2,184 of those gallons. So...what stands in the way? A traditional timer does not allow users to view their history. Calculating water usage is complex and time consuming. The information needed is difficult to access.",
        "overviewImg": {
            "type": "img",
            "src": "/portfolio/shower/shower-graph.png",
            "alt": "water usage graph", 
            "width": 450,
            "height": 450,
        },
        "detailCols": "3",
        "details": [
            {
                "id": 1,
                "img": {
                    "src": "/portfolio/shower/shower-setup.png",
                    "alt": "Setup by taking a shower",
                    "width": 350,
                    "height": 550
                }, 
                "text": "Setup by taking a shower",
            },
            {
                "id": 2,
                "img": {
                    "src": "/portfolio/shower/shower-manual.png",
                    "alt": "Manual Setup",
                    "width": 350,
                    "height": 550
                },
                "text": "Manual Setup"
            },
            {
                "id": 3,
                "img": {
                    "src": "/portfolio/shower/shower-stats.png",
                    "alt": "Shower statistics",
                    "width": 350,
                    "height": 550
                },
                "text": "Shower Statistics"
            }
        ],
        "sections": [
            {
                "id": 1, 
                "title": "The Process",
                "desc": "I spent considerable time designing the onboarding process. When I was analyzing existing smart shower applications, I noticed that the setup could be confusing. Oftentimes, apps asked users to create their settings with no assistance. Many people don't know off the top of their head what temperature their shower is. I wanted to create an onboarding experience that helped users discover that information. I also focused on the layout of the statistics section of the application. I needed it to be able to switch quickly between different types of data, but also be clear and easy to read. Because the water usage portion was the most important, I wanted to make sure that changes in water usage over time were very clear.",
                "layout": "text"
            },
            {
                "id": 2, 
                "title": "Onboarding Process", 
                "desc": "I decided to use two onboarding processes. One allows the user to take a shower and records the temperature, duration, and water used during that shower. Following the shower, the user can edit the settings, or save it as a preference. The second has the user choose their settings manually, in case they don't want to have to take a shower to setup the app.",
                "layout": "text"
            }, 
            {
                "id": 3, 
                "title": "Icons and Buttons", 
                "desc": "These buttons are used during the onboarding process, when the user selects which statistics to keep track of. I used iconography on a card based layout to ensure that the options were clear.",
                "layout": "grid-cols-3",
                "items": [
                    {
                        "id": 1,
                        "img": {
                            "src": "/portfolio/shower/temp-icon.png",
                            "alt": "Temperature Icon",
                            "width": 250,
                            "height": 450
                        }, 
                        "text": "Temperature Icon"
                    },
                    {
                        "id": 2,
                        "img": {
                            "src": "/portfolio/shower/water-icon.png",
                            "alt": "Water Usage Icon",
                            "width": 250,
                            "height": 450
                        }, 
                        "text": "Water Usage Icon"
                    },
                    {
                        "id": 3,
                        "img": {
                            "src": "/portfolio/shower/duration-icon.png",
                            "alt": "Duration Icon",
                            "width": 250,
                            "height": 450
                        }, 
                        "text": "Duration Icon"
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "name": "Wordpress Audio Theme",
        "textCl": "text-black",
        "bgCl": 'bg-project5',
        "btnCl": 'text-black border-project5',
        "description": "Theme and plugin development for an audio engineering portfolio.",
        "img": {
            "src": "/portfolio/wp/wp-thumb.png", 
            "alt": "Wordpress thumbnail",
            "width": 480,
            "height": 250,
            "type": "desktop"
        },
        "extDest": "https://github.com/boringem/wordpress-audio",
        "linkDest": "/projects/5",
        "overviewText": "A fully responsive Wordpress theme developed for a sound designer. The site uses two custom plugins; one to display an event calendar, and one to display information about songs in an audio player. This site was designed to display many types of content, from audio and video, to image galleries and large blocks of text.",
        "overviewImg": "",
        "detailCols": "",
        "details": [],
        "sections": []
    },
    {
        "id": 6,
        "name": "Virtual Piano",
        "textCl": "text-black",
        "bgCl": 'bg-project6',
        "btnCl": 'text-black border-project6',
        "description": "A virtual keyboard that correlates piano keys with sheet music. Built for VandyHacks 2019.",
        "img": {
            "src": "/portfolio/piano/piano-thumb.png", 
            "alt": "Virtual piano thumbnail",
            "width": 480,
            "height": 250,
            "type": "desktop"
        },
        "extDest": "https://madelynvagle.com/piano.html",
        "linkDest": "/projects/6",
        "overviewText": "This project was developed for VandyHacks 2019. It uses P3.js to display the waveform and the notation of keys on a piano. It was designed to make learning music notation more accessible, as traditional musical education can be expensive, and many online introductions to sheet music lack the interactivity of in person lessons.",
        "overviewImg": "",
        "detailCols": "",
        "details": [],
        "sections": []
    },
    {
        "id": 7,
        "name": "Adopt A Dinosaur",
        "textCl": "text-black",
        "bgCl": 'bg-project7',
        "btnCl": 'text-black border-project7',
        "description": "Adopt and learn about different dinosaurs! Built on a LAMP stack as a class project.",
        "img": {
            "src": "/portfolio/dinosaur/dinosaur-thumb.png", 
            "alt": "Adopt a dinosaur thumbnail",
            "width": 480,
            "height": 250,
            "type": "desktop"
        },
        "extDest": "https://github.com/boringem/create-a-dino",
        "linkDest": "/projects/7",
        "overviewText": "A site made as the final project for a website development class. It was built on a LAMP stack, and uses a database to handle authentication and store user created dinosaurs. Users can create and view information about their dinosaurs.",
        "overviewImg": "",
        "detailCols": "",
        "details": [],
        "sections": []
    },
]

export default projects;