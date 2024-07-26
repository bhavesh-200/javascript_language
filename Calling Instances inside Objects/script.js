let Introduction = {
    MySelf : [
        {
            MyName : "Bhavesh",
            Personal : [
                {
                    Address : "Palanpur Patia",
                    Area : "GHB",
                    City : "Surat",
                    Pincode : "395005",
                },

                {
                    Hobby : "Dancing",
                    DOB : "27/08/2004",
                    Language : "English",
                    Skills : {
                        FSD : "HTML CSS JAVA",
                        TALLY : "TALLY ERP 09",
                    }
                },
            ],
            Experiance : [
                {
                  CompanyDetail : {
                    CompanyName : "Amreli Tech Pvt. Ltd.",
                    HiringDate : "01/05/2023",
                    YearOfExperiance : "1 year 03 months",
                    JobRole : "Computer Operator",
                    Salary : "10500",
                  },  
                },
            ],
        }
    ]
}

console.log(Introduction.MySelf[0].Experiance[0].CompanyDetail)