# hospital-backend for d4l

Q1
Identify the entities & relations.

- See patientModel.js and doctorModel.js for patient and doctor objects
- See appointmentModel.js for how each appointment is stored

Q2
Get all appointments for given doctor and date
https://quiet-eyrie-78491.herokuapp.com/appointment/get?doctorName=<enter name>&date=<mm-dd-yyyy>

Q3
Fix appointment by patient, doctor, date & time
https://quiet-eyrie-78491.herokuapp.com/appointment/add
body = {
"date": "06-23-2022",
"time": 1200,
"doctorName": "Kopi Lim",
"patientName": "Peter Parker"
}
date should be entered as mm-dd-yyyy
time should be entered in 24hours format, e.g. 2:45PM is 1445
doctor and patient names are case and space sensitive

Q4
Cancel appointment by patient, doctor, data & time
https://quiet-eyrie-78491.herokuapp.com/appointment/delete
body = {
"date": "06-23-2022",
"time": 1200,
"doctorName": "Kopi Lim",
"patientName": "Peter Parker"
}
date should be entered as mm-dd-yyyy
time should be entered in 24hours format, e.g. 2:45PM is 1445
doctor and patient names are case and space sensitive

Assumptions/ constraints:

- patient and doctor must exist in db before they can be included in appointments

Add patient
https://quiet-eyrie-78491.herokuapp.com/patient/add
body = {
"patientName": "May Lee",
"age": 67,
"gender": "female",
}

Add doctor
https://quiet-eyrie-78491.herokuapp.com/doctor/add
body = {
doctorName: "Hua Tuo",
}
