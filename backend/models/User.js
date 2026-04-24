import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['donor', 'ngo', 'volunteer'], 
    required: true 
  },
  organizationName: { type: String }, // For NGOs or Restaurants
  phone: { type: String },
  points: { type: Number, default: 0 },
  badges: [{ type: String }],
  isVerified: { type: Boolean, default: false } // Admin verified NGOs
}, { timestamps: true });

export default mongoose.model('User', userSchema);
