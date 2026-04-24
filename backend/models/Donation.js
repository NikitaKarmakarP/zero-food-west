import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  foodName: { type: String, required: true },
  quantity: { type: Number, required: true }, // Servings
  foodType: { type: String, enum: ['veg', 'non-veg', 'vegan'], required: true },
  expiryTime: { type: Date, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String }
  },
  image: { type: String }, // URL
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'picked', 'delivered'],
    default: 'pending'
  },
  acceptedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('Donation', donationSchema);
