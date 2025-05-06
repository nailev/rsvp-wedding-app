import React from "react";
import { Button } from "./ui/button.jsx";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Label } from "./ui/label.jsx";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group.jsx";

const RsvpForm = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-pink-700 text-center">RSVP</h2>
      <form className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your full name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>
        <div>
          <Label htmlFor="message">Message (optional)</Label>
          <Textarea id="message" rows="3" placeholder="Leave us a note..." />
        </div>
        <div>
          <Label>Will you attend?</Label>
          <RadioGroup>
            <div>
              <RadioGroupItem id="yes" value="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div>
              <RadioGroupItem id="no" value="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit" className="w-full">Send RSVP</Button>
      </form>
    </div>
  );
};

export default RsvpForm;
