import { useState, type FormEvent } from 'react';
import { X, Check } from 'lucide-react';

interface ApplicationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'membership' | 'consultation';
}

export function ApplicationDrawer({
  isOpen,
  onClose,
  initialType = 'membership',
}: ApplicationDrawerProps) {
  const [inquiryType, setInquiryType] = useState<'membership' | 'consultation'>(initialType);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    profession: '',
    age: '',
    intentions: 'long-term',
    notes: '',
    preferredFormat: 'in-person',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate deliberate, thoughtful concierge processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark backdrop with blur */}
      <div
        className="absolute inset-0 bg-[#101110]/80 backdrop-blur-md transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-[#161716] border-l border-[#E7E1D7]/15 text-[#F1EDE6] p-8 md:p-12 overflow-y-auto flex flex-col justify-between shadow-2xl relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-[#8E8B85] hover:text-[#F1EDE6] transition-colors p-2"
            aria-label="Close application drawer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>

          <div>
            {/* Header */}
            <div className="mb-10">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8B85] block mb-2 font-sans">
                Confidential Dossier · 2026
              </span>
              <h2 className="font-editorial-serif text-3xl md:text-4xl text-[#F1EDE6] tracking-tight">
                {inquiryType === 'membership' ? 'Application for Membership' : 'Private Consultation'}
              </h2>
              <p className="text-xs text-[#8E8B85] mt-2 font-light leading-relaxed">
                Every application is evaluated with strict discretion. We work exclusively with a selective group of vetted members.
              </p>
            </div>

            {/* Type selector tab */}
            <div className="flex border-b border-[#E7E1D7]/15 mb-8">
              <button
                type="button"
                onClick={() => setInquiryType('membership')}
                className={`pb-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 relative ${
                  inquiryType === 'membership'
                    ? 'text-[#F1EDE6] font-medium'
                    : 'text-[#8E8B85] hover:text-[#F1EDE6]/70'
                }`}
              >
                Full Membership
                {inquiryType === 'membership' && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E7E1D7]" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('consultation')}
                className={`pb-3 ml-8 text-xs tracking-[0.2em] uppercase transition-all duration-300 relative ${
                  inquiryType === 'consultation'
                    ? 'text-[#F1EDE6] font-medium'
                    : 'text-[#8E8B85] hover:text-[#F1EDE6]/70'
                }`}
              >
                Private Consultation
                {inquiryType === 'consultation' && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E7E1D7]" />
                )}
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-12 space-y-6">
                <div className="w-12 h-12 rounded-full border border-[#E7E1D7]/30 flex items-center justify-center text-[#E7E1D7] mb-6">
                  <Check className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-editorial-serif text-2xl md:text-3xl text-[#F1EDE6]">
                  Dossier Received in Confidence.
                </h3>
                <p className="text-xs text-[#8E8B85] leading-relaxed">
                  Thank you, {formData.fullName || 'for your introduction'}. Your dossier has been transferred directly to our managing matchmakers. 
                </p>
                <div className="bg-[#101110] border border-[#E7E1D7]/10 p-5 rounded-none space-y-2 text-xs text-[#8E8B85]">
                  <p className="text-[#F1EDE6] font-sans text-[10px] tracking-wider uppercase">Next Steps:</p>
                  <p>1. Internal compatibility audit & geographical alignment review.</p>
                  <p>2. Personal outreach via encrypted channel within 48 business hours.</p>
                  <p>3. Arrangement of confidential introductory conversation.</p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 inline-block text-[11px] tracking-[0.25em] uppercase text-[#101110] bg-[#E7E1D7] px-6 py-3 hover:bg-white transition-colors"
                >
                  Return to Journal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8E8B85] mb-2 font-sans">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Julian Thorne"
                      className="w-full bg-[#101110] border border-[#E7E1D7]/20 px-3 py-2.5 text-xs text-[#F1EDE6] placeholder-[#8E8B85]/40 focus:outline-none focus:border-[#E7E1D7] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8E8B85] mb-2 font-sans">
                      Confidential Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@domain.com"
                      className="w-full bg-[#101110] border border-[#E7E1D7]/20 px-3 py-2.5 text-xs text-[#F1EDE6] placeholder-[#8E8B85]/40 focus:outline-none focus:border-[#E7E1D7] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8E8B85] mb-2 font-sans">
                      Primary Residence / City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Lahore / London / New York"
                      className="w-full bg-[#101110] border border-[#E7E1D7]/20 px-3 py-2.5 text-xs text-[#F1EDE6] placeholder-[#8E8B85]/40 focus:outline-none focus:border-[#E7E1D7] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8E8B85] mb-2 font-sans">
                      Age Range
                    </label>
                    <input
                      type="text"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="e.g. 38"
                      className="w-full bg-[#101110] border border-[#E7E1D7]/20 px-3 py-2.5 text-xs text-[#F1EDE6] placeholder-[#8E8B85]/40 focus:outline-none focus:border-[#E7E1D7] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8E8B85] mb-2 font-sans">
                    Professional Endeavor / Field
                  </label>
                  <input
                    type="text"
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    placeholder="e.g. Architecture, Venture, Film, Medicine"
                    className="w-full bg-[#101110] border border-[#E7E1D7]/20 px-3 py-2.5 text-xs text-[#F1EDE6] placeholder-[#8E8B85]/40 focus:outline-none focus:border-[#E7E1D7] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8E8B85] mb-2 font-sans">
                    Preferred Consultation Setting
                  </label>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredFormat: 'in-person' })}
                      className={`py-2 px-3 border text-left transition-colors ${
                        formData.preferredFormat === 'in-person'
                          ? 'border-[#E7E1D7] text-[#F1EDE6] bg-[#E7E1D7]/10'
                          : 'border-[#E7E1D7]/20 text-[#8E8B85]'
                      }`}
                    >
                      In-Person (Private Lounge)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredFormat: 'encrypted-video' })}
                      className={`py-2 px-3 border text-left transition-colors ${
                        formData.preferredFormat === 'encrypted-video'
                          ? 'border-[#E7E1D7] text-[#F1EDE6] bg-[#E7E1D7]/10'
                          : 'border-[#E7E1D7]/20 text-[#8E8B85]'
                      }`}
                    >
                      Encrypted Video
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8E8B85] mb-2 font-sans">
                    Personal Statement / Intentions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us what brings you to Élan and the life you aspire to share..."
                    className="w-full bg-[#101110] border border-[#E7E1D7]/20 px-3 py-2.5 text-xs text-[#F1EDE6] placeholder-[#8E8B85]/40 focus:outline-none focus:border-[#E7E1D7] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E7E1D7] text-[#101110] py-3.5 px-6 text-xs tracking-[0.25em] uppercase hover:bg-white transition-all duration-300 font-medium disabled:opacity-50"
                  >
                    {isSubmitting ? 'Transmitting In Confidence...' : 'Submit Confidential Application ↗'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E7E1D7]/10 text-[10px] text-[#8E8B85] font-light flex justify-between items-center">
            <span>DISCRETION CHARTER PROTECTED</span>
            <span>ÉLAN PRIVATE REGISTRY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
