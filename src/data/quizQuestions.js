const quizQuestions = {
    health: [
        {
            question: "How do you feel when you wake up in the morning?",
            answers: [
                {
                    type: "Your health is at top level. You better improve some other category.",
                    content: "Super energetic"
                },
                {
                    type: "You could improve your health to be more productive. We suggest you to visit the health products shop.",
                    content: "Tired. I want to sleep more. I have hard time to get up."
                },
                {
                    type: "Your health is OK.",
                    content: "Sometimes tired and sometimes great."
                }
            ]
        },
        {
            question: "How often do you exercise?",
            answers: [
                {
                    type: "Your health is OK.",
                    content: "Once or twice a week."
                },
                {
                    type: "Your health is at top level. You better improve some other category.",
                    content: "Every day, baby!"
                },
                {
                    type: "You could improve your health to be more productive. We suggest you to visit the health products shop.",
                    content: "I don't have the time or the energy to exercise!"
                }
            ]
        },
        {
            question: "How much coffee and sweets you consume during the day?",
            answers: [
                {
                    type: "Your health is at top level. You better improve some other category.",
                    content: "What are those stuff? I am full of energy!"
                },
                {
                    type: "Your health is OK.",
                    content: "I am trying to drink only one coffee in the morning and to avoid sugar."
                },
                {
                    type: "You could improve your health to be more productive. We suggest you to visit the health products shop.",
                    content: "I can't live without coffee and sugar! Please don't tell me do stop them."
                }
            ]
        },
    ],
    money: [
        {
            question: "When it comes to saving:",
            answers: [
                {
                    type: "Your money management is at top level. You better improve some other category.",
                    content: "First I save money then I spend the rest."
                },
                {
                    type: "You could improve your money management system. We suggest you to visit the money products shop.",
                    content: "I have trouble saving money, which bothers me sometimes."
                },
                {
                    type: "Your money management is OK.",
                    content: "Sometimes I save for a big purchase."
                }
            ]
        },
        {
            question: "In the event of a financial emergency:",
            answers: [
                {
                    type: "Your money management is OK.",
                    content: "I don't know if I have enough saved, so I just hope for the best."
                },
                {
                    type: "Your money management is at top level. You better improve some other category.",
                    content: "I've saved enough for almost any emergency, but hope I never have to spend it."
                },
                {
                    type: "You could improve your money management system. We suggest you to visit the money products shop.",
                    content: "I never have enough money left over to save for emergencies."
                }
            ]
        },
        {
            question: "When I really want to buy something that's not in my budget:",
            answers: [
                {
                    type: "Your money management is at top level. You better improve some other category.",
                    content: "I'd have to think hard before giving myself permission to spend the money."
                },
                {
                    type: "Your money management is OK.",
                    content: "I could sacrifice something else and gather the money."
                },
                {
                    type: "You could improve your money management system. We suggest you to visit the money products shop.",
                    content: "What budget? Everything will work out all right."
                }
            ]
        },
    ],
    relationships: [
        {
            question: "Do you share a common future with your closest person?",
            answers: [
                {
                    type: "Your relationships are at top level. You better improve some other category.",
                    content: "Yes. We frequently talk about our future goals together."
                },
                {
                    type: "You could improve your relationships with others. We suggest you to visit the relationships products shop.",
                    content: "Not at the moment. We’ll just see what happens. There is always hope."
                },
                {
                    type: "Your relationships are OK.",
                    content: "Mostly yes. But we don’t have it all plotted out."
                }
            ]
        },
        {
            question: "When someone is talking to me: ",
            answers: [
                {
                    type: "Your relationships are OK.",
                    content: "If I agree I talk otherwise I don't."
                },
                {
                    type: "Your relationships are at top level. You better improve some other category.",
                    content: "I try to see their perspectives without judging."
                },
                {
                    type: "You could improve your relationships with others. We suggest you to visit the relationships products shop.",
                    content: "I am waiting to stop so I could reply with new information which pop in my head."
                }
            ]
        },
        {
            question: "If I don't understand something that other person is saying: ",
            answers: [
                {
                    type: "Your relationships are at top level. You better improve some other category.",
                    content: "I confess that I didn't understand and ask a question about it."
                },
                {
                    type: "Your relationships are OK.",
                    content: " I tend to keep this to myself and figure it out later."
                },
                {
                    type: "You could improve your relationships with others. We suggest you to visit the relationships products shop.",
                    content: "Agree or just smile"
                }
            ]
        },
    ],
    career: [
        {
            question: "How you picked your last job?",
            answers: [
                {
                    type: "Your career development rock! You better improve some other category.",
                    content: "I figured out which are the most perspective professions."
                },
                {
                    type: "You could improve your career. We suggest you to visit the career products shop.",
                    content: "I asked people where I can go to work."
                },
                {
                    type: "Your career is OK.",
                    content: "I follow the money. I will work wherever they pay me the most."
                }
            ]
        },
        {
            question: "When you work:",
            answers: [
                {
                    type: "Your career is OK.",
                    content: "I always try to finish my tasks on time."
                },
                {
                    type: "Your career development rock! You better improve some other category.",
                    content: "I always try to give more than I am asked for."
                },
                {
                    type: "You could improve your career. We suggest you to visit the career products shop.",
                    content: "I do the minimum because no matter how hard I work I will be paid the same amount."
                }
            ]
        },
        {
            question: "There are many ways to develop professionally, these include:",
            answers: [
                {
                    type: "Your career development rock! You better improve some other category.",
                    content: "Buddying with a more experienced individual."
                },
                {
                    type: "Your career is OK.",
                    content: "Reading articles."
                },
                {
                    type: "You could improve your career. We suggest you to visit the career products shop.",
                    content: "I must rest in my free time in order to be happy."
                }
            ]
        },
    ],
    creative: [
        {
            question: "Do you have hard time choosing presents for special occasions?",
            answers: [
                {
                    type: "Your creativeness is outstanding! You better improve some other category.",
                    content: "Nope. I figure out what the person will need and search in internet to find it."
                },
                {
                    type: "You could improve your creativity. We suggest you to visit the creative products shop.",
                    content: "Most of the times I have no idea what presents to buy."
                },
                {
                    type: "Your creativity is OK.",
                    content: "I come up with some ideas."
                }
            ]
        },
        {
            question: "What do you do in your free time?",
            answers: [
                {
                    type: "Your creativity level is OK.",
                    content: "What free time? I work and spend time with my family."
                },
                {
                    type: "Your creativeness is amazing. You better improve some other category.",
                    content: "I have a lot of ideas and hobbies."
                },
                {
                    type: "You could improve your creativity. We suggest you to visit the creative products shop.",
                    content: "Neflix & chill, of course!"
                }
            ]
        },
        {
            question: "How do you handle problems?",
            answers: [
                {
                    type: "Your creativeness is amazing. You better improve some other category.",
                    content: "Every problem is a gift. Without problems we would not grow."
                },
                {
                    type: "Your creativity level is OK.",
                    content: "I don't like problems but I cope with them somehow because it's my responsibility."
                },
                {
                    type: "You could improve your creativity. We suggest you to visit the creative products shop.",
                    content: "I back off active problem solving, and I create some mental distance between myself and the issue."
                }
            ]
        },
    ],
    fun: [
        {
            question: "How would you rate your overall happiness?",
            answers: [
                {
                    type: "Your life is full of happy moments. You better improve some other category.",
                    content: "I am pretty satisfied with all areas of my life."
                },
                {
                    type: "You need more fire in your life. We suggest you to visit the fun products shop.",
                    content: "I am not happy at all. I barely laugh. I need to change something."
                },
                {
                    type: "The fun in your life is OK.",
                    content: "I am happy with some areas of my life."
                }
            ]
        },
        {
            question: "You will meet some friends. What do you do?",
            answers: [
                {
                    type: "The fun in your life is OK.",
                    content: "I dress up for a party, smile and go!"
                },
                {
                    type: "Your life is full of happy moments. You better improve some other category.",
                    content: "Asking where and with whom we are meeting and come up with fun stuff to do or talk about."
                },
                {
                    type: "You need more fire in your life. We suggest you to visit the fun products shop.",
                    content: "Whatever. I am just going."
                }
            ]
        },
        {
            question: "When I find myself overwhelmed with stress, I",
            answers: [
                {
                    type: "Your life is full of happy moments. You better improve some other category.",
                    content: " I turn to friends/family for support."
                },
                {
                    type: "The fun in your life is OK.",
                    content: "I keep my problems to myself."
                },
                {
                    type: "You need more fire in your life. We suggest you to visit the fun products shop.",
                    content: "I shut down completely."
                }
            ]
        },
    ],
}
export default quizQuestions;