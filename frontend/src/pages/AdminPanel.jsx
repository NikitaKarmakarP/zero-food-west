import { CheckCircle, XCircle, Shield, Users, AlertTriangle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const DUMMY_USERS = [
  { id: 1, name: "City Hope NGO", email: "contact@cityhope.org", type: "NGO", status: "pending_verification", docs: "Pending Review" },
  { id: 2, name: "Grace Foundation", email: "hello@grace.org", type: "NGO", status: "verified", docs: "Approved" },
  { id: 3, name: "Arun Kumar", email: "arun@demo.com", type: "Donor", status: "active", docs: "N/A" },
];

export default function AdminPanel() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <Shield className="h-10 w-10 text-primary-600" /> System Admin
          </h1>
          <p className="text-slate-500 mt-2 font-medium text-lg">Manage platforms, verify NGOs, and monitor alerts.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="glass-panel p-6 rounded-3xl bg-blue-50/50 border-blue-100">
          <p className="text-blue-800 font-bold mb-1 text-sm uppercase tracking-wider">Total Users</p>
          <div className="text-4xl font-black text-blue-600">1,240</div>
        </div>
        <div className="glass-panel p-6 rounded-3xl bg-amber-50/50 border-amber-100">
          <p className="text-amber-800 font-bold mb-1 text-sm uppercase tracking-wider">Pending NGO Verifications</p>
          <div className="text-4xl font-black text-amber-600">8</div>
        </div>
        <div className="glass-panel p-6 rounded-3xl bg-red-50/50 border-red-100">
          <p className="text-red-800 font-bold mb-1 text-sm uppercase tracking-wider">Safety Flags</p>
          <div className="text-4xl font-black text-red-600">2</div>
        </div>
        <div className="glass-panel p-6 rounded-3xl bg-slate-900 text-white shadow-xl">
          <p className="text-slate-400 font-bold mb-1 text-sm uppercase tracking-wider">System Health</p>
          <div className="text-4xl font-black text-emerald-400">100%</div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="glass-panel rounded-[2rem] overflow-hidden shadow-glass"
      >
        <div className="p-6 bg-white/40 border-b border-slate-200 backdrop-blur-sm flex items-center gap-2">
          <Users className="h-5 w-5 text-slate-700" />
          <h2 className="text-xl font-black text-slate-800">User Management & Verifications</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 border-b border-slate-200">
              <tr>
                <th className="px-8 py-5 text-sm font-black text-slate-700">Organization / User</th>
                <th className="px-8 py-5 text-sm font-black text-slate-700">Type</th>
                <th className="px-8 py-5 text-sm font-black text-slate-700">Documents</th>
                <th className="px-8 py-5 text-sm font-black text-slate-700">Status</th>
                <th className="px-8 py-5 text-sm font-black text-slate-700 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/50">
              {DUMMY_USERS.map((user, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }}
                  key={user.id} 
                  className="hover:bg-white/60 transition-colors"
                >
                  <td className="px-8 py-6">
                    <div className="font-bold text-slate-900 text-lg">{user.name}</div>
                    <div className="text-sm font-medium text-slate-500">{user.email}</div>
                  </td>
                  <td className="px-8 py-6 font-bold text-slate-700">{user.type}</td>
                  <td className="px-8 py-6">
                    {user.docs !== 'N/A' ? (
                      <span className="flex items-center gap-1 text-primary-600 font-bold hover:underline cursor-pointer"><FileText className="h-4 w-4"/> View Docs</span>
                    ) : (
                      <span className="text-slate-400 font-bold">N/A</span>
                    )}
                  </td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black tracking-wide \${user.status === 'pending_verification' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                      {user.status === 'pending_verification' ? 'Review Needed' : 'Verified'}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    {user.status === 'pending_verification' && (
                      <div className="flex justify-end gap-2">
                        <button className="bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white p-2 rounded-xl transition-all shadow-sm" title="Verify User">
                          <CheckCircle className="h-5 w-5" />
                        </button>
                        <button className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-xl transition-all shadow-sm" title="Reject">
                          <XCircle className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
