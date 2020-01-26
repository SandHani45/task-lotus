
const people = [
    {
        id: 1,
        first_name: "Jim",
        last_name: "Stevens",
        interest: ["cooking", "baseball", "reading"],
        location: {
        city: "placeville",
        state: "GA",
        zip: "30040"
        },
        relationships: [
        {
            type: "Mother",
            first_name: "Susie",
            last_Name: "Stevens",
            interest: ["cooking", "baseball", "reading"],
            location: {
            city: "placeville",
            state: "GA",
            zip: "30040"
            },
        },
        {
            type: "Father",
            first_name: "Frank",
            last_Name: "Stevens",
            interest: ["cooking", "baseball", "reading"],
            location: {
            city: "placeville",
            state: "GA",
            zip: "30040"
            },
        }
        ]
    },
    {
        id: 2,
        first_name: "Josh",
        last_name: "Bens",
        interest: ["baseball", "reading"],
        location: {
        city: "dawsonville",
        state: "GA",
        zip: "30534"
        },
        relationships: [
        {
            type: "Mother",
            first_name: "Jessica",
            last_Name: "Bens",
            interest: ["cooking","reading"],
            location: {
            city: "dawsonville",
            state: "GA",
            zip: "30534"
            },
        },
        {
            type: "Father",
            first_name: "Jeremy",
            last_Name: "Bens",
            interest: ["cooking", "baseball"],
            location: {
            city: "dawsonville",
            state: "GA",
            zip: "30534"
            },
        }
        ]
    },
    {
        id: 3,
        first_name: "Matthew",
        last_name: "Dinsmore",
        interest: ["cooking", "hunting", "baseball", "reading"],
        location: {
        city: "placeville",
        state: "GA",
        zip: "30040"
        },
        relationships: [
        {
            type: "Mother",
            first_name: "Jessica",
            last_Name: "Dinsmore",
            interest: ["reading"],
            location: {
            city: "placeville",
            state: "GA",
            zip: "30040"
            },
        },
        {
            type: "Father",
            first_name: "Gary",
            last_Name: "Dinsmore",
            interest: ["fishing", "hunting", "reading"],
            location: {
            city: "placeville",
            state: "GA",
            zip: "30040"
            },
        },
        {
            type: "Brother",
            first_name: "Thomas",
            last_Name: "Dinsmore",
            interest: null,
            location: {
            city: "placeville",
            state: "GA",
            zip: "30040"
            },
        }
        ]
    }
    ]
export default  people