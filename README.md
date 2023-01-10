# JsonPowerDB-Task
This repository contains my first 'JsonPowerDB' work.
Its my first task of creating a 'Shipping Management Form ' using JsonPowerDB.

This 'Shipment Management Form' stores data in SHIPMENT-TABLE relation of DELIVERY-DB database. JsonPowerDB allows to perform various database operations in a single domain.(Which is a fabulous thing to know.)

Functionalities:

There are three control buttons [Save], [Update] and [Reset] at the bottom of the form. On page load or any control button click, an empty form is displayed and the cursor remains at the first input field in the form which will have the primary key in the relation. (Shipment_Number is considered as PRIMARY KEY). All other fields and buttons are disabled at this time.

Now User will enter data in the field having primary key i.e. Shipment number.
In Case the primary key value does NOT exist in the database, it will enable [Save] and [Reset] buttons and move the cursor to the next field and allow the user to enter data in the form.

It also Checks that the data is valid i.e. it has no empty fields.

After the Completion of the data entry form ,click the [Save] button to store the data in the database and again enter the shipment number.

If the primary key value is present in the database, the data will be displayed in the form. This will Enable [Update] and [Reset] buttons and move the cursor to the next' field in the form. With this the primary key field or shipment number fields is disabled. This allow users to change other form fields.

It will again Check the data to be valid i.e. no empty fields.
By clicking [Update] button, the data will be updated in the database.
[Reset] Button is used to reset the form

Form Design:

Input Fields are: {Shipment-No., Description, Source, Destination, Shipping-Date, Expected-Delivery-Date} Shipment No. is used as Primary Key.

Pros Of JsonPowerDB

Learning JsonPowerDB functionalities is like
learning something Industry friendly things. Using JsonPowerDB ease with many basic learning concepts.

It really makes your work easier and fun to do.

#For the reference I have uploaded my work. Hope you may like it.
