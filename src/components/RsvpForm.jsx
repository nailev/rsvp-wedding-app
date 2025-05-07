import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useTranslation } from "@/lib/LanguageContext.jsx";

export default function RsvpForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '0',
    message: ''
  });

  const [formState, setFormState] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData(prev => ({ ...prev, attending: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', attending: 'yes', guests: '0', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const formatGuestsLabel = (num) => {
    if (num === '0') return t.rsvp.just_me;
    return t.rsvp.plus_guests.replace('{n}', num);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {formState === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8 border border-green-100 rounded bg-green-50"
        >
          <CheckCircle2 className="mx-auto mb-4 text-green-500 h-12 w-12" />
          <h3 className="text-xl font-medium mb-2">{t.rsvp.success_title}</h3>
          <p className="text-gray-600">{t.rsvp.success_message}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t.rsvp.name} *</Label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.rsvp.name}
                className="rounded-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.rsvp.email} *</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.rsvp.email}
                className="rounded-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>{t.rsvp.attending} *</Label>
            <div className="flex space-x-8">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="attending-yes" name="attending" checked={formData.attending === 'yes'} onChange={handleRadioChange} />
                <Label htmlFor="attending-yes" className="cursor-pointer">
                  {t.rsvp.yes}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="attending-no" name="attending" checked={formData.attending === 'no'} onChange={handleRadioChange} />
                <Label htmlFor="attending-no" className="cursor-pointer">
                  {t.rsvp.no}
                </Label>
              </div>
            </div>
          </div>
          {formData.attending === 'yes' && (
            <div className="space-y-2">
              <Label htmlFor="guests">{t.rsvp.guests}</Label>
              <select 
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-none py-2 px-3 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400"
              >
                <option value="0">{t.rsvp.just_me}</option>
                <option value="1">{formatGuestsLabel('1')}</option>
                <option value="2">{formatGuestsLabel('2')}</option>
                <option value="3">{formatGuestsLabel('3')}</option>
                <option value="4">{formatGuestsLabel('4')}</option>
              </select>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="message">{t.rsvp.message}</Label>
            <Textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.rsvp.message_placeholder}
              className="h-32 rounded-none"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full md:w-auto bg-rose-400 hover:bg-rose-500 rounded-none"
          >
            {formState === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.rsvp.submitting}
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {t.rsvp.submit}
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}