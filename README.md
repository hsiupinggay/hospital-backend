# hospital-backend for d4l

Q1
Identify the entities & relations.

- See patientModel.js and doctorModel.js for patient and doctor objects
- See appointmentModel.js for how each appointment is stored

Q2
Get all appointments for given doctor and date
<br>
https://quiet-eyrie-78491.herokuapp.com/appointment/get?doctorName='enter name'&date='mm-dd-yyyy'

Q3
Fix appointment by patient, doctor, date & time
<br>
https://quiet-eyrie-78491.herokuapp.com/appointment/add
<br>
body = {<br>
"date": "06-23-2022",<br>
"time": 1200,<br>
"doctorName": "Kopi Lim",<br>
"patientName": "Peter Parker"<br>
}
<br>
date should be entered as mm-dd-yyyy
<br>
time should be entered in 24hours format, e.g. 2:45PM is 1445
<br>
doctor and patient names are case and space sensitive

Q4
Cancel appointment by patient, doctor, data & time
<br>
https://quiet-eyrie-78491.herokuapp.com/appointment/delete
<br>
  
body = {<br>
"date": "06-23-2022",<br>
"time": 1200,<br>
"doctorName": "Kopi Lim",<br>
"patientName": "Peter Parker"<br>
}
<br>
date should be entered as mm-dd-yyyy<br>
time should be entered in 24hours format, e.g. 2:45PM is 1445<br>
doctor and patient names are case and space sensitive<br>

Assumptions/ constraints:

- patient and doctor must exist in db before they can be included in appointments

Add patient<br>
https://quiet-eyrie-78491.herokuapp.com/patient/add<br>
<br>
body = {<br>
"patientName": "May Lee",<br>
"age": 67,<br>
"gender": "female",<br>
}
<br>

Add doctor<br>
https://quiet-eyrie-78491.herokuapp.com/doctor/add<br>
 
body = {<br>
doctorName: "Hua Tuo",<br>
}<br>
