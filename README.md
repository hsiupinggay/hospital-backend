# hospital-backend for d4l
<p> hello! please use an api platform like postman to access </p>

<h2>Q1</h2>
Identify the entities & relations.

- See patientModel.js and doctorModel.js for patient and doctor objects
- See appointmentModel.js for how each appointment is stored

<h2>Q2</h2>
Get all appointments for given doctor and date
<br>
https://quiet-eyrie-78491.herokuapp.com/appointment/get?doctorName='enter name'&date='mm-dd-yyyy'

<h2>Q3</h2>
<p>Fix appointment by patient, doctor, date & time
<br>
https://quiet-eyrie-78491.herokuapp.com/appointment/add
</p>

<code>
body = {
"date": "06-23-2022",
"time": 1200,
"doctorName": "Kopi Lim",
"patientName": "Peter Parker"
}</code>

<ul>
  <li>date should be entered as mm-dd-yyyy</li>
  <li>time should be entered in 24hours format, e.g. 2:45PM is 1445</li>
  <li>doctor and patient names are case and space sensitive</li>
</ul>

<h2>Q4</h2>
<p>
Cancel appointment by patient, doctor, data & time
<br>
https://quiet-eyrie-78491.herokuapp.com/appointment/delete
</p>
  
<code>body = {<br>
"date": "06-23-2022",<br>
"time": 1200,<br>
"doctorName": "Kopi Lim",<br>
"patientName": "Peter Parker"<br>
}</code>

<ul>
  <li>date should be entered as mm-dd-yyyy</li>
  <li>time should be entered in 24hours format, e.g. 2:45PM is 1445</li>
  <li>doctor and patient names are case and space sensitive</li>
</ul>

<h2>Assumptions/ constraints:</h2>

- patient and doctor must exist in db before they can be included in appointments
- add patient and doctor with the following

<h3>Add patient</h3>
<p>
https://quiet-eyrie-78491.herokuapp.com/patient/add<br>
</p>
<code>
body = {
"patientName": "May Lee",
"age": 67,
"gender": "female",
}
</code>

<h3>Add doctor</h3>
<p>
https://quiet-eyrie-78491.herokuapp.com/doctor/add<br>
</p>
<code>
body = {
doctorName: "Hua Tuo",
}
</code>
