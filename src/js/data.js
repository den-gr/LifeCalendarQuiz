const quizzes = {
    general: [
        {
            id: 0,
            question: "Are you man or woman?",
            options: [
              {
                name: "Man",
                action: {},
                next: 1
              },
              {
                name: "Woman",
                action: {},
                next: 2
              },
            ],
        },
        {
            id: 1,
            question: "Q1 What is 2 + 2?",
            options: [
                {
                    name: "3",
                    action: {},
                    next: 2
                },
                {
                    name: "4",
                    action: {},
                    next: 2
                },
                {
                    name: "5",
                    action: {},
                    next: 2
                },
              ],
        },
        {
            id: 2,
            question: "Q2 When did the moon landing occur?",
            requiresDate: true,
            next: -1
        }
    ],
    math: [
        {
            id: 0,
            question: "Are you?",
            options: [
              {
                name: "Yes",
                action: {},
                next: -1
              },
              {
                name: "No",
                action: {},
                next: -1
              },
            ],
        },
    ]
};