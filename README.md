
# Bookio by JAVAbuilds | SYNTAX ERROR'23

Bookio is an online slot booking app for IITR's student club. 

### What do we intend to solve?
🍡 Students have to physically visit the student's club in order to make a booking and most of the time, all the services are already in use.

🍡 So we came up with a one-stop solution to solve this problem.

🍡 We have also implemented online payments to help seamlessly integrate the process of booking the slots for the events.
 

### Features we intend to implement in the future
🦕 A real time chat feature so that users can communicate with other users at the moment and go to the event together.

🦕 The said group will also be able to split the cost of using the services and will be sent pay requests to their respective UPI's.

## Demo

https://drive.google.com/drive/folders/1OA5xnDuIz8ijXGUXYGL6dWRyL9SUoyEf


## Tech Stack

**Client:** React , Redux

**Server:** Node, Express

**Payment:** Stripe

**Database:** MongoDB

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_LINK` - The connection uri to the mongo database

`STRIPE_KEY` - Secret key of stripe credentials

`ENDPOINTSECRET` - Stripe's CLI secret key


## Lessons Learned
🫒 We wanted to create some protected routes for the user which would be accessible only if the user is logged in. We ran into several errors here. After messing with cookies for a while, we decided to generate JWT tokens instead and verified it for the above purpose.

🫒 Our next biggest block came in the form of updating state with react. We were fetching data from our databases asynchronously but react rendered a couple states before some filter functions could run on the fetched data. We solved this by using destructuring syntax in the filter code and conditional rendering.

🫒 Backend errors : we realised the importance of writing the models, schema and controllers in the backend first before making the frontend since we had to keep making changes and deal with a lot of annoying & pesky errors.

🫒 Payment Integration: we could not get our webiste verified by popular payment services like razorpay, payU, etc in time. We still wanted to implement this feature, so we researched a little and found out that stripe (no UPI payments) offers API keys without website verification.
## Run Locally

Clone the project

```bash
  git clone https://github.com/Gjeev/JAVAbuilds.git
```

Go to the project directory

```bash
  cd JAVAbuilds
```

Install dependencies in both client and server directories

```bash
  npm install
```

Start the server in the server directory

```bash
  npm run devstart
```

Start the client in the client directory

```bash
  npm run dev
```


## 🔗 Links
[Devfolio](https://devfolio.co/projects/bookio-by-javabuilds-4937)



## 🚀 About JAVAbuilds
links to individual github profiles:

[arshita](https://github.com/ArshDawra)

[ayush](https://github.com/Ayush0Chaudhary)

[jeevika](https://github.com/Gjeev)

[vaibhav](https://github.com/psionic08)


## Acknowledgements
We appreciate every single person who helped us with even the smallest of errors during the hackathon. y'all the real ones.

