import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Download, Zap } from 'lucide-react'
import Image from 'next/image'
import { TeamSection } from '../../team'

export default function ElectricalServices() {
  return (
    <div className="min-h-screen ">
      <header className="bg-navy-blue p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-2">
          Providing Varity Electical Services
        </h1>
        <div className="bg-orange-400 text-navy-blue p-2 rounded-md inline-block mb-2">
          <p className="font-semibold">Discount 25% Rewiring Services</p>
        </div>
        <Button variant="secondary">Click to Get Discount</Button>
      </header>

      <main className="p-4 md:p-6">
        <div className="md:flex md:gap-6">
          <aside className="mb-6 md:w-1/4">
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-2">
              {[
                'Telecom Installation and Repair',
                'Hosted PBX Solutions',
                'Outdoor/Parking Lot Lighting',
                'Outlets, Circuits and Rewiring',
                'HID Lighting and Control',
                'Lighting Design',
                'Motors and Transformers',
                'Isolated Computer Circuits',
                'Data/Communications Cabling',
                'Ballast/Lamp Replacing',
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-orange-400" />
                  {service}
                </li>
              ))}
            </ul>
          </aside>

          <section className="md:w-3/4">
            <div className="mb-6">
              <Image
                src="/Image22.png?height=300&width=400"
                alt="Electrician working"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <h2 className="text-xl font-bold mb-4">
              Description for Commercial Services
            </h2>
            <p className="mb-6">
              Phosfluorescently engage worldwide methodologies with web enabled
              technology. Interactively coordinate proactive e-commerce process
              centric outside the box thinking completely pursue scalable
              customer service through sustainable potentialities.
            </p>

            <div className="bg-orange-400 text-navy-blue p-4 rounded-lg mb-6">
              <p className="font-semibold">
                The job market of the future will consist of those jobs that
                robots cannot perform. Our blue-collar work is pattern
                recognition, making sense of what you see.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: '24/7 Availability', icon: Clock },
                { title: 'Affordable Price', icon: Download },
                { title: 'Process Technology', icon: Zap },
                { title: 'Free Estimation', icon: Download },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center p-4">
                    <item.icon className="w-6 h-6 mr-2 text-orange-400" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        Globally incubate standards before scalable benefits.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-4">
              Key benefits With Our Service
            </h2>
            <ul className="space-y-2 mb-6">
              {[
                'experience investor Technician.',
                'Your Electrical and Security System.',
                'sources whereas high standards',
                'Credibly innovate granular internal',
                'services for domestic and commercial.',
              ].map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-orange-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
