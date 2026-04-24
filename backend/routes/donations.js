import express from 'express';
import Donation from '../models/Donation.js';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Create a donation
router.post('/', protect, async (req, res) => {
  try {
    const { foodName, quantity, foodType, expiryTime, location, image } = req.body;
    
    const newDonation = new Donation({
      donor: req.user.id,
      foodName,
      quantity,
      foodType,
      expiryTime,
      location,
      image
    });

    const savedDonation = await newDonation.save();
    
    // Add points to donor
    await User.findByIdAndUpdate(req.user.id, { $inc: { points: 10 } });

    res.status(201).json(savedDonation);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all active donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find({ status: 'pending', expiryTime: { $gt: new Date() } })
                                   .populate('donor', 'name organizationName')
                                   .sort({ expiryTime: 1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Accept a donation (NGO/Volunteer)
router.put('/:id/accept', protect, async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) return res.status(404).json({ message: 'Donation not found' });
    if (donation.status !== 'pending') return res.status(400).json({ message: 'Donation already accepted' });

    donation.status = 'accepted';
    donation.acceptedBy = req.user.id;
    await donation.save();
    
    res.json(donation);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
