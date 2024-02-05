const express = require('express');
const cors = require('cors');
require('./db/config');
const app = express();
const PORT = process.env.PORT || 7000;
const ChargingStation = require('./db/Admin/ChargeStation');
const Admin = require('./db/Admin/AdminSchema');   
const User = require('./db/User/UserSchema');
const Booking =require('./db/User/BookingSchema')


app.use(cors({
    origin : ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}   ));
app.use(express.json());    

 //  Admin  //
// Login
app.post('/alogin', (req, resp) => {  
    const { email, password } = req.body;   
    Admin.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return resp.json({ Status: "Success", user: { id:user.id,name: user.name, email: user.email } })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
  })
  
  // Register Api
  app.post('/asignup', (req, resp) => {
    const { name, email, password } = req.body;
    Admin.findOne({ email: email })
        .then(use => {
            if (use) {
                resp.json("Already have an account")
            } else {
                Admin.create({ email: email, name: name, password: password })
                    .then(result => resp.json("  Account Created"))
                    .catch(err => resp.json(err))
            }    
        }).catch(err => resp.json("failed "))
  })

 app.get('/users',(req,res)=>{
    User.find()
    .then((user)=>{
           res.status(200).json(user)
    })
    .catch((err)=>{
        console.log(err);
    })
 }) 

 app.get('/user/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const user= await User.findById(id);
      res.json(user);
    } catch (error) {
      console.error('Error fetching USer by ID:', error);
      res.status(500).send('Internal Server Error');
    }
  }); 
  app.put('/updateuser/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating User:', error);
      res.status(500).send('Internal Server Error');
    }
  });

 app.delete('/userdelete/:id', (req, res) => {
    const { id } = req.params; // Corrected line

    User.deleteOne({ _id: id }) // Use _id for MongoDB
        .then(() => {
            res.send('Deleted');
        })
        .catch(() => {
            res.send('Failed to delete');
        });
});

 app.post('/chargestations', async (req, res) => {
    try {
      const newChargeStation = new ChargingStation(req.body);
      await newChargeStation.save();
      res.status(201).json(newChargeStation);
    } catch (error) {
      console.error('Error creating charge station:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/chargestations/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const chargeStation = await ChargingStation.findById(id);
      res.json(chargeStation);
    } catch (error) {
      console.error('Error fetching charge station by ID:', error);
      res.status(500).send('Internal Server Error');
    }
  }); 
  app.put('/updatechargestation/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updatedStation = await ChargingStation.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedStation);
    } catch (error) {
      console.error('Error updating charge station:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  app.delete('/stationdelete/:id', (req, res) => {
    const { id } = req.params; // Corrected line

    ChargingStation.deleteOne({ _id: id }) // Use _id for MongoDB
        .then(() => {
            res.send('Deleted');
        })
        .catch(() => {
            res.send('Failed to delete');
        });
});





//   User //
// login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    if (user.password === password) {
                        return res.json({ Status: "Success", user: { id: user.id, name: user.name, email: user.email } })
                    }
                    else {
                        res.json("Invalid Password")
                    }
                }
                else {
                    res.json("User not found")
                }
            })
    })
    
 app.post('/signup', (req, resp) => {
        const { name, email, password } = req.body;
        User.findOne({ email: email })
            .then(use => {
                if (use) {
                    resp.json("Already have an account")
                } else {
                    User.create({ email: email, name: name, password: password })
                        .then(result => resp.json("  Account Created"))
                        .catch(err => resp.json(err))
                }
            }).catch(err => resp.json("failed "))
    })
  
app.get('/chargestations', (req, res) => {
    ChargingStation.find()       
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(() => {
            console.log("Error in getting data");
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.post('/userbooking', async (req, res) => {
    try {
      const {name,email,phno, date,time,userId, userName,address:{district,city,state,country,zipcode,street_address}} = req.body;
      const newBooking = new  Booking({  name,email,phno,date,time,userId,userName,address:{district,city,state,country,zipcode,street_address}});
      await newBooking.save();
      res.status(201).json({ message: 'Booking successful' });
    } catch (error) {
      console.error('Error booking:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

app.get('/bookings',(req,res)=>{
    Booking.find()
    .then((data)=>{
      res.status(200).json(data)  
    })
    .catch(()=>{           
        console.log("error")
    })
})  

app.get('/userbookings/:userId',(req,res)=>{
    const userId =req.params.id;
    Booking.find(userId)
    .then((data)=>{
      res.status(200).json(data)  
    })
    .catch(()=>{           
        console.log("error")
    })
})  
  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});