Feature: ERP Management Inventory Module
Background: 
Given user launch url in a browser
And user enter username as "admin"
And user enter password as "master"
And user click login button
Then user should see dashboard page
@supplier
Scenario Outline:Add supplier with multiple data
When user should navigate to add supplier
And user capture supplier number
And user fills supplier details "<Sname>","<Saddress>","<Scity>","<Scountry>","<Scperson>","<Sphonenum>","<Semail>","<Smnumber>","<Snotes>"
And user click Add button
And user click confirm ok button
And user click Alert ok button
And user navigate to suppler table
Then user should see supplier number
#When user close browser
Examples:
|Sname|Saddress|Scity|Scountry|Scperson|Sphonenum|Semail|Smnumber|Snotes|
|supplier1|Hyd1|amerpet|India|Qedge1|3456789|test@gmail.com|4567890|new Supplier1|
|supplier2|Hyd2|amerpet|India|Qedge2|3456789|test@gmail.com|4567890|new Supplier2|
|supplier3|Hyd3|amerpet|India|Qedge3|3456789|test@gmail.com|4567890|new Supplier3|
|supplier4|Hyd4|amerpet|India|Qedge4|3456789|test@gmail.com|4567890|new Supplier4|
|supplier5|Hyd5|amerpet|India|Qedge5|3456789|test@gmail.com|4567890|new Supplier5|
@customer
Scenario Outline:Add customer with multiple data
When user should navigate to add customer
And user capture customer number
And user fills customer details "<Cname>","<Caddress>","<Ccity>","<Ccountry>","<Ccperson>","<Cphonenum>","<Cemail>","<Cmnumber>","<Cnotes>"
And user click Add button
And user click confirm ok button
And user click Alert ok button
And user navigate to customer table
Then user should see customer number
#When user close browser

Examples:
|Cname|Caddress|Ccity|Ccountry|Ccperson|Cphonenum|Cemail|Cmnumber|Cnotes|
|customer1|Hyd1|amerpet|India|Qedge1|3456789|test@gmail.com|4567890|new Customer1|
|customer2|Hyd2|amerpet|India|Qedge2|3456789|test@gmail.com|4567890|new Customer2|
|customer3|Hyd3|amerpet|India|Qedge3|3456789|test@gmail.com|4567890|new Customer3|
|customer4|Hyd4|amerpet|India|Qedge4|3456789|test@gmail.com|4567890|new Customer4|
|customer5|Hyd5|amerpet|India|Qedge5|3456789|test@gmail.com|4567890|new Customer5|

