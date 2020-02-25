# H4H_2020
Hack for Humanity 2020

## Inspiration
₵eiling was inspired by the idea that promoting social good should be an easy and regular part of daily life. As such, we decided to create a simple way for everyone to donate their change online that is already integrated with PayPal's global payment processing system. We also derived inspiration for our project's name, ₵eiling, from the ceiling function, which returns the next integer greater than or equal to the input. We thought this was fitting, because our extension rounds your purchases to the next dollar and donates the difference. 

## What it does
In short, ₵eiling is a Chrome Extension that rounds up your PayPal purchases to the nearest dollar, donating the change to a charity of your choice. With PayPayl's variety of partners, most online purchases can be routed through ₵eiling. During checkout, the extension will ask the customer to round up and donate, which will then send the additional change to a chosen charity!

## How we built it
We built ₵eiling by following the basic guidelines for creating a Chrome Extension, but added upon that framework. Our extension utilized web scraping and the implementation of logic to determine when a PayPal process is being made. We also had to integrate substantially with the PayPal API in order to manage the donations to charities.

## Challenges we ran into
Some challenges we ran into include Chrome security issues and understanding communication between background and content scripts. Content scripts are JavaScript files that run in the context of web pages, whereas background scripts are single long-running HTML scripts that manage some task or state. We also struggled a bit with dynamically collecting the displayed price on websites, which was different across different commerce sites.

## Accomplishments that we're proud of
We are proud of working together as a team to implement a project that we were all passionate about. 

## What we learned
We learned a lot about Chrome Extensions and the PayPal API. We also learned the details of communication between content and background scripts, especially understanding how tasks are divided amongst them.  

## What's next for ₵eiling
In the future, we hope to integrate ₵eiling more closely with the PayPal API. We also would need to create a better selection process for choosing charities. Additionally, some other features we would like to implement include creating a user dashboard that accumulates data about previous donations and in the future, would hope to implement ₵eiling with all online commerce sites, even those that are not partnered with PayPal.

## Devpost
https://devpost.com/software/zamm-zaddy/
