import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const translations = {
  en: {
    heroTitle1: "Rescue Food.",
    heroTitle2: "Nourish Communities.",
    heroSubtitle: "The intelligent platform connecting surplus food from restaurants and events with NGOs to make zero food waste a reality.",
    shareFood: "Share Surplus Food",
    findFood: "Find Food Nearby",
    mealsRescued: "Meals Rescued",
    activeVolunteers: "Active Volunteers",
    co2Prevented: "Kg CO₂ Prevented",
    activeRescues: "Active Rescues Nearby",
    realTimeAlerts: "Real-time alerts for highly perishable food items.",
    distance: "Distance",
    type: "Type",
    quantity: "Quantity",
    interactiveMap: "Interactive Map",
    acceptMission: "Accept Rescue Mission",
    donate: "Donate",
    events: "Events",
    map: "Map",
    track: "Track",
    dashboard: "Dashboard",
    safety: "Safety",
    ngoPanel: "NGO Panel",
    adminPanel: "Admin Panel",
    profile: "Profile",
    signIn: "Sign In",
    signOut: "Sign Out"
  },
  hi: {
    heroTitle1: "भोजन बचाएं।",
    heroTitle2: "समुदायों का पोषण करें।",
    heroSubtitle: "रेस्तरां और कार्यक्रमों से बचे हुए भोजन को गैर सरकारी संगठनों (NGO) से जोड़ने वाला बुद्धिमान मंच, ताकि जीरो फूड वेस्ट एक वास्तविकता बन सके।",
    shareFood: "बचा हुआ भोजन साझा करें",
    findFood: "आस-पास भोजन खोजें",
    mealsRescued: "बचाए गए भोजन",
    activeVolunteers: "सक्रिय स्वयंसेवक",
    co2Prevented: "किग्रा CO₂ की रोकथाम",
    activeRescues: "आस-पास सक्रिय बचाव",
    realTimeAlerts: "अत्यधिक खराब होने वाले खाद्य पदार्थों के लिए वास्तविक समय अलर्ट।",
    distance: "दूरी",
    type: "प्रकार",
    quantity: "मात्रा",
    interactiveMap: "इंटरैक्टिव मैप",
    acceptMission: "बचाव मिशन स्वीकार करें",
    donate: "दान करें",
    events: "कार्यक्रम",
    map: "नक्शा",
    track: "ट्रैक",
    dashboard: "डैशबोर्ड",
    safety: "सुरक्षा",
    ngoPanel: "NGO पैनल",
    adminPanel: "व्यवस्थापक पैनल",
    profile: "प्रोफाइल",
    signIn: "साइन इन",
    signOut: "साइन आउट"
  },
  bn: {
    heroTitle1: "খাবার বাঁচান।",
    heroTitle2: "সমাজকে পুষ্টি দিন।",
    heroSubtitle: "রেস্তোরাঁ এবং ইভেন্ট থেকে অতিরিক্ত খাবার এনজিও-র (NGO) সাথে সংযোগকারী স্মার্ট প্ল্যাটফর্ম, যাতে জিরো ফুড ওয়েস্ট একটি বাস্তবতায় পরিণত হয়।",
    shareFood: "অতিরিক্ত খাবার শেয়ার করুন",
    findFood: "কাছাকাছি খাবার খুঁজুন",
    mealsRescued: "উদ্ধার করা খাবার",
    activeVolunteers: "সক্রিয় স্বেচ্ছাসেবক",
    co2Prevented: "কেজি CO₂ প্রতিরোধ",
    activeRescues: "কাছাকাছি সক্রিয় উদ্ধার",
    realTimeAlerts: "অত্যন্ত পচনশীল খাবারের জন্য রিয়েল-টাইম সতর্কতা।",
    distance: "দূরত্ব",
    type: "ধরন",
    quantity: "পরিমাণ",
    interactiveMap: "ইন্টারেক্টিভ ম্যাপ",
    acceptMission: "উদ্ধার মিশন গ্রহণ করুন",
    donate: "দান করুন",
    events: "ইভেন্ট",
    map: "ম্যাপ",
    track: "ট্র্যাক",
    dashboard: "ড্যাশবোর্ড",
    safety: "নিরাপত্তা",
    ngoPanel: "এনজিও প্যানেল",
    adminPanel: "অ্যাডমিন প্যানেল",
    profile: "প্রোফাইল",
    signIn: "সাইন ইন",
    signOut: "সাইন আউট"
  }
};

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('zw_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    // Mock login logic
    const role = email.includes('ngo') ? 'ngo' : 'donor';
    const mockUser = {
      id: `user_\${Date.now()}`,
      name: email.split('@')[0].toUpperCase(),
      email,
      role,
      points: 450,
    };
    setUser(mockUser);
    localStorage.setItem('zw_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('zw_user');
  };

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Welcome to ZeroWaste', message: 'Thank you for joining our mission to save food!', time: '2 hours ago', unread: true, path: '/' },
    { id: 2, title: 'Nearby Rescue', message: 'A new food donation was posted 2km away.', time: '5 hours ago', unread: true, path: '/map' },
    { id: 3, title: 'Points Earned', message: 'You earned 50 impact points for your last rescue.', time: '1 day ago', unread: false, path: '/profile' },
  ]);

  const addNotification = (title, message, path = null) => {
    const newNotification = {
      id: Date.now(),
      title,
      message,
      time: 'Just now',
      unread: true,
      path
    };
    setNotifications([newNotification, ...notifications]);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const [donations, setDonations] = useState(() => {
    const saved = localStorage.getItem('zw_donations');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, foodName: "Vegetables & Rice", quantity: 10, expiryTime: "2026-04-21T18:00", distance: "2.4 km", type: "veg", status: 'pending', donorName: 'Royal Palace Hotel', lat: 22.5726, lng: 88.3639 },
      { id: 2, foodName: "Event Buffer Leftovers", quantity: 45, expiryTime: "2026-04-21T20:00", distance: "5.0 km", type: "non-veg", status: 'pending', donorName: 'Arun Kumar', lat: 22.5800, lng: 88.3700 },
      { id: 3, foodName: "Fresh Baked Bread", quantity: 5, expiryTime: "2026-04-21T14:30", distance: "1.2 km", type: "veg", status: 'pending', donorName: 'Sunrise Bakery', lat: 22.5650, lng: 88.3550 }
    ];
  });

  useEffect(() => {
    localStorage.setItem('zw_donations', JSON.stringify(donations));
  }, [donations]);

  const addDonation = (donation) => {
    const newDonation = {
      ...donation,
      id: Date.now(),
      status: 'pending',
      donorName: user?.name || 'Anonymous',
      distance: (Math.random() * 5 + 0.5).toFixed(1) + ' km',
      lat: 22.5726 + (Math.random() - 0.5) * 0.05,
      lng: 88.3639 + (Math.random() - 0.5) * 0.05,
    };
    setDonations([newDonation, ...donations]);
    if (user) setUser({ ...user, points: user.points + 50 });
    addNotification('Donation Posted', `Your donation of \${donation.foodName} is now live!`, '/dashboard');
  };

  const acceptDonation = (id) => {
    const donation = donations.find(d => d.id === id);
    setDonations(donations.map(d => d.id === id ? { ...d, status: 'accepted', acceptedBy: user.id } : d));
    addNotification('Rescue Accepted', `You have accepted the rescue for \${donation.foodName}. Check tracking for details.`, '/track');
  };

  const rejectDonation = (id) => {
    setDonations(donations.filter(d => d.id !== id));
  };

  const getActiveDonations = () => donations.filter(d => d.status === 'pending');
  const getAcceptedDonations = () => donations.filter(d => d.status === 'accepted');

  return (
    <AppContext.Provider value={{
      user, login, logout, donations, addDonation, acceptDonation, rejectDonation, getActiveDonations, getAcceptedDonations, 
      language, setLanguage, t, notifications, addNotification, markAllAsRead, clearNotifications
    }}>
      {children}
    </AppContext.Provider>
  );
};
