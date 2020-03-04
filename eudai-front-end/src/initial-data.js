const initialData =
      {goals:
       [
           {id: "g1",
            name: "Learn React",
            tasks: [
                {
                    id: "t1",
                    name: "Complete React tutorial",
                    complete: false,
                    majorTags: ["Coding"],
                    minorTags: ["Home", "Web Apps", "Computer"],
                    dueDate: null,
                    flag: false,
                },
                {
                    id: "t2",
                    name: "Write simple project",
                    complete: true,
                    majorTags: ["Coding"],
                    minorTags: ["Home", "Web Apps", "Computer"],
                    dueDate: null,
                    flag: true,
                },
            ]
           },
           {id: "g2",
            name: "Get to 165 lbs",
            tasks: [
                {
                    id: "t3",
                    name: "Daily calorie check-in",
                    complete: false,
                    majorTags: ["Health"],
                    minorTags: ["Home", "Computer"],
                    dueDate: "02/15/2020",
                    flag: false,
                },
                {
                    id: "t4",
                    name: "Weekly workout",
                    complete: true,
                    majorTags: ["Health"],
                    minorTags: ["Gym"],
                    dueDate: null,
                    flag: false,
                },
            ]
           },
           {id: "g3",
            name: "Climb a V6",
            tasks: [
                {
                    id: "t5",
                    name: "Go to the gym 20x in a month",
                    complete: false,
                    majorTags: ["Health"],
                    minorTags: ["Gym", "Climbing"],
                    dueDate: "03/01/2020",
                    flag: false,
                },
                {
                    id: "t6",
                    name: "Eat 3000 cal / day",
                    complete: true,
                    majorTags: ["Health"],
                    minorTags: ["Home"],
                    dueDate: null,
                    flag: false,
                },
                {
                    id: "7",
                    name: "Climb a V5",
                    complete: true,
                    majorTags: ["Health"],
                    minorTags: ["Gym", "Climbing"],
                    dueDate: null,
                    flag: false,
                },
            ]
           },
       ]
      };

export default initialData;
