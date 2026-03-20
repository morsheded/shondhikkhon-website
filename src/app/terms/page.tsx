import { SectionHeading } from '@/components/SectionHeading';

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <SectionHeading subtitle="Legal" title="Terms & Conditions" />
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-3xl mx-auto prose-sm">
          <div className="space-y-10 text-sm text-cream-300/50 leading-relaxed">
            {/* Section 1 */}
            <div className="space-y-4">
              <h3 className="font-display text-lg text-cream-100">1. Booking</h3>
              <ul className="space-y-3 list-none">
                <li className="pl-4 border-l border-maroon-800/30">
                  All photographs and video footage taken during assignments are under copyright
                  protection by Shondhikkhon.
                </li>
                <li className="pl-4 border-l border-maroon-800/30">
                  70% of the total payment must be paid in advance to confirm the booking. The due
                  payment must be cleared on the first day of the event.
                </li>
                <li className="pl-4 border-l border-maroon-800/30">
                  Booking fees are non-refundable and non-transferable in the event of client-initiated
                  cancellations. However, they are refundable if Shondhikkhon cancels with prior notice
                  before the event.
                </li>
                <li className="pl-4 border-l border-maroon-800/30">
                  We do not cover events with opposing teams. Consult with us if you have another
                  professional team before booking to avoid cancellation.
                </li>
                <li className="pl-4 border-l border-maroon-800/30">
                  For events outside Dhaka, additional costs for transportation, accommodation, and food
                  will be added.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h3 className="font-display text-lg text-cream-100">2. During Event</h3>
              <ul className="space-y-3 list-none">
                <li className="pl-4 border-l border-maroon-800/30">
                  We expect our clients to treat our team as they would their own guests. Shondhikkhon
                  reserves the right to withdraw from any event at any stage if any misbehaviour,
                  misleading information, or inappropriate conduct is observed.
                </li>
                <li className="pl-4 border-l border-maroon-800/30">
                  After 1 AM, the client is required to provide transportation if the assigned team
                  requests it due to safety concerns.
                </li>
                <li className="pl-4 border-l border-maroon-800/30">
                  The client assumes all responsibilities and costs for any stolen or damaged equipment
                  during the shoot.
                </li>
                <li className="pl-4 border-l border-maroon-800/30">
                  Shondhikkhon will not be liable for any data loss resulting from electronic or physical
                  accidents.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h3 className="font-display text-lg text-cream-100">
                3. Timing Note Regarding Portraits
              </h3>
              <p className="pl-4 border-l border-maroon-800/30">
                We believe every event carries its own unique story. While portraits are important,
                they alone cannot capture the full narrative of your celebration. To ensure we capture
                beautiful portraits, clients must arrive at the venue on time, ideally before guests
                arrive. A specific time is allocated for portraits, and arriving late may result in
                missing that opportunity. Shondhikkhon will not be held responsible if portraits
                cannot be taken due to delayed arrival.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h3 className="font-display text-lg text-cream-100">4. Social Media Publications</h3>
              <ul className="space-y-3 list-none">
                <li className="pl-4 border-l border-maroon-800/30">
                  We reserve the right to display any photograph or video for business promotion on
                  social media, advertising media, publications, websites, sample albums, etc.
                </li>
                <li className="pl-4 border-l border-maroon-800/30">
                  If any client wishes to publish the photos or videos on social media, we kindly
                  request that credit be given to us.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h3 className="font-display text-lg text-cream-100">5. Delivery Notes</h3>
              <p className="pl-4 border-l border-maroon-800/30">
                We will provide a sneak peek within one week of your event.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h3 className="font-display text-lg text-cream-100">6. Final Delivery</h3>
              <ul className="space-y-3 list-none">
                <li className="pl-4 border-l border-maroon-800/30">
                  Completed within 45 days after the event.
                </li>
                <li className="pl-4 border-l border-maroon-800/30">
                  The client must inform us of any corrections to the videos/photos within three days
                  of the final delivery. After this period, a re-edit charge will apply for any changes.
                  Once the delivery process is finalised, Shondhikkhon will not be held responsible for
                  any data loss.
                </li>
                <li className="pl-4 border-l border-maroon-800/30">
                  The client must download all files from Google Drive within 15 days of delivery. We
                  will clear our drive after 15 days of delivery.
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h3 className="font-display text-lg text-cream-100">7. Add-Ons</h3>
              <p className="pl-4 border-l border-maroon-800/30">
                Express Delivery (7 days) — ৳10,000
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 p-6 rounded-xl border border-cream-300/5 bg-cream-300/[0.02]">
              <p className="text-xs text-cream-300/30 italic">
                Before booking, it is highly requested to read all the above-mentioned terms &amp;
                conditions very carefully. Once the booking is done, we accept the fact that you have
                agreed to all the terms &amp; conditions of Shondhikkhon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
